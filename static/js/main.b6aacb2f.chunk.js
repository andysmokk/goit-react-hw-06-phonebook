(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__2byOO",span:"Filter_span__uSHYk",input:"Filter_input__3V-pP"}},13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},19:function(e,t,n){},2:function(e,t,n){e.exports={form:"ContactForm_form__3oJMD",label:"ContactForm_label__3nCr6",input:"ContactForm_input__sV5Ua",span:"ContactForm_span__3WPFZ",btn:"ContactForm_btn__2M8G0"}},20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=(n(19),n(20),n(14)),i=n(3),l=n(13),u=n(4),b=n.n(u),d=n(5),m=n.n(d),j=n(2),p=n.n(j),_=n(0);function h(e){var t=e.onSubmit,n=e.contacts,c=Object(a.useState)(""),o=Object(i.a)(c,2),r=o[0],s=o[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),b=u[0],d=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}},h=function(){var e=r.toLocaleLowerCase();n.find((function(t){return t.name.toLocaleLowerCase()===e}))?alert("".concat(r," is already in contacts")):function(){var e=m.a.generate();t({name:r,number:b,id:e})}()},O=function(){s(""),d("")};return Object(_.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault(),O(),h()},children:[Object(_.jsxs)("label",{className:p.a.label,htmlFor:m.a.generate(),children:[Object(_.jsx)("span",{className:p.a.span,children:"Name"}),Object(_.jsx)("input",{className:p.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,id:m.a.generate()})]}),Object(_.jsxs)("label",{className:p.a.label,htmlFor:m.a.generate(),children:[Object(_.jsx)("span",{className:p.a.span,children:"Number"}),Object(_.jsx)("input",{className:p.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,id:m.a.generate()})]}),Object(_.jsx)("button",{className:p.a.btn,type:"submit",children:"Add contact"})]})}var O=n(9),f=n.n(O);var x=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(_.jsx)("ul",{className:f.a.ul,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(_.jsxs)("li",{className:f.a.li,children:[a,": ",c,Object(_.jsx)("button",{className:f.a.btn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},v=n(10),C=n.n(v);var N=function(e){var t=e.value,n=e.onChange;return Object(_.jsxs)("label",{className:C.a.label,children:[Object(_.jsx)("span",{className:C.a.span,children:"Find contacts by name"}),Object(_.jsx)("input",{className:C.a.input,type:"text",value:t,onChange:n})]})},g=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(i.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]};function S(){var e=g("contacts",l),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],d=r[1];return Object(_.jsxs)("div",{className:b.a.box,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(_.jsx)(h,{onSubmit:function(e){c([e].concat(Object(s.a)(n)))},contacts:n})]}),Object(_.jsxs)("div",{className:b.a.divBox,children:[Object(_.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(_.jsxs)("div",{className:b.a.boxList,children:[Object(_.jsx)(N,{value:u,onChange:function(e){var t=e.target;d(t.value)}}),Object(_.jsx)(x,{contacts:function(){var e=u.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})]})}var k=function(){return Object(_.jsx)("section",{className:"container",children:Object(_.jsx)(S,{})})};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={title:"Phonebook_title__1b6ZS",box:"Phonebook_box__2VF9O",divBox:"Phonebook_divBox__10Y2k",boxList:"Phonebook_boxList__YD7vV"}},9:function(e,t,n){e.exports={li:"ContactList_li__Ra-Kd",ul:"ContactList_ul__3ll3V",btn:"ContactList_btn__2RcnT"}}},[[30,1,2]]]);
//# sourceMappingURL=main.b6aacb2f.chunk.js.map