(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb75","chunk-147d"],{"3nNj":function(e,t,a){"use strict";a.r(t);var r=a("fLkj"),l=a("m2qj");for(var n in l)"default"!==n&&function(e){a.d(t,e,function(){return l[e]})}(n);a("Ujmm");var i=a("KHd+"),o=Object(i.a)(l.default,r.a,r.b,!1,null,"8bf26afa",null);o.options.__file="createInterfaceForm.vue",t.default=o.exports},"696Q":function(e,t,a){"use strict";a.r(t);var r=a("YO00"),l=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);t.default=l.a},CbgS:function(e,t,a){},F7Pt:function(e,t,a){"use strict";a.r(t);var r=a("b7+U"),l=a("696Q");for(var n in l)"default"!==n&&function(e){a.d(t,e,function(){return l[e]})}(n);a("auol");var i=a("KHd+"),o=Object(i.a)(l.default,r.a,r.b,!1,null,"0907762f",null);o.options.__file="index.vue",t.default=o.exports},Ujmm:function(e,t,a){"use strict";var r=a("CbgS");a.n(r).a},YO00:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"QueryFormWrap",props:{formName:{type:String,default:"表单元素"}},data:function(){return{}},methods:{}}},auol:function(e,t,a){"use strict";var r=a("rlnp");a.n(r).a},"b7+U":function(e,t,a){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"query-form-wrap"},[t("fieldset",{staticClass:"field"},[t("legend",{staticClass:"title"},[this._v(this._s(this.formName))]),this._v(" "),this._t("default")],2)])},l=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l})},fLkj:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("queryFormWrap",{attrs:{"form-name":e.msg}},[a("el-form",{staticClass:"demo-form-inline",attrs:{rules:e.rules,model:e.formInline,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"interfaceName",label:"接口名称"}},[a("el-input",{model:{value:e.formInline.interfaceName,callback:function(t){e.$set(e.formInline,"interfaceName",t)},expression:"formInline.interfaceName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"dataSource",label:"数据源"}},[a("el-select",{model:{value:e.formInline.dataSource,callback:function(t){e.$set(e.formInline,"dataSource",t)},expression:"formInline.dataSource"}},[a("el-option",{attrs:{label:"ODS_DB",value:"ODS_DB"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"接口状态"}},[a("el-select",{model:{value:e.formInline.interfaceStatus,callback:function(t){e.$set(e.formInline,"interfaceStatus",t)},expression:"formInline.interfaceStatus"}},[a("el-option",{attrs:{label:"生效",value:"success"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"variableDirectory",label:"变量目录"}},[a("el-input",{model:{value:e.formInline.variableDirectory,callback:function(t){e.$set(e.formInline,"variableDirectory",t)},expression:"formInline.variableDirectory"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"interfaceType",label:"接口类型"}},[a("el-select",{model:{value:e.formInline.interfaceType,callback:function(t){e.$set(e.formInline,"interfaceType",t)},expression:"formInline.interfaceType"}},[a("el-option",{attrs:{label:"SQL查询语句",value:"sql"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"缓存时间"}},[a("el-input-number",{staticClass:"min-input-number",attrs:{min:1,max:10,"controls-position":"right"},on:{change:e.handleChange},model:{value:e.formInline.cacheTime,callback:function(t){e.$set(e.formInline,"cacheTime",t)},expression:"formInline.cacheTime"}}),e._v(" "),a("el-select",{staticClass:"min-select",attrs:{placeholder:"天"},model:{value:e.formInline.cacheUnit,callback:function(t){e.$set(e.formInline,"cacheUnit",t)},expression:"formInline.cacheUnit"}},[a("el-option",{attrs:{label:"天",value:"day"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"接口分类"}},[a("el-select",{model:{value:e.formInline.interfaceClassification,callback:function(t){e.$set(e.formInline,"interfaceClassification",t)},expression:"formInline.interfaceClassification"}},[a("el-option",{attrs:{label:"接口分类1",value:"type1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"sql语句"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formInline.sqlShell,callback:function(t){e.$set(e.formInline,"sqlShell",t)},expression:"formInline.sqlShell"}})],1)],1)],1)],1)],1),e._v(" "),a("queryFormWrap",{attrs:{"form-name":e.inputData}},[a("el-table",{attrs:{data:e.outputTableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"字段名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"chineseName",label:"中文名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"defaults",label:"默认值"}}),e._v(" "),a("el-table-column",{attrs:{prop:"format",label:"格式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order",label:"顺序"}})],1)],1),e._v(" "),a("queryFormWrap",{attrs:{"form-name":e.outputData}},[a("el-table",{attrs:{data:e.inputTableData,border:""}},[a("el-table-column",{attrs:{prop:"username",label:"字段名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"usertype",label:"中文名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cardtype",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cardnum",label:"格式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order",label:"顺序"}})],1)],1)],1)},l=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l})},m2qj:function(e,t,a){"use strict";a.r(t);var r=a("t2RO"),l=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);t.default=l.a},rlnp:function(e,t,a){},t2RO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(a("F7Pt"));t.default={name:"CreateInterfaceForm",components:{queryFormWrap:r.default},props:{msg:{type:String,default:"基本信息"},inputData:{type:String,default:"输入参数"},outputData:{type:String,default:"输出参数"}},data:function(){return{formInline:{interfaceName:"",dataSource:"ODS_DB",interfaceStatus:"生效",variableDirectory:"规则变量客户信息",interfaceType:"SQL查询语句",sqlShell:"",cacheTime:"",cacheUnit:"天",interfaceClassification:"接口分类1"},num1:1,outputTableData:[{name:"",chineseName:"",type:"",defaults:"",format:"",order:""}],inputTableData:[{name:"",chineseName:"",type:"",format:"",order:""}],rules:{interfaceName:[{required:!0,message:"请输入接口名称",trigger:"blur"}],dataSource:[{required:!0,message:"请选择数据源",trigger:"blur"}],variableDirectory:[{required:!0,message:"请选输入变量目录",trigger:"blur"}],interfaceType:[{required:!0,message:"请选择接口类型",trigger:"blur"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{onSubmit:function(){console.log("submit!")},handleChange:function(e){console.log(e)}}}}}]);