(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[62],{106:function(e,r,a){"use strict";var n=a(2),i=(a(107),a(0));function t(e){var r=e.placeholder,a=e.type,n=e.onChange,t=e.onBlur,s=e.value,d=e.className,o=e.message,c=e.name,u=e.min,m=e.max,l=e.disabled,g=e.isError;return"textarea"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("textarea",{name:c,id:c,className:d,placeholder:r,onChange:n,onBlur:t,value:s,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"date"===a||"datetime-local"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:d,type:a,placeholder:r,onChange:n,onBlur:t,value:s,min:u,max:"9999-12-31",disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"number"===a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:d,type:a,onChange:n,onBlur:t,value:s,min:u,max:m,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:c,className:d,type:a,placeholder:r,onChange:n,onBlur:t,value:s,disabled:l}),g&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(n.memo)(t)},107:function(e,r,a){},113:function(e,r,a){"use strict";a.d(r,"f",(function(){return t})),a.d(r,"g",(function(){return s})),a.d(r,"e",(function(){return d})),a.d(r,"k",(function(){return o})),a.d(r,"l",(function(){return c})),a.d(r,"o",(function(){return u})),a.d(r,"b",(function(){return m})),a.d(r,"c",(function(){return l})),a.d(r,"p",(function(){return g})),a.d(r,"i",(function(){return h})),a.d(r,"a",(function(){return j})),a.d(r,"h",(function(){return p})),a.d(r,"j",(function(){return b})),a.d(r,"n",(function(){return q})),a.d(r,"d",(function(){return f})),a.d(r,"m",(function(){return x}));var n=a(137),i=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,t=n.f({userName:n.g("Enter your email").required("Email is required"),password:n.g("Enter your password").required("Password is required")}),s=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),accountName:n.g("Enter your name").required("Name is required"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),d=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),programThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),category:n.g(),targetAudiance:n.a().min(1,"Pilih minimal 1"),contentPrograms:n.a().min(1).of(n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi"),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),answerKey:n.g().when("category",{is:"Ujian",then:n.g().required("Kunci Jawaban harus diisi"),otherwise:n.g()})}))}),c=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),startDate:n.c("Insert start date").required("Date is required")}),u=n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi")}),m=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),contentThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),isActive:n.b(),topics:n.a().min(1),targetAudience:n.a().min(1)}),l=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),startDate:n.c("Insert start date").required("Date is required")}),g=n.f({nameUser:n.g("Enter your content title").required("User name is required"),emailUser:n.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:n.c("Insert start date").required("Date is required")}),h=n.f({destination:n.a().min(1),messageSubject:n.g("Enter the message subject").required("Message Subject is required"),messageContent:n.g("Enter the message content").required("Message Content is required"),scheduleTime:n.c("Insert start date").required("Date is required"),mediaType:n.g("Enter the media type").required("Media type is required"),category:n.g("Enter the category").required("Category is required")}),j=n.f({audianceName:n.g("Enter your audience name").required("Audience Name is required")}),p=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),b=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),q=n.f({emailUser:n.g("Enter your email").required("Email is required").email("Email not valid"),userName:n.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:n.g("Enter your phone number").required("Phone number is required").matches(i,"Invalid phone number format"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=n.f({topicName:n.g("Enter topic name").required("Topic Name is required")}),x=n.f({controlParameterName:n.g("Enter category name").required("Category is required"),controlParameterValue:n.e().required("Number is required")})},1428:function(e,r,a){"use strict";a.r(r);var n=a(7),i=a(2),t=a(8),s=(a(878),a(41)),d=a.p+"static/media/device4.87662fd6.png",o=a(106),c=a(29),u=a(136),m=a(113),l=a(17),g=a(24),h=a(3),j=a(359),p=a(0);r.default=Object(l.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onLogin:function(r,a){return e(Object(g.a)(r,a))}}}))((function(e){var r=e.onLogin,a=e.isLoading,l=Object(i.useState)(!1),g=Object(n.a)(l,2),b=g[0],q=g[1],f=Object(i.useState)(!1),x=Object(n.a)(f,2),O=x[0],y=x[1],N=Object(i.useState)(),w=Object(n.a)(N,2),E=(w[0],w[1]),v=Object(u.b)({initialValues:{userName:"",password:""},validationSchema:m.f,onSubmit:function(e){r(e.userName,e.password)}});return Object(i.useEffect)((function(){localStorage.getItem("loginMessage")&&(E(localStorage.getItem("loginMessage")),localStorage.removeItem("loginMessage"))})),Object(p.jsxs)(p.Fragment,{children:[b?Object(p.jsx)(j.a,{}):null,b?Object(p.jsxs)("button",{className:"CloseHelp",onClick:function(){q(!1)},children:[Object(p.jsx)(h.B,{})," "]}):null,Object(p.jsx)("div",{className:"LoginBg",children:Object(p.jsxs)("div",{className:"Login",children:[Object(p.jsx)("div",{className:"Login-top",children:Object(p.jsx)("img",{src:s.a,className:"Login-top-img",alt:"logo top"})}),Object(p.jsxs)("div",{className:"Login-middle",children:[Object(p.jsxs)("div",{className:"Login-middle-left",children:[Object(p.jsx)("img",{src:d,alt:"Device ",className:"Login-middle-left-img"}),Object(p.jsxs)(t.b,{to:"/",className:"Login-middle-left-help",onClick:function(){q(!0)},children:[Object(p.jsx)(h.m,{}),"  Bantuan"]})]}),Object(p.jsxs)("div",{className:"Login-middle-right",children:[Object(p.jsxs)("div",{className:"Login-middle-right-heading mb-small",children:[Object(p.jsx)("h1",{children:"Mulai Kelola Pelanggan Anda Sekarang."}),localStorage.getItem("loginMessage")?Object(p.jsx)("p",{children:localStorage.getItem("loginMessage")}):null]}),Object(p.jsxs)("form",{className:"Login-middle-right-form",onSubmit:v.handleSubmit,children:[Object(p.jsx)(o.a,{placeholder:"User Name",type:"text",name:"userName",onChange:v.handleChange,value:v.values.userName,className:"Input-control Input-control__with-focus mb-tiny",isError:v.touched.userName&&Boolean(v.errors.userName),message:v.touched.userName&&v.errors.userName}),Object(p.jsx)(o.a,{placeholder:"Password",type:O?"text":"password",name:"password",onChange:v.handleChange,value:v.values.password,className:"Input-control Input-control__with-focus mb-tiny",isError:v.touched.password&&Boolean(v.errors.password),message:v.touched.password&&v.errors.password}),Object(p.jsxs)("div",{className:"Login-middle-right-form-checkbox",children:[Object(p.jsx)(o.a,{type:"checkbox",name:"showPassword",onChange:function(e){e.currentTarget.checked?y(!0):y(!1)}}),Object(p.jsx)("label",{children:"Show Password"})]}),Object(p.jsx)("button",{className:"btn btn-login",type:"submit",children:"Login"})]})]})]}),a&&Object(p.jsx)(c.a,{}),Object(p.jsx)("div",{className:"Login-bottom"})]})})]})}))},359:function(e,r,a){"use strict";a(2),a(360);var n=a(0);r.a=function(){return Object(n.jsx)("div",{className:"HelpOverlay",children:Object(n.jsxs)("div",{className:"HelpOverlay-content",children:[Object(n.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(n.jsx)("h2",{children:"Registrasi"}),Object(n.jsxs)("p",{children:["Pada halaman utama (Login), klik pada tulisan ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Daftar Sekarang"})," untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:"]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"E-Mail"}),Object(n.jsx)("li",{children:"Password"}),Object(n.jsx)("li",{children:"Confirm Password (isi harus sama dengan password)"}),Object(n.jsx)("li",{children:"Your Name (Nama Anda)"}),Object(n.jsx)("li",{children:"Your Brand Name (Nama Brand Anda)"}),Object(n.jsx)("li",{children:"Phone Number (Nomor Telepon yang terhubung dengan Brand Anda)"}),Object(n.jsx)("li",{children:"Address (Alamat Brand Anda)"}),Object(n.jsx)("li",{children:"Photo (Foto atau Gambar Logo dari Brand Anda)"})]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("p",{children:["Setelah mengisi delapan kolom di atas, klik ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Sign Up"})," untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"})," untuk masuk."]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("p",{children:["Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"}),". Jika berhasil, Anda akan dialihkan ke halaman Dashboard."]})]})})}},360:function(e,r,a){},878:function(e,r,a){}}]);
//# sourceMappingURL=62.72ea2a12.chunk.js.map