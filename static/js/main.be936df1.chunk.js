(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__2byOO",span:"Filter_span__uSHYk",input:"Filter_input__3V-pP"}},13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(e,t,n){e.exports={form:"ContactForm_form__3oJMD",label:"ContactForm_label__3nCr6",input:"ContactForm_input__sV5Ua",span:"ContactForm_span__3WPFZ",btn:"ContactForm_btn__2M8G0"}},20:function(e,t,n){},21:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=n(15),i=Object(s.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e})),l=i,u=(n(20),n(21),n(14)),b=n(3),d=n(13),m=n(4),j=n.n(m),p=n(5),h=n.n(p),O=n(2),_=n.n(O),f=n(0);function x(e){var t=e.onSubmit,n=e.contacts,c=Object(a.useState)(""),o=Object(b.a)(c,2),r=o[0],s=o[1],i=Object(a.useState)(""),l=Object(b.a)(i,2),u=l[0],d=l[1],m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}},j=function(){var e=r.toLocaleLowerCase();n.find((function(t){return t.name.toLocaleLowerCase()===e}))?alert("".concat(r," is already in contacts")):function(){var e=h.a.generate();t({name:r,number:u,id:e})}()},p=function(){s(""),d("")};return Object(f.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),p(),j()},children:[Object(f.jsxs)("label",{className:_.a.label,htmlFor:h.a.generate(),children:[Object(f.jsx)("span",{className:_.a.span,children:"Name"}),Object(f.jsx)("input",{className:_.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,id:h.a.generate()})]}),Object(f.jsxs)("label",{className:_.a.label,htmlFor:h.a.generate(),children:[Object(f.jsx)("span",{className:_.a.span,children:"Number"}),Object(f.jsx)("input",{className:_.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,id:h.a.generate()})]}),Object(f.jsx)("button",{className:_.a.btn,type:"submit",children:"Add contact"})]})}var v=n(9),C=n.n(v);var N=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(f.jsx)("ul",{className:C.a.ul,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(f.jsxs)("li",{className:C.a.li,children:[a,": ",c,Object(f.jsx)("button",{className:C.a.btn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},g=n(10),S=n.n(g);var k=function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{className:S.a.label,children:[Object(f.jsx)("span",{className:S.a.span,children:"Find contacts by name"}),Object(f.jsx)("input",{className:S.a.input,type:"text",value:t,onChange:n})]})},L=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(b.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]};function w(){var e=L("contacts",d),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(b.a)(o,2),s=r[0],i=r[1];return Object(f.jsxs)("div",{className:j.a.box,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:j.a.title,children:"Phonebook"}),Object(f.jsx)(x,{onSubmit:function(e){c([e].concat(Object(u.a)(n)))},contacts:n})]}),Object(f.jsxs)("div",{className:j.a.divBox,children:[Object(f.jsx)("h2",{className:j.a.title,children:"Contacts"}),Object(f.jsxs)("div",{className:j.a.boxList,children:[Object(f.jsx)(k,{value:s,onChange:function(e){var t=e.target;i(t.value)}}),Object(f.jsx)(N,{contacts:function(){var e=s.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})]})}var F=function(){return Object(f.jsx)("section",{className:"container",children:Object(f.jsx)(w,{})})};console.log(l),r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={title:"Phonebook_title__1b6ZS",box:"Phonebook_box__2VF9O",divBox:"Phonebook_divBox__10Y2k",boxList:"Phonebook_boxList__YD7vV"}},9:function(e,t,n){e.exports={li:"ContactList_li__Ra-Kd",ul:"ContactList_ul__3ll3V",btn:"ContactList_btn__2RcnT"}}},[[31,1,2]]]);
//# sourceMappingURL=main.be936df1.chunk.js.map