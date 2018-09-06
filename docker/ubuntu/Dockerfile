FROM ubuntu:16.04

WORKDIR /usr/src/app

RUN apt-get update -yq
RUN apt-get upgrade -yq
RUN apt-get dist-upgrade -yq
RUN apt-get install gnupg curl nano -yq

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash

RUN apt-get install --yes nodejs

RUN node -v
RUN npm -v

RUN npm install -g yarn

RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y