"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{98:function(e,n,t){t.d(n,{VK:function(){return s},Z0:function(){return i},_T:function(){return u},xu:function(){return c}});var r=t(340),a=t(546);r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDZkNWMzNWQxY2Y0ZjI3MTQzMGVhNTcwYTY5NWU5YyIsInN1YiI6IjY1NGY2ZTA5ZDQ2NTM3MDBmZTM1ZGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psMl8hPRoscle1q5_VKpQUVYxDapYRduGZdJRGatNVg",r.Z.defaults.headers.common.accept="application/json";var c=function(){return r.Z.get("".concat(a.T,"/trending/movie/day?language=en-US"))},u=function(e){return r.Z.get("".concat(a.T,"/search/movie?query=").concat(e,"&language=en-US&page=1"))},i=function(e){return r.Z.get("".concat(a.T,"/movie/").concat(e,"/credits?language=en-US"))},s=function(e){return r.Z.get("".concat(a.T,"/movie/").concat(e,"/reviews?language=en-US&page=1"))}},736:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),s=t(689),o=t(510),l=t(167),f=t(98),h=t(184);n.default=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)(null),t=(0,a.Z)(n,2),c=t[0],d=t[1],m=(0,i.useState)(!1),p=(0,a.Z)(m,2),Z=p[0],g=p[1],v=(0,i.useState)(null),x=(0,a.Z)(v,2),N=x[0],j=x[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,f.VK)(e);case 4:t=n.sent,r=t.data,d(r.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),j(n.t0.message);case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,h.jsxs)(l.R,{children:[null!==N&&(0,h.jsx)("p",{className:"error-bage",children:N}),Z&&(0,h.jsx)(o.Z,{}),null!==c&&(0,h.jsx)("ul",{className:"movieList",children:c.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{className:"itemTitle",children:["Author: ",e.author]}),(0,h.jsxs)("p",{children:[" ",e.content," "]})]},e.id)}))}),";"]})}}}]);
//# sourceMappingURL=736.13330dac.chunk.js.map