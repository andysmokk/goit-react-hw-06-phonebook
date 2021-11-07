(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={li:"ContactList_li__Ra-Kd",ul:"ContactList_ul__3ll3V",btn:"ContactList_btn__2RcnT"}},15:function(e,t,n){e.exports={label:"Filter_label__2byOO",span:"Filter_span__uSHYk",input:"Filter_input__3V-pP"}},22:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(11),s=n.n(o),i=n(3),l=n(20),b=n(2),u=n(4),j=n(6),d=n(21),m=n.n(d),O=n(13),p=n(23),h=Object(u.b)("contact/delete"),f=Object(u.b)("contact/submit"),x=Object(u.b)("contact/changeFilter"),_=n(22),v=Object(u.c)(_,(a={},Object(O.a)(a,f,(function(e,t){return[t.payload].concat(Object(p.a)(e))})),Object(O.a)(a,h,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),C=Object(u.c)("",Object(O.a)({},x,(function(e,t){return t.payload}))),N={key:"contacts",storage:m.a,blacklist:["filter"]},g=Object(b.b)({contacts:v,filter:C}),k=Object(j.g)(N,g),F=Object(u.a)({reducer:k,middleware:function(e){return e({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})},devTools:!1}),L=Object(j.h)(F),y=(n(36),n(37),n(7)),w=n.n(y),A=n(18),S=n(8),P=n.n(S),z=function(e){return e.contacts},B=function(e){var t=z(e),n=function(e){return e.filter}(e),a=n.toLocaleLowerCase();return t.filter((function(e){return e.name.toLocaleLowerCase().includes(a)}))},J=n(5),V=n.n(J),Z=n(1);function D(){var e=Object(c.useState)(""),t=Object(A.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(A.a)(r,2),s=o[0],l=o[1],b=Object(i.c)(z),u=Object(i.b)(),j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},d=function(){var e=P.a.generate();u(f({name:n,number:s,id:e}))},m=function(){var e=n.toLocaleLowerCase();b.find((function(t){return t.name.toLocaleLowerCase()===e}))?alert("".concat(n," is already in contacts")):d()},O=function(){a(""),l("")};return Object(Z.jsxs)("form",{className:V.a.form,onSubmit:function(e){e.preventDefault(),O(),m()},children:[Object(Z.jsxs)("label",{className:V.a.label,htmlFor:P.a.generate(),children:[Object(Z.jsx)("span",{className:V.a.span,children:"Name"}),Object(Z.jsx)("input",{className:V.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,id:P.a.generate()})]}),Object(Z.jsxs)("label",{className:V.a.label,htmlFor:P.a.generate(),children:[Object(Z.jsx)("span",{className:V.a.span,children:"Number"}),Object(Z.jsx)("input",{className:V.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,id:P.a.generate()})]}),Object(Z.jsx)("button",{className:V.a.btn,type:"submit",children:"Add contact"})]})}var M=n(14),R=n.n(M);function Y(){var e=Object(i.c)(B),t=Object(i.b)();return Object(Z.jsx)("ul",{className:R.a.ul,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(Z.jsxs)("li",{className:R.a.li,children:[a,": ",c,Object(Z.jsx)("button",{className:R.a.btn,onClick:function(){return function(e){return t(h(e))}(n)},children:"Delete"})]},n)}))})}var q=n(15),E=n.n(q);function H(){var e=Object(i.b)();return Object(Z.jsxs)("label",{className:E.a.label,children:[Object(Z.jsx)("span",{className:E.a.span,children:"Find contacts by name"}),Object(Z.jsx)("input",{className:E.a.input,type:"text",onChange:function(t){return e(x(t.target.value))}})]})}var K=function(){return Object(Z.jsxs)("div",{className:w.a.box,children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(Z.jsx)(D,{})]}),Object(Z.jsxs)("div",{className:w.a.divBox,children:[Object(Z.jsx)("h2",{className:w.a.title,children:"Contacts"}),Object(Z.jsxs)("div",{className:w.a.boxList,children:[Object(Z.jsx)(H,{}),Object(Z.jsx)(Y,{})]})]})]})};var T=function(){return Object(Z.jsx)("section",{className:"container",children:Object(Z.jsx)(K,{})})};s.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(i.a,{store:F,children:Object(Z.jsx)(l.a,{loading:null,persistor:L,children:Object(Z.jsx)(T,{})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"ContactForm_form__3oJMD",label:"ContactForm_label__3nCr6",input:"ContactForm_input__sV5Ua",span:"ContactForm_span__3WPFZ",btn:"ContactForm_btn__2M8G0"}},7:function(e,t,n){e.exports={title:"Phonebook_title__1b6ZS",box:"Phonebook_box__2VF9O",divBox:"Phonebook_divBox__10Y2k",boxList:"Phonebook_boxList__YD7vV"}}},[[47,1,2]]]);
//# sourceMappingURL=main.82ebd21f.chunk.js.map