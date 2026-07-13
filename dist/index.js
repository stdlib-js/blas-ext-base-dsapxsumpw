"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=i(function(h,n){
var c=require('@stdlib/blas-ext-base-dssumpw/dist').ndarray;function f(e,r,a,s,x){return e<=0?0:e*r+c(e,a,s,x)}n.exports=f
});var v=i(function(k,p){
var y=require('@stdlib/strided-base-stride2offset/dist'),w=u();function j(e,r,a,s){return w(e,r,a,s,y(e,s))}p.exports=j
});var o=i(function(z,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=u();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
