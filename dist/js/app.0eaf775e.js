(function(t){function a(a){for(var s,o,l=a[0],c=a[1],r=a[2],v=0,u=[];v<l.length;v++)o=l[v],i[o]&&u.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,l=1;l<e.length;l++){var c=e[l];0!==i[c]&&(s=!1)}s&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={1:0},n=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:e})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var d=c;n.push([2,0]),e()})({2:function(t,a,e){t.exports=e("Vtdi")},Vtdi:function(t,a,e){"use strict";e.r(a);e("VRzm");var s=e("Kw5r"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Board",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{attrs:{id:"home"}},[e("div",{staticClass:"parallax-container",attrs:{id:"index-banner"}},[t._m(0),t._v(" "),e("div",{staticClass:"parallax"},[e("video",{staticStyle:{width:"100%",heigh:"250px"},attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[e("source",{attrs:{src:"https://www.videvo.net/videvo_files/converted/2014_07/preview/Saint_Barthelemy_2.mov44817.webm",type:"video/mp4"}})])])]),t._v(" "),e("br"),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col s3 m3"},[e("p",{staticClass:"flow-text"},[t._v("Back Log")]),t._v(" "),t._l(t.activities,function(a){return"backlog"==a.status?e("div",{key:a["./key"],staticClass:"card blue-grey"},[e("div",{staticClass:"card-content"},[e("p",[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"card-action"},[e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 13px 0 13px"},on:{click:function(e){t.deleteData(a[".key"])}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.upStatus(a[".key"],a.status)}}},[t._v(" > ")])])]):t._e()})],2),t._v(" "),e("div",{staticClass:"col s3 m3"},[e("p",{staticClass:"flow-text"},[t._v("To-Do")]),t._v(" "),t._l(t.activities,function(a){return"todo"==a.status?e("div",{key:a["./key"],staticClass:"card blue-grey lighten-1"},[e("div",{staticClass:"card-content"},[e("p",[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"card-action"},[e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.downStatus(a[".key"],a.status)}}},[t._v(" < ")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 13px 0 13px"},on:{click:function(e){t.deleteData(a[".key"])}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.upStatus(a[".key"],a.status)}}},[t._v(" > ")])])]):t._e()})],2),t._v(" "),e("div",{staticClass:"col s3 m3"},[e("p",{staticClass:"flow-text"},[t._v("On-Going")]),t._v(" "),t._l(t.activities,function(a){return"ongoing"==a.status?e("div",{key:a["./key"],staticClass:"card blue-grey lighten-2"},[e("div",{staticClass:"card-content"},[e("p",[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"card-action"},[e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.downStatus(a[".key"],a.status)}}},[t._v("<")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 13px 0 13px"},on:{click:function(e){t.deleteData(a[".key"])}}},[t._v("Delete")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.upStatus(a[".key"],a.status)}}},[t._v(">")])])]):t._e()})],2),t._v(" "),e("div",{staticClass:"col s3 m3"},[e("p",{staticClass:"flow-text"},[t._v("Done")]),t._v(" "),t._l(t.activities,function(a){return"done"==a.status?e("div",{key:a["./key"],staticClass:"card blue-grey lighten-3"},[e("div",{staticClass:"card-content"},[e("p",[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"card-action"},[e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 10px 0 10px"},on:{click:function(e){t.downStatus(a[".key"],a.status)}}},[t._v("<")]),t._v(" "),e("a",{staticClass:"waves-effect waves-light btn-small",staticStyle:{"font-size":"10",padding:"0 13px 0 13px"},on:{click:function(e){t.deleteData(a[".key"])}}},[t._v("Delete")])])]):t._e()})],2)])]),t._v(" "),e("div",{staticClass:"modal",attrs:{id:"modal1"}},[e("div",{staticClass:"modal-content"},[e("h4",[t._v("Add New Task")]),t._v(" "),e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("div",{staticClass:"row modal-form-row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"image_url",type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"image_url"}},[t._v("Title")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"validate",attrs:{id:"image_title",type:"text"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"image_title"}},[t._v("Description")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.point,expression:"point"}],staticClass:"materialize-textarea validate",attrs:{id:"image_description",type:"text"},domProps:{value:t.point},on:{input:function(a){a.target.composing||(t.point=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"image_description"}},[t._v("Point")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.assigned,expression:"assigned"}],staticClass:"materialize-textarea validate",attrs:{id:"image_description",type:"text"},domProps:{value:t.assigned},on:{input:function(a){a.target.composing||(t.assigned=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"image_description"}},[t._v("Assigned to")])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("a",{staticClass:" modal-action modal-close waves-effect waves-green btn-flat",on:{click:t.clearAll}},[t._v("Cancel")]),t._v(" "),e("a",{staticClass:" modal-action modal-close waves-effect waves-green btn-flat",on:{click:t.addTask}},[t._v("Submit")])])])])])])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section no-pad-bot"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row center"},[e("h1",{staticClass:"brand-logo",attrs:{id:"logo-container"}},[e("span",{staticStyle:{color:"darkgrey"}},[t._v("Kanban")]),t._v(" "),e("span",{staticStyle:{color:"dodgerblue"}},[t._v("Board")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("form",{attrs:{action:"index.html",method:"post"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("form",{staticClass:"col s12"},[e("button",{staticClass:"waves-effect waves-light btn modal-trigger",attrs:{"data-target":"modal1"}},[t._v("Add New Task")])])])])])])}],c=e("iqUP"),r={databaseURL:"https://kanban-dee38.firebaseio.com/",projectId:"kanban-dee38"},d=c["initializeApp"](r),v=d.database(),u=v.ref("activities"),p={data:function(){return{title:"",description:"",point:"",assigned:""}},created:function(){},firebase:{activities:u},methods:{addTask:function(){u.push({title:this.title,description:this.description,point:this.point,assigned:this.assigned,status:"backlog"}),this.clearAll()},upStatus:function(t,a){"backlog"==a?u.child(t).update({status:"todo"}):"todo"==a?u.child(t).update({status:"ongoing"}):"ongoing"==a&&u.child(t).update({status:"done"})},downStatus:function(t,a){"done"==a?u.child(t).update({status:"ongoing"}):"ongoing"==a?u.child(t).update({status:"todo"}):"todo"==a&&u.child(t).update({status:"backlog"})},clearAll:function(){this.title="",this.description="",this.point="",this.assigned=""},deleteData:function(t){u.child(t).remove()}}},f=p,_=(e("rdCE"),e("KHd+")),g=Object(_["a"])(f,o,l,!1,null,"2d2b0d9a",null),m=g.exports,w={name:"app",components:{Board:m}},C=w,h=(e("ZL7j"),Object(_["a"])(C,i,n,!1,null,null,null)),b=h.exports,y=e("XzC8"),x=e.n(y);s["a"].config.productionTip=!1,s["a"].use(x.a),new s["a"]({render:function(t){return t(b)}}).$mount("#app")},YnGJ:function(t,a,e){},ZL7j:function(t,a,e){"use strict";var s=e("YnGJ"),i=e.n(s);i.a},cBoJ:function(t,a,e){},rdCE:function(t,a,e){"use strict";var s=e("cBoJ"),i=e.n(s);i.a}});
//# sourceMappingURL=app.0eaf775e.js.map