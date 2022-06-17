(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[53],{113:function(e,r,a){"use strict";var i=a(2),n=(a(115),a(0));function t(e){var r=e.placeholder,a=e.type,i=e.onChange,t=e.onBlur,s=e.value,d=e.className,o=e.message,c=e.name,u=e.min,l=e.max,m=e.disabled,g=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:c,id:c,className:d,placeholder:r,onChange:i,onBlur:t,value:s,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"date"===a||"datetime-local"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:c,className:d,type:a,placeholder:r,onChange:i,onBlur:t,value:s,min:u,max:"9999-12-31",disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):"number"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:c,className:d,type:a,onChange:i,onBlur:t,value:s,min:u,max:l,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:c,className:d,type:a,placeholder:r,onChange:i,onBlur:t,value:s,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:o})})]})}r.a=Object(i.memo)(t)},115:function(e,r,a){},120:function(e,r,a){"use strict";a.d(r,"f",(function(){return t})),a.d(r,"g",(function(){return s})),a.d(r,"e",(function(){return d})),a.d(r,"k",(function(){return o})),a.d(r,"l",(function(){return c})),a.d(r,"o",(function(){return u})),a.d(r,"b",(function(){return l})),a.d(r,"c",(function(){return m})),a.d(r,"p",(function(){return g})),a.d(r,"i",(function(){return h})),a.d(r,"a",(function(){return p})),a.d(r,"h",(function(){return j})),a.d(r,"j",(function(){return b})),a.d(r,"n",(function(){return q})),a.d(r,"d",(function(){return f})),a.d(r,"m",(function(){return x}));var i=a(141),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,t=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),password:i.g("Enter your password").required("Password is required")}),s=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),accountName:i.g("Enter your name").required("Name is required"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),d=i.f({email:i.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:i.g("Enter your brand name").required("Brand name is required"),thumbnail:i.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:i.g("Enter your address").required("Address is required"),password:i.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:i.g("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),o=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),programThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),category:i.g(),targetAudiance:i.a().min(1,"Pilih minimal 1"),contentPrograms:i.a().min(1).of(i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi"),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),answerKey:i.g().when("category",{is:"Ujian",then:i.g().required("Kunci Jawaban harus diisi"),otherwise:i.g()})}))}),c=i.f({programName:i.g("Enter your program title").required("Program title is required"),programDescription:i.g("Enter the program description").required("Program description is required"),startDate:i.c("Insert start date").required("Date is required")}),u=i.f({namaTahapan:i.g().required("Nama Tahapan harus diisi"),contentName:i.g().required("Judul Tahapan harus diisi"),contents:i.g().required("Isi Tahapan harus diisi")}),l=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description").required("Content description is required"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),contentThumbnail:i.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:i.c("Insert start date").required("Date is required"),endDate:i.c("Insert end date").required("Date is required"),isActive:i.b(),topics:i.a().min(1),targetAudience:i.a().min(1)}),m=i.f({contentName:i.g("Enter your content title").required("Content title is required"),contentDescription:i.g("Enter the content description").required("Content description is required"),contents:i.g("Enter the content description").required("Content is required"),contentSource:i.g("Enter the content source").required("Content source is required"),startDate:i.c("Insert start date").required("Date is required")}),g=i.f({nameUser:i.g("Enter your content title").required("User name is required"),emailUser:i.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:i.c("Insert start date").required("Date is required")}),h=i.f({destination:i.a().min(1),messageSubject:i.g("Enter the message subject").required("Message Subject is required"),messageContent:i.g("Enter the message content").required("Message Content is required"),scheduleTime:i.c("Insert start date").required("Date is required"),mediaType:i.g("Enter the media type").required("Media type is required"),category:i.g("Enter the category").required("Category is required")}),p=i.f({audianceName:i.g("Enter your audience name").required("Audience Name is required")}),j=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),b=i.f({category:i.g("Enter category name").required("Category is required"),description:i.g("Enter description").required("Description is required")}),q=i.f({emailUser:i.g("Enter your email").required("Email is required").email("Email not valid"),userName:i.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:i.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:i.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=i.f({topicName:i.g("Enter topic name").required("Topic Name is required")}),x=i.f({controlParameterName:i.g("Enter category name").required("Category is required"),controlParameterValue:i.e().required("Number is required")})},1367:function(e,r,a){"use strict";a.r(r);var i=a(9),n=a(2),t=a(7),s=(a(875),a(39)),d=a(355),o=a(113),c=a(29),u=a(138),l=a(120),m=a(17),g=a(24),h=a(3),p=a(356),j=a(0);r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onLogin:function(r,a){return e(Object(g.a)(r,a))}}}))((function(e){var r=e.onLogin,a=e.isLoading,m=Object(n.useState)(!1),g=Object(i.a)(m,2),b=g[0],q=g[1],f=Object(n.useState)(!1),x=Object(i.a)(f,2),O=x[0],y=x[1],N=Object(n.useState)(),E=Object(i.a)(N,2),w=(E[0],E[1]),v=Object(u.b)({initialValues:{email:"",password:""},validationSchema:l.f,onSubmit:function(e){r(e.email,e.password)}});return Object(n.useEffect)((function(){localStorage.getItem("loginMessage")&&(w(localStorage.getItem("loginMessage")),localStorage.removeItem("loginMessage"))})),Object(j.jsxs)(j.Fragment,{children:[b?Object(j.jsx)(p.a,{}):null,b?Object(j.jsxs)("button",{className:"CloseHelp",onClick:function(){q(!1)},children:[Object(j.jsx)(h.B,{})," "]}):null,Object(j.jsx)("div",{className:"LoginBg",children:Object(j.jsxs)("div",{className:"Login",children:[Object(j.jsx)("div",{className:"Login-top",children:Object(j.jsx)("img",{src:s.a,className:"Login-top-img",alt:"logo top"})}),Object(j.jsxs)("div",{className:"Login-middle",children:[Object(j.jsxs)("div",{className:"Login-middle-left",children:[Object(j.jsx)("img",{src:d.a,alt:"Device ",className:"Login-middle-left-img"}),Object(j.jsxs)(t.b,{to:"/",className:"Login-middle-left-help",onClick:function(){q(!0)},children:[Object(j.jsx)(h.l,{}),"  Bantuan"]})]}),Object(j.jsxs)("div",{className:"Login-middle-right",children:[Object(j.jsxs)("div",{className:"Login-middle-right-heading mb-small",children:[Object(j.jsx)("h1",{children:"Mulai Kelola Pelanggan Anda Sekarang."}),localStorage.getItem("loginMessage")?Object(j.jsx)("p",{children:localStorage.getItem("loginMessage")}):null]}),Object(j.jsxs)("form",{className:"Login-middle-right-form",onSubmit:v.handleSubmit,children:[Object(j.jsx)(o.a,{placeholder:"Your E-mail (example@mail.com)",type:"text",name:"email",onChange:v.handleChange,value:v.values.email,className:"Input-control Input-control__with-focus mb-tiny",isError:v.touched.email&&Boolean(v.errors.email),message:v.touched.email&&v.errors.email}),Object(j.jsx)(o.a,{placeholder:"Password",type:O?"text":"password",name:"password",onChange:v.handleChange,value:v.values.password,className:"Input-control Input-control__with-focus mb-tiny",isError:v.touched.password&&Boolean(v.errors.password),message:v.touched.password&&v.errors.password}),Object(j.jsxs)("div",{className:"Login-middle-right-form-checkbox",children:[Object(j.jsx)(o.a,{type:"checkbox",name:"showPassword",onChange:function(e){e.currentTarget.checked?y(!0):y(!1)}}),Object(j.jsx)("label",{children:"Show Password"})]}),Object(j.jsx)("button",{className:"btn btn-login",type:"submit",children:"Login"})]})]})]}),a&&Object(j.jsx)(c.a,{}),Object(j.jsx)("div",{className:"Login-bottom"})]})})]})}))},355:function(e,r,a){"use strict";r.a=a.p+"static/media/device2.69f8ea4a.png"},356:function(e,r,a){"use strict";a(2),a(357);var i=a(0);r.a=function(){return Object(i.jsx)("div",{className:"HelpOverlay",children:Object(i.jsxs)("div",{className:"HelpOverlay-content",children:[Object(i.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(i.jsx)("h2",{children:"Registrasi"}),Object(i.jsxs)("p",{children:["Pada halaman utama (Login), klik pada tulisan ",Object(i.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Daftar Sekarang"})," untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:"]}),Object(i.jsx)("p",{children:Object(i.jsx)("br",{})}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"E-Mail"}),Object(i.jsx)("li",{children:"Password"}),Object(i.jsx)("li",{children:"Confirm Password (isi harus sama dengan password)"}),Object(i.jsx)("li",{children:"Your Name (Nama Anda)"}),Object(i.jsx)("li",{children:"Your Brand Name (Nama Brand Anda)"}),Object(i.jsx)("li",{children:"Phone Number (Nomor Telepon yang terhubung dengan Brand Anda)"}),Object(i.jsx)("li",{children:"Address (Alamat Brand Anda)"}),Object(i.jsx)("li",{children:"Photo (Foto atau Gambar Logo dari Brand Anda)"})]}),Object(i.jsx)("p",{children:Object(i.jsx)("br",{})}),Object(i.jsxs)("p",{children:["Setelah mengisi delapan kolom di atas, klik ",Object(i.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Sign Up"})," untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman ",Object(i.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"})," untuk masuk."]}),Object(i.jsx)("p",{children:Object(i.jsx)("br",{})}),Object(i.jsx)("p",{children:Object(i.jsx)("br",{})}),Object(i.jsx)("h2",{children:"Login"}),Object(i.jsxs)("p",{children:["Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol ",Object(i.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"}),". Jika berhasil, Anda akan dialihkan ke halaman Dashboard."]})]})})}},357:function(e,r,a){},875:function(e,r,a){}}]);
//# sourceMappingURL=53.e6e98cae.chunk.js.map