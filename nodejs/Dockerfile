# BASE IMAGE
FROM node:alpine
WORKDIR /usr/app
# ADD ENTRYPOINT

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]