(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{101:function(e,t,c){},103:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},208:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c(7),r=c.n(s),i=(c(101),c(24)),o=c.n(i),l=c(42),d=c(11),j=c(238),u=c(251),b=c(249),h=c(250);c(103);var x=function(e){var t=e.countries,c=e.setQueryString,s=Object(a.useState)("worldwide"),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(n.jsxs)("div",{className:"app_header",children:[Object(n.jsx)("div",{className:"app__header__title",children:Object(n.jsx)("h1",{children:"Covid-19 Live Tracker"})}),Object(n.jsx)("div",{className:"app__header__select-box",children:Object(n.jsxs)(j.a,{variant:"outlined",className:"app__form-control",children:[Object(n.jsx)(u.a,{id:"demo-simple-select-outlined-label",children:"Countries"}),Object(n.jsxs)(b.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:i,onChange:function(e){var t=e.target.value;o(t),c(t)},label:"Countries",children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),t.map((function(e,t){return Object(n.jsx)(h.a,{value:e.value,children:e.name},t)}))]})]})})]})},f=(c(107),c(242)),O=c(243),p=c(244);var m=function(e){var t=e.extraClass,c=e.title,a=e.cases,s=e.total,r=e.loading,i=e.onClick,o=e.active;return r?Object(n.jsx)(f.a,{className:"infoBox",children:Object(n.jsx)(O.a,{color:"textSecondary",children:Object(n.jsx)("span",{className:"infoBox__loading",children:"Loading..."})})}):Object(n.jsx)(f.a,{className:"infoBox ".concat(t," ").concat(o&&"infoBox--active"),onClick:i,children:Object(n.jsxs)(p.a,{className:"infoBox__inner",children:[Object(n.jsx)(O.a,{color:"textSecondary",children:c}),Object(n.jsx)("h5",{children:Object(n.jsxs)("span",{children:["+",a]})}),Object(n.jsxs)(O.a,{color:"textSecondary",className:"total",children:[Object(n.jsx)("span",{children:s})," Total"]})]})})},v=(c(108),c(245)),g=c(15),y=c.n(g),N=Object(v.a)((function(e){return{card:{padding:e.spacing(2),textAlign:"left",width:"100%",color:e.palette.text.secondary},title:{marginBottom:"1rem"}}}));var _=function(e){var t=e.tableData,c=N();return Object(n.jsxs)(f.a,{className:c.card,children:[Object(n.jsx)("h3",{className:c.title,children:"Live Cases by Country"}),Object(n.jsx)("div",{className:"table__wrapper",children:Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("th",{children:Object(n.jsx)("strong",{children:y()(e.cases).format(0,0)})})]},t)}))})})})]})},w=c(89),C=Object(v.a)((function(e){return{card:{padding:e.spacing(2),textAlign:"center",width:"100%",color:e.palette.text.secondary,height:"38.5vh"}}})),k={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},S=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var I=function(e){var t=e.casesType,c=C(),s=Object(a.useState)({}),r=Object(d.a)(s,2),i=r[0],j=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=S(e,t);j(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)(f.a,{className:c.card,children:(null===i||void 0===i?void 0:i.length)>0&&Object(n.jsx)(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]},options:k})})},A=c(247),B=c(253),D=c(90),T=c(252),L=c(246),z={cases:{hex:"#cc1034",multiplier:400},recovered:{hex:"green",multiplier:800},deaths:{hex:"red",multiplier:2e3}},E=function(e){return e?"".concat(y()(e).format("0.0a")):"0"},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,c){return Object(n.jsx)(T.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:z[t].hex,fillColor:z[t].hex,radius:Math.sqrt(e[t])*z[t].multiplier,children:Object(n.jsx)(L.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",children:Object(n.jsx)("img",{src:e.countryInfo.flag,alt:e.countryInfo.flag})}),Object(n.jsx)("div",{className:"info-country",children:e.country}),Object(n.jsxs)("div",{className:"info-cases",children:["Cases: ",y()(e.cases).format(0,0)," "]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format(0,0)," "]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format(0,0)," "]})]})})},c)}))},R=(c(205),Object(v.a)((function(e){return{card:{padding:e.spacing(2),textAlign:"center",width:"100%",color:e.palette.text.secondary,height:"56vh"}}})));var J=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom,r=R();return Object(n.jsx)(f.a,{className:r.card,children:Object(n.jsxs)(A.a,{center:a,zoom:s,children:[Object(n.jsx)(B.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),M(t,c)]})})},Q=c(248),Y=(c(206),c(207),function(){var e,t="https://disease.sh/v3/covid-19/countries/",c=Object(a.useState)([""]),s=Object(d.a)(c,2),r=s[0],i=s[1],j=Object(a.useState)("worldwide"),u=Object(d.a)(j,2),b=u[0],h=u[1],f=Object(a.useState)(""),O=Object(d.a)(f,2),p=O[0],v=O[1],g=Object(a.useState)("true"),y=Object(d.a)(g,2),N=y[0],w=y[1],C=Object(a.useState)(""),k=Object(d.a)(C,2),S=k[0],A=k[1],B=Object(a.useState)({lat:34.80746,lng:-40.4796}),T=Object(d.a)(B,2),L=T[0],z=T[1],M=Object(a.useState)("2"),R=Object(d.a)(M,2),Y=R[0],q=R[1],F=Object(a.useState)([]),V=Object(d.a)(F,2),W=V[0],G=V[1],H=Object(a.useState)("cases"),K=Object(d.a)(H,2),P=K[0],U=K[1],X=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso3}}));i(t),A(e),G(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="worldwide"===b?"https://disease.sh/v3/covid-19/all":t+b,e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){v(e),w(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){X()}),[]),Object(a.useEffect)((function(){Z()}),[b]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"app__container",children:Object(n.jsxs)(Q.a,{container:!0,spacing:3,children:[Object(n.jsxs)(Q.a,{item:!0,xs:12,sm:8,children:[Object(n.jsx)(x,{setQueryString:function(e){h(e),W.filter((function(t){t.countryInfo.iso3===e&&(z({lat:t.countryInfo.lat,lng:t.countryInfo.long}),q("4"))}))},countries:r}),Object(n.jsx)("div",{className:"app__infobox__wrapper",children:Object(n.jsxs)(Q.a,{container:!0,spacing:3,children:[Object(n.jsx)(Q.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(m,{active:"cases"===P,onClick:function(){return U("cases")},title:"Corona Virus Cases",cases:E(p.todayCases),total:E(p.cases),loading:N})}),Object(n.jsx)(Q.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(m,{active:"recovered"===P,extraClass:"recovered",onClick:function(){return U("recovered")},title:"Recovered",cases:E(p.todayRecovered),total:E(p.recovered),loading:N})}),Object(n.jsx)(Q.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(m,{active:"deaths"===P,onClick:function(){return U("deaths")},title:"Deaths",cases:E(p.todayDeaths),total:E(p.deaths),loading:N})}),Object(n.jsx)(Q.a,{item:!0,xs:12,children:Object(n.jsx)(J,{casesType:P,countries:W,center:L,zoom:Y})})]})})]}),Object(n.jsx)(Q.a,{item:!0,xs:12,sm:4,children:Object(n.jsxs)(Q.a,{container:!0,spacing:3,children:[Object(n.jsx)(Q.a,{item:!0,xs:12,children:Object(n.jsx)(_,{tableData:(e=S,Object(D.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1})))})}),Object(n.jsx)(Q.a,{item:!0,xs:12,children:Object(n.jsx)(I,{casesType:P})})]})})]})})})});r.a.render(Object(n.jsx)(Y,{}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.c5e846e5.chunk.js.map