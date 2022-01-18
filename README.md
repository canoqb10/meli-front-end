This Project is a Front End Practice Test

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
├── meli-finder
│   ├── .next
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
│   ├── ignore.eslintrc.json
│   ├── jest.config.js
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── tsconfig.json
├── meli-middlend
│   ├── controllers
│   ├── dist
│   ├── node_modules
│   ├── services
│   ├── utils
│   ├── .env
│   ├── index.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── server.ts
│   └── index.ts
├── README.md
└── node_modules
    └── [...]

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

`npm run build -w @meli/finder`
`npm run start -w @meli/finder`

The web app runs in http://localhost:3000

## Boot API
Start the server meli-middlend

`npm run build -w @meli/middlend`
`npm run start -w @meli/middlend`

The api app runs in http://localhost:3001

## Author

`Jose Alberto Cano Govea`
`juliojacg@hotmail.com`
`https://www.linkedin.com/in/jose-alberto-cano-govea-4b882370`