FROM node
WORKDIR /usr/app/frontend
RUN npm install
RUN npm run build

WORKDIR /usr/app/backend
RUN npm install
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "start"]
