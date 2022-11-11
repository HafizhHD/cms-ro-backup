(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[64],{100:function(e,r,t){},106:function(e,r,t){"use strict";t.d(r,"g",(function(){return i})),t.d(r,"h",(function(){return s})),t.d(r,"f",(function(){return c})),t.d(r,"m",(function(){return o})),t.d(r,"n",(function(){return u})),t.d(r,"q",(function(){return d})),t.d(r,"c",(function(){return m})),t.d(r,"d",(function(){return l})),t.d(r,"r",(function(){return g})),t.d(r,"k",(function(){return p})),t.d(r,"a",(function(){return j})),t.d(r,"j",(function(){return b})),t.d(r,"l",(function(){return h})),t.d(r,"p",(function(){return f})),t.d(r,"b",(function(){return q})),t.d(r,"i",(function(){return O})),t.d(r,"e",(function(){return x})),t.d(r,"o",(function(){return y}));var a=t(131),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=a.f({userName:a.g("Enter your email").required("Email is required"),password:a.g("Enter your password").required("Password is required")}),s=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),c=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),category:a.g(),targetAudiance:a.a().min(1,"Pilih minimal 1"),contentPrograms:a.a().min(1).of(a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi"),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),answerKey:a.g().when("category",{is:"Ujian",then:a.g().required("Kunci Jawaban harus diisi"),otherwise:a.g()})}))}),u=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),d=a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi")}),m=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),l=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),g=a.f({nameUser:a.g("Enter your content title").required("User name is required"),emailUser:a.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:a.c("Insert start date").required("Date is required")}),p=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),j=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),b=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),h=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),f=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),q=a.f({cobrandComunityName:a.g("Enter your community name").required("Community name is required"),partComunityName:a.g("Enter your community name")}),O=a.f({groupMitraAsuhName:a.g("Enter your group name").required("Group name is required")}),x=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),y=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},1255:function(e,r,t){},1439:function(e,r,t){"use strict";t.r(r);var a=t(7),n=t(2),i=t(93),s=(t(1255),t(130)),c=t(6),o=t(124),u=t(96),d=t(35),m=t(17),l=t(106),g=t(99),p=t(1256),j=(t(1258),t(0));r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onAddNotification:function(r,t,a,n,i,s,c,u,d,m){return e(Object(o.f)(r,t,a,n,i,s,c,u,d,m))}}}))((function(e){var r=e.onAddNotification,t=e.isLoading,o=Object(c.g)(),m=Object(n.useState)(new Date),b=Object(a.a)(m,2),h=b[0],f=b[1],q=JSON.parse(localStorage.getItem("userData")).cobrandEmail,O=JSON.parse(localStorage.getItem("userData")).cobrandComunityId,x=Object(n.useState)([]),y=Object(a.a)(x,2),N=y[0],v=y[1],E=Object(n.useState)(""),C=Object(a.a)(E,2),S=C[0],I=C[1],T=Object(n.useState)(!1),w=Object(a.a)(T,2),D=w[0],_=w[1],P=Object(n.useState)(!1),k=Object(a.a)(P,2),B=k[0],z=k[1],M=Object(n.useState)([]),A=Object(a.a)(M,2),J=A[0],F=A[1],K=Object(n.useState)([]),U=Object(a.a)(K,2),H=U[0],L=U[1],V=Object(n.useState)(!0),$=Object(a.a)(V,2),G=$[0],R=$[1];return Object(n.useEffect)((function(){var e=h;e.setTime(e.getTime()+252e5),f(e),localStorage.getItem("emailTo")&&(v(localStorage.getItem("emailTo").split(",")),localStorage.removeItem("emailTo")),localStorage.getItem("notifContext")&&(I(localStorage.getItem("notifContext")),localStorage.removeItem("notifContext"));var r={},t=Object(u.e)(r),a=Object(u.n)(r);Promise.all([t,a]).then((function(e){F(e[0].data.Data),L(e[1].data.Data),R(!1)}))}),[]),G?Object(j.jsx)(d.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.a,{headingName:"Buat Notifikasi",routes:[{path:"/cms/notifications",name:"Notifikasi"},{path:"/cms/notifications/add",name:"Buat Notifikasi Baru"}]}),Object(j.jsx)(s.a,{initialValues:{destination:N,messageSubject:S,messageContent:"",useSchedule:!1,scheduleTime:h.toISOString().slice(0,-8),mediaType:"Semua",category:"Umum"},validationSchema:l.k,validateOnChange:!0,onSubmit:function(e){r(q,e.destination,e.messageSubject,e.messageContent,e.useSchedule,e.scheduleTime,e.mediaType,e.category,O,o)},children:function(e){var r=e.handleChange,t=e.handleSubmit,a=e.handleBlur,n=e.setFieldValue,i=e.values,s=e.errors,c=e.touched;return Object(j.jsx)("form",{onSubmit:t,children:Object(j.jsxs)("div",{className:"AddNotification",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Tujuan"}),Object(j.jsxs)("label",{className:"form-group-option",children:[Object(j.jsx)("input",{type:"checkbox",onClick:function(e){n("destination",[]),e.currentTarget.checked?_(!0):(n("destination",N),_(!1))}}),Object(j.jsx)("p",{children:"Pakai Target Pengguna"})]}),D?Object(j.jsx)("div",{className:"form-group-choice",children:J.map((function(e){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",value:e.audianceName,onClick:function(r){if(r.currentTarget.checked){var t=i.destination;t.push(e.audianceName),n("destination",t)}else{var a=i.destination,s=a.indexOf(e.audianceName);s>-1&&a.splice(s,1),n("destination",a)}}}),Object(j.jsx)("p",{children:e.audianceName})]})}))}):Object(j.jsx)(p.ReactMultiEmail,{placeholder:"Masukkan email...",emails:i.destination,onChange:function(e){v(e),n("destination",e)},getLabel:function(e,r,t){return Object(j.jsxs)("div",{"data-tag":!0,children:[e,Object(j.jsx)("span",{"data-tag-handle":!0,onClick:function(){return t(r)},children:"\xd7"})]},r)}}),c.destination&&Object(j.jsx)("span",{className:"message__error",children:s.destination})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Judul Pesan"}),Object(j.jsx)(g.a,{type:"text",name:"messageSubject",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:i.messageSubject,onChange:r,onBlur:a}),c.programName&&Object(j.jsx)("span",{className:"message__error",children:s.programName})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Isi Pesan"}),Object(j.jsx)(g.a,{type:"textarea",name:"messageContent",placeholder:"Ketik pesan...",value:i.messageContent,onChange:r,onBlur:a}),c.messageContent&&Object(j.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Pengaturan Jadwal"}),Object(j.jsxs)("label",{className:"form-group-option",children:[Object(j.jsx)("input",{type:"checkbox",onClick:function(e){e.currentTarget.checked?(z(!0),n("useSchedule",!0)):(z(!1),n("useSchedule",!0))}}),Object(j.jsx)("p",{children:"Jadwalkan"})]}),Object(j.jsx)(g.a,{type:"datetime-local",className:"form-group__input",name:"scheduleTime",min:(new Date).toISOString().slice(0,-8),value:i.scheduleTime,onChange:r,onBlur:a,disabled:!B}),c.startDate&&Object(j.jsx)("span",{className:"message__error",children:s.startDate})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Kirim Via"}),Object(j.jsxs)("select",{name:"mediaType",value:i.mediaType,onChange:function(e){n("mediaType",e.currentTarget.value)},children:[Object(j.jsx)("option",{value:"Semua",children:"Semua"}),Object(j.jsx)("option",{value:"Email",children:"Email"}),Object(j.jsx)("option",{value:"Device",children:"Device"})]}),c.messageContent&&Object(j.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{className:"form-group-label",children:"Kategori"}),Object(j.jsx)("div",{className:"form-group-choice",children:H.map((function(e){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"category",value:e.category,checked:i.category===e.category,onChange:function(e){e.currentTarget.checked&&n("category",e.currentTarget.value)}}),Object(j.jsx)("p",{children:e.category})]})}))}),c.category&&Object(j.jsx)("span",{className:"message__error",children:s.category})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Kirim Notifikasi"})})]})})}}),t?Object(j.jsx)(d.a,{}):null]})}))},93:function(e,r,t){"use strict";t(2);var a=t(9),n=(t(94),t(0));r.a=function(e){var r=e.headingName,t=e.routes,i=void 0===t?[]:t;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,r){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},r)}))})]})}},94:function(e,r,t){},99:function(e,r,t){"use strict";var a=t(2),n=(t(100),t(0));function i(e){var r=e.placeholder,t=e.type,a=e.onChange,i=e.onBlur,s=e.value,c=e.className,o=e.message,u=e.name,d=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:u,id:u,className:c,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"date"===t||"datetime-local"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:c,type:t,placeholder:r,onChange:a,onBlur:i,value:s,min:d,max:"9999-12-31",disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"number"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:c,type:t,onChange:a,onBlur:i,value:s,min:d,max:m,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:c,type:t,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(a.memo)(i)}}]);
//# sourceMappingURL=64.8ec848de.chunk.js.map