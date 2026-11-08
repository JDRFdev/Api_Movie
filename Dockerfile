FROM node:24-slim 

WORKDIR /src

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .


EXPOSE 3000

ENV PORT=3000

CMD ["npm","start"]
