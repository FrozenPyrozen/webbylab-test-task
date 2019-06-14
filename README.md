## About app
This is my first test-task app so I doubt a little about the correctness of my architecture. So Redux action types, reducers, actions etc. in **src/modules/movies**, store for Redux in **src/store**. All components accordingly lie in **src/components** folder. I tried to separate the component logic from its view. I have succeeded or not you decide)

P.S.This app fetches data to https://cloud.mongodb.com. There is a connection string in **server/config/db**.

## Instaliation

1. Clone this repository:
```
$ git clone https://github.com/FrozenPyrozen/webbylab-test-task.git
```
2. Install dependencies using npm/yarn:
```
$ npm install
```
```
$ yarn install
```
3. Run the backend server in one terminal:
```
$ npm run server
```
4. Run the backend server in another terminal:
```
$ npm start
```

## Default ports

Application will be run on http://localhost:3000/

Server will be run on http://localhost:8080/
