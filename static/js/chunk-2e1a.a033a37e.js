(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2e1a"],{VeOo:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-bottom":"15px"}},[t._v(t._s(t.$t("permission.roles"))+"： "+t._s(t.roles))]),t._v("\n  "+t._s(t.$t("permission.switchRoles"))+"：\n  "),n("el-radio-group",{model:{value:t.switchRoles,callback:function(e){t.switchRoles=e},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),t._v(" "),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},jujd:function(t,e,n){"use strict";n.r(e);var o=n("VeOo"),i=n("nzvI");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n("KHd+"),u=Object(r.a)(i.default,o.a,o.b,!1,null,null,null);u.options.__file="SwitchRoles.vue",e.default=u.exports},nzvI:function(t,e,n){"use strict";n.r(e);var o=n("sHiK"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=i.a},sHiK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(t){var e=this;this.$store.dispatch("ChangeRoles",t).then(function(){e.$emit("change")})}}}}}}]);