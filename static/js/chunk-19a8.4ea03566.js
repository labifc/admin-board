(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19a8"],{"+cAF":function(t,e,a){"use strict";a.r(e);var l=a("W4RF"),n=a("t+zZ");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("1oCr");var r=a("KHd+"),s=Object(r.a)(n.default,l.a,l.b,!1,null,"ca304c3a",null);s.options.__file="index.vue",e.default=s.exports},"1oCr":function(t,e,a){"use strict";var l=a("3bXv");a.n(l).a},"3bXv":function(t,e,a){},W4RF:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meta-data-details"},[a("el-row",{staticClass:"header",attrs:{gutter:10}},[a("el-col",{attrs:{span:24}},[a("div",[t._v("\n        "+t._s(t.$route.query.name||t.tableItem.name)+"\n      ")]),t._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{plain:""}},[t._v("数据探查")]),t._v(" "),a("el-button",{attrs:{plain:""}},[t._v("数据预览")]),t._v(" "),a("el-button",{attrs:{plain:""}},[t._v("导出")]),t._v(" "),a("el-button",{attrs:{plain:""}},[t._v("血统分析")]),t._v(" "),a("el-button",{attrs:{plain:""}},[t._v("影响分析")])],1)])],1),t._v(" "),a("div",{staticClass:"info-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"info-table"},[a("tbody",t._l(t.tableRow,function(e,l){return a("tr",{key:l,staticClass:"info-row"},[a("td",{staticClass:"info-label",attrs:{width:"120"}},[t._v(t._s(e.label))]),t._v(" "),a("td",{staticClass:"info-content"},[t._v(t._s(t.tableItem[e.field]))])])}))])])]),t._v(" "),a("div",{staticClass:"info-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"panel-body"},[a("el-table",{attrs:{data:t.relationData,border:""}},[a("el-table-column",{attrs:{prop:"relationType",label:"关系类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"application",label:"应用"}}),t._v(" "),a("el-table-column",{attrs:{prop:"objType",label:"对象类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"linkObj",label:"链接对象"}}),t._v(" "),a("el-table-column",{attrs:{prop:"relationPath",label:"关系路径"}}),t._v(" "),a("el-table-column",{attrs:{prop:"relationDesc",label:"关系描述"}})],1)],1)]),t._v(" "),a("div",{staticClass:"info-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"panel-body"},[a("el-table",{attrs:{data:t.versionData,border:""}},[a("el-table-column",{attrs:{prop:"editor",label:"修改人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"修改备注"}}),t._v(" "),a("el-table-column",{attrs:{prop:"modifyTime",label:"修改时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdTime",label:"创建时间"}})],1)],1)])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-header"},[e("span",[this._v("基本信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-header"},[e("span",[this._v("关系")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-header"},[e("span",[this._v("版本信息")])])}];a.d(e,"a",function(){return l}),a.d(e,"b",function(){return n})},gLbK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MetaDataDetails",data:function(){return{tableItem:{name:"ACCT_ACCOUNTING_ITEM",application:"Oracle",environment:"ODS",type:"表",path:"ODS库/模式/ODS/表/ACCT_ACCOUNTING_ITEM",owner:"PROC_ODS_22",tableName:"ACCT_ACCOUNTING_ITEM",desc:"基金会计核算指标"},tableRow:[{label:"名称",field:"name"},{label:"应用",field:"application"},{label:"环境",field:"environment"},{label:"类型",field:"type"},{label:"路径",field:"path"},{label:"拥有者",field:"owner"},{label:"表名",field:"tableName"},{label:"描述",field:"desc"}],relationData:[{relationType:"Owned By",application:"Oracle",objType:"表",linkObj:"ACCT_ACCOUNTING_TRAN_copy1",relationPath:"ODS库/模式/ODS/表",relationDesc:"会计核算"}],versionData:[{editor:"管理员",remark:"更新修改",modifyTime:"2017-11-03",createdTime:"2017-11-03"}]}}}},"t+zZ":function(t,e,a){"use strict";a.r(e);var l=a("gLbK"),n=a.n(l);for(var i in l)"default"!==i&&function(t){a.d(e,t,function(){return l[t]})}(i);e.default=n.a}}]);