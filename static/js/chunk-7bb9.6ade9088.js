(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7bb9","chunk-147d","chunk-129e","chunk-5018","chunk-72b1","chunk-2700"],{"0UeF":function(t,e,n){"use strict";var a=n("cMv6");n.n(a).a},"1f8i":function(t,e,n){"use strict";var a=n("UbHu");n.n(a).a},"2z59":function(t,e,n){"use strict";n.r(e);var a=n("Htsi"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},"3Ks7":function(t,e,n){},"5h3d":function(t,e,n){"use strict";n.r(e);var a=n("kGJZ"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},"696Q":function(t,e,n){"use strict";n.r(e);var a=n("YO00"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},"7ZdF":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(n("8r0Q")),i=o(n("FyLU")),r=o(n("T/2i"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RuleCategory",components:{queryForm:a.default,dataQualityTable:i.default,ruleDialog:r.default},data:function(){return{formName:"规则类别"}},methods:{addBtnClick:function(){this.$refs.ruleDialogEle.setDialog({show:!0,title:"新增核减类别"})},modifyBtnClick:function(t){this.$refs.ruleDialogEle.setDialog({show:!0,title:"修改核减类别"})}}}},"8KD9":function(t,e,n){"use strict";n.r(e);var a=n("yrDL"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},"8r0Q":function(t,e,n){"use strict";n.r(e);var a=n("xobx"),i=n("5h3d");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("Ig9C");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"3acd41e0",null);l.options.__file="queryForm.vue",e.default=l.exports},"9DBd":function(t,e,n){"use strict";n.r(e);var a=n("7ZdF"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},F7Pt:function(t,e,n){"use strict";n.r(e);var a=n("b7+U"),i=n("696Q");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("auol");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"0907762f",null);l.options.__file="index.vue",e.default=l.exports},FyLU:function(t,e,n){"use strict";n.r(e);var a=n("OFvX"),i=n("2z59");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("0UeF");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"7311e1ca",null);l.options.__file="data-quality.vue",e.default=l.exports},GPX3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(n("F7Pt"));e.default={name:"QueryFormWrap",components:{queryFormWrap:a.default},props:{formName:{type:String,default:"表单元素"}},data:function(){return{formInline:{name:"",quality:"",description:""}}},methods:{onSubmit:function(){console.log("submit!")}}}},Htsi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("QbLZ")),i=r(n("Mz3J"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Pagination:i.default},data:function(){return{tableData:[{id:"DQCT01",qualityName:"空值检核",qualityDimension:"完整性",description:"非空检核通过检核一个数据集的特定属性是否为空来衡量数据的准确性。",createDate:"",changeDate:"2013-05-02"},{id:"DQCT02",qualityName:"记录数检核",qualityDimension:"完整性",description:"记录性检核是指各个数据区域相关数据之间的数据总数检核",createDate:"",changeDate:"2013-06-07"},{id:"DQCT03",qualityName:"非法值检核",qualityDimension:"有效性",description:"非法值检核通过检核数据的取值是否在某一范围内来衡量其准确性",createDate:"",changeDate:"2013-06-13"},{id:"DQCT04",qualityName:"数据格式检核",qualityDimension:"有效性",description:"数据格式检核通过检查表中属性值的格式是否正确来衡量其准确性",createDate:"",changeDate:"2013.01.08"},{id:"DQCT05",qualityName:"码值检核",qualityDimension:"准确性",description:"码值检核通过检测字段值在码表中是否真是存在来衡量其准确性",createDate:"",changeDate:"2013.01.08"},{id:"DQCT06",qualityName:"主键重复检核",qualityDimension:"唯一性",description:"主键重复检核通过对某张表中的一个或者多个字段检核",createDate:"",changeDate:"2013.01.08"},{id:"DQCT07",qualityName:"主外键检核",qualityDimension:"一致性",description:"检核某张表以及其关联表的主键和外键关系",createDate:"",changeDate:"2013.01.08"},{id:"DQCT08",qualityName:"总分检核",qualityDimension:"一致性",description:"总分检核用来检查数据的一致性",createDate:"",changeDate:"2013.01.08"},{id:"DQCT09",qualityName:"业务约束检核",qualityDimension:"合理性",description:"检查业务合理性",createDate:"",changeDate:"2013.01.08"}],total:9,queryParams:{page:1,limit:10},defaultParams:{pageSize:10,pageNum:1,sortBy:"",keyWord:"",filterField:""}}},created:function(){},methods:{getTableData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;this.$http.get("/meta/dataQuality",{params:(0,a.default)({},e.defaultParams,t)}).then(function(t){var n=t.data;n=e.handleData(n),e.tableData=n,e.total=Number(t.data.total)})},handleData:function(t){return t.data},modify:function(t){this.$emit("modify",t)}}}},Ig9C:function(t,e,n){"use strict";var a=n("aPVs");n.n(a).a},N5VR:function(t,e,n){"use strict";var a=n("oac5");n.n(a).a},OFvX:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-quality-manage-table"},[n("el-table",{attrs:{data:t.tableData,stripe:"",border:""}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"编号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"qualityName",label:"名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"qualityDimension",label:"质量维度 "}}),t._v(" "),n("el-table-column",{attrs:{prop:"description",label:"描述"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createDate",label:"创建日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"changeDate",label:"修改日期"}})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.limit},on:{"update:page":function(e){t.$set(t.queryParams,"page",e)},"update:limit":function(e){t.$set(t.queryParams,"limit",e)},pagination:t.getTableData}})],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},OWvI:function(t,e,n){"use strict";var a=n("3Ks7");n.n(a).a},"T/2i":function(t,e,n){"use strict";n.r(e);var a=n("pfwX"),i=n("8KD9");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("N5VR");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"0b34efde",null);l.options.__file="ruleDialog.vue",e.default=l.exports},UbHu:function(t,e,n){},VRmN:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("queryFormWrap",{attrs:{"form-name":t.formName}},[n("el-form",{staticClass:"demo-form-inline",attrs:{model:t.formInline,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{placeholder:"规则名"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1)],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"质量维度"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.quality,callback:function(e){t.$set(t.formInline,"quality",e)},expression:"formInline.quality"}},[n("el-option",{attrs:{label:"完整性",value:"integrity"}}),t._v(" "),n("el-option",{attrs:{label:"一致性",value:"consistency"}}),t._v(" "),n("el-option",{attrs:{label:"有效性",value:"effectiveness"}}),t._v(" "),n("el-option",{attrs:{label:"准确性",value:"accuracy"}}),t._v(" "),n("el-option",{attrs:{label:"合理性",value:"rationality"}})],1)],1)],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea",placeholder:"空文本"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1)],1)],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},WDwG:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"data-quality-manage"},[e("queryForm",{attrs:{"form-name":this.formName},on:{add:this.addBtnClick}}),this._v(" "),e("dataQualityTable",{ref:"dataQualityEle",on:{modify:this.modifyBtnClick}}),this._v(" "),e("ruleDialog",{ref:"ruleDialogEle"})],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},Y5bG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scrollTo=function(t,e,n){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=t-i,o=0;e=void 0===e?500:e,function t(){o+=20;var l=Math.easeInOutQuad(o,i,r,e);!function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(l),o<e?a(t):n&&"function"==typeof n&&n()}()},Math.easeInOutQuad=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},YO00:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"QueryFormWrap",props:{formName:{type:String,default:"表单元素"}},data:function(){return{}},methods:{}}},aPVs:function(t,e,n){},auol:function(t,e,n){"use strict";var a=n("rlnp");n.n(a).a},"b7+U":function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"query-form-wrap"},[e("fieldset",{staticClass:"field"},[e("legend",{staticClass:"title"},[this._v(this._s(this.formName))]),this._v(" "),this._t("default")],2)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},cMv6:function(t,e,n){},fHpf:function(t,e,n){"use strict";n.r(e);var a=n("WDwG"),i=n("9DBd");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1f8i");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"4dea12f2",null);l.options.__file="index.vue",e.default=l.exports},kGJZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(n("F7Pt"));e.default={name:"QueryFormWrap",components:{queryFormWrap:a.default},props:{formName:{type:String,default:"表单元素"}},data:function(){return{formInline:{rule:"",quality:"完整性"}}},methods:{onSubmit:function(){console.log("submit!")},add:function(){this.$emit("add")}}}},"n+2L":function(t,e,n){"use strict";n.r(e);var a=n("VRmN"),i=n("p7LU");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("OWvI");var o=n("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,"2754489b",null);l.options.__file="modifyRuleForm.vue",e.default=l.exports},oac5:function(t,e,n){},p7LU:function(t,e,n){"use strict";n.r(e);var a=n("GPX3"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},pfwX:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify-rule-dialog"},[n("el-dialog",{attrs:{title:t.opts.title,visible:t.opts.show},on:{"update:visible":function(e){t.$set(t.opts,"show",e)}}},[n("modifyRuleForm"),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.hideDialog}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.hideDialog}},[t._v("确 定")])],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},rlnp:function(t,e,n){},xobx:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("queryFormWrap",{attrs:{"form-name":t.formName}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"规则名称"}},[n("el-input",{attrs:{placeholder:"规则名"},model:{value:t.formInline.rule,callback:function(e){t.$set(t.formInline,"rule",e)},expression:"formInline.rule"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"质量维度"}},[n("el-select",{model:{value:t.formInline.quality,callback:function(e){t.$set(t.formInline,"quality",e)},expression:"formInline.quality"}},[n("el-option",{attrs:{label:"完整性",value:"integrity"}})],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增")])],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},yrDL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("QbLZ")),i=r(n("n+2L"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"ModifyRuleDialog",components:{modifyRuleForm:i.default},data:function(){return{defaultOpts:{show:!1,title:"新增核减类别"},opts:{}}},created:function(){this.opts=(0,a.default)({},this.defaultOpts,this.opts)},methods:{setDialog:function(t){this.opts=(0,a.default)({},this.defaultOpts,this.opts,t)},hideDialog:function(){this.opts.show=!1}}}}}]);