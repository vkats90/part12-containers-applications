FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

USER node

CMD ["sh", "-c", "npm run migration:up && npm start -- --host"]