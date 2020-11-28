# Базовый слой
FROM node:12

# создание директории приложения
WORKDIR /usr/src/app
COPY . .

RUN npm install  && npm run build
# продакшн
# RUN npm ci --only=production

# копируем исходный код


EXPOSE 80

CMD [ "node", "server.js" ]
