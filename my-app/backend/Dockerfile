FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production=false

COPY --chown=node:node . .

ENV DEBUG=playground:*

USER node

CMD ["sh", "-c", "npm run migration:up && npm start -- --host"]