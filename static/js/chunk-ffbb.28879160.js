(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ffbb"],{MSNs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getToken=function(){return(0,u.default)({url:"/qiniu/upload/token",method:"get"})};var u=function(t){return t&&t.__esModule?t:{default:t}}(n("t3Un"))},Njum:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(n("4d7F")),a=n("MSNs");e.default={data:function(){return{dataObj:{token:"",key:""},image_uri:[],fileList:[]}},methods:{beforeUpload:function(){var t=this;return new u.default(function(e,n){(0,a.getToken)().then(function(n){var u=n.data.qiniu_key,a=n.data.qiniu_token;t._data.dataObj.token=a,t._data.dataObj.key=u,e(!0)}).catch(function(t){console.log(t),n(!1)})})}}}},XPP3:function(t,e,n){"use strict";n.r(e);var u=n("hmHT"),a=n("o4sp");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);var i=n("KHd+"),r=Object(i.a)(a.default,u.a,u.b,!1,null,null,null);r.options.__file="upload.vue",e.default=r.exports},hmHT:function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("el-upload",{attrs:{data:this.dataObj,multiple:!0,"before-upload":this.beforeUpload,action:"https://upload.qbox.me",drag:""}},[e("i",{staticClass:"el-icon-upload"}),this._v(" "),e("div",{staticClass:"el-upload__text"},[this._v("将文件拖到此处，或"),e("em",[this._v("点击上传")])])])},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},o4sp:function(t,e,n){"use strict";n.r(e);var u=n("Njum"),a=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e.default=a.a}}]);