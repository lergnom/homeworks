(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,function(e,t,a){e.exports={someClass:"Affairs_someClass__l4fwN",element:"Affairs_element__HEEJt",btnClass:"Affairs_btnClass__SYqRO",btnDeleteClass:"Affairs_btnDeleteClass__1yaAw",span:"Affairs_span__2emaf",fontBold:"Affairs_fontBold__1p7Px"}},,,function(e,t,a){e.exports={link:"Header_link__1oUIl",menu:"Header_menu__1_jqh",navLink:"Header_navLink__16Qkp",links:"Header_links__2TeUu"}},function(e,t,a){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",messageWrapper:"Message_messageWrapper__1DRDM",nameBlock:"Message_nameBlock__2bM0D",messageBlock:"Message_messageBlock__3mqFX",timeBlock:"Message_timeBlock__1bsuf",avatarWrapper:"Message_avatarWrapper__3PnrL"}},,,,function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",access:"Greeting_access__1BCN2",formWrapper:"Greeting_formWrapper__34T4r",errorText:"Greeting_errorText__1pVNf"}},,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,,,function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},,function(e,t,a){e.exports={span:"span_span__15Zw1"}},,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(26),c=a.n(s),i=(a(35),a(27)),o=a.n(i),l=a(3),j=a(11),u=a(9),b=a.n(u),d=a(0);var O=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:b.a.menu,children:[" ",a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/pre-junior",activeClassName:b.a.link,children:"pre-junior"}),a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/junior",activeClassName:b.a.link,children:"junior"}),a&&Object(d.jsx)(j.b,{className:b.a.navLink,to:"/junior-plus",activeClassName:b.a.link,children:"junior+"}),Object(d.jsx)("span",{className:b.a.links,onClick:function(){r(!a)},children:"links"})]})})},h=a(2),x=a(10),m=a.n(x);var p=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:m.a.message,children:[Object(d.jsx)("div",{className:m.a.avatarWrapper,children:Object(d.jsx)("img",{className:m.a.avatar,src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:m.a.messageWrapper,children:[Object(d.jsx)("div",{className:m.a.nameBlock,children:e.name}),Object(d.jsx)("div",{className:m.a.messageBlock,children:e.message}),Object(d.jsx)("div",{className:m.a.timeBlock,children:e.time})]})]})})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",k="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:f,name:_,message:v,time:k}),Object(d.jsx)(p,{avatar:f,name:_,message:v,time:k}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=a(6),N=a.n(C);var S=function(e){return Object(d.jsxs)("div",{className:N.a.element,children:[e.affair._id,".",Object(d.jsxs)("span",{className:N.a.fontBold,children:[" ",e.affair.name," "]}),Object(d.jsx)("span",{className:N.a.span+" "+e.affair.priority,children:e.affair.priority}),Object(d.jsx)("button",{className:N.a.btnDeleteClass,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(d.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:N.a.someClass,children:t}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(n.useState)(w),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("all"),c=Object(l.a)(s,2),i=c[0],o=c[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=a(30),T=a(14),W=a.n(T),E=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.clickEnterButton,s=e.error,c=e.totalUsers,i=t.length>0?W.a.access:W.a.error;return Object(d.jsxs)("div",{className:W.a.formWrapper,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:a,className:i,onKeyPress:r}),Object(d.jsx)("button",{onClick:n,children:"add"})]}),Object(d.jsxs)("span",{children:["All users in base: ",c," pc."]}),Object(d.jsx)("span",{className:W.a.errorText,children:s})]})},I=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(l.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],O=function(){""!==c?(a(c),alert("Hello ".concat(c,"!")),i("")):b("Please add user to input :(")},h=t.length;return Object(d.jsx)(E,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&b("")):(c&&i(""),b("Please, add correct user name :("))},addUser:O,error:u,totalUsers:h,clickEnterButton:function(e){"Enter"===e.key&&O()}})},F=a(44);var P=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(I,{users:a,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};r([].concat(Object(A.a)(a),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=a(7),M=a(8),U=a(16),D=a.n(U),J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=(e.className,e.spanClassName),i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(D.a.error," ").concat(c||""),l="".concat(D.a.superInput,"  ").concat(s?D.a.errorInput:""," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:l},i)),s&&Object(d.jsx)("span",{className:o,children:s})]})},L=a(21),G=a.n(L),R=a(22),X=a.n(R),K=function(e){var t=e.red,a=e.className,n=Object(M.a)(e,["red","className"]),r="".concat(t?X.a.red:X.a.default," ").concat(a);return Object(d.jsx)("button",Object(H.a)({className:r},n))},q=a(23),Z=a.n(q),Q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Z.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(d.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var Y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(J,{value:a,onChangeText:r,onEnter:c,error:s}),Object(d.jsx)(J,{className:G.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(Q,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Q,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},z=a(29),V=a.n(z),$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,s=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),c=Object(n.useState)(!1),i=Object(l.a)(c,2),o=i[0],j=i[1],u=r||{},b=u.children,O=u.onDoubleClick,h=u.className,x=Object(M.a)(u,["children","onDoubleClick","className"]),m="".concat(V.a.span," ").concat(h||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(J,Object(H.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()}},s)):Object(d.jsxs)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){j(!0),O&&O(e)},className:m},x),{},{children:[b||s.value," \u270d"]}))})};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)($,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}})}),Object(d.jsx)(K,{onClick:function(){ee("editable-span-value",a)},children:"save"}),Object(d.jsx)(K,{onClick:function(){r(te("editable-span-value",a))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(B,{}),Object(d.jsx)(P,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(ae,{})]})};var re=function(){return Object(d.jsxs)("div",{style:{background:"red",height:"900px"},children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var se=function(){return Object(d.jsx)("div",{children:"JUNIOR"})};var ce=function(){return Object(d.jsx)("div",{children:"PLUS"})},ie="/pre-junior",oe="/junior",le="/junior-plus";var je=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:ie})}}),Object(d.jsx)(h.b,{path:ie,render:function(){return Object(d.jsx)(ne,{})}}),Object(d.jsx)(h.b,{path:oe,render:function(){return Object(d.jsx)(se,{})}}),Object(d.jsx)(h.b,{path:le,render:function(){return Object(d.jsx)(ce,{})}}),"// add routes",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(re,{})}})]})})};var ue=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(je,{})]})})};var be=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.7b77a4e3.chunk.js.map