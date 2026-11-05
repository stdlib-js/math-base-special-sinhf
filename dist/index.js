"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var v=f(function(h,n){
var a=require('@stdlib/number-float64-base-to-float32/dist');function l(r){return r===0?.1666671633720398:a(.1666671633720398+a(r*a(.008330283686518669+a(r*.00020372190920170397))))}n.exports=l
});var q=f(function(m,o){
var p=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-assert-is-infinitef/dist'),F=require('@stdlib/math-base-special-expf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),N=require('@stdlib/constants-float32-pinf/dist'),O=require('@stdlib/constants-float32-ninf/dist'),E=require('@stdlib/constants-float32-max-ln/dist'),I=v(),t=i(0),s=i(.5),y=i(1);function A(r){var e,u;return r=i(r),r===t||p(r)||c(r)?r:(r>t?u=r:u=-r,u>E?r>t?N:O:(u>y?(e=F(u),e=i(i(s*e)-i(s/e)),r<t&&(e=-e)):(e=i(r*r),e=i(i(i(I(e)*e)*r)+r)),e))}o.exports=A
});var L=q();module.exports=L;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
