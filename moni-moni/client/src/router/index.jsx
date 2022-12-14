import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Home from "../features/home/Home";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import Pricing from "../features/fundraiser/Pricing";
import Checkout from "../features/checkout";
import { verifyTokenAsync } from "../features/auth/asyncActions";
import PrivateRoute from "./PrivateRoute";
import Fundraiser from "../features/fundraiser";
import { useGlobalContext } from "../context";
import { groupBy } from "lodash";
import axios from "../utils/axios";
import { v4 as uuidv4 } from "uuid";
import Error from "../features/error";
import Discover from "../features/discover";
import Create from "../features/create";
import Image1 from "../assets/pexels-zachariah-schrueder-5056573.jpg";
import Image2 from "../assets/pexels-mentatdgt-1185433.jpg";
import Image3 from "../assets/pexels-mathias-reding-11421247.jpg";
import Image4 from "../assets/pexels-rebecca-zaal-764681.jpg";
import Image5 from "../assets/pexels-pixabay-50709.jpg";
import Image6 from "../assets/pexels-markus-spiske-2990650.jpg";
import Image7 from "../assets/default.png";
import Image8 from "../assets/pexels-thibault-trillet-167590.jpg";
import Image9 from "../assets/pexels-camille-12457506.jpg";
import Image10 from "../assets/pexels-roxanne-shewchuk-2405944.jpg";
import Image11 from "../assets/pexels-someimage.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
];

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
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i].image = images[i];
      }
      setAllFundraisers(data);
      setMainFundraiser(data[0]);
      setFeaturedFundraisers(data.slice(1, 3));
      setFundraisers(groupBy(data.slice(3), "category"));
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(fundraisers);

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
        {allFundraisers.map((fundraiser) => {
          return (
            <React.Fragment key={uuidv4()}>
              <Route
                key={uuidv4()}
                path={`/fundraisers/${fundraiser.slug}`}
                element={<Fundraiser fundraiser={fundraiser} />}
              />
              <Route
                key={uuidv4()}
                path={`/fundraisers/${fundraiser.slug}/pricing`}
                element={<Pricing fundraiser={fundraiser} />}
              />
              <Route
                exact
                path="/"
                element={<PrivateRoute auth={isAuthenticated} />}
              >
                <Route
                  key={uuidv4()}
                  path={`/${fundraiser.slug}/checkout`}
                  element={<Checkout fundraiser={fundraiser} />}
                />
              </Route>
            </React.Fragment>
          );
        })}
        <Route
          exact
          path="/discover"
          element={<Discover data={allFundraisers} />}
        />
        <Route exact path="/start-a-fundraiser" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
