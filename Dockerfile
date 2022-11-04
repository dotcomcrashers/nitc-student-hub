FROM node AS builder
WORKDIR /frontend
COPY ./frontend ./
RUN npm install --force
RUN npm run build

FROM node as runner
WORKDIR /backend
COPY ./backend .
COPY --from=builder /frontend/build public
RUN npm install
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "start"]
