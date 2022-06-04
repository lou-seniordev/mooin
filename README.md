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
<a href="https://github.com/amal-thundiyil/moni-moni/pulls"><img src="https://img.shields.io/badge/PR-Welcome-brightgreen.svg"></a>

</p>

## 📌 Introduction

Moni Moni is fundamentally a crowdfunded small-scale loaning service. Users can post their loan requests along with the interest they can payback and the reason they want money for, other users can view the request and decide whether they want to invest in the person depending upon the interest rate and the reason for request.

## 👨‍💻️ Technology Stack

- [React.js](https://github.com/facebook/react)
- [Material UI](https://github.com/mui/material-ui)
- [Django](https://github.com/django/django)
- [Amazon Web Services (AWS)](https://github.com/aws)

## 🙏 Contributing

Please read the [contributing guidlines](CONTRIBUTING.md). To setup this project locally:

### 🐋 Using Docker

With Docker and docker-compose installed, run docker-compose up --build

```sh
docker-compose up --build
```

Open the browser at http://localhost:8080/. 👨‍🏭️

### 🛠️ Other

Change the directory to the `moni-moni/client/` folder and run:

```
npm start
```

Change the directory to the `moni-moni/server/` folder and run:

```sh
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

## Description

<p align="center">
    <img src="./docs/images/Arch.png">
</p>

## 📝 Further Changes to be Done

- [ ] Add options to accept funding made with NFTs and digital currency.
