(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},50:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var r,n=c(2),s=c.n(n),i=c(30),a=c.n(i),o=(c(50),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))}),l=c(11),d=c.n(l),j=c(20),u=c(14),h=c(0),b=function(e){var t=e.theme;return Object(h.jsxs)("footer",{className:"page-footer  hide-on-med-and-down ".concat(t.headFootBg),children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col l6 s12",children:[Object(h.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(h.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(h.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(h.jsx)("h5",{className:"white-text",children:"Links"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 1"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 2"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 3"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Link 4"})})]})]})]})}),Object(h.jsx)("div",{className:"footer-copyright",children:Object(h.jsxs)("div",{className:"container",children:["\xa9 2014 Copyright Text",Object(h.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})]})},O=c(8);c(22);!function(e){e.SET_ALL_PRODUCT="SET_ALL_PRODUCT",e.SET_PRODUCT_PAGE="SET_PRODUCT_PAGE",e.SET_PHONE="SET_PHONE",e.SET_MOTORCYCLES="SET_MOTORCYCLES",e.SET_QUDROCOPTERS="SET_QUDROCOPTERS",e.SET_ROBOTS="SET_ROBOTS"}(r||(r={}));var p=c(28);c(53),c(41);c(41);p.a.initializeApp({apiKey:"AIzaSyAgROKOsZuQD8JvbLFyu0K5PhLjyf1TWa0",authDomain:"store-5067d.firebaseapp.com",projectId:"store-5067d",storageBucket:"store-5067d.appspot.com",messagingSenderId:"43030515564",appId:"1:43030515564:web:9e236cede3b9f71b9ced49"});p.a.auth();var m,x=p.a.firestore(),g=(p.a,function(){return{type:r.SET_ALL_PRODUCT}}),f=function(e){return{type:r.SET_PRODUCT_PAGE,payload:e}},v=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("phones").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),t({type:r.SET_PHONE,payload:[].concat(c)})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("motorcycles").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),t({type:r.SET_MOTORCYCLES,payload:[].concat(c)})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("robots").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),t({type:r.SET_ROBOTS,payload:[].concat(c)})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("qudrocopters").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),t({type:r.SET_QUDROCOPTERS,payload:[].concat(c)})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.TOGGLE_THEME="TOGGLE_THEME",e.SET_LOAD="SET_LOAD",e.SET_ACTIVE_SIDEBAR_LINK="SET_ACTIVE_SIDEBAR_LINK"}(m||(m={}));var C,E=function(e){return{type:m.TOGGLE_THEME,payload:e}},_=function(e){return{type:m.SET_LOAD,payload:e}},S=function(e){return{type:m.SET_ACTIVE_SIDEBAR_LINK,payload:e}};!function(e){e.ADD_REMOVE_AMOUNT="ADD_REMOVE_AMOUNT",e.SET_PRICE_MINUS="SET_PRICE_MINUS",e.ADD_TO_CART="ADD_TO_CART",e.REMOVE_FROM_CART="REMOVE_FROM_CART"}(C||(C={}));var P=function(e){return{type:C.ADD_TO_CART,payload:e}},k=c(12),I=c(6),R=function(e){var t=e.item,c=e.setProductPage,r=e.addToCart,n=e.cartItem;return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("div",{className:"col s12 m6 xl3 l4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)(I.b,{onClick:function(){return c(t)},to:"/product/".concat(t.category,"/").concat(t.id),children:[Object(h.jsx)("div",{className:"card-image ",style:{minHeight:"200px",maxHeight:"200px",background:"url(".concat(t.img[0],") 0 0/100% 100% no-repeat")}}),Object(h.jsx)("div",{className:"card-content",children:Object(h.jsx)("p",{style:{fontSize:"1em"},children:t.name})})]}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsxs)("p",{children:["price ",t.price]}),n&&n.id===t.id?Object(h.jsxs)("div",{className:"btn waves-effect teal lighten-2 ",children:[Object(h.jsx)(I.b,{to:"/cart",children:"In Cart"})," "]}):Object(h.jsxs)("div",{className:"btn waves-effect teal lighten-2 ",onClick:function(){return r(t)},children:[" ","Buy"," "]})]})]})})]})},A=function(e){var t=e.products,c=e.setProductPage,r=e.addToCart,n=e.cartItem;return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("div",{className:"col s12 m12  l10  ",style:{minHeight:"100vh",padding:"30px 20px"},children:Object(h.jsx)("div",{className:"row",children:t&&t.map((function(e,t){return Object(h.jsx)(R,{cartItem:n.filter((function(t){return t.id===e.id}))[0],addToCart:r,item:e,setProductPage:c},t)}))})})]})},L=(c(61),function(){return Object(h.jsx)("div",{className:"preloader-5"})}),w=c(9);var M=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isThemToogle:e.theme.isThemToogle,isLoad:e.theme.isLoad,byFilter:e.filter.byFilter,cartItem:e.cart.items,products:e.product.product}}),{setProductPage:f,setLoad:_,addToCart:P}))((function(e){var t=e.products,c=e.cartItem,r=e.byFilter,n=e.isLoad,s=e.setProductPage,i=e.addToCart,a=e.setLoad;return!1===n?Object(h.jsx)(L,{}):Object(h.jsx)(A,{setProductPage:function(e){a(!1),s(e),a(!0)},addToCart:i,cartItem:c,products:function(e,t){switch(t){case"all":return e&&e.sort((function(e,t){return e.id>t.id?1:-1}));case"price_low":return e.sort((function(e,t){return e.price>t.price?1:-1}));case"price_hight":return e.sort((function(e,t){return t.price>e.price?1:-1}));case"name":return e.sort((function(e,t){return e.name>t.name?1:-1}));default:return e}}(t,r)})})),D=(c(35),c(29),function(e){var t=e.activeTab,c=e.setActivTab;return Object(h.jsxs)("ul",{className:"tabItems ",children:[Object(h.jsx)("li",{className:"tabItem   ".concat(0===t&&" activeTab"," "),onClick:function(){return c(0)},children:Object(h.jsx)("span",{children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"})}),Object(h.jsxs)("li",{className:"tabItem  ".concat(1===t&&"activeTab "," "),onClick:function(){return c(1)},children:[Object(h.jsx)("span",{children:"\u041f\u0440\u043e \u0442\u043e\u0432\u0430\u0440"})," "]})]})}),F=function(e){var t=e.page;return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0411\u0440\u0435\u043d\u0434"}),Object(h.jsxs)("th",{children:[" ",t.properties.brend]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u043b\u0430\u0441"}),Object(h.jsxs)("th",{children:[" ",t.properties.\u0441las]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u043e\u043bi\u0440"}),Object(h.jsxs)("th",{children:[" ",t.properties.color]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430"}),Object(h.jsxs)("th",{children:[" ",t.properties.cubage," \u0441\u043c"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0448\u0432\u0438\u0434\u043ai\u0441\u0442\u044c "}),Object(h.jsxs)("th",{children:[" ",t.properties.maxSpeed," \u043a\u043c"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041e\u0431\u044d\u043c \u0431\u0430\u043a\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.volumeOfTank," \u043b"]})]})]})})},B=function(e){var t=e.page;return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0411\u0440\u0435\u043d\u0434"}),Object(h.jsxs)("th",{children:[" ",t.properties.brend]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a"}),Object(h.jsxs)("th",{children:[" ",t.properties.country]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u043e\u043bi\u0440"}),Object(h.jsxs)("th",{children:[" ",t.properties.color]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0404\u043c\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.batteryCapacity," ma"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:" \u0420\u0430\u0434\u0456\u0443\u0441 \u0434\u0456\u0457 "}),Object(h.jsxs)("th",{children:[" ",t.properties.radius," \u043c"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c \u043f\u043e\u043b\u044c\u043e\u0442\u0443 "}),Object(h.jsxs)("th",{children:[" ",t.properties.flightDuration," \u0445\u0432"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0448\u0432\u0438\u0434\u043ai\u0441\u0442\u044c "}),Object(h.jsxs)("th",{children:[" ",t.properties.maxSpeed," \u043a\u043c"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0412\u0430\u0433\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.weigth," \u0433\u0440"]})]})]})})},U=function(e){var t=e.page;return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0411\u0440\u0435\u043d\u0434"}),Object(h.jsxs)("th",{children:[" ",t.properties.brend]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a"}),Object(h.jsxs)("th",{children:[" ",t.properties.country]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u043e\u043bi\u0440"}),Object(h.jsxs)("th",{children:[" ",t.properties.color]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0404\u043c\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.volumeOfBattery," ma"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:" \u0427\u0430\u0441 \u0437\u0430\u0440\u044f\u0434\u0436\u0430\u043d\u043d\u044f "}),Object(h.jsxs)("th",{children:[" ",t.properties.chargingHour," \u0433"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0447\u0430\u0441 \u0440\u043e\u0431\u043e\u0442\u0438 "}),Object(h.jsxs)("th",{children:[" ",t.properties.maxTime," \u0445\u0432"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0412\u0430\u0433\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.weigth," \u0433\u0440"]})]})]})})},V=function(e){var t=e.page;return Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0411\u0440\u0435\u043d\u0434"}),Object(h.jsxs)("th",{children:[" ",t.properties.brend]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a"}),Object(h.jsxs)("th",{children:[" ",t.properties.country]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041a\u043e\u043bi\u0440"}),Object(h.jsxs)("th",{children:[" ",t.properties.color]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0404\u043c\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.volumeOfBattery," ma"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:" \u0427\u0430\u0441 \u0437\u0430\u0440\u044f\u0434\u0436\u0430\u043d\u043d\u044f "}),Object(h.jsxs)("th",{children:[" ",t.properties.chargingHour," \u0433"]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0414\u0456\u0430\u0433\u043e\u043d\u0430\u043b\u044c \u0435\u043a\u0440\u0430\u043d\u0430"}),Object(h.jsxs)("th",{children:[" ",t.properties.diagonal]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430 \u043f\u0430\u043c'\u044f\u0442\u044c"}),Object(h.jsxs)("th",{children:[" ",t.properties.operatingMemory]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0430 \u043f\u0430\u043c'\u044f\u0442\u044c"}),Object(h.jsxs)("th",{children:[" ",t.properties.memory]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u0439\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430"}),Object(h.jsxs)("th",{children:[" ",t.properties.operatingSsystem]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0412\u0430\u0433\u0430 "}),Object(h.jsxs)("th",{children:[" ",t.properties.weigth," \u0433\u0440"]})]})]})})},H=function(e){var t=e.activeTab,c=e.page,r=e.pageIndex;return console.log(r),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"tabDescription ".concat(1===t?"show":"hide"," "),children:[" ",Object(h.jsx)("p",{children:c.about})]}),Object(h.jsxs)("div",{className:"tabDescription ".concat(0===t?"show":"hide"," "),children:[" ",1===r&&Object(h.jsx)(F,{page:c}),2===r&&Object(h.jsx)(V,{page:c}),3===r&&Object(h.jsx)(U,{page:c}),4===r&&Object(h.jsx)(B,{page:c})]})]})},G=function(e){var t=e.page,c=e.pageIndex,r=Object(n.useState)(0),s=Object(u.a)(r,2),i=s[0],a=s[1];return Object(h.jsxs)("div",{className:"page-container-right-description",children:[Object(h.jsx)(D,{setActivTab:a,activeTab:i}),Object(h.jsx)(H,{activeTab:i,page:t,pageIndex:c})]})},Q=c(4),q=function(e){var t=e.page,c=e.cartItem,r=e.addToCart,s=Object(n.useState)(1),i=Object(u.a)(s,2),a=i[0],o=i[1];return Object(h.jsxs)("div",{className:"page-container-right-btn-group",children:[Object(h.jsx)("div",{className:"btn waves-effect teal lighten-2",onClick:function(){return o(a>1?a-1:1)},children:Object(h.jsx)("i",{className:"material-icons",children:"remove"})}),Object(h.jsx)("div",{className:"page-container-right-btn-group-input",children:Object(h.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},value:a,style:{height:"35px",width:"40px",textAlign:"center"}})}),Object(h.jsx)("div",{className:"btn waves-effect teal lighten-2",onClick:function(){return o(+a+1)},children:Object(h.jsx)("i",{className:"material-icons",children:"add"})}),c?Object(h.jsxs)("div",{className:"waves-effect waves-light btn btn-buy",children:[Object(h.jsx)(I.b,{to:"/cart",style:{color:"red"},children:"In Cart"})," "]}):Object(h.jsxs)("div",{className:"waves-effect waves-light btn btn-buy ",onClick:function(){return r(Object(Q.a)(Object(Q.a)({},t),{},{amount:Number(a)}))},children:[" ","Buy"," "]})]})},K=function(e){var t=e.page,c=Object(n.useState)(0),r=Object(u.a)(c,2),s=r[0],i=r[1];return Object(h.jsxs)("div",{className:"page-container-left  col s12 m12 l5",children:[t.img.map((function(e,c){return Object(h.jsxs)("div",{className:"page-container-img ".concat(c!==s&&"hide"," "),style:{background:"url(".concat(s===c&&e,") 0 0/100% 100% no-repeat")},children:[Object(h.jsx)("i",{className:"medium material-icons",onClick:function(){return i(0==s?c=t.img.length-1:c-1)},children:"chevron_left"}),Object(h.jsx)("i",{className:"medium material-icons",onClick:function(){return i(s==t.img.length-1?c=0:c+1)},children:"chevron_right"})]},c)})),Object(h.jsx)("div",{style:{margin:"5px 0",display:"flex"},children:t.img.map((function(e,t){return Object(h.jsx)("div",{style:{margin:"0 5px",width:"50px",height:"40px",background:"url(".concat(e,") 0 0/100% 100% no-repeat"),cursor:"pointer"},onClick:function(){return i(t)}},t)}))}),Object(h.jsx)("h4",{children:t.name})]})},Y=function(e){var t=e.cartItem,c=e.page,r=e.pageIndex,n=e.addToCart;return Object(h.jsx)("div",{className:"ProductPage col s12 m12  l10 ",children:Object(h.jsxs)("div",{className:"page-container ",children:[Object(h.jsx)(K,{page:c}),Object(h.jsxs)("div",{className:"page-container-right  col s12 m12 l7",children:[Object(h.jsxs)("div",{className:"page-container-right-price",children:[Object(h.jsx)("span",{children:"Price "}),Object(h.jsxs)("span",{children:[c.price," \u0433\u0440\u043d"]})]}),Object(h.jsx)(q,{page:c,cartItem:t,addToCart:n}),Object(h.jsx)(G,{page:c,pageIndex:r})]})]})})};var z,J=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isThemToogle:e.theme.isThemToogle,page:e.product.page,pageIndex:e.product.pageIndex,cartItem:e.cart.items,isLoad:e.theme.isLoad}}),{addToCart:P}))((function(e){var t=e.page,c=e.cartItem,r=e.addToCart,n=e.isLoad,s=e.pageIndex;return!1===n?Object(h.jsx)(L,{}):Object(h.jsx)(Y,{pageIndex:s,addToCart:r,page:t[0],cartItem:c.filter((function(e){return e.id===t[0].id}))[0]})}));!function(e){e.SET_FILTER="SET_FILTER"}(z||(z={}));var W=function(e){var t=e.isActiveSidebarLink,c=e.SetPage,r=e.setProd;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"collection ",children:[Object(h.jsxs)(I.b,{to:"/products/".concat(r(0)),className:"collection-item  ".concat(0===t&&" active"," "),onClick:function(e){return c(0)},children:[" ","\u041c\u043e\u0442\u043e\u0446\u0438\u043a\u043b\u0438"]}),Object(h.jsx)(I.b,{to:"/products/".concat(r(1)),className:"collection-item ".concat(1===t&&"active"," "),onClick:function(e){return c(1)},children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u0438"}),Object(h.jsx)(I.b,{to:"/products/".concat(r(2)),className:"collection-item ".concat(2===t&&"active"," "),onClick:function(e){return c(2)},children:"\u0420\u043e\u0431\u043e\u0442\u0438-\u043f\u0438\u043b\u043e\u0441\u043e\u0441\u0438"}),Object(h.jsx)(I.b,{to:"/products/".concat(r(3)),className:"collection-item  ".concat(3===t&&"active"," "),onClick:function(){return c(3)},children:"\u041a\u0432\u0430\u0434\u0440\u043e\u043a\u043e\u043f\u0442\u0435\u0440\u0438"})]})})},Z=(c(36),function(e){var t=e.setFilter,c=Object(n.useState)("all"),r=Object(u.a)(c,2),s=r[0],i=r[1],a=function(e){i(e),t(e)};return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{className:"collection ",style:{cursor:"pointer"},children:[Object(h.jsxs)("li",{className:"collection-item  ".concat("all"===s&&" active"," "),onClick:function(){return a("all")},children:[" ","\u0412\u0441\u0456"]}),Object(h.jsxs)("li",{className:"collection-item ".concat("price_hight"===s&&"active"),onClick:function(){return a("price_hight")},children:["\u0426\u0456\u043d\u0430",Object(h.jsx)("i",{className:"small material-icons",children:"arrow_drop_up"})]}),Object(h.jsxs)("li",{className:"collection-item ".concat("price_low"===s&&"active"," "),onClick:function(){return a("price_low")},children:[" ","\u0426\u0456\u043d\u0430",Object(h.jsx)("i",{className:"small material-icons",children:"arrow_drop_down"})]}),Object(h.jsx)("li",{className:"collection-item  ".concat("name"===s&&"active"," "),onClick:function(){return a("name")},children:"\u041f\u043e \u043d\u0430\u0437\u0432\u0456"})]})})}),X=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isLoad:e.theme.isLoad,isThemToogle:e.theme.isThemToogle,byFilter:e.filter.byFilter,isActiveSidebarLink:e.theme.isActiveSidebarLink,product:e.product.product}}),{setAllProducts:g,setPhones:v,setMotorcycles:T,setQudrocopters:N,setRobots:y,setActiveSidebarLink:S,setLoad:_,setFilter:function(e){return{type:z.SET_FILTER,payload:e}}}))((function(e){var t=e.isActiveSidebarLink,c=e.setPhones,r=e.setMotorcycles,n=e.setQudrocopters,s=e.setRobots,i=e.setActiveSidebarLink,a=e.setLoad,o=e.setFilter,l=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),e.next=3,u(t);case 3:return e.next=5,i(t);case 5:a(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){return 0===e?r():1===e?c():2===e?s():3===e?n():void 0};return Object(h.jsxs)("div",{className:"col s12 m0 l2 hide-on-med-and-down",children:[Object(h.jsx)(W,{setProd:function(e){return 0===e?"motorcycle":1===e?"phone":2===e?"robot":3===e?"qudrocopters":void 0},SetPage:l,isActiveSidebarLink:t}),Object(h.jsx)(Z,{setFilter:o})]})})),$=function(e){var t=e.theme,c=e.isThemToogle,r=e.cartItem,n=e.isOpenMenu,s=e.toggleTheme,i=e.toogleMenu,a=e.SetPage;return Object(h.jsx)("nav",{className:"nav-extended ".concat(t.headFootBg),children:Object(h.jsxs)("div",{className:"nav-wrapper",children:[Object(h.jsx)(I.b,{to:"/",className:"brand-logo left",style:{marginLeft:"40px"},onClick:function(){return a()},children:"Shop"}),Object(h.jsx)("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(h.jsx)("i",{className:"material-icons",onClick:function(){return i(!n)},children:n?"close":"menu"})}),Object(h.jsxs)("ul",{id:"nav-mobile",className:"right ",children:[Object(h.jsx)("li",{className:"switch  ",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("i",{className:"medium material-icons hide-on-small-only",children:c?"brightness_5":"brightness_3"})}),Object(h.jsx)("input",{type:"checkbox",checked:c,onChange:function(){return s(!c)}}),Object(h.jsx)("span",{className:"lever"})]})}),Object(h.jsx)("li",{children:r.length?Object(h.jsxs)(I.b,{to:"/".concat("cart"),style:{display:"flex"},children:[Object(h.jsx)("i",{className:"large material-icons",children:"shopping_cart"}),Object(h.jsx)("span",{className:"new badge red ",children:r.length})]}):Object(h.jsx)("a",{children:Object(h.jsx)("i",{className:"large material-icons ",children:"shopping_cart"})})})]})]})})},ee=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isThemToogle:e.theme.isThemToogle,cartItem:e.cart.items,byFilter:e.filter.byFilter}}),{toggleTheme:E,setLoad:_,setAllProducts:g,setActiveSidebarLink:S}))((function(e){var t=e.theme,c=e.isThemToogle,r=e.cartItem,n=e.isOpenMenu,s=e.visiblePopup,i=e.setActiveSidebarLink,a=e.toggleTheme,o=e.toogleMenu,l=e.setVisiblePopup,u=e.setAllProducts,b=e.setLoad,O=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),u(),e.next=4,i(!1);case 4:b(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)($,{SetPage:O,theme:t,isThemToogle:c,toggleTheme:a,toogleMenu:o,isOpenMenu:n,setVisiblePopup:l,visiblePopup:s,cartItem:r})})),te=(c(37),function(e){var t=e.item,c=e.setProductPage;return Object(h.jsxs)("div",{className:"productCart-left",children:[Object(h.jsxs)("div",{className:"productCart-left-img",children:[Object(h.jsxs)(I.b,{to:"/product/".concat(t.category,"/").concat(t.id),onClick:function(){return c(t)},children:[Object(h.jsx)("img",{src:t.img[0],alt:"none"})," "]})," "]}),Object(h.jsx)("div",{className:"productCart-left-description  ",children:Object(h.jsx)("p",{children:t.name})})]})}),ce=function(e){var t=e.item,c=e.addRemoveAmount,r=e.removeFromCart,s=Object(n.useState)(t.amount),i=Object(u.a)(s,2),a=i[0],o=i[1];return Object(n.useEffect)((function(){c(Object(Q.a)(Object(Q.a)({},t),{},{amount:+a}))}),[a]),Object(h.jsxs)("div",{className:"productCart-right",children:[Object(h.jsx)("div",{className:"productCart-right-prise ",children:Object(h.jsxs)("p",{children:[t.price," \u0433\u0440\u043d"]})}),Object(h.jsxs)("div",{className:"productCart-right-btn-group",children:[Object(h.jsx)("div",{className:"productCart-right-btn-group btn-effect  waves-effect waves-light  red ",onClick:function(){c(Object(Q.a)(Object(Q.a)({},t),{},{amount:t.amount>1?t.amount+-1:1}))},children:Object(h.jsx)("i",{className:"material-icons",children:"remove"})}),Object(h.jsxs)("div",{className:"productCart-right-btn-group-input ",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},value:t.amount})," "]}),Object(h.jsx)("div",{className:"productCart-right-btn-group btn-effect waves-effect waves-light green",onClick:function(){c(Object(Q.a)(Object(Q.a)({},t),{},{amount:t.amount+1}))},children:Object(h.jsx)("i",{className:"material-icons",children:" add"})})]}),Object(h.jsxs)("div",{className:"productCart-right-prise ",children:[t.amount*t.price," \u0433\u0440\u043d"]}),Object(h.jsx)("div",{className:"productCart-right-close  ",onClick:function(){r(t)},children:Object(h.jsx)("i",{className:"material-icons",children:"close"})})]})},re=function(e){var t=e.cartItems,c=e.addRemoveAmount,r=e.removeFromCart,n=e.setProductPage;return Object(h.jsx)("div",{className:"productCart  ",children:Object(h.jsxs)("div",{className:" col s12 m12  l10 ",children:[t&&t.map((function(e,t){return Object(h.jsxs)("div",{className:"productCart-container  ",children:[Object(h.jsx)("div",{className:"close-small-display   ",onClick:function(){r(e)},children:Object(h.jsx)("i",{className:"medium material-icons",children:"close"})}),Object(h.jsx)(te,{item:e,setProductPage:n}),Object(h.jsx)(ce,{addRemoveAmount:c,item:e,removeFromCart:r})]},t)})),Object(h.jsxs)("div",{className:"checkout-block",children:[Object(h.jsxs)("div",{className:"total-price",children:["Total",Object(h.jsxs)("span",{children:[t.reduce((function(e,t){return e+t.amount*t.price}),0),"\u0433\u0440\u043d"]})]}),Object(h.jsx)("div",{className:"checkout",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 "})]})]})})},ne=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isThemToogle:e.theme.isThemToogle,byFilter:e.filter.byFilter,cartItems:e.cart.items}}),{removeFromCart:function(e){return{type:C.REMOVE_FROM_CART,payload:e}},addRemoveAmount:function(e){return{type:C.ADD_REMOVE_AMOUNT,payload:e}},setProductPage:f}))((function(e){var t=e.cartItems,c=e.addRemoveAmount,r=e.removeFromCart,n=e.setProductPage;return 0===t.length?Object(h.jsx)(O.a,{to:"/"}):Object(h.jsx)(re,{addRemoveAmount:c,cartItems:t.sort((function(e,t){return e.id-t.id})),removeFromCart:r,setProductPage:n})})),se=function(e){var t=e.cartItem,c=e.isdropDown,r=e.isOpenMenu,n=e.toogleMenu,s=e.closeDropMenu,i=e.togleDropDown;return Object(h.jsxs)("ul",{className:"burger   ".concat(!r&&"hide"),children:[Object(h.jsxs)("li",{className:"item drop_down ",onClick:function(){return i(!c)},children:[Object(h.jsx)("span",{children:" \u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0422\u043e\u0432\u0430\u0440i\u0432"}),Object(h.jsxs)("ul",{className:"dropdown_content ".concat(!c&&"hide"),children:[Object(h.jsx)("li",{children:Object(h.jsx)(I.b,{to:"/products/motorcycle",onClick:function(){return s(0)},children:"Motorcycles"})}),Object(h.jsx)("li",{children:Object(h.jsx)(I.b,{to:"/products/phone",onClick:function(){return s(1)},children:"Phone"})}),Object(h.jsx)("li",{children:Object(h.jsx)(I.b,{to:"/products/robot",onClick:function(){return s(2)},children:"Robot"})}),Object(h.jsx)("li",{children:Object(h.jsx)(I.b,{to:"/products/qudrocopters",onClick:function(){return s(3)},children:"keadro"})})]})]}),Object(h.jsx)("li",{className:"item",children:Object(h.jsx)(I.b,{to:"/".concat("cart"),onClick:function(){return n(!r)},children:Object(h.jsxs)("div",{className:"".concat(!t.length&&"btn-flat disabled"," "),children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",t.length>0&&Object(h.jsx)("span",{className:"new badge red ",children:t.length})]})})}),Object(h.jsx)("li",{className:"item",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})},ie=Object(w.d)(Object(k.b)((function(e){return{cartItem:e.cart.items}}),{setMotorcycles:T,setPhones:v,setRobots:y,setQudrocopters:N}))((function(e){var t=e.cartItem,c=e.visiblePopup,r=e.isOpenMenu,s=e.setVisiblePopup,i=e.toogleMenu,a=e.setMotorcycles,o=e.setPhones,l=e.setRobots,d=e.setQudrocopters,j=Object(n.useState)(!1),b=Object(u.a)(j,2),O=b[0],p=b[1];return Object(h.jsx)(se,{cartItem:t,isdropDown:O,isOpenMenu:r,togleDropDown:p,closeDropMenu:function(e){var t;i(!r),null===e&&s(!c),0===(t=e)?a():1===t?o():2===t?l():3===t&&d()},toogleMenu:i})})),ae=function(e){var t=e.theme,c=e.isThemToogle,r=e.toggleTheme,s=Object(n.useState)(!1),i=Object(u.a)(s,2),a=i[0],o=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"row ".concat(t.contentBg),style:{margin:"0"},children:[Object(h.jsx)(ee,{theme:t,isThemToogle:c,toggleTheme:r,toogleMenu:o,isOpenMenu:a}),Object(h.jsx)(X,{}),Object(h.jsx)(ie,{toogleMenu:o,isOpenMenu:a}),Object(h.jsxs)("div",{style:{minHeight:"70vh"},children:[Object(h.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(M,{})}}),Object(h.jsx)(O.b,{path:"/products/:id",render:function(){return Object(h.jsx)(M,{})}}),Object(h.jsx)(O.b,{path:"/cart",render:function(){return Object(h.jsx)(ne,{})}}),Object(h.jsx)(O.b,{path:"/product/:category/:id",render:function(){return Object(h.jsx)(J,{})}})]})]}),Object(h.jsx)(b,{theme:t})]})},oe=Object(w.d)(Object(k.b)((function(e){return{theme:e.theme.theme,isThemToogle:e.theme.isThemToogle}}),{toggleTheme:E,setAllProducts:g,setPhones:v,setMotorcycles:T,setQudrocopters:N,setRobots:y,setLoad:_}))((function(e){var t=e.isThemToogle,c=e.theme,r=e.toggleTheme,s=e.setAllProducts,i=e.setPhones,a=e.setMotorcycles,o=e.setQudrocopters,l=e.setRobots,u=e.setLoad;return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(!1);case 2:return e.next=4,l();case 4:return e.next=6,i();case 6:return e.next=8,a();case 8:return e.next=10,o();case 10:s(),u(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)(ae,{theme:c,isThemToogle:t,toggleTheme:r})})),le=c(44),de=c.n(le),je=c(21),ue={product:[],phones:null,motorcycles:null,quadrocopters:null,robots:null,page:null,pageIndex:0};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_ALL_PRODUCT:return Object(Q.a)(Object(Q.a)({},e),{},{product:[].concat(Object(je.a)(e.phones),Object(je.a)(e.motorcycles),Object(je.a)(e.quadrocopters),Object(je.a)(e.robots))});case r.SET_MOTORCYCLES:return Object(Q.a)(Object(Q.a)({},e),{},{product:t.payload,motorcycles:t.payload});case r.SET_PHONE:return Object(Q.a)(Object(Q.a)({},e),{},{phones:t.payload,product:t.payload});case r.SET_ROBOTS:return Object(Q.a)(Object(Q.a)({},e),{},{robots:t.payload,product:t.payload});case r.SET_QUDROCOPTERS:return Object(Q.a)(Object(Q.a)({},e),{},{product:t.payload,quadrocopters:t.payload});case r.SET_PRODUCT_PAGE:return Object(Q.a)(Object(Q.a)({},e),{},{page:e.product.filter((function(e){return e.id===t.payload.id&&e})),pageIndex:("motorcycles"===t.payload.category?1:"phones"===t.payload.category&&2)||"robots"===t.payload.category&&3||"qudrocopters"===t.payload.category&&4});default:return e}},be={headFootBg:"light-blue darken-2",contentBg:" blue lighten-4"},Oe={headFootBg:" grey darken-3",contentBg:" blue-grey darken-2"},pe={isThemToogle:!1,theme:be,isLoad:null,isActiveSidebarLink:!1};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.TOGGLE_THEME:return Object(Q.a)(Object(Q.a)({},e),{},{isThemToogle:t.payload,theme:e.isThemToogle?be:Oe});case m.SET_LOAD:return Object(Q.a)(Object(Q.a)({},e),{},{isLoad:t.payload});case m.SET_ACTIVE_SIDEBAR_LINK:return Object(Q.a)(Object(Q.a)({},e),{},{isActiveSidebarLink:t.payload});default:return e}},xe={byFilter:"all"};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.SET_FILTER:return Object(Q.a)(Object(Q.a)({},e),{},{byFilter:t.payload});default:return e}},fe={totalPrice:0,items:[],countItem:0};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.ADD_REMOVE_AMOUNT:return Object(Q.a)(Object(Q.a)({},e),{},{items:[].concat(Object(je.a)(e.items.filter((function(e){return e.id!==t.payload.id}))),[t.payload])});case"SET_PRICE_MINUS":return Object(Q.a)(Object(Q.a)({},e),{},{totalPrice:e.totalPrice-t.payload});case C.ADD_TO_CART:return Object(Q.a)(Object(Q.a)({},e),{},{items:[].concat(Object(je.a)(e.items),[Object(Q.a)(Object(Q.a)({},t.payload),{},{inCart:!0})])});case C.REMOVE_FROM_CART:return Object(Q.a)(Object(Q.a)({},e),{},{items:Object(je.a)(e.items.filter((function(e){return e.id!==t.payload.id})))});default:return e}},Te=c(45),ye=Object(w.c)({theme:me,product:he,filter:ge,cart:ve}),Ne=Object(w.e)(ye,Object(w.a)(de.a,Te.a));Ne.subscribe((function(){return console.log(Ne.getState())}));var Ce=Ne;a.a.render(Object(h.jsx)(I.a,{children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(k.a,{store:Ce,children:Object(h.jsx)(oe,{})})})}),document.getElementById("root")),o()}},[[62,1,2]]]);
//# sourceMappingURL=main.fea920a1.chunk.js.map