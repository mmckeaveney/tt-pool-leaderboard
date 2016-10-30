# endpoint-search-js
Created by Martin McKeaveney via the GitHub Connector

This is the main Javascript application for LE2.0 endpoint search.

This app is built with webpack and written in Redux and React. Any building or tasks are performed through npm scripts. 

### Pre Reqs
**You must be running on Node 4.0 or higher** you can install/update to the latest stable version of node using [n](https://www.npmjs.com/package/n).

### Up and Running 

first pull this repo and perform an -
```
npm install
```

This will pull down all the relevant npm packages for this application. You can then start the application or build it with a variety of NPM scripts.

NPM scripts available:

Build the application with webpack and output the bundled JS in the **/dist** folder.
```
npm run build
```

Run the tests for the application. We use Jest as our test runner.
```
npm run test
```

Build and run the application with webpack-dev-server. This server supports hot reloading and will build and reload the page when you make any changes to the code. 
```
npm run dev
```

Build the application with webpack and output the **minified** bundled JS in the **/dist** folder.
```
npm run webpackProd
```

Build the application with webpack and start up an express server which acts off dummy data. This is the preferred choice for development and also supports hot reloading through the use of webpack-hot-middleware.
```
npm run dev:mock
```


### Product Owners
| Name | Email |
|------|-------|
| Martin McKeaveney | [martin_mckeaveney@rapid7.com](martin_mckeaveney@rapid7.com) |
| Dan Skelton | [daniel_skelton@rapid7.com](daniel_skelton@rapid7.com) |
