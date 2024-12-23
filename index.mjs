// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var s=128;function n(r,e,i,d,o){var f,a,m,l,u,p,j,v,h,b,c,x,y;if(r<=0)return 0;if(f=o,0===d)return r*(e+i[f]);if(r<8){for(c=0,y=0;y<r;y++)c+=e+i[f],f+=d;return c}if(r<=s){for(a=e+i[f],m=e+i[f+d],l=e+i[f+2*d],u=e+i[f+3*d],p=e+i[f+4*d],j=e+i[f+5*d],v=e+i[f+6*d],h=e+i[f+7*d],f+=8*d,b=r%8,y=8;y<r-b;y+=8)a+=e+i[f],m+=e+i[f+d],l+=e+i[f+2*d],u+=e+i[f+3*d],p+=e+i[f+4*d],j+=e+i[f+5*d],v+=e+i[f+6*d],h+=e+i[f+7*d],f+=8*d;for(c=a+m+(l+u)+(p+j+(v+h));y<r;y++)c+=e+i[f],f+=d;return c}return x=t(r/2),n(x-=x%8,e,i,d,f)+n(r-x,e,i,d,f+x*d)}function i(r,t,s,i){return n(r,t,s,i,e(r,i))}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
