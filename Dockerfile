FROM node:current-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["sh" , "containerstart.sh"]
