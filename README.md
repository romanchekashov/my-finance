# my-finance

Если у тебя не стартует проект, то попробуй установить глобально react-scripts:
#### npm -g install react-scripts

## Development:
В Procfile закоментируйте #heroku-prod: npm install && npm run server.
В .env закоментируйте #,"NODE_ENV":"production".

## Production deploy to heroku:
В Procfile закоментируйте: #web: cd client && npm start и #api: npm run server.

Для старта проекта выполните команду:
npm i && npm start
