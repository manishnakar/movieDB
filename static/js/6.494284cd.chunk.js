(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[6],{104:function(e,t,a){},105:function(e,t,a){"use strict";a(0);var n=a(175),c=a(167),s=a(59),r=a(3),i=Object(s.a)({palette:{type:"dark"}});t.a=function(e){var t=e.setPage,a=e.numOfPages,s=void 0===a?10:a;return Object(r.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(r.jsx)(c.a,{theme:i,children:Object(r.jsx)(n.a,{count:s,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})})}},106:function(e,t,a){"use strict";a(0),a(104);var n=a(166),c=a(3);t.a=function(e){var t=e.data,a=t.poster_path,s=t.title,r=t.name,i=t.release_date,o=t.first_air_date,l=t.vote_average,u=s||r;return Object(c.jsxs)("div",{className:"media",children:[Object(c.jsx)(n.a,{badgeContent:l,color:l>6?"primary":"secondary"}),Object(c.jsx)("img",{className:"poster",src:a?"".concat("https://image.tmdb.org/t/p/w300","/").concat(a):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:u}),Object(c.jsx)("b",{className:"title",children:u}),Object(c.jsxs)("span",{className:"subTitle",children:[o?"TV series":"Movie",Object(c.jsx)("span",{className:"subTitle",children:i||o})]})]})}},110:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(107),c=a.n(n),s=a(108),r=a(11),i=a(0),o=a(109),l=a.n(o),u=a(106),d=a(105),j=(a(110),a(3));t.default=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)(1),p=Object(r.a)(o,2),b=p[0],f=p[1],m=Object(i.useState)(),h=Object(r.a)(m,2),O=h[0],g=h[1],v=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat("https://api.themoviedb.org","/3/trending/all/day?api_key=").concat("c3e0a6e96409f270c2e75c0c411273da","&page=").concat(b));case 2:t=e.sent,a=t.data,n(a.results),g(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){v()}),[b]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(j.jsx)("div",{className:"trending",children:a&&a.map((function(e){return Object(j.jsx)(u.a,{data:e},e.id)}))}),O>1&&Object(j.jsx)(d.a,{setPage:f,numOfPages:O})]})}}}]);
//# sourceMappingURL=6.494284cd.chunk.js.map