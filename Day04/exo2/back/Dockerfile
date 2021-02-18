FROM node:current-alpine

EXPOSE 3000

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY tsconfig.json tsconfig.build.json nest-cli.json src test ./

RUN npm run build
ENTRYPOINT ['npm', 'start:prod']
CMD npm run start:prod
