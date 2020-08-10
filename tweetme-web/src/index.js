import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FeedComponent,TweetsComponent,TweetsDetailComponent} from './tweets'
import * as serviceWorker from './serviceWorker';
import {ProfileBadgeComponent} from './profiles';

const app1 = document.getElementById('root')
if (app1){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    app1
  );
}

const e = React.createElement
const app2 = document.getElementById('tweetme')
if (app2){
  // console.log(app2.dataset);

  ReactDOM.render(e(TweetsComponent, app2.dataset),app2);
}

const tweetFeedE1 = document.getElementById('tweetme-feed')
if (tweetFeedE1){
  // console.log(app2.dataset);

  ReactDOM.render(e(FeedComponent, tweetFeedE1.dataset),tweetFeedE1);
}

const tweetDetailElements = document.querySelectorAll(".tweetme-detail")

tweetDetailElements.forEach(container=> {
  ReactDOM.render(
    e(TweetsDetailComponent, container.dataset),
    container);
  })

const userProfileBadgeElements = document.querySelectorAll(".tweetme-profile-badge")   

userProfileBadgeElements.forEach(container=> {
  ReactDOM.render(
    e(ProfileBadgeComponent, container.dataset),
    container);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
