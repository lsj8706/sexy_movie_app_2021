(this.webpackJsonpsexy_movie_app_2021=this.webpackJsonpsexy_movie_app_2021||[]).push([[0],{37:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(29),i=s.n(c),r=s(8),o=s(2),l=(s(37),s(1));var j=function(){return Object(l.jsx)("div",{className:"about__container",children:Object(l.jsx)("span",{children:"About this page: I built this page because I love movies using ReactJS"})})},u=s(17),m=s.n(u),d=s(30),b=s(11),h=s(12),v=s(14),p=s(13),O=s(31),x=s.n(O);s(58);var y=function(e){var t=e.id,s=e.year,a=e.title,n=e.summary,c=e.poster,i=e.genres;return Object(l.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:c,genres:i}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:c,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[n.slice(0,200),"..."]})]})]})})},f=(s(64),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading...."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component)),g=(s(65),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("h1",{children:e.state.title}),Object(l.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(l.jsx)("p",{children:e.state.summary})]}):null}}]),s}(n.a.Component));s(66);var _=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})};var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(_,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:g})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.90308c78.chunk.js.map