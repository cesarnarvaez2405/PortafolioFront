FROM node:20

COPY [".", "app/src/"]

WORKDIR /app/src

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev"]