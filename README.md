## Особенности сборки

- используется [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
- выбираете любой препроцессор SASS/SCSS/LESS
- ваш CSS и JS оптимизируется и минифицируется
- установлен пакет webpack-dev-server - вам не потребуется постоянно перезагружать браузер
- поддержка [TypeScript](https://www.typescriptlang.org/)
- анализ вашего бандла с помощью пакета [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) | команда `npm run stats`
- [ESlint](https://eslint.org/) позволит сделать ваш код приятным и чистым
- Поддержка и чтение файлов CSV/XML, на выходе получаем массив данных

## Файловая структура

```
webpack-frontend-template
├── dist
├── src
│   ├── assets
│       ├── fonts
│       └── images
│   ├── styles
│   ├── index.html
│   └── index.ts
├── webpack.config.js
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
└── .prettierrc
```

> В зависимости от фреймворка, вы можете переделать организацию файлов в папке src т.к. обычно она отличается

## Команды

- `yarn run dev` - собираем development
- `yarn run build` - собираем production
- `yarn start` - слежение за файлами и открываем в браузере
- `yarn run stats` - смотрим размеры и статы бандла

## Установка

Установим все необходимые пакеты из package.json

```bash
yarn install
```

Запускаем

```bash
yarn start
```
