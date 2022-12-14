FROM node:alpine3.16
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]