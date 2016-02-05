/*
 AngularJS v1.2.0-rc.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u,c,A){'use strict';function w(c,s,g,b,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(l,m,y){return function(p,l,m){function k(){h&&(h.$destroy(),h=null);q&&(d.leave(q),q=null)}function x(){var a=c.current&&c.current.locals,e=a&&a.$template;if(e){var r=p.$new();y(r,function(v){k();v.html(e);d.enter(v,null,l);var f=g(v.contents()),n=c.current;h=n.scope=r;q=v;if(n.controller){a.$scope=h;var p=b(n.controller,a);n.controllerAs&&(h[n.controllerAs]=p);
v.data("$ngControllerController",p);v.children().data("$ngControllerController",p)}f(h);h.$emit("$viewContentLoaded");h.$eval(t);s()})}else k()}var h,q,t=m.onload||"";p.$on("$routeChangeSuccess",x);x()}}}}u=c.module("ngRoute",["ng"]).provider("$route",function(){function u(b,d){return c.extend(new (c.extend(function(){},{prototype:b})),d)}function s(b,c){var l=c.caseInsensitiveMatch,m={originalPath:b,regexp:b},g=m.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(b,
c,d,k){b="?"===k?k:null;k="*"===k?k:null;g.push({name:d,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(k&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");m.regexp=RegExp("^"+b+"$",l?"i":"");return m}var g={};this.when=function(b,d){g[b]=c.extend({reloadOnSearch:!0},d,b&&s(b,d));if(b){var l="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";g[l]=c.extend({redirectTo:b},s(l,d))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=["$rootScope",
"$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,d,l,m,s,p,w,z){function k(){var a=x(),e=t.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!q)e.params=a.params,c.copy(e.params,l),b.$broadcast("$routeUpdate",e);else if(a||e)q=!1,b.$broadcast("$routeChangeStart",a,e),(t.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?d.path(h(a.redirectTo,a.params)).search(a.params).replace():d.url(a.redirectTo(a.pathParams,d.path(),
d.search())).replace()),m.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,f;c.forEach(b,function(a,e){b[e]=c.isString(a)?s.get(a):s.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(f=a.templateUrl)&&(c.isFunction(f)&&(f=f(a.params)),f=z.getTrustedResourceUrl(f),c.isDefined(f)&&(a.loadedTemplateUrl=f,e=p.get(f,{cache:w}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return m.all(b)}}).then(function(d){a==t.current&&(a&&(a.locals=d,
c.copy(a.params,l)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==t.current&&b.$broadcast("$routeChangeError",a,e,c)})}function x(){var a,b;c.forEach(g,function(r,k){var f;if(f=!b){var n=d.path();f=r.keys;var h={};if(r.regexp)if(n=r.regexp.exec(n)){for(var g=1,l=n.length;g<l;++g){var m=f[g-1],p="string"==typeof n[g]?decodeURIComponent(n[g]):n[g];m&&p&&(h[m.name]=p)}f=h}else f=null;else f=null;f=a=f}f&&(b=u(r,{params:c.extend({},d.search(),a),pathParams:a}),b.$$route=r)});return b||g[null]&&
u(g[null],{params:{},pathParams:{}})}function h(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var g=a.match(/(\w+)(.*)/),h=g[1];d.push(b[h]);d.push(g[2]||"");delete b[h]}});return d.join("")}var q=!1,t={routes:g,reload:function(){q=!0;b.$evalAsync(k)}};b.$on("$locationChangeSuccess",k);return t}]});u.provider("$routeParams",function(){this.$get=function(){return{}}});u.directive("ngView",w);w.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map