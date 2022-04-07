FROM node:current-alpine3.14

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node *.js ./
COPY --chown=node:node containerstart.sh ./

USER node

EXPOSE 3001

CMD ["sh" , "containerstart.sh"]
