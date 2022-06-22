(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[61],{106:function(e,r,t){"use strict";var i=t(2),n=(t(107),t(0));function a(e){var r=e.placeholder,t=e.type,i=e.onChange,a=e.onBlur,s=e.value,d=e.className,o=e.message,u=e.name,c=e.min,m=e.max,g=e.disabled,l=e.isError;return"textarea"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:u,id:u,className:d,placeholder:r,onChange:i,onBlur:a,value:s,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"date"===t||"datetime-local"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:t,placeholder:r,onChange:i,onBlur:a,value:s,min:c,max:"9999-12-31",disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"number"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:t,onChange:i,onBlur:a,value:s,min:c,max:m,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:t,placeholder:r,onChange:i,onBlur:a,value:s,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(i.memo)(a)},107:function(e,r,t){},113:function(e,r,t){"use strict";t.d(r,"f",(function(){return a})),t.d(r,"g",(function(){return s})),t.d(r,"e",(function(){return d})),t.d(r,"k",(function(){return o})),t.d(r,"l",(function(){return u})),t.d(r,"o",(function(){return c})),t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return g})),t.d(r,"p",(function(){return l})),t.d(r,"i",(function(){return p})),t.d(r,"a",(function(){return h})),t.d(r,"h",(function(){return q})),t.d(r,"j",(function(){return b})),t.d(r,"n",(function(){return j})),t.d(r,"d",(function(){return f})),t.d(r,"m",(function(){return y}));var i=t(137),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,a=i.f({userName:i.g("Enter your email").required("Email is required"),password:i.g("Enter your password").required("Password is required")}),s=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),accountName:i.g("Enter your name").required("Name is required"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),d=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),programThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),category:i.g(),targetAudiance:i.a().min(1,"Pilih minimal 1"),contentPrograms:i.a().min(1).of(i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi"),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),answerKey:i.g().when("category",{is:"Ujian",then:i.g().required("Kunci Jawaban harus diisi"),otherwise:i.g()})}))}),u=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),startDate:i.c("Insert start date").required("Date is required")}),c=i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi")}),m=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),contentThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),isActive:i.b(),topics:i.a().min(1),targetAudience:i.a().min(1)}),g=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),startDate:i.c("Insert start date").required("Date is required")}),l=i.f({nameUser:i.g("Enter your content title").required("User name is required"),emailUser:i.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:i.c("Insert start date").required("Date is required")}),p=i.f({destination:i.a().min(1),messageSubject:i.g("Enter the message subject").required("Message Subject is required"),messageContent:i.g("Enter the message content").required("Message Content is required"),scheduleTime:i.c("Insert start date").required("Date is required"),mediaType:i.g("Enter the media type").required("Media type is required"),category:i.g("Enter the category").required("Category is required")}),h=i.f({audianceName:i.g("Enter your audience name").required("Audience Name is required")}),q=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),b=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),j=i.f({emailUser:i.g("Enter your email").required("Email is required").email("Email not valid"),userName:i.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=i.f({topicName:i.g("Enter topic name").required("Topic Name is required")}),y=i.f({controlParameterName:i.g("Enter category name").required("Category is required"),controlParameterValue:i.e().required("Number is required")})},1235:function(e,r,t){},1403:function(e,r,t){"use strict";t.r(r);t(2);var i=t(94),n=(t(1235),t(136)),a=t(6),s=t(127),d=t(36),o=t(17),u=t(113),c=t(106),m=t(0);r.default=Object(o.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContentTopic:function(r,t){return e(Object(s.c)(r,t))}}}))((function(e){var r=e.onAddContentTopic,t=e.isLoading,s=Object(a.g)();return JSON.parse(localStorage.getItem("userData")).cobrandEmail,t?Object(m.jsx)(d.a,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a,{headingName:"Topik Artikel",routes:[{path:"/tools/setting/topic",name:"Topik Artikel"},{path:"/tools/setting/topic/add",name:"Tambah"}]}),Object(m.jsx)(n.a,{initialValues:{topicName:""},validationSchema:u.d,validateOnChange:!0,onSubmit:function(e){r(e.topicName,s)},children:function(e){var r=e.handleChange,t=e.handleSubmit,i=e.handleBlur,n=(e.setFieldValue,e.values),a=e.errors,s=e.touched;return Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)("div",{className:"AddContentTopic",children:[Object(m.jsx)("h1",{children:"Tambah"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Nama Topik Artikel"}),Object(m.jsx)(c.a,{type:"text",name:"topicName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.topicName,onChange:r,onBlur:i}),s.topicName&&Object(m.jsx)("span",{className:"message__error",children:a.topicName})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(t),t?Object(m.jsx)(d.a,{}):null]})}))},94:function(e,r,t){"use strict";t(2);var i=t(8),n=(t(95),t(0));r.a=function(e){var r=e.headingName,t=e.routes,a=void 0===t?[]:t;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,r){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(i.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,t){}}]);
//# sourceMappingURL=61.49441d7e.chunk.js.map