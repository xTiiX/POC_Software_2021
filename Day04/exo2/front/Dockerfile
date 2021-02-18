FROM node:current-alpine

EXPOSE 3000

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY tsconfig.json src public ./

ENTRYPOINT ['npm', 'start']
CMD npm start
