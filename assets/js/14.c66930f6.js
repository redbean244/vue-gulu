(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{163:function(t,e,r){},165:function(t,e,r){"use strict";var n={name:"g-icon",props:["name"]},a=(r(166),r(1)),s=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return this.name?e("svg",{staticClass:"g-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})]):this._e()},[],!1,null,"66ceb552",null);e.a=s.exports},166:function(t,e,r){"use strict";var n=r(163);r.n(n).a},174:function(t,e,r){},190:function(t,e,r){"use strict";var n=r(174);r.n(n).a},196:function(t,e,r){"use strict";var n=r(165),a={name:"ginput",props:{value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String},placeholder:{type:String,dafault:""}},components:{gIcon:n.a}},s=(r(190),r(1)),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",class:{error:t.error}},[r("input",{attrs:{type:"text",disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder},domProps:{value:t.value},on:{change:function(e){return t.$emit("change",e.target.value)},input:function(e){return t.$emit("input",e.target.value)},focus:function(e){return t.$emit("focus",e.target.value)},blur:function(e){return t.$emit("blur",e.target.value)}}}),t._v(" "),t.error?[r("g-icon",{staticClass:"icon-error",attrs:{name:"error"}}),t._v(" "),r("span",{staticClass:"errorMessage"},[t._v(t._s(t.error))])]:t._e()],2)},[],!1,null,"2057247e",null);e.a=i.exports},225:function(t,e,r){"use strict";r.r(e);var n={name:"demo1",components:{gInput:r(196).a}},a=r(1),s=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"box"},[e("g-input",{attrs:{placeholder:"请输入内容"}}),this._v(" "),e("g-input",{attrs:{placeholder:"请输入内容",disabled:""}}),this._v(" "),e("g-input",{attrs:{placeholder:"请输入内容",readonly:""}})],1),this._v(" "),e("div",{staticClass:"box",staticStyle:{margin:"20px 0"}},[e("g-input",{attrs:{value:"王",error:"姓名不能少于两个字"}})],1)])},[],!1,null,"6921bbee",null);e.default=s.exports}}]);