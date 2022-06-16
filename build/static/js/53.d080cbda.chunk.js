(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[53],{114:function(e,r,a){"use strict";var n=a(2),t=(a(115),a(0));function i(e){var r=e.placeholder,a=e.type,n=e.onChange,i=e.onBlur,s=e.value,o=e.className,d=e.message,c=e.name,u=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("textarea",{name:c,id:c,className:o,placeholder:r,onChange:n,onBlur:i,value:s,disabled:l}),g&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:d})})]}):"date"===a||"datetime-local"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:c,className:o,type:a,placeholder:r,onChange:n,onBlur:i,value:s,min:u,max:"9999-12-31",disabled:l}),g&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:d})})]}):"number"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:c,className:o,type:a,onChange:n,onBlur:i,value:s,min:u,max:m,disabled:l}),g&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:d})})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:c,className:o,type:a,placeholder:r,onChange:n,onBlur:i,value:s,disabled:l}),g&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:d})})]})}r.a=Object(n.memo)(i)},115:function(e,r,a){},120:function(e,r,a){"use strict";a.d(r,"f",(function(){return i})),a.d(r,"g",(function(){return s})),a.d(r,"e",(function(){return o})),a.d(r,"k",(function(){return d})),a.d(r,"l",(function(){return c})),a.d(r,"b",(function(){return u})),a.d(r,"c",(function(){return m})),a.d(r,"o",(function(){return l})),a.d(r,"i",(function(){return g})),a.d(r,"a",(function(){return p})),a.d(r,"h",(function(){return h})),a.d(r,"j",(function(){return b})),a.d(r,"n",(function(){return j})),a.d(r,"d",(function(){return q})),a.d(r,"m",(function(){return f}));var n=a(140),t=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),password:n.g("Enter your password").required("Password is required")}),s=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),accountName:n.g("Enter your name").required("Name is required"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),d=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),programThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),category:n.g(),targetAudiance:n.a().min(1,"Pilih minimal 1"),contentPrograms:n.a().min(1).of(n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi"),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),answerKey:n.g().when("category",{is:"Ujian",then:n.g().required("Kunci Jawaban harus diisi"),otherwise:n.g()})}))}),c=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),startDate:n.c("Insert start date").required("Date is required")}),u=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description").required("Content description is required"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),contentThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),isActive:n.b(),topics:n.a().min(1),targetAudience:n.a().min(1)}),m=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description").required("Content description is required"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),startDate:n.c("Insert start date").required("Date is required")}),l=n.f({nameUser:n.g("Enter your content title").required("User name is required"),emailUser:n.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:n.c("Insert start date").required("Date is required")}),g=n.f({destination:n.a().min(1),messageSubject:n.g("Enter the message subject").required("Message Subject is required"),messageContent:n.g("Enter the message content").required("Message Content is required"),scheduleTime:n.c("Insert start date").required("Date is required"),mediaType:n.g("Enter the media type").required("Media type is required"),category:n.g("Enter the category").required("Category is required")}),p=n.f({audianceName:n.g("Enter your audience name").required("Audience Name is required")}),h=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),b=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),j=n.f({emailUser:n.g("Enter your email").required("Email is required").email("Email not valid"),userName:n.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:n.g("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),q=n.f({topicName:n.g("Enter topic name").required("Topic Name is required")}),f=n.f({controlParameterName:n.g("Enter category name").required("Category is required"),controlParameterValue:n.e().required("Number is required")})},1366:function(e,r,a){"use strict";a.r(r);var n=a(9),t=a(2),i=a(6),s=a(7),o=(a(875),a(39)),d=a(339),c=a(114),u=a(29),m=a(139),l=a(120),g=a(17),p=a(24),h=a(340),b=a(3),j=a(0);r.default=Object(g.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onRegister:function(r,a,n,t,i,s,o,d,c){return e(Object(p.e)(r,a,n,t,i,s,o,d,c))}}}))((function(e){var r=e.onRegister,a=e.isLoading,g=Object(t.useState)(!1),p=Object(n.a)(g,2),q=p[0],f=p[1],x=Object(i.g)();return Object(j.jsxs)(j.Fragment,{children:[q?Object(j.jsx)(h.a,{}):null,q?Object(j.jsxs)("button",{className:"CloseHelp",onClick:function(){f(!1)},children:[Object(j.jsx)(b.B,{})," "]}):null,Object(j.jsx)("div",{className:"RegisterBg",children:Object(j.jsxs)("div",{className:"Register",children:[Object(j.jsx)("div",{className:"Register-top",children:Object(j.jsx)("img",{src:o.a,className:"Register-top-img",alt:"logo top"})}),Object(j.jsxs)("div",{className:"Register-middle",children:[Object(j.jsxs)("div",{className:"Register-middle-left",children:[Object(j.jsx)("img",{src:d.a,alt:"Device ",className:"Register-middle-left-img"}),Object(j.jsxs)(s.b,{to:"/register",className:"Register-middle-left-help",onClick:function(){f(!0)},children:[Object(j.jsx)(b.l,{}),"  Bantuan"]})]}),Object(j.jsxs)("div",{className:"Register-middle-right",children:[Object(j.jsx)("div",{className:"Register-middle-right-heading mb-small",children:Object(j.jsx)("h1",{children:"Daftarkan Brand Anda."})}),Object(j.jsx)(m.a,{initialValues:{email:"",password:"",confirmPassword:"",accountName:"",cobrandName:"",phoneNumber:"",address:"",thumbnail:""},validationSchema:l.g,validateOnChange:!0,onSubmit:function(e){r(e.email,e.accountName,e.cobrandName,e.thumbnail,e.phoneNumber,e.address,e.password,e.confirmPassword,x)},children:function(e){var r=e.handleChange,a=e.handleBlur,n=e.handleSubmit,t=e.setFieldValue,i=e.touched,s=e.values,o=e.errors;return Object(j.jsxs)("form",{className:"Register-middle-right-form",onSubmit:n,children:[Object(j.jsx)(c.a,{placeholder:"Your E-mail (example@mail.com)",type:"text",name:"email",onChange:r,value:s.email,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.email&&Boolean(o.email),message:i.email&&o.email}),Object(j.jsx)(c.a,{placeholder:"Password",type:"password",name:"password",onChange:r,value:s.password,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.password&&Boolean(o.password),message:i.password&&o.password}),Object(j.jsx)(c.a,{placeholder:"Confirm Password",type:"password",name:"confirmPassword",onChange:r,value:s.confirmPassword,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.confirmPassword&&Boolean(o.confirmPassword),message:i.confirmPassword&&o.confirmPassword}),Object(j.jsx)(c.a,{placeholder:"Your Name",type:"text",name:"accountName",onChange:r,value:s.accountName,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.accountName&&Boolean(o.accountName),message:i.accountName&&o.accountName}),Object(j.jsx)(c.a,{placeholder:"Your Brand Name",type:"text",name:"cobrandName",onChange:r,value:s.cobrandName,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.cobrandName&&Boolean(o.cobrandName),message:i.cobrandName&&o.cobrandName}),Object(j.jsx)(c.a,{placeholder:"Phone Number",type:"text",name:"phoneNumber",onChange:r,value:s.phoneNumber,className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.phoneNumber&&Boolean(o.phoneNumber),message:i.phoneNumber&&o.phoneNumber}),Object(j.jsx)(c.a,{placeholder:"Address",type:"textarea",name:"address",onChange:r,value:s.address,className:"Input-control Input-control-big Input-control__with-focus mb-tiny",onBlur:a,isError:i.address&&Boolean(o.address),message:i.address&&o.address}),Object(j.jsx)("label",{children:"Photo"}),Object(j.jsx)(c.a,{placeholder:"Photo",type:"file",name:"thumbnail",onChange:function(e){var r=e.currentTarget.files[0];r&&(console.log("File to upload: ",r),t("thumbnail",r))},className:"Input-control Input-control__with-focus mb-tiny",onBlur:a,isError:i.thumbnail&&Boolean(o.thumbnail),message:i.thumbnail&&o.thumbnail}),Object(j.jsx)("button",{className:"btn btn-register",type:"submit",children:"Sign up"})]})}}),Object(j.jsxs)("p",{className:"Register-middle-right-joinus",children:["Sudah punya akun? ",Object(j.jsx)(s.b,{to:"/",children:"Klik untuk masuk"})," "]})]})]}),a&&Object(j.jsx)(u.a,{}),Object(j.jsx)("div",{className:"Register-bottom"})]})})]})}))},339:function(e,r,a){"use strict";r.a=a.p+"static/media/device2.69f8ea4a.png"},340:function(e,r,a){"use strict";a(2),a(341);var n=a(0);r.a=function(){return Object(n.jsx)("div",{className:"HelpOverlay",children:Object(n.jsxs)("div",{className:"HelpOverlay-content",children:[Object(n.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(n.jsx)("h2",{children:"Registrasi"}),Object(n.jsxs)("p",{children:["Pada halaman utama (Login), klik pada tulisan ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Daftar Sekarang"})," untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:"]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"E-Mail"}),Object(n.jsx)("li",{children:"Password"}),Object(n.jsx)("li",{children:"Confirm Password (isi harus sama dengan password)"}),Object(n.jsx)("li",{children:"Your Name (Nama Anda)"}),Object(n.jsx)("li",{children:"Your Brand Name (Nama Brand Anda)"}),Object(n.jsx)("li",{children:"Phone Number (Nomor Telepon yang terhubung dengan Brand Anda)"}),Object(n.jsx)("li",{children:"Address (Alamat Brand Anda)"}),Object(n.jsx)("li",{children:"Photo (Foto atau Gambar Logo dari Brand Anda)"})]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("p",{children:["Setelah mengisi delapan kolom di atas, klik ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Sign Up"})," untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"})," untuk masuk."]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("p",{children:["Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"}),". Jika berhasil, Anda akan dialihkan ke halaman Dashboard."]})]})})}},341:function(e,r,a){},875:function(e,r,a){}}]);
//# sourceMappingURL=53.d080cbda.chunk.js.map