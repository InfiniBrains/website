FROM node:lts

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npm run build

ENV NODE_ENV=production

EXPOSE 1337

CMD npm run start
