/*! For license information please see 14.02b346ae.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[14],{105:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},315:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(2),o=a(85),s=a(87),i=a(26),c=a(16),l=a(98),d=a(91),u=a(33),m=a(92),b=a(4),g=a(34),p=a(105),h=a.n(p),f=a(1),j=n.createContext({prefixes:{}});j.Consumer,j.Provider;function v(e,t){var a=Object(n.useContext)(j).prefixes;return e||a[t]||t}var y=/-(.)/g;var O=function(e){return e[0].toUpperCase()+(t=e,t.replace(y,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,r=void 0===a?O(e):a,o=t.Component,s=t.defaultProps,i=n.forwardRef((function(t,a){var r=t.className,n=t.bsPrefix,s=t.as,i=void 0===s?o||"div":s,c=Object(g.a)(t,["className","bsPrefix","as"]),l=v(n,e);return Object(f.jsx)(i,Object(b.a)({ref:a,className:h()(r,l)},c))}));return i.defaultProps=s,i.displayName=r,i}var w=function(e){return n.forwardRef((function(t,a){return Object(f.jsx)("div",Object(b.a)(Object(b.a)({},t),{},{ref:a,className:h()(t.className,e)}))}))},N=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,s=void 0===o?"img":o,i=Object(g.a)(e,["bsPrefix","className","variant","as"]),c=v(a,"card-img");return Object(f.jsx)(s,Object(b.a)({ref:t,className:h()(n?"".concat(c,"-").concat(n):c,r)},i))}));N.displayName="CardImg";var C=N,E=n.createContext(null);E.displayName="CardHeaderContext";var P=E,q=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,s=void 0===o?"div":o,i=Object(g.a)(e,["bsPrefix","className","as"]),c=v(a,"card-header"),l=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return Object(f.jsx)(P.Provider,{value:l,children:Object(f.jsx)(s,Object(b.a)(Object(b.a)({ref:t},i),{},{className:h()(r,c)}))})}));q.displayName="CardHeader";var S=q,I=w("h5"),D=w("h6"),B=x("card-body"),T=x("card-title",{Component:I}),_=x("card-subtitle",{Component:D}),k=x("card-link",{Component:"a"}),V=x("card-text",{Component:"p"}),z=x("card-footer"),A=x("card-img-overlay"),H=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,s=e.border,i=e.body,c=e.children,l=e.as,d=void 0===l?"div":l,u=Object(g.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),m=v(a,"card");return Object(f.jsx)(d,Object(b.a)(Object(b.a)({ref:t},u),{},{className:h()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),s&&"border-".concat(s)),children:i?Object(f.jsx)(B,{children:c}):c}))}));H.displayName="Card",H.defaultProps={body:!1};var M=Object.assign(H,{Img:C,Title:T,Subtitle:_,Body:B,Link:k,Text:V,Header:S,Footer:z,ImgOverlay:A});a(315);t.default=Object(c.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditProfile:function(t,a,r,n,o,s,i){return e(Object(m.f)(t,a,r,n,o,s,i))}}}))((function(e){var t=e.onEditProfile,a=e.isLoading,c=JSON.parse(localStorage.getItem("userData")),m=Object(n.useState)(),b=Object(r.a)(m,2),g=b[0],p=b[1],h=Object(n.useState)(),j=Object(r.a)(h,2),v=j[0],y=j[1],O=Object(n.useState)(c.thumbnail),x=Object(r.a)(O,2),w=x[0],N=x[1];return Object(n.useEffect)((function(){g&&Object(u.b)(g).then((function(e){N(e)})).catch((function(e){console.log(e)}))}),[g]),a?Object(f.jsx)(i.a,{}):Object(f.jsxs)("div",{className:"Setting",children:[Object(f.jsx)(o.a,{headingName:"Setting",routes:[{name:"Setting"}]}),Object(f.jsxs)("div",{className:"Setting_card mt-medium",children:[Object(f.jsxs)("div",{className:"Setting_card_inputs",children:[Object(f.jsx)("h2",{children:"Edit Account"}),Object(f.jsx)(l.a,{initialValues:{email:c.email,password:"",confirmPassword:"",cobrandName:c.cobrandName,phoneNumber:c.phoneNumber,address:c.address,thumbnail:""},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){t(c.email,c.password,e.cobrandName,e.thumbnail,e.phoneNumber,e.address,e.password)},children:function(e){var t=e.handleChange,a=e.handleBlur,r=e.handleSubmit,n=e.setFieldValue,o=e.touched,i=e.values,c=e.errors;return Object(f.jsxs)("form",{onSubmit:r,children:[Object(f.jsxs)("div",{className:"Setting_card_inputs-item",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsx)(s.a,{name:"email",className:"Input-control",type:"text",onChange:t,value:i.email,onBlur:a,isError:o.email&&Boolean(c.email),message:o.email&&c.email,disabled:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"New Password"}),Object(f.jsx)(s.a,{name:"password",className:"Input-control",type:"password",onChange:t,value:i.password,onBlur:a,isError:o.password&&Boolean(c.password),message:o.password&&c.password})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Confirm New Password"}),Object(f.jsx)(s.a,{name:"confirmPassword",className:"Input-control",type:"password",onChange:t,value:i.confirmPassword,onBlur:a,disabled:!o.password,isError:o.confirmPassword&&Boolean(c.confirmPassword),message:o.confirmPassword&&c.confirmPassword})]})]}),Object(f.jsxs)("div",{className:"Setting_card_inputs-upload mt-large",children:[Object(f.jsxs)("div",{className:"Setting_card_inputs-avatar",children:[Object(f.jsx)("h2",{children:"New Photo"}),Object(f.jsx)(s.a,{placeholder:"Photo",type:"file",name:"thumbnail",onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),n("thumbnail",t),p(t))},className:"Input-control",onBlur:a,isError:o.thumbnail&&Boolean(c.thumbnail),message:o.thumbnail&&c.thumbnail})]}),Object(f.jsxs)("div",{className:"Setting_card_inputs-avatar",children:[Object(f.jsx)("h2",{children:"Cover"}),Object(f.jsx)("input",{type:"file",onChange:function(e){console.log(e.currentTarget.files[0]),Object(u.b)(e.currentTarget.files[0]).then((function(e){console.log(e),y(e)}))},className:"Input-control",onBlur:a,isError:o.thumbnail&&Boolean(c.thumbnail),message:o.thumbnail&&c.thumbnail})]})]}),Object(f.jsxs)("div",{className:"Setting_card_inputs-item mt-large",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Co-Brand Name"}),Object(f.jsx)(s.a,{name:"cobrandName",className:"Input-control",type:"text",onChange:t,value:i.cobrandName,onBlur:a,isError:o.cobrandName&&Boolean(c.cobrandName),message:o.cobrandName&&c.cobrandName})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Phone Number"}),Object(f.jsx)(s.a,{name:"phoneNumber",className:"Input-control",type:"text",onChange:t,value:i.phoneNumber,onBlur:a,isError:o.phoneNumber&&Boolean(c.phoneNumber),message:o.phoneNumber&&c.phoneNumber})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Address"}),Object(f.jsx)(s.a,{name:"address",className:"Input-control",type:"textarea",onChange:t,value:i.address,onBlur:a,isError:o.address&&Boolean(c.address),message:o.address&&c.address})]}),Object(f.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Profile"})]})]})}})]}),Object(f.jsxs)("div",{className:"Setting_card_preview",children:[Object(f.jsx)("h5",{children:"Preview"}),Object(f.jsxs)(M,{style:{width:"25rem",borderRadius:"1rem"},children:[Object(f.jsx)("div",{className:"backgr",style:{backgroundImage:"url(".concat(v||"https://defghi.co.id/wp-content/uploads/2021/07/Logo-IDE.png",")")},children:Object(f.jsx)("img",{className:"img2",src:w||"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"})}),Object(f.jsxs)(M.Body,{className:"body-card",children:[Object(f.jsx)(M.Title,{style:{textAlign:"center"},children:"Bimbel Defghi"}),Object(f.jsx)(M.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]})]})]})}))},85:function(e,t,a){"use strict";a(2);var r=a(12),n=(a(86),a(1));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},86:function(e,t,a){},87:function(e,t,a){"use strict";var r=a(2),n=(a(88),a(1));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,s=e.value,i=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:i,placeholder:t,onChange:r,onBlur:o,value:s,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:i,type:a,placeholder:t,onChange:r,onBlur:o,value:s,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:i,type:a,placeholder:t,onChange:r,onBlur:o,value:s,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},88:function(e,t,a){},91:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(99),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),s=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),i=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),l=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),d=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),u=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},92:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return v})),a.d(t,"e",(function(){return y})),a.d(t,"c",(function(){return O})),a.d(t,"f",(function(){return x}));var r=a(7),n=a(18),o=a.n(n),s=a(33),i=a(20),c=function(e){return o()({method:"post",url:i.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:i.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:i.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(24),m=function(){return{type:r.f}},b=function(){return{type:r.d}},g=function(e,t){return{type:r.b,message:e,idMessage:t}},p=function(e,t){return{type:r.c,message:e,idMessage:t}},h=function(e,t,a,n,c,l){return function(d){d(m()),d({type:r.a}),Object(s.b)(n).then((function(r){console.log(typeof r);var n,s={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(s),(n=s,o()({method:"post",url:i.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+t+'" berhasil ditambahkan.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(b())})),console.log(s)}))}},f=function(e,t,a,n,o,i,l){return function(d){if(d(m()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:i}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}else{Object(s.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:i}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}))}}},j=function(e,t,a){return function(n){n(m()),n({type:r.a});var s,c={whereValues:{cobrandEmail:e,_id:t[0]}};(s=c,o()({method:"post",url:i.a+"/cobrand/programRemove",data:s,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Program "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},v=function(e,t,a,n,o,i,c,d,u,h,f){return function(j){j(m()),j({type:r.a}),Object(s.b)(c).then((function(r){console.log(typeof r);var c=r,m=h?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(s.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(s.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(s.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var h={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:i,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(h),l(h).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(h)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(s.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var s={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:i,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(s),l(s).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(s)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(s.b)(d).then((function(r){var s={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:i,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:u};console.log(s),l(s).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(s)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var v={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:i,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(v),l(v).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(v)}))}},y=function(e,t,a,n,o,i,c,l,u,h,f){return function(j){if(j(m()),j({type:r.a}),console.log("Photo is empty:",""===l),""===l){"Video"===i?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(s.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===i?u='<img src="'+u+'" style="width:100%;"/>':"Pdf"===i?(u='<div style="width:100%;height:100vh"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+' " frameborder="0" width="100%" height="100%"></iframe></div>',console.log(u)):u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>",console.log(u);var v={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:a,contentName:n,contentDescription:o,contentType:i,contentSource:c,contents:u,startDate:h}};console.log(v),d(v).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+n+'" berhasil diubah.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),j(b())})),console.log(v)}else{Object(s.b)(l).then((function(r){console.log(typeof r);var s={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:a,contentName:n,contentDescription:o,contentType:i,contentSource:c,contents:u,startDate:h}};console.log(s),d(s).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+n+'" berhasil diubah.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),j(b())})),console.log(s)}))}}},O=function(e,t,a){return function(n){n(m()),n({type:r.a});var s,c={whereValues:{cobrandEmail:e,_id:t[0]}};(s=c,o()({method:"post",url:i.a+"/cobrand/contentRemove",data:s,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Content "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},x=function(e,t,a,n,o,i,c){return function(l){l(m()),l({type:r.a});var d={email:e,password:t},h={};(a&&(h=Object.assign(h,{cobrandName:a})),o&&(h=Object.assign(h,{phoneNumber:o})),i&&(h=Object.assign(h,{address:i})),c&&(h=Object.assign(h,{password:c})),n)?Object(s.b)(n).then((function(e){h=Object.assign(h,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",h),Object(u.a)(d,h).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})):(console.log("whereValues: ",d),console.log("newValues: ",h),Object(u.a)(d,h).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())})))}}}}]);
//# sourceMappingURL=14.02b346ae.chunk.js.map