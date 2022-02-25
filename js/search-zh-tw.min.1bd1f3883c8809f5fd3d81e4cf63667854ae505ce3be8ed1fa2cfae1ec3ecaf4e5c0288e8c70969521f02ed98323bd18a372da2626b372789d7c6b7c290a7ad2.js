(()=>{var __create=Object.create;var __defProp=Object.defineProperty;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __getOwnPropNames=Object.getOwnPropertyNames;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __markAsModule=(target)=>__defProp(target,"__esModule",{value:true});var __commonJS=(callback,module2)=>()=>{if(!module2){module2={exports:{}};callback(module2.exports,module2);}
return module2.exports;};var __exportStar=(target,module2,desc)=>{__markAsModule(target);if(module2&&typeof module2==="object"||typeof module2==="function"){for(let key of __getOwnPropNames(module2))
if(!__hasOwnProp.call(target,key)&&key!=="default")
__defProp(target,key,{get:()=>module2[key],enumerable:!(desc=__getOwnPropDesc(module2,key))||desc.enumerable});}
return target;};var __toModule=(module2)=>{if(module2&&module2.__esModule)
return module2;return __exportStar(__defProp(module2!=null?__create(__getProtoOf(module2)):{},"default",{value:module2,enumerable:true}),module2);};var require_flexsearch_bundle=__commonJS((exports,module)=>{(function _f(self){"use strict";try{if(module)
self=module;}catch(e){}
self._factory=_f;var t;function u(a){return typeof a!=="undefined"?a:true;}
function aa(a){const b=Array(a);for(let c=0;c<a;c++)
b[c]=v();return b;}
function v(){return Object.create(null);}
function ba(a,b){return b.length-a.length;}
function x(a){return typeof a==="string";}
function C(a){return typeof a==="object";}
function D(a){return typeof a==="function";};function ca(a,b){var c=da;if(a&&(b&&(a=E(a,b)),this.H&&(a=E(a,this.H)),this.J&&1<a.length&&(a=E(a,this.J)),c||c==="")){a=a.split(c);if(this.filter){b=this.filter;c=a.length;const d=[];for(let e=0,f=0;e<c;e++){const g=a[e];g&&!b[g]&&(d[f++]=g);}
a=d;}
return a;}
return a;}
const da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(a,b){const c=Object.keys(a),d=c.length,e=[];let f="",g=0;for(let h=0,k,m;h<d;h++)
k=c[h],(m=a[k])?(e[g++]=F(b?"(?!\\b)"+k+"(\\b|_)":k),e[g++]=m):f+=(f?"|":"")+k;f&&(e[g++]=F(b?"(?!\\b)("+f+")(\\b|_)":"("+f+")"),e[g]="");return e;}
function E(a,b){for(let c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a;}
function F(a){return new RegExp(a,"g");}
function ha(a){let b="",c="";for(let d=0,e=a.length,f;d<e;d++)
(f=a[d])!==c&&(b+=c=f);return b;};var ja={encode:ia,F:false,G:""};function ia(a){return ca.call(this,(""+a).toLowerCase(),false);};const ka={},G={};function la(a){I(a,"add");I(a,"append");I(a,"search");I(a,"update");I(a,"remove");}
function I(a,b){a[b+"Async"]=function(){const c=this,d=arguments;var e=d[d.length-1];let f;D(e)&&(f=e,delete d[d.length-1]);e=new Promise(function(g){setTimeout(function(){c.async=true;const h=c[b].apply(c,d);c.async=false;g(h);});});return f?(e.then(f),this):e;};};function ma(a,b,c,d){const e=a.length;let f=[],g,h,k=0;d&&(d=[]);for(let m=e-1;0<=m;m--){const n=a[m],w=n.length,q=v();let r=!g;for(let l=0;l<w;l++){const p=n[l],z=p.length;if(z)
for(let B=0,A,y;B<z;B++)
if(y=p[B],g){if(g[y]){if(!m){if(c)
c--;else if(f[k++]=y,k===b)
return f;}
if(m||d)
q[y]=1;r=true;}
if(d&&(h[y]=(A=h[y])?++A:A=1,A<e)){const H=d[A-2]||(d[A-2]=[]);H[H.length]=y;}}else
q[y]=1;}
if(d)
g||(h=q);else if(!r)
return[];g=q;}
if(d)
for(let m=d.length-1,n,w;0<=m;m--){n=d[m];w=n.length;for(let q=0,r;q<w;q++)
if(r=n[q],!g[r]){if(c)
c--;else if(f[k++]=r,k===b)
return f;g[r]=1;}}
return f;}
function na(a,b){const c=v(),d=v(),e=[];for(let f=0;f<a.length;f++)
c[a[f]]=1;for(let f=0,g;f<b.length;f++){g=b[f];for(let h=0,k;h<g.length;h++)
k=g[h],c[k]&&!d[k]&&(d[k]=1,e[e.length]=k);}
return e;};function J(a){this.l=a!==true&&a;this.cache=v();this.h=[];}
function oa(a,b,c){C(a)&&(a=a.query);let d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d;}
J.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)
this.h[c]=this.h[c-1];this.h[0]=a;}
this.cache[a]=b;};J.prototype.get=function(a){const b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){const c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c;}
return b;};const qa={memory:{charset:"latin:extra",D:3,B:4,m:false},performance:{D:3,B:3,s:false,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(a,b,c,d,e,f){setTimeout(function(){const g=a(c,JSON.stringify(f));g&&g.then?g.then(function(){b.export(a,b,c,d,e+1);}):b.export(a,b,c,d,e+1);});};function K(a,b){if(!(this instanceof K))
return new K(a);var c;if(a){x(a)?a=qa[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;x(c)&&(c.indexOf(":")===-1&&(c+=":default"),c=G[c]);x(d)&&(d=ka[d]);}else
a={};let e,f,g=a.context||{};this.encode=a.encode||c&&c.encode||ia;this.register=b||v();this.D=e=a.resolution||9;this.G=b=c&&c.G||a.tokenize||"strict";this.depth=b==="strict"&&g.depth;this.l=u(g.bidirectional);this.s=f=u(a.optimize);this.m=u(a.fastupdate);this.B=a.minlength||1;this.C=a.boost;this.map=f?aa(e):v();this.A=e=g.resolution||1;this.h=f?aa(e):v();this.F=c&&c.F||a.rtl;this.H=(b=a.matcher||d&&d.H)&&fa(b,false);this.J=(b=a.stemmer||d&&d.J)&&fa(b,true);if(c=b=a.filter||d&&d.filter){c=b;d=v();for(let h=0,k=c.length;h<k;h++)
d[c[h]]=1;c=d;}
this.filter=c;this.cache=(b=a.cache)&&new J(b);}
t=K.prototype;t.append=function(a,b){return this.add(a,b,true);};t.add=function(a,b,c,d){if(b&&(a||a===0)){if(!d&&!c&&this.register[a])
return this.update(a,b);b=this.encode(b);if(d=b.length){const m=v(),n=v(),w=this.depth,q=this.D;for(let r=0;r<d;r++){let l=b[this.F?d-1-r:r];var e=l.length;if(l&&e>=this.B&&(w||!n[l])){var f=L(q,d,r),g="";switch(this.G){case "full":if(3<e){for(f=0;f<e;f++)
for(var h=e;h>f;h--)
if(h-f>=this.B){var k=L(q,d,r,e,f);g=l.substring(f,h);M(this,n,g,k,a,c);}
break;}
case "reverse":if(2<e){for(h=e-1;0<h;h--)
g=l[h]+g,g.length>=this.B&&M(this,n,g,L(q,d,r,e,h),a,c);g="";}
case "forward":if(1<e){for(h=0;h<e;h++)
g+=l[h],g.length>=this.B&&M(this,n,g,f,a,c);break;}
default:if(this.C&&(f=Math.min(f/this.C(b,l,r)|0,q-1)),M(this,n,l,f,a,c),w&&1<d&&r<d-1){for(e=v(),g=this.A,f=l,h=Math.min(w+1,d-r),e[f]=1,k=1;k<h;k++)
if((l=b[this.F?d-1-r-k:r+k])&&l.length>=this.B&&!e[l]){e[l]=1;const p=this.l&&l>f;M(this,m,p?f:l,L(g+(d/2>g?0:1),d,r,h-1,k-1),a,c,p?l:f);}}}}}
this.m||(this.register[a]=1);}}
return this;};function L(a,b,c,d,e){return c&&1<a?b+(d||0)<=a?c+(e||0):(a-1)/(b+(d||0))*(c+(e||0))+1|0:0;}
function M(a,b,c,d,e,f,g){let h=g?a.h:a.map;if(!b[c]||g&&!b[c][g])
a.s&&(h=h[d]),g?(b=b[c]||(b[c]=v()),b[g]=1,h=h[g]||(h[g]=v())):b[c]=1,h=h[c]||(h[c]=[]),a.s||(h=h[d]||(h[d]=[])),f&&h.indexOf(e)!==-1||(h[h.length]=e,a.m&&(a=a.register[e]||(a.register[e]=[]),a[a.length]=h));}
t.search=function(a,b,c){c||(!b&&C(a)?(c=a,a=c.query):C(b)&&(c=b));let d=[],e;let f,g=0;if(c){b=c.limit;g=c.offset||0;var h=c.context;f=c.suggest;}
if(a&&(a=this.encode(a),e=a.length,1<e)){c=v();var k=[];for(let n=0,w=0,q;n<e;n++)
if((q=a[n])&&q.length>=this.B&&!c[q])
if(this.s||f||this.map[q])
k[w++]=q,c[q]=1;else
return d;a=k;e=a.length;}
if(!e)
return d;b||(b=100);h=this.depth&&1<e&&h!==false;c=0;let m;h?(m=a[0],c=1):1<e&&a.sort(ba);for(let n,w;c<e;c++){w=a[c];h?(n=sa(this,d,f,b,g,e===2,w,m),f&&n===false&&d.length||(m=w)):n=sa(this,d,f,b,g,e===1,w);if(n)
return n;if(f&&c===e-1){k=d.length;if(!k){if(h){h=0;c=-1;continue;}
return d;}
if(k===1)
return ta(d[0],b,g);}}
return ma(d,b,g,f);};function sa(a,b,c,d,e,f,g,h){let k=[],m=h?a.h:a.map;a.s||(m=ua(m,g,h,a.l));if(m){let n=0;const w=Math.min(m.length,h?a.A:a.D);for(let q=0,r=0,l,p;q<w;q++)
if(l=m[q]){if(a.s&&(l=ua(l,g,h,a.l)),e&&l&&f&&(p=l.length,p<=e?(e-=p,l=null):(l=l.slice(e),e=0)),l&&(k[n++]=l,f&&(r+=l.length,r>=d)))
break;}
if(n){if(f)
return ta(k,d,0);b[b.length]=k;return;}}
return!c&&k;}
function ta(a,b,c){a=a.length===1?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a;}
function ua(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a;}
t.contain=function(a){return!!this.register[a];};t.update=function(a,b){return this.remove(a).add(a,b);};t.remove=function(a,b){const c=this.register[a];if(c){if(this.m)
for(let d=0,e;d<c.length;d++)
e=c[d],e.splice(e.indexOf(a),1);else
N(this.map,a,this.D,this.s),this.depth&&N(this.h,a,this.A,this.s);b||delete this.register[a];if(this.cache){b=this.cache;for(let d=0,e,f;d<b.h.length;d++)
f=b.h[d],e=b.cache[f],e.indexOf(a)!==-1&&(b.h.splice(d--,1),delete b.cache[f]);}}
return this;};function N(a,b,c,d,e){let f=0;if(a.constructor===Array)
if(e)
b=a.indexOf(b),b!==-1?1<a.length&&(a.splice(b,1),f++):f++;else{e=Math.min(a.length,c);for(let g=0,h;g<e;g++)
if(h=a[g])
f=N(h,b,c,d,e),d||f||delete a[g];}
else
for(let g in a)
(f=N(a[g],b,c,d,e))||delete a[g];return f;}
t.searchCache=oa;t.export=function(a,b,c,d,e){let f,g;switch(e||(e=0)){case 0:f="reg";if(this.m){g=v();for(let h in this.register)
g[h]=1;}else
g=this.register;break;case 1:f="cfg";g={doc:0,opt:this.s?1:0};break;case 2:f="map";g=this.map;break;case 3:f="ctx";g=this.h;break;default:return;}
ra(a,b||this,c?c+"."+f:f,d,e,g);return true;};t.import=function(a,b){if(b)
switch(x(b)&&(b=JSON.parse(b)),a){case "cfg":this.s=!!b.opt;break;case "reg":this.m=false;this.register=b;break;case "map":this.map=b;break;case "ctx":this.h=b;}};la(K.prototype);function va(a){a=a.data;var b=self._index;const c=a.args;var d=a.task;switch(d){case "init":d=a.options||{};a=a.factory;b=d.encode;d.cache=false;b&&b.indexOf("function")===0&&(d.encode=Function("return "+b)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(d),delete self.FlexSearch):self._index=new K(d);break;default:a=a.id,b=b[d].apply(b,c),postMessage(d==="search"?{id:a,msg:b}:{id:a});}};let wa=0;function O(a){if(!(this instanceof O))
return new O(a);var b;a?D(b=a.encode)&&(a.encode=b.toString()):a={};(b=(self||window)._factory)&&(b=b.toString());const c=self.exports,d=this;this.o=xa(b,c,a.worker);this.h=v();if(this.o){if(c)
this.o.on("message",function(e){d.h[e.id](e.msg);delete d.h[e.id];});else
this.o.onmessage=function(e){e=e.data;d.h[e.id](e.msg);delete d.h[e.id];};this.o.postMessage({task:"init",factory:b,options:a});}}
P("add");P("append");P("search");P("update");P("remove");function P(a){O.prototype[a]=O.prototype[a+"Async"]=function(){const b=this,c=[].slice.call(arguments);var d=c[c.length-1];let e;D(d)&&(e=d,c.splice(c.length-1,1));d=new Promise(function(f){setTimeout(function(){b.h[++wa]=f;b.o.postMessage({task:a,id:wa,args:c});});});return e?(d.then(e),this):d;};}
function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"});}catch(e){}
return d;};function Q(a){if(!(this instanceof Q))
return new Q(a);var b=a.document||a.doc||a,c;this.K=[];this.h=[];this.A=[];this.register=v();this.key=(c=b.key||b.id)&&S(c,this.A)||"id";this.m=u(a.fastupdate);this.C=(c=b.store)&&c!==true&&[];this.store=c&&v();this.I=(c=b.tag)&&S(c,this.A);this.l=c&&v();this.cache=(c=a.cache)&&new J(c);a.cache=false;this.o=a.worker;this.async=false;c=v();let d=b.index||b.field||b;x(d)&&(d=[d]);for(let e=0,f,g;e<d.length;e++)
f=d[e],x(f)||(g=f,f=f.field),g=C(g)?Object.assign({},a,g):a,this.o&&(c[f]=new O(g),c[f].o||(this.o=false)),this.o||(c[f]=new K(g,this.register)),this.K[e]=S(f,this.A),this.h[e]=f;if(this.C)
for(a=b.store,x(a)&&(a=[a]),b=0;b<a.length;b++)
this.C[b]=S(a[b],this.A);this.index=c;}
function S(a,b){const c=a.split(":");let d=0;for(let e=0;e<c.length;e++)
a=c[e],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=true),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0];}
function T(a,b){if(x(b))
a=a[b];else
for(let c=0;a&&c<b.length;c++)
a=a[b[c]];return a;}
function U(a,b,c,d,e){a=a[e];if(d===c.length-1)
b[e]=a;else if(a)
if(a.constructor===Array)
for(b=b[e]=Array(a.length),e=0;e<a.length;e++)
U(a,b,c,d,e);else
b=b[e]||(b[e]=v()),e=c[++d],U(a,b,c,d,e);}
function V(a,b,c,d,e,f,g,h){if(a=a[g])
if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)
e.add(f,a[b],true,true);return;}
a=a.join(" ");}
e.add(f,a,h,true);}else if(a.constructor===Array)
for(g=0;g<a.length;g++)
V(a,b,c,d,e,f,g,h);else
g=b[++d],V(a,b,c,d,e,f,g,h);}
t=Q.prototype;t.add=function(a,b,c){C(a)&&(b=a,a=T(b,this.key));if(b&&(a||a===0)){if(!c&&this.register[a])
return this.update(a,b);for(let d=0,e,f;d<this.h.length;d++)
f=this.h[d],e=this.K[d],x(e)&&(e=[e]),V(b,e,this.A,0,this.index[f],a,e[0],c);if(this.I){let d=T(b,this.I),e=v();x(d)&&(d=[d]);for(let f=0,g,h;f<d.length;f++)
if(g=d[f],!e[g]&&(e[g]=1,h=this.l[g]||(this.l[g]=[]),!c||h.indexOf(a)===-1)){if(h[h.length]=a,this.m){const k=this.register[a]||(this.register[a]=[]);k[k.length]=h;}}}
if(this.store&&(!c||!this.store[a])){let d;if(this.C){d=v();for(let e=0,f;e<this.C.length;e++)
f=this.C[e],x(f)?d[f]=b[f]:U(b,d,f,0,f[0]);}
this.store[a]=d||b;}}
return this;};t.append=function(a,b){return this.add(a,b,true);};t.update=function(a,b){return this.remove(a).add(a,b);};t.remove=function(a){C(a)&&(a=T(a,this.key));if(this.register[a]){for(var b=0;b<this.h.length&&(this.index[this.h[b]].remove(a,!this.o),!this.m);b++);if(this.I&&!this.m)
for(let c in this.l){b=this.l[c];const d=b.indexOf(a);d!==-1&&(1<b.length?b.splice(d,1):delete this.l[c]);}
this.store&&delete this.store[a];delete this.register[a];}
return this;};t.search=function(a,b,c,d){c||(!b&&C(a)?(c=a,a=c.query):C(b)&&(c=b,b=0));let e=[],f=[],g,h,k,m,n,w,q=0;if(c)
if(c.constructor===Array)
k=c,c=null;else{k=(g=c.pluck)||c.index||c.field;m=c.tag;h=this.store&&c.enrich;n=c.bool==="and";b=c.limit||100;w=c.offset||0;if(m&&(x(m)&&(m=[m]),!a)){for(let l=0,p;l<m.length;l++)
if(p=ya.call(this,m[l],b,w,h))
e[e.length]=p,q++;return q?e:[];}
x(k)&&(k=[k]);}
k||(k=this.h);n=n&&(1<k.length||m&&1<m.length);const r=!d&&(this.o||this.async)&&[];for(let l=0,p,z,B;l<k.length;l++){let A;z=k[l];x(z)||(A=z,z=z.field);if(r)
r[l]=this.index[z].searchAsync(a,b,A||c);else{d?p=d[l]:p=this.index[z].search(a,b,A||c);B=p&&p.length;if(m&&B){const y=[];let H=0;n&&(y[0]=[p]);for(let X=0,pa,R;X<m.length;X++)
if(pa=m[X],B=(R=this.l[pa])&&R.length)
H++,y[y.length]=n?[R]:R;H&&(p=n?ma(y,b||100,w||0):na(p,y),B=p.length);}
if(B)
f[q]=z,e[q++]=p;else if(n)
return[];}}
if(r){const l=this;return new Promise(function(p){Promise.all(r).then(function(z){p(l.search(a,b,c,z));});});}
if(!q)
return[];if(g&&(!h||!this.store))
return e[0];for(let l=0,p;l<f.length;l++){p=e[l];p.length&&h&&(p=za.call(this,p));if(g)
return p;e[l]={field:f[l],result:p};}
return e;};function ya(a,b,c,d){let e=this.l[a],f=e&&e.length-c;if(f&&0<f){if(f>b||c)
e=e.slice(c,c+b);d&&(e=za.call(this,e));return{tag:a,result:e};}}
function za(a){const b=Array(a.length);for(let c=0,d;c<a.length;c++)
d=a[c],b[c]={id:d,doc:this.store[d]};return b;}
t.contain=function(a){return!!this.register[a];};t.get=function(a){return this.store[a];};t.set=function(a,b){this.store[a]=b;return this;};t.searchCache=oa;t.export=function(a,b,c,d,e){e||(e=0);d||(d=0);if(d<this.h.length){const f=this.h[d],g=this.index[f];b=this;setTimeout(function(){g.export(a,b,e?f.replace(":","-"):"",d,e++)||(d++,e=1,b.export(a,b,f,d,e));});}else{let f;switch(e){case 1:c="tag";f=this.l;break;case 2:c="store";f=this.store;break;default:return;}
ra(a,this,c,d,e,f);}};t.import=function(a,b){if(b)
switch(x(b)&&(b=JSON.parse(b)),a){case "tag":this.l=b;break;case "reg":this.m=false;this.register=b;for(let d=0,e;d<this.h.length;d++)
e=this.index[this.h[d]],e.register=b,e.m=false;break;case "store":this.store=b;break;default:a=a.split(".");const c=a[0];a=a[1];c&&a&&this.index[c].import(a,b);}};la(Q.prototype);var Ba={encode:Aa,F:false,G:""};const Ca=[F("[\xE0\xE1\xE2\xE3\xE4\xE5]"),"a",F("[\xE8\xE9\xEA\xEB]"),"e",F("[\xEC\xED\xEE\xEF]"),"i",F("[\xF2\xF3\xF4\xF5\xF6\u0151]"),"o",F("[\xF9\xFA\xFB\xFC\u0171]"),"u",F("[\xFD\u0177\xFF]"),"y",F("\xF1"),"n",F("[\xE7c]"),"k",F("\xDF"),"s",F(" & ")," and "];function Aa(a){var b=a;b.normalize&&(b=b.normalize("NFD").replace(ea,""));return ca.call(this,b.toLowerCase(),!a.normalize&&Ca);};var Ea={encode:Da,F:false,G:"strict"};const Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",\u00DF:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(a){a=Aa.call(this,a).join(" ");const b=[];if(a){const c=a.split(Fa),d=c.length;for(let e=0,f,g=0;e<d;e++)
if((a=c[e])&&(!this.filter||!this.filter[a])){f=a[0];let h=Ga[f]||f,k=h;for(let m=1;m<a.length;m++){f=a[m];const n=Ga[f]||f;n&&n!==k&&(h+=n,k=n);}
b[g++]=h;}}
return b;};var Ia={encode:Ha,F:false,G:""};const Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(a,b){a&&(a=Da.call(this,a).join(" "),2<a.length&&(a=E(a,Ja)),b||(1<a.length&&(a=ha(a)),a&&(a=a.split(" "))));return a;};var La={encode:Ka,F:false,G:""};const Ma=F("(?!\\b)[aeo]");function Ka(a){a&&(a=Ha.call(this,a,true),1<a.length&&(a=a.replace(Ma,"")),1<a.length&&(a=ha(a)),a&&(a=a.split(" ")));return a;};G["latin:default"]=ja;G["latin:simple"]=Ba;G["latin:balance"]=Ea;G["latin:advanced"]=Ia;G["latin:extra"]=La;const W=self;let Y;const Z={Index:K,Document:Q,Worker:O,registerCharset:function(a,b){G[a]=b;},registerLanguage:function(a,b){ka[a]=b;}};(Y=W.define)&&Y.amd?Y([],function(){return Z;}):W.exports?W.exports=Z:W.FlexSearch=Z;})(exports);});var index_url="/hugo-theme-monochrome/zh-tw/index.json";var flexsearch=__toModule(require_flexsearch_bundle());async function init(){const data=fetch(index_url);const search_btn=document.getElementById("search_btn");const search_menu_wrapper=document.getElementById("search_menu_wrapper");const search_menu_close_btn=document.getElementById("search_menu_close_btn");const search_menu_input=document.getElementById("search_menu_input");const search_menu_results=document.getElementById("search_menu_results");search_btn.addEventListener("click",function(){search_menu_wrapper.classList.remove("hidden");search_menu_wrapper.classList.add("flex");search_menu_input.focus();});search_menu_close_btn.addEventListener("click",function(){search_menu_wrapper.classList.add("hidden");search_menu_wrapper.classList.remove("flex");});const index_json=await(await data).json();const items_list=[];let id=0;const ascii_index=new flexsearch.Document({id:"id",index:["title","content"],tokenize:"forward",encode:(str)=>str.replace(/[^\x00-\x7F]/g,"").split(" "),store:true});const nonascii_index=new flexsearch.Document({id:"id",index:["title","content"],encode:(str)=>str.replace(/[\x00-\x7F]/g,"").split(""),store:true});index_json.forEach((post)=>{post.id=id++;ascii_index.add(post);nonascii_index.add(post);});const createItem=(title,permalink,content)=>{const item=document.createElement("a");item.href=permalink;const item_wrapper=document.createElement("div");item_wrapper.className="search-menu-result-item";const item_title=document.createElement("div");item_title.className="search-menu-result-item-title";item_title.innerHTML=title;const item_content=document.createElement("div");item_content.className="search-menu-result-item-content";item_content.innerHTML=content;item_wrapper.appendChild(item_title);item_wrapper.appendChild(item_content);item.appendChild(item_wrapper);return item;};const showAllItems=()=>{items_list.forEach((i)=>{i.classList.remove("hidden");});};const buildAllItems=()=>{index_json.forEach((index_item)=>{const item=createItem(index_item.title,index_item.permalink,index_item.content);search_menu_results.appendChild(item);items_list.push(item);});};const search=(value)=>{let ascii_res=ascii_index.search(value);let nonascii_res=nonascii_index.search(value);let reduce_res_to_id=(res)=>{return res.reduce((acc,curr)=>{curr.result.forEach((x)=>acc.add(x));return acc;},new Set());};let res_id=new Set([...reduce_res_to_id(ascii_res),...reduce_res_to_id(nonascii_res)]);for(let i=0;i<items_list.length;i++){if(res_id.has(i)){items_list[i].classList.remove("hidden");}else{items_list[i].classList.add("hidden");}}};search_menu_input.addEventListener("input",function(){if(this.value===""){showAllItems();}else{search(this.value);}});buildAllItems();}
window.addEventListener("DOMContentLoaded",init);})();