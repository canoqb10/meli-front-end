This is a Project related to MeLi technical challenge to Front-End 

It is structured into a Javascript Mono Repository

## Table of Contents

- [Folder Structure](#folder-structure)
- [Set Up Project](#dependencies)
    - [Boot API](#boot-api)
    - [Boot WEB SPA](#boot-web-spa)
- [Author](#author)


## Folder Structure

The folder structure in the app, it should look something like:

```
.
├── README.md
├── tsconfig.base.json
├── package.json
├── package-lock.json
├── jest.config.js
├── .prettierrc.json
├── .prettierignore
├── .eslintrc.json
├── .eslintignore
├── meli-items-finder
│   ├── __tests__
│   ├── lib
│   ├── pages
│   ├── public
│   ├── styles
│   ├── test
│   ├── README.md
│   ├── .babelrc
│   ├── .env
│   ├── .eslintignore
│   ├── .prettierrc.json
│   ├── .prettierignore
│   ├── babel.config.js
│   ├── ignore.eslintrc.json
│   ├── jest.config.js
│   ├── jest.setup.js
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── testUtils.ts
│   └── tsconfig.json
├── services
│   ├── items
│   │   ├── __tests__
│   │   ├── controllers
│   │   ├── services
│   │   ├── utils
│   │   ├── .env
│   │   ├── index.ts
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── server.ts
│       └── index.ts
└── README.md
```

## Set Up Project

Is required the next dependencies for run the app:

    node 12.x.x or higher
    npm 7.x.x or higher

Install dependencies

In the root folder
    
`npm install`
`npm fund`

## Boot WEB SPA        

Start server of the meli-finder

`npm run build -w @meli/items-finder`
`npm run start -w @meli/items-finder`

The web app runs in http://localhost:3000

## Boot API
Start the server to items service

`npm run build -w @meli/items-service`
`npm run start -w @meli/items-service`

The api app runs in http://localhost:3001

## Testing

Unit tests and integration tests suites are configured

Run items service tests

`npm run test -w @meli/items-service`

Run items finder tests

`npm run test -w @meli/items-finder`

## Author

`Jose Alberto Cano Govea`
`juliojacg@hotmail.com`
`https://www.linkedin.com/in/jose-alberto-cano-govea-4b882370`