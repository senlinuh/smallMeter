(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ce46372"],{4916:function(s,t,a){},"5baf":function(s,t,a){s.exports=a.p+"assets/img/login-logo.c99fbfa9.png"},"7b49":function(s,t,a){"use strict";var e=a("4916"),n=a.n(e);n.a},c6f7:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login"},[s._m(0),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"login-form"},[s._m(1),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入帐号"},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}})]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),a("div",{staticClass:"btn-box"},[a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:s.login}},[s._v("登录")])]),a("div",{staticClass:"tips"},[a("div",{staticClass:"sms",on:{click:s.register}},[s._v("手机短信登录/注册")]),s._m(2)])])])]),s._m(3)])},n=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"container"},[e("a",{attrs:{href:"/#/index"}},[e("img",{attrs:{src:a("5baf"),alt:""}})])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[a("span",{staticClass:"checked"},[s._v("帐号登录")]),a("span",{staticClass:"sep-line"},[s._v("|")]),a("span",[s._v("扫码登录")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"reg"},[s._v(" 立即注册 "),a("span",[s._v("|")]),s._v("忘记密码？ ")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-link"},[a("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("百度一下")]),a("span",[s._v("|")]),a("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("百度一下")]),a("span",[s._v("|")]),a("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("百度一下")]),a("span",[s._v("|")]),a("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[s._v("百度一下")])]),a("p",{staticClass:"copyright"},[s._v("Copyright ©2019 www.baidu.com")])])}],i=a("5530"),r=a("2f62"),o={name:"login",data:function(){return{username:"",password:"",userId:""}},methods:Object(i["a"])({login:function(){var s=this,t=this.username,a=this.password;this.axios.post("/user/login",{username:t,password:a}).then((function(t){s.$cookie.set("userId",t.id,{expires:"Session"}),s.saveUserName(t.username),s.$router.push({name:"index",params:{from:"login"}})}))}},Object(r["b"])(["saveUserName"]),{register:function(){var s=this;this.axios.post("/user/register",{username:"max",password:"max",email:"admin1@188.com"}).then((function(){console.log("成功"),s.$message.success("注册成功")})).catch((function(s){console.log(s,"你好")}))}})},c=o,l=(a("7b49"),a("2877")),u=Object(l["a"])(c,e,n,!1,null,null,null);t["default"]=u.exports}}]);