(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({product:"product"}[t]||t)+"."+{product:"8d5e047c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={product:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({product:"product"}[t]||t)+"."+{product:"aefe1321"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===r||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],p.parentNode.removeChild(p),a(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"211f":function(t,e,a){t.exports=a.p+"img/menu5.0e6b1c21.jpg"},"281b":function(t,e,a){t.exports=a.p+"img/maps.0dc9594a.svg"},"282f":function(t,e,a){t.exports=a.p+"img/facebook.729f2364.svg"},"28d0":function(t,e,a){t.exports=a.p+"img/phone-call.2bb9b9a7.svg"},3776:function(t,e,a){t.exports=a.p+"img/whatsapp.bf864852.svg"},"55b4":function(t,e,a){t.exports=a.p+"img/instagram.b35f3063.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{id:"navBar",toggleable:"lg",type:"dark"}},[r("b-container",[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-navbar-brand",{attrs:{to:{name:"Home"}}},[r("b-img",{attrs:{id:"logo",fluid:"",alt:"Fluid image",rounded:"circle",src:a("d663")}}),t._v(" PRIFOOD")],1),r("b-collapse",{attrs:{"is-nav":"",id:"nav-collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"Products"}}},[t._v("Productos")])],1)],1)],1)],1),r("b-container",[r("transition",{attrs:{mode:"out-in","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[r("router-view")],1),r("about")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("footer",{staticClass:"footer"},[r("div",{staticClass:"mt-5"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"},[t._m(1),r("hr",{staticClass:"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),r("p",[r("a",{attrs:{href:"https://www.facebook.com/Prifood-102579611596406",target:"_BLANK"}},[r("b-img",{attrs:{id:"social",fluid:"",src:a("282f")}})],1)]),r("p",[r("a",{attrs:{href:"https://www.instagram.com/prifood1/",target:"_BLANK"}},[r("b-img",{attrs:{id:"social",fluid:"",src:a("55b4")}})],1)]),r("p",[r("a",{attrs:{href:"https://api.whatsapp.com/send?phone=573226101113&fbclid=IwAR3w0o0p1Q7V1NSf9dDHFXWL1b33XMSwJRbXIxX95Ra2WVJa1nu0J5iZjrQ",target:"_BLANK"}},[r("b-img",{attrs:{id:"social",fluid:"",src:a("3776")}})],1)])]),r("div",{staticClass:"col-md-3 col-lg-3 col-xl-3"},[t._m(2),r("hr",{staticClass:"mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),r("p",[r("i",{}),r("b-img",{attrs:{id:"social",fluid:"",src:a("281b")}}),t._v(" Poblado Campestre ")],1),r("p",[r("i",{},[r("b-img",{attrs:{id:"social",fluid:"",src:a("28d0")}})],1),t._v(" + 57 322 610 1113 ")])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3 col-lg-4 col-xl-3 mb-4"},[a("h6",{staticClass:"text-uppercase font-weight-bold"},[a("strong",[t._v("¿Quiénes Somos?")])]),a("hr",{staticClass:"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto",staticStyle:{width:"60px"}}),a("p",[a("strong",[t._v("PRIFOOD")]),t._v(" estamos comprometidos con darte el mejor servicio que puedas llegar a desear; danto un excelente servicio al cliente, entrega a domicilio rápido y de manera gratuita para toda la comunidad campestre y a la ciudad de Cali ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"text-uppercase font-weight-bold"},[a("strong",[t._v("Redes sociales")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"text-uppercase font-weight-bold"},[a("strong",[t._v("Contacto")])])}],c={name:"about"},l=c,d=(a("b8ab"),a("2877")),u=Object(d["a"])(l,i,s,!1,null,null,null),p=u.exports,m={data:function(){return{}},components:{about:p}},f=m,b=(a("5c0b"),Object(d["a"])(f,n,o,!1,null,null,null)),g=b.exports,v=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-3"},[r("h1",{staticClass:"my-3"},[t._v("¡¡BIENVENIDO A PRIFOOD!!")]),r("h4",{staticClass:"my-4"},[t._v("¡¡Un lugar al que seguro pensaras en volver!!")]),r("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{indicators:"",fade:"",interval:4e3},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("b-img",{staticClass:"d-block img-fluid",attrs:{id:"carousel",fluid:"",src:a("7850"),alt:"Fluid",center:""}},[t._v("Hola")])]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("b-img",{staticClass:"d-block img-fluid",attrs:{id:"carousel",fluid:"",src:a("f81c"),alt:"Fluid",center:""}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("b-img",{staticClass:"d-block img-fluid",attrs:{id:"carousel",fluid:"",src:a("5c40"),alt:"Fluid",center:""}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("b-img",{staticClass:"d-block img-fluid",attrs:{id:"carousel",fluid:"",src:a("873e"),alt:"Fluid",center:""}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("b-img",{staticClass:"d-block img-fluid",attrs:{id:"carousel",fluid:"",src:a("211f"),alt:"Fluid",center:""}})]},proxy:!0}])})],1),r("div",{staticClass:"my-4 container"},[r("h1",[t._v("Nuestros Servicios!!")]),r("b-card-group",{staticClass:"my-4",attrs:{deck:""}},[r("b-col",{attrs:{md:"4"}},[r("b-card",{staticStyle:{"max-width":"20rem"},attrs:{id:"color-card","text-variant":"white",title:"Domicilios"}},[r("b-img",{attrs:{id:"services",src:a("8aa6"),fluid:""}}),r("b-card-text",{staticClass:"my-4"},[t._v(" Estamos totalmente comprometidos con el cliente, por ende realizamos nuestros pedidos de la manera más rápida, segura y de forma gratuita para que el cliente este satisfecho con nuestro servicio, tambien manejando siempre todos los protocolos de bioseguridad dictados por el gobierno ")])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{staticStyle:{"max-width":"20rem"},attrs:{id:"color-card","text-variant":"white",title:"Atención al Cliente"}},[r("b-img",{attrs:{id:"services",src:a("d324")}}),r("b-card-text",{staticClass:"my-4"},[t._v(" Contamos con un excelente servicio al cliente el cual nos permite gestionar de manera ágil y ordena todos los pedidos que se nos realizan a lo largo de la jornada laboral ")])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{id:"color-card","text-variant":"white",title:"Manipulación de alimentos y medidas de bioseguridad"}},[r("b-img",{attrs:{id:"services",src:a("f1de")}}),r("b-card-text",{staticClass:"my-4"},[t._v(" Manejamos todos los protocolos que se requieren para la manipulación de alimentos con el fin de nuestros clientes sé sientan totalmente seguros a la hora de consumir nuestros productos ")])],1)],1)],1)],1)],1)},y=[],x={name:"Home",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},_=x,w=(a("cccb"),Object(d["a"])(_,h,y,!1,null,null,null)),C=w.exports;r["default"].use(v["a"]);var S=[{path:"/",name:"Home",component:C},{path:"/products",name:"Products",component:function(){return a.e("product").then(a.bind(null,"146f"))}}],k=new v["a"]({routes:S}),j=k,O=a("5f5b");a("77ed"),a("f9e3"),a("2dd8");r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({router:j,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5c40":function(t,e,a){t.exports=a.p+"img/menu3.ece685c8.jpg"},"5ced":function(t,e,a){},7850:function(t,e,a){t.exports=a.p+"img/menu1.4504fb04.jpg"},"873e":function(t,e,a){t.exports=a.p+"img/menu4.62c146df.jpg"},"8aa6":function(t,e,a){t.exports=a.p+"img/delivery-man.bf636fe9.svg"},"98e0":function(t,e,a){},"9c0c":function(t,e,a){},b8ab:function(t,e,a){"use strict";a("98e0")},cccb:function(t,e,a){"use strict";a("5ced")},d324:function(t,e,a){t.exports=a.p+"img/customer-service.6831a569.svg"},d663:function(t,e,a){t.exports=a.p+"img/prifood.b3723576.jpeg"},f1de:function(t,e,a){t.exports=a.p+"img/clean-hands.a319194d.svg"},f81c:function(t,e,a){t.exports=a.p+"img/menu2.bfa524d7.jpg"}});
//# sourceMappingURL=app.4be8ad02.js.map