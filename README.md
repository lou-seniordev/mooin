<p align='center'>
<img width="50%" src='./docs/images/logo.png'>
</p>

<h1>
<p align='center'>
Moni Moni - Crowdfunding Platform
</p>
</h1>

<p align='center'>
<img src="https://github.com/amal-thundiyil/moni-moni/actions/workflows/actions.yml/badge.svg">
<a href="https://github.com/amal-thundiyil/moni-moni/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg">
<img src="https://visitor-badge.laobi.icu/badge?page_id=amal-thundiyil.moni-moni">

## 📌 Introduction

Moni Moni is a crowdfunding website for individuals and small scale businesses. Users can post their loan or donation requests along with the interest or other rewards they can offer and the story backing the fundraiser. Backers can view the request and decide whether they want to pledge or invest depending upon the rewards and the story. It is meant to be as simple as possible to facilitate the unempowered population of our world.

## 🤖 Usage

With Docker and docker-compose installed:

```sh
docker-compose up --build
```

Otherwise, you can also use the [Makefile](Makefile):

```sh
python3.8 -m venv venv
source venv/bin/activate
make install-dev
make frontend-start
make backend-start
```

## 🎓 Description

### 👨‍💻️ Technology Stack

- [React.js](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [Django](https://github.com/django/django)
- [PostgreSQL](https://www.postgresql.org/)

### ✨ Features

- A beautiful space to tell your story
- Simple to use, create fundraisers either by name or anonymously
- Clearly detail fees
- Super fast and responsive design
- Handles payments via [PayPal](https://paypal.com/)
- Open source, so adapt it to your needs

### ⏳️ Background

In India people are turning to private moneylenders as banks are turning them away. People fear an increase in farmer suicides as more and more farmers approach moneylenders in desperation. The credit policy reform has just remained on paper ([source](https://indianexpress.com/article/india/as-lending-by-rural-banks-dips-farmers-turn-to-moneylenders-in-maharashtra-5091469/)).

A significant portion of debt from non-institutional sources is used for other household expenditure. The data indicates that better-off households have greater access to formal-sector credit and use it for more income-generating purposes. The top 10 per cent rural households in terms of asset ownership spend almost two-thirds of their institutional debt and 40 per cent of non-institutional debt on farm/non-farm business, whereas the bottom 10 per cent spend half of their total debt on household expenditure.

Access to institutional credit is largely determined by the ability of households to furnish assets as collateral.The report shows that the top 10 per cent of asset-owning households have borrowed 80 per cent of their total debt from institutional sources, whereas those in the bottom 50 per cent borrowed around 53 per cent of total debt from non-institutional sources. Moreover, the Debt-Asset Ratio (DAR) of the bottom 10 per cent asset-owning households in rural India is 39, much higher than the DAR of 2.6 estimated for the top 10 per cent households. This, coupled with higher borrowing from non-institutional sources, acts as a debt trap for households with fewer assets. The low asset ownership of marginalised social groups curtails their access to institutional credit.

Bankers and private financial institutions erroneously believe that a poor person takes a microcredit loan because she cannot save. In reality, if you go to any remote area in India and ask any woman how much she has saved in the post office, you will find huge numbers. They are able to save because of village postal agents who collect their savings from their doorstep. Greater accessibility has major benefits for not only the customer but also the supplier ([source](https://indianexpress.com/article/opinion/columns/financial-inclusion-rural-economy-nano-enterprises-7506874/)).

### 🤷 Why Moni Moni?

Now you may ask why Moni Moni and not the other big crowdfunding platforms.

Platforms like [Kickstarter](https://www.kickstarter.com/), [Indiegogo](https://www.indiegogo.com/), and [everydayhero](https://www.everydayhero.com/) are great for attracting attention to important campaigns, but they charge high fees. Including credit processing fees, they both charge around 8%. That money goes toward supporting the platform, and not the cause. And that's fine if raising funds for a for-profit venture, but my mission is non-profit.

Then come the do-it-yourself options. There are many HTML templates out there, some free and others not. However, they lack any behind-the-scenes logic to actually handle donations. Adding a PayPal button is easy, but that doesn't allow donors to track campaign progress.

It is for all of these reasons I created Moni Moni. It's entirely open source and yours to use as you wish. I think it's also an example of how easy it can be to develop cool, interactive stuff in React and Django. I hope you find it useful, and I hope you will consider [contributing](#CONTRIBUTING) to the project as well.

## 🙏 Contributing

Please read the [contributing guidlines](CONTRIBUTING.md). To setup this project locally:

## 📝 Further Changes to be Done

- [ ] Add credit score to every individual or business using Machine Learning.
- [ ] Add options to accept funding made with NFTs and digital currency.
