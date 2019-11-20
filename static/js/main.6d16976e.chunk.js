(this.webpackJsonpbudgety=this.webpackJsonpbudgety||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(18),a(19),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=a(12),p=a(6);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=r.a.createContext(),h=function(e,t){switch(t.type){case"ADD_BALANCE":return E({},e,{records:[t.payload].concat(Object(d.a)(e.records))});case"DELETE_BALANCE":return E({},e,{records:e.records.filter((function(e){return e.id!==t.payload}))});default:return e}},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={records:[{id:1,dollar:"",mType:"",note:""}],dispatch:function(e){return a.setState((function(t){return h(t,e)}))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),y=b.Consumer,g=a(11),O=a.n(g),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mType:"",note:"",dollar:""},a.onChange=function(e){return a.setState(Object(p.a)({},e.target.name,e.target.value))},a.onSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.mType,c=n.note,l=n.dollar,o={id:O()(),mType:r,note:c,dollar:Number(l)};e({type:"ADD_BALANCE",payload:o}),console.log(o)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.mType,n=t.note,c=t.dollar;return r.a.createElement(y,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-2 my-2 text-dark-50 bg-light rounded shadow-sm"},r.a.createElement("form",{className:"d-flex",onSubmit:e.onSubmit.bind(e,l),key:e.id},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{value:a,className:"form-control",name:"mType",required:!0,onChange:e.onChange},r.a.createElement("option",{value:""},"Choose"),r.a.createElement("option",{value:"inc"},"+"),r.a.createElement("option",{value:"exp"},"-"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"add__description",type:"text",name:"note",placeholder:"Description",value:n,onChange:e.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",name:"dollar",value:c,className:"add__value",placeholder:"Value",required:!0,onChange:e.onChange})),r.a.createElement("button",{className:"add__btn"},r.a.createElement("i",{className:"ion-ios-checkmark-outline"}))))}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null,(function(e){var t=e.records,a=0;t.filter((function(e){return"inc"===e.mType})).map((function(e){return a+=e.dollar}));console.log("Total inc:  ".concat(a));var n=0;t.filter((function(e){return"exp"===e.mType})).map((function(e){return n+=e.dollar}));console.log("Total Exp:  ".concat(n));var c=a-n;return r.a.createElement("div",null,r.a.createElement("header",{className:"container d-flex justify-content-center py-4 text-center"},r.a.createElement("div",{className:"col-12 col-md-6 "},r.a.createElement("p",{className:"lead"},"Available Bugdet "),r.a.createElement("h1",{className:"display-4"},"+ $",c," "),r.a.createElement("div",{className:"income-total rounded p-3 mb-2"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-left  "},"Income: ",console.log(t),r.a.createElement("span",{className:"float-right"},"$",a))),r.a.createElement("div",{className:"exp-total rounded p-3"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-left  "},"Expensive:",r.a.createElement("span",{className:"float-right"},"- $",n))))))}))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).deleteItem=function(e,t){t({type:"DELETE_BALANCE",payload:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y,null,(function(t){var a=t.records,n=t.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-info"},"Income"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,a.map((function(t){return"inc"===t.mType?r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.note),r.a.createElement("td",null,"$ ",t.dollar),r.a.createElement("td",{onClick:e.deleteItem.bind(e,t.id,n)},r.a.createElement("i",{className:"del__btn ion-close-round"}))):null}))))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-danger"},"Expensive"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,a.map((function(t){return"exp"===t.mType?r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.note),r.a.createElement("td",null,"$ ",t.dollar),r.a.createElement("td",{onClick:e.deleteItem.bind(e,t.id,n)},"X")):null})))))))}))}}]),t}(n.Component);var w=function(){return r.a.createElement(v,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6d16976e.chunk.js.map