(function(e){function t(t){for(var c,r,a=t[0],l=t[1],s=t[2],d=0,b=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/hello-world/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1eb5":function(e,t,n){"use strict";n("6f7f")},3819:function(e,t,n){e.exports=n.p+"img/L144-w.2378a71d.png"},"4ce6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=n("e8e0"),o=n.n(i),r=n("3819"),a=n.n(r),l={id:"page__header__container"},s={id:"page__header__wrapper"},u=Object(c["g"])("div",null,null,-1),d=Object(c["g"])("div",null,null,-1),b=Object(c["g"])("div",null,null,-1),_=Object(c["h"])(" О школе "),p=Object(c["h"])(" Меню "),f={id:"page__content"},g=Object(c["g"])("footer",{id:"page__footer"}," 2021 ",-1);function O(e,t,n,i,r,O){var m=Object(c["x"])("router-link"),j=Object(c["x"])("router-view"),h=Object(c["x"])("Menu");return Object(c["r"])(),Object(c["f"])("div",{id:"app",onScrollPassive:t[3]||(t[3]=function(){return O.showHeader&&O.showHeader.apply(O,arguments)})},[Object(c["g"])("header",l,[Object(c["g"])("div",s,[Object(c["i"])(m,{to:"/",id:"header_logo"},{default:Object(c["B"])((function(){return[u,r.isLogoBlack?(Object(c["r"])(),Object(c["f"])("img",{key:0,src:o.a,alt:"логотип",onClick:t[0]||(t[0]=function(){return O.clickMenuOff&&O.clickMenuOff.apply(O,arguments)})})):Object(c["e"])("",!0),r.isLogoBlack?Object(c["e"])("",!0):(Object(c["r"])(),Object(c["f"])("img",{key:1,src:a.a,alt:"логотип",onClick:t[1]||(t[1]=function(){return O.clickMenuOff&&O.clickMenuOff.apply(O,arguments)})})),d]})),_:1}),b,Object(c["g"])("nav",{id:"header_navigation",onClick:t[2]||(t[2]=function(){return O.clickMenuOn&&O.clickMenuOn.apply(O,arguments)})},[Object(c["i"])(m,{to:"/",id:"header_navigation_aboutschool"},{default:Object(c["B"])((function(){return[_]})),_:1}),Object(c["i"])(m,{to:"/menu",id:"header_navigation_menu"},{default:Object(c["B"])((function(){return[p]})),_:1})])])]),Object(c["g"])("main",f,[Object(c["i"])(j)]),Object(c["i"])(h),g],32)}var m={data:function(){return{isVisibleHeader:!0,isLogoBlack:!1}},methods:{showHeader:function(){var e=document.getElementById("app"),t=document.getElementById("page__header__container"),n=e.getBoundingClientRect(),c=n.top,i=document.documentElement.clientHeight;if(c<95-i&&this.isVisibleHeader){t.style.backgroundColor="rgba(100, 100,100, .4)",t.style.backdropFilter="blur(20px)",t.style.webkitBackdropFilter="blur(20px)";var o=document.getElementById("header_navigation_aboutschool");o.style.color="#fff";var r=document.getElementById("header_navigation_menu");r.style.color="#fff",this.isLogoBlack=!1}if(c>=95-i&&this.isVisibleHeader){t.style.backgroundColor="rgba(100, 100,100, 0)",t.style.backdropFilter="blur(0px)",t.style.webkitBackdropFilter="blur(0px)";var a=document.getElementById("header_navigation_aboutschool");a.style.color="#555";var l=document.getElementById("header_navigation_menu");l.style.color="#555",this.isLogoBlack=!0}},clickMenuOff:function(){var e=document.getElementById("page__header__container");e.style.backgroundColor="rgba(100, 100,100, 0)",e.style.backdropFilter="blur(0px)",e.style.webkitBackdropFilter="blur(0px)";var t=document.getElementById("header_navigation_aboutschool");t.style.color="#555";var n=document.getElementById("header_navigation_menu");n.style.color="#555",this.isVisibleHeader=!0,this.isLogoBlack=!0},clickMenuOn:function(){var e=document.getElementById("page__header__container");e.style.backgroundColor="rgba(100, 100,100, .4)",e.style.backdropFilter="blur(20px)",e.style.webkitBackdropFilter="blur(20px)";var t=document.getElementById("header_navigation_aboutschool");t.style.color="#fff";var n=document.getElementById("header_navigation_menu");n.style.color="#fff",this.isVisibleHeader=!1,this.isLogoBlack=!1}},mounted:function(){window.addEventListener("scroll",this.showHeader),this.showHeader()}};n("1eb5");m.render=O;var j=m,h=n("6c02"),v=n("d7cb"),y=n.n(v),w=n("5d9f"),k=n.n(w);Object(c["u"])("data-v-59ce1198");var B=y.a,x=y.a,S={class:"home"},E={id:"page_container"},I=Object(c["g"])("section",{id:"section_fixed_1"},null,-1),H={key:0,class:"section_wrapper",id:"section_wrapper_1"},L=Object(c["g"])("picture",{id:"section_1_picture"},[Object(c["g"])("source",{srcset:B,media:"(min-width: 1200px)"}),Object(c["g"])("source",{srcset:x,media:"(min-width: 800px)"}),Object(c["g"])("img",{src:y.a,alt:"velo"})],-1),M=Object(c["g"])("div",{id:"section_1_text"},[Object(c["g"])("p",{class:"section_1_text_p"},"Лицей с углубленным изучением всего"),Object(c["g"])("p",{class:"section_1_text_p"},"Санкт-Петербург")],-1),C=[L,M],P=Object(c["g"])("section",{id:"section_fixed_2"},null,-1),F={key:0,class:"section_wrapper",id:"section_wrapper_2"},V=Object(c["g"])("img",{src:k.a,alt:"pi"},null,-1),R=Object(c["g"])("div",{id:"section_2_text"},[Object(c["g"])("p",{class:"section_2_text_p"},"Инженерное направление")],-1),J=[V,R];function T(e,t,n,i,o,r){return Object(c["r"])(),Object(c["d"])(c["a"],{name:"slideViewEnter",appear:""},{default:Object(c["B"])((function(){return[Object(c["g"])("div",S,[Object(c["g"])("div",E,[I,Object(c["g"])("section",{class:"section",id:"section_1",onScrollPassive:t[0]||(t[0]=function(){return r.showSection_1&&r.showSection_1.apply(r,arguments)})},[Object(c["i"])(c["a"],{name:"slide-fade-left"},{default:Object(c["B"])((function(){return[o.isShowSection_1?(Object(c["r"])(),Object(c["f"])("div",H,C)):Object(c["e"])("",!0)]})),_:1})],32),P,Object(c["g"])("section",{class:"section",id:"section_2",onScrollPassive:t[1]||(t[1]=function(){return r.showSection_2&&r.showSection_2.apply(r,arguments)})},[Object(c["i"])(c["a"],{name:"slide-fade"},{default:Object(c["B"])((function(){return[o.isShowSection_2?(Object(c["r"])(),Object(c["f"])("div",F,J)):Object(c["e"])("",!0)]})),_:1})],32)])])]})),_:1})}Object(c["s"])();var q={name:"Home",data:function(){return{isShowSection_1:!1,isShowSection_2:!1}},methods:{showSection_1:function(){var e=document.getElementById("section_1"),t=e.getBoundingClientRect(),n=t.top,c=document.documentElement.clientHeight;n<c/3&&(this.isShowSection_1=!0)},showSection_2:function(){var e=document.getElementById("section_2"),t=e.getBoundingClientRect(),n=t.top,c=document.documentElement.clientHeight;n<c/3&&(this.isShowSection_2=!0)}},mounted:function(){window.addEventListener("scroll",this.showSection_1),window.addEventListener("scroll",this.showSection_2)},beforeRouteLeave:function(){window.removeEventListener("scroll",this.showSection_1),window.removeEventListener("scroll",this.showSection_2)}};n("5823");q.render=T,q.__scopeId="data-v-59ce1198";var z=q;Object(c["u"])("data-v-74028d7c");var A={class:"menu"},D={id:"page_container"},G=Object(c["g"])("div",{id:"header_container"},[Object(c["g"])("div",{id:"header_wrapper"},[Object(c["g"])("div",{id:"header"},[Object(c["g"])("p",null,"Меню")])])],-1),K={id:"content_container"},N={id:"content_wrapper"},Q={id:"content"},U=Object(c["g"])("div",{class:"content_item_artical"},[Object(c["g"])("p",{class:"content_item_artical_number"},"1"),Object(c["g"])("p",{class:"content_item_artical_name"},"Сведения об образовательной организации")],-1),W=Object(c["g"])("div",{class:"content_item_artical"},[Object(c["g"])("p",{class:"content_item_artical_number"},"2"),Object(c["g"])("p",{class:"content_item_artical_name"},"ОДОД")],-1),X=Object(c["g"])("div",{class:"content_item_artical"},[Object(c["g"])("p",{class:"content_item_artical_number"},"3"),Object(c["g"])("p",{class:"content_item_artical_name"},"Расписание")],-1),Y=Object(c["g"])("div",{class:"content_item_artical"},[Object(c["g"])("p",{class:"content_item_artical_number"},"4"),Object(c["g"])("p",{class:"content_item_artical_name"},"Газета")],-1),Z=Object(c["g"])("div",{class:"content_item_artical"},[Object(c["g"])("p",{class:"content_item_artical_number"},"5"),Object(c["g"])("p",{class:"content_item_artical_name"},"Центр информатизации образования")],-1);function $(e,t,n,i,o,r){var a=Object(c["x"])("router-link");return Object(c["r"])(),Object(c["f"])("div",A,[Object(c["i"])(c["a"],{name:"slideViewEnter",appear:""},{default:Object(c["B"])((function(){return[Object(c["g"])("div",D,[G,Object(c["g"])("div",K,[Object(c["g"])("div",N,[Object(c["g"])("ul",Q,[Object(c["i"])(a,{to:"/",tag:"li",class:"content_item"},{default:Object(c["B"])((function(){return[U]})),_:1}),Object(c["i"])(a,{to:"/",tag:"li",class:"content_item"},{default:Object(c["B"])((function(){return[W]})),_:1}),Object(c["i"])(a,{to:"/",tag:"li",class:"content_item"},{default:Object(c["B"])((function(){return[X]})),_:1}),Object(c["i"])(a,{to:"/",tag:"li",class:"content_item"},{default:Object(c["B"])((function(){return[Y]})),_:1}),Object(c["i"])(a,{to:"/",tag:"li",class:"content_item"},{default:Object(c["B"])((function(){return[Z]})),_:1})])])])])]})),_:1})])}Object(c["s"])();var ee={name:"Menu"};n("9352");ee.render=$,ee.__scopeId="data-v-74028d7c";var te=ee,ne=[{path:"/",name:"Home",component:z},{path:"/menu",name:"Menu",component:te}],ce=Object(h["a"])({history:Object(h["b"])("/hello-world/"),routes:ne,scrollBehavior:function(){return{top:0}}}),ie=ce;Object(c["c"])(j).use(ie).mount("#app")},5823:function(e,t,n){"use strict";n("8f6f")},"5d9f":function(e,t,n){e.exports=n.p+"img/mathematics-989121_1920.bd686a16.png"},"6f7f":function(e,t,n){},"8f6f":function(e,t,n){},9352:function(e,t,n){"use strict";n("4ce6")},d7cb:function(e,t,n){e.exports=n.p+"img/main-background.6b06f57b.png"},e8e0:function(e,t,n){e.exports=n.p+"img/L144.8158a2df.png"}});
//# sourceMappingURL=app.1bb0ab8e.js.map