FROM node:18.10.0-alpine as build
WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD npm start
