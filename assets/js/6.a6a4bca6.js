(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(t,e,n){},164:function(t,e,n){},165:function(t,e,n){"use strict";var o={name:"g-icon",props:["name"]},s=(n(166),n(1)),i=Object(s.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return this.name?e("svg",{staticClass:"g-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})]):this._e()},[],!1,null,"66ceb552",null);e.a=i.exports},166:function(t,e,n){"use strict";var o=n(163);n.n(o).a},167:function(t,e,n){"use strict";var o=n(164);n.n(o).a},168:function(t,e,n){"use strict";var o=n(165),s={name:"g-button",props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}},type:{type:String,default:""},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{gIcon:o.a}},i=(n(167),n(1)),a=Object(i.a)(s,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t[e.type]=!0,t.icon=e.icon,t.plain=e.plain,t.round=e.round,t.disabled=e.disabled,t),attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?o("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?o("g-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),o("div",{staticClass:"contents"},[e._t("default")],2)],1)},[],!1,null,"31041c86",null);e.a=a.exports},169:function(t,e,n){"use strict";var o=n(3),s=n(12),i=n(17),a=n(66),c=n(64),r=n(6),u=n(85).f,l=n(86).f,f=n(8).f,p=n(172).trim,d=o.Number,h=d,v=d.prototype,m="Number"==i(n(65)(v)),b="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,o,s,i=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+e}for(var a,r=e.slice(2),u=0,l=r.length;u<l;u++)if((a=r.charCodeAt(u))<48||a>s)return NaN;return parseInt(r,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?r(function(){v.valueOf.call(n)}):"Number"!=i(n))?a(new h(g(e)),n,d):g(e)};for(var _,C=n(7)?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)s(h,_=C[N])&&!s(d,_)&&f(d,_,l(h,_));d.prototype=v,v.constructor=d,n(10)(o,"Number",d)}},172:function(t,e,n){var o=n(9),s=n(16),i=n(6),a=n(173),c="["+a+"]",r=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),l=function(t,e,n){var s={},c=i(function(){return!!a[t]()||"​"!="​"[t]()}),r=s[t]=c?e(f):a[t];n&&(s[n]=r),o(o.P+o.F*c,"String",s)},f=l.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},173:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},175:function(t,e,n){},182:function(t,e,n){"use strict";n(169);var o={name:"GuluToast",props:{autoClose:{type:[Boolean,Number],default:2,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"",callback:void 0}}},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},mounted:function(){this.execAutoClose()},computed:{toastClasses:function(){return t={},e="position-".concat(this.position),n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},methods:{execAutoClose:function(){var t=this;this.autoClose&&setTimeout(function(){t.close()},1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)}}},s=(n(194),n(1)),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:t.toastClasses},[n("div",{staticClass:"toast"},[t._t("default"),t._v(" "),t.closeButton.text?n("div",{staticClass:"line"}):t._e(),t._v(" "),t.closeButton.text?n("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n            "+t._s(t.closeButton.text)+"\n        ")]):t._e()],2)])},[],!1,null,"36b34e1a",null);e.a=i.exports},194:function(t,e,n){"use strict";var o=n(175);n.n(o).a},195:function(t,e,n){"use strict";var o,s=n(182);e.a={install:function(t,e){t.prototype.$toast=function(e,n){o&&o.close(),o=function(t){var e=t.Vue,n=t.message,o=t.propsData,i=t.onClose,a=new(e.extend(s.a))({propsData:o});return a.$slots.default=[n],a.$mount(),a.$on("close",i),document.body.appendChild(a.$el),a}({Vue:t,message:e,propsData:n,onClose:function(){o=null}})}}}},221:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n(182),i=n(168),a=n(195);o.a.use(a.a);var c={name:"App",components:{gToast:s.a,gButton:i.a},methods:{showToast1:function(){this.showToast("top")},showToast2:function(){this.showToast("middle")},showToast3:function(){this.showToast("bottom")},showToast:function(t){this.$toast("点击弹出提示",{position:t,autoClose:2})}}},r=n(1),u=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("g-button",{on:{click:t.showToast1}},[t._v("上方弹出")]),t._v(" "),n("g-button",{on:{click:t.showToast2}},[t._v("中间弹出")]),t._v(" "),n("g-button",{on:{click:t.showToast3}},[t._v("下方弹出")])],1)},[],!1,null,null,null);e.default=u.exports}}]);