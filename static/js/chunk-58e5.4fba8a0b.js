(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-58e5","chunk-8e90"],{"7vku":function(t,e,o){"use strict";o.r(e);var n=o("jRCG"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=i.a},JUQk:function(t,e,o){"use strict";o.r(e);var n=o("pFNi"),i=o("7vku");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("dvJs");var d=o("KHd+"),r=Object(d.a)(i.default,n.a,n.b,!1,null,null,null);r.options.__file="index.vue",e.default=r.exports},"Qw/w":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Todo",directives:{focus:function(t,e,o){var n=e.value,i=o.context;n&&i.$nextTick(function(){t.focus()})}},props:{todo:{type:Object,default:function(){return{}}}},data:function(){return{editing:!1}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var e=t.todo,o=t.value;this.$emit("editTodo",{todo:e,value:o})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var e=t.target.value.trim(),o=this.todo;e?this.editing&&(this.editTodo({todo:o,value:e}),this.editing=!1):this.deleteTodo({todo:o})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}}},Tq5B:function(t,e,o){},dvJs:function(t,e,o){"use strict";var n=o("Tq5B");o.n(n).a},jRCG:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(o("gDS+")),i=s(o("ztTi"));function s(t){return t&&t.__esModule?t:{default:t}}var d={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.done})},completed:function(t){return t.filter(function(t){return t.done})}},r=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}];e.default={components:{Todo:i.default},filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},data:function(){return{visibility:"all",filters:d,todos:r}},computed:{allChecked:function(){return this.todos.every(function(t){return t.done})},filteredTodos:function(){return d[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(t){return!t.done}).length}},methods:{setLocalStorage:function(){window.localStorage.setItem("todos",(0,n.default)(this.todos))},addTodo:function(t){var e=t.target.value;e.trim()&&(this.todos.push({text:e,done:!1}),this.setLocalStorage()),t.target.value=""},toggleTodo:function(t){t.done=!t.done,this.setLocalStorage()},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorage()},editTodo:function(t){var e=t.todo,o=t.value;e.text=o,this.setLocalStorage()},clearCompleted:function(){this.todos=this.todos.filter(function(t){return!t.done}),this.setLocalStorage()},toggleAll:function(t){var e=this,o=t.done;this.todos.forEach(function(t){t.done=o,e.setLocalStorage()})}}}},pFNi:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("input",{staticClass:"new-todo",attrs:{autocomplete:"off",placeholder:"Todo List"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}}})]),t._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[o("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(e){t.toggleAll({done:!t.allChecked})}}}),t._v(" "),o("label",{attrs:{for:"toggle-all"}}),t._v(" "),o("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(e,n){return o("todo",{key:n,attrs:{todo:e},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})}))]),t._v(" "),o("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),o("ul",{staticClass:"filters"},t._l(t.filters,function(e,n){return o("li",{key:n},[o("a",{class:{selected:t.visibility===n},on:{click:function(e){e.preventDefault(),t.visibility=n}}},[t._v(t._s(t._f("capitalize")(n)))])])}))])])},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},tqyF:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){t.toggleTodo(t.todo)}}}),t._v(" "),o("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),t._v(" "),o("button",{staticClass:"destroy",on:{click:function(e){t.deleteTodo(t.todo)}}})]),t._v(" "),o("input",{directives:[{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"},{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doneEdit(e):null},function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.cancelEdit(e):null}],blur:t.doneEdit}})])},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},vmZX:function(t,e,o){"use strict";o.r(e);var n=o("Qw/w"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=i.a},ztTi:function(t,e,o){"use strict";o.r(e);var n=o("tqyF"),i=o("vmZX");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);var d=o("KHd+"),r=Object(d.a)(i.default,n.a,n.b,!1,null,null,null);r.options.__file="Todo.vue",e.default=r.exports}}]);