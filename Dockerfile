FROM node:argon

COPY [".", "/src/"]

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]