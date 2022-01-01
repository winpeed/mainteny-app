FROM node:14

RUN mkdir /mainteny

WORKDIR /mainteny

COPY ./package.json /mainteny

RUN npm install

COPY . /mainteny

RUN npm run build

CMD ["npm", "start"]