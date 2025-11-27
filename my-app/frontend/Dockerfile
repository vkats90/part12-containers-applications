FROM node:24 AS base 

WORKDIR /usr/src/app

COPY . .

RUN npm ci --include=dev

FROM base AS prod

ENV VITE_BACKEND_URL=http://localhost:8000/api/

RUN npm run build


FROM nginx:1.25-alpine


COPY --from=prod /usr/src/app/dist /usr/share/nginx/html