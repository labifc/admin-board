(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3593","chunk-147d","chunk-6941","chunk-7098","chunk-2a62","chunk-18bf","chunk-390b"],{"+OON":function(t,e,a){"use strict";a.r(e);var n=a("dZPL"),r=a("HV7f");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("RoTJ");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"51646060",null);o.options.__file="PanelGroup.vue",e.default=o.exports},"+OnP":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{themeName:"light",opts:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},title:{text:"问题的检核类别",left:"center",textStyle:{color:"rgba(0,0,0,.6)"}},series:[{name:"检核类别",type:"pie",radius:"70%",avoidLabelOverlap:!0,labelLine:{normal:{show:!0,length:4,length2:10}},label:{normal:{formatter:"{c|{b}}\n{d|{d}%}",rich:{a:{color:"#fff",lineHeight:22,align:"center"},hr:{borderColor:"#000",width:"100%",borderWidth:.5,height:0},b:{fontSize:12,lineHeight:33},per:{color:"#fff",padding:[0,0],borderRadius:2}}},emphasis:{show:!0,textStyle:{fontSize:"14"}}},data:[]}]}}},mounted:function(){this.setData([{value:1922,name:"总分检核"},{value:646,name:"系统间一致性检核"},{value:225,name:"非法代码检核"}])},methods:{getData:function(){var t=this;this.$http("/local/chart/task").then(function(e){var a=e.data;a=t.handleData(a),console.log("data: ",a),t.setData(a)})},handleData:function(t){return t},setData:function(t){this.opts.series[0].data=t}}}},"+V0y":function(t,e,a){},"11/g":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a("F7Pt"));e.default={name:"QualityReport",components:{queryFormWrap:n.default},props:{formName:{type:String,default:"数据质量分析筛选器"}},data:function(){return{filterForm:{data:"2012-07-19",system:""}}},methods:{}}},"4j0P":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{themeName:"light",opts:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},title:{text:"各系统问题数",left:"center",textStyle:{color:"rgba(0,0,0,.6)"}},series:[{name:"问题数",type:"pie",radius:"70%",avoidLabelOverlap:!0,labelLine:{normal:{show:!0,length:4,length2:10}},label:{normal:{formatter:"{c|{b}}\n{d|{d}%}",rich:{a:{color:"#fff",lineHeight:22,align:"center"},hr:{borderColor:"#000",width:"100%",borderWidth:.5,height:0},b:{fontSize:12,lineHeight:33},per:{color:"#fff",padding:[0,0],borderRadius:2}}},emphasis:{show:!0,textStyle:{fontSize:"14"}}},data:[]}]}}},mounted:function(){this.setData([{value:1548,name:"ECIS系统"},{value:979,name:"ODS系统"},{value:673,name:"RDM系统"}])},methods:{getData:function(){var t=this;this.$http("/local/chart/task").then(function(e){var a=e.data;a=t.handleData(a),console.log("data: ",a),t.setData(a)})},handleData:function(t){return t},setData:function(t){this.opts.series[0].data=t}}}},"696Q":function(t,e,a){"use strict";a.r(e);var n=a("YO00"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},"7BsA":function(t,e,a){t.exports=function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(a);)a=a.replace(r,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,r="webkit moz ms o".split(" "),i=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=i=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=i=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<r.length&&(!i||!s);l++)o=r[l],e.requestAnimationFrame=i=i||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];i&&s||(e.requestAnimationFrame=i=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),r=window.setTimeout(function(){t(e+a)},a);return n=e+a,r},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=i,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var l=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),o.computed=l}return{esModule:r,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},"7hcB":function(t,e,a){"use strict";var n=a("Cenb");a.n(n).a},"876H":function(t,e,a){"use strict";var n=a("uc55");a.n(n).a},"8cV+":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("query-form-wrap",{attrs:{"form-name":t.formName}},[a("el-form",{ref:"filterForm",attrs:{inline:!0,model:t.filterForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"数据日期"}},[a("el-input",{model:{value:t.filterForm.data,callback:function(e){t.$set(t.filterForm,"data",e)},expression:"filterForm.data"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"系统"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.filterForm.system,callback:function(e){t.$set(t.filterForm,"system",e)},expression:"filterForm.system"}},[a("el-option",{attrs:{label:"DBS",value:"DBS"}}),t._v(" "),a("el-option",{attrs:{label:"Oracle",value:"Oracle"}})],1)],1)],1)],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},CEpP:function(t,e,a){},Cenb:function(t,e,a){},Eht0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("+OON")),r=l(a("QDG8")),i=l(a("ytZH")),s=l(a("LDGc")),o=l(a("vetq"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"QualityReport",components:{panelGroup:n.default,problemProportionChart:r.default,problemReviewChart:i.default,filterForm:s.default,problemTable:o.default},data:function(){return{}},methods:{}}},F7Pt:function(t,e,a){"use strict";a.r(e);var n=a("b7+U"),r=a("696Q");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("auol");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"0907762f",null);o.options.__file="index.vue",e.default=o.exports},HV7f:function(t,e,a){"use strict";a.r(e);var n=a("J7Mv"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},Hbpk:function(t,e,a){"use strict";a.r(e);var n=a("11/g"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},Idm7:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("query-form-wrap",{attrs:{"form-name":this.formName}},[e("el-table",{attrs:{data:this.problemTable,stripe:""}},[e("el-table-column",{attrs:{"header-align":"center",prop:"system",label:"系统"}}),this._v(" "),e("el-table-column",{attrs:{"header-align":"center",prop:"ruleNum",label:"规则数"}}),this._v(" "),e("el-table-column",{attrs:{"header-align":"center",prop:"methodNum",label:"方法数"}}),this._v(" "),e("el-table-column",{attrs:{"header-align":"center",prop:"result",label:"问题结果"}},[e("el-table-column",{attrs:{"header-align":"center",prop:"totalResult",label:"问题总数"}}),this._v(" "),e("el-table-column",{attrs:{"header-align":"center",prop:"checkType",label:"检核方法"}})],1)],1)],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},J7Mv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a("7BsA"));e.default={name:"PanelGroup",components:{CountTo:n.default},data:function(){return{header:{totalType:13,totalRule:44,totalMethod:105,newMethod:1}}},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}}},LDGc:function(t,e,a){"use strict";a.r(e);var n=a("8cV+"),r=a("Hbpk");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("MmBz");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"1c7c7382",null);o.options.__file="filterForm.vue",e.default=o.exports},"Le+G":function(t,e,a){"use strict";a.r(e);var n=a("swdJ"),r=a("ca6a");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("876H");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"4d9afe64",null);o.options.__file="index.vue",e.default=o.exports},MmBz:function(t,e,a){"use strict";var n=a("sexB");a.n(n).a},Ovwe:function(t,e,a){"use strict";a.r(e);var n=a("RV1I"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},QDG8:function(t,e,a){"use strict";a.r(e);var n=a("UD6U"),r=a("mGj9");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("QwLZ");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"f0299a50",null);o.options.__file="problem-proportion.vue",e.default=o.exports},QwLZ:function(t,e,a){"use strict";var n=a("+V0y");a.n(n).a},RV1I:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a("F7Pt"));e.default={name:"QualityReport",components:{queryFormWrap:n.default},props:{formName:{type:String,default:"检核问题信息"}},data:function(){return{problemTable:[{system:"ECIF",ruleNum:"12",methodNum:"9",totalResult:"4",checkType:"4"},{system:"ODS系统",ruleNum:"9",methodNum:"7",totalResult:"4",checkType:"2"},{system:"RIM",ruleNum:"3",methodNum:"2",totalResult:"2",checkType:"1"}]}},methods:{}}},RoTJ:function(t,e,a){"use strict";var n=a("wA9x");a.n(n).a},UD6U:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"problem-proportion-chart chart-wrap"},[e("v-chart",{ref:"chartEle",attrs:{options:this.opts,theme:this.themeName,"auto-resize":""}})],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},YO00:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"QueryFormWrap",props:{formName:{type:String,default:"表单元素"}},data:function(){return{}},methods:{}}},auol:function(t,e,a){"use strict";var n=a("rlnp");a.n(n).a},"b7+U":function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"query-form-wrap"},[e("fieldset",{staticClass:"field"},[e("legend",{staticClass:"title"},[this._v(this._s(this.formName))]),this._v(" "),this._t("default")],2)])},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},ca6a:function(t,e,a){"use strict";a.r(e);var n=a("Eht0"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},dZPL:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("共有类型")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.header.totalType,duration:1e3}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message"},[a("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("共有度量规则")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.header.totalRule,duration:1400}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("共有检核方法")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.header.totalMethod,duration:1800}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){t.handleSetLineChartData("shoppings")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{attrs:{"icon-class":"shopping","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("本月新增方法")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.header.newMethod,duration:2400}})],1)])])],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},eQ8L:function(t,e,a){"use strict";a.r(e);var n=a("+OnP"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},jmsn:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"problem-proportion-chart chart-wrap"},[e("v-chart",{ref:"chartEle",attrs:{options:this.opts,theme:this.themeName,"auto-resize":""}})],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},mGj9:function(t,e,a){"use strict";a.r(e);var n=a("4j0P"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},rSop:function(t,e,a){"use strict";var n=a("CEpP");a.n(n).a},rlnp:function(t,e,a){},sexB:function(t,e,a){},swdJ:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"quality-report"},[e("div",{staticClass:"title"},[this._v("数据质量分析报告：")]),this._v(" "),e("panel-group"),this._v(" "),e("div",{staticClass:"chart-details"},[e("el-row",[e("el-col",{attrs:{span:12}},[e("problemProportionChart",{staticClass:"problem-chart"})],1),this._v(" "),e("el-col",{attrs:{span:12}},[e("problemReviewChart",{staticClass:"problem-chart"})],1)],1)],1),this._v(" "),e("filter-form"),this._v(" "),e("problem-table")],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},uc55:function(t,e,a){},vetq:function(t,e,a){"use strict";a.r(e);var n=a("Idm7"),r=a("Ovwe");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("rSop");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"e0a6d88a",null);o.options.__file="problemTable.vue",e.default=o.exports},wA9x:function(t,e,a){},ytZH:function(t,e,a){"use strict";a.r(e);var n=a("jmsn"),r=a("eQ8L");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("7hcB");var s=a("KHd+"),o=Object(s.a)(r.default,n.a,n.b,!1,null,"6881df6f",null);o.options.__file="problem-review.vue",e.default=o.exports}}]);