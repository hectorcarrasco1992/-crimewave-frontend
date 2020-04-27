# Crime Wave

This App originally was supposed to allow the user to input their address which will give them their latitude and longitude. The user would then input that information and get back the recent crimes reported through the Crimeometer api along with a map.

### Technical Difficulties
Disappointingly however, the api reached its call limit and i was no longer able to pull the data and map from the api.


## NPM Install
run npm install to get all the packages needed to run the app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## .env

Must create a .env file and include your own 
* Session_Secret
* MONGODB_URI

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Routes

In in the _crimeWave-backend_ folder you will find routes that are then used in the frontend to pull data and manipulate.

* _'/crime_' && _'/crimes_' has the get and post routes thats allow user to get the crimes from the data base and also report a crime and send it to the database
* _crime/number_ gets the user a random fact about a random user that gets pulled from [numbersapi ](http://www.numbersapi.com/#42)
