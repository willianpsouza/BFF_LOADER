FROM node:current-alpine3.14

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["sh" , "containerstart.sh"]
