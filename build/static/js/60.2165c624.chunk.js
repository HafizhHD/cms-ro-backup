(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[60],{106:function(e,r,t){"use strict";var a=t(2),n=(t(107),t(0));function i(e){var r=e.placeholder,t=e.type,a=e.onChange,i=e.onBlur,s=e.value,o=e.className,u=e.message,d=e.name,c=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:d,id:d,className:o,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:u})})]}):"date"===t||"datetime-local"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:d,className:o,type:t,placeholder:r,onChange:a,onBlur:i,value:s,min:c,max:"9999-12-31",disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:u})})]}):"number"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:d,className:o,type:t,onChange:a,onBlur:i,value:s,min:c,max:m,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:u})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:d,className:o,type:t,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:u})})]})}r.a=Object(a.memo)(i)},107:function(e,r,t){},113:function(e,r,t){"use strict";t.d(r,"f",(function(){return i})),t.d(r,"g",(function(){return s})),t.d(r,"e",(function(){return o})),t.d(r,"k",(function(){return u})),t.d(r,"l",(function(){return d})),t.d(r,"o",(function(){return c})),t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return l})),t.d(r,"p",(function(){return g})),t.d(r,"i",(function(){return p})),t.d(r,"a",(function(){return h})),t.d(r,"h",(function(){return b})),t.d(r,"j",(function(){return j})),t.d(r,"n",(function(){return q})),t.d(r,"d",(function(){return f})),t.d(r,"m",(function(){return x}));var a=t(137),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=a.f({userName:a.g("Enter your email").required("Email is required"),password:a.g("Enter your password").required("Password is required")}),s=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),u=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),category:a.g(),targetAudiance:a.a().min(1,"Pilih minimal 1"),contentPrograms:a.a().min(1).of(a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi"),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),answerKey:a.g().when("category",{is:"Ujian",then:a.g().required("Kunci Jawaban harus diisi"),otherwise:a.g()})}))}),d=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),c=a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi")}),m=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),l=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),g=a.f({nameUser:a.g("Enter your content title").required("User name is required"),emailUser:a.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:a.c("Insert start date").required("Date is required")}),p=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),h=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),b=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),j=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),q=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),x=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},1241:function(e,r,t){},1409:function(e,r,t){"use strict";t.r(r);t(2);var a=t(94),n=(t(1241),t(136)),i=t(6),s=t(127),o=t(36),u=t(17),d=t(113),c=t(106),m=t(0);r.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddScreenTime:function(r,t,a,n,i){return e(Object(s.h)(r,t,a,n,i))}}}))((function(e){var r=e.onAddScreenTime,t=e.isLoading,s=Object(i.g)(),u=JSON.parse(localStorage.getItem("userData")).cobrandEmail;return t?Object(m.jsx)(o.a,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(a.a,{headingName:"Kategori Program",routes:[{path:"/tools/setting/program-category",name:"Kategori Program"},{path:"/tools/setting/program-category/add",name:"Tambah"}]}),Object(m.jsx)(n.a,{initialValues:{controlParameterName:"TK",controlParameterValue:24},validationSchema:d.m,validateOnChange:!0,onSubmit:function(e){r(u,e.controlParameterName,e.controlParameterValue,"jam",s)},children:function(e){var r=e.handleChange,t=e.handleSubmit,a=e.handleBlur,n=e.setFieldValue,i=e.values,s=e.errors,o=e.touched;return Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)("div",{className:"AddScreenTime",children:[Object(m.jsx)("h1",{children:"Tambah"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Kelompok Pengguna"}),Object(m.jsxs)("select",{name:"controlParameterName",value:i.controlParameterName,onChange:function(e){n("controlParameterName",e.currentTarget.value)},children:[Object(m.jsx)("option",{value:"TK",children:"TK"}),Object(m.jsx)("option",{value:"SD",children:"SD"}),Object(m.jsx)("option",{value:"SMP",children:"SMP"}),Object(m.jsx)("option",{value:"SMA",children:"SMA"})]}),o.controlParameterName&&Object(m.jsx)("span",{className:"message__error",children:s.controlParameterName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsxs)("label",{children:["Standar Penggunaan Gadget ","(Jam)"]}),Object(m.jsx)(c.a,{type:"number",name:"controlParameterValue",className:"form-group__input",value:i.controlParameterValue,min:1,max:24,onChange:r,onBlur:a}),o.controlParameterValue&&Object(m.jsx)("span",{className:"message__error",children:s.controlParameterValue})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(t),t?Object(m.jsx)(o.a,{}):null]})}))},94:function(e,r,t){"use strict";t(2);var a=t(8),n=(t(95),t(0));r.a=function(e){var r=e.headingName,t=e.routes,i=void 0===t?[]:t;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,r){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,t){}}]);
//# sourceMappingURL=60.2165c624.chunk.js.map