// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};var f=e;var c=Math.floor;function _(r,e,t,n,o){var a,i,u,l,f,p,b,y,d,v,s,j,g;if(r<=0)return 0;if(1===r||0===n)return e+t[o];if(a=o,r<8){for(s=0,g=0;g<r;g++)s+=e+t[a],a+=n;return s}if(r<=128){for(i=e+t[a],u=e+t[a+n],l=e+t[a+2*n],f=e+t[a+3*n],p=e+t[a+4*n],b=e+t[a+5*n],y=e+t[a+6*n],d=e+t[a+7*n],a+=8*n,v=r%8,g=8;g<r-v;g+=8)i+=e+t[a],u+=e+t[a+n],l+=e+t[a+2*n],f+=e+t[a+3*n],p+=e+t[a+4*n],b+=e+t[a+5*n],y+=e+t[a+6*n],d+=e+t[a+7*n],a+=8*n;for(s=i+u+(l+f)+(p+b+(y+d));g<r;g++)s+=e+t[a],a+=n;return s}return j=c(r/2),_(j-=j%8,e,t,n,a)+_(r-j,e,t,n,a+j*n)}function p(r,e,t,n){var o,a,i;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(a=0,i=0;i<r;i++)a+=e+t[o],o+=n;return a}return _(r,e,t,n,o)}f(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{p as default,_ as ndarray};
//# sourceMappingURL=mod.js.map