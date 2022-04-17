const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

// JSON parser, cors, body parser, statically serve the client side assets.
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

// Webpack DevServer
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/dist', express.static(path.resolve(process.cwd(), './dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(process.cwd(), './client/src/index.html'));
  });
}

// catch-all endpoint handler
app.use((req, res) => {
  return res.status(400).send('Page not found.');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listening on the port
app.listen(PORT, () => {
  console.log('Magic happening on ' + PORT);
});
