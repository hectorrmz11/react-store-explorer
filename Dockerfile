#stage 1
FROM node:16.0.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html