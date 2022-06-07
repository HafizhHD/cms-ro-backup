(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[15],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26);var a=n(136),o=n(37);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},110:function(e,t,n){"use strict";n(2);var r=n(7),a=(n(111),n(0));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},111:function(e,t,n){},131:function(e,t,n){"use strict";var r=n(2),a=(n(132),n(0));function o(e){var t=e.placeholder,n=e.type,r=e.onChange,o=e.onBlur,i=e.value,c=e.className,s=e.message,l=e.name,u=e.min,d=e.disabled,m=e.isError;return"textarea"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:l,id:l,className:c,placeholder:t,onChange:r,onBlur:o,value:i,disabled:d}),m&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]}):"date"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:l,className:c,type:n,placeholder:t,onChange:r,onBlur:o,value:i,min:u,max:"9999-12-31",disabled:d}),m&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:l,className:c,type:n,placeholder:t,onChange:r,onBlur:o,value:i,disabled:d}),m&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]})}t.a=Object(r.memo)(o)},132:function(e,t,n){},136:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},1373:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(2),o=n(110),i=(n(867),n(197)),c=n(6),s=n(148),l=n(36),u=n(17),d=n(144),m=n(131),p=n(18),g=n.n(p),h=n(443),b=n.n(h),f=n(335),y=n(201),j=(n(482),n(337)),v=n.n(j),O=(n(617),n(868)),w=n.n(O),x=n(0);t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,r,a,o,i,c,l,u,d,m){return e(Object(s.e)(t,n,r,a,o,i,c,l,u,d,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,s=y.EditorState.createEmpty(),u=Object(a.useState)(s),p=Object(r.a)(u,2),h=(p[0],p[1],Object(a.useState)(s)),j=Object(r.a)(h,2),O=j[0],E=j[1],C=function(e){E(e)},S=Object(a.useState)(!0),T=Object(r.a)(S,2),N=T[0],D=T[1],k=Object(a.useState)(),I=Object(r.a)(k,2),q=I[0],_=I[1],P=Object(a.useState)(),M=Object(r.a)(P,2),A=M[0],B=M[1],L=Object(a.useState)(),V=Object(r.a)(L,2),H=V[0],z=V[1],F=Object(a.useState)(""),U=Object(r.a)(F,2),R=U[0],K=U[1],J=Object(a.useState)(b.a.createEmptyValue()),Y=Object(r.a)(J,2),$=(Y[0],Y[1],Object(a.useState)(b.a.createEmptyValue())),G=Object(r.a)($,2),W=G[0],Q=G[1],X=Object(c.g)(),Z=JSON.parse(localStorage.getItem("userData")).email,ee=localStorage.getItem("contentSelected"),te={whereKeyValues:{cobrandEmail:Z}};return Object(a.useEffect)((function(){if(D(!0),console.log(ee),ee){var e={whereKeyValues:{cobrandEmail:Z,_id:ee}};g()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),B(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");console.log("Ini adalah con1 outer"+n.outerHTML),console.log("Ini adalah con1 inner"+n.innerHTML);var r=w()(n.innerHTML);Q(b.a.createValueFromString(n.outerHTML,"html")),K(n.outerHTML),E(y.EditorState.createWithContent(y.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap)));var a=(new DOMParser).parseFromString(e.data.contentDescription,"text/html");console.log(a);var o=a.getElementById("contentDescription");console.log(o)}else if("Image"===e.data.contents[0].contentType){var i=t.getElementsByTagName("img")[0].toString();K(i.src)}else if("Video"===e.data.contents[0].contentType){var c=t.getElementsByTagName("iframe")[0];K(c.src)}else if("Pdf"===e.data.contents[0].contentType){var s=t.getElementsByTagName("iframe")[0].src;s.includes("&embedded=true")&&(s=s.replace("&embedded=true","")),s.includes("http://docs.google.com/gview?url=")&&(s=s.replace("http://docs.google.com/gview?url=","")),K(s)}var l=e.data.contents[0].startDate.split("T")[0];console.log(l),z(l),g()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:te,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),_(e.data.programs),D(!1)})).catch((function(e){console.log(e),D(!1)}))})).catch((function(e){console.log(e),D(!1)}))}}),[]),N?Object(x.jsx)(l.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/edit",name:"Edit Selected content"}]}),Object(x.jsx)(i.a,{initialValues:{programId:A.programId,contentName:A.contentName,contentDescription:A.contentDescription,contentType:A.contentType,contentSource:A.contentSource,contents:R,startDate:H},validationSchema:d.b,validateOnChange:!0,onSubmit:function(e){t(ee,Z,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,X)},children:function(e){var t=e.handleChange,n=e.handleSubmit,r=e.handleBlur,a=e.setFieldValue,o=e.values,i=e.errors,c=e.touched;return Object(x.jsx)("form",{onSubmit:n,children:Object(x.jsxs)("div",{className:"EditContent",children:[Object(x.jsxs)("h1",{children:["Edit Selected Content: ",A.contentName]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Content Type"}),Object(x.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){a("contentType",e.currentTarget.value),a("contents","")},children:[Object(x.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(x.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(x.jsx)("option",{value:"Image",children:"Image"}),Object(x.jsx)("option",{value:"Video",children:"Video"}),Object(x.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Program Name"}),Object(x.jsxs)("select",{name:"programId",value:o.programId,onChange:t,children:[Object(x.jsx)("option",{value:"",disabled:!0,children:"Select Program"}),q?q.map((function(e){return Object(x.jsx)("option",{value:e._id,children:e.programName})})):null]})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t,onBlur:r}),c.contentName&&Object(x.jsx)("span",{className:"message__error",children:i.contentName})]}),Object(x.jsx)("div",{className:"form-group"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Source"}),Object(x.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t,onBlur:r}),c.contentSource&&Object(x.jsx)("span",{className:"message__error",children:i.contentSource})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Photo"}),Object(x.jsx)("img",{className:"photo",src:A.contentThumbnail}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:r,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),a("contentThumbnail",t))}})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Contents"}),"Artikel"===o.contentType?Object(x.jsx)(f.Editor,{editorState:O,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:C,values:o.contents,name:"contents",onChange:function(e){Q(o.contents),a("contents",v()(Object(y.convertToRaw)(O.getCurrentContent()))),console.log(W),console.log(o.contents),console.log(O)}}):null,"Image"===o.contentType?Object(x.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:r,value:o.contents,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),a("contents",t))}}):null,"Video"===o.contentType?Object(x.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t,onBlur:r}):null,"Pdf"===o.contentType?Object(x.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:o.contents,onChange:t,onBlur:r}):null,c.contents&&Object(x.jsx)("span",{className:"message__error",children:i.contents})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Content"})})]})})}}),n?Object(x.jsx)(l.a,{}):null]})}))},144:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(198),a=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),password:r.f("Enter your password").required("Password is required")}),i=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),accountName:r.f("Enter your name").required("Name is required"),cobrandName:r.f("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.f("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:r.f("Enter your address").required("Address is required"),password:r.f("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.f("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),c=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.f("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.f("Enter your phone number").required("Phone number is required").matches(a,"Invalid phone number format"),address:r.f("Enter your address").required("Address is required"),password:r.f("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.f("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),s=r.e({programName:r.f("Enter your program title").required("Program title is required"),programDescription:r.f("Enter the program description").required("Program description is required"),programThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required")}),l=r.e({programName:r.f("Enter your program title").required("Program title is required"),programDescription:r.f("Enter the program description").required("Program description is required"),startDate:r.c("Insert start date").required("Date is required")}),u=r.e({contentName:r.f("Enter your content title").required("Content title is required"),contentDescription:r.f("Enter the content description").required("Content description is required"),contents:r.f("Enter the content description").required("Content description is required"),contentSource:r.f("Enter the content source").required("Content source is required"),contentThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),isActive:r.b(),topics:r.a().min(1),targetAudience:r.a().min(1)}),d=r.e({contentName:r.f("Enter your content title").required("Content title is required"),contentDescription:r.f("Enter the content description").required("Content description is required"),contents:r.f("Enter the content description").required("Content description is required"),contentSource:r.f("Enter the content source").required("Content source is required"),startDate:r.c("Insert start date").required("Date is required")})},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return w}));var r=n(8),a=n(18),o=n.n(a),i=n(38),c=n(20),s=function(e){return o()({method:"post",url:c.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:c.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:c.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=n(27),m=function(){return{type:r.f}},p=function(){return{type:r.d}},g=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},b=function(e,t,n,a,s,l){return function(u){u(m()),u({type:r.a}),Object(i.b)(a).then((function(r){console.log(typeof r);var a,i={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:r,startDate:s};console.log(i),(a=i,o()({method:"post",url:c.a+"/cobrand/programAdd",data:a,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+t+'" berhasil ditambahkan.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(p())})),console.log(i)}))}},f=function(e,t,n,a,o,c,l){return function(u){if(u(m()),u({type:r.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:a,startDate:c}};console.log(d),s(d).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(p())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:a,programthumnail:r,startDate:c}};console.log(o),s(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(p())}))}))}}},y=function(e,t,n){return function(a){a(m()),a({type:r.a});var i,s={whereValues:{cobrandEmail:e,_id:t[0]}};(i=s,o()({method:"post",url:c.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),a(h('Program "'+t[1]+'" berhasil dihapus.')),a(p()),n()})).catch((function(e){console.log(e),a(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(p()),n()}))}},j=function(e,t,n,a,o,c,s,u,d,b,f,y,j,v){return function(O){O(m()),O({type:r.a}),Object(i.b)(s).then((function(r){var s=[],m=[];y.map((function(e){s.push(e.value)})),j.map((function(e){m.push(e.value)})),console.log(typeof r);var w=r,x=f?"active":"inactive";if("Video"===o)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:n,contentDescription:a,contentType:o,contentSource:c,contentThumbnail:w,contents:u,status:x,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(f),l(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),O(h('Content "'+n+'" berhasil ditambahkan.')),O(p())})).catch((function(e){console.error("Error:",e),O(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),O(p())})),console.log(f)}));else if("Image"===o){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:a,contentType:o,contentSource:c,contentThumbnail:w,contents:u,status:x,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),O(h('Content "'+n+'" berhasil ditambahkan.')),O(p())})).catch((function(e){console.error("Error:",e),O(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),O(p())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:a,contentType:o,contentSource:c,contentThumbnail:w,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:x,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),O(h('Content "'+n+'" berhasil ditambahkan.')),O(p())})).catch((function(e){console.error("Error:",e),O(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),O(p())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var E={cobrandEmail:e,programId:t,contentName:n,contentDescription:a,contentType:o,contentSource:c,contentThumbnail:w,contents:u,status:x,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(E),l(E).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),O(h('Content "'+n+'" berhasil ditambahkan.')),O(p())})).catch((function(e){console.error("Error:",e),O(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),O(p())})),console.log(E)}))}},v=function(e,t,n,a,o,c,s,l,d,b,f){return function(e){e(m()),e({type:r.a});if("Video"===c)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:n,contentName:a,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b};console.log(l),u(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+a+'" berhasil ditambahkan.')),e(p())})).catch((function(t){console.error("Error:",t),e(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(p())})),console.log(l)}));else if("Image"===c){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:t,programId:n,contentName:a,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b};console.log(i),u(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+a+'" berhasil ditambahkan.')),e(p())})).catch((function(t){console.error("Error:",t),e(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(p())})),console.log(i)}))}else if("Pdf"===c){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:t,programId:n,contentName:a,contentDescription:o,contentType:c,contentSource:s,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),u(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+a+'" berhasil ditambahkan.')),e(p())})).catch((function(t){console.error("Error:",t),e(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(p())})),console.log(i)}))}else if("Artikel"===c){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:t,programId:n,contentName:a,contentDescription:o,contentType:c,contentSource:s,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),u(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+a+'" berhasil ditambahkan.')),e(p())})).catch((function(t){console.error("Error:",t),e(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(p())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var l={cobrandEmail:t,programId:n,contentName:a,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b};console.log(l),u(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+a+'" berhasil ditambahkan.')),e(p())})).catch((function(t){console.error("Error:",t),e(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(p())})),console.log(l)}},O=function(e,t,n){return function(a){a(m()),a({type:r.a});var i,s={whereValues:{cobrandEmail:e,_id:t[0]}};(i=s,o()({method:"post",url:c.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),a(h('Content "'+t[1]+'" berhasil dihapus.')),a(p()),n()})).catch((function(e){console.log(e),a(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(p()),n()}))}},w=function(e,t,n,a,o,c,s){return function(l){l(m()),l({type:r.a});var u={email:e,password:t},b={};(n&&(b=Object.assign(b,{cobrandName:n})),o&&(b=Object.assign(b,{phoneNumber:o})),c&&(b=Object.assign(b,{address:c})),s&&(b=Object.assign(b,{password:s})),a)?Object(i.b)(a).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),u.password=s),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(p())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})):(console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),u.password=s),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(p())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())})))}}},149:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},867:function(e,t,n){},868:function(e,t,n){window,e.exports=function(e,t){return a={},n.m=r=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},i=function(e,t,n){var r,o=e.textContent;return""===o.trim()?{chunk:(r=n,{text:" ",inlines:[new a.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:o,inlines:Array(o.length).fill(t),entities:Array(o.length).fill(n),blocks:[]}}},c=function(){return{text:"\n",inlines:[new a.OrderedSet],entities:new Array(1),blocks:[]}},s=function(){return{text:"",inlines:[],entities:[],blocks:[]}},l=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new a.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new a.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new a.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new a.Map({})}]}},m=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},p=new a.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),g={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new a.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new a.Map({"margin-left":e.style.marginLeft}):void 0}var b=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,r.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return O}));var f=" ",y=new RegExp("&nbsp;","g"),j=!0;function v(e,t,n,a,o,f){var y=e.nodeName.toLowerCase();if(f){var O=f(y,e);if(O){var w=r.Entity.__create(O.type,O.mutability,O.data||{});return{chunk:d(w)}}}if("#text"===y&&"\n"!==e.textContent)return i(e,t,o);if("br"===y)return{chunk:c()};if("img"===y&&e instanceof HTMLImageElement){var x={};x.src=e.getAttribute&&e.getAttribute("src")||e.src,x.alt=e.alt,x.height=e.style.height,x.width=e.style.width,e.style.float&&(x.alignment=e.style.float);var E=r.Entity.__create("IMAGE","MUTABLE",x);return{chunk:d(E)}}if("video"===y&&e instanceof HTMLVideoElement){var C={};C.src=e.getAttribute&&e.getAttribute("src")||e.src,C.alt=e.alt,C.height=e.style.height,C.width=e.style.width,e.style.float&&(C.alignment=e.style.float);var S=r.Entity.__create("VIDEO","MUTABLE",C);return{chunk:d(S)}}if("iframe"===y&&e instanceof HTMLIFrameElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.height=e.height,T.width=e.width;var N=r.Entity.__create("EMBEDDED_LINK","MUTABLE",T);return{chunk:d(N)}}var D,k=function(e,t){var n=p.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(y,a);k&&("ul"===y||"ol"===y?(a=y,n+=1):("unordered-list-item"!==k&&"ordered-list-item"!==k&&(a="",n=-1),j?(D=l(k,h(e)),j=!1):D=u(k,n,h(e)))),D=D||s(),t=function(e,t,n){var r,a=g[e];if(a)r=n.add(a).toOrderedSet();else if(t instanceof HTMLElement){var o=t;r=(r=n).withMutations((function(e){var t=o.style.color,n=o.style.backgroundColor,r=o.style.fontSize,a=o.style.fontFamily.replace(/^"|"$/g,""),i=o.style.fontWeight,c=o.style.textDecoration,s=o.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),a&&e.add("fontfamily-".concat(a)),"bold"===i&&e.add(g.strong),"underline"===c&&e.add(g.ins),"italic"===s&&e.add(g.em)})).toOrderedSet()}return r}(y,e,t);for(var I=e.firstChild;I;){var q=v(I,t,n,a,b(I)||o,f).chunk;D=m(D,q),I=I.nextSibling}return{chunk:D}}function O(e,t){var n,i,c,s=(n=t,i=e.trim().replace(y,f),(c=o(i))?(j=!0,{chunk:v(c,new a.OrderedSet,-1,"",void 0,n).chunk}):null);if(s){var l=s.chunk,u=new a.OrderedMap({});l.entities&&l.entities.forEach((function(e){e&&(u=u.set(e,r.Entity.__get(e)))}));var d=0;return{contentBlocks:l.text.split("\r").map((function(e,t){var n=d+e.length,o=l&&l.inlines.slice(d,n),i=l&&l.entities.slice(d,n),c=new a.List(o.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),r.CharacterMetadata.create(n)})));return d=n,new r.ContentBlock({key:Object(r.genKey)(),type:l&&l.blocks[t]&&l.blocks[t].type||"unstyled",depth:l&&l.blocks[t]&&l.blocks[t].depth,data:l&&l.blocks[t]&&l.blocks[t].data||new a.Map({}),text:e,characterList:c})})),entityMap:u}}return null}}],n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,a}(n(336),n(201))},95:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},96:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=15.f9b8af36.chunk.js.map