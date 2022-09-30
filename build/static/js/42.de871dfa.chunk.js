(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[42],{104:function(e,r,t){"use strict";var n=t(2),i=(t(105),t(0));function a(e){var r=e.placeholder,t=e.type,n=e.onChange,a=e.onBlur,o=e.value,s=e.className,u=e.message,c=e.name,d=e.min,l=e.max,m=e.disabled,h=e.isError;return"textarea"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("textarea",{name:c,id:c,className:s,placeholder:r,onChange:n,onBlur:a,value:o,disabled:m}),h&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:u})})]}):"date"===t||"datetime-local"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:s,type:t,placeholder:r,onChange:n,onBlur:a,value:o,min:d,max:"9999-12-31",disabled:m}),h&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:u})})]}):"number"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:s,type:t,onChange:n,onBlur:a,value:o,min:d,max:l,disabled:m}),h&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:u})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:s,type:t,placeholder:r,onChange:n,onBlur:a,value:o,disabled:m}),h&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:u})})]})}r.a=Object(n.memo)(a)},105:function(e,r,t){},112:function(e,r,t){"use strict";t.d(r,"g",(function(){return a})),t.d(r,"h",(function(){return o})),t.d(r,"f",(function(){return s})),t.d(r,"l",(function(){return u})),t.d(r,"m",(function(){return c})),t.d(r,"p",(function(){return d})),t.d(r,"c",(function(){return l})),t.d(r,"d",(function(){return m})),t.d(r,"q",(function(){return h})),t.d(r,"j",(function(){return p})),t.d(r,"a",(function(){return g})),t.d(r,"i",(function(){return f})),t.d(r,"k",(function(){return b})),t.d(r,"o",(function(){return j})),t.d(r,"b",(function(){return y})),t.d(r,"e",(function(){return v})),t.d(r,"n",(function(){return x}));var n=t(138),i=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,a=n.f({userName:n.g("Enter your email").required("Email is required"),password:n.g("Enter your password").required("Password is required")}),o=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),accountName:n.g("Enter your name").required("Name is required"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),s=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),u=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),programThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),category:n.g(),targetAudiance:n.a().min(1,"Pilih minimal 1"),contentPrograms:n.a().min(1).of(n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi"),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),answerKey:n.g().when("category",{is:"Ujian",then:n.g().required("Kunci Jawaban harus diisi"),otherwise:n.g()})}))}),c=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),startDate:n.c("Insert start date").required("Date is required")}),d=n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi")}),l=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),contentThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),isActive:n.b(),topics:n.a().min(1),targetAudience:n.a().min(1)}),m=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),startDate:n.c("Insert start date").required("Date is required")}),h=n.f({nameUser:n.g("Enter your content title").required("User name is required"),emailUser:n.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:n.c("Insert start date").required("Date is required")}),p=n.f({destination:n.a().min(1),messageSubject:n.g("Enter the message subject").required("Message Subject is required"),messageContent:n.g("Enter the message content").required("Message Content is required"),scheduleTime:n.c("Insert start date").required("Date is required"),mediaType:n.g("Enter the media type").required("Media type is required"),category:n.g("Enter the category").required("Category is required")}),g=n.f({audianceName:n.g("Enter your audience name").required("Audience Name is required")}),f=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),b=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),j=n.f({emailUser:n.g("Enter your email").required("Email is required").email("Email not valid"),userName:n.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),y=n.f({cobrandComunityName:n.g("Enter your community name").required("Community name is required"),partComunityName:n.g("Enter your community name")}),v=n.f({topicName:n.g("Enter topic name").required("Topic Name is required")}),x=n.f({controlParameterName:n.g("Enter category name").required("Category is required"),controlParameterValue:n.e().required("Number is required")})},125:function(e,r,t){var n=function(e){"use strict";var r,t=Object.prototype,n=t.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{u({},"")}catch(I){u=function(e,r,t){return e[r]=t}}function c(e,r,t,n){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),o=new L(n||[]);return a._invoke=function(e,r,t){var n=l;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return S()}for(t.method=i,t.arg=a;;){var o=t.delegate;if(o){var s=O(o,t);if(s){if(s===g)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===l)throw n=p,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=h;var u=d(e,r,t);if("normal"===u.type){if(n=t.done?p:m,u.arg===g)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(n=p,t.method="throw",t.arg=u.arg)}}}(e,t,o),a}function d(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(I){return{type:"throw",arg:I}}}e.wrap=c;var l="suspendedStart",m="suspendedYield",h="executing",p="completed",g={};function f(){}function b(){}function j(){}var y={};y[a]=function(){return this};var v=Object.getPrototypeOf,x=v&&v(v(C([])));x&&x!==t&&n.call(x,a)&&(y=x);var q=j.prototype=f.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(r){u(e,r,(function(e){return this._invoke(r,e)}))}))}function E(e,r){function t(i,a,o,s){var u=d(e[i],e,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):r.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new r((function(r,i){t(e,n,r,i)}))}return i=i?i.then(a,a):a()}}function O(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=d(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function N(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function _(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function t(){for(;++i<e.length;)if(n.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:r,done:!0}}return b.prototype=q.constructor=j,j.constructor=b,b.displayName=u(j,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"===typeof e&&e.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u(e,s,"GeneratorFunction")),e.prototype=Object.create(q),e},e.awrap=function(e){return{__await:e}},w(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(r,t,n,i,a){void 0===a&&(a=Promise);var o=new E(c(r,t,n,i),a);return e.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(q),u(q,s,"Generator"),q[a]=function(){return this},q.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),g},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),_(t),g}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var i=n.arg;_(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},1263:function(e,r,t){},131:function(e,r,t){"use strict";function n(e,r,t,n,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void t(c)}s.done?r(u):Promise.resolve(u).then(n,i)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(i,a){var o=e.apply(r,t);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}t.d(r,"a",(function(){return i}))},139:function(e,r,t){e.exports=t(125)},1438:function(e,r,t){"use strict";t.r(r);var n=t(7),i=t(2),a=t(94),o=(t(1263),t(137)),s=t(6),u=t(126),c=t(36),d=t(17),l=t(112),m=t(104),h=t(99),p=t(0);r.default=Object(d.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onEditStaff:function(r,t,n,i,a,o,s,c){return e(Object(u.t)(r,t,n,i,a,o,s,c))}}}))((function(e){var r,t,u,d,g,f,b,j=e.onEditStaff,y=e.isLoading,v=Object(s.g)(),x=JSON.parse(localStorage.getItem("userData")).cobrandEmail,q=localStorage.getItem("staffSelected"),w=Object(i.useState)([]),E=Object(n.a)(w,2),O=E[0],N=E[1],_=Object(i.useState)(!0),L=Object(n.a)(_,2),C=L[0],S=L[1],I=Object(i.useState)(!1),P=Object(n.a)(I,2),T=P[0],D=P[1];return Object(i.useEffect)((function(){var e={whereKeyValues:{_id:q}};Object(h.a)(e).then((function(e){N(e.data.Data[0]),S(!1)}))}),[]),C||y?Object(p.jsx)(c.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.a,{headingName:"Ubah Data Admin & Staff",routes:[{path:"/tools/admin-staff",name:"Admin & Staff"},{path:"/tools/admin-staff/edit",name:"Ubah"}]}),Object(p.jsx)(o.a,{initialValues:{userName:null!==(r=O.userName)&&void 0!==r?r:"",password:null!==(t=O.password)&&void 0!==t?t:"",userType:null!==(u=O.userType)&&void 0!==u?u:"Co-Brand",cobrandEmail:null!==(d=O.cobrandEmail)&&void 0!==d?d:x,userLevel:null!==(g=O.userLevel)&&void 0!==g?g:"Reporter",emailUser:null!==(f=O.emailUser)&&void 0!==f?f:"",phone:null!==(b=O.phone)&&void 0!==b?b:""},validationSchema:l.o,validateOnChange:!0,onSubmit:function(e){j(e.userName,e.password,e.userType,e.cobrandEmail,e.userLevel,e.emailUser,e.phone,v)},children:function(e){var r=e.handleChange,t=e.handleSubmit,n=e.handleBlur,i=e.setFieldValue,a=e.values,o=e.errors,s=e.touched;return Object(p.jsx)("form",{onSubmit:t,children:Object(p.jsxs)("div",{className:"EditStaff",children:[Object(p.jsx)("h1",{children:"Ubah"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Username"}),Object(p.jsx)(m.a,{type:"text",name:"userName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.userName,onChange:r,onBlur:n}),s.userName&&Object(p.jsx)("span",{className:"message__error",children:o.userName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)(m.a,{type:T?"text":"password",name:"password",className:"form-group__input form-group__input--fullwidth",value:a.password,onChange:r,onBlur:n}),Object(p.jsxs)("div",{className:"form-checkbox",children:[Object(p.jsx)(m.a,{type:"checkbox",name:"showPassword",onChange:function(e){e.currentTarget.checked?D(!0):D(!1)}}),Object(p.jsx)("label",{children:"Show Password"})]}),s.password&&Object(p.jsx)("span",{className:"message__error",children:o.password})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Tipe User"}),Object(p.jsxs)("select",{name:"userType",value:a.userType,onChange:function(e){i("userType",e.currentTarget.value)},children:[Object(p.jsx)("option",{value:"CS",children:"CS"}),Object(p.jsx)("option",{value:"Co-Brand",children:"Co-Brand"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Level User"}),Object(p.jsxs)("select",{name:"userLevel",value:a.userLevel,onChange:function(e){i("userLevel",e.currentTarget.value)},children:[Object(p.jsx)("option",{value:"Super Admin",children:"Super Admin"}),Object(p.jsx)("option",{value:"Admin",children:"Admin"}),Object(p.jsx)("option",{value:"Editor",children:"Editor"}),Object(p.jsx)("option",{value:"Reporter",children:"Reporter"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Email User"}),Object(p.jsx)(m.a,{type:"text",name:"emailUser",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.emailUser,onChange:r,onBlur:n}),s.emailUser&&Object(p.jsx)("span",{className:"message__error",children:o.emailUser})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Nomor Telepon"}),Object(p.jsx)(m.a,{type:"text",name:"phone",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.phone,onChange:function(e){var r=e.currentTarget.value.replace(/\D/g,"");i("phone",r)},onBlur:n}),s.phone&&Object(p.jsx)("span",{className:"message__error",children:o.phone})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-submit",type:"submit",onClick:function(){},children:"Simpan Perubahan"})})]})})}}),y?Object(p.jsx)(c.a,{}):null]})}))},94:function(e,r,t){"use strict";t(2);var n=t(9),i=(t(95),t(0));r.a=function(e){var r=e.headingName,t=e.routes,a=void 0===t?[]:t;return Object(i.jsxs)("div",{className:"Heading",children:[Object(i.jsx)("h1",{children:r}),Object(i.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,r){return e.path?Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(i.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},r):Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(i.jsx)("span",{children:e.name})," "]},r)}))})]})}},95:function(e,r,t){}}]);
//# sourceMappingURL=42.de871dfa.chunk.js.map