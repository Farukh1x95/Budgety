(this.webpackJsonpbudgety=this.webpackJsonpbudgety||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(18),a(19),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),p=a(12),d=a(6);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var f=r.a.createContext(),E=function(e,t){switch(t.type){case"ADD_BALANCE":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{records:[t.payload].concat(Object(p.a)(e.records))});default:return e}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={records:[{id:1,dollar:900,mType:"inc",note:"black money"},{id:2,dollar:345,mType:"inc",note:"fun time"},{id:3,dollar:250,mType:"exp",note:"pocket money"},{id:4,dollar:550,mType:"exp",note:"bang money"}],dispatch:function(e){return a.setState((function(t){return E(t,e)}))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),h=f.Consumer,v=a(11),O=a.n(v),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mType:"",note:"",dollar:""},a.onChange=function(e){return a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.mType,c=n.note,l=n.dollar,o={id:O()(),mType:r,note:c,dollar:l};e({type:"ADD_BALANCE",payload:o}),console.log(o)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.mType,n=t.note,c=t.dollar;return r.a.createElement(h,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-2 my-2 text-dark-50 bg-light rounded shadow-sm"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l),key:e.id},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{value:a,className:"form-control",name:"mType",required:!0,onChange:e.onChange},r.a.createElement("option",{value:""},"Choose"),r.a.createElement("option",{value:"inc"},"+"),r.a.createElement("option",{value:"exp"},"-"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"add__description",type:"text",name:"note",placeholder:"Description",value:n,onChange:e.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",name:"dollar",value:c,className:"add__value",placeholder:"Value",required:!0,onChange:e.onChange})),r.a.createElement("button",{className:"add__btn"},r.a.createElement("i",{className:"ion-ios-checkmark-outline"}))))}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"container d-flex justify-content-center py-4 text-center"},r.a.createElement("div",{className:"col-12 col-md-6 "},r.a.createElement("p",{className:"lead"},"Available Bugdet "),r.a.createElement("h1",{className:"display-4"},"+ 16699 "),r.a.createElement("div",{className:"income-total rounded p-3 mb-2"},r.a.createElement("p",{className:"text-uppercase mb-0 text-left"},"Income:",r.a.createElement("span",{className:"float-right"},"1000"))),r.a.createElement("div",{className:"exp-total rounded p-3"},r.a.createElement("p",{className:"text-uppercase mb-0 text-left"},"Expensive: ",r.a.createElement("span",{className:"float-right"},"1234 "))))))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,(function(e){var t=e.records;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-info"},"Income"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,t.map((function(e,t){return"inc"===e.mType?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.note),r.a.createElement("td",null,e.dollar)):null}))))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-uppercase mb-0 text-danger"},"Expensive"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,t.map((function(e,t){return"exp"===e.mType?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.note),r.a.createElement("td",null,e.dollar)):null})))))))}))}}]),t}(n.Component);var x=function(){return r.a.createElement(y,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(g,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.34cec285.chunk.js.map