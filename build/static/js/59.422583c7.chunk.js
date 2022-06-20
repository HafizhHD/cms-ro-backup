(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[59],{109:function(e,r,i){"use strict";var t=i(2),n=(i(110),i(0));function a(e){var r=e.placeholder,i=e.type,t=e.onChange,a=e.onBlur,s=e.value,d=e.className,o=e.message,u=e.name,c=e.min,m=e.max,g=e.disabled,l=e.isError;return"textarea"===i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:u,id:u,className:d,placeholder:r,onChange:t,onBlur:a,value:s,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"date"===i||"datetime-local"===i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:i,placeholder:r,onChange:t,onBlur:a,value:s,min:c,max:"9999-12-31",disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"number"===i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:i,onChange:t,onBlur:a,value:s,min:c,max:m,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:d,type:i,placeholder:r,onChange:t,onBlur:a,value:s,disabled:g}),l&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(t.memo)(a)},110:function(e,r,i){},117:function(e,r,i){"use strict";i.d(r,"f",(function(){return a})),i.d(r,"g",(function(){return s})),i.d(r,"e",(function(){return d})),i.d(r,"k",(function(){return o})),i.d(r,"l",(function(){return u})),i.d(r,"o",(function(){return c})),i.d(r,"b",(function(){return m})),i.d(r,"c",(function(){return g})),i.d(r,"p",(function(){return l})),i.d(r,"i",(function(){return p})),i.d(r,"a",(function(){return h})),i.d(r,"h",(function(){return q})),i.d(r,"j",(function(){return b})),i.d(r,"n",(function(){return j})),i.d(r,"d",(function(){return f})),i.d(r,"m",(function(){return y}));var t=i(137),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,a=t.f({userName:t.g("Enter your email").required("Email is required"),password:t.g("Enter your password").required("Password is required")}),s=t.f({email:t.g("Enter your email").required("Email is required").email("Email not valid"),accountName:t.g("Enter your name").required("Name is required"),cobrandName:t.g("Enter your brand name").required("Brand name is required"),thumbnail:t.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:t.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:t.g("Enter your address").required("Address is required"),password:t.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:t.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),d=t.f({email:t.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:t.g("Enter your brand name").required("Brand name is required"),thumbnail:t.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:t.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:t.g("Enter your address").required("Address is required"),password:t.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:t.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=t.f({programName:t.g("Enter your program title").required("Program title is required"),programDescription:t.g("Enter the program description").required("Program description is required"),programThumbnail:t.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:t.c("Insert start date").required("Date is required"),endDate:t.c("Insert end date").required("Date is required"),category:t.g(),targetAudiance:t.a().min(1,"Pilih minimal 1"),contentPrograms:t.a().min(1).of(t.f({namaTahapan:t.g().required("Nama Tahapan harus diisi"),contentName:t.g().required("Judul Tahapan harus diisi"),contents:t.g().required("Isi Tahapan harus diisi"),startDate:t.c("Insert start date").required("Date is required"),endDate:t.c("Insert end date").required("Date is required"),answerKey:t.g().when("category",{is:"Ujian",then:t.g().required("Kunci Jawaban harus diisi"),otherwise:t.g()})}))}),u=t.f({programName:t.g("Enter your program title").required("Program title is required"),programDescription:t.g("Enter the program description").required("Program description is required"),startDate:t.c("Insert start date").required("Date is required")}),c=t.f({namaTahapan:t.g().required("Nama Tahapan harus diisi"),contentName:t.g().required("Judul Tahapan harus diisi"),contents:t.g().required("Isi Tahapan harus diisi")}),m=t.f({contentName:t.g("Enter your content title").required("Content title is required"),contentDescription:t.g("Enter the content description").required("Content description is required"),contents:t.g("Enter the content description").required("Content is required"),contentSource:t.g("Enter the content source").required("Content source is required"),contentThumbnail:t.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:t.c("Insert start date").required("Date is required"),endDate:t.c("Insert end date").required("Date is required"),isActive:t.b(),topics:t.a().min(1),targetAudience:t.a().min(1)}),g=t.f({contentName:t.g("Enter your content title").required("Content title is required"),contentDescription:t.g("Enter the content description").required("Content description is required"),contents:t.g("Enter the content description").required("Content is required"),contentSource:t.g("Enter the content source").required("Content source is required"),startDate:t.c("Insert start date").required("Date is required")}),l=t.f({nameUser:t.g("Enter your content title").required("User name is required"),emailUser:t.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:t.c("Insert start date").required("Date is required")}),p=t.f({destination:t.a().min(1),messageSubject:t.g("Enter the message subject").required("Message Subject is required"),messageContent:t.g("Enter the message content").required("Message Content is required"),scheduleTime:t.c("Insert start date").required("Date is required"),mediaType:t.g("Enter the media type").required("Media type is required"),category:t.g("Enter the category").required("Category is required")}),h=t.f({audianceName:t.g("Enter your audience name").required("Audience Name is required")}),q=t.f({category:t.g("Enter category name").required("Category is required"),description:t.g("Enter description").required("Description is required")}),b=t.f({category:t.g("Enter category name").required("Category is required"),description:t.g("Enter description").required("Description is required")}),j=t.f({emailUser:t.g("Enter your email").required("Email is required").email("Email not valid"),userName:t.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:t.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:t.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=t.f({topicName:t.g("Enter topic name").required("Topic Name is required")}),y=t.f({controlParameterName:t.g("Enter category name").required("Category is required"),controlParameterValue:t.e().required("Number is required")})},1233:function(e,r,i){},1403:function(e,r,i){"use strict";i.r(r);i(2);var t=i(94),n=(i(1233),i(136)),a=i(6),s=i(129),d=i(36),o=i(17),u=i(117),c=i(109),m=i(0);r.default=Object(o.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContentTopic:function(r,i){return e(Object(s.c)(r,i))}}}))((function(e){var r=e.onAddContentTopic,i=e.isLoading,s=Object(a.g)();return JSON.parse(localStorage.getItem("userData")).cobrandEmail,i?Object(m.jsx)(d.a,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(t.a,{headingName:"Topik Artikel",routes:[{path:"/tools/setting/topic",name:"Topik Artikel"},{path:"/tools/setting/topic/add",name:"Tambah"}]}),Object(m.jsx)(n.a,{initialValues:{topicName:""},validationSchema:u.d,validateOnChange:!0,onSubmit:function(e){r(e.topicName,s)},children:function(e){var r=e.handleChange,i=e.handleSubmit,t=e.handleBlur,n=(e.setFieldValue,e.values),a=e.errors,s=e.touched;return Object(m.jsx)("form",{onSubmit:i,children:Object(m.jsxs)("div",{className:"AddContentTopic",children:[Object(m.jsx)("h1",{children:"Tambah"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Nama Topik Artikel"}),Object(m.jsx)(c.a,{type:"text",name:"topicName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.topicName,onChange:r,onBlur:t}),s.topicName&&Object(m.jsx)("span",{className:"message__error",children:a.topicName})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(i),i?Object(m.jsx)(d.a,{}):null]})}))},94:function(e,r,i){"use strict";i(2);var t=i(7),n=(i(95),i(0));r.a=function(e){var r=e.headingName,i=e.routes,a=void 0===i?[]:i;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,r){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(t.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,i){}}]);
//# sourceMappingURL=59.422583c7.chunk.js.map