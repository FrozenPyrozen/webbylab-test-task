## About app
This is my first test-task app so I doubt a little about the correctness of my architecture. So Redux action types, reducers, actions etc. in **src/modules/movies**, store for Redux in **src/store**. All components accordingly lie in **src/components** folder. I tried to separate the component logic from its view. And I decided not to use ready-made components like material-ui and practice writing my own. so I succeeded or not, it's up to you)

P.S. This app fetches data to https://cloud.mongodb.com. There is a connection string in **server/config/db**.
P.S.S. I know that it is unsecure

## Instaliation

1. Clone this repository:
```
$ git clone https://github.com/FrozenPyrozen/webbylab-test-task.git
```
2. Change the current directory to **webbylab-test-task**:
```
$ cd ./webbylab-test-task
```
3. Install dependencies using npm/yarn:
```
$ npm install
```
```
$ yarn install
```
4. Run the backend server in one terminal:
```
$ npm run server
```
5. Run app in another terminal:
```
$ npm start
```

## Default ports

Application will be run on http://localhost:3000/

Server will be run on http://localhost:8080/
