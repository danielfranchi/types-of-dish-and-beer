(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{19:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(14),i=c.n(a),r=(c(19),c(3)),o=c(4),j=c.n(o),l=c(0),d=function(){var e=s.a.useState([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"food-beer-list food-shop",children:[Object(l.jsx)("h1",{children:"Tipos de Cerveja"}),Object(l.jsx)("button",{onClick:function(){j.a.get("https://api.punkapi.com/v2/beers/?per_page=8").then((function(e){return n(e.data)}))},children:"Buscar Cerveja"}),Object(l.jsx)("div",{className:"beers-list",children:c&&c.map((function(e){return Object(l.jsxs)("div",{className:"beer",children:[Object(l.jsx)("img",{src:e.image_url,alt:e.name}),Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("span",{children:e.tagline}),Object(l.jsx)("small",{children:e.description})]},e.id)}))})]})},u=function(){var e=s.a.useState([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=s.a.useState(""),i=Object(r.a)(a,2),o=i[0],d=i[1],u=s.a.useState([]),h=Object(r.a)(u,2),b=h[0],p=h[1],f=s.a.useState(""),m=Object(r.a)(f,2),O=m[0],x=m[1];return s.a.useEffect((function(){j.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return n(e.data.categories)}))}),[]),s.a.useEffect((function(){j.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(o)).then((function(e){return p(e.data.meals)}))}),[o]),s.a.useEffect((function(){""!==O&&j.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(O)).then((function(e){return p(e.data.meals)}))}),[O]),Object(l.jsxs)("div",{className:"food-beer-list food-shop",children:[Object(l.jsx)("h1",{children:"Tipos de pratos"}),Object(l.jsxs)("p",{children:["Selecione uma categoria ou digite a comida (em ingl\xeas):",Object(l.jsx)("input",{type:"text",placeholder:"Digite a comida...",onChange:function(e){return x(e.target.value)}})]}),Object(l.jsx)("ul",{children:c&&c.map((function(e){return Object(l.jsxs)("li",{onClick:function(){return d(e.strCategory)},children:[" ",e.strCategory," "]},e.idCategory)}))}),O?Object(l.jsxs)("h2",{children:["Busca: ",Object(l.jsxs)("strong",{children:[" ",O," "]})]}):Object(l.jsxs)("h2",{children:["Tipo selecionado: ",Object(l.jsxs)("strong",{children:[" ",o," "]})]}),null!==b&&Object(l.jsx)("div",{className:"food-container",children:b.map((function(e){return Object(l.jsxs)("div",{className:"food-item",children:[Object(l.jsx)("img",{src:e.strMealThumb,alt:e.strMeal}),Object(l.jsx)("p",{children:e.strMeal})]},e.idMeal)}))})]})},h=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(d,{})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.99d7dfea.chunk.js.map