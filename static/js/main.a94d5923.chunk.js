(this["webpackJsonphome-work"]=this["webpackJsonphome-work"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"style_list__17raf",listNone:"style_listNone__3RTtL",items:"style_items__XegZy",button:"style_button__1nDc9",butto:"style_butto__3dD3S"}},13:function(e,t,n){e.exports={message:"Message_message__ho4EC",image:"Message_image__3s-rm",chat:"Message_chat__3yQVB",user:"Message_user__WSpFf",time:"Message_time__32Qfw"}},17:function(e,t,n){e.exports={blue:"HW4_blue__2Vi1_",column:"HW4_column__FeS9-",testSpanError:"HW4_testSpanError__1DPp9"}},20:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3LbZw",errorInput:"SuperInputText_errorInput__1AWL9",error:"SuperInputText_error__3-F6B"}},21:function(e,t,n){e.exports={default:"SuperButton_default__1rk5E",red:"SuperButton_red__mj3H1"}},22:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2YkiI",spanClassName:"SuperCheckbox_spanClassName__3bOh8"}},26:function(e,t,n){e.exports={App:"App_App__avCCK"}},27:function(e,t,n){e.exports={someClass:"Greeting_someClass__1HXvM",error:"Greeting_error__3ye12"}},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),s=n.n(a),i=(n(36),n(26)),o=n.n(i),l=n(4),j=n(11),u=n(10),b=n.n(u),d=n(2),h=n(13),O=n.n(h),x=n(0);var m=function(e){var t=new Date;return Object(x.jsxs)("div",{className:O.a.message,children:[Object(x.jsx)("img",{className:O.a.image,alt:"image",src:e.avatar}),Object(x.jsxs)("div",{className:O.a.chat,children:[Object(x.jsx)("span",{className:O.a.user,children:e.name}),Object(x.jsx)("p",{children:e.message}),Object(x.jsxs)("span",{className:O.a.time,children:[" ","".concat(t.getHours(),":").concat(t.getMinutes()),"  "]})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",_="some text",v="22:00";var g=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(x.jsx)(m,{avatar:p,name:f,message:_,time:v}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})};var C=function(e){return Object(x.jsxs)("div",{children:[e.affair.name,Object(x.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(x.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(x.jsxs)("div",{children:[t,Object(x.jsx)("button",{onClick:function(){return e.setFilter("all")},children:"All"}),Object(x.jsx)("button",{onClick:function(){return e.setFilter("high")},children:"High"}),Object(x.jsx)("button",{onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(x.jsx)("button",{onClick:function(){return e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(r.useState)(N),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(l.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 2",Object(x.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},S=n(9),w=n(8),E=n(20),F=n.n(E),A=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(i||""),j="".concat(F.a.errorInput," ").concat(s);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:j},o)),a&&Object(x.jsx)("span",{className:l,children:a})]})},I=n(17),T=n.n(I),B=n(21),P=n.n(B),M=function(e){var t=e.red,n=e.className,r=Object(w.a)(e,["red","className"]),c="".concat(t?P.a.red:P.a.default," ").concat(n);return Object(x.jsx)("button",Object(S.a)({className:c},r))},W=n(22),H=n.n(W),J=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=e.onChangeCallback,c=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","onChangeCallback"]),a="".concat(H.a.checkbox," ").concat(t||"");return Object(x.jsxs)("label",{children:[Object(x.jsx)("input",Object(S.a)({type:"checkbox",onChange:r,className:a},c)),n&&Object(x.jsx)("span",{className:H.a.spanClassName,children:n})]})};var D=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=n?"complete":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1],b=function(e){return u(e.currentTarget.checked)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 4",Object(x.jsxs)("div",{className:T.a.column,children:[Object(x.jsx)(A,{value:n,onChangeText:c,onEnter:s,error:a,className:T.a.testSpanError}),Object(x.jsx)(A,{className:T.a.blue}),Object(x.jsx)(M,{children:"default"}),Object(x.jsx)(M,{red:!0,onClick:s,children:"delete "}),Object(x.jsx)(M,{disabled:!0,children:"disabled"}),Object(x.jsx)(J,{onChangeCallback:b,checked:j,onChangeChecked:u,children:"some text "}),Object(x.jsx)(J,{checked:j,onChangeCallback:b})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},U=n(30),K=n(44),L=n(27),X=n.n(L),G=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=X.a.error;return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{value:t,onChange:n,className:s}),Object(x.jsx)("span",{children:c}),Object(x.jsx)("button",{onClick:r,children:"add"}),Object(x.jsx)("span",{children:a})]})},Z=function(e){var t=e.users,n=e.addUserCallback,c=(Object(w.a)(e,["users","addUserCallback"]),Object(r.useState)("")),a=Object(l.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(l.a)(o,2),u=j[0],b=(j[1],t.length);return Object(x.jsx)(G,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){n(s)},error:u,totalUsers:b})};var Q=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 3",Object(x.jsx)(Z,{users:c,addUserCallback:function(e){var t={_id:Object(K.a)(),name:e};a([t].concat(Object(U.a)(c)))}}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=c||{},b=u.children,d=u.onDoubleClick,h=u.className,O=Object(w.a)(u,["children","onDoubleClick","className"]),m="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return Object(x.jsx)(x.Fragment,{children:o?Object(x.jsx)(A,Object(S.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(x.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:m},O),{},{children:b||a.value}))})};function V(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Y(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}V("test",{x:"A",y:1});Y("test",{x:"",y:0});var q=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 6",Object(x.jsx)("div",{children:Object(x.jsx)(R,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(x.jsx)(M,{onClick:function(){V("editable-span-value",n)},children:"save"}),Object(x.jsx)(M,{onClick:function(){var e=Y("editable-span-value","");c(e)},children:"restore"}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})};var $=function(){return Object(x.jsx)("div",{style:{display:"block",padding:"20px"},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsx)(y,{}),Object(x.jsx)(Q,{_id:Object(K.a)(),name:"some"}),Object(x.jsx)(D,{}),Object(x.jsx)(q,{})]})})};var z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"404"}),Object(x.jsx)("div",{children:"Page not found!"}),Object(x.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ee="/pre-junior",te="/error-404";var ne=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(x.jsx)(d.a,{to:ee})}}),Object(x.jsx)(d.b,{path:ee,render:function(){return Object(x.jsx)($,{})}}),"// add routes",Object(x.jsx)(d.b,{path:te,render:function(){return Object(x.jsx)(z,{})}})]})})};var re=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{className:b.a.list,children:[Object(x.jsxs)("div",{className:n?b.a.list:b.a.listNone,children:[Object(x.jsx)(j.b,{to:ee,className:b.a.items,children:"PreJunior"}),Object(x.jsx)(j.b,{to:te,className:b.a.items,children:"Junior"}),Object(x.jsx)(j.b,{to:te,className:b.a.items,children:"Junior+"})]}),Object(x.jsx)("button",{className:b.a.button,onClick:function(){return c(!n)},children:"+"})]})};var ce=function(){return Object(x.jsx)("div",{style:{padding:"20px"},children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(re,{}),Object(x.jsx)(ne,{})]})})};var ae=function(){return Object(x.jsxs)("div",{className:o.a.App,children:[Object(x.jsx)("div",{children:"react homeworks:)"}),Object(x.jsx)(ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.a94d5923.chunk.js.map