(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[19],{475:function(e,t,n){},476:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=o=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},c=function(e,t,n){var o,a=e.textContent;return""===a.trim()?{chunk:(o=n,{text:" ",inlines:[new r.OrderedSet],entities:[o],blocks:[]})}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},i=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},l=function(){return{text:"",inlines:[],entities:[],blocks:[]}},s=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},m=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},p=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),f={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function g(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var h=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,o.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,o.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return v}));var b=" ",j=new RegExp("&nbsp;","g"),y=!0;function O(e,t,n,r,a,b){var j=e.nodeName.toLowerCase();if(b){var v=b(j,e);if(v){var x=o.Entity.__create(v.type,v.mutability,v.data||{});return{chunk:d(x)}}}if("#text"===j&&"\n"!==e.textContent)return c(e,t,a);if("br"===j)return{chunk:i()};if("img"===j&&e instanceof HTMLImageElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.alt=e.alt,T.height=e.style.height,T.width=e.style.width,e.style.float&&(T.alignment=e.style.float);var S=o.Entity.__create("IMAGE","MUTABLE",T);return{chunk:d(S)}}if("video"===j&&e instanceof HTMLVideoElement){var E={};E.src=e.getAttribute&&e.getAttribute("src")||e.src,E.alt=e.alt,E.height=e.style.height,E.width=e.style.width,e.style.float&&(E.alignment=e.style.float);var w=o.Entity.__create("VIDEO","MUTABLE",E);return{chunk:d(w)}}if("iframe"===j&&e instanceof HTMLIFrameElement){var _={};_.src=e.getAttribute&&e.getAttribute("src")||e.src,_.height=e.height,_.width=e.width;var N=o.Entity.__create("EMBEDDED_LINK","MUTABLE",_);return{chunk:d(N)}}var C,M=function(e,t){var n=p.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(j,r);M&&("ul"===j||"ol"===j?(r=j,n+=1):("unordered-list-item"!==M&&"ordered-list-item"!==M&&(r="",n=-1),y?(C=s(M,g(e)),y=!1):C=u(M,n,g(e)))),C=C||l(),t=function(e,t,n){var o,r=f[e];if(r)o=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var a=t;o=(o=n).withMutations((function(e){var t=a.style.color,n=a.style.backgroundColor,o=a.style.fontSize,r=a.style.fontFamily.replace(/^"|"$/g,""),c=a.style.fontWeight,i=a.style.textDecoration,l=a.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),o&&e.add("fontsize-".concat(o.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===c&&e.add(f.strong),"underline"===i&&e.add(f.ins),"italic"===l&&e.add(f.em)})).toOrderedSet()}return o}(j,e,t);for(var k=e.firstChild;k;){var L=O(k,t,n,r,h(k)||a,b).chunk;C=m(C,L),k=k.nextSibling}return{chunk:C}}function v(e,t){var n,c,i,l=(n=t,c=e.trim().replace(j,b),(i=a(c))?(y=!0,{chunk:O(i,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(l){var s=l.chunk,u=new r.OrderedMap({});s.entities&&s.entities.forEach((function(e){e&&(u=u.set(e,o.Entity.__get(e)))}));var d=0;return{contentBlocks:s.text.split("\r").map((function(e,t){var n=d+e.length,a=s&&s.inlines.slice(d,n),c=s&&s.entities.slice(d,n),i=new r.List(a.map((function(e,t){var n={style:e,entity:null};return c[t]&&(n.entity=c[t]),o.CharacterMetadata.create(n)})));return d=n,new o.ContentBlock({key:Object(o.genKey)(),type:s&&s.blocks[t]&&s.blocks[t].type||"unstyled",depth:s&&s.blocks[t]&&s.blocks[t].depth,data:s&&s.blocks[t]&&s.blocks[t].data||new r.Map({}),text:e,characterList:i})})),entityMap:u}}return null}}],n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var o,r}(n(179),n(122))},515:function(e,t,n){"use strict";n.r(t);var o=n(14),r=n(2),a=n(91),c=(n(475),n(119)),i=n(6),l=n(99),s=n(88),u=n(16),d=n(100),m=n(94),p=n(18),f=n.n(p),g=n(213),h=n.n(g),b=n(178),j=n(122),y=(n(252),n(180)),O=n.n(y),v=(n(261),n(476)),x=n.n(v),T=n(1);t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,o,r,a,c,i,s,u,d,m){return e(Object(l.e)(t,n,o,r,a,c,i,s,u,d,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,l=j.EditorState.createEmpty(),u=Object(r.useState)(l),p=Object(o.a)(u,2),g=(p[0],p[1],Object(r.useState)(l)),y=Object(o.a)(g,2),v=y[0],S=y[1],E=function(e){S(e)},w=Object(r.useState)(!0),_=Object(o.a)(w,2),N=_[0],C=_[1],M=Object(r.useState)(),k=Object(o.a)(M,2),L=k[0],I=k[1],A=Object(r.useState)(),B=Object(o.a)(A,2),D=B[0],P=B[1],H=Object(r.useState)(),V=Object(o.a)(H,2),F=V[0],U=V[1],R=Object(r.useState)(""),K=Object(o.a)(R,2),q=K[0],J=K[1],z=Object(r.useState)(h.a.createEmptyValue()),G=Object(o.a)(z,2),W=(G[0],G[1],Object(r.useState)(h.a.createEmptyValue())),$=Object(o.a)(W,2),Y=$[0],Q=$[1],X=Object(i.g)(),Z=JSON.parse(localStorage.getItem("userData")).email,ee=localStorage.getItem("contentSelected"),te={whereKeyValues:{cobrandEmail:Z}};return Object(r.useEffect)((function(){if(C(!0),console.log(ee),ee){var e={whereKeyValues:{cobrandEmail:Z,_id:ee}};f()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),P(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");console.log("Ini adalah con1 outer"+n.outerHTML),console.log("Ini adalah con1 inner"+n.innerHTML);var o=x()(n.innerHTML);Q(h.a.createValueFromString(n.outerHTML,"html")),J(n.outerHTML),S(j.EditorState.createWithContent(j.ContentState.createFromBlockArray(o.contentBlocks,o.entityMap)));var r=(new DOMParser).parseFromString(e.data.contentDescription,"text/html");console.log(r);var a=r.getElementById("contentDescription");console.log(a)}else if("Image"===e.data.contents[0].contentType){var c=t.getElementsByTagName("img")[0].toString();J(c.src)}else if("Video"===e.data.contents[0].contentType){var i=t.getElementsByTagName("iframe")[0];J(i.src)}else if("Pdf"===e.data.contents[0].contentType){var l=t.getElementsByTagName("iframe")[0].src;l.includes("&embedded=true")&&(l=l.replace("&embedded=true","")),l.includes("http://docs.google.com/gview?url=")&&(l=l.replace("http://docs.google.com/gview?url=","")),J(l)}var s=e.data.contents[0].startDate.split("T")[0];console.log(s),U(s),f()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:te,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),I(e.data.programs),C(!1)})).catch((function(e){console.log(e),C(!1)}))})).catch((function(e){console.log(e),C(!1)}))}}),[]),N?Object(T.jsx)(s.a,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(a.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/edit",name:"Edit Selected content"}]}),Object(T.jsx)(c.a,{initialValues:{programId:D.programId,contentName:D.contentName,contentDescription:D.contentDescription,contentType:D.contentType,contentSource:D.contentSource,contents:q,startDate:F},validationSchema:d.b,validateOnChange:!0,onSubmit:function(e){t(ee,Z,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,X)},children:function(e){var t=e.handleChange,n=e.handleSubmit,o=e.handleBlur,r=e.setFieldValue,a=e.values,c=e.errors,i=e.touched;return Object(T.jsx)("form",{onSubmit:n,children:Object(T.jsxs)("div",{className:"EditContent",children:[Object(T.jsxs)("h1",{children:["Edit Selected Content: ",D.contentName]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Content Type"}),Object(T.jsxs)("select",{name:"contentType",value:a.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(T.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(T.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(T.jsx)("option",{value:"Image",children:"Image"}),Object(T.jsx)("option",{value:"Video",children:"Video"}),Object(T.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Program Name"}),Object(T.jsxs)("select",{name:"programId",value:a.programId,onChange:t,children:[Object(T.jsx)("option",{value:"",disabled:!0,children:"Select Program"}),L?L.map((function(e){return Object(T.jsx)("option",{value:e._id,children:e.programName})})):null]})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Title"}),Object(T.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentName,onChange:t,onBlur:o}),i.contentName&&Object(T.jsx)("span",{className:"message__error",children:c.contentName})]}),Object(T.jsx)("div",{className:"form-group"}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Source"}),Object(T.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentSource,onChange:t,onBlur:o}),i.contentSource&&Object(T.jsx)("span",{className:"message__error",children:c.contentSource})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Photo"}),Object(T.jsx)("img",{className:"photo",src:D.contentThumbnail}),Object(T.jsx)("br",{}),Object(T.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:o,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{children:"Contents"}),"Artikel"===a.contentType?Object(T.jsx)(b.Editor,{editorState:v,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:E,values:a.contents,name:"contents",onChange:function(e){Q(a.contents),r("contents",O()(Object(j.convertToRaw)(v.getCurrentContent()))),console.log(Y),console.log(a.contents),console.log(v)}}):null,"Image"===a.contentType?Object(T.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:o,value:a.contents,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contents",t))}}):null,"Video"===a.contentType?Object(T.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:a.contents,onChange:t,onBlur:o}):null,"Pdf"===a.contentType?Object(T.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:a.contents,onChange:t,onBlur:o}):null,i.contents&&Object(T.jsx)("span",{className:"message__error",children:c.contents})]}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Content"})})]})})}}),n?Object(T.jsx)(s.a,{}):null]})}))}}]);
//# sourceMappingURL=19.9ded2896.chunk.js.map