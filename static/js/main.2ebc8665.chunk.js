(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",element:"Affairs_element__HEEJt",btnClass:"Affairs_btnClass__SYqRO",btnDeleteClass:"Affairs_btnDeleteClass__1yaAw",span:"Affairs_span__2emaf",fontBold:"Affairs_fontBold__1p7Px"}},function(e,t,n){e.exports={link:"Header_link__1oUIl",menu:"Header_menu__1_jqh",navLink:"Header_navLink__16Qkp",links:"Header_links__2TeUu"}},function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",messageWrapper:"Message_messageWrapper__1DRDM",nameBlock:"Message_nameBlock__2bM0D",messageBlock:"Message_messageBlock__3mqFX",timeBlock:"Message_timeBlock__1bsuf",avatarWrapper:"Message_avatarWrapper__3PnrL"}},,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",access:"Greeting_access__1BCN2",formWrapper:"Greeting_formWrapper__34T4r",errorText:"Greeting_errorText__1pVNf"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,,,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,function(e,t,n){e.exports={span:"span_span__15Zw1"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(26),c=n.n(s),i=(n(35),n(27)),o=n.n(i),j=n(3),l=n(11),u=n(9),b=n.n(u),d=n(0);var O=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:b.a.menu,children:[" ",n&&Object(d.jsx)(l.b,{className:b.a.navLink,to:"/pre-junior",activeClassName:b.a.link,children:"pre-junior"}),n&&Object(d.jsx)(l.b,{className:b.a.navLink,to:"/junior",activeClassName:b.a.link,children:"junior"}),n&&Object(d.jsx)(l.b,{className:b.a.navLink,to:"/junior-plus",activeClassName:b.a.link,children:"junior+"}),Object(d.jsx)("span",{className:b.a.links,onClick:function(){r(!n)},children:"links"})]})})},h=n(2),x=n(10),p=n.n(x);var m=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:p.a.message,children:[Object(d.jsx)("div",{className:p.a.avatarWrapper,children:Object(d.jsx)("img",{className:p.a.avatar,src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:p.a.messageWrapper,children:[Object(d.jsx)("div",{className:p.a.nameBlock,children:e.name}),Object(d.jsx)("div",{className:p.a.messageBlock,children:e.message}),Object(d.jsx)("div",{className:p.a.timeBlock,children:e.time})]})]})})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",g="22:00";var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:f,name:_,message:v,time:g}),Object(d.jsx)(m,{avatar:f,name:_,message:v,time:g}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=n(8),N=n.n(C);var S=function(e){return Object(d.jsxs)("div",{className:N.a.element,children:[e.affair._id,".",Object(d.jsxs)("span",{className:N.a.fontBold,children:[" ",e.affair.name," "]}),Object(d.jsx)("span",{className:N.a.span+" "+e.affair.priority,children:e.affair.priority}),Object(d.jsx)("button",{className:N.a.btnDeleteClass,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(d.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:N.a.someClass,children:t}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:N.a.btnClass,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(a.useState)(w),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("all"),c=Object(j.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=n(30),T=n(14),W=n.n(T),E=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.clickEnterButton,s=e.error,c=e.totalUsers,i=t.length>0?W.a.access:W.a.error;return Object(d.jsxs)("div",{className:W.a.formWrapper,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:r}),Object(d.jsx)("button",{onClick:a,children:"add"})]}),Object(d.jsxs)("span",{children:["All users in base: ",c," pc."]}),Object(d.jsx)("span",{className:W.a.errorText,children:s})]})},I=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),s=Object(j.a)(r,2),c=s[0],i=s[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],O=function(){""!==c?(n(c),alert("Hello ".concat(c,"!")),i("")):b("Please add user to input :(")},h=t.length;return Object(d.jsx)(E,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&b("")):(c&&i(""),b("Please, add correct user name :("))},addUser:O,error:u,totalUsers:h,clickEnterButton:function(e){"Enter"===e.key&&O()}})},F=n(44);var P=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};r([].concat(Object(A.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},H=n(4),M=n(5),U=n(16),D=n.n(U),J=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,c=(e.className,e.spanClassName),i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(D.a.error," ").concat(c||""),j="".concat(D.a.superInput,"  ").concat(s?D.a.errorInput:""," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),s&&Object(d.jsx)("span",{className:o,children:s})]})},L=n(21),G=n.n(L),R=n(22),X=n.n(R),K=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),r="".concat(t?X.a.red:X.a.default," ").concat(n);return Object(d.jsx)("button",Object(H.a)({className:r},a))},q=n(23),Z=n.n(q),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),s=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Z.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:c},s)),r&&Object(d.jsx)("span",{className:Z.a.spanClassName,children:r})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=n?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:G.a.column,children:[Object(d.jsx)(J,{value:n,onChangeText:r,onEnter:c,error:s}),Object(d.jsx)(J,{className:G.a.blue}),Object(d.jsx)(K,{children:"default"}),Object(d.jsx)(K,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(K,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:l,onChangeChecked:u,children:"some text "}),Object(d.jsx)(z,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Y=n(29),V=n.n(Y),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,s=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),c=Object(a.useState)(!1),i=Object(j.a)(c,2),o=i[0],l=i[1],u=r||{},b=u.children,O=u.onDoubleClick,h=u.className,x=Object(M.a)(u,["children","onDoubleClick","className"]),p="".concat(V.a.span," ").concat(h||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(J,Object(H.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},s)):Object(d.jsxs)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){l(!0),O&&O(e)},className:p},x),{},{children:[b||s.value," \u270d"]}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)($,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(K,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(d.jsx)(K,{onClick:function(){r(te("editable-span-value",n))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(B,{}),Object(d.jsx)(P,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(ne,{})]})};var re=function(){return Object(d.jsxs)("div",{style:{background:"red",height:"900px"},children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},se=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(M.a)(e,["options","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(H.a)(Object(H.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:s}))},ce=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,s=e.onChangeOption,c=Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),s&&s(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(H.a)({onChange:i,type:"radio",value:e,name:t,checked:e===a},c)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},ie=["x","y","z"];var oe=function(){var e=Object(a.useState)(ie[1]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(se,{options:ie,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(ce,{name:"radio",options:ie,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var je=function(){return Object(d.jsxs)("div",{children:["JUNIOR",Object(d.jsx)(ne,{}),Object(d.jsx)(oe,{})]})};var le=function(){return Object(d.jsx)("div",{children:"PLUS"})},ue="/pre-junior",be="/junior",de="/junior-plus";var Oe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:ue})}}),Object(d.jsx)(h.b,{path:ue,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(h.b,{path:be,render:function(){return Object(d.jsx)(je,{})}}),Object(d.jsx)(h.b,{path:de,render:function(){return Object(d.jsx)(le,{})}}),"// add routes",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(re,{})}})]})})};var he=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(Oe,{})]})})};var xe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.2ebc8665.chunk.js.map