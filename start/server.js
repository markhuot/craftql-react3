// https://dribbble.com/shots/2162114-Fjord-Free-Landing-Page
// https://dribbble.com/shots/2616424-New-Providence-Free-PSD-Landing

import express from 'express';
const app = express();
import CssSet from '../lib/CssSet.js';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Home from '../components/Home.jsx';

app.use(express.static('public'));

app.get('*', function (req, res) {
  const html = renderToStaticMarkup(React.createElement(Home, {}))
  // const html = renderToString(React.createElement(Home, {}))
  res.header('Content-type', 'text/html');
  res.end(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width"/>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
        <style type="text/css">${CssSet.getInstance().getStyles()}</style>
      </head>
      <body>
        <div id="reactroot">${html}</div>
      </body>
    </html>`);
});

app.listen(3000, () => {
  console.log('🎉  Webserver listening at http://localhost:3000/');
});
