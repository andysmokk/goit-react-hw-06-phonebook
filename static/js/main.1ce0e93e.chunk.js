(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={li:"ContactList_li__Ra-Kd",ul:"ContactList_ul__3ll3V",btn:"ContactList_btn__2RcnT"}},13:function(e,t,n){e.exports={label:"Filter_label__2byOO",span:"Filter_span__uSHYk",input:"Filter_input__3V-pP"}},29:function(e,t,n){},3:function(e,t,n){e.exports={form:"ContactForm_form__3oJMD",label:"ContactForm_label__3nCr6",input:"ContactForm_input__sV5Ua",span:"ContactForm_span__3WPFZ",btn:"ContactForm_btn__2M8G0"}},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(9),s=n.n(o),i=n(4),l=n(2),u=n(11),b=n(18),j=Object(l.b)("contact/delete"),d=Object(l.b)("contact/submit"),m=Object(l.b)("contact/changeFilter"),O=Object(l.c)([],(a={},Object(u.a)(a,d,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])})),Object(u.a)(a,j,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),f=Object(l.c)("",Object(u.a)({},m,(function(e,t){return t.payload}))),h=Object(l.a)({reducer:{contacts:O,filter:f},devTools:!1}),p=(n(29),n(30),n(5)),_=n.n(p),x=n(16),v=n(6),C=n.n(v),N=n(3),g=n.n(N),k=n(1);var F=Object(i.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onSubmit:function(t){return e(d(t))}}}))((function(e){var t=e.onSubmit,n=e.contacts,a=Object(c.useState)(""),r=Object(x.a)(a,2),o=r[0],s=r[1],i=Object(c.useState)(""),l=Object(x.a)(i,2),u=l[0],b=l[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":b(a);break;default:return}},d=function(){var e=o.toLocaleLowerCase();n.find((function(t){return t.name.toLocaleLowerCase()===e}))?alert("".concat(o," is already in contacts")):function(){var e=C.a.generate();t({name:o,number:u,id:e})}()},m=function(){s(""),b("")};return Object(k.jsxs)("form",{className:g.a.form,onSubmit:function(e){e.preventDefault(),m(),d()},children:[Object(k.jsxs)("label",{className:g.a.label,htmlFor:C.a.generate(),children:[Object(k.jsx)("span",{className:g.a.span,children:"Name"}),Object(k.jsx)("input",{className:g.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,id:C.a.generate()})]}),Object(k.jsxs)("label",{className:g.a.label,htmlFor:C.a.generate(),children:[Object(k.jsx)("span",{className:g.a.span,children:"Number"}),Object(k.jsx)("input",{className:g.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,id:C.a.generate()})]}),Object(k.jsx)("button",{className:g.a.btn,type:"submit",children:"Add contact"})]})})),L=n(12),y=n.n(L);var w=function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))},S=Object(i.b)((function(e){var t=e.contacts,n=e.filter;return{contacts:w(t,n)}}),(function(e){return{onDeleteContact:function(t){return e(j(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(k.jsx)("ul",{className:y.a.ul,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(k.jsxs)("li",{className:y.a.li,children:[a,": ",c,Object(k.jsx)("button",{className:y.a.btn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})})),P=n(13),A=n.n(P);var D=Object(i.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(m(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(k.jsxs)("label",{className:A.a.label,children:[Object(k.jsx)("span",{className:A.a.span,children:"Find contacts by name"}),Object(k.jsx)("input",{className:A.a.input,type:"text",value:t,onChange:n})]})}));var B=function(){return Object(k.jsxs)("div",{className:_.a.box,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:_.a.title,children:"Phonebook"}),Object(k.jsx)(F,{})]}),Object(k.jsxs)("div",{className:_.a.divBox,children:[Object(k.jsx)("h2",{className:_.a.title,children:"Contacts"}),Object(k.jsxs)("div",{className:_.a.boxList,children:[Object(k.jsx)(D,{}),Object(k.jsx)(S,{})]})]})]})};var V=function(){return Object(k.jsx)("section",{className:"container",children:Object(k.jsx)(B,{})})};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(i.a,{store:h,children:Object(k.jsx)(V,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={title:"Phonebook_title__1b6ZS",box:"Phonebook_box__2VF9O",divBox:"Phonebook_divBox__10Y2k",boxList:"Phonebook_boxList__YD7vV"}}},[[40,1,2]]]);
//# sourceMappingURL=main.1ce0e93e.chunk.js.map