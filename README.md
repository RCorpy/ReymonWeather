This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also uses the API from Openweathermap, so big thanks to them.

#### Table of contents

- [How to run](#How-to-run-)
- [Available Scripts](#Available-Scripts-)
- [Frontend](#Frontend-)

## How to run

- Open your command line interface in the folder you wish to create this project
- Type: $ git clone https://github.com/RCorpy/ReymonWeather.git
- Go inside the Rello folder, $ cd ReymonWeather
- Install dependencies, you might need sudo privileges: $ sudo npm i
- Ready to launch! $ npm start

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Frontend

As you can see, the frontend is very simple, using the assets the background will change according to the weather in the region, and that we know by calling the weather API that will return an object with tons of information, the ones we will be using are the name of the city, country, temperature and weather