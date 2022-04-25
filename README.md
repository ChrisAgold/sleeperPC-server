### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - PORT=,MONGO_URL, JWT_SECRET, JWT_LIFETIME


- Example: PORT=5000


- MONGO_URL: https://www.mongodb.com/ -create account and connect to MongoDB


- JWT_SECRET: https://www.allkeysgenerator.com/ -choose -encryption key
  256-bit


- Example: JWT_LIFETIME=2d
```sh
npm start
```

- visit url http://localhost:5000/

#### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side with client project
- copy/paste assets from complete project
```sh
cd ..
```
```sh
npm start
```
