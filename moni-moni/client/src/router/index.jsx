import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Home from "../features/home/Home";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import Checkout from "../features/checkout/Checkout";
import { verifyTokenAsync } from "../features/auth/asyncActions";
import PrivateRoute from "./PrivateRoute";
import FundraiserDetails from "../features/fundraiser/FundraiserDetails";
import { useGlobalContext } from "../context";
import { groupBy } from "lodash";
import axios from "../utils/axios";

const Router = () => {
  const { isAuthenticated, verifyStatus } = useSelector((state) => state.auth);
  const { loading, setLoading } = useGlobalContext();
  const [fundraisers, setFundraisers] = useState({});
  const [allFundraisers, setAllFundraisers] = useState({});
  const [mainFundraiser, setMainFundraiser] = useState();
  const [featuredFundraisers, setFeaturedFundraisers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyTokenAsync());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get("/api/v1/catalogue/fundraisers/");
      let data = await res.data;
      setAllFundraisers(data);
      console.log("hello", allFundraisers);
      setMainFundraiser(data[0]);
      setFeaturedFundraisers(data.slice(1, 3));
      setFundraisers(groupBy(data, "category"));
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  if (verifyStatus === "start" || loading) {
    return <Spinner open={true} />;
  }

  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fundraisers={fundraisers}
              mainFundraiser={mainFundraiser}
              featuredFundraisers={featuredFundraisers}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Home
              fundraisers={fundraisers}
              mainFundraiser={mainFundraiser}
              featuredFundraisers={featuredFundraisers}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          exact
          path="/"
          element={<PrivateRoute auth={isAuthenticated} v={verifyStatus} />}
        >
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        {allFundraisers.map((fundraiser) => {
          <Route
            path={`/fundraisers/${fundraiser.slug}`}
            element={<FundraiserDetails fundraiser={fundraiser} />}
          />;
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
