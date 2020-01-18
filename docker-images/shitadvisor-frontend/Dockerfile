FROM node:10.15.1

WORKDIR /usr/app

COPY package.json ./

COPY src ./src

COPY public ./public

RUN npm install -qy

EXPOSE 3000

USER node

CMD ["npm", "start"]