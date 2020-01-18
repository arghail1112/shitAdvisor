FROM node:10.15.1

WORKDIR /usr/app

COPY package.json ./

COPY routes ./routes/

COPY utils ./utils/

COPY models ./models/

COPY index.js ./

COPY mongodb.js ./ 

COPY conf.js ./ 

RUN chown -R node /usr/app/

RUN npm install -qy

RUN npm install -g nodemon

EXPOSE 8081

USER node

CMD ["npm", "run", "dev"]