"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{155:function(e,t,n){n.d(t,{O:function(){return s}});var r={movieListItem:"MoviesList_movieListItem__pwpnH",itemTitle:"MoviesList_itemTitle__JMgGa"},i=n(87),a=n(184),s=function(e){var t=e.movies;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:r.movieList,children:null!==e&&t.map((function(e){return(0,a.jsx)("li",{className:r.movieListItem,children:(0,a.jsx)(i.rU,{to:"/movies/".concat(e.id),children:(0,a.jsx)("h2",{className:r.itemTitle,children:e.title})})},e.id)}))})})}},98:function(e,t,n){n.d(t,{_:function(){return s},x:function(){return a}});var r=n(340),i=n(546);r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg",r.Z.defaults.headers.common.accept="application/json";var a=function(){return r.Z.get("".concat(i.T,"/trending/movie/day?language=en-US"))},s=function(e){return r.Z.get("".concat(i.T,"/search/movie?query=").concat(e,"&language=en-US&page=1"))}},546:function(e,t,n){n.d(t,{T:function(){return r}});var r="https://api.themoviedb.org/3"},767:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),i=n(439),a=n(757),s=n.n(a),u=n(510),c=n(791),o=n(87),l=n(155),m=n(184),h=function(e){var t=e.onSubmit;return(0,m.jsxs)("form",{onSubmit:t,children:[(0,m.jsx)("label",{children:(0,m.jsx)("input",{type:"text",name:"searchKey",required:!0,placeholder:"Enter movie"})}),(0,m.jsx)("button",{type:"submit",children:"Search"})]})},f=n(98),v=function(){var e=(0,o.lr)(),t=(0,i.Z)(e,2),n=t[0],a=t[1],v=(0,c.useState)(null),d=(0,i.Z)(v,2),p=d[0],x=d[1],j=(0,c.useState)(!1),Z=(0,i.Z)(j,2),g=Z[0],_=Z[1],N=(0,c.useState)(null),y=(0,i.Z)(N,2),I=y[0],T=y[1],b=n.get("query");return(0,c.useEffect)((function(){if(b){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),T(null),e.next=5,(0,f._)(b);case 5:t=e.sent,n=t.data,x(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),T(e.t0.message);case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]),(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=e.currentTarget.elements.searchKey.value;a({query:n}),t.reset()}}),null!==I&&(0,m.jsx)("p",{className:"error-bage",children:I}),g&&(0,m.jsx)(u.Z,{}),null!==p&&(0,m.jsx)(l.O,{movies:p})]})}}}]);
//# sourceMappingURL=767.48c88a05.chunk.js.map