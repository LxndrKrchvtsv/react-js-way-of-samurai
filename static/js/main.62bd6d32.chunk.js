(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav__wrapper:"Navbar_nav__wrapper__3kAJg",item:"Navbar_item__12kIc",active:"Navbar_active__3ygMT"}},218:function(e,t,n){},219:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(19),i=n(59),c=n(75),s={Friends:[{id:1,name:"Dima",img:"https://icdn.lenta.ru/images/2020/02/25/12/20200225122133261/detail_94bd195f0e4f6b887b5377e045742b76.jpg"},{id:2,name:"Darya",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:3,name:"Yarik",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:4,name:"Sofia",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:5,name:"Sasha",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:6,name:"Alexander",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return e},o=n(82),l=n(27),d=n(84),f=n(81),p=n(3),m="INITIALIZED_SUCCESS",b={initialized:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},j=Object(r.c)({profilePage:i.b,dialogsPage:c.b,usersPage:o.a,SideBar:u,auth:l.a,form:f.a,app:g}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,O=Object(r.e)(j,h(Object(r.a)(d.a)));window.__store__=O;var v=O,x=n(0),w=n.n(x),y=n(45),_=n.n(y),S=(n(218),n(33)),P=n(34),E=n(36),N=n(35),I=(n(219),n(10)),k=n.n(I),C=n(15);var T=function(){return Object(a.jsxs)("nav",{className:k.a.nav__wrapper,children:["Navigation",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/profile",activeClassName:k.a.active,children:"Profile"})}),Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/dialogs",activeClassName:k.a.active,children:"Messages"})}),Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/News",activeClassName:k.a.active,children:"News"})}),Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/Users",activeClassName:k.a.active,children:"Users"})}),Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/Music",activeClassName:k.a.active,children:"Music"})}),Object(a.jsx)("li",{className:k.a.item,children:Object(a.jsx)(C.b,{to:"/Settings",activeClassName:k.a.active,children:"Settings"})})]})]})},A=n(56),D=n.n(A);var L=function(e){return Object(a.jsxs)("header",{className:D.a.header__wrapper,children:[Object(a.jsx)("img",{src:"https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png",alt:"placeholder+image"}),Object(a.jsx)("div",{className:D.a.loginBlock,children:e.isAuth?Object(a.jsxs)("div",{children:[e.login," - ",Object(a.jsx)("button",{onClick:e.logout,children:"LogOut"})]}):Object(a.jsx)(C.b,{to:"/login",children:"Login"})})]})},U=n(24),z=function(e){Object(E.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(a.jsx)(L,Object(p.a)({},this.props))}}]),n}(w.a.Component),M=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:l.d})(z),B=n(7),F=n(44),R=function(e){return function(t){return Object(a.jsx)(x.Suspense,{fallback:Object(a.jsx)(F.a,{}),children:Object(a.jsx)(e,Object(p.a)({},t))})}},G=w.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,305))})),H=w.a.lazy((function(){return n.e(5).then(n.bind(null,304))})),Y=w.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,303))})),J=w.a.lazy((function(){return n.e(9).then(n.bind(null,299))})),V=w.a.lazy((function(){return n.e(8).then(n.bind(null,300))})),W=w.a.lazy((function(){return n.e(10).then(n.bind(null,301))})),X=w.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,302))})),K=function(e){Object(E.a)(n,e);var t=Object(N.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsxs)("main",{className:"app-wrapper",children:[Object(a.jsx)(M,{}),Object(a.jsx)(T,{}),Object(a.jsxs)("div",{className:"app-content-wrapper",children:[Object(a.jsx)(B.b,{path:"/dialogs",render:R(G)}),Object(a.jsx)(B.b,{path:"/profile/:userId?",render:R(Y)}),Object(a.jsx)(B.b,{path:"/users",render:R(H)}),Object(a.jsx)(B.b,{path:"/news",render:R(J)}),Object(a.jsx)(B.b,{path:"/music",render:R(V)}),Object(a.jsx)(B.b,{path:"/settings",render:R(W)}),Object(a.jsx)(B.b,{path:"/login",render:R(X)})]})]}):Object(a.jsx)(F.a,{})}}]),n}(w.a.Component),Z=Object(r.d)(B.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(l.b)());Promise.all([t]).then((function(){e({type:m})}))}}}))(K),$=function(e){return Object(a.jsx)(C.a,{basename:"/react-js-way-of-samurai",children:Object(a.jsx)(U.a,{store:v,children:Object(a.jsx)(Z,{})})})};_.a.render(Object(a.jsx)($,{}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var a=n(6),r=n.n(a),i=n(12),c=n(3),s=n(9),u=n(46),o="samurai-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},d=function(e,t,n,a){return{type:o,payload:{userId:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,c=a.email,u=a.login,t(d(i,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?i(f()):(o=c.data.messages.length>0?c.data.messages[0]:"Some error",i(Object(u.a)("Login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},44:function(e,t,n){"use strict";var a=n(2),r=n.p+"static/media/1.10da3761.gif";n(0),t.a=function(){return Object(a.jsx)("img",{src:r})}},56:function(e,t,n){e.exports={header__wrapper:"Header_header__wrapper__3y5gC",loginBlock:"Header_loginBlock__2g8g8"}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return h}));var a=n(6),r=n.n(a),i=n(12),c=n(23),s=n(3),u=n(9),o="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",p={PostData:[{id:1,message:"Do yourself way better!",like:15},{id:2,message:"Let's go! NEVER GIVE UP",like:2021}],profile:null,status:""},m=function(e){return{type:o,newPostBody:e}},b=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:l,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(b(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:3,message:t.newPostBody,like:0};return Object(s.a)(Object(s.a)({},e),{},{PostData:[].concat(Object(c.a)(e.PostData),[n]),newPostBody:""});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{PostData:e.PostData.filter((function(e){return e.id!=t.postId}))});default:return e}}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(23),r=n(3),i="ADD_MESSAGE",c={Dialogs:[{id:1,name:"Dima",img:"https://icdn.lenta.ru/images/2020/02/25/12/20200225122133261/detail_94bd195f0e4f6b887b5377e045742b76.jpg"},{id:2,name:"Darya",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:3,name:"Yarik",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:4,name:"Sofia",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:5,name:"Sasha",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"},{id:6,name:"Alexander",img:"http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"}],Messages:[{message:"Hi"},{message:"How is your it-camasutra?"},{message:"It's good!"},{message:"YaY"}]},s=function(e){return{type:i,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{newMessageBody:"",Messages:[].concat(Object(a.a)(e.Messages),[{message:n}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return P}));var a=n(6),r=n.n(a),i=n(12),c=n(23),s=n(3),u=n(9),o=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),a):e}))},l="FOLLOW",d="UNFOLLOW",f="SET_USERS",p="SET_CURRENT_PAGE",m="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",g="TOGGLE_IS_FOLLOWING_PROGRESS",j={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},h=function(e){return{type:l,userId:e}},O=function(e){return{type:d,userId:e}},v=function(e){return{type:p,currentPage:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:g,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),a(v(e)),n.next=4,u.c.getUsers(e,t);case 4:i=n.sent,a(x(!1)),a((c=i.items,{type:f,users:c})),a((r=i.totalCount,{type:m,count:r}));case 8:case"end":return n.stop()}var r,c}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(i(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.c.follow.bind(u.c),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.c.unfollow.bind(u.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:Object(c.a)(t.users)});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case m:return Object(s.a)(Object(s.a)({},e),{},{totalUserCount:t.count});case b:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case g:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(83),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5e00d82e-17ca-4051-8c74-908d885ee9d7"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please, use profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}}},[[224,2,3]]]);
//# sourceMappingURL=main.62bd6d32.chunk.js.map