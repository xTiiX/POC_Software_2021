FROM node:current-alpine

EXPOSE 8080
ENV HELLO_MESSAGE 'world'
ENV SERVER_PORT 8080

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY tsconfig.json .eslintrc.js src ./

ENTRYPOINT ['npm', 'start']
CMD npm start
