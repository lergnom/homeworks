(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",element:"Affairs_element__HEEJt",btnClass:"Affairs_btnClass__SYqRO",btnDeleteClass:"Affairs_btnDeleteClass__1yaAw",span:"Affairs_span__2emaf",fontBold:"Affairs_fontBold__1p7Px"}},function(e,t,n){e.exports={link:"Header_link__1oUIl",menu:"Header_menu__1_jqh",navLink:"Header_navLink__16Qkp",links:"Header_links__2TeUu"}},,function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",messageWrapper:"Message_messageWrapper__1DRDM",nameBlock:"Message_nameBlock__2bM0D",messageBlock:"Message_messageBlock__3mqFX",timeBlock:"Message_timeBlock__1bsuf",avatarWrapper:"Message_avatarWrapper__3PnrL"}},,,function(e,t,n){e.exports={slider:"SuperDoubleRange_slider__XtlyU",min:"SuperDoubleRange_min__1gN30",minDrag:"SuperDoubleRange_minDrag__1KhEO",max:"SuperDoubleRange_max__3Yqqh",maxDrag:"SuperDoubleRange_maxDrag__2BJbe"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",access:"Greeting_access__1BCN2",formWrapper:"Greeting_formWrapper__34T4r",errorText:"Greeting_errorText__1pVNf"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,,,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,t,n){e.exports={imgWrapper:"Preloader_imgWrapper__QY4z-"}},function(e,t,n){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv",blue:"HW12_blue__3Q2SK","blue-text":"HW12_blue-text__1X9Mu"}},,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={span:"span_span__15Zw1"}},function(e,t,n){e.exports={range:"SuperRange_range__2K0wQ"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),s=n.n(c),i=(n(41),n(34)),o=n.n(i),j=n(2),l=n(12),u=n(9),b=n.n(u),O=n(0);var d=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:b.a.menu,children:[" ",n&&Object(O.jsx)(l.b,{className:b.a.navLink,to:"/pre-junior",activeClassName:b.a.link,children:"pre-junior"}),n&&Object(O.jsx)(l.b,{className:b.a.navLink,to:"/junior",activeClassName:b.a.link,children:"junior"}),n&&Object(O.jsx)(l.b,{className:b.a.navLink,to:"/junior-plus",activeClassName:b.a.link,children:"junior+"}),Object(O.jsx)("span",{className:b.a.links,onClick:function(){a(!n)},children:"links"})]})})},h=n(4),v=n(11),A=n.n(v);var x=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:A.a.message,children:[Object(O.jsx)("div",{className:A.a.avatarWrapper,children:Object(O.jsx)("img",{className:A.a.avatar,src:e.avatar,alt:""})}),Object(O.jsxs)("div",{className:A.a.messageWrapper,children:[Object(O.jsx)("div",{className:A.a.nameBlock,children:e.name}),Object(O.jsx)("div",{className:A.a.messageBlock,children:e.message}),Object(O.jsx)("div",{className:A.a.timeBlock,children:e.time})]})]})})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",f="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",g="22:00";var C=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(x,{avatar:m,name:p,message:f,time:g}),Object(O.jsx)(x,{avatar:m,name:p,message:f,time:g}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},w=n(8),y=n.n(w);var q=function(e){return Object(O.jsxs)("div",{className:y.a.element,children:[e.affair._id,".",Object(O.jsxs)("span",{className:y.a.fontBold,children:[" ",e.affair.name," "]}),Object(O.jsx)("span",{className:y.a.span+" "+e.affair.priority,children:e.affair.priority}),Object(O.jsx)("button",{className:y.a.btnDeleteClass,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(O.jsx)(q,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:y.a.someClass,children:t}),Object(O.jsx)("button",{className:y.a.btnClass,onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:y.a.btnClass,onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{className:y.a.btnClass,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:y.a.btnClass,onClick:function(){e.setFilter("low")},children:"Low"})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var L=function(){var e=Object(r.useState)(I),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},N=n(21),M=n(17),D=n.n(M),S=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.clickEnterButton,c=e.error,s=e.totalUsers,i=t.length>0?D.a.access:D.a.error;return Object(O.jsxs)("div",{className:D.a.formWrapper,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:a}),Object(O.jsx)("button",{onClick:r,children:"add"})]}),Object(O.jsxs)("span",{children:["All users in base: ",s," pc."]}),Object(O.jsx)("span",{className:D.a.errorText,children:c})]})},_=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],d=function(){""!==s?(n(s),alert("Hello ".concat(s,"!")),i("")):b("Please add user to input :(")},h=t.length;return Object(O.jsx)(S,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&b("")):(s&&i(""),b("Please, add correct user name :("))},addUser:d,error:u,totalUsers:h,clickEnterButton:function(e){"Enter"===e.key&&d()}})},K=n(50);var B=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(_,{users:n,addUserCallback:function(e){var t={_id:Object(K.a)(),name:e};a([].concat(Object(N.a)(n),[t]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},H=n(3),z=n(5),E=n(22),G=n.n(E),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(z.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(G.a.error," ").concat(s||""),j="".concat(G.a.superInput,"  ").concat(c?G.a.errorInput:""," ");return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},i)),c&&Object(O.jsx)("span",{className:o,children:c})]})},W=n(27),T=n.n(W),Y=n(28),R=n.n(Y),Z=function(e){var t=e.red,n=e.className,r=Object(z.a)(e,["red","className"]),a="".concat(t?R.a.red:R.a.default," ").concat(n);return Object(O.jsx)("button",Object(H.a)({className:a},r))},X=n(29),Q=n.n(X),J=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(z.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(O.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var F=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:T.a.column,children:[Object(O.jsx)(P,{value:n,onChangeText:a,onEnter:s,error:c}),Object(O.jsx)(P,{className:T.a.blue}),Object(O.jsx)(Z,{children:"default"}),Object(O.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(Z,{disabled:!0,children:"disabled"}),Object(O.jsx)(J,{checked:l,onChangeChecked:u,children:"some text "}),Object(O.jsx)(J,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},U=n(35),V=n.n(U),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(z.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=a||{},b=u.children,d=u.onDoubleClick,h=u.className,v=Object(z.a)(u,["children","onDoubleClick","className"]),A="".concat(V.a.span," ").concat(h||"");return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(P,Object(H.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(O.jsxs)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:A},v),{},{children:[b||c.value," \u270d"]}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)($,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(Z,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(O.jsx)(Z,{onClick:function(){a(te("editable-span-value",n))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var re=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{}),Object(O.jsx)(L,{}),Object(O.jsx)(B,{}),Object(O.jsx)(F,{}),Object(O.jsx)(ne,{})]})};var ae=function(){return Object(O.jsxs)("div",{style:{background:"red",height:"900px"},children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ce=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(z.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(O.jsx)("select",Object(H.a)(Object(H.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},se=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=Object(z.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){a&&a(e),c&&c(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(H.a)({onChange:i,type:"radio",value:e,name:t,checked:e===r},s)),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:o})},ie=["x","y","z"];var oe=function(){var e=Object(r.useState)(ie[1]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(ce,{options:ie,value:n,onChangeOption:a})}),Object(O.jsx)("div",{children:Object(O.jsx)(se,{name:"radio",options:ie,value:n,onChangeOption:a})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},je=function(e,t){switch(t.type){case"sort":return Object(N.a)(e).sort((function(e,n){return"up"===t.payload?e.name>n.name?1:-1:e.name<n.name?1:-1}));case"check":return e.filter((function(e){return e.age>t.payload&&Object(H.a)({},e)}));default:return e}},le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(r.useState)(le),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(O.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",c,Object(O.jsxs)("div",{children:[Object(O.jsx)(Z,{onClick:function(){return a(je(le,{type:"sort",payload:"up"}))},children:"sort up"}),Object(O.jsx)(Z,{onClick:function(){return a(je(le,{type:"sort",payload:"down"}))},children:"sort down "}),Object(O.jsx)(Z,{onClick:function(){return a(je(le,{type:"check",payload:18}))},children:"check 18 "})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var be=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(j.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(j.a)(l,2),b=u[0],d=u[1],h=function(){clearInterval(n)},v=new Date,A=v.getHours()+":"+v.getMinutes()+":"+v.getSeconds(),x=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:A}),b&&Object(O.jsx)("div",{children:x}),Object(O.jsx)(Z,{onClick:function(){h();var e=window.setInterval((function(){o(v)}),1e3);a(e)},children:"start"}),Object(O.jsx)(Z,{onClick:h,children:"stop"})]})};var Oe=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 9",Object(O.jsx)(be,{}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},de=n(10),he="SET_PRELOADER",ve={isActive:!1},Ae=function(e){return{type:he,isActive:e}},xe=n(30),me=n.n(xe),pe=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:me.a.imgWrapper,children:Object(O.jsx)("img",{className:me.a.img,src:"data:image/gif;base64,R0lGODlhhANYAvQCAAjC/////zHM/zrO/xbF/zbN/yvL/xXF/xfG/xzH/zLM/zvP/xLE/y/M/xTF/xvH/yrK/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QjFENDAxRTM2ODQxMUVBQTRCRTg1NDIwQzA1MDQ2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjFENDAxRjM2ODQxMUVBQTRCRTg1NDIwQzA1MDQ2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMUQ0MDFDMzY4NDExRUFBNEJFODU0MjBDMDUwNDY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCMUQ0MDFEMzY4NDExRUFBNEJFODU0MjBDMDUwNDY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRh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"})})})};var fe=function(){var e=Object(de.c)((function(e){return e.loading.isActive})),t=Object(de.b)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 10",e?Object(O.jsx)(pe,{}):Object(O.jsx)("div",{children:Object(O.jsx)(Z,{onClick:function(){t(Ae(!0)),setTimeout((function(){t(Ae(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ge=n(36),Ce=n.n(ge),we=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,a=Object(z.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(Ce.a.range," ").concat(r||"");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",Object(H.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:c},a))})},ye=n(14),qe=n.n(ye),ke=function(e){var t=e.onChangeRange,n=e.value;return Object(O.jsxs)(O.Fragment,{children:["DoubleRange",Object(O.jsxs)("div",{style:{width:250},onClick:function(e){},className:qe.a.slider,children:[Object(O.jsx)("div",{onDragEnd:function(e){t&&n&&e.clientX<=n[1]&&t([e.clientX,n[1]])},className:qe.a.min,style:{width:n[0]},"data-content":n[0],children:Object(O.jsx)("div",{onDrag:function(e){t&&e.clientX<=250&&e.clientX<=n[1]&&t([e.clientX,n[1]])},className:qe.a.minDrag})}),Object(O.jsx)("div",{className:qe.a.max,style:{width:n[1]},"data-content":n[1],children:Object(O.jsx)("div",{onDrag:function(e){t&&e.clientX<=250&&e.clientX>=n[0]&&t([n[0],e.clientX])},className:qe.a.maxDrag})})]})]})};var Ie=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(250),s=Object(j.a)(c,2),i=s[0],o=s[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 11",Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)(we,{onChangeRange:function(e){a(e)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)(ke,{onChangeRange:function(e){a(e[0]),o(e[1])},value:[n,i]}),Object(O.jsx)("span",{children:i})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var Le=function(){return Object(O.jsxs)("div",{children:["JUNIOR",Object(O.jsx)(ne,{}),Object(O.jsx)(oe,{}),Object(O.jsx)(ue,{}),Object(O.jsx)(Oe,{}),Object(O.jsx)(fe,{}),Object(O.jsx)(Ie,{})]})},Ne=n(31),Me=n.n(Ne),De={theme:"some"},Se=["dark","red","some","none","blue"];var _e=function(){var e=Object(de.c)((function(e){return e.data.theme})),t=Object(de.b)();return Object(O.jsxs)("div",{className:Me.a[e],children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("span",{className:Me.a[e+"-text"],children:["homeworks 12",Object(O.jsx)(ce,{options:Se,value:e,onChangeOption:function(e){t(function(e){return{type:"CHANGE_THEME",theme:e}}(e))}})]}),Object(O.jsx)("hr",{})]})};var Ke=function(){return Object(O.jsxs)("div",{children:["PLUS",Object(O.jsx)(_e,{})]})},Be="/pre-junior",He="/junior",ze="/junior-plus";var Ee=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(h.a,{to:Be})}}),Object(O.jsx)(h.b,{path:Be,render:function(){return Object(O.jsx)(re,{})}}),Object(O.jsx)(h.b,{path:He,render:function(){return Object(O.jsx)(Le,{})}}),Object(O.jsx)(h.b,{path:ze,render:function(){return Object(O.jsx)(Ke,{})}}),"// add routes",Object(O.jsx)(h.b,{render:function(){return Object(O.jsx)(ae,{})}})]})})};var Ge=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(d,{}),Object(O.jsx)(Ee,{})]})})};var Pe=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(Ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(32),Te=Object(We.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(H.a)(Object(H.a)({},e),{},{isActive:t.isActive});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return Object(H.a)(Object(H.a)({},e),{},{theme:t.theme});default:return e}}}),Ye=Object(We.b)(Te),Re=Ye;window.store=Ye,s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(de.a,{store:Re,children:Object(O.jsx)(Pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.1063912b.chunk.js.map