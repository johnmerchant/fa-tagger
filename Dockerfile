FROM node:13.1-alpine

RUN apk add util-linux

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

ADD . .
RUN yarn build