FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install --save-dev @babel/core @babel/node

COPY . .

EXPOSE 3000
CMD npm run dev 
