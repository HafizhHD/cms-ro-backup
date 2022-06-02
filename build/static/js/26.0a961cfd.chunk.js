/*! For license information please see 26.0a961cfd.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[26,6],{108:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(110),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},110:function(e,t,a){},130:function(e,t,a){"use strict";var r=a(2),n=(a(133),a(0));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},133:function(e,t,a){},1406:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(2),o=a(108),i=a(130),s=a(27),c=a(17),l=a(194),d=a(144),u=a(37),m=a(151),b=a(5),g=a(34),h=a(90),p=a.n(h),f=a(93),j=a(261),v=a(345),O=a(0),y=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,i=void 0===o?"img":o,s=Object(g.a)(e,["bsPrefix","className","variant","as"]),c=Object(f.a)(a,"card-img");return Object(O.jsx)(i,Object(b.a)({ref:t,className:p()(n?"".concat(c,"-").concat(n):c,r)},s))}));y.displayName="CardImg";var x=y,w=n.createContext(null);w.displayName="CardHeaderContext";var N=w,C=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"div":o,s=Object(g.a)(e,["bsPrefix","className","as"]),c=Object(f.a)(a,"card-header"),l=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return Object(O.jsx)(N.Provider,{value:l,children:Object(O.jsx)(i,Object(b.a)(Object(b.a)({ref:t},s),{},{className:p()(r,c)}))})}));C.displayName="CardHeader";var E=C,P=Object(v.a)("h5"),S=Object(v.a)("h6"),q=Object(j.a)("card-body"),I=Object(j.a)("card-title",{Component:P}),D=Object(j.a)("card-subtitle",{Component:S}),k=Object(j.a)("card-link",{Component:"a"}),B=Object(j.a)("card-text",{Component:"p"}),T=Object(j.a)("card-footer"),_=Object(j.a)("card-img-overlay"),z=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,i=e.border,s=e.body,c=e.children,l=e.as,d=void 0===l?"div":l,u=Object(g.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),m=Object(f.a)(a,"card");return Object(O.jsx)(d,Object(b.a)(Object(b.a)({ref:t},u),{},{className:p()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),i&&"border-".concat(i)),children:s?Object(O.jsx)(q,{children:c}):c}))}));z.displayName="Card",z.defaultProps={body:!1};var V=Object.assign(z,{Img:x,Title:I,Subtitle:D,Body:q,Link:k,Text:B,Header:E,Footer:T,ImgOverlay:_}),A=(a(869),a(6));t.default=Object(c.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditProfile:function(t,a,r,n,o,i,s){return e(Object(m.f)(t,a,r,n,o,i,s))}}}))((function(e){var t=e.onEditProfile,a=e.isLoading,c=JSON.parse(localStorage.getItem("userData")),m=Object(n.useState)(),b=Object(r.a)(m,2),g=b[0],h=b[1],p=Object(n.useState)(),f=Object(r.a)(p,2),j=(f[0],f[1],Object(n.useState)(!1)),v=Object(r.a)(j,2),y=v[0],x=(v[1],Object(n.useState)(!1)),w=Object(r.a)(x,2),N=w[0],C=(w[1],Object(n.useState)(!1)),E=Object(r.a)(C,2),P=E[0],S=(E[1],Object(n.useState)(!1)),q=Object(r.a)(S,2),I=q[0],D=(q[1],Object(n.useState)(!1)),k=Object(r.a)(D,2),B=k[0],T=(k[1],Object(n.useState)(c.thumbnail)),_=Object(r.a)(T,2),z=_[0],H=_[1];return Object(n.useEffect)((function(){g&&Object(u.b)(g).then((function(e){H(e)})).catch((function(e){console.log(e)}))}),[g]),a?Object(O.jsx)(s.a,{}):1==y?Object(O.jsx)(A.a,{to:"/tools/setting-add"}):1==N?Object(O.jsx)(A.a,{to:"/tools/setting-topik"}):1==P?Object(O.jsx)(A.a,{to:"/tools/setting-list-kateProgram"}):1==I?Object(O.jsx)(A.a,{to:"/tools/setting-list-kateNotif"}):1==B?Object(O.jsx)(A.a,{to:"/tools/setting-list-screentime"}):Object(O.jsxs)("div",{className:"Setting",children:[Object(O.jsx)(o.a,{headingName:"Setting",routes:[{name:"Setting"}]}),Object(O.jsxs)("div",{className:"Setting_card mt-medium",children:[Object(O.jsxs)("div",{className:"Setting_card_inputs",children:[Object(O.jsx)("h2",{children:"Edit Account"}),Object(O.jsx)(l.a,{initialValues:{email:c.email,password:"",confirmPassword:"",cobrandName:c.cobrandName,phoneNumber:c.phoneNumber,address:c.address,thumbnail:""},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){t(c.email,c.password,e.cobrandName,e.thumbnail,e.phoneNumber,e.address,e.password)},children:function(e){var t=e.handleChange,a=e.handleBlur,r=e.handleSubmit,n=e.setFieldValue,o=e.touched,s=e.values,c=e.errors;return Object(O.jsxs)("form",{onSubmit:r,children:[Object(O.jsxs)("div",{className:"Setting_card_inputs-item",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)(i.a,{name:"email",className:"Input-control",type:"text",onChange:t,value:s.email,onBlur:a,isError:o.email&&Boolean(c.email),message:o.email&&c.email,disabled:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"New Password"}),Object(O.jsx)(i.a,{name:"password",className:"Input-control",type:"password",onChange:t,value:s.password,onBlur:a,isError:o.password&&Boolean(c.password),message:o.password&&c.password})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Confirm New Password"}),Object(O.jsx)(i.a,{name:"confirmPassword",className:"Input-control",type:"password",onChange:t,value:s.confirmPassword,onBlur:a,disabled:!o.password,isError:o.confirmPassword&&Boolean(c.confirmPassword),message:o.confirmPassword&&c.confirmPassword})]})]}),Object(O.jsx)("div",{className:"Setting_card_inputs-upload mt-large",children:Object(O.jsxs)("div",{className:"Setting_card_inputs-avatar",children:[Object(O.jsx)("h2",{children:"New Photo"}),Object(O.jsx)(i.a,{placeholder:"Photo",type:"file",name:"thumbnail",onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),n("thumbnail",t),h(t))},className:"Input-control",onBlur:a,isError:o.thumbnail&&Boolean(c.thumbnail),message:o.thumbnail&&c.thumbnail})]})}),Object(O.jsxs)("div",{className:"Setting_card_inputs-item mt-large",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Co-Brand Name"}),Object(O.jsx)(i.a,{name:"cobrandName",className:"Input-control",type:"text",onChange:t,value:s.cobrandName,onBlur:a,isError:o.cobrandName&&Boolean(c.cobrandName),message:o.cobrandName&&c.cobrandName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Phone Number"}),Object(O.jsx)(i.a,{name:"phoneNumber",className:"Input-control",type:"text",onChange:t,value:s.phoneNumber,onBlur:a,isError:o.phoneNumber&&Boolean(c.phoneNumber),message:o.phoneNumber&&c.phoneNumber})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Address"}),Object(O.jsx)(i.a,{name:"address",className:"Input-control",type:"textarea",onChange:t,value:s.address,onBlur:a,isError:o.address&&Boolean(c.address),message:o.address&&c.address})]}),Object(O.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Profile"})]})]})}})]}),Object(O.jsxs)("div",{className:"Setting_card_preview",children:[Object(O.jsx)("h5",{children:"Preview"}),Object(O.jsxs)(V,{style:{width:"25rem",borderRadius:"1rem"},children:[Object(O.jsx)("div",{className:"backgr",children:Object(O.jsx)("img",{className:"img2",src:z||"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"})}),Object(O.jsxs)(V.Body,{className:"body-card",children:[Object(O.jsx)(V.Title,{style:{textAlign:"center"},children:"Bimbel Defghi"}),Object(O.jsx)(V.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]})]})]})}))},144:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(210),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),i=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),l=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),d=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),u=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},151:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return v})),a.d(t,"e",(function(){return O})),a.d(t,"c",(function(){return y})),a.d(t,"f",(function(){return x}));var r=a(8),n=a(18),o=a.n(n),i=a(37),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(26),m=function(){return{type:r.f}},b=function(){return{type:r.d}},g=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},p=function(e,t,a,n,c,l){return function(d){d(m()),d({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);var n,i={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+t+'" berhasil ditambahkan.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(b())})),console.log(i)}))}},f=function(e,t,a,n,o,s,l){return function(d){if(d(m()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}))}}},j=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},v=function(e,t,a,n,o,s,c,d,u,p,f){return function(j){j(m()),j({type:r.a}),Object(i.b)(c).then((function(r){console.log(typeof r);var c=r,m=p?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var p={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(p),l(p).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(p)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var v={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(v),l(v).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(v)}))}},O=function(e,t,a,n,o,s,c,l,u,p,f){return function(e){e(m()),e({type:r.a});if("Video"===s)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(l)}));else if("Image"===s){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else if("Artikel"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(l)}},y=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},x=function(e,t,a,n,o,s,c){return function(l){l(m()),l({type:r.a});var d={email:e,password:t},p={};(a&&(p=Object.assign(p,{cobrandName:a})),o&&(p=Object.assign(p,{phoneNumber:o})),s&&(p=Object.assign(p,{address:s})),c&&(p=Object.assign(p,{password:c})),n)?Object(i.b)(n).then((function(e){p=Object.assign(p,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",p),Object(u.a)(d,p).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})):(console.log("whereValues: ",d),console.log("newValues: ",p),Object(u.a)(d,p).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())})))}}},261:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(5),n=a(34),o=a(90),i=a.n(o),s=/-(.)/g;var c=a(2),l=a(93),d=a(0),u=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,o=void 0===a?u(e):a,s=t.Component,m=t.defaultProps,b=c.forwardRef((function(t,a){var o=t.className,c=t.bsPrefix,u=t.as,m=void 0===u?s||"div":u,b=Object(n.a)(t,["className","bsPrefix","as"]),g=Object(l.a)(c,e);return Object(d.jsx)(m,Object(r.a)({ref:a,className:i()(o,g)},b))}));return b.defaultProps=m,b.displayName=o,b}},345:function(e,t,a){"use strict";var r=a(5),n=a(2),o=a(90),i=a.n(o),s=a(0);t.a=function(e){return n.forwardRef((function(t,a){return Object(s.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:a,className:i()(t.className,e)}))}))}},869:function(e,t,a){},90:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));a(5);var r=a(2),n=(a(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:n});o.Consumer,o.Provider;function i(e,t){var a=Object(r.useContext)(o).prefixes;return e||a[t]||t}function s(){return"rtl"===Object(r.useContext)(o).dir}}}]);
//# sourceMappingURL=26.0a961cfd.chunk.js.map