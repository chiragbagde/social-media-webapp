import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from './tweets'
import * as serviceWorker from './serviceWorker';

const app1 = document.getElementById('root')
if (app1){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    app1
  );
}

const app2 = document.getElementById('tweetme')
if (app2){
  ReactDOM.render(
    <React.StrictMode>
      <TweetsComponent />
    </React.StrictMode>,
    app2
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
