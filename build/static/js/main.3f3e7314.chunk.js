(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{109:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},203:function(e,t){},205:function(e,t){},213:function(e,t){},215:function(e,t){},243:function(e,t){},245:function(e,t){},246:function(e,t){},251:function(e,t){},253:function(e,t){},272:function(e,t){},284:function(e,t){},287:function(e,t){},335:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(173),s=n.n(c),o=(n(183),n(176)),i=n(3),l=n(8),u=n(7),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e)||t,a=Object(r.useState)(n),c=Object(u.a)(a,2),s=c[0],o=c[1];return Object(r.useEffect)((function(){console.debug("hooks useLocalStorage useEffect","item=",s),null===s?localStorage.removeItem(e):localStorage.setItem(e,s)}),[e,s]),[s,o]},b=n(13),m=Object(r.createContext)(),d=(n(184),n(0)),p=function(e){var t=e.logout,n=Object(r.useContext)(m).currUser;console.debug("Nav","currUser=",n);return Object(d.jsxs)("nav",{className:"Nav navbar navbar-expand-md px-3",children:[Object(d.jsx)(b.b,{className:"navbar-brand",to:"/",children:"Jobly"}),n?Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item mr-4",children:Object(d.jsx)(b.c,{className:"nav-link",to:"/companies",children:"Companies"})}),Object(d.jsx)("li",{className:"nav-item mr-4",children:Object(d.jsx)(b.c,{className:"nav-link",to:"/jobs",children:"Jobs"})}),Object(d.jsx)("li",{className:"nav-item mr-4",children:Object(d.jsx)(b.c,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)(b.b,{className:"nav-link",to:"/",onClick:t,children:["Log out ",n.first_name||n.username]})})]}):Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item mr-4",children:Object(d.jsx)(b.c,{className:"nav-link",to:"/login",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item mr-4",children:Object(d.jsx)(b.c,{className:"nav-link",to:"/signup",children:"Sign up"})})]})]})},f=n(9),h=(n(193),function(){var e=Object(r.useContext)(m).currUser;return console.debug("Homepage","currUser=",e),Object(d.jsx)("div",{className:"Homepage",children:Object(d.jsxs)("div",{className:"container text-center",children:[Object(d.jsx)("h1",{className:"mb-4 font-weight-bold text-white",children:"Jobly"}),Object(d.jsx)("p",{className:"lead text-light",children:"All the jobs in one, convenient place."}),e?Object(d.jsxs)("h2",{className:"lead-3 text-white",children:["Welcome back, ",e.firstName||e.username,"!"]}):Object(d.jsxs)("div",{className:"d-flex gap-3 justify-content-center",children:[Object(d.jsx)(b.b,{className:"btn btn-primary font-weight-bold mr-3",to:"/login",children:"Log in"}),Object(d.jsx)(b.b,{className:"btn btn-success font-weight-bold mr-3",to:"/signup",children:"Sign up"})]})]})})}),O=(n(194),function(e){var t=e.searchFor;console.debug("SearchForm","searchFor=",typeof t);var n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],s=a[1];return Object(d.jsx)("div",{className:"SearchForm mb-4",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c.trim()||void 0),s(c.trim())},className:"form-inline",children:[Object(d.jsx)("input",{type:"text",name:"searchTerm",placeholder:"Search term...",value:c,onChange:function(e){s(e.target.value)},className:"form-control form-control-lg flex-grow-1 mb-2"}),Object(d.jsx)("button",{className:"btn btn-lg btn-info",type:"submit",children:"Search"})]})})}),x=n(25),v=n(26),g=n(337),N=function(){function e(){Object(x.a)(this,e)}return Object(v.a)(e,null,[{key:"request",value:function(){var t=Object(l.a)(Object(i.a)().mark((function t(n){var r,a,c,s,o,l,u=arguments;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},a=u.length>2&&void 0!==u[2]?u[2]:"get",console.debug("JoblyApi request API Call:",n,r,a),c="".concat("https://jobly-backend-express.onrender.com","/").concat(n),s={Authorization:"Bearer ".concat(e.token)},o="get"===a?r:{},t.prev=6,t.next=9,Object(g.a)({url:c,method:a,data:r,params:o,headers:s});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("JoblyApi request API Error:",t.t0.response),l=t.t0.response.data.error.message,Array.isArray(l)?l:[l];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCurrUser",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.company);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCompanies",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies",{name:t});case 2:return n=e.sent,e.abrupt("return",n.companies);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getJobs",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs",{title:t});case 2:return n=e.sent,e.abrupt("return",n.jobs);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyToJob",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t,n){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(n),{},"post");case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/token",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/register",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveProfile",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t,n){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),n,"patch");case 2:return r=e.sent,e.abrupt("return",r.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),y=N,w=(n(197),function(e){var t=e.name,n=e.description,r=e.logoUrl,a=e.handle;return console.debug("CompanyCard",t,r),Object(d.jsx)(b.b,{className:"CompanyCard card",to:"/companies/".concat(a),children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h6",{className:"card-title",children:[t,r&&Object(d.jsx)("img",{src:"".concat(r),alt:t,className:"float-right ml-5"})]}),Object(d.jsx)("p",{className:"card-desc",children:Object(d.jsx)("small",{children:n})})]})})}),C=(n(198),function(){return Object(d.jsx)("div",{className:"LoadingSpinner",children:"Loading..."})}),k=function(){console.debug("CompanyList");var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){console.debug("CompanyList useEffect GETCOMPANIES"),c()}),[]);var c=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getCompanies(t);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(d.jsxs)("div",{className:"CompanyList col-md-8 offset-md-2",children:[Object(d.jsx)(O,{searchFor:c}),n.length?Object(d.jsx)("div",{className:"CompanyList-list",children:n.map((function(e){return Object(d.jsx)(w,{handle:e.handle,name:e.name,description:e.description,logoUrl:e.logoUrl},e.handle)}))}):Object(d.jsx)("p",{className:"lead",children:"Sorry, no results have been found!"})]}):Object(d.jsx)(C,{})},S=(n(199),function(e){var t=e.id,n=e.title,a=e.salary,c=e.equity,s=e.companyName;console.debug("JobCard");var o=Object(r.useContext)(m),j=o.appliedToJob,b=o.applyToJob,p=Object(r.useState)(),f=Object(u.a)(p,2),h=f[0],O=f[1];Object(r.useEffect)((function(){console.debug("JobCard useEffect updateAppliedStatus","id=",t),O(j(t))}),[t,j]);var x=function(){var e=Object(l.a)(Object(i.a)().mark((function e(n){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j(t)){e.next=2;break}return e.abrupt("return");case 2:b(t),O(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"JobCard card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h6",{className:"card-title",children:n}),Object(d.jsx)("p",{children:s}),a&&Object(d.jsx)("div",{children:Object(d.jsxs)("small",{children:["Salary: ",a]})}),void 0!==c&&Object(d.jsx)("div",{children:Object(d.jsxs)("small",{children:["Equity: ",c]})}),Object(d.jsx)("button",{onClick:x,disabled:h,className:"btn btn-danger font-weight-bold",children:h?"Applied!":"Apply now"})]})})}),F=function(e){var t=e.jobs;return console.debug("JobCardList","jobs=",t),Object(d.jsx)("div",{className:"JobCardList",children:t.map((function(e){return Object(d.jsx)(S,{id:e.id,title:e.title,salary:e.salary,equity:e.equity,companyName:e.companyName},e.id)}))})},U=function(){console.debug("JobList");var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){console.debug("JobList useEffect"),c()}),[]);var c=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,n,r=arguments;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:void 0,e.next=3,y.getJobs(t);case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(d.jsxs)("div",{className:"JobList col-md-8 offset-md-2",children:[Object(d.jsx)(O,{searchFor:c}),n.length?Object(d.jsx)(F,{jobs:n}):Object(d.jsx)("p",{className:"lead",children:"Sorry, no jobs were found."})]}):Object(d.jsx)(C,{})},J=n(72),L=(n(200),function(){var e=Object(J.useParams)().handle;console.debug("CompanyDetail","handle=",e);var t=Object(r.useState)(null),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(l.a)(Object(i.a)().mark((function t(){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getCompany(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),a?Object(d.jsxs)("div",{className:"CompanyDetail col-md-8 offset-md-2",children:[a.logoUrl&&Object(d.jsx)("img",{className:"mb-2",src:a.logoUrl,alt:a.handle}),Object(d.jsx)("h4",{children:a.name}),Object(d.jsx)("p",{children:a.description}),Object(d.jsx)(F,{jobs:a.jobs})]}):Object(d.jsx)(C,{})}),E=n(31),q=n(23),A=function(e){var t=e.type,n=void 0===t?"danger":t,r=e.messages,a=void 0===r?[]:r;return console.debug("Alert","type=",n,"messages=",a),Object(d.jsx)("div",{className:"mt-2 alert alert-".concat(n),role:"alert",children:a.map((function(e){return Object(d.jsx)("p",{className:"mb-0 small",children:e},e)}))})},P=(n(109),function(e){var t=e.login,n=Object(J.useHistory)(),a=Object(r.useState)({username:"",password:""}),c=Object(u.a)(a,2),s=c[0],o=c[1],j=Object(r.useState)([]),b=Object(u.a)(j,2),m=b[0],p=b[1];console.debug("LoginForm","login=",typeof t,"formData=",s,"formErrs=",m);var f=function(){var e=Object(l.a)(Object(i.a)().mark((function e(r){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(s);case 3:(a=e.sent).success?n.push("/"):p(a.error);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(E.a)({},n,r))}))};return Object(d.jsx)("div",{className:"Form",children:Object(d.jsxs)("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4",children:[Object(d.jsx)("h3",{className:"mb-3 text-light text-bold",children:"Log In"}),Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{onSubmit:f,children:[Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(d.jsx)("input",{type:"text",name:"username",id:"username",className:"form-control",value:s.username,onChange:h,autoComplete:"username",required:!0})]}),Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",value:s.password,onChange:h,autoComplete:"current-password",required:!0})]}),m.length?Object(d.jsx)(A,{type:"danger",messages:m}):null,Object(d.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Submit"})]})})})]})})}),I=(n(201),function(){var e=Object(r.useContext)(m),t=e.currUser,n=e.setCurrUser,a=Object(r.useState)({firstName:t.firstName,lastName:t.lastName,email:t.email,username:t.username,password:""}),c=Object(u.a)(a,2),s=c[0],o=c[1],j=Object(r.useState)([]),b=Object(u.a)(j,2),p=b[0],f=b[1],h=Object(r.useState)(!1),O=Object(u.a)(h,2),x=O[0],v=O[1];console.debug("ProfileForm","currUser=",t,"formData=",s,"formErrs=",p,"saveConfirmed=",x);var g=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var r,a,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password},a=s.username,e.prev=3,e.next=6,y.saveProfile(a,r);case 6:c=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),f(e.t0),e.abrupt("return");case 14:o((function(e){return Object(q.a)(Object(q.a)({},e),{},{password:""})})),f([]),v(!0),n(c);case 18:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(E.a)({},n,r))})),f([])};return Object(d.jsx)("div",{className:"ProfilePage",children:Object(d.jsxs)("div",{className:"col-md-6 col-lg-4 offset-md-3 offset-lg-4",children:[Object(d.jsx)("h3",{className:"text-white",children:"Profile:"}),Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{onSubmit:g,children:[Object(d.jsxs)("div",{className:"form-group mt-2",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(d.jsx)("p",{className:"form-control-plaintext",children:s.username})]}),Object(d.jsxs)("div",{className:"form-group mt-2",children:[Object(d.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(d.jsx)("input",{type:"text",name:"firstName",id:"firstName",className:"form-control",value:s.firstName,onChange:N})]}),Object(d.jsxs)("div",{className:"form-group mt-2",children:[Object(d.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(d.jsx)("input",{type:"text",name:"lastName",id:"lastName",className:"form-control",value:s.lastName,onChange:N})]}),Object(d.jsxs)("div",{className:"form-group mt-2",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",value:s.email,onChange:N})]}),Object(d.jsxs)("div",{className:"form-group mt-2",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Confirm password to save updated profile info:"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",value:s.password,onChange:N})]}),p.length?Object(d.jsx)(A,{type:"danger",messages:p}):null,x?Object(d.jsx)(A,{type:"success",messages:["Updated profile information!"]}):null,Object(d.jsx)("button",{className:"btn btn-secondary btn-block mt-4",type:"submit",children:"Save Changes"})]})})})]})})}),D=function(e){var t=e.signup,n=Object(f.useHistory)(),a=Object(r.useState)({username:"",password:"",firstName:"",lastName:"",email:""}),c=Object(u.a)(a,2),s=c[0],o=c[1],j=Object(r.useState)([]),b=Object(u.a)(j,2),m=b[0],p=b[1];console.debug("SignupForm","signup=",typeof t,"formData=",s,"formErrs=",m);var h=function(){var e=Object(l.a)(Object(i.a)().mark((function e(r){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(s);case 3:(a=e.sent).success?n.push("/"):p(a.error);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(q.a)(Object(q.a)({},e),{},Object(E.a)({},n,r))}))};return Object(d.jsx)("div",{className:"Form",children:Object(d.jsxs)("div",{className:"container col-md-6 offset-md-3 col-lg-4 offset-lg-4",children:[Object(d.jsx)("h3",{className:"mb-3 text-light text-bold",children:"Sign Up"}),Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(d.jsx)("input",{type:"text",name:"username",id:"username",className:"form-control",value:s.username,onChange:O,autoComplete:"username",required:!0})]}),Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",value:s.password,onChange:O,autoComplete:"current-password",required:!0})]}),Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"firstName",children:"First name:"}),Object(d.jsx)("input",{type:"text",name:"firstName",id:"firstName",className:"form-control",value:s.firstName,onChange:O})]}),Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"lastName",children:"Last name:"}),Object(d.jsx)("input",{type:"text",name:"lastName",id:"lastName",className:"form-control",value:s.lastName,onChange:O})]}),Object(d.jsxs)("div",{className:"form-group mb-4",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",value:s.email,onChange:O})]}),m.length?Object(d.jsx)(A,{type:"danger",messages:m}):null,Object(d.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Submit"})]})})})]})})},T=function(e){var t=e.exact,n=e.path,a=e.children,c=Object(r.useContext)(m).currUser;return console.debug("PrivateRoute","exact=",t,"path=",n,"currUser=",c),c?Object(d.jsx)(f.Route,{exact:t,path:n,children:a}):Object(d.jsx)(f.Redirect,{to:"/login"})},R=function(e){var t=e.login,n=e.signup;return console.debug("Routes","login=".concat(typeof t),"register=".concat(typeof register)),Object(d.jsx)("div",{children:Object(d.jsxs)(f.Switch,{children:[Object(d.jsx)(f.Route,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(f.Route,{exact:!0,path:"/login",children:Object(d.jsx)(P,{login:t})}),Object(d.jsx)(f.Route,{exact:!0,path:"/signup",children:Object(d.jsx)(D,{signup:n})}),Object(d.jsx)(T,{exact:!0,path:"/companies",children:Object(d.jsx)(k,{})}),Object(d.jsx)(T,{exact:!0,path:"/jobs",children:Object(d.jsx)(U,{})}),Object(d.jsx)(T,{exact:!0,path:"/companies/:handle",children:Object(d.jsx)(L,{})}),Object(d.jsx)(T,{exact:!0,path:"/profile",children:Object(d.jsx)(I,{})}),Object(d.jsx)(f.Redirect,{to:"/"})]})})},H=n(175),B=n.n(H);var M=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(new Set([])),s=Object(u.a)(c,2),f=s[0],h=s[1],O=Object(r.useState)(null),x=Object(u.a)(O,2),v=x[0],g=x[1],N=j("jobly-token"),w=Object(u.a)(N,2),k=w[0],S=w[1];console.debug("App","infoLoaded=",n,"currUser=",v,"token=",k),Object(r.useEffect)((function(){console.debug("App useEffect loadUserInfo","token=",k);var e=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,n,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=15;break}return e.prev=1,t=B.a.decode(k),n=t.username,y.token=k,e.next=6,y.getCurrUser(n);case 6:r=e.sent,g(r),h(new Set(r.applications)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("App loadUserInfo: problem loading",e.t0),g(null);case 15:a(!0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();a(!1),e()}),[k]);var F=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signup(t);case 3:return n=e.sent,S(n),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("signup failed",e.t0),e.abrupt("return",{success:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.login(t);case 3:return n=e.sent,S(n),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("login failed",e.t0),e.abrupt("return",{success:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return f.has(e)};return n?Object(d.jsx)(b.a,{children:Object(d.jsx)(m.Provider,{value:{currUser:v,setCurrUser:g,appliedToJob:J,applyToJob:function(e){J(e)||(y.applyToJob(v.username,e),h(new Set([].concat(Object(o.a)(f),[e]))))}},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{logout:function(){console.debug("App logout"),g(null),S(null)}}),Object(d.jsx)(R,{login:U,signup:F})]})})}):Object(d.jsx)(C,{})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,338)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(M,{})})),z()}},[[335,1,2]]]);
//# sourceMappingURL=main.3f3e7314.chunk.js.map