


Welcome to the Movie Search App! 🎬🍿

This is a simple React app where you can search for movies by title and get detailed information about them, like the movie's title, genre, release year, and even its poster. It's powered by the OMDB API, which gives you access to a huge database of movies.

Features:
Search for any movie by title.
See details about the movie: Title, Genre, Release Year, and Poster.
Automatically loads a default movie ("Clueless") when the app starts.
Fully functional with React hooks (useState, useEffect) and state lifting.


Setup:
To get this app up and running on your local machine, follow these steps:

Clone this repository:
bash:
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

Install dependencies:
npm install


Start the app:
npm start
Open your browser and go to http://localhost:3000. You should see the app running!

How it Works:
The app has two main components:
Form: Where you can type in a movie title and hit "Submit" to search.
MovieDisplay: Displays the movie details once it's fetched from the OMDB API.
We use the useState hook to manage the movie data and useEffect to fetch a default movie ("Clueless") on page load.
The getMovie function fetches the movie data and updates the state, which is then passed to the MovieDisplay component to render.
API Key:
This app uses the OMDB API for movie data, and you'll need an API key. You can get your own key here or use the included test key:
98e3fb1f

Want to Try Something Cool?
Feel free to modify the app to fetch a random movie on every refresh! Or maybe add features like displaying multiple movie search results or showing movie ratings. The sky's the limit!

Enjoy exploring movies with the app! 🎥👀





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
