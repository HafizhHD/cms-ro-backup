(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[60],{104:function(e,r,t){"use strict";var a=t(2),i=(t(105),t(0));function n(e){var r=e.placeholder,t=e.type,a=e.onChange,n=e.onBlur,s=e.value,c=e.className,o=e.message,u=e.name,d=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("textarea",{name:u,id:u,className:c,placeholder:r,onChange:a,onBlur:n,value:s,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"date"===t||"datetime-local"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:c,type:t,placeholder:r,onChange:a,onBlur:n,value:s,min:d,max:"9999-12-31",disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"number"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:c,type:t,onChange:a,onBlur:n,value:s,min:d,max:m,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:c,type:t,placeholder:r,onChange:a,onBlur:n,value:s,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(a.memo)(n)},105:function(e,r,t){},112:function(e,r,t){"use strict";t.d(r,"g",(function(){return n})),t.d(r,"h",(function(){return s})),t.d(r,"f",(function(){return c})),t.d(r,"l",(function(){return o})),t.d(r,"m",(function(){return u})),t.d(r,"p",(function(){return d})),t.d(r,"c",(function(){return m})),t.d(r,"d",(function(){return l})),t.d(r,"q",(function(){return g})),t.d(r,"j",(function(){return j})),t.d(r,"a",(function(){return p})),t.d(r,"i",(function(){return b})),t.d(r,"k",(function(){return h})),t.d(r,"o",(function(){return f})),t.d(r,"b",(function(){return q})),t.d(r,"e",(function(){return x})),t.d(r,"n",(function(){return O}));var a=t(138),i=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,n=a.f({userName:a.g("Enter your email").required("Email is required"),password:a.g("Enter your password").required("Password is required")}),s=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),c=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),category:a.g(),targetAudiance:a.a().min(1,"Pilih minimal 1"),contentPrograms:a.a().min(1).of(a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi"),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),answerKey:a.g().when("category",{is:"Ujian",then:a.g().required("Kunci Jawaban harus diisi"),otherwise:a.g()})}))}),u=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),d=a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi")}),m=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),l=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),g=a.f({nameUser:a.g("Enter your content title").required("User name is required"),emailUser:a.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:a.c("Insert start date").required("Date is required")}),j=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),p=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),b=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),h=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),f=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),q=a.f({cobrandComunityName:a.g("Enter your community name").required("Community name is required"),partComunityName:a.g("Enter your community name")}),x=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),O=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},1255:function(e,r,t){},1433:function(e,r,t){"use strict";t.r(r);var a=t(7),i=t(2),n=t(94),s=(t(1255),t(137)),c=t(6),o=t(126),u=t(99),d=t(36),m=t(17),l=t(112),g=t(104),j=t(1256),p=(t(1258),t(0));r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onAddNotification:function(r,t,a,i,n,s,c,u,d){return e(Object(o.f)(r,t,a,i,n,s,c,u,d))}}}))((function(e){var r=e.onAddNotification,t=e.isLoading,o=Object(c.g)(),m=Object(i.useState)(new Date),b=Object(a.a)(m,2),h=b[0],f=b[1],q=JSON.parse(localStorage.getItem("userData")).cobrandEmail,x=Object(i.useState)([]),O=Object(a.a)(x,2),y=O[0],N=O[1],v=Object(i.useState)(""),E=Object(a.a)(v,2),C=E[0],S=E[1],I=Object(i.useState)(!1),T=Object(a.a)(I,2),w=T[0],D=T[1],_=Object(i.useState)(!1),P=Object(a.a)(_,2),k=P[0],B=P[1],z=Object(i.useState)([]),M=Object(a.a)(z,2),A=M[0],J=M[1],F=Object(i.useState)([]),K=Object(a.a)(F,2),U=K[0],H=K[1],L=Object(i.useState)(!0),V=Object(a.a)(L,2),$=V[0],R=V[1];return Object(i.useEffect)((function(){var e=h;e.setTime(e.getTime()+252e5),f(e),localStorage.getItem("emailTo")&&(N(localStorage.getItem("emailTo").split(",")),localStorage.removeItem("emailTo")),localStorage.getItem("notifContext")&&(S(localStorage.getItem("notifContext")),localStorage.removeItem("notifContext"));var r={},t=Object(u.e)(r),a=Object(u.l)(r);Promise.all([t,a]).then((function(e){J(e[0].data.Data),H(e[1].data.Data),R(!1)}))}),[]),$?Object(p.jsx)(d.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{headingName:"Buat Notifikasi",routes:[{path:"/cms/notifications",name:"Notifikasi"},{path:"/cms/notifications/add",name:"Buat Notifikasi Baru"}]}),Object(p.jsx)(s.a,{initialValues:{destination:y,messageSubject:C,messageContent:"",useSchedule:!1,scheduleTime:h.toISOString().slice(0,-8),mediaType:"Semua",category:"Umum"},validationSchema:l.j,validateOnChange:!0,onSubmit:function(e){r(q,e.destination,e.messageSubject,e.messageContent,e.useSchedule,e.scheduleTime,e.mediaType,e.category,o)},children:function(e){var r=e.handleChange,t=e.handleSubmit,a=e.handleBlur,i=e.setFieldValue,n=e.values,s=e.errors,c=e.touched;return Object(p.jsx)("form",{onSubmit:t,children:Object(p.jsxs)("div",{className:"AddNotification",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Tujuan"}),Object(p.jsxs)("label",{className:"form-group-option",children:[Object(p.jsx)("input",{type:"checkbox",onClick:function(e){i("destination",[]),e.currentTarget.checked?D(!0):(i("destination",y),D(!1))}}),Object(p.jsx)("p",{children:"Pakai Target Pengguna"})]}),w?Object(p.jsx)("div",{className:"form-group-choice",children:A.map((function(e){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox",value:e.audianceName,onClick:function(r){if(r.currentTarget.checked){var t=n.destination;t.push(e.audianceName),i("destination",t)}else{var a=n.destination,s=a.indexOf(e.audianceName);s>-1&&a.splice(s,1),i("destination",a)}}}),Object(p.jsx)("p",{children:e.audianceName})]})}))}):Object(p.jsx)(j.ReactMultiEmail,{placeholder:"Masukkan email...",emails:n.destination,onChange:function(e){N(e),i("destination",e)},getLabel:function(e,r,t){return Object(p.jsxs)("div",{"data-tag":!0,children:[e,Object(p.jsx)("span",{"data-tag-handle":!0,onClick:function(){return t(r)},children:"\xd7"})]},r)}}),c.destination&&Object(p.jsx)("span",{className:"message__error",children:s.destination})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Judul Pesan"}),Object(p.jsx)(g.a,{type:"text",name:"messageSubject",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.messageSubject,onChange:r,onBlur:a}),c.programName&&Object(p.jsx)("span",{className:"message__error",children:s.programName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Isi Pesan"}),Object(p.jsx)(g.a,{type:"textarea",name:"messageContent",placeholder:"Ketik pesan...",value:n.messageContent,onChange:r,onBlur:a}),c.messageContent&&Object(p.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Pengaturan Jadwal"}),Object(p.jsxs)("label",{className:"form-group-option",children:[Object(p.jsx)("input",{type:"checkbox",onClick:function(e){e.currentTarget.checked?(B(!0),i("useSchedule",!0)):(B(!1),i("useSchedule",!0))}}),Object(p.jsx)("p",{children:"Jadwalkan"})]}),Object(p.jsx)(g.a,{type:"datetime-local",className:"form-group__input",name:"scheduleTime",min:(new Date).toISOString().slice(0,-8),value:n.scheduleTime,onChange:r,onBlur:a,disabled:!k}),c.startDate&&Object(p.jsx)("span",{className:"message__error",children:s.startDate})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Kirim Via"}),Object(p.jsxs)("select",{name:"mediaType",value:n.mediaType,onChange:function(e){i("mediaType",e.currentTarget.value)},children:[Object(p.jsx)("option",{value:"Semua",children:"Semua"}),Object(p.jsx)("option",{value:"Email",children:"Email"}),Object(p.jsx)("option",{value:"Device",children:"Device"})]}),c.messageContent&&Object(p.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"form-group-label",children:"Kategori"}),Object(p.jsx)("div",{className:"form-group-choice",children:U.map((function(e){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:"category",value:e.category,checked:n.category===e.category,onChange:function(e){e.currentTarget.checked&&i("category",e.currentTarget.value)}}),Object(p.jsx)("p",{children:e.category})]})}))}),c.category&&Object(p.jsx)("span",{className:"message__error",children:s.category})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Kirim Notifikasi"})})]})})}}),t?Object(p.jsx)(d.a,{}):null]})}))},94:function(e,r,t){"use strict";t(2);var a=t(9),i=(t(95),t(0));r.a=function(e){var r=e.headingName,t=e.routes,n=void 0===t?[]:t;return Object(i.jsxs)("div",{className:"Heading",children:[Object(i.jsx)("h1",{children:r}),Object(i.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,r){return e.path?Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(i.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(i.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,t){}}]);
//# sourceMappingURL=60.07b101e7.chunk.js.map