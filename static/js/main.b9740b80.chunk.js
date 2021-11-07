(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={li:"ContactList_li__Ra-Kd",ul:"ContactList_ul__3ll3V",btn:"ContactList_btn__2RcnT"}},15:function(e,t,n){e.exports={label:"Filter_label__2byOO",span:"Filter_span__uSHYk",input:"Filter_input__3V-pP"}},35:function(e,t,n){},36:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(11),s=n.n(o),i=n(3),l=n(20),b=n(2),u=n(4),j=n(6),d=n(21),m=n.n(d),O=n(13),h=n(22),p=Object(u.b)("contact/delete"),_=Object(u.b)("contact/submit"),f=Object(u.b)("contact/changeFilter"),x=Object(u.c)([],(a={},Object(O.a)(a,_,(function(e,t){return[].concat(Object(h.a)(e),[t.payload])})),Object(O.a)(a,p,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),v=Object(u.c)("",Object(O.a)({},f,(function(e,t){return t.payload}))),N={key:"contacts",storage:m.a,blacklist:["filter"]},C=Object(b.b)({contacts:x,filter:v}),g=Object(j.g)(N,C),k=Object(u.a)({reducer:g,middleware:function(e){return e({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})},devTools:!1}),F=Object(j.h)(k),L=(n(35),n(36),n(7)),y=n.n(L),w=n(18),A=n(8),P=n.n(A),S=function(e){return e.contacts},z=function(e){var t=S(e),n=function(e){return e.filter}(e),a=n.toLocaleLowerCase();return t.filter((function(e){return e.name.toLocaleLowerCase().includes(a)}))},B=n(5),V=n.n(B),Z=n(1);function D(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(w.a)(r,2),s=o[0],l=o[1],b=Object(i.c)(S),u=Object(i.b)(),j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},d=function(){var e=P.a.generate();u(_({name:n,number:s,id:e}))},m=function(){var e=n.toLocaleLowerCase();b.find((function(t){return t.name.toLocaleLowerCase()===e}))?alert("".concat(n," is already in contacts")):d()},O=function(){a(""),l("")};return Object(Z.jsxs)("form",{className:V.a.form,onSubmit:function(e){e.preventDefault(),O(),m()},children:[Object(Z.jsxs)("label",{className:V.a.label,htmlFor:P.a.generate(),children:[Object(Z.jsx)("span",{className:V.a.span,children:"Name"}),Object(Z.jsx)("input",{className:V.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,id:P.a.generate()})]}),Object(Z.jsxs)("label",{className:V.a.label,htmlFor:P.a.generate(),children:[Object(Z.jsx)("span",{className:V.a.span,children:"Number"}),Object(Z.jsx)("input",{className:V.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,id:P.a.generate()})]}),Object(Z.jsx)("button",{className:V.a.btn,type:"submit",children:"Add contact"})]})}var J=n(14),M=n.n(J);function Y(){var e=Object(i.c)(z),t=Object(i.b)();return Object(Z.jsx)("ul",{className:M.a.ul,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(Z.jsxs)("li",{className:M.a.li,children:[a,": ",c,Object(Z.jsx)("button",{className:M.a.btn,onClick:function(){return function(e){return t(p(e))}(n)},children:"Delete"})]},n)}))})}var q=n(15),R=n.n(q);function T(){var e=Object(i.b)();return Object(Z.jsxs)("label",{className:R.a.label,children:[Object(Z.jsx)("span",{className:R.a.span,children:"Find contacts by name"}),Object(Z.jsx)("input",{className:R.a.input,type:"text",onChange:function(t){return e(f(t.target.value))}})]})}var E=function(){return Object(Z.jsxs)("div",{className:y.a.box,children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(Z.jsx)(D,{})]}),Object(Z.jsxs)("div",{className:y.a.divBox,children:[Object(Z.jsx)("h2",{className:y.a.title,children:"Contacts"}),Object(Z.jsxs)("div",{className:y.a.boxList,children:[Object(Z.jsx)(T,{}),Object(Z.jsx)(Y,{})]})]})]})};var G=function(){return Object(Z.jsx)("section",{className:"container",children:Object(Z.jsx)(E,{})})};s.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(i.a,{store:k,children:Object(Z.jsx)(l.a,{loading:null,persistor:F,children:Object(Z.jsx)(G,{})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"ContactForm_form__3oJMD",label:"ContactForm_label__3nCr6",input:"ContactForm_input__sV5Ua",span:"ContactForm_span__3WPFZ",btn:"ContactForm_btn__2M8G0"}},7:function(e,t,n){e.exports={title:"Phonebook_title__1b6ZS",box:"Phonebook_box__2VF9O",divBox:"Phonebook_divBox__10Y2k",boxList:"Phonebook_boxList__YD7vV"}}},[[46,1,2]]]);
//# sourceMappingURL=main.b9740b80.chunk.js.map