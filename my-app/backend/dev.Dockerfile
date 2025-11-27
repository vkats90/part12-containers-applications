FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --production=false

COPY --chown=node:node . .

ENV DEBUG=playground:*

USER node

CMD ["sh", "-c", "npm run migration:up && npm run dev -- --host"]