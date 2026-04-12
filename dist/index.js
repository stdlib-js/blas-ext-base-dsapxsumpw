"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(h,n){
var c=require('@stdlib/blas-ext-base-dssumpw/dist').ndarray;function f(r,e,s,a,x){return r<=0?0:r*e+c(r,s,a,x)}n.exports=f
});var v=i(function(k,p){
var y=require('@stdlib/strided-base-stride2offset/dist'),w=u();function j(r,e,s,a){return w(r,e,s,a,y(r,a))}p.exports=j
});var o=i(function(z,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=u();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
