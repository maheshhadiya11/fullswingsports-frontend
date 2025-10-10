FROM node:18.13.0 AS build

WORKDIR /app

COPY package.json .

COPY . .

COPY .env .env

RUN npm install

RUN npm run build --prod

EXPOSE 3000

CMD ["npm", "start"]
