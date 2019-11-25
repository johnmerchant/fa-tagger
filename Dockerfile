FROM node:13.1-alpine

RUN apk add util-linux

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

ADD . .
RUN yarn build

FROM nginx:alpine
COPY --from=0 /app/dist/* /usr/share/nginx/html/