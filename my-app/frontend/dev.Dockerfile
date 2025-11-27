FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --production=false

COPY . .

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]