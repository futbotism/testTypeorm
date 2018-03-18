FROM node:alpine

RUN mkdir -p /src/app
RUN npm install -g nodemon
WORKDIR /src/app
COPY . /src/app
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
