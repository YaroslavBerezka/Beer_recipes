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
# Beer_recipes

Technologies:
● react.js
● zustand (https://github.com/pmndrs/zustand)
Resources:
● https://api.punkapi.com/v2/beers?page=n
Task description:
You will need to create an app that should display a list of beer recipes. Users should be able to
scroll through a list of recipes and to view a single recipe.
Detailed explanation:
● Get a list of recipes on initial load, save them in the zustand store
(https://api.punkapi.com/v2/beers?page=1)
● The amount of recipes rendered should always be 15
● Implement multiple selection of recipes. User can select multiple recipes by clicking on
recipes with the mouse right button. If user selected at least one recipe, the "Delete"
button should appear somewhere.
● If the user clicks the "Delete" button, selected items should be removed from rendered
list (but still 15 recipes should be rendered).
● Users can deselect recipe if item is clicked one more time.
● Users can go to a single recipe page by clicking on recipe card with mouse left button.
● If there is no more recipes to show, you should make another API request to get another
25 recipes.
Additional options:
● Only 5 recipes should be visible on a current screen.
● The amount of recipes rendered should always be 15.
● Implement lazy scroll functionality. If the user will scroll to the bottom of the list, the first 5
recipes should be removed from render and next 5 should be added. This way user will
be able to see 5 new recipes but the rendered amount will always be 15.