(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[58],{104:function(e,r,t){"use strict";var n=t(2),a=(t(105),t(0));function i(e){var r=e.placeholder,t=e.type,n=e.onChange,i=e.onBlur,s=e.value,o=e.className,u=e.message,c=e.name,d=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:c,id:c,className:o,placeholder:r,onChange:n,onBlur:i,value:s,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):"date"===t||"datetime-local"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,placeholder:r,onChange:n,onBlur:i,value:s,min:d,max:"9999-12-31",disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):"number"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,onChange:n,onBlur:i,value:s,min:d,max:m,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:c,className:o,type:t,placeholder:r,onChange:n,onBlur:i,value:s,disabled:l}),g&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:u})})]})}r.a=Object(n.memo)(i)},105:function(e,r,t){},109:function(e,r,t){"use strict";t.d(r,"g",(function(){return i})),t.d(r,"h",(function(){return s})),t.d(r,"f",(function(){return o})),t.d(r,"m",(function(){return u})),t.d(r,"n",(function(){return c})),t.d(r,"q",(function(){return d})),t.d(r,"c",(function(){return m})),t.d(r,"d",(function(){return l})),t.d(r,"r",(function(){return g})),t.d(r,"k",(function(){return p})),t.d(r,"a",(function(){return h})),t.d(r,"j",(function(){return j})),t.d(r,"l",(function(){return b})),t.d(r,"p",(function(){return f})),t.d(r,"b",(function(){return q})),t.d(r,"i",(function(){return y})),t.d(r,"e",(function(){return x})),t.d(r,"o",(function(){return O}));var n=t(136),a=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=n.f({userName:n.g("Enter your email").required("Email is required"),password:n.g("Enter your password").required("Password is required")}),s=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),accountName:n.g("Enter your name").required("Name is required"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),u=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),programThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),category:n.g(),targetAudiance:n.a().min(1,"Pilih minimal 1"),contentPrograms:n.a().min(1).of(n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi"),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),answerKey:n.g().when("category",{is:"Ujian",then:n.g().required("Kunci Jawaban harus diisi"),otherwise:n.g()})}))}),c=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),startDate:n.c("Insert start date").required("Date is required")}),d=n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi")}),m=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),contentThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),isActive:n.b(),topics:n.a().min(1),targetAudience:n.a().min(1)}),l=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),startDate:n.c("Insert start date").required("Date is required")}),g=n.f({nameUser:n.g("Enter your content title").required("User name is required"),emailUser:n.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:n.c("Insert start date").required("Date is required")}),p=n.f({destination:n.a().min(1),messageSubject:n.g("Enter the message subject").required("Message Subject is required"),messageContent:n.g("Enter the message content").required("Message Content is required"),scheduleTime:n.c("Insert start date").required("Date is required"),mediaType:n.g("Enter the media type").required("Media type is required"),category:n.g("Enter the category").required("Category is required")}),h=n.f({audianceName:n.g("Enter your audience name").required("Audience Name is required")}),j=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),b=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),f=n.f({emailUser:n.g("Enter your email").required("Email is required").email("Email not valid"),userName:n.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:n.g("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),q=n.f({cobrandComunityName:n.g("Enter your community name").required("Community name is required"),partComunityName:n.g("Enter your community name")}),y=n.f({groupMitraAsuhName:n.g("Enter your group name").required("Group name is required")}),x=n.f({topicName:n.g("Enter topic name").required("Topic Name is required")}),O=n.f({controlParameterName:n.g("Enter category name").required("Category is required"),controlParameterValue:n.e().required("Number is required")})},1408:function(e,r,t){"use strict";t.r(r);var n=t(7),a=t(2),i=t(94),s=(t(888),t(135)),o=t(6),u=t(124),c=t(36),d=t(17),m=t(109),l=t(104),g=t(18),p=t.n(g),h=t(258),j=t.n(h),b=(t(37),t(226),t(180)),f=(t(251),t(227),t(293),t(370)),q=t.n(f),y=t(252),x=t.n(y),O=(t(256),t(0));r.default=Object(d.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditStep:function(r,t,n,a,i,s,o,c){return e(Object(u.w)(r,t,n,a,i,s,o,c))}}}))((function(e){var r,t,u=e.onEditStep,d=e.isLoading,g=b.EditorState.createEmpty(),h=Object(a.useState)(g),f=Object(n.a)(h,2),y=(f[0],f[1],Object(a.useState)(g)),N=Object(n.a)(y,2),E=(N[0],N[1]),v=[["undo","redo"],["font","fontSize","formatBlock"],["paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor","textStyle"],["removeFormat"],["outdent","indent"],["align","horizontalRule","list","lineHeight"],["table","link","image","video"],["preview","print"]],w=Object(a.useState)(!0),T=Object(n.a)(w,2),_=T[0],C=T[1],I=Object(a.useState)(),S=Object(n.a)(I,2),D=(S[0],S[1],Object(a.useState)()),P=Object(n.a)(D,2),B=P[0],z=P[1],M=Object(a.useState)(),k=Object(n.a)(M,2),U=(k[0],k[1],Object(a.useState)("")),F=Object(n.a)(U,2),V=F[0],A=F[1],K=Object(a.useState)(j.a.createEmptyValue()),L=Object(n.a)(K,2),J=(L[0],L[1],Object(a.useState)(j.a.createEmptyValue())),H=Object(n.a)(J,2),R=(H[0],H[1]),W=Object(o.g)(),$=JSON.parse(localStorage.getItem("userData")).cobrandEmail,G=localStorage.getItem("stepSelected");return Object(a.useEffect)((function(){if(C(!0),G){var e={whereKeyValues:{cobrandEmail:$,_id:G}};p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){z(e.data.contents[0]);var r=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");e.data.contents[0].contentType;var t=r.getElementById("contents"),n=q()(t.innerHTML);R(j.a.createValueFromString(t.outerHTML,"html")),A(t.outerHTML),E(b.EditorState.createWithContent(b.ContentState.createFromBlockArray(n.contentBlocks,n.entityMap))),C(!1)})).catch((function(e){C(!1)}))}}),[]),_?Object(O.jsx)(c.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(i.a,{headingName:"Tahap",routes:[{path:"/cms/program/",name:"Program"},{path:"/cms/program/edit",name:"Ubah Program Terpilih"},{path:"/cms/program/edit/step",name:"Ubah Tahap Terpilih"}]}),Object(O.jsx)(s.a,{initialValues:{namaTahapan:B.namaTahapan,contentName:B.contentName,contentType:B.contentType,contents:V,response:null!==(r=Object.keys(B.respons))&&void 0!==r?r:[],answerKey:null!==(t=B.answerKey)&&void 0!==t?t:""},validationSchema:m.q,validateOnChange:!0,onSubmit:function(e){u(G,$,e.namaTahapan,e.contentName,e.contents,e.response,e.answerKey,W)},children:function(e){var r=e.handleChange,t=e.handleSubmit,n=e.handleBlur,a=e.setFieldValue,i=e.values,s=e.errors,o=e.touched;return Object(O.jsx)("form",{onSubmit:t,children:Object(O.jsxs)("div",{className:"EditContent",children:[Object(O.jsxs)("h1",{children:["Ubah Tahap: ",B.contentName]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Nama Tahap"}),Object(O.jsx)(l.a,{type:"text",name:"namaTahapan",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:i.namaTahapan,onChange:r,onBlur:n}),o.namaTahapan&&Object(O.jsx)("span",{className:"message__error",children:s.namaTahapan})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Judul Tahap"}),Object(O.jsx)(l.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:i.contentName,onChange:r,onBlur:n}),o.contentName&&Object(O.jsx)("span",{className:"message__error",children:s.contentName})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Isi Tahap"}),(i.contentType,Object(O.jsx)(x.a,{defaultValue:i.contents,setOptions:{buttonList:v,imageWidth:"360px"},onChange:function(e){a("contents",e)},height:"500px"})),"Image"===i.contentType?Object(O.jsx)(l.a,{type:"file",className:"form-group__input",name:"contents",onBlur:n,onChange:function(e){var r=e.currentTarget.files[0];r&&a("contents",r)}}):null,"Video"===i.contentType?Object(O.jsx)(l.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:i.contents,onChange:r,onBlur:n}):null,"Pdf"===i.contentType?Object(O.jsx)(l.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:i.contents,onChange:r,onBlur:n}):null,o.contents&&Object(O.jsx)("span",{className:"message__error",children:s.contents})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Respon/Jawaban"}),i.response.map((function(e,r){return Object(O.jsx)(l.a,{type:"text",name:"response",className:"form-group__input form-group__input--halfwidth",placeholder:"Example",value:e,onChange:function(e){for(var t="",n=0;n<e.currentTarget.value.length;n++)"."!==e.currentTarget.value.charAt(n)?t+=e.currentTarget.value.charAt(n):t+="\u2024";a("response.".concat(r),t)},onBlur:n})}))]}),"Ujian"===localStorage.getItem("programCategory")?Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Kunci Jawaban"}),Object(O.jsxs)("select",{name:"answerKey",value:i.answerKey,onChange:function(e){a("answerKey",e.currentTarget.value)},children:[Object(O.jsx)("option",{value:"-1",disabled:!0,children:" "}),i.response.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))]})]}):null,Object(O.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Tahap"})]})]})})}}),d?Object(O.jsx)(c.a,{}):null]})}))},253:function(e,r,t){var n={"./ckb.js":202,"./da.js":203,"./de.js":204,"./en.js":189,"./es.js":205,"./fr.js":206,"./he.js":207,"./index.js":254,"./it.js":208,"./ja.js":209,"./ko.js":210,"./lv.js":211,"./nl.js":212,"./pl.js":213,"./pt_br.js":214,"./ro.js":215,"./ru.js":216,"./se.js":217,"./ua.js":218,"./zh_cn.js":219};function a(e){var r=i(e);return t(r)}function i(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=253},888:function(e,r,t){},94:function(e,r,t){"use strict";t(2);var n=t(9),a=(t(95),t(0));r.a=function(e){var r=e.headingName,t=e.routes,i=void 0===t?[]:t;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:r}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,r){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,t){}}]);
//# sourceMappingURL=58.3ffb167c.chunk.js.map