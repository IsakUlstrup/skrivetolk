(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0046":function(t,e,n){},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"0542":function(t,e,n){},"0e72":function(t,e,n){},"1b84":function(t,e,n){"use strict";var s=n("0046"),a=n.n(s);a.a},"2b71":function(t,e,n){},"2c7b":function(t,e,n){},"415f":function(t,e,n){"use strict";var s=n("fcf3"),a=n.n(s);a.a},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"sidePanel f",class:{hidePanel:!t.sidePanel}},[n("Navigation"),n("router-view",{staticClass:"p2 fa bbn btn",attrs:{id:"router"}}),n("div",[n("a",{staticClass:"h1 p3 mh3 l tdn",attrs:{id:"toggleSidePanel"},on:{click:t.toggleSidePanel}},[t._v("≡")])])],1),n("section",{staticClass:"p1",class:{moveRight:t.sidePanel},attrs:{id:"content"}},[n("MainInput")],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"Navigation"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("⌂")])],1),n("li",[n("router-link",{attrs:{to:"/manage"}},[t._v("✎")])],1),n("li",[n("router-link",{attrs:{to:"/debug"}},[t._v("⚙︎")])],1),n("li",[n("router-link",{attrs:{to:"/session"}},[t._v("⦷")])],1)])])},r=[],c={name:"Navigation"},l=c,u=(n("c9b5"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"5cc9a48f",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f p1",attrs:{id:"MainInput"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],ref:"mainInput",staticClass:"fa",attrs:{placeholder:"Skriv her...",rows:"30",disabled:t.connection&&!t.connection.writePermission},domProps:{value:t.inputData},on:{keyup:t.handleInput2,blur:t.inputChanged,input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),n("ul",{attrs:{id:"autocompleteResults"}},t._l(t.acResults.slice(0,10),(function(e){return n("li",{key:e.in},[t._v(" "+t._s(e.out)+" ")])})),0)])},p=[],h=(n("fb6a"),n("ac1f"),n("1276"),{name:"MainInput",props:{autoCorrects:Array},data:function(){return{inputData:"",acResults:[],currentWord:""}},methods:{inputChanged:function(){console.log("input changed")},scrollBottom:function(){this.$refs.mainInput.scrollTop=this.$refs.mainInput.scrollHeight},handleInput2:function(){this.connection&&this.connection.socket.send(JSON.stringify({type:"content",data:this.inputData}))},handleInput:function(){var t=this.inputData.split(/[ ,.]/).slice(-50);this.currentWord=t[t.length-1],console.log(this.currentWord),""!==this.currentWord||(this.acResults=[])}},computed:{connection:function(){var t=this.$store.getters.getConnection;return!(!t||"connected"!==t.status)&&t},acStartsWith:function(){return null}},watch:{connection:function(t){var e=this;"connected"===t.status&&(t.socket.addEventListener("message",(function(t){var n=JSON.parse(t.data);"content"===n.type&&n.data&&(console.log("new data recieved, replacing input value:",n.data),e.inputData=n.data,e.scrollBottom())})),console.log("New connection"))}}}),v=h,b=(n("c242"),Object(u["a"])(v,m,p,!1,null,"83e9b976",null)),g=b.exports,j={name:"App",components:{Navigation:f,MainInput:g},methods:{toggleSidePanel:function(){this.$store.commit({type:"setPreference",key:"showSidePanel",value:!this.sidePanel})}},computed:{sidePanel:function(){return this.$store.getters.userPreference("showSidePanel")||!1},userStyle:function(){return{backgroundColor:this.$store.getters.userPreference("backgroundColor")||"#ffffff",textColor:this.$store.getters.userPreference("textColor")||"#000000",highlightColor:this.$store.getters.userPreference("highlightColor")||"#ffffff",textSize:this.$store.getters.userPreference("textSize")||"14px"}}},watch:{userStyle:function(t){document.documentElement.style.setProperty("--user-background-color",t.backgroundColor),document.documentElement.style.setProperty("--user-highlight-color",t.highlightColor),document.documentElement.style.setProperty("--user-text-color",t.textColor),document.documentElement.style.setProperty("--user-text-size",t.textSize)}},beforeMount:function(){document.documentElement.style.setProperty("--user-background-color",this.userStyle.backgroundColor),document.documentElement.style.setProperty("--user-highlight-color",this.userStyle.highlightColor),document.documentElement.style.setProperty("--user-text-color",this.userStyle.textColor),document.documentElement.style.setProperty("--user-text-size",this.userStyle.textSize)}},y=j,k=(n("034f"),Object(u["a"])(y,a,i,!1,null,null,null)),C=k.exports,_=(n("4de4"),n("c975"),n("a434"),n("b0c0"),n("2f62")),w=n("ec26"),S=n("c1df"),x=n.n(S);s["a"].use(_["a"]);var D=new _["a"].Store({state:{acLists:[],userPreferences:[],connection:void 0},mutations:{initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))},webSocket:function(t,e){t.connection=e},addList:function(t,e){var n={id:e.id||Object(w["a"])(),name:e.name,lastUpdate:e.lastUpdate||x()().format(),acs:e.acs||[]};console.log("Adding list (data): ",n);var s=this.state.acLists.filter((function(t){return t.id===n.id}));s.length>0?console.log("list exists, replace.",s):(console.log("Adding list: ",n.id),this.state.acLists.push(n)),this.commit("saveState")},removelist:function(t,e){var n=this.state.acLists.indexOf(e);this.state.acLists.splice(n,1),this.commit("saveState")},addAc:function(t,e){var n=this.state.acLists.filter((function(t){return t.id===e.listId}));if(n.length>0){var s={id:Object(w["a"])(),in:e.in,out:e.out};n[0].acs.push(s),n[0].lastUpdate=x()().format()}this.commit("saveState")},saveState:function(t){console.log("saving state to localStorage"),localStorage.setItem("store",JSON.stringify({acLists:t.acLists,userPreferences:t.userPreferences}))},deleteAc:function(t,e){var n=t.acLists.filter((function(t){return t.id===e.listId}));0!==n.length?n.length>1?console.log("Too many lists found with id: ".concat(e.listId,", something is probably wrong.")):(n[0].acs=n[0].acs.filter((function(t){return t.id!==e.acId})),n[0].lastUpdate=x()().format(),console.log("ac with id: ".concat(e.acId," removed.")),this.commit("saveState")):console.log("No lists with id: ".concat(e.listId," found."))},setPreference:function(t,e){var n=t.userPreferences.filter((function(t){return t.key===e.key}));if(!(n.length>1))return 1===n.length?(n[0].value=e.value,void this.commit("saveState")):void(0===n.length&&(t.userPreferences.push({key:e.key,value:e.value}),this.commit("saveState")));console.log("Too many key matches, something is probably wrong")}},getters:{getConnection:function(t){return void 0!==t.connection&&t.connection},userPreference:function(t){return function(e){if(0===t.userPreferences.length)return console.log("Empty preferences, return null"),null;var n=t.userPreferences.filter((function(t){return t.key===e}));return 0===n.length?(console.log("Key ".concat(e," not found, returning false")),!1):n[0].value}},color:function(t,e){return function(t){var n=e.userPreference(t);return n||(console.log("Key ".concat(t," not found, returning default (#fff)")),"#fff")}},acLists:function(t){return t.acLists}}}),A=n("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"MainPage"}},[n("p",{staticClass:"mb3"},[t._v("Dette er en tidlig version bla bla bal...")]),n("p",{staticClass:"mb3"},[t._v("Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus")]),n("p",{staticClass:"mb3"},[t._v("Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus")])])}],I={name:"MainPage"},$=I,O=Object(u["a"])($,P,L,!1,null,"7f4f09ba",null),z=O.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Interpeter"}},[n("MainInput")],1)},E=[],M={name:"Interpeter",components:{MainInput:g}},q=M,T=Object(u["a"])(q,N,E,!1,null,"1e3e253a",null),J=T.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ManageAcs"}},[n("AcLists"),n("div",{attrs:{id:"actions"}},[n("AddAcList"),n("ImportAcList")],1)],1)},R=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"AcLists"}},t._l(t.acLists,(function(t){return n("AcList",{key:t.id,attrs:{list:t}})})),1)},W=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb1 shadow",attrs:{id:"AcList"}},[n("h3",{staticClass:"h3"},[t._v(t._s(t.list.name))]),n("div",{attrs:{id:"metaData"}},[n("ul",{staticClass:"f fw lsn nw"},[n("li",{staticClass:"mr3"},[t._v(t._s(t._f("formatDate")(t.list.lastUpdate)))]),n("li",{staticClass:"mr3"},[t._v(t._s(t.list.acs.length)+" ak")]),n("li",[n("strong",[n("a",{staticClass:"l tdn",on:{click:function(e){t.actionMenu=!t.actionMenu}}},[t._v("⋯")])]),t.actionMenu?n("aside",[n("ul",{staticClass:"lsn b"},[n("li",[n("a",{staticClass:"l p3 bb",on:{click:function(e){return t.exportList(t.list)}}},[t._v("Eksporter")])]),n("li",[n("a",{staticClass:"l p3",on:{click:function(e){return t.removeList(t.list)}}},[t._v("Slett")])])])]):t._e()])])]),t.showTable?n("div",{staticClass:"mt2",attrs:{id:"acs"}},[n("AcTable2",{attrs:{acList:t.list,limit:30}})],1):t._e()])},H=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AcTable2"},[n("addAc",{attrs:{acList:t.acList}}),t.acList.acs.length>0?n("transition-group",{staticClass:"list w100 lsn",attrs:{name:"list",tag:"ul"}},t._l(t.filteredAcs.slice(0,t.limit),(function(e){return n("Ac",{key:e.id,attrs:{acData:e,listId:t.acList.id}})})),1):t._e(),t.filteredAcs.length-t.limit>0?n("div",{staticClass:"mv3"},[t._v(" ("+t._s(t.filteredAcs.length-t.limit)+" flere) ")]):t._e()],1)},K=[],G=(n("caad"),n("a9e3"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"f br2 m3 ac",class:{highlight:t.active}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.acData.in,expression:"acData.in"}],staticClass:"acIn input p3 fa",attrs:{type:"text",autocomplete:"off",name:"ac.in"},domProps:{value:t.acData.in},on:{keyup:t.save,focus:t.activate,blur:t.deactivate,input:function(e){e.target.composing||t.$set(t.acData,"in",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.acData.out,expression:"acData.out"}],staticClass:"acOut input p3 fa",attrs:{type:"text",autocomplete:"off",name:"ac.out"},domProps:{value:t.acData.out},on:{keyup:t.save,focus:t.activate,blur:t.deactivate,input:function(e){e.target.composing||t.$set(t.acData,"out",e.target.value)}}}),n("a",{staticClass:"p3",attrs:{tabindex:"-1"},on:{click:t.deleteAc}},[t._v("✕")])])}),Q=[],Y={name:"Ac",props:{acData:Object,listId:String},data:function(){return{active:!1}},methods:{activate:function(){this.active=!0},deactivate:function(){this.active=!1},save:function(){this.$store.commit("saveState")},deleteAc:function(){this.$store.commit("deleteAc",{listId:this.listId,acId:this.acData.id})}}},X=Y,Z=(n("7bb4"),Object(u["a"])(X,G,Q,!1,null,"0e3ee486",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AddAc br2 f m3",class:{highlight:t.active}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.in,expression:"formData.in"}],staticClass:"input p3 fa",attrs:{type:"text",placeholder:"inn",autocomplete:"off",name:"newAc.in"},domProps:{value:t.formData.in},on:{focus:t.activate,blur:t.deactivate,input:function(e){e.target.composing||t.$set(t.formData,"in",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.out,expression:"formData.out"}],staticClass:"input p3 fa",attrs:{type:"text",placeholder:"Ut",autocomplete:"off",name:"newAc.out"},domProps:{value:t.formData.out},on:{focus:t.activate,blur:t.deactivate,input:function(e){e.target.composing||t.$set(t.formData,"out",e.target.value)}}}),n("a",{staticClass:"p3",attrs:{tabindex:"-1"},on:{click:t.add}},[t._v("+")])])},nt=[],st={name:"AddAc",props:{acList:Object},data:function(){return{active:!1,formData:{in:"",out:""}}},methods:{add:function(){var t={in:this.formData.in,out:this.formData.out,listId:this.acList.id};""!==this.formData.in&&""!==this.formData.out&&(this.$store.commit("addAc",t),this.formData.in="",this.formData.out="")},activate:function(){this.active=!0},deactivate:function(){this.active=!1}}},at=st,it=(n("1b84"),Object(u["a"])(at,et,nt,!1,null,"0f598ab8",null)),ot=it.exports,rt={name:"AcTable2",components:{Ac:tt,AddAc:ot},props:{acList:Object,limit:Number},data:function(){return{newAcData:{in:null,out:null},filter:""}},computed:{filteredAcs:function(){var t=this;return this.acList.acs.filter((function(e){return e.in.includes(t.filter)||e.out.includes(t.filter)}))}},methods:{sort:function(){this.acList.acs.sort((function(t,e){var n=t.in.toUpperCase(),s=e.in.toUpperCase();return n<s?-1:n>s?1:0}))},addAc:function(){var t={in:this.newAcData.in,out:this.newAcData.out,listId:this.acList.id};""!==this.newAcData.in&&""!==this.newAcData.out&&(this.$store.commit("addAc",t),this.newAcData.in=null,this.newAcData.out=null)}}},ct=rt,lt=(n("f871"),Object(u["a"])(ct,V,K,!1,null,"7b4ae554",null)),ut=lt.exports,dt=n("21a6"),ft=n.n(dt);x.a.locale("no");var mt={name:"AcList",components:{AcTable2:ut},props:{list:Object},data:function(){return{showTable:!0,actionMenu:!1}},methods:{exportList:function(t){var e=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});ft.a.saveAs(e,t.name+".json")},removeList:function(t){this.$store.commit("removelist",t)}},filters:{formatDate:function(t){return x()(t).format("DD.MM.YY HH:mm")}}},pt=mt,ht=(n("67be"),Object(u["a"])(pt,F,H,!1,null,"9d5fd7b4",null)),vt=ht.exports,bt={name:"AcLists",components:{AcList:vt},computed:{acLists:function(){return this.$store.getters.acLists}}},gt=bt,jt=Object(u["a"])(gt,B,W,!1,null,"10a422d4",null),yt=jt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mv2",attrs:{id:"AddAcList"}},[n("h3",{staticClass:"h3"},[t._v("Legg til liste")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"i p3 b br3",attrs:{placeholder:"Navn"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),n("input",{staticClass:"mh3 i p3",attrs:{type:"button",value:"Legg til",disabled:""===this.formData.name},on:{click:t.add}})])},Ct=[],_t={name:"AddAcList",data:function(){return{formData:{name:""}}},methods:{add:function(){this.$store.commit("addList",{name:this.formData.name}),this.formData.name=""}}},wt=_t,St=Object(u["a"])(wt,kt,Ct,!1,null,"a8de74d6",null),xt=St.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mv2",attrs:{id:"ImportAcList"}},[t.isInitial||t.isSaving?n("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[n("h3",{staticClass:"h3 mv2"},[t._v("Importer liste")]),n("div",{staticClass:"dropbox"},[n("input",{staticClass:"input-file",attrs:{type:"file",multiple:"",disabled:t.isSaving,accept:"application/json"},on:{change:function(e){return t.filesChange("acList",e.target.files)}}}),t.isInitial?n("p",{staticClass:"pv1"},[t._v(" Trekk filer hit"),n("br"),t._v(" eller klikk for å velge fil ")]):t._e()])]):t._e()])},At=[],Pt=(n("99af"),n("4160"),n("a630"),n("d81d"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),0),Lt=1,It=2,$t=3,Ot={name:"ImportAcList",components:{},data:function(){return{uploadError:null,currentStatus:null}},computed:{isInitial:function(){return this.currentStatus===Pt},isSaving:function(){return this.currentStatus===Lt},isSuccess:function(){return this.currentStatus===It},isFailed:function(){return this.currentStatus===$t}},methods:{reset:function(){this.currentStatus=Pt,this.uploadError=null},save2:function(t){var e=this;this.currentStatus=Lt,t.getAll("acList").forEach((function(t){var n=new FileReader;n.onload=function(){try{var s=JSON.parse(n.result)}catch(a){return void console.log("JSON parse error: ".concat(a,"\n\tfile: ").concat(t.name))}e.$store.commit("addList",s)},n.readAsText(t)}))},save:function(t){var e=this;this.currentStatus=Lt;var n=new FileReader;n.onload=function(){e.uploadData=JSON.parse(n.result),e.$store.commit("addList",e.uploadData)},n.readAsText(t.getAll("acList")[0])},filesChange:function(t,e){var n=new FormData;e.length&&(Array.from(Array(e.length).keys()).map((function(s){n.append(t,e[s],e[s].name)})),this.save2(n),this.reset())}},mounted:function(){this.reset()}},zt=Ot,Nt=(n("415f"),Object(u["a"])(zt,Dt,At,!1,null,"c7f4bf96",null)),Et=Nt.exports,Mt={name:"ManageAcs",components:{AcLists:yt,AddAcList:xt,ImportAcList:Et}},qt=Mt,Tt=Object(u["a"])(qt,U,R,!1,null,"2786f644",null),Jt=Tt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Debug"}},[n("ColorPicker",{staticClass:"mv2",attrs:{color:t.backgroundColor},on:{newColor:t.setBackgroundColor}},[t._v("Bakgrunnsfarge")]),n("ColorPicker",{staticClass:"mv2",attrs:{color:t.textColor},on:{newColor:t.setTextColor}},[t._v("Tekstfarge")]),n("ColorPicker",{staticClass:"mv2",attrs:{color:t.highlightColor},on:{newColor:t.setHighlightColor}},[t._v("Kontrast")]),n("div",{staticClass:"mv2"},[t._v(" Tekststørrelse: "+t._s(t.textSize)+" "),n("br"),n("br"),n("input",{attrs:{type:"range",name:"textSize",min:"8",max:"100"},on:{input:t.setTextSize}})]),n("div",{attrs:{id:"reset"}},[n("a",{staticClass:"l",attrs:{id:"reset"},on:{click:t.resetLocalStorage}},[n("strong",[t._v("Nullstill localStorage")])])])],1)},Rt=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputColor,expression:"inputColor"}],attrs:{type:"color"},domProps:{value:t.inputColor},on:{change:function(e){return t.$emit("newColor",t.inputColor)},input:function(e){e.target.composing||(t.inputColor=e.target.value)}}}),n("label",{attrs:{for:"head"}},[t._t("default",[t._v("Color")])],2)])},Wt=[],Ft={name:"ColorPicker",props:{color:String},data:function(){return{inputColor:null}},beforeMount:function(){this.inputColor=this.color}},Ht=Ft,Vt=(n("76f9"),Object(u["a"])(Ht,Bt,Wt,!1,null,"4feee910",null)),Kt=Vt.exports,Gt={name:"Debug",components:{ColorPicker:Kt},methods:{resetLocalStorage:function(){localStorage.setItem("store",JSON.stringify(""))},setBackgroundColor:function(t){this.$store.commit({type:"setPreference",key:"backgroundColor",value:t})},setHighlightColor:function(t){this.$store.commit({type:"setPreference",key:"highlightColor",value:t})},setTextColor:function(t){this.$store.commit({type:"setPreference",key:"textColor",value:t})},setTextSize:function(t){this.$store.commit({type:"setPreference",key:"textSize",value:t.srcElement.value+"px"})}},computed:{backgroundColor:function(){return this.$store.getters.userPreference("backgroundColor")||"#ffffff"},textColor:function(){return this.$store.getters.userPreference("textColor")||"#000000"},highlightColor:function(){return this.$store.getters.userPreference("highlightColor")||"#ffffff"},textSize:function(){return this.$store.getters.userPreference("textSize")||"14px"}}},Qt=Gt,Yt=(n("a5c7"),Object(u["a"])(Qt,Ut,Rt,!1,null,"743ff83e",null)),Xt=Yt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Session"},[n("div",{staticClass:"mv2"},[n("input",{staticClass:"p3 br2 w100",attrs:{type:"button",value:"New session"},on:{click:t.newSession}})]),n("div",{staticClass:"mv2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.connectionDetails.sessionId,expression:"connectionDetails.sessionId"}],staticClass:"p3 br2 mb3 w100",attrs:{type:"text",name:"session",placeholder:"sessionId"},domProps:{value:t.connectionDetails.sessionId},on:{input:function(e){e.target.composing||t.$set(t.connectionDetails,"sessionId",e.target.value)}}}),n("input",{staticClass:"p3 br2 w100",attrs:{type:"button",value:"Connect to session"},on:{click:t.connect}})]),n("div",{staticClass:"status"},[n("h3",{staticClass:"mv3 h3"},[t._v("Status")]),t.$route.params.id?n("p",[t._v("id from url: "+t._s(t.$route.params.id))]):t._e(),n("ul",{staticClass:"lsn mv3"},[n("li",[t._v("socket: "+t._s(t.connection.status))]),"connected"===t.connection.status&&t.connection.writePermission?n("li",[t._v(" write permission ")]):t._e(),"connected"===t.connection.status?n("li",[n("input",{staticClass:"br3 p3",attrs:{type:"button",value:"disconnect"},on:{click:t.disconnect}})]):t._e(),"connected"===t.connection.status?n("li",[n("router-link",{attrs:{to:t._f("sessionLink")(t.connection.sessionIds.privateId)}},[t._v("Link for tolk")])],1):t._e(),"connected"===t.connection.status?n("li",[n("router-link",{attrs:{to:t._f("sessionLink")(t.connection.sessionIds.publicId)}},[t._v("Link for bruker")])],1):t._e()])])])},te=[],ee=n("bc3a"),ne=n.n(ee),se={name:"Session",data:function(){return{connection:{status:"initial",sessionIds:{},socket:void 0,writePermission:!1},connectionDetails:{host:"",protocol:"wss"}}},mounted:function(){this.connectionDetails.host=self.location.host,"undefined"!==typeof this.$route.params.id&&(console.log("id set in url, autoconnect"),this.connectionDetails.sessionId=this.$route.params.id,this.connect(this.$route.params.id))},filters:{sessionLink:function(t){return"/session/".concat(t)}},methods:{disconnect:function(){this.connection.socket&&this.connection.socket.close()},ping:function(){this.connection.socket&&this.connection.socket.send(JSON.stringify({type:"ping",data:"ping"}))},newSession:function(){var t=this;console.log("Requesting new session"),ne.a.get("https://".concat(this.connectionDetails.host,"/new")).then((function(e){console.log("Response:",e.data),"undefined"!==typeof e.data.data.privateId&&"undefined"!==typeof e.data.data.publicId?(t.connection.sessionIds={privateId:e.data.data.privateId,publicId:e.data.data.publicId},t.connect(e.data.data.privateId)):console.log("invalid session details recieved from server")})).catch((function(e){console.log(e),t.connection.status="network error"})).finally((function(){}))},connect:function(t){var e=this;this.connection.status="connecting",this.connection.socket=new WebSocket("".concat(this.connectionDetails.protocol,"://").concat(this.connectionDetails.host,"/?id=").concat(t)),this.connection.socket.onopen=function(){console.log("[open] Connection established"),e.connection.status="connected",e.$store.commit("webSocket",e.connection)},this.connection.socket.onmessage=function(t){console.log("[server] ".concat(t.data)),JSON.parse(t.data).data.writePermission&&(console.log("write permission true"),e.connection.writePermission=!0,e.$store.commit("webSocket",e.connection)),"ping"===JSON.parse(t.data).type&&e.connection.socket.send(JSON.stringify({type:"ping",data:"ping"}))},this.connection.socket.onerror=function(t){console.log("websocket error:",t)},this.connection.socket.onclose=function(t){console.log("Connection closed: ",t.code,t.reason),e.connection.status="closed"}}}},ae=se,ie=(n("ac39"),Object(u["a"])(ae,Zt,te,!1,null,"39d7de4f",null)),oe=ie.exports;s["a"].use(A["a"]);var re=[{path:"/interpeter",component:J},{path:"/manage",component:Jt},{path:"/debug",component:Xt},{path:"/session/:id?",component:oe},{path:"/*",component:z}],ce=new A["a"]({routes:re});new s["a"]({router:ce,store:D,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(C)}}).$mount("#app")},"5d19":function(t,e,n){},"67be":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"76f9":function(t,e,n){"use strict";var s=n("bb33"),a=n.n(s);a.a},"7bb4":function(t,e,n){"use strict";var s=n("2c7b"),a=n.n(s);a.a},"85ec":function(t,e,n){},"9c0c":function(t,e,n){},a5c7:function(t,e,n){"use strict";var s=n("c06f"),a=n.n(s);a.a},ac39:function(t,e,n){"use strict";var s=n("2b71"),a=n.n(s);a.a},bb33:function(t,e,n){},c06f:function(t,e,n){},c242:function(t,e,n){"use strict";var s=n("0e72"),a=n.n(s);a.a},c9b5:function(t,e,n){"use strict";var s=n("0542"),a=n.n(s);a.a},f871:function(t,e,n){"use strict";var s=n("5d19"),a=n.n(s);a.a},fcf3:function(t,e,n){}});
//# sourceMappingURL=app.cac9b782.js.map