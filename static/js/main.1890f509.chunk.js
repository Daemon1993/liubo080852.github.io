(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(t,e,n){},32:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(15),i=n.n(r),u=(n(28),n(17)),a=(n(32),n(7)),s=n(8),j=n(10),h=n(9),l=n(20);function b(){return{type:"AAA"}}function d(t){return console.log(t),{type:"1",text:t}}var p=n(1),O=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.count,c=e.text,o=e.actionAAA;return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:o,children:"actionAAA"}),Object(p.jsx)("h1",{children:n}),Object(p.jsx)("button",{onClick:function(){return t.actionText()},children:"actionText"}),Object(p.jsx)("h1",{children:c})]})}},{key:"actionText",value:function(){this.props.actionText("666")}}]),n}(o.a.Component);Object(u.b)((function(t){return{count:t.counter.count,text:t.show_text.text}}),(function(t){return Object(l.bindActionCreators)({actionAAA:b,actionText:d},t)}))(O),n(23);o.a.Component;var x=n(20),f=x.createStore,v=x.combineReducers,m={count:0},g={text:"123"};f(v({counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(console.log("counter "+e.type),e.type){case"AAA":return{count:100}}return t},show_text:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(console.log("show_text "+e.type+"  "+e.text),e.type){case"1":return{text:e.text}}return t}}));var y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))},A=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("UserPage componentDidMount")}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"UserPage"})})}}]),n}(o.a.Component),k=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("Home componentDidMount")}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Home"})})}}]),n}(o.a.Component),C=n(14),w=n(3),P=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(C.a,{children:[Object(p.jsxs)("div",{id:"menu",children:[Object(p.jsx)("li",{children:Object(p.jsx)(C.b,{to:"/home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(C.b,{to:"/userPage",children:"userPage"})})]}),Object(p.jsxs)("div",{id:"page_content",children:[Object(p.jsx)(w.a,{path:"/home",component:k}),Object(p.jsx)(w.a,{path:"/userPage",component:A})]})]})}}]),n}(o.a.Component);i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.1890f509.chunk.js.map