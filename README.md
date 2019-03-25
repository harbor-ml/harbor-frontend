# Harbor
Repository for Harbor

## Overview of Project:

This project will serve (at the moment) three purposes:
- Showcase models
- Demo models
- Serve as an API to use models in applications

<p>
We build upon Clipper.ai, which will help users deploy models. From there, we
will feature these deployed models on our site for others to try out and even
use in their own projects. A high-level description of the details of Harbor
is described below:
</p>

![harbor-graphic](./documentation/assets/harbor-graphic.svg)

## v3:
(coming soon)

## v2:
![harbor-gif-v2](./documentation/assets/harbor-gif-v2.gif)

## v1:
![harbor-gif-v1](./documentation/assets/harbor-gif-v1.gif)

## Instructions:
- If you don't have node and/or npm installed, do that first.
- To set up locally, clone the repo and in terminal enter `npm install`
- If you run into any dependency errors, we can deal with them later (not a big deal)
- Enter `npm start` and then play around with it!

## Deployment Instruction (the same is true for backend/just different pem/ip):
- `sudo chmod 400 harbor-frontend-pem.txt`
- `ssh -i harbor-frontend.pem.txt ubuntu@{IP_ADDRESS}`
- `tmux` or `tmux attach-session -t {id_of_session}`
- `git pull origin master` just in case you want to get updated code
- `npm run build`
- `serve -s build`
- `Ctrl+b` release `d`
- `Ctrl+C` for killing the server on tmux session
- Super good resource: https://linuxize.com/post/getting-started-with-tmux/

## Technology Used/Purposes:
- React: Dynamic website capabilities
- Redux: Allows state to be shared between components
  - Reducers/Actions in src/redux allow us to edit that overall state and also
    do HTTP requests in an organized manner
- Thunk: Middleware for Redux to handle actions (see src/redux)
- Material-UI: Solid CSS styler around React components

## Todos:
- Frontend
  - Define https requests and render in react webapp
  - Route to backend
  - Verify picture uploading success
- Backend
  - description of model, url for requests, params
  - Decide on what stack to use: mongo/express/mongoose or sql/django/flask

## Notes:
- Raymond is refactoring code within inputfields
  - Getting rid of unnecessary renderings within Components
  - Make model page dumb, Make inputfields smart
  - Call initialLoadWithSelection within inputfields
- Picture Uploading
  - Using either react-dropzone, react-image-uploader, or my own uploader

______

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
