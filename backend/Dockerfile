# Stage 1
FROM node:16 as build-stage

WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .