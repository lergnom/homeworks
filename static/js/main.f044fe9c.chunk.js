(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{14:function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",access:"Greeting_access__1BCN2",formWrapper:"Greeting_formWrapper__34T4r",errorText:"Greeting_errorText__1pVNf"}},16:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},21:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},22:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},23:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},27:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(26),c=a.n(s),i=(a(34),a(27)),o=a.n(i),l=a(3),j=a(9),u=a(7),b=a.n(u),d=a(0);var h=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:b.a.menu,children:[" ",a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/pre-junior",activeClassName:b.a.link,children:"pre-junior"}),a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/junior",activeClassName:b.a.link,children:"junior"}),a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/junior-plus",activeClassName:b.a.link,children:"junior+"}),Object(d.jsx)("span",{className:b.a.links,onClick:function(){r(!a)},children:"links"})]})})},m=a(2),x=a(8),O=a.n(x);var p=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("div",{className:O.a.avatarWrapper,children:Object(d.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:O.a.messageWrapper,children:[Object(d.jsx)("div",{className:O.a.nameBlock,children:e.name}),Object(d.jsx)("div",{className:O.a.messageBlock,children:e.message}),Object(d.jsx)("div",{className:O.a.timeBlock,children:e.time})]})]})})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",k="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:_,name:f,message:v,time:k}),Object(d.jsx)(p,{avatar:_,name:f,message:v,time:k}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=a(6),N=a.n(C);var S=function(e){return Object(d.jsxs)("div",{className:N.a.element,children:[e.affair._id,".",Object(d.jsxs)("span",{className:N.a.fontBold,children:[" ",e.affair.name," "]}),Object(d.jsx)("span",{className:N.a.span+" "+e.affair.priority,children:e.affair.priority}),Object(d.jsx)("button",{className:N.a.btnDeleteClass,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(d.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:N.a.someClass,children:t}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(n.useState)(w),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("all"),c=Object(l.a)(s,2),i=c[0],o=c[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=a(29),T=a(14),W=a.n(T),I=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.clickEnterButton,s=e.error,c=e.totalUsers,i=t.length>0?W.a.access:W.a.error;return Object(d.jsxs)("div",{className:W.a.formWrapper,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:a,className:i,onKeyPress:r}),Object(d.jsx)("button",{onClick:n,children:"add"})]}),Object(d.jsxs)("span",{children:["All users in base: ",c," pc."]}),Object(d.jsx)("span",{className:W.a.errorText,children:s})]})},E=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(l.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],h=function(){""!==c?(a(c),alert("Hello ".concat(c,"!")),i("")):b("Please add user to input :(")},m=t.length;return Object(d.jsx)(I,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&b("")):(c&&i(""),b("Please, add correct user name :("))},addUser:h,error:u,totalUsers:m,clickEnterButton:function(e){"Enter"===e.key&&h()}})},H=a(43);var M=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(E,{users:a,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};r([].concat(Object(A.a)(a),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},P=a(10),U=a(11),F=a(16),L=a.n(F),G=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=(e.className,e.spanClassName),i=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(L.a.error," ").concat(c||""),l="".concat(L.a.superInput,"  ").concat(s?L.a.errorInput:""," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:l},i)),s&&Object(d.jsx)("span",{className:o,children:s})]})},J=a(21),D=a.n(J),R=a(22),X=a.n(R),K=function(e){var t=e.red,a=e.className,n=Object(U.a)(e,["red","className"]),r="".concat(t?X.a.red:X.a.default," ").concat(a);return Object(d.jsx)("button",Object(P.a)({className:r},n))},q=a(23),Q=a.n(q),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Q.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:r})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:D.a.column,children:[Object(d.jsx)(G,{value:a,onChangeText:r,onEnter:c,error:s}),Object(d.jsx)(G,{className:D.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(B,{}),Object(d.jsx)(M,{}),Object(d.jsx)(Z,{})]})};var V=function(){return Object(d.jsxs)("div",{style:{background:"red",height:"600px"},children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var $=function(){return Object(d.jsx)("div",{children:"JUNIOR"})};var ee=function(){return Object(d.jsx)("div",{children:"PLUS"})},te="/pre-junior",ae="/junior",ne="/junior-plus";var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(m.a,{to:te})}}),Object(d.jsx)(m.b,{path:te,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(m.b,{path:ae,render:function(){return Object(d.jsx)($,{})}}),Object(d.jsx)(m.b,{path:ne,render:function(){return Object(d.jsx)(ee,{})}}),"// add routes",Object(d.jsx)(m.b,{render:function(){return Object(d.jsx)(V,{})}})]})})};var se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(re,{})]})})};var ce=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={someClass:"Affairs_someClass__l4fwN",element:"Affairs_element__HEEJt",btnClass:"Affairs_btnClass__SYqRO",btnDeleteClass:"Affairs_btnDeleteClass__1yaAw",span:"Affairs_span__2emaf",fontBold:"Affairs_fontBold__1p7Px"}},7:function(e,t,a){e.exports={link:"Header_link__1oUIl",menu:"Header_menu__1_jqh",navLink:"Header_navLink__16Qkp",links:"Header_links__2TeUu"}},8:function(e,t,a){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",messageWrapper:"Message_messageWrapper__1DRDM",nameBlock:"Message_nameBlock__2bM0D",messageBlock:"Message_messageBlock__3mqFX",timeBlock:"Message_timeBlock__1bsuf",avatarWrapper:"Message_avatarWrapper__3PnrL"}}},[[41,1,2]]]);
//# sourceMappingURL=main.f044fe9c.chunk.js.map