(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(14),a(7)),s=a.n(o),i=(a(15),a(2)),u=a(1);function m(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,l="http://localhost:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"There was an error loading react"},400)},r.send(c)}function d(e,t,a){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),null!==a&&void 0!==a&&(n=a.replace("http://localhost:8000/api","")),m("GET",n,t)}function f(e,t){var a="/tweets/feed/";null!==t&&void 0!==t&&(a=t.replace("http://localhost:8000/api","")),m("GET",a,e)}function w(e){var t=c.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;m("POST","/tweets/create/",n,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var p=a(8);function b(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=a.display?a.display:"Action",s=function(e,t){200!==t&&201!==t||!n||n(e,t)},i="like"===a.type?"".concat(r,"  ").concat(o):o;return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,a){m("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,s)}},i)}function v(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function E(e){var t=e.user,a=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name):null;return c.a.createElement(c.a.Fragment,null,a,e.content,c.a.createElement(v,{username:t.username},"@",t.username))}function h(e){var t=e.user;return c.a.createElement(v,{username:t.username},c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}function j(e){var t=e.tweet;return t.parent?c.a.createElement(O,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function O(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(n.useState)(e.tweet?e.tweet:0),i=Object(u.a)(s,2),m=i[0],d=i[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var w=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{tweetid:1})),v=w?w.groups.tweetid:-1,O="".concat(t.id)==="".concat(v),g=function(e,t){200===t?d(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:f},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text muted"},"Retweet via ",c.a.createElement(E,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(h,{user:t.user})),c.a.createElement("div",{className:"col-10"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(E,{includeFullName:!0,user:t.user})),c.a.createElement("p",null,t.content)),c.a.createElement(j,{tweet:t,retweeter:t.user}),c.a.createElement("div",{className:"btn btn-group"},m&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{tweet:m,didPerformAction:g,action:{type:"like",display:"Likes"}}),c.a.createElement(b,{tweet:m,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(b,{tweet:m,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})),!0===O?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function g(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],w=Object(n.useState)(null),p=Object(u.a)(w,2),b=p[0],v=p[1],E=Object(n.useState)(!1),h=Object(u.a)(E,2),j=h[0],g=h[1];Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(n.useEffect)((function(){if(!1===j){d(e.username,(function(e,t){200===t?(v(e.next),l(e.results),g(!0)):alert("There was an error")}))}}),[r,j,g,e.username]);var N=function(e){var t=Object(i.a)(r);t.unshift(e),l(t);var a=Object(i.a)(m);a.unshift(m),f(a)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(O,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){d(e.username,(function(e,t){if(200===t){v(e.next);var a=Object(i.a)(m).concat(e.results);l(a),f(a)}else alert("There was an error")}),b)}},className:"btn btn-outline-primary"},"Load next"))}function N(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],w=Object(n.useState)(null),p=Object(u.a)(w,2),b=p[0],v=p[1],E=Object(n.useState)(!1),h=Object(u.a)(E,2),j=h[0],g=h[1];Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&d(t)}),[e.newTweets,m,r]),Object(n.useEffect)((function(){if(!1===j){f((function(e,t){200===t&&(v(e.next),l(e.results),g(!0))}))}}),[r,j,g,e.username]);var N=function(e){var t=Object(i.a)(r);t.unshift(e),l(t);var a=Object(i.a)(m);a.unshift(m),d(a)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(O,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){f((function(e,t){if(200===t){v(e.next);var a=Object(i.a)(m).concat(e.results);l(a),d(a)}}),b)}},className:"btn btn-outline-primary"},"Load next"))}function y(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(w,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(g,Object.assign({newTweets:r},e)))}function k(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(u.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],w=function(e,t){200===t?f(e):alert("There was an erro finding your tweet.")};return Object(n.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,w),o(!0))}),[t,l,o]),null===d?null:c.a.createElement(O,{tweet:d,className:e.className})}var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(y,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=document.getElementById("root");S&&l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),S);var x=c.a.createElement,R=document.getElementById("tweetme");R&&l.a.render(x(y,R.dataset),R);var A=document.getElementById("tweetme-feed");A&&l.a.render(x((function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(w,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(N,Object.assign({newTweets:r},e)))}),A.dataset),A),document.querySelectorAll(".tweetme-detail").forEach((function(e){l.a.render(x(k,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.aacb0aa6.chunk.js.map