(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[49],{130:function(e,r,a){"use strict";var n=a(2),t=(a(133),a(0));function i(e){var r=e.placeholder,a=e.type,n=e.onChange,i=e.onBlur,s=e.value,o=e.className,c=e.message,d=e.name,l=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("textarea",{name:d,id:d,className:o,placeholder:r,onChange:n,onBlur:i,value:s,disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:d,className:o,type:a,placeholder:r,onChange:n,onBlur:i,value:s,min:l,max:"9999-12-31",disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("input",{name:d,className:o,type:a,placeholder:r,onChange:n,onBlur:i,value:s,disabled:u}),m&&Object(t.jsx)("div",{className:"message",children:Object(t.jsx)("span",{className:"message__error",children:c})})]})}r.a=Object(n.memo)(i)},133:function(e,r,a){},1352:function(e,r,a){"use strict";a.r(r);var n=a(10),t=a(2),i=a(7),s=(a(878),a(39)),o=a(348),c=a(130),d=a(27),l=a(195),u=a(145),m=a(17),g=a(24),j=a(3),p=a(349),b=a(0);r.default=Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onLogin:function(r,a){return e(Object(g.a)(r,a))}}}))((function(e){var r=e.onLogin,a=e.isLoading,m=Object(t.useState)(!1),g=Object(n.a)(m,2),h=g[0],x=g[1],O=Object(t.useState)(!1),f=Object(n.a)(O,2),q=f[0],y=f[1],w=Object(t.useState)(),N=Object(n.a)(w,2),v=(N[0],N[1]),k=Object(l.b)({initialValues:{email:"",password:""},validationSchema:u.d,onSubmit:function(e){r(e.email,e.password)}});return Object(t.useEffect)((function(){localStorage.getItem("loginMessage")&&(v(localStorage.getItem("loginMessage")),localStorage.removeItem("loginMessage"))})),Object(b.jsxs)(b.Fragment,{children:[h?Object(b.jsx)(p.a,{}):null,h?Object(b.jsxs)("button",{className:"CloseHelp",onClick:function(){x(!1)},children:[Object(b.jsx)(j.z,{})," "]}):null,Object(b.jsx)("div",{className:"LoginBg",children:Object(b.jsxs)("div",{className:"Login",children:[Object(b.jsx)("div",{className:"Login-top",children:Object(b.jsx)("img",{src:s.a,className:"Login-top-img",alt:"logo top"})}),Object(b.jsxs)("div",{className:"Login-middle",children:[Object(b.jsxs)("div",{className:"Login-middle-left",children:[Object(b.jsx)("img",{src:o.a,alt:"Device ",className:"Login-middle-left-img"}),Object(b.jsxs)(i.b,{to:"/",className:"Login-middle-left-help",onClick:function(){x(!0)},children:[Object(b.jsx)(j.k,{}),"  Bantuan"]})]}),Object(b.jsxs)("div",{className:"Login-middle-right",children:[Object(b.jsxs)("div",{className:"Login-middle-right-heading mb-small",children:[Object(b.jsx)("h1",{children:"Mulai Kelola Pelanggan Anda Sekarang."}),localStorage.getItem("loginMessage")?Object(b.jsx)("p",{children:localStorage.getItem("loginMessage")}):null]}),Object(b.jsxs)("form",{className:"Login-middle-right-form",onSubmit:k.handleSubmit,children:[Object(b.jsx)(c.a,{placeholder:"Your E-mail (example@mail.com)",type:"text",name:"email",onChange:k.handleChange,value:k.values.email,className:"Input-control Input-control__with-focus mb-tiny",isError:k.touched.email&&Boolean(k.errors.email),message:k.touched.email&&k.errors.email}),Object(b.jsx)(c.a,{placeholder:"Password",type:q?"text":"password",name:"password",onChange:k.handleChange,value:k.values.password,className:"Input-control Input-control__with-focus mb-tiny",isError:k.touched.password&&Boolean(k.errors.password),message:k.touched.password&&k.errors.password}),Object(b.jsxs)("div",{className:"Login-middle-right-form-checkbox",children:[Object(b.jsx)(c.a,{type:"checkbox",name:"showPassword",onChange:function(e){e.currentTarget.checked?y(!0):y(!1)}}),Object(b.jsx)("label",{children:"Show Password"})]}),Object(b.jsx)("button",{className:"btn btn-login",type:"submit",children:"Login"})]})]})]}),a&&Object(b.jsx)(d.a,{}),Object(b.jsx)("div",{className:"Login-bottom"})]})})]})}))},145:function(e,r,a){"use strict";a.d(r,"d",(function(){return i})),a.d(r,"e",(function(){return s})),a.d(r,"c",(function(){return o})),a.d(r,"f",(function(){return c})),a.d(r,"g",(function(){return d})),a.d(r,"a",(function(){return l})),a.d(r,"b",(function(){return u}));var n=a(211),t=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,i=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),password:n.e("Enter your password").required("Password is required")}),s=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),accountName:n.e("Enter your name").required("Name is required"),cobrandName:n.e("Enter your brand name").required("Brand name is required"),thumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.e("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.e("Enter your address").required("Address is required"),password:n.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.e("Confirm your password").required("Password is required").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e},message:"Password doesn't match"})}))}),o=n.d({email:n.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.e("Enter your brand name").required("Brand name is required"),thumbnail:n.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.e("Enter your phone number").required("Phone number is required").matches(t,"Invalid phone number format"),address:n.e("Enter your address").required("Address is required"),password:n.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.e("Confirm your password").when("password",(function(e,r){return r.test({test:function(r){return e&&r===e||!e},message:"Password doesn't match"})}))}),c=n.d({programName:n.e("Enter your program title").required("Program title is required"),programDescription:n.e("Enter the program description").required("Program description is required"),programThumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.b("Insert start date").required("Date is required")}),d=n.d({programName:n.e("Enter your program title").required("Program title is required"),programDescription:n.e("Enter the program description").required("Program description is required"),startDate:n.b("Insert start date").required("Date is required")}),l=n.d({contentName:n.e("Enter your content title").required("Content title is required"),contentDescription:n.e("Enter the content description").required("Content description is required"),contents:n.e("Enter the content description").required("Content description is required"),contentSource:n.e("Enter the content source").required("Content source is required"),contentThumbnail:n.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.b("Insert start date").required("Date is required"),isActive:n.a()}),u=n.d({contentName:n.e("Enter your content title").required("Content title is required"),contentDescription:n.e("Enter the content description").required("Content description is required"),contents:n.e("Enter the content description").required("Content description is required"),contentSource:n.e("Enter the content source").required("Content source is required"),startDate:n.b("Insert start date").required("Date is required")})},348:function(e,r,a){"use strict";r.a=a.p+"static/media/device2.69f8ea4a.png"},349:function(e,r,a){"use strict";a(2),a(350);var n=a(0);r.a=function(){return Object(n.jsx)("div",{className:"HelpOverlay",children:Object(n.jsxs)("div",{className:"HelpOverlay-content",children:[Object(n.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(n.jsx)("h2",{children:"Registrasi"}),Object(n.jsxs)("p",{children:["Pada halaman utama (Login), klik pada tulisan ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Daftar Sekarang"})," untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:"]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"E-Mail"}),Object(n.jsx)("li",{children:"Password"}),Object(n.jsx)("li",{children:"Confirm Password (isi harus sama dengan password)"}),Object(n.jsx)("li",{children:"Your Name (Nama Anda)"}),Object(n.jsx)("li",{children:"Your Brand Name (Nama Brand Anda)"}),Object(n.jsx)("li",{children:"Phone Number (Nomor Telepon yang terhubung dengan Brand Anda)"}),Object(n.jsx)("li",{children:"Address (Alamat Brand Anda)"}),Object(n.jsx)("li",{children:"Photo (Foto atau Gambar Logo dari Brand Anda)"})]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsxs)("p",{children:["Setelah mengisi delapan kolom di atas, klik ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Sign Up"})," untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"})," untuk masuk."]}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("p",{children:Object(n.jsx)("br",{})}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("p",{children:["Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol ",Object(n.jsx)("span",{className:"HelpOverlay-content-keyword",children:"Login"}),". Jika berhasil, Anda akan dialihkan ke halaman Dashboard."]})]})})}},350:function(e,r,a){},878:function(e,r,a){}}]);
//# sourceMappingURL=49.ffe77fc2.chunk.js.map