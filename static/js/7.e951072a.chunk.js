(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{225:function(r,t,e){r.exports={"form-control":"FormsControl_form-control__e61Il",formControl:"FormsControl_formControl__2OOsg",error:"FormsControl_error__2e6nv",formSummaryError:"FormsControl_formSummaryError__2j-6r"}},226:function(r,t,e){"use strict";e.d(t,"b",(function(){return j})),e.d(t,"a",(function(){return l})),e.d(t,"c",(function(){return b}));var c=e(3),n=e(227),o=e(2),a=(e(0),e(225)),i=e.n(a),s=e(109),u=function(r){var t=r.meta,e=t.touched,c=t.error,n=r.children,a=e&&c;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(o.jsx)("div",{children:n}),a&&Object(o.jsx)("span",{children:c})]})},j=function(r){var t=r.input,e=(r.meta,r.child,Object(n.a)(r,["input","meta","child"]));return Object(o.jsx)(u,Object(c.a)(Object(c.a)({},r),{},{children:Object(o.jsx)("textarea",Object(c.a)(Object(c.a)({},t),e))}))},l=function(r){var t=r.input,e=(r.meta,r.child,Object(n.a)(r,["input","meta","child"]));return Object(o.jsx)(u,Object(c.a)(Object(c.a)({},r),{},{children:Object(o.jsx)("input",Object(c.a)(Object(c.a)({},t),e))}))},b=function(r,t,e,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(c.a)({placeholder:r,name:t,validate:e,component:n},a))," ",i]})}},229:function(r,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return n}));var c=function(r){if(!r)return"Field is required!"},n=function(r){return function(t){if(t&&t.length>r)return"Max length is ".concat(r," symbols")}}},297:function(r,t,e){"use strict";e.r(t);var c=e(2),n=(e(0),e(110)),o=e(226),a=e(229),i=e(29),s=e(26),u=e(7),j=e(225),l=e.n(j),b=Object(n.a)({form:"Login"})((function(r){var t=r.handleSubmit,e=r.error,n=r.captchaUrl;return Object(c.jsxs)("form",{onSubmit:t,children:[Object(o.c)("Email","email",[a.b],o.a),Object(o.c)("Password","password",[a.b],o.a,{type:"password"}),Object(o.c)(null,"rememberMe",[],o.a,{type:"checkbox"},"remember me"),n&&Object(c.jsx)("img",{src:n}),n&&Object(o.c)("Symbols from image","captcha",[a.b],o.a,{}),e&&Object(c.jsx)("div",{className:l.a.formSummaryError,children:e}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Login"})})]})}));t.default=Object(i.b)((function(r){return{captchaUrl:r.auth.captchaUrl,isAuth:r.auth.isAuth}}),{login:s.c})((function(r){return r.isAuth?Object(c.jsx)(u.a,{to:"/profile"}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"LOGIN!"}),Object(c.jsx)(b,{onSubmit:function(t){r.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:r.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.e951072a.chunk.js.map