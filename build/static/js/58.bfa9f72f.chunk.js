(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[58],{100:function(e,r,t){},106:function(e,r,t){"use strict";t.d(r,"m",(function(){return s})),t.d(r,"f",(function(){return o})),t.d(r,"o",(function(){return c})),t.d(r,"n",(function(){return u})),t.d(r,"d",(function(){return d})),t.d(r,"h",(function(){return m})),t.d(r,"c",(function(){return l})),t.d(r,"i",(function(){return g})),t.d(r,"b",(function(){return p})),t.d(r,"k",(function(){return h})),t.d(r,"j",(function(){return j})),t.d(r,"e",(function(){return b})),t.d(r,"g",(function(){return f})),t.d(r,"l",(function(){return q})),t.d(r,"a",(function(){return x}));var a=t(18),n=t.n(a),i=t(20),s=function(e){return n()({method:"post",url:i.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return n()({method:"post",url:i.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return n()({method:"post",url:i.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return n()({method:"post",url:i.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return n()({method:"post",url:i.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return n()({method:"post",url:i.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return n()({method:"post",url:i.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return n()({method:"post",url:i.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return n()({method:"post",url:i.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return n()({method:"post",url:i.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return n()({method:"post",url:i.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return n()({method:"post",url:i.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return n()({method:"post",url:i.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},q=function(e){return n()({method:"post",url:i.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return n()({method:"post",url:i.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},108:function(e,r,t){"use strict";var a=t(2),n=(t(109),t(0));function i(e){var r=e.placeholder,t=e.type,a=e.onChange,i=e.onBlur,s=e.value,o=e.className,c=e.message,u=e.name,d=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:u,id:u,className:o,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===t||"datetime-local"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:o,type:t,placeholder:r,onChange:a,onBlur:i,value:s,min:d,max:"9999-12-31",disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"number"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:o,type:t,onChange:a,onBlur:i,value:s,min:d,max:m,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:o,type:t,placeholder:r,onChange:a,onBlur:i,value:s,disabled:l}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}r.a=Object(a.memo)(i)},109:function(e,r,t){},117:function(e,r,t){"use strict";t.d(r,"f",(function(){return i})),t.d(r,"g",(function(){return s})),t.d(r,"e",(function(){return o})),t.d(r,"k",(function(){return c})),t.d(r,"l",(function(){return u})),t.d(r,"o",(function(){return d})),t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return l})),t.d(r,"p",(function(){return g})),t.d(r,"i",(function(){return p})),t.d(r,"a",(function(){return h})),t.d(r,"h",(function(){return j})),t.d(r,"j",(function(){return b})),t.d(r,"n",(function(){return f})),t.d(r,"d",(function(){return q})),t.d(r,"m",(function(){return x}));var a=t(139),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=a.f({userName:a.g("Enter your email").required("Email is required"),password:a.g("Enter your password").required("Password is required")}),s=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),c=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),category:a.g(),targetAudiance:a.a().min(1,"Pilih minimal 1"),contentPrograms:a.a().min(1).of(a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi"),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),answerKey:a.g().when("category",{is:"Ujian",then:a.g().required("Kunci Jawaban harus diisi"),otherwise:a.g()})}))}),u=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),d=a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi")}),m=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),l=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),g=a.f({nameUser:a.g("Enter your content title").required("User name is required"),emailUser:a.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:a.c("Insert start date").required("Date is required")}),p=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),h=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),j=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),b=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),f=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),q=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),x=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},1261:function(e,r,t){},1430:function(e,r,t){"use strict";t.r(r);var a=t(7),n=t(2),i=t(99),s=(t(1261),t(138)),o=t(6),c=t(128),u=t(106),d=t(36),m=t(17),l=t(117),g=t(108),p=t(1262),h=(t(1264),t(0));r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onAddNotification:function(r,t,a,n,i,s,o,u){return e(Object(c.e)(r,t,a,n,i,s,o,u))}}}))((function(e){var r=e.onAddNotification,t=e.isLoading,c=Object(o.g)(),m=Object(n.useState)(new Date),j=Object(a.a)(m,2),b=j[0],f=j[1],q=(JSON.parse(localStorage.getItem("userData")).cobrandEmail,Object(n.useState)([])),x=Object(a.a)(q,2),O=x[0],y=x[1],N=Object(n.useState)(""),v=Object(a.a)(N,2),C=v[0],E=v[1],T=Object(n.useState)(!1),S=Object(a.a)(T,2),I=S[0],w=S[1],D=Object(n.useState)(!1),_=Object(a.a)(D,2),P=_[0],k=_[1],B=Object(n.useState)([]),F=Object(a.a)(B,2),z=F[0],M=F[1],A=Object(n.useState)([]),J=Object(a.a)(A,2),U=J[0],K=J[1],L=Object(n.useState)(!0),H=Object(a.a)(L,2),V=H[0],$=H[1];return Object(n.useEffect)((function(){var e=b;e.setTime(e.getTime()+252e5),f(e),localStorage.getItem("emailTo")&&(y(localStorage.getItem("emailTo").split(",")),localStorage.removeItem("emailTo")),localStorage.getItem("notifContext")&&(E(localStorage.getItem("notifContext")),localStorage.removeItem("notifContext"));var r={},t=Object(u.e)(r),a=Object(u.j)(r);Promise.all([t,a]).then((function(e){M(e[0].data.Data),K(e[1].data.Data),$(!1)}))}),[]),V?Object(h.jsx)(d.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a,{headingName:"Buat Notifikasi",routes:[{path:"/cms/notifications",name:"Notifikasi"},{path:"/cms/notifications/add",name:"Buat Notifikasi Baru"}]}),Object(h.jsx)(s.a,{initialValues:{destination:O,messageSubject:C,messageContent:"",useSchedule:!1,scheduleTime:b.toISOString().slice(0,-8),mediaType:"Semua",category:"Umum"},validationSchema:l.i,validateOnChange:!0,onSubmit:function(e){r(e.destination,e.messageSubject,e.messageContent,e.useSchedule,e.scheduleTime,e.mediaType,e.category,c)},children:function(e){var r=e.handleChange,t=e.handleSubmit,a=e.handleBlur,n=e.setFieldValue,i=e.values,s=e.errors,o=e.touched;return Object(h.jsx)("form",{onSubmit:t,children:Object(h.jsxs)("div",{className:"AddNotification",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Tujuan"}),Object(h.jsxs)("label",{className:"form-group-option",children:[Object(h.jsx)("input",{type:"checkbox",onClick:function(e){n("destination",[]),e.currentTarget.checked?w(!0):(n("destination",O),w(!1))}}),Object(h.jsx)("p",{children:"Pakai Target Pengguna"})]}),I?Object(h.jsx)("div",{className:"form-group-choice",children:z.map((function(e){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",value:e.audianceName,onClick:function(r){if(r.currentTarget.checked){var t=i.destination;t.push(e.audianceName),n("destination",t)}else{var a=i.destination,s=a.indexOf(e.audianceName);s>-1&&a.splice(s,1),n("destination",a)}}}),Object(h.jsx)("p",{children:e.audianceName})]})}))}):Object(h.jsx)(p.ReactMultiEmail,{placeholder:"Masukkan email...",emails:i.destination,onChange:function(e){y(e),n("destination",e)},getLabel:function(e,r,t){return Object(h.jsxs)("div",{"data-tag":!0,children:[e,Object(h.jsx)("span",{"data-tag-handle":!0,onClick:function(){return t(r)},children:"\xd7"})]},r)}}),o.destination&&Object(h.jsx)("span",{className:"message__error",children:s.destination})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Judul Pesan"}),Object(h.jsx)(g.a,{type:"text",name:"messageSubject",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:i.messageSubject,onChange:r,onBlur:a}),o.programName&&Object(h.jsx)("span",{className:"message__error",children:s.programName})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Isi Pesan"}),Object(h.jsx)(g.a,{type:"textarea",name:"messageContent",placeholder:"Ketik pesan...",value:i.messageContent,onChange:r,onBlur:a}),o.messageContent&&Object(h.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Pengaturan Jadwal"}),Object(h.jsxs)("label",{className:"form-group-option",children:[Object(h.jsx)("input",{type:"checkbox",onClick:function(e){e.currentTarget.checked?(k(!0),n("useSchedule",!0)):(k(!1),n("useSchedule",!0))}}),Object(h.jsx)("p",{children:"Jadwalkan"})]}),Object(h.jsx)(g.a,{type:"datetime-local",className:"form-group__input",name:"scheduleTime",min:(new Date).toISOString().slice(0,-8),value:i.scheduleTime,onChange:r,onBlur:a,disabled:!P}),o.startDate&&Object(h.jsx)("span",{className:"message__error",children:s.startDate})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Kirim Via"}),Object(h.jsxs)("select",{name:"mediaType",value:i.mediaType,onChange:function(e){n("mediaType",e.currentTarget.value)},children:[Object(h.jsx)("option",{value:"Semua",children:"Semua"}),Object(h.jsx)("option",{value:"Email",children:"Email"}),Object(h.jsx)("option",{value:"Device",children:"Device"})]}),o.messageContent&&Object(h.jsx)("span",{className:"message__error",children:s.messageContent})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"form-group-label",children:"Kategori"}),Object(h.jsx)("div",{className:"form-group-choice",children:U.map((function(e){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"category",value:e.category,checked:i.category===e.category,onChange:function(e){e.currentTarget.checked&&n("category",e.currentTarget.value)}}),Object(h.jsx)("p",{children:e.category})]})}))}),o.category&&Object(h.jsx)("span",{className:"message__error",children:s.category})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Kirim Notifikasi"})})]})})}}),t?Object(h.jsx)(d.a,{}):null]})}))},99:function(e,r,t){"use strict";t(2);var a=t(8),n=(t(100),t(0));r.a=function(e){var r=e.headingName,t=e.routes,i=void 0===t?[]:t;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:r}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,r){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},r)}))})]})}}}]);
//# sourceMappingURL=58.bfa9f72f.chunk.js.map