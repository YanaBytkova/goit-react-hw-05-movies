"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{155:function(n,e,t){t.d(e,{O:function(){return a}});var i={movieListItem:"MoviesList_movieListItem__pwpnH",itemTitle:"MoviesList_itemTitle__JMgGa"},r=t(87),o=t(184),a=function(n){var e=n.movies;return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:i.movieList,children:null!==n&&e.map((function(n){return(0,o.jsx)("li",{className:i.movieListItem,children:(0,o.jsx)(r.rU,{to:"/movies/".concat(n.id),children:(0,o.jsx)("h2",{className:i.itemTitle,children:n.title})})},n.id)}))})})}},98:function(n,e,t){t.d(e,{_:function(){return a},x:function(){return o}});var i=t(340),r=t(546);i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg",i.Z.defaults.headers.common.accept="application/json";var o=function(){return i.Z.get("".concat(r.T,"/trending/movie/day?language=en-US"))},a=function(n){return i.Z.get("".concat(r.T,"/search/movie?query=").concat(n,"&language=en-US&page=1"))}},546:function(n,e,t){t.d(e,{T:function(){return i}});var i="https://api.themoviedb.org/3"},983:function(n,e,t){t.r(e);var i=t(861),r=t(439),o=t(757),a=t.n(o),s=t(340),c=t(791),u=t(167),l=t(155),d=t(510),p=t(98),m=t(184);s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg",s.Z.defaults.headers.common.accept="application/json";e.default=function(){var n=(0,c.useState)(null),e=(0,r.Z)(n,2),t=e[0],o=e[1],s=(0,c.useState)(!1),h=(0,r.Z)(s,2),x=h[0],f=h[1],g=(0,c.useState)(null),v=(0,r.Z)(g,2),Z=v[0],I=v[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,i.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),n.next=4,(0,p.x)();case 4:e=n.sent,t=e.data,o(t.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),I(n.t0.message),console.log(n.t0);case 13:return n.prev=13,f(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,m.jsxs)(u.R,{children:[(0,m.jsx)("h1",{children:"Trending today:"}),null!==Z&&(0,m.jsxs)("p",{className:"error-bage",children:["Oops, some error occured... Error message: ",Z]}),x&&(0,m.jsx)(d.Z,{}),null!==t&&(0,m.jsx)(l.O,{movies:t})]})}},167:function(n,e,t){t.d(e,{R:function(){return o}});var i,r=t(168),o=t(867).ZP.div(i||(i=(0,r.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  .loader {\n    position: fixed;\n    top: 20px;\n    right: 100px;\n  }\n\n  .postList {\n    list-style: none;\n    padding: 0;\n    max-width: 450px;\n  }\n  .movieListItem {\n    padding: 10px;\n    border: 2px dashed black;\n    margin-bottom: 25px;\n    cursor: pointer;\n  }\n  .itemTitle {\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  .itemBody {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .error-bage {\n    padding: 25px;\n    border: 1px solid blue;\n    background-color: orange;\n    margin-bottom: 20px;\n    font-size: 20px;\n  }\n\n  .movieDetails { \n    margin-top: 20px;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n  }\n \n .genres {\n  display: flex;\n    flex-direction: row;\n    gap: 20px;\n }\n"])))}}]);
//# sourceMappingURL=983.1c4ae49c.chunk.js.map