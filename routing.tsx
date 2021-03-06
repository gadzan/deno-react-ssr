import {
  React,
  Router,
  ReactDOMServer
} from "./dep/index.ts";
import App from "./App.tsx";

const bundle = `
import React from "https://dev.jspm.io/react@16.13.1";
        import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
        ReactDOM.hydrate(React.createElement(${App}), document.querySelector('#app'));
`;
const bundlePath = '/bundle.js';


const html =
  `<html>
    <head>
      <script type="module" src="${bundlePath}"></script>
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="app">${(ReactDOMServer as any).renderToString(<App />)}</div>
    </body>
  </html>`;

const router = new Router();

router
  .get("/", (context: any) => {
    context.response.body = html;
  })
  .get(bundlePath, (context: any) => {
    context.response.type = 'application/javascript';
    context.response.body = bundle;
  })

export default router;
