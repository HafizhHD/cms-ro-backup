(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[58],{102:function(e,a,t){"use strict";var c=t(2),i=(t(103),t(0));function n(e){var a=e.placeholder,t=e.type,c=e.onChange,n=e.onBlur,l=e.value,s=e.className,o=e.message,d=e.name,r=e.min,u=e.max,m=e.disabled,j=e.isError;return"textarea"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("textarea",{name:d,id:d,className:s,placeholder:a,onChange:c,onBlur:n,value:l,disabled:m}),j&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"date"===t||"datetime-local"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:d,className:s,type:t,placeholder:a,onChange:c,onBlur:n,value:l,min:r,max:"9999-12-31",disabled:m}),j&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):"number"===t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:d,className:s,type:t,onChange:c,onBlur:n,value:l,min:r,max:u,disabled:m}),j&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{name:d,className:s,type:t,placeholder:a,onChange:c,onBlur:n,value:l,disabled:m}),j&&Object(i.jsx)("div",{className:"message",children:Object(i.jsx)("span",{className:"message__error",children:o})})]})}a.a=Object(c.memo)(n)},103:function(e,a,t){},104:function(e,a,t){},1304:function(e,a,t){},135:function(e,a,t){"use strict";function c(e,a,t,c,i,n,l){try{var s=e[n](l),o=s.value}catch(d){return void t(d)}s.done?a(o):Promise.resolve(o).then(c,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,n){var l=e.apply(a,t);function s(e){c(l,i,n,s,o,"next",e)}function o(e){c(l,i,n,s,o,"throw",e)}s(void 0)}))}}t.d(a,"a",(function(){return i}))},1500:function(e,a,t){"use strict";t.r(a);var c=t(7),i=t(2),n=t(95),l=(t(1304),t(104),t(745)),s=t.n(l),o=t(139),d=t(6),r=t(99),u=t(122),m=t(35),j=t(17),h=t(102),p=(t(37),t(0));a.default=Object(j.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{onChildControl:function(a,t,c,i,n,l,s,o){return e(Object(u.n)(a,t,c,i,n,l,s,o))}}}))((function(e){var a=e.onChildControl,t=e.isLoading,l=Object(d.g)(),u=(JSON.parse(localStorage.getItem("userData")).cobrandEmail,localStorage.getItem("userNameSelected")),j=localStorage.getItem("userSelected"),b=Object(i.useState)(!0),g=Object(c.a)(b,2),O=g[0],v=g[1],x=Object(i.useState)(!1),k=Object(c.a)(x,2),f=k[0],S=k[1],N=Object(i.useState)([]),C=Object(c.a)(N,2),B=C[0],y=C[1],L=Object(i.useState)("normal"),_=Object(c.a)(L,2),w=_[0],D=_[1],T=Object(i.useState)(!1),U=Object(c.a)(T,2),A=U[0],H=U[1],I=Object(i.useState)([]),P=Object(c.a)(I,2),E=P[0],J=P[1],F=Object(i.useState)(0),M=Object(c.a)(F,2);return M[0],M[1],Object(i.useEffect)((function(){var e={whereKeyValues:{emailUser:j}},a=Object(r.w)(e),t=Object(r.m)(e),c=Object(r.d)(e),i=Object(r.n)(e);Promise.all([a,c,i,t]).then((function(e){var a,t;console.log(e[0]),console.log(e[1]),console.log(e[2]),console.log(e[3]);var c=(null!==(a=e[0].data.appdevices)&&void 0!==a?a:[]).length>0?e[0].data.appdevices[0].appName:[];c.sort((function(e,a){return e.appName>a.appName?1:a.appName>e.appName?-1:0}));for(var i=null!==(t=e[1].data.appUsageLimit)&&void 0!==t?t:[],n=[],l=0;l<c.length;l++){for(var s=0,o=0,d="",r=0;r<i.length&&0===s;r++)i[r].appId===c[l].packageId&&(s=0===i[r].limit?1:2,o=i[r].limit,d=i[r]._id);var u={_id:d,appName:c[l].appName,appCategory:c[l].appCategory,packageId:c[l].packageId,mode:s.toString(),limit:o,isChanged:!1};n.push(u)}console.log(n),y(n);var m=e[2].data.childModeAsuhs;m.length>0&&(D(m[0].modeAsuhName),H(!0));var j=e[3].data.deviceUsageSchedules,h=[];for(l=0;l<j.length;l++)"harian"===j[l].scheduleType&&h.push(j[l]);console.log(h),J(h),setTimeout((function(){console.log(B),v(!1),v(!0),v(!1)}),2e3)}))}),[f]),t||O?Object(p.jsx)(m.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{headingName:"Kontrol Anak: "+u,routes:[{path:"/cms/user",name:"Pengguna"},{path:"/cms/user/child-control",name:"Kontrol Anak"}]}),Object(p.jsx)(o.a,{initialValues:{appLimitBlock:B.slice(),modeAsuhSelected:w,deviceSchedule:E.slice()},onSubmit:function(e){a(j,A,e.appLimitBlock,e.modeAsuhSelected,e.deviceSchedule,S,v,l)},children:function(e){e.handleChange;var a=e.handleSubmit,t=(e.handleBlur,e.setFieldValue),c=e.values;e.errors,e.touched;return Object(p.jsx)("form",{onSubmit:a,children:Object(p.jsxs)("div",{className:"ChildControl",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Mode Asuh"}),Object(p.jsxs)("select",{value:c.modeAsuhSelected,onChange:function(e){t("modeAsuhSelected",e.currentTarget.value),D(e.currentTarget.value)},children:[Object(p.jsx)("option",{value:"normal",children:"Normal"}),Object(p.jsx)("option",{value:"diawasi",children:"Diawasi"}),Object(p.jsx)("option",{value:"dihukum",children:"Dihukum"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Blokir dan Batasi Penggunaan Aplikasi"}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Nama Aplikasi"}),Object(p.jsx)("th",{children:"Status Blokir"}),Object(p.jsx)("th",{children:"Limit Penggunaan (Menit)"})]}),c.appLimitBlock.map((function(e,a){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.appName}),Object(p.jsxs)("td",{onChange:function(e){console.log(e),console.log(c.appLimitBlock[a].mode),t("appLimitBlock.".concat(a,".mode"),e.target.value),t("appLimitBlock.".concat(a,".isChanged"),!0),"2"===e.target.value&&t("appLimitBlock.".concat(a,".limit"),1),console.log(c.appLimitBlock[a].mode)},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",value:"1",name:"block_status_"+a.toString(),checked:"1"===c.appLimitBlock[a].mode||"dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory),disabled:"dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory)}),"Ya"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",value:"0",name:"block_status_"+a.toString(),checked:"0"===c.appLimitBlock[a].mode&&!("dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory)),disabled:"dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory)}),"Tidak"]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",value:"2",name:"block_status_"+a.toString(),checked:"2"===c.appLimitBlock[a].mode&&!("dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory)),disabled:"dihukum"===w||"diawasi"===w&&("social"===c.appLimitBlock[a].appCategory||"game"===c.appLimitBlock[a].appCategory)}),"Pakai Limit Penggunaan"]})]}),Object(p.jsx)("td",{children:Object(p.jsx)(h.a,{name:"limit",className:"form-group__input",type:"number",value:c.appLimitBlock[a].limit,min:1,max:1440,disabled:"2"!==c.appLimitBlock[a].mode,onChange:function(e){t("appLimitBlock.".concat(a,".isChanged"),!0),t("appLimitBlock.".concat(a,".limit"),e.target.value)}})})]})}))]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("label",{children:["Jadwal Pemblokiran ",Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){var e=c.deviceSchedule;e.push({_id:"",scheduleName:"",scheduleDescription:"",scheduleType:"harian",deviceUsageDays:[],deviceUsageStartTime:"00:00",deviceUsageEndTime:"00:01",status:"aktif",willBeRemoved:!1}),t("deviceSchedule",e)},children:"Tambah Jadwal"})})]}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Nama Jadwal"}),Object(p.jsx)("th",{children:"Deskripsi"}),Object(p.jsx)("th",{children:"Harian/Terjadwal"}),Object(p.jsx)("th",{children:"Hari"}),Object(p.jsx)("th",{children:"Waktu Mulai"}),Object(p.jsx)("th",{children:"Waktu Selesai"}),Object(p.jsx)("th",{children:"Action"})]}),c.deviceSchedule.map((function(e,a){if(console.log(e),!e.willBeRemoved)return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(h.a,{name:"scheduleName",className:"form-group__input",value:e.scheduleName,type:"text",onChange:function(e){t("deviceSchedule.".concat(a,".scheduleName"),e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsx)(h.a,{name:"scheduleDescription",className:"form-group__input",value:e.scheduleDescription,type:"text",onChange:function(e){t("deviceSchedule.".concat(a,".scheduleDescription"),e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsx)("select",{onChange:function(e){"harian"===e.target.value?(t("deviceSchedule.".concat(a,".deviceUsageStartTime"),"00:00"),t("deviceSchedule.".concat(a,".deviceUsageEndTime"),"00:01")):(console.log((new Date).toLocaleDateString("id-ID")),t("deviceSchedule.".concat(a,".deviceUsageStartTime"),(new Date).toLocaleDateString("id-ID")),t("deviceSchedule.".concat(a,".deviceUsageEndTime"),(new Date).toLocaleDateString("id-ID"))),t("deviceSchedule.".concat(a,".scheduleType"),e.target.value)},children:Object(p.jsx)("option",{value:"harian",children:"Harian"})})}),Object(p.jsx)("td",{children:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"].map((function(c){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox",name:c,value:c,checked:e.deviceUsageDays.includes(c),onChange:function(c){var i=e.deviceUsageDays,n=i.indexOf(c.target.value);n>=0?i.splice(n,1):i.push(c.target.value),t("deviceSchedule.".concat(a,".deviceUsageDays"),i)}}),c]})}))}),Object(p.jsx)("td",{children:Object(p.jsx)(s.a,{locale:"id-ID",format:"HH:mm",disableClock:!0,value:e.deviceUsageStartTime,onChange:function(e){t("deviceSchedule.".concat(a,".deviceUsageStartTime"),e)}})}),Object(p.jsx)("td",{children:Object(p.jsx)(s.a,{locale:"id-ID",format:"HH:mm",disableClock:!0,value:e.deviceUsageEndTime,onChange:function(e){t("deviceSchedule.".concat(a,".deviceUsageEndTime"),e)}})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{type:"submit",onClick:function(){t("deviceSchedule.".concat(a,".willBeRemoved"),!0)},children:"Hapus"})})]})}))]})]}),Object(p.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Simpan"})]})})}}),t?Object(p.jsx)(m.a,{}):null]})}))},95:function(e,a,t){"use strict";t(2);var c=t(9),i=(t(96),t(0));a.a=function(e){var a=e.headingName,t=e.routes,n=void 0===t?[]:t;return Object(i.jsxs)("div",{className:"Heading",children:[Object(i.jsx)("h1",{children:a}),Object(i.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,a){return e.path?Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(i.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(i.jsx)("span",{children:e.name})," "]},a)}))})]})}},96:function(e,a,t){}}]);
//# sourceMappingURL=58.0ea47868.chunk.js.map