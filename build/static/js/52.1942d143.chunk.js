(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[52],{100:function(e,r,t){},106:function(e,r,t){"use strict";t.d(r,"g",(function(){return n})),t.d(r,"h",(function(){return s})),t.d(r,"f",(function(){return o})),t.d(r,"m",(function(){return u})),t.d(r,"n",(function(){return c})),t.d(r,"q",(function(){return d})),t.d(r,"c",(function(){return m})),t.d(r,"d",(function(){return l})),t.d(r,"r",(function(){return g})),t.d(r,"k",(function(){return p})),t.d(r,"a",(function(){return j})),t.d(r,"j",(function(){return h})),t.d(r,"l",(function(){return b})),t.d(r,"p",(function(){return q})),t.d(r,"b",(function(){return f})),t.d(r,"i",(function(){return O})),t.d(r,"e",(function(){return x})),t.d(r,"o",(function(){return y}));var i=t(131),a=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,n=i.f({userName:i.g("Enter your email").required("Email is required"),password:i.g("Enter your password").required("Password is required")}),s=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),accountName:i.g("Enter your name").required("Name is required"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),u=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),programThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),category:i.g(),targetAudiance:i.a().min(1,"Pilih minimal 1"),contentPrograms:i.a().min(1).of(i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi"),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),answerKey:i.g().when("category",{is:"Ujian",then:i.g().required("Kunci Jawaban harus diisi"),otherwise:i.g()})}))}),c=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),startDate:i.c("Insert start date").required("Date is required")}),d=i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi")}),m=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),contentThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),isActive:i.b(),topics:i.a().min(1),targetAudience:i.a().min(1)}),l=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),startDate:i.c("Insert start date").required("Date is required")}),g=i.f({nameUser:i.g("Enter your content title").required("User name is required"),emailUser:i.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:i.c("Insert start date").required("Date is required")}),p=i.f({destination:i.a().min(1),messageSubject:i.g("Enter the message subject").required("Message Subject is required"),messageContent:i.g("Enter the message content").required("Message Content is required"),scheduleTime:i.c("Insert start date").required("Date is required"),mediaType:i.g("Enter the media type").required("Media type is required"),category:i.g("Enter the category").required("Category is required")}),j=i.f({audianceName:i.g("Enter your audience name").required("Audience Name is required")}),h=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),b=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),q=i.f({emailUser:i.g("Enter your email").required("Email is required").email("Email not valid"),userName:i.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:i.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=i.f({cobrandComunityName:i.g("Enter your community name").required("Community name is required"),partComunityName:i.g("Enter your community name")}),O=i.f({groupMitraAsuhName:i.g("Enter your group name").required("Group name is required")}),x=i.f({topicName:i.g("Enter topic name").required("Topic Name is required")}),y=i.f({controlParameterName:i.g("Enter category name").required("Category is required"),controlParameterValue:i.e().required("Number is required")})},107:function(e,r,t){},1278:function(e,r,t){},1458:function(e,r,t){"use strict";t.r(r);var i=t(7),a=t(2),n=t(93),s=(t(1278),t(107),t(18),t(130)),o=t(6),u=t(96),c=t(124),d=t(35),m=t(17),l=(t(106),t(99)),g=(t(37),t(217),t(171),t(229),t(222),t(248),t(230),t(233),t(0));r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onChildControl:function(r,t,i,a,n,s){return e(Object(c.n)(r,t,i,a,n,s))}}}))((function(e){var r=e.onChildControl,t=e.isLoading,c=Object(o.g)(),m=(JSON.parse(localStorage.getItem("userData")).cobrandEmail,localStorage.getItem("userNameSelected")),p=localStorage.getItem("userSelected"),j=Object(a.useState)(!0),h=Object(i.a)(j,2),b=h[0],q=h[1],f=Object(a.useState)([]),O=Object(i.a)(f,2),x=O[0],y=O[1],N=Object(a.useState)("normal"),v=Object(i.a)(N,2),E=v[0],k=v[1],w=Object(a.useState)(!1),I=Object(i.a)(w,2),C=I[0],S=I[1],B=Object(a.useState)([]),D=Object(i.a)(B,2),P=D[0],_=D[1],L=Object(a.useState)(0),T=Object(i.a)(L,2);return T[0],T[1],Object(a.useEffect)((function(){var e={whereKeyValues:{emailUser:p}},r=Object(u.v)(e),t=Object(u.l)(e),i=Object(u.c)(e),a=Object(u.m)(e);Promise.all([r,i,a,t]).then((function(e){var r,t;console.log(e[0]),console.log(e[1]),console.log(e[2]),console.log(e[3]);var i=(null!==(r=e[0].data.appdevices)&&void 0!==r?r:[]).length>0?e[0].data.appdevices[0].appName:[];i.sort((function(e,r){return e.appName>r.appName?1:r.appName>e.appName?-1:0}));for(var a=null!==(t=e[1].data.appUsageLimit)&&void 0!==t?t:[],n=[],s=0;s<i.length;s++){for(var o=0,u=0,c="",d=0;d<a.length&&0===o;d++)a[d].appId===i[s].packageId&&(o=0===a[d].limit?1:2,u=a[d].limit,c=a[d]._id);var m={_id:c,appName:i[s].appName,appCategory:i[s].appCategory,packageId:i[s].packageId,mode:o.toString(),limit:u,isChanged:!1};n.push(m)}console.log(n),y(n);var l=e[2].data.childModeAsuhs;l.length>0&&(k(l[0].modeAsuhName),S(!0)),_(e[3].data.deviceUsageSchedules),setTimeout((function(){console.log(x),q(!1)}),2e3)}))}),[]),t||b?Object(g.jsx)(d.a,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(n.a,{headingName:"Kontrol Anak: "+m,routes:[{path:"/cms/user",name:"Pengguna"},{path:"/cms/user/child-control",name:"Kontrol Anak"}]}),Object(g.jsx)(s.a,{initialValues:{appLimitBlock:x.slice(),modeAsuhSelected:E,deviceSchedule:P.slice()},onSubmit:function(e){r(p,C,e.appLimitBlock,e.modeAsuhSelected,e.deviceSchedule,c)},children:function(e){e.handleChange;var r=e.handleSubmit,t=(e.handleBlur,e.setFieldValue),i=e.values;e.errors,e.touched;return Object(g.jsx)("form",{onSubmit:r,children:Object(g.jsxs)("div",{className:"ChildControl",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Mode Asuh"}),Object(g.jsxs)("select",{value:i.modeAsuhSelected,onChange:function(e){t("modeAsuhSelected",e.currentTarget.value)},children:[Object(g.jsx)("option",{value:"normal",children:"Normal"}),Object(g.jsx)("option",{value:"diawasi",children:"Diawasi"}),Object(g.jsx)("option",{value:"dihukum",children:"Dihukum"})]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Blokir dan Batasi Penggunaan Aplikasi"}),Object(g.jsxs)("table",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Nama Aplikasi"}),Object(g.jsx)("th",{children:"Status Blokir"}),Object(g.jsx)("th",{children:"Limit Penggunaan (Menit)"})]}),i.appLimitBlock.map((function(e,r){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.appName}),Object(g.jsxs)("td",{onChange:function(e){console.log(e),console.log(i.appLimitBlock[r].mode),t("appLimitBlock.".concat(r,".mode"),e.target.value),t("appLimitBlock.".concat(r,".isChanged"),!0),"2"===e.target.value&&t("appLimitBlock.".concat(r,".limit"),1),console.log(i.appLimitBlock[r].mode)},children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",value:"1",name:"block_status_"+r.toString(),checked:"1"===i.appLimitBlock[r].mode}),"Ya"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",value:"0",name:"block_status_"+r.toString(),checked:"0"===i.appLimitBlock[r].mode}),"Tidak"]}),Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"radio",value:"2",name:"block_status_"+r.toString(),checked:"2"===i.appLimitBlock[r].mode}),"Pakai Limit Penggunaan"]})]}),Object(g.jsx)("td",{children:Object(g.jsx)(l.a,{name:"limit",className:"form-group__input",type:"number",value:i.appLimitBlock[r].limit,min:1,max:1440,disabled:"2"!==i.appLimitBlock[r].mode,onChange:function(e){t("appLimitBlock.".concat(r,".limit"),e.target.value)}})})]})}))]})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("label",{children:"Jadwal Penguncian"})}),Object(g.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Simpan"})]})})}}),t?Object(g.jsx)(d.a,{}):null]})}))},231:function(e,r,t){var i={"./ckb.js":190,"./da.js":191,"./de.js":192,"./en.js":182,"./es.js":193,"./fr.js":194,"./he.js":195,"./index.js":232,"./it.js":196,"./ja.js":197,"./ko.js":198,"./lv.js":199,"./nl.js":200,"./pl.js":201,"./pt_br.js":202,"./ro.js":203,"./ru.js":204,"./se.js":205,"./ua.js":206,"./zh_cn.js":207};function a(e){var r=n(e);return t(r)}function n(e){if(!t.o(i,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id=231},93:function(e,r,t){"use strict";t(2);var i=t(9),a=(t(94),t(0));r.a=function(e){var r=e.headingName,t=e.routes,n=void 0===t?[]:t;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,r){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(i.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},r)}))})]})}},94:function(e,r,t){},99:function(e,r,t){"use strict";var i=t(2),a=(t(100),t(0));function n(e){var r=e.placeholder,t=e.type,i=e.onChange,n=e.onBlur,s=e.value,o=e.className,u=e.message,c=e.name,d=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:c,id:c,className:o,placeholder:r,onChange:i,onBlur:n,value:s,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):"date"===t||"datetime-local"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,placeholder:r,onChange:i,onBlur:n,value:s,min:d,max:"9999-12-31",disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):"number"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,onChange:i,onBlur:n,value:s,min:d,max:m,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,placeholder:r,onChange:i,onBlur:n,value:s,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]})}r.a=Object(i.memo)(n)}}]);
//# sourceMappingURL=52.1942d143.chunk.js.map