(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),a=n.n(r),s=(n(44),n(4)),o=n.n(s),l=n(12),i=n(16),j=n(13),u=n.n(j),b=n(10),m=n(37),d=n.n(m),h=n(36),p=n.n(h),x=n(38),O=n.n(x),f=n(1);var v=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://localhost:3333/users/");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("http://localhost:3333/users/".concat(t));case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"py-4",children:[Object(f.jsx)(b.b,{className:"btn btn-warning",to:"/users/add",children:"Add User"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("table",{className:"table border shadow",children:[Object(f.jsx)("thead",{className:"table-dark",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Username"}),Object(f.jsx)("th",{scope:"col",children:"Email"}),Object(f.jsx)("th",{scope:"col",children:"Phone"}),Object(f.jsx)("th",{scope:"col",children:"Website"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:n.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:t+1}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.username}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.phone}),Object(f.jsx)("td",{children:e.website}),Object(f.jsxs)("td",{children:[Object(f.jsx)(b.b,{to:"/users/view/".concat(e.id),children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(b.b,{class:"btn mb-2",to:"/users/edit/".concat(e.id),children:Object(f.jsx)(d.a,{color:"warning"})}),Object(f.jsx)(b.b,{onClick:function(){return s(e.id)},children:Object(f.jsx)(O.a,{color:"secondary"})})]})]})}))})]})]})})};var g=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsx)("a",{className:"navbar-brand",children:"React Project by Swati Laxmi Sahu"})})})})},N=n(3),w=n(17),y=n(18);var E=function(){var e=Object(N.f)(),t=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),n=Object(i.a)(t,2),r=n[0],a=n[1],s=r.name,j=r.username,b=r.email,m=r.phone,d=r.website,h=function(e){a(Object(y.a)(Object(y.a)({},r),{},Object(w.a)({},e.target.name,e.target.value)))},p=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,u.a.post("http://localhost:3333/users",r);case 3:alert("User Added"),e.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"w-50 mx-auto shadow p-5 ",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Add User"}),Object(f.jsxs)("form",{onSubmit:function(e){return p(e)},children:[Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:s,onChange:function(e){return h(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:j,onChange:function(e){return h(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:b,onChange:function(e){return h(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:m,onChange:function(e){return h(e)}})}),Object(f.jsx)("div",{className:"form-group mb-4",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:d,onChange:function(e){return h(e)}})}),Object(f.jsx)("div",{class:"d-grid gap-2",children:Object(f.jsx)("button",{className:"btn btn-dark btn-block",children:"Add User"})})]})]})})};var k=function(){var e=Object(N.f)(),t=Object(N.g)().id,n=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(i.a)(n,2),a=r[0],s=r[1],j=a.name,b=a.username,m=a.email,d=a.phone,h=a.website,p=function(e){s(Object(y.a)(Object(y.a)({},a),{},Object(w.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){x()}),[]);var x=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://localhost:3333/users/".concat(t));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var n=Object(l.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.next=3,u.a.put("http://localhost:3333/users/".concat(t),a);case 3:e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"w-50 mx-auto shadow p-5 ",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Edit User"}),Object(f.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:j,onChange:function(e){return p(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:b,onChange:function(e){return p(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:m,onChange:function(e){return p(e)}})}),Object(f.jsx)("div",{className:"form-group mb-2",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:d,onChange:function(e){return p(e)}})}),Object(f.jsx)("div",{className:"form-group mb-4",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return p(e)}})}),Object(f.jsx)("div",{class:"d-grid gap-2",children:Object(f.jsx)("button",{className:"btn btn-warning btn-block",children:"Update"})})]})]})})};var C=function(){var e=Object(c.useState)({name:"",username:"",email:"",phone:"",webiste:""}),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(N.g)().id;Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://localhost:3333/users/".concat(a));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container py-4",children:[Object(f.jsx)(b.b,{to:"/",children:"back to Home"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("h1",{children:["User Id: ",a]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("ul",{className:"list-group w-50",children:[Object(f.jsxs)("li",{className:"list-group-item",children:["name: ",n.name]}),Object(f.jsxs)("li",{className:"list-group-item",children:["user name: ",n.username]}),Object(f.jsxs)("li",{className:"list-group-item",children:["email: ",n.email]}),Object(f.jsxs)("li",{className:"list-group-item",children:["phone: ",n.phone]}),Object(f.jsxs)("li",{className:"list-group-item",children:["website: ",n.website]})]})]})};var U=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{exact:!0,path:"/",children:Object(f.jsx)(v,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/users/add",children:Object(f.jsx)(E,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/users/edit/:id",children:Object(f.jsx)(k,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/users/view/:id",children:Object(f.jsx)(C,{})})]})]})})};a.a.render(Object(f.jsx)(U,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0cedfef2.chunk.js.map