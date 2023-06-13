FROM node:lts AS dist

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

ENV NODE_ENV=production

EXPOSE 1337

CMD npm run start
