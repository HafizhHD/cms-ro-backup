/*! For license information please see 10.e175cfab.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[10],{100:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(102),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},102:function(e,t,a){},1140:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(2),o=a(100),i=a(123),s=a(26),c=a(17),l=a(171),d=a(132),u=a(36),m=a(138),b=a(131),g=a(5),h=a(34),p=a(89),f=a.n(p),j=a(92),v=a(228),O=a(305),y=a(0),x=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,i=void 0===o?"img":o,s=Object(h.a)(e,["bsPrefix","className","variant","as"]),c=Object(j.a)(a,"card-img");return Object(y.jsx)(i,Object(g.a)({ref:t,className:f()(n?"".concat(c,"-").concat(n):c,r)},s))}));x.displayName="CardImg";var N=x,w=n.createContext(null);w.displayName="CardHeaderContext";var C=w,E=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"div":o,s=Object(h.a)(e,["bsPrefix","className","as"]),c=Object(j.a)(a,"card-header"),l=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return Object(y.jsx)(C.Provider,{value:l,children:Object(y.jsx)(i,Object(g.a)(Object(g.a)({ref:t},s),{},{className:f()(r,c)}))})}));E.displayName="CardHeader";var P=E,S=Object(O.a)("h5"),q=Object(O.a)("h6"),I=Object(v.a)("card-body"),D=Object(v.a)("card-title",{Component:S}),k=Object(v.a)("card-subtitle",{Component:q}),B=Object(v.a)("card-link",{Component:"a"}),T=Object(v.a)("card-text",{Component:"p"}),_=Object(v.a)("card-footer"),z=Object(v.a)("card-img-overlay"),A=n.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,i=e.border,s=e.body,c=e.children,l=e.as,d=void 0===l?"div":l,u=Object(h.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),m=Object(j.a)(a,"card");return Object(y.jsx)(d,Object(g.a)(Object(g.a)({ref:t},u),{},{className:f()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),i&&"border-".concat(i)),children:s?Object(y.jsx)(I,{children:c}):c}))}));A.displayName="Card",A.defaultProps={body:!1};var V=Object.assign(A,{Img:N,Title:D,Subtitle:k,Body:I,Link:B,Text:T,Header:P,Footer:_,ImgOverlay:z}),H=(a(758),a(6));t.default=Object(c.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditProfile:function(t,a,r,n,o,i,s){return e(Object(m.f)(t,a,r,n,o,i,s))}}}))((function(e){var t=e.onEditProfile,a=e.isLoading,c=JSON.parse(localStorage.getItem("userData")),m=Object(n.useState)(),g=Object(r.a)(m,2),h=g[0],p=g[1],f=Object(n.useState)(),j=Object(r.a)(f,2),v=j[0],O=j[1],x=Object(n.useState)(!1),N=Object(r.a)(x,2),w=N[0],C=N[1],E=Object(n.useState)(!1),P=Object(r.a)(E,2),S=P[0],q=P[1],I=Object(n.useState)(c.thumbnail),D=Object(r.a)(I,2),k=D[0],B=D[1];return Object(n.useEffect)((function(){h&&Object(u.b)(h).then((function(e){B(e)})).catch((function(e){console.log(e)}))}),[h]),a?Object(y.jsx)(s.a,{}):1==w?Object(y.jsx)(H.a,{to:"/tools/setting-add"}):1==S?Object(y.jsx)(H.a,{to:"/tools/setting-topik"}):Object(y.jsxs)("div",{className:"Setting",children:[Object(y.jsx)(o.a,{headingName:"Setting",routes:[{name:"Setting"}]}),Object(y.jsx)(b.a,{className:"add",onClick:function(){return C(!0)},children:"Target Audience"}),Object(y.jsx)(b.a,{className:"add",onClick:function(){return q(!0)},children:"Topic Content"}),Object(y.jsxs)("div",{className:"Setting_card mt-medium",children:[Object(y.jsxs)("div",{className:"Setting_card_inputs",children:[Object(y.jsx)("h2",{children:"Edit Account"}),Object(y.jsx)(l.a,{initialValues:{email:c.email,password:"",confirmPassword:"",cobrandName:c.cobrandName,phoneNumber:c.phoneNumber,address:c.address,thumbnail:""},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){t(c.email,c.password,e.cobrandName,e.thumbnail,e.phoneNumber,e.address,e.password)},children:function(e){var t=e.handleChange,a=e.handleBlur,r=e.handleSubmit,n=e.setFieldValue,o=e.touched,s=e.values,c=e.errors;return Object(y.jsxs)("form",{onSubmit:r,children:[Object(y.jsxs)("div",{className:"Setting_card_inputs-item",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Email"}),Object(y.jsx)(i.a,{name:"email",className:"Input-control",type:"text",onChange:t,value:s.email,onBlur:a,isError:o.email&&Boolean(c.email),message:o.email&&c.email,disabled:!0})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"New Password"}),Object(y.jsx)(i.a,{name:"password",className:"Input-control",type:"password",onChange:t,value:s.password,onBlur:a,isError:o.password&&Boolean(c.password),message:o.password&&c.password})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Confirm New Password"}),Object(y.jsx)(i.a,{name:"confirmPassword",className:"Input-control",type:"password",onChange:t,value:s.confirmPassword,onBlur:a,disabled:!o.password,isError:o.confirmPassword&&Boolean(c.confirmPassword),message:o.confirmPassword&&c.confirmPassword})]})]}),Object(y.jsxs)("div",{className:"Setting_card_inputs-upload mt-large",children:[Object(y.jsxs)("div",{className:"Setting_card_inputs-avatar",children:[Object(y.jsx)("h2",{children:"New Photo"}),Object(y.jsx)(i.a,{placeholder:"Photo",type:"file",name:"thumbnail",onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),n("thumbnail",t),p(t))},className:"Input-control",onBlur:a,isError:o.thumbnail&&Boolean(c.thumbnail),message:o.thumbnail&&c.thumbnail})]}),Object(y.jsxs)("div",{className:"Setting_card_inputs-avatar",children:[Object(y.jsx)("h2",{children:"Cover"}),Object(y.jsx)("input",{type:"file",onChange:function(e){console.log(e.currentTarget.files[0]),Object(u.b)(e.currentTarget.files[0]).then((function(e){console.log(e),O(e)}))},className:"Input-control",onBlur:a,isError:o.thumbnail&&Boolean(c.thumbnail),message:o.thumbnail&&c.thumbnail})]})]}),Object(y.jsxs)("div",{className:"Setting_card_inputs-item mt-large",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Co-Brand Name"}),Object(y.jsx)(i.a,{name:"cobrandName",className:"Input-control",type:"text",onChange:t,value:s.cobrandName,onBlur:a,isError:o.cobrandName&&Boolean(c.cobrandName),message:o.cobrandName&&c.cobrandName})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Phone Number"}),Object(y.jsx)(i.a,{name:"phoneNumber",className:"Input-control",type:"text",onChange:t,value:s.phoneNumber,onBlur:a,isError:o.phoneNumber&&Boolean(c.phoneNumber),message:o.phoneNumber&&c.phoneNumber})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Address"}),Object(y.jsx)(i.a,{name:"address",className:"Input-control",type:"textarea",onChange:t,value:s.address,onBlur:a,isError:o.address&&Boolean(c.address),message:o.address&&c.address})]}),Object(y.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Profile"})]})]})}})]}),Object(y.jsxs)("div",{className:"Setting_card_preview",children:[Object(y.jsx)("h5",{children:"Preview"}),Object(y.jsxs)(V,{style:{width:"25rem",borderRadius:"1rem"},children:[Object(y.jsx)("div",{className:"backgr",style:{backgroundImage:"url(".concat(v||"https://defghi.co.id/wp-content/uploads/2021/07/Logo-IDE.png",")")},children:Object(y.jsx)("img",{className:"img2",src:k||"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"})}),Object(y.jsxs)(V.Body,{className:"body-card",children:[Object(y.jsx)(V.Title,{style:{textAlign:"center"},children:"Bimbel Defghi"}),Object(y.jsx)(V.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})]})]})]})}))},123:function(e,t,a){"use strict";var r=a(2),n=(a(128),a(0));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},128:function(e,t,a){},131:function(e,t,a){"use strict";var r=a(5),n=a(10),o=a(34),i=a(89),s=a.n(i),c=a(2),l=a(0),d=["as","disabled"];function u(e){var t=e.tagName,a=e.disabled,r=e.href,n=e.target,o=e.rel,i=e.onClick,s=e.tabIndex,c=void 0===s?0:s,l=e.type;t||(t=null!=r||null!=n||null!=o?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},d];var u=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:c,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?o:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},d]}var m=c.forwardRef((function(e,t){var a=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,d),i=u(Object.assign({tagName:a,disabled:r},o)),s=Object(n.a)(i,2),c=s[0],m=s[1].tagName;return Object(l.jsx)(m,Object.assign({},o,c,{ref:t}))}));m.displayName="Button";var b=a(92),g=c.forwardRef((function(e,t){var a=e.as,i=e.bsPrefix,c=e.variant,d=e.size,m=e.active,g=e.className,h=Object(o.a)(e,["as","bsPrefix","variant","size","active","className"]),p=Object(b.a)(i,"btn"),f=u(Object(r.a)({tagName:a},h)),j=Object(n.a)(f,2),v=j[0],O=j[1].tagName;return Object(l.jsx)(O,Object(r.a)(Object(r.a)(Object(r.a)({},v),h),{},{ref:t,className:s()(g,p,m&&"active",c&&"".concat(p,"-").concat(c),d&&"".concat(p,"-").concat(d),h.href&&h.disabled&&"disabled")}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=g},132:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(181),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),i=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),l=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),d=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),u=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},138:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return v})),a.d(t,"e",(function(){return O})),a.d(t,"c",(function(){return y})),a.d(t,"f",(function(){return x}));var r=a(8),n=a(18),o=a.n(n),i=a(36),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(25),m=function(){return{type:r.f}},b=function(){return{type:r.d}},g=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},p=function(e,t,a,n,c,l){return function(d){d(m()),d({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);var n,i={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+t+'" berhasil ditambahkan.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(b())})),console.log(i)}))}},f=function(e,t,a,n,o,s,l){return function(d){if(d(m()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(b())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(b())}))}))}}},j=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},v=function(e,t,a,n,o,s,c,d,u,p,f){return function(j){j(m()),j({type:r.a}),Object(i.b)(c).then((function(r){console.log(typeof r);var c=r,m=p?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var p={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(p),l(p).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(p)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var v={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(v),l(v).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(b())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(b())})),console.log(v)}))}},O=function(e,t,a,n,o,s,c,l,u,p,f){return function(e){e(m()),e({type:r.a});if("Video"===s)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(l)}));else if("Image"===s){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else if("Artikel"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:p};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:p};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(b())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(b())})),console.log(l)}},y=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(b()),a()})).catch((function(e){console.log(e),n(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(b()),a()}))}},x=function(e,t,a,n,o,s,c){return function(l){l(m()),l({type:r.a});var d={email:e,password:t},p={};(a&&(p=Object.assign(p,{cobrandName:a})),o&&(p=Object.assign(p,{phoneNumber:o})),s&&(p=Object.assign(p,{address:s})),c&&(p=Object.assign(p,{password:c})),n)?Object(i.b)(n).then((function(e){p=Object.assign(p,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",p),Object(u.a)(d,p).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})):(console.log("whereValues: ",d),console.log("newValues: ",p),Object(u.a)(d,p).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())})))}}},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(5),n=a(34),o=a(89),i=a.n(o),s=/-(.)/g;var c=a(2),l=a(92),d=a(0),u=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,o=void 0===a?u(e):a,s=t.Component,m=t.defaultProps,b=c.forwardRef((function(t,a){var o=t.className,c=t.bsPrefix,u=t.as,m=void 0===u?s||"div":u,b=Object(n.a)(t,["className","bsPrefix","as"]),g=Object(l.a)(c,e);return Object(d.jsx)(m,Object(r.a)({ref:a,className:i()(o,g)},b))}));return b.defaultProps=m,b.displayName=o,b}},305:function(e,t,a){"use strict";var r=a(5),n=a(2),o=a(89),i=a.n(o),s=a(0);t.a=function(e){return n.forwardRef((function(t,a){return Object(s.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:a,className:i()(t.className,e)}))}))}},758:function(e,t,a){},89:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));a(5);var r=a(2),n=(a(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:n});o.Consumer,o.Provider;function i(e,t){var a=Object(r.useContext)(o).prefixes;return e||a[t]||t}function s(){return"rtl"===Object(r.useContext)(o).dir}}}]);
//# sourceMappingURL=10.e175cfab.chunk.js.map