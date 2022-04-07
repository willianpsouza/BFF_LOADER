FROM node:current-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/node_modules

WORKDIR /home/willian_pires/Programas/NODE/jose

COPY package*.json ./

RUN npm install

COPY . .

copy --chown=node:node . .

USER node

EXPOSE 3000

CMD ["node" , "backend.js"]

CMD ["node" , "frontend.js"]