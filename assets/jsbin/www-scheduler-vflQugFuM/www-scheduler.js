(function(){var e=this;function g(a){a=a.split(".");for(var b=e,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function h(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}var m=Date.now||function(){return+new Date};function n(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?d[f]?d=d[f]:d=d[f]={}:d[f]=b}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function p(){this.j=this.j;this.o=this.o}p.prototype.j=!1;p.prototype.isDisposed=function(){return this.j};p.prototype.dispose=function(){this.j||(this.j=!0,this.A())};p.prototype.A=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function r(){p.call(this);this.c=[];this.c[3]=[];this.c[2]=[];this.c[1]=[];this.c[0]=[];this.f={};this.l=r.c;this.C=this.m=0;this.B=this.v=!1;this.h=[];this.D=l(this.F,this)}(function(){var a=r;function b(){}b.prototype=p.prototype;a.G=p.prototype;a.prototype=new b;a.base=function(a,b,f){for(var v=Array(arguments.length-2),q=2;q<arguments.length;q++)v[q-2]=arguments[q];return p.prototype[b].apply(a,v)}})();r.j="hidden";r.h=1E3/60;r.f=3;r.c=r.h-r.f;
function t(a,b,c,d){++a.C;var f=a.C;a.f[f]=b;a.v&&!d?a.h.push({id:f,priority:c}):(a.c[c].push(f),a.B||a.v||a.start());return f}function u(a){a.h.length=0;for(var b=3;0<=b;b--)a.c[b].length=0;a.f={};a.stop()}function w(a){try{a()}catch(b){(a=g("yt.www.errors.log"))&&a(b)}}
r.prototype.F=function(){this.stop();this.v=!0;for(var a=m()+this.l,b=this.c[3];b.length;){var c=b.shift(),d=this.f[c];delete this.f[c];d&&w(d)}if(!(m()>=a)){do{a:{for(b=2;0<=b;b--)for(c=this.c[b];c.length;){var d=c.shift(),f=this.f[d];delete this.f[d];if(f){b=f;break a}}b=null}b&&w(b)}while(b&&m()<a)}this.v=!1;b=0;for(c=this.h.length;b<c;b++)d=this.h[b],this.c[d.priority].push(d.id);this.l=r.c;(a<=m()||this.h.length)&&this.start();this.h.length=0};
r.prototype.start=function(){this.B=!1;0==this.m&&(this.m=window.setTimeout(this.D,1))};r.prototype.pause=function(){this.stop();this.B=!0};r.prototype.stop=function(){window.clearTimeout(this.m);this.m=0};r.prototype.A=function(){u(this);this.stop();r.G.A.call(this)};function x(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new r,n("yt.scheduler.instance.instance_",a);return a}function y(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}function z(){u(x())}var A=g("yt.scheduler.instance.timerIdMap_")||{};function B(a,b,c){if(0==c||void 0===c)return c=void 0===c,-t(x(),a,b,c);var d=window.setTimeout(function(){var c=t(x(),a,b);A[d]=c},c);return d}
function C(a){var b=x(),c=m();w(a);a=m()-c;b.l-=a}function D(a){var b=x();if(0>a)delete b.f[-a];else{var c=A[a];c?(delete b.f[c],delete A[a]):window.clearTimeout(a)}}function E(){x().start()}function F(){x().pause()}function G(){}G.getInstance=function(){return G.c?G.c:G.c=new G};G.prototype.addTask=function(a){return B(a,2)};G.prototype.cancelTask=function(a){D(a)};if(!g("yt.scheduler.initialized")){n("yt.scheduler.instance.dispose",y);n("yt.scheduler.instance.addJob",B);n("yt.scheduler.instance.addImmediateJob",C);n("yt.scheduler.instance.cancelJob",D);n("yt.scheduler.instance.cancelAllJobs",z);n("yt.scheduler.instance.start",E);n("yt.scheduler.instance.pause",F);n("yt.scheduler.SpfScheduler.instance",G.getInstance());var H=G.getInstance(),I=G.getInstance().addTask;H.addTask=I;var J=G.getInstance(),K=G.getInstance().cancelTask;J.cancelTask=K;n("yt.scheduler.initialized",
!0)}})();
