FROM python:3.8-slim

WORKDIR /server

COPY ./requirements.txt requirements.txt

RUN apt update && apt install -y libpq-dev gcc

RUN pip install --upgrade pip setuptools
RUN pip install -r requirements.txt --no-cache-dir

COPY . .
