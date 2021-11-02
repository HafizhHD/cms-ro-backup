(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[8],{278:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var r=n(15),o=n(2),a=n(78),i=(n(278),n(90)),s=n(4),c=n(89),l=n(23),d=n(16),u=n(84),m=n(80),p=n(22),h=n.n(p),g=n(150),b=n.n(g),j=n(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,r,o,a,i,s,l,d,u,m){return e(Object(c.a)(t,n,r,o,a,i,s,l,d,u,m))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,c=Object(o.useState)(!0),d=Object(r.a)(c,2),p=d[0],g=d[1],f=Object(o.useState)(),y=Object(r.a)(f,2),O=y[0],v=y[1],x=Object(o.useState)(b.a.createEmptyValue()),N=Object(r.a)(x,2),_=N[0],w=N[1],T={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},q=Object(s.g)(),C=JSON.parse(localStorage.getItem("userData")).email,E={whereKeyValues:{cobrandEmail:C}};return Object(o.useEffect)((function(){h()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:E,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),v(e.data.programs),g(!1)})).catch((function(e){console.log(e),g(!1)}))}),[]),p?Object(j.jsx)(l.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(j.jsx)(i.a,{initialValues:{programId:"",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!1},validationSchema:u.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(C,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,q)},children:function(e){var t=e.handleChange,n=e.handleSubmit,r=e.setFieldValue,o=e.values,a=e.errors;return Object(j.jsx)("form",{onSubmit:n,children:Object(j.jsxs)("div",{className:"AddContent",children:[Object(j.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Content Type"}),Object(j.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"--Select Content Type--"}),Object(j.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(j.jsx)("option",{value:"Image",children:"Image"}),Object(j.jsx)("option",{value:"Video",children:"Video"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Program Name"}),Object(j.jsxs)("select",{name:"programId",value:o.programId,onChange:t,children:[Object(j.jsx)("option",{value:"",children:"(Tanpa Program)"}),O.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:a.contentName})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)(m.a,{type:"textarea",name:"contentDescription",placeholder:"Type Something...",value:o.contentDescription,onChange:t})]}),Object(j.jsx)("span",{className:"message__error",children:a.contentDescription}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Source"}),Object(j.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:a.contentSource})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Photo"}),Object(j.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}}),Object(j.jsx)("span",{className:"message__error",children:a.contentThumbnail})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Contents"}),"Artikel"===o.contentType?Object(j.jsx)(b.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group__input form-group__input_rte",value:_,toolbarConfig:T,onChange:function(e){w(e),r("contents",e.toString("html")),console.log(o.contents)}}):null,"Image"===o.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:o.contents,onChange:t}):null,"Video"===o.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t}):null,Object(j.jsx)("span",{className:"message__error",children:a.contents})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Set Schedule"}),Object(j.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:o.startDate,min:(new Date).toISOString().split("T")[0],onChange:t}),Object(j.jsx)("span",{className:"message__error",children:a.startDate})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("div",{className:"form-group_switch",children:[Object(j.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(j.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(j.jsxs)("label",{className:"form-group_switch_switch",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:o.isActive,onChange:function(){o.isActive=!o.isActive,console.log(o.isActive)}}),Object(j.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(j.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(j.jsx)(l.a,{}):null]})}))},78:function(e,t,n){"use strict";n(2);var r=n(7),o=(n(79),n(1));t.a=function(e){var t=e.headingName,n=e.routes,a=void 0===n?[]:n;return Object(o.jsxs)("div",{className:"Heading",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,t){return e.path?Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(o.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(o.jsx)("span",{children:e.name})," "]},t)}))})]})}},79:function(e,t,n){},80:function(e,t,n){"use strict";var r=n(2),o=(n(81),n(1));function a(e){var t=e.placeholder,n=e.type,r=e.onChange,a=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.isError;return"textarea"===n?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:a,value:i}),u&&Object(o.jsx)("div",{className:"message",children:Object(o.jsx)("span",{className:"message__error",children:c})})]}):"date"===n?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:r,onBlur:a,value:i,min:d}),u&&Object(o.jsx)("div",{className:"message",children:Object(o.jsx)("span",{className:"message__error",children:c})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:r,onBlur:a,value:i}),u&&Object(o.jsx)("div",{className:"message",children:Object(o.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(a)},81:function(e,t,n){},84:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(91),o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),a=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),i=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),s=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),c=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),l=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return p}));var r=n(13),o=n(22),a=n.n(o),i=n(30);function s(e){var t="",n="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((n=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://player.vimeo.com/video/"+n):e.includes("youtube.com/")?((n=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("youtu.be/")?((n=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("dailymotion.com/")?((n=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.dailymotion.com/embed/"+n):t=e,t}var c=function(){return{type:r.c}},l=function(){return{type:r.a}},d=function(e,t,n,r,o,s){return function(d){d(c()),Object(i.a)(r).then((function(r){console.log(typeof r);var i=r;setTimeout((function(){var r={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:i,startDate:o};console.log(r),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:r,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),s.push("/program"),d(l())})).catch((function(e){console.error("Error:",e),d(l())})),console.log(r)}),2e3)}))}},u=function(e,t,n,r,o,s,d){return function(u){(u(c()),console.log("Photo is empty:",""===o),""===o)?setTimeout((function(){var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,startDate:s}};console.log(o),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:o,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),d.push("/program"),u(l())})).catch((function(e){console.error("Error:",e),u(l())})),console.log(o)}),2e3):Object(i.a)(o).then((function(o){console.log(typeof o);var i=o;setTimeout((function(){var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,programthumnail:i,startDate:s}};console.log(o),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:o,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),d.push("/program"),u(l())})).catch((function(e){console.error("Error:",e),u(l())})),console.log(o)}),2e3)}))}},m=function(e,t,n,r,o,d,u,m,p,h,g){return function(b){b(c()),Object(i.a)(u).then((function(i){console.log(typeof i);var c=i,u=h?"active":"inactive";m="Video"===o?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(m)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===o?'<img src="'+m+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+m+"</div></body></html>",console.log(m),setTimeout((function(){var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:d,contentThumbnail:c,contents:m,status:u,startDate:p};console.log(i),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),g.push("/content"),b(l())})).catch((function(e){console.error("Error:",e),b(l())})),console.log(i)}),2e3)}))}},p=function(e,t,n,r,o,d,u,m,p,h,g){return function(b){(b(c()),console.log("Photo is empty:",""===m),""===m)?(p="Video"===d?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(p)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===d?'<img src="'+p+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+p+"</div></body></html>",console.log(p),setTimeout((function(){var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:o,contentType:d,contentSource:u,contents:p,startDate:h}};console.log(i),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),g.push("/content"),b(l())})).catch((function(e){console.error("Error:",e),b(l())})),console.log(i)}),2e3)):Object(i.a)(m).then((function(i){console.log(typeof i);setTimeout((function(){var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:o,contentType:d,contentSource:u,contents:p,startDate:h}};console.log(i),a()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),g.push("/content"),b(l())})).catch((function(e){console.error("Error:",e),b(l())})),console.log(i)}),2e3)}))}}}}]);
//# sourceMappingURL=8.fa7cbfb8.chunk.js.map