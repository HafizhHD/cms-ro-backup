(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[8],{115:function(e,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"a",(function(){return d}));var n=t(12),a=t(22),i=t.n(a),o=t(30),s=function(){return{type:n.c}},c=function(){return{type:n.a}},u=function(e,r,t,n,a,u){return function(d){d(s()),Object(o.a)(n).then((function(n){console.log(typeof n);var o=n;setTimeout((function(){var n={cobrandEmail:e,programName:r,ProgramDescription:t,programthumnail:o,startDate:a};console.log(n),i()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),u.push("/program")})).catch((function(e){console.error("Error:",e)})),console.log(n),d(c())}),2e3)}))}},d=function(e,r,t,n,a,u,d,m,l,g){return function(p){p(s()),Object(o.a)(d).then((function(o){console.log(typeof o);var s=o;setTimeout((function(){var o={cobrandEmail:e,programId:r,contentName:t,contentDescription:n,contentType:a,contentSource:u,contentThumbnail:s,contents:m,startDate:l};console.log(o),i()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:o,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),g.push("/content")})).catch((function(e){console.error("Error:",e)})),console.log(o),p(c())}),2e3)}))}}},268:function(e,r,t){},306:function(e,r,t){"use strict";t.r(r);t(0);var n=t(77),a=(t(268),t(101)),i=t(3),o=t(115),s=t(21),c=t(14),u=t(84),d=t(79),m=t(1);r.default=Object(c.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddProgram:function(r,t,n,a,i,s){return e(Object(o.b)(r,t,n,a,i,s))}}}))((function(e){var r=e.onAddProgram,t=e.isLoading,o=Object(i.g)(),c=JSON.parse(localStorage.getItem("userData")).email;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{headingName:"Program",routes:[{path:"/program",name:"On Going Program"},{path:"/program/add",name:"Create new Program"}]}),Object(m.jsx)(a.a,{initialValues:{programName:"",programDescription:"",programThumbnail:"",startDate:""},validationSchema:u.d,validateOnChange:!0,onSubmit:function(e){r(c,e.programName,e.programDescription,e.programThumbnail,e.startDate,o)},children:function(e){var r=e.handleChange,t=e.handleSubmit,n=e.setFieldValue,a=e.values,i=e.errors;return Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)("div",{className:"AddProgram",children:[Object(m.jsx)("h1",{children:"Create New Program"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)(d.a,{type:"text",name:"programName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.programName,onChange:r}),Object(m.jsx)("span",{className:"message__error",children:i.programName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)(d.a,{type:"textarea",name:"programDescription",placeholder:"Type Something...",value:a.programDescription,onChange:r}),Object(m.jsx)("span",{className:"message__error",children:i.programDescription})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Photo"}),Object(m.jsx)(d.a,{type:"file",className:"form-group__input",name:"programThumbnail",onChange:function(e){var r=e.currentTarget.files[0];r&&(console.log("File to upload: ",r),n("programThumbnail",r))}}),Object(m.jsx)("span",{className:"message__error",children:i.programThumbnail})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Set Schedule"}),Object(m.jsx)(d.a,{type:"date",className:"form-group__input",name:"startDate",value:a.startDate,onChange:r}),Object(m.jsx)("span",{className:"message__error",children:i.startDate})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn",type:"submit",children:"Post Program"})})]})})}}),console.log(t),t?Object(m.jsx)(s.a,{}):null]})}))},77:function(e,r,t){"use strict";t(0);var n=t(6),a=(t(78),t(1));r.a=function(e){var r=e.headingName,t=e.routes,i=void 0===t?[]:t;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,r){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},r)}))})]})}},78:function(e,r,t){},79:function(e,r,t){"use strict";var n=t(0),a=(t(80),t(1));function i(e){var r=e.placeholder,t=e.type,n=e.onChange,i=e.onBlur,o=e.value,s=e.className,c=e.message,u=e.name,d=e.isError;return"textarea"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:u,id:u,className:s,placeholder:r,onChange:n,onBlur:i,value:o}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:c})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:u,className:s,type:t,placeholder:r,onChange:n,onBlur:i,value:o}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:c})})]})}r.a=Object(n.memo)(i)},80:function(e,r,t){},84:function(e,r,t){"use strict";t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return o})),t.d(r,"a",(function(){return s}));var n=t(102),a=n.c({email:n.d("Enter your email").required("Email is required").email("Email not valid"),password:n.d("Enter your password").required("Password is required")}),i=n.c({email:n.d("Enter your email").required("Email is required").email("Email not valid"),accountName:n.d("Enter your name").required("Name is required"),cobrandName:n.d("Enter your brand name").required("Brand name is required"),thumbnail:n.b("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.d("Enter your phone number").required("Phone number is required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Invalid phone number format"),address:n.d("Enter your address").required("Address is required"),password:n.d("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.d("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=n.c({programName:n.d("Enter your program title").required("Program title is required"),programDescription:n.d("Enter the program description").required("Program description is required"),programThumbnail:n.b("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.a("Insert start date").required("Date is required")}),s=n.c({contentName:n.d("Enter your content title").required("Content title is required"),contentDescription:n.d("Enter the content description").required("Content description is required"),contents:n.d("Enter the content description").required("Content description is required"),contentSource:n.d("Enter the content source").required("Content source is required"),contentThumbnail:n.b("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.a("Insert start date").required("Date is required")})}}]);
//# sourceMappingURL=8.b704ee7e.chunk.js.map