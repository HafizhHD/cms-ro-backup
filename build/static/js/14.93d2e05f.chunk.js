(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[14],{112:function(e,r,a){"use strict";r.a=a.p+"static/media/device2.69f8ea4a.png"},123:function(e,r,a){"use strict";a(2),a(124);var n=a(1);r.a=function(){return Object(n.jsx)("div",{className:"HelpOverlay",children:Object(n.jsxs)("div",{className:"HelpOverlay-content",children:[Object(n.jsx)("h1",{children:"Guide Co-Brand Keluarga HKBP"}),Object(n.jsx)("h2",{children:"Registrasi"}),Object(n.jsxs)("p",{children:["Pada halaman utama (Login), klik pada tulisan ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Daftar Sekarang"})," untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:"]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"E-Mail"}),Object(n.jsx)("li",{children:"Password"}),Object(n.jsx)("li",{children:"Confirm Password (isi harus sama dengan password)"}),Object(n.jsx)("li",{children:"Your Name (Nama Anda)"}),Object(n.jsx)("li",{children:"Your Brand Name (Nama Brand Anda)"}),Object(n.jsx)("li",{children:"Phone Number (Nomor Telepon yang terhubung dengan Brand Anda)"}),Object(n.jsx)("li",{children:"Address (Alamat Brand Anda)"}),Object(n.jsx)("li",{children:"Photo (Foto atau Gambar Logo dari Brand Anda)"})]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("p",{children:["Setelah mengisi delapan kolom di atas, klik ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Sign Up"})," untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"})," untuk masuk."]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("p",{children:["Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"}),". Jika berhasil, Anda akan dialihkan ke halaman Dashboard."]})]})})}},124:function(e,r,a){},269:function(e,r,a){},316:function(e,r,a){"use strict";a.r(r);var n=a(14),t=a(2),s=a(5),i=a(12),o=(a(269),a(33)),c=a(112),d=a(84),l=a(24),u=a(94),m=a(88),p=a(16),b=a(21),g=a(123),h=a(6),j=a(1);r.default=Object(p.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onRegister:function(r,a,n,t,s,i,o,c,d){return e(Object(b.e)(r,a,n,t,s,i,o,c,d))}}}))((function(e){var r=e.onRegister,a=e.isLoading,p=Object(t.useState)(!1),b=Object(n.a)(p,2),x=b[0],f=b[1],O=Object(s.g)();return Object(j.jsxs)(j.Fragment,{children:[x?Object(j.jsx)(g.a,{}):null,x?Object(j.jsxs)("button",{className:"CloseHelp",onClick:function(){f(!1)},children:[Object(j.jsx)(h.u,{})," "]}):null,Object(j.jsx)("div",{className:"RegisterBg",children:Object(j.jsxs)("div",{className:"Register",children:[Object(j.jsx)("div",{className:"Register-top",children:Object(j.jsx)("img",{src:o.a,className:"Register-top-img",alt:"logo top"})}),Object(j.jsxs)("div",{className:"Register-middle",children:[Object(j.jsxs)("div",{className:"Register-middle-left",children:[Object(j.jsx)("img",{src:c.a,alt:"Device ",className:"Register-middle-left-img"}),Object(j.jsxs)(i.b,{to:"/register",className:"Register-middle-left-help",onClick:function(){f(!0)},children:[Object(j.jsx)(h.m,{}),"  Bantuan"]})]}),Object(j.jsxs)("div",{className:"Register-middle-right",children:[Object(j.jsx)("div",{className:"Register-middle-right-heading mb-small",children:Object(j.jsx)("h1",{children:"Daftarkan Brand Anda."})}),Object(j.jsx)(u.a,{initialValues:{email:"",password:"",confirmPassword:"",accountName:"",cobrandName:"",phoneNumber:"",address:"",thumbnail:""},validationSchema:m.e,validateOnChange:!0,onSubmit:function(e){r(e.email,e.accountName,e.cobrandName,e.thumbnail,e.phoneNumber,e.address,e.password,e.confirmPassword,O)},children:function(e){var r=e.handleChange,a=e.handleBlur,n=e.handleSubmit,t=e.setFieldValue,s=e.touched,i=e.values,o=e.errors;return Object(j.jsxs)("form",{className:"Register-middle-right-form",onSubmit:n,children:[Object(j.jsx)(d.a,{placeholder:"Your E-mail (example@mail.com)",type:"text",name:"email",onChange:r,value:i.email,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.email&&Boolean(o.email),message:s.email&&o.email}),Object(j.jsx)(d.a,{placeholder:"Password",type:"password",name:"password",onChange:r,value:i.password,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.password&&Boolean(o.password),message:s.password&&o.password}),Object(j.jsx)(d.a,{placeholder:"Confirm Password",type:"password",name:"confirmPassword",onChange:r,value:i.confirmPassword,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.confirmPassword&&Boolean(o.confirmPassword),message:s.confirmPassword&&o.confirmPassword}),Object(j.jsx)(d.a,{placeholder:"Your Name",type:"text",name:"accountName",onChange:r,value:i.accountName,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.accountName&&Boolean(o.accountName),message:s.accountName&&o.accountName}),Object(j.jsx)(d.a,{placeholder:"Your Brand Name",type:"text",name:"cobrandName",onChange:r,value:i.cobrandName,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.cobrandName&&Boolean(o.cobrandName),message:s.cobrandName&&o.cobrandName}),Object(j.jsx)(d.a,{placeholder:"Phone Number",type:"text",name:"phoneNumber",onChange:r,value:i.phoneNumber,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.phoneNumber&&Boolean(o.phoneNumber),message:s.phoneNumber&&o.phoneNumber}),Object(j.jsx)(d.a,{placeholder:"Address",type:"textarea",name:"address",onChange:r,value:i.address,className:"Input-control Input-control-big Input-control__with-focus mb-tiny",onBlur:a,isError:s.address&&Boolean(o.address),message:s.address&&o.address}),Object(j.jsx)("label",{children:"Photo"}),Object(j.jsx)(d.a,{placeholder:"Photo",type:"file",name:"thumbnail",onChange:function(e){var r=e.currentTarget.files[0];r&&(console.log("File to upload: ",r),t("thumbnail",r))},className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:s.thumbnail&&Boolean(o.thumbnail),message:s.thumbnail&&o.thumbnail}),Object(j.jsx)("button",{className:"btn btn-register",type:"submit",children:"Sign up"})]})}}),Object(j.jsxs)("p",{className:"Register-middle-right-joinus",children:["Sudah punya akun? ",Object(j.jsx)(i.b,{to:"/",children:"Klik untuk masuk"})," "]})]})]}),a&&Object(j.jsx)(l.a,{}),Object(j.jsx)("div",{className:"Register-bottom"})]})})]})}))},84:function(e,r,a){"use strict";var n=a(2),t=(a(85),a(1));function s(e){var r=e.placeholder,a=e.type,n=e.onChange,s=e.onBlur,i=e.value,o=e.className,c=e.message,d=e.name,l=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("textarea",{name:d,id:d,className:o,placeholder:r,onChange:n,onBlur:s,value:i,disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:d,className:o,type:a,placeholder:r,onChange:n,onBlur:s,value:i,min:l,max:"9999-12-31",disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:d,className:o,type:a,placeholder:r,onChange:n,onBlur:s,value:i,disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]})}r.a=Object(n.memo)(s)},85:function(e,r,a){},88:function(e,r,a){"use strict";a.d(r,"d",(function(){return s})),a.d(r,"e",(function(){return i})),a.d(r,"c",(function(){return o})),a.d(r,"f",(function(){return c})),a.d(r,"g",(function(){return d})),a.d(r,"a",(function(){return l})),a.d(r,"b",(function(){return u}));var n=a(95),t=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,s=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),password:n.e("Enter your password").required("Password is required")}),i=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),accountName:n.e("Enter your name").required("Name is required"),cobrandName:n.e("Enter your brand name").required("Brand name is required"),thumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.e("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.e("Enter your address").required("Address is required"),password:n.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.e("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.e("Enter your brand name").required("Brand name is required"),thumbnail:n.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.e("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.e("Enter your address").required("Address is required"),password:n.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.e("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),c=n.d({programName:n.e("Enter your program title").required("Program title is required"),programDescription:n.e("Enter the program description").required("Program description is required"),programThumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.b("Insert start date").required("Date is required")}),d=n.d({programName:n.e("Enter your program title").required("Program title is required"),programDescription:n.e("Enter the program description").required("Program description is required"),startDate:n.b("Insert start date").required("Date is required")}),l=n.d({contentName:n.e("Enter your content title").required("Content title is required"),contentDescription:n.e("Enter the content description").required("Content description is required"),contents:n.e("Enter the content description").required("Content description is required"),contentSource:n.e("Enter the content source").required("Content source is required"),contentThumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.b("Insert start date").required("Date is required"),isActive:n.a()}),u=n.d({contentName:n.e("Enter your content title").required("Content title is required"),contentDescription:n.e("Enter the content description").required("Content description is required"),contents:n.e("Enter the content description").required("Content description is required"),contentSource:n.e("Enter the content source").required("Content source is required"),startDate:n.b("Insert start date").required("Date is required")})}}]);
//# sourceMappingURL=14.93d2e05f.chunk.js.map