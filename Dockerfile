FROM node:16

WORKDIR /usr/app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 7090

RUN npm run build
COPY ./src/pb/*.proto ./dist/pb

CMD ["npm", "start"]