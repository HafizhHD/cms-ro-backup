(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[54],{106:function(e,t,n){"use strict";var r=n(2),i=(n(107),n(0));function a(e){var t=e.placeholder,n=e.type,r=e.onChange,a=e.onBlur,s=e.value,o=e.className,c=e.message,u=e.name,l=e.min,d=e.max,m=e.disabled,g=e.isError;return"textarea"===n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("textarea",{name:u,id:u,className:o,placeholder:t,onChange:r,onBlur:a,value:s,disabled:m}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:c})})]}):"date"===n||"datetime-local"===n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:o,type:n,placeholder:t,onChange:r,onBlur:a,value:s,min:l,max:"9999-12-31",disabled:m}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:c})})]}):"number"===n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:o,type:n,onChange:r,onBlur:a,value:s,min:l,max:d,disabled:m}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:c})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:u,className:o,type:n,placeholder:t,onChange:r,onBlur:a,value:s,disabled:m}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(a)},107:function(e,t,n){},113:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"o",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"p",(function(){return g})),n.d(t,"i",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"j",(function(){return f})),n.d(t,"n",(function(){return j})),n.d(t,"d",(function(){return y})),n.d(t,"m",(function(){return x}));var r=n(139),i=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,a=r.f({userName:r.g("Enter your email").required("Email is required"),password:r.g("Enter your password").required("Password is required")}),s=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),accountName:r.g("Enter your name").required("Name is required"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),o=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),programThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),category:r.g(),targetAudiance:r.a().min(1,"Pilih minimal 1"),contentPrograms:r.a().min(1).of(r.f({namaTahapan:r.g().required("Nama Tahapan harus diisi"),contentName:r.g().required("Judul Tahapan harus diisi"),contents:r.g().required("Isi Tahapan harus diisi"),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),answerKey:r.g().when("category",{is:"Ujian",then:r.g().required("Kunci Jawaban harus diisi"),otherwise:r.g()})}))}),u=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),startDate:r.c("Insert start date").required("Date is required")}),l=r.f({namaTahapan:r.g().required("Nama Tahapan harus diisi"),contentName:r.g().required("Judul Tahapan harus diisi"),contents:r.g().required("Isi Tahapan harus diisi")}),d=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),contentThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),isActive:r.b(),topics:r.a().min(1),targetAudience:r.a().min(1)}),m=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),startDate:r.c("Insert start date").required("Date is required")}),g=r.f({nameUser:r.g("Enter your content title").required("User name is required"),emailUser:r.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:r.c("Insert start date").required("Date is required")}),p=r.f({destination:r.a().min(1),messageSubject:r.g("Enter the message subject").required("Message Subject is required"),messageContent:r.g("Enter the message content").required("Message Content is required"),scheduleTime:r.c("Insert start date").required("Date is required"),mediaType:r.g("Enter the media type").required("Media type is required"),category:r.g("Enter the category").required("Category is required")}),h=r.f({audianceName:r.g("Enter your audience name").required("Audience Name is required")}),b=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),f=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),j=r.f({emailUser:r.g("Enter your email").required("Email is required").email("Email not valid"),userName:r.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:r.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),y=r.f({topicName:r.g("Enter topic name").required("Topic Name is required")}),x=r.f({controlParameterName:r.g("Enter category name").required("Category is required"),controlParameterValue:r.e().required("Number is required")})},1404:function(e,t,n){"use strict";n.r(t);var r=n(7),i=n(2),a=n(94),s=(n(893),n(138)),o=n(6),c=n(128),u=n(36),l=n(17),d=n(113),m=n(106),g=n(18),p=n.n(g),h=n(319),b=n.n(h),f=(n(37),n(225),n(163)),j=(n(252),n(226),n(296),n(262)),y=n.n(j),x=n(253),O=n.n(x),v=(n(257),n(0));t.default=Object(l.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,r,i,a,s,o,u,l,d,m){return e(Object(c.o)(t,n,r,i,a,s,o,u,l,d,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,c=f.EditorState.createEmpty(),l=Object(i.useState)(c),g=Object(r.a)(l,2),h=(g[0],g[1]),j=Object(i.useState)(c),x=Object(r.a)(j,2),q=(x[0],x[1]),E=[["undo","redo"],["font","fontSize","formatBlock"],["paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor","textStyle"],["removeFormat"],["outdent","indent"],["align","horizontalRule","list","lineHeight"],["table","link","image","video"],["preview","print"]],N=Object(i.useState)(!0),w=Object(r.a)(N,2),T=w[0],_=w[1],k=Object(i.useState)(),S=Object(r.a)(k,2),I=(S[0],S[1]),C=Object(i.useState)(),M=Object(r.a)(C,2),D=M[0],A=M[1],B=Object(i.useState)(),L=Object(r.a)(B,2),P=L[0],U=L[1],F=Object(i.useState)(""),z=Object(r.a)(F,2),H=z[0],V=z[1],R=Object(i.useState)(""),K=Object(r.a)(R,2),J=K[0],W=K[1],$=Object(i.useState)(b.a.createEmptyValue()),G=Object(r.a)($,2),Y=(G[0],G[1],Object(i.useState)(b.a.createEmptyValue())),Q=Object(r.a)(Y,2),X=(Q[0],Q[1]),Z=Object(o.g)(),ee=JSON.parse(localStorage.getItem("userData")).cobrandEmail,te=localStorage.getItem("contentSelected"),ne={whereKeyValues:{cobrandEmail:ee}};return Object(i.useEffect)((function(){if(_(!0),te){var e={whereKeyValues:{cobrandEmail:ee,_id:te}};p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){A(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if("Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents"),r=y()(n.innerHTML);X(b.a.createValueFromString(n.outerHTML,"html")),V(n.outerHTML),q(f.EditorState.createWithContent(f.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap)))}else if("Image"===e.data.contents[0].contentType){var i=t.getElementsByTagName("img")[0].toString();V(i.src)}else if("Video"===e.data.contents[0].contentType){var a=t.getElementsByTagName("iframe")[0];V(a.src)}else if("Pdf"===e.data.contents[0].contentType){var s=t.getElementsByTagName("iframe")[0].src;s.includes("&embedded=true")&&(s=s.replace("&embedded=true","")),s.includes("http://docs.google.com/gview?url=")&&(s=s.replace("http://docs.google.com/gview?url=","")),V(s)}var o=e.data.contents[0].contentDescription,c=y()(o);h(f.EditorState.createWithContent(f.ContentState.createFromBlockArray(c.contentBlocks,c.entityMap)));var u=e.data.contents[0].startDate.split("T")[0];U(u),p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:ne,headers:{"Content-Type":"application/json"}}).then((function(e){I(e.data.programs),_(!1)})).catch((function(e){_(!1)}))})).catch((function(e){_(!1)}))}}),[]),T?Object(v.jsx)(u.a,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(a.a,{headingName:"Artikel",routes:[{path:"/cms/content",name:"Artikel"},{path:"/cms/content/edit",name:"Ubah Artikel Terpilih"}]}),Object(v.jsx)(s.a,{initialValues:{programId:D.programId,contentName:D.contentName,contentDescription:D.contentDescription,contentType:D.contentType,contentSource:D.contentSource,contents:H,startDate:P},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){window.scroll(0,0),t(te,ee,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,Z)},children:function(e){var t=e.handleChange,n=e.handleSubmit,r=e.handleBlur,i=e.setFieldValue,a=e.values,s=e.errors,o=e.touched;return Object(v.jsx)("form",{onSubmit:n,children:Object(v.jsxs)("div",{className:"EditContent",children:[Object(v.jsxs)("h1",{children:["Ubah Artikel: ",D.contentName]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Tipe Artikel"}),Object(v.jsxs)("select",{name:"contentType",value:a.contentType,onChange:function(e){i("contentType",e.currentTarget.value),i("contents","")},children:[Object(v.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(v.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(v.jsx)("option",{value:"Image",children:"Image"}),Object(v.jsx)("option",{value:"Video",children:"Video"}),Object(v.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Judul"}),Object(v.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentName,onChange:t,onBlur:r}),o.contentName&&Object(v.jsx)("span",{className:"message__error",children:s.contentName})]}),Object(v.jsxs)("div",{className:"form-group",children:["Artikel"===a.contentType?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{children:"Isi Artikel"}),Object(v.jsx)(O.a,{defaultValue:a.contents,setOptions:{buttonList:E,imageWidth:"360px"},onChange:function(e){i("contents",e)},height:"500px"})]}):null,"Image"===a.contentType?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{children:"Isi Image"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){W("internal")}}),Object(v.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return W("url")}}),Object(v.jsx)("label",{for:"url",children:"Alamat URL"}),Object(v.jsx)("br",{})]}),"internal"===J?Object(v.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:r,onChange:function(e){var t=e.currentTarget.files[0];t&&i("contents",t)}}):Object(v.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:a.contents,onChange:t,onBlur:r})]})]}):null,"Video"===a.contentType?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{children:"URL Video"}),Object(v.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:a.contents,onChange:t,onBlur:r})]}):null,"Pdf"===a.contentType?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{children:"Isi PDF"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){W("internal")}}),Object(v.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return W("url")}}),Object(v.jsx)("label",{for:"url",children:"Alamat URL"}),Object(v.jsx)("br",{})]}),"internal"===J?Object(v.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:r,onChange:function(e){var t=e.currentTarget.files[0];t&&i("contents",t)}}):Object(v.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:a.contents,onChange:t,onBlur:r})]})]}):null,o.contents&&Object(v.jsx)("span",{className:"message__error",children:s.contents})]}),"Artikel"!==a.contentType?Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Isi Artikel"}),Object(v.jsx)(O.a,{defaultValue:a.contentDescription,setOptions:{buttonList:E},onChange:function(e){i("contentDescription",e)},height:"500px"})]}):null,Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Sumber"}),Object(v.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentSource,onChange:t,onBlur:r}),o.contentSource&&Object(v.jsx)("span",{className:"message__error",children:s.contentSource})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Thumbnail"}),Object(v.jsx)("img",{className:"photo",src:D.contentThumbnail}),Object(v.jsx)("br",{}),Object(v.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:r,onChange:function(e){var t=e.currentTarget.files[0];t&&i("contentThumbnail",t)}})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"btn btn-submit",type:"submit",onClick:function(){Object.keys(s).length>0&&alert("Ada kolom yang belum diisi. Silakan cek kembali.")},children:"Update Artikel"})})]})})}}),n?Object(v.jsx)(u.a,{}):null]})}))},254:function(e,t,n){var r={"./ckb.js":201,"./da.js":202,"./de.js":203,"./en.js":188,"./es.js":204,"./fr.js":205,"./he.js":206,"./index.js":255,"./it.js":207,"./ja.js":208,"./ko.js":209,"./lv.js":210,"./nl.js":211,"./pl.js":212,"./pt_br.js":213,"./ro.js":214,"./ru.js":215,"./se.js":216,"./ua.js":217,"./zh_cn.js":218};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=254},262:function(e,t,n){window,e.exports=function(e,t){return i={},n.m=r=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},s=function(e,t,n){var r,a=e.textContent;return""===a.trim()?{chunk:(r=n,{text:" ",inlines:[new i.OrderedSet],entities:[r],blocks:[]})}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},o=function(){return{text:"\n",inlines:[new i.OrderedSet],entities:new Array(1),blocks:[]}},c=function(){return{text:"",inlines:[],entities:[],blocks:[]}},u=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new i.Map({})}]}},l=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new i.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new i.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new i.Map({})}]}},m=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},g=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new i.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new i.Map({"margin-left":e.style.marginLeft}):void 0}var b=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,r.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return O}));var f=" ",j=new RegExp("&nbsp;","g"),y=!0;function x(e,t,n,i,a,f){var j=e.nodeName.toLowerCase();if(f){var O=f(j,e);if(O){var v=r.Entity.__create(O.type,O.mutability,O.data||{});return{chunk:d(v)}}}if("#text"===j&&"\n"!==e.textContent)return s(e,t,a);if("br"===j)return{chunk:o()};if("img"===j&&e instanceof HTMLImageElement){var q={};q.src=e.getAttribute&&e.getAttribute("src")||e.src,q.alt=e.alt,q.height=e.style.height,q.width=e.style.width,e.style.float&&(q.alignment=e.style.float);var E=r.Entity.__create("IMAGE","MUTABLE",q);return{chunk:d(E)}}if("video"===j&&e instanceof HTMLVideoElement){var N={};N.src=e.getAttribute&&e.getAttribute("src")||e.src,N.alt=e.alt,N.height=e.style.height,N.width=e.style.width,e.style.float&&(N.alignment=e.style.float);var w=r.Entity.__create("VIDEO","MUTABLE",N);return{chunk:d(w)}}if("iframe"===j&&e instanceof HTMLIFrameElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.height=e.height,T.width=e.width;var _=r.Entity.__create("EMBEDDED_LINK","MUTABLE",T);return{chunk:d(_)}}var k,S=function(e,t){var n=g.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(j,i);S&&("ul"===j||"ol"===j?(i=j,n+=1):("unordered-list-item"!==S&&"ordered-list-item"!==S&&(i="",n=-1),y?(k=u(S,h(e)),y=!1):k=l(S,n,h(e)))),k=k||c(),t=function(e,t,n){var r,i=p[e];if(i)r=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var a=t;r=(r=n).withMutations((function(e){var t=a.style.color,n=a.style.backgroundColor,r=a.style.fontSize,i=a.style.fontFamily.replace(/^"|"$/g,""),s=a.style.fontWeight,o=a.style.textDecoration,c=a.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),r&&e.add("fontsize-".concat(r.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===s&&e.add(p.strong),"underline"===o&&e.add(p.ins),"italic"===c&&e.add(p.em)})).toOrderedSet()}return r}(j,e,t);for(var I=e.firstChild;I;){var C=x(I,t,n,i,b(I)||a,f).chunk;k=m(k,C),I=I.nextSibling}return{chunk:k}}function O(e,t){var n,s,o,c=(n=t,s=e.trim().replace(j,f),(o=a(s))?(y=!0,{chunk:x(o,new i.OrderedSet,-1,"",void 0,n).chunk}):null);if(c){var u=c.chunk,l=new i.OrderedMap({});u.entities&&u.entities.forEach((function(e){e&&(l=l.set(e,r.Entity.__get(e)))}));var d=0;return{contentBlocks:u.text.split("\r").map((function(e,t){var n=d+e.length,a=u&&u.inlines.slice(d,n),s=u&&u.entities.slice(d,n),o=new i.List(a.map((function(e,t){var n={style:e,entity:null};return s[t]&&(n.entity=s[t]),r.CharacterMetadata.create(n)})));return d=n,new r.ContentBlock({key:Object(r.genKey)(),type:u&&u.blocks[t]&&u.blocks[t].type||"unstyled",depth:u&&u.blocks[t]&&u.blocks[t].depth,data:u&&u.blocks[t]&&u.blocks[t].data||new i.Map({}),text:e,characterList:o})})),entityMap:l}}return null}}],n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,i}(n(251),n(163))},893:function(e,t,n){},94:function(e,t,n){"use strict";n(2);var r=n(8),i=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,a=void 0===n?[]:n;return Object(i.jsxs)("div",{className:"Heading",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,t){return e.path?Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(i.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(i.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){}}]);
//# sourceMappingURL=54.7b6b87cd.chunk.js.map