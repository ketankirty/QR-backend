(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function Fp(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var yc={exports:{}},ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Qb(){if(um)return ci;um=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(u,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:a,type:u,key:d,ref:c!==void 0?c:null,props:f}}return ci.Fragment=l,ci.jsx=o,ci.jsxs=o,ci}var sm;function Zb(){return sm||(sm=1,yc.exports=Qb()),yc.exports}var v=Zb(),xc={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Fb(){if(cm)return Le;cm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function P(S,Z,se){this.props=S,this.context=Z,this.refs=_,this.updater=se||A}P.prototype.isReactComponent={},P.prototype.setState=function(S,Z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Z,"setState")},P.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function j(){}j.prototype=P.prototype;function X(S,Z,se){this.props=S,this.context=Z,this.refs=_,this.updater=se||A}var Y=X.prototype=new j;Y.constructor=X,T(Y,P.prototype),Y.isPureReactComponent=!0;var $=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function ee(S,Z,se,le,be,Ue){return se=Ue.ref,{$$typeof:a,type:S,key:Z,ref:se!==void 0?se:null,props:Ue}}function ae(S,Z){return ee(S.type,Z,void 0,void 0,void 0,S.props)}function Q(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function de(S){var Z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return Z[se]})}var ce=/\/+/g;function te(S,Z){return typeof S=="object"&&S!==null&&S.key!=null?de(""+S.key):Z.toString(36)}function ie(){}function re(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ie,ie):(S.status="pending",S.then(function(Z){S.status==="pending"&&(S.status="fulfilled",S.value=Z)},function(Z){S.status==="pending"&&(S.status="rejected",S.reason=Z)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ye(S,Z,se,le,be){var Ue=typeof S;(Ue==="undefined"||Ue==="boolean")&&(S=null);var Se=!1;if(S===null)Se=!0;else switch(Ue){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(S.$$typeof){case a:case l:Se=!0;break;case y:return Se=S._init,ye(Se(S._payload),Z,se,le,be)}}if(Se)return be=be(S),Se=le===""?"."+te(S,0):le,$(be)?(se="",Se!=null&&(se=Se.replace(ce,"$&/")+"/"),ye(be,Z,se,"",function(yt){return yt})):be!=null&&(Q(be)&&(be=ae(be,se+(be.key==null||S&&S.key===be.key?"":(""+be.key).replace(ce,"$&/")+"/")+Se)),Z.push(be)),1;Se=0;var Ie=le===""?".":le+":";if($(S))for(var Be=0;Be<S.length;Be++)le=S[Be],Ue=Ie+te(le,Be),Se+=ye(le,Z,se,Ue,be);else if(Be=x(S),typeof Be=="function")for(S=Be.call(S),Be=0;!(le=S.next()).done;)le=le.value,Ue=Ie+te(le,Be++),Se+=ye(le,Z,se,Ue,be);else if(Ue==="object"){if(typeof S.then=="function")return ye(re(S),Z,se,le,be);throw Z=String(S),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function C(S,Z,se){if(S==null)return S;var le=[],be=0;return ye(S,le,"","",function(Ue){return Z.call(se,Ue,be++)}),le}function ne(S){if(S._status===-1){var Z=S._result;Z=Z(),Z.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=Z)}if(S._status===1)return S._result.default;throw S._result}var me=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function _e(){}return Le.Children={map:C,forEach:function(S,Z,se){C(S,function(){Z.apply(this,arguments)},se)},count:function(S){var Z=0;return C(S,function(){Z++}),Z},toArray:function(S){return C(S,function(Z){return Z})||[]},only:function(S){if(!Q(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},Le.Component=P,Le.Fragment=o,Le.Profiler=c,Le.PureComponent=X,Le.StrictMode=u,Le.Suspense=h,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return K.H.useMemoCache(S)}},Le.cache=function(S){return function(){return S.apply(null,arguments)}},Le.cloneElement=function(S,Z,se){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var le=T({},S.props),be=S.key,Ue=void 0;if(Z!=null)for(Se in Z.ref!==void 0&&(Ue=void 0),Z.key!==void 0&&(be=""+Z.key),Z)!N.call(Z,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&Z.ref===void 0||(le[Se]=Z[Se]);var Se=arguments.length-2;if(Se===1)le.children=se;else if(1<Se){for(var Ie=Array(Se),Be=0;Be<Se;Be++)Ie[Be]=arguments[Be+2];le.children=Ie}return ee(S.type,be,void 0,void 0,Ue,le)},Le.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},Le.createElement=function(S,Z,se){var le,be={},Ue=null;if(Z!=null)for(le in Z.key!==void 0&&(Ue=""+Z.key),Z)N.call(Z,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(be[le]=Z[le]);var Se=arguments.length-2;if(Se===1)be.children=se;else if(1<Se){for(var Ie=Array(Se),Be=0;Be<Se;Be++)Ie[Be]=arguments[Be+2];be.children=Ie}if(S&&S.defaultProps)for(le in Se=S.defaultProps,Se)be[le]===void 0&&(be[le]=Se[le]);return ee(S,Ue,void 0,void 0,null,be)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(S){return{$$typeof:m,render:S}},Le.isValidElement=Q,Le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:ne}},Le.memo=function(S,Z){return{$$typeof:g,type:S,compare:Z===void 0?null:Z}},Le.startTransition=function(S){var Z=K.T,se={};K.T=se;try{var le=S(),be=K.S;be!==null&&be(se,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(_e,me)}catch(Ue){me(Ue)}finally{K.T=Z}},Le.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Le.use=function(S){return K.H.use(S)},Le.useActionState=function(S,Z,se){return K.H.useActionState(S,Z,se)},Le.useCallback=function(S,Z){return K.H.useCallback(S,Z)},Le.useContext=function(S){return K.H.useContext(S)},Le.useDebugValue=function(){},Le.useDeferredValue=function(S,Z){return K.H.useDeferredValue(S,Z)},Le.useEffect=function(S,Z,se){var le=K.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return le.useEffect(S,Z)},Le.useId=function(){return K.H.useId()},Le.useImperativeHandle=function(S,Z,se){return K.H.useImperativeHandle(S,Z,se)},Le.useInsertionEffect=function(S,Z){return K.H.useInsertionEffect(S,Z)},Le.useLayoutEffect=function(S,Z){return K.H.useLayoutEffect(S,Z)},Le.useMemo=function(S,Z){return K.H.useMemo(S,Z)},Le.useOptimistic=function(S,Z){return K.H.useOptimistic(S,Z)},Le.useReducer=function(S,Z,se){return K.H.useReducer(S,Z,se)},Le.useRef=function(S){return K.H.useRef(S)},Le.useState=function(S){return K.H.useState(S)},Le.useSyncExternalStore=function(S,Z,se){return K.H.useSyncExternalStore(S,Z,se)},Le.useTransition=function(){return K.H.useTransition()},Le.version="19.1.0",Le}var fm;function df(){return fm||(fm=1,xc.exports=Fb()),xc.exports}var B=df();const st=Fp(B);var wc={exports:{}},fi={},Sc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Kb(){return dm||(dm=1,function(a){function l(C,ne){var me=C.length;C.push(ne);e:for(;0<me;){var _e=me-1>>>1,S=C[_e];if(0<c(S,ne))C[_e]=ne,C[me]=S,me=_e;else break e}}function o(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var ne=C[0],me=C.pop();if(me!==ne){C[0]=me;e:for(var _e=0,S=C.length,Z=S>>>1;_e<Z;){var se=2*(_e+1)-1,le=C[se],be=se+1,Ue=C[be];if(0>c(le,me))be<S&&0>c(Ue,le)?(C[_e]=Ue,C[be]=me,_e=be):(C[_e]=le,C[se]=me,_e=se);else if(be<S&&0>c(Ue,me))C[_e]=Ue,C[be]=me,_e=be;else break e}}return ne}function c(C,ne){var me=C.sortIndex-ne.sortIndex;return me!==0?me:C.id-ne.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();a.unstable_now=function(){return d.now()-m}}var h=[],g=[],y=1,E=null,x=3,A=!1,T=!1,_=!1,P=!1,j=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function $(C){for(var ne=o(g);ne!==null;){if(ne.callback===null)u(g);else if(ne.startTime<=C)u(g),ne.sortIndex=ne.expirationTime,l(h,ne);else break;ne=o(g)}}function K(C){if(_=!1,$(C),!T)if(o(h)!==null)T=!0,N||(N=!0,te());else{var ne=o(g);ne!==null&&ye(K,ne.startTime-C)}}var N=!1,ee=-1,ae=5,Q=-1;function de(){return P?!0:!(a.unstable_now()-Q<ae)}function ce(){if(P=!1,N){var C=a.unstable_now();Q=C;var ne=!0;try{e:{T=!1,_&&(_=!1,X(ee),ee=-1),A=!0;var me=x;try{t:{for($(C),E=o(h);E!==null&&!(E.expirationTime>C&&de());){var _e=E.callback;if(typeof _e=="function"){E.callback=null,x=E.priorityLevel;var S=_e(E.expirationTime<=C);if(C=a.unstable_now(),typeof S=="function"){E.callback=S,$(C),ne=!0;break t}E===o(h)&&u(h),$(C)}else u(h);E=o(h)}if(E!==null)ne=!0;else{var Z=o(g);Z!==null&&ye(K,Z.startTime-C),ne=!1}}break e}finally{E=null,x=me,A=!1}ne=void 0}}finally{ne?te():N=!1}}}var te;if(typeof Y=="function")te=function(){Y(ce)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,re=ie.port2;ie.port1.onmessage=ce,te=function(){re.postMessage(null)}}else te=function(){j(ce,0)};function ye(C,ne){ee=j(function(){C(a.unstable_now())},ne)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(C){C.callback=null},a.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<C?Math.floor(1e3/C):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(C){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var me=x;x=ne;try{return C()}finally{x=me}},a.unstable_requestPaint=function(){P=!0},a.unstable_runWithPriority=function(C,ne){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var me=x;x=C;try{return ne()}finally{x=me}},a.unstable_scheduleCallback=function(C,ne,me){var _e=a.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?_e+me:_e):me=_e,C){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=me+S,C={id:y++,callback:ne,priorityLevel:C,startTime:me,expirationTime:S,sortIndex:-1},me>_e?(C.sortIndex=me,l(g,C),o(h)===null&&C===o(g)&&(_?(X(ee),ee=-1):_=!0,ye(K,me-_e))):(C.sortIndex=S,l(h,C),T||A||(T=!0,N||(N=!0,te()))),C},a.unstable_shouldYield=de,a.unstable_wrapCallback=function(C){var ne=x;return function(){var me=x;x=ne;try{return C.apply(this,arguments)}finally{x=me}}}}(Ec)),Ec}var hm;function Jb(){return hm||(hm=1,Sc.exports=Kb()),Sc.exports}var Ac={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function $b(){if(mm)return Vt;mm=1;var a=df();function l(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(h,g,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:h,containerInfo:g,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Vt.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return f(h,g,null,y)},Vt.flushSync=function(h){var g=d.T,y=u.p;try{if(d.T=null,u.p=2,h)return h()}finally{d.T=g,u.p=y,u.d.f()}},Vt.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(h,g))},Vt.prefetchDNS=function(h){typeof h=="string"&&u.d.D(h)},Vt.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,E=m(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?u.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:x,fetchPriority:A}):y==="script"&&u.d.X(h,{crossOrigin:E,integrity:x,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Vt.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);u.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(h)},Vt.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,E=m(y,g.crossOrigin);u.d.L(h,y,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Vt.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=m(g.as,g.crossOrigin);u.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(h)},Vt.requestFormReset=function(h){u.d.r(h)},Vt.unstable_batchedUpdates=function(h,g){return h(g)},Vt.useFormState=function(h,g,y){return d.H.useFormState(h,g,y)},Vt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Vt.version="19.1.0",Vt}var pm;function Kp(){if(pm)return Ac.exports;pm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Ac.exports=$b(),Ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Wb(){if(gm)return fi;gm=1;var a=Jb(),l=df(),o=Kp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m(i),e;if(s===r)return m(i),t;s=s.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=s;else{for(var p=!1,b=i.child;b;){if(b===n){p=!0,n=i,r=s;break}if(b===r){p=!0,r=i,n=s;break}b=b.sibling}if(!p){for(b=s.child;b;){if(b===n){p=!0,n=s,r=i;break}if(b===r){p=!0,r=s,n=i;break}b=b.sibling}if(!p)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case P:return"Profiler";case _:return"StrictMode";case K:return"Suspense";case N:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case Y:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ye=Array.isArray,C=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},_e=[],S=-1;function Z(e){return{current:e}}function se(e){0>S||(e.current=_e[S],_e[S]=null,S--)}function le(e,t){S++,_e[S]=e.current,e.current=t}var be=Z(null),Ue=Z(null),Se=Z(null),Ie=Z(null);function Be(e,t){switch(le(Se,t),le(Ue,e),le(be,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?U0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=U0(t),e=L0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(be),le(be,e)}function yt(){se(be),se(Ue),se(Se)}function lt(e){e.memoizedState!==null&&le(Ie,e);var t=be.current,n=L0(t,e.type);t!==n&&(le(Ue,e),le(be,n))}function en(e){Ue.current===e&&(se(be),se(Ue)),Ie.current===e&&(se(Ie),li._currentValue=me)}var Jn=Object.prototype.hasOwnProperty,Ka=a.unstable_scheduleCallback,Qt=a.unstable_cancelCallback,Tr=a.unstable_shouldYield,hl=a.unstable_requestPaint,Yt=a.unstable_now,Di=a.unstable_getCurrentPriorityLevel,Ja=a.unstable_ImmediatePriority,M=a.unstable_UserBlockingPriority,L=a.unstable_NormalPriority,G=a.unstable_LowPriority,he=a.unstable_IdlePriority,fe=a.log,oe=a.unstable_setDisableYieldValue,pe=null,Oe=null;function He(e){if(typeof fe=="function"&&oe(e),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(pe,e)}catch{}}var We=Math.clz32?Math.clz32:Mr,ma=Math.log,Ot=Math.LN2;function Mr(e){return e>>>=0,e===0?32:31-(ma(e)/Ot|0)|0}var Tn=256,Mn=4194304;function Nn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~s,r!==0?i=Nn(r):(p&=b,p!==0?i=Nn(p):n||(n=b&~e,n!==0&&(i=Nn(n))))):(b=r&~s,b!==0?i=Nn(b):p!==0?i=Nn(p):n||(n=r&~e,n!==0&&(i=Nn(n)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:i}function dn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $a(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(){var e=Tn;return Tn<<=1,(Tn&4194048)===0&&(Tn=256),e}function ji(){var e=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),e}function Or(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ki(e,t,n,r,i,s){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,w=e.expirationTimes,U=e.hiddenUpdates;for(n=p&~n;0<n;){var F=31-We(n),W=1<<F;b[F]=0,w[F]=-1;var q=U[F];if(q!==null)for(U[F]=null,F=0;F<q.length;F++){var H=q[F];H!==null&&(H.lane&=-536870913)}n&=~W}r!==0&&Ia(e,r,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~t))}function Ia(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function er(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ml(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function O(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:nm(e.type))}function k(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var V=Math.random().toString(36).slice(2),I="__reactFiber$"+V,ue="__reactProps$"+V,xe="__reactContainer$"+V,Re="__reactEvents$"+V,ge="__reactListeners$"+V,Me="__reactHandles$"+V,Ne="__reactResources$"+V,ke="__reactMarker$"+V;function Ee(e){delete e[I],delete e[ue],delete e[Re],delete e[ge],delete e[Me]}function ze(e){var t=e[I];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xe]||n[I]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=V0(e);e!==null;){if(n=e[I])return n;e=V0(e)}return t}e=n,n=e.parentNode}return null}function Fe(e){if(e=e[I]||e[xe]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ut(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function pt(e){var t=e[Ne];return t||(t=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[ke]=!0}var Qe=new Set,pa={};function Pt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(pa[e]=t,e=0;e<t.length;e++)Qe.add(t[e])}var Zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ga={},va={};function gl(e){return Jn.call(va,e)?!0:Jn.call(ga,e)?!1:Zt.test(e)?va[e]=!0:(ga[e]=!0,!1)}function mn(e,t,n){if(gl(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function $n(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ve(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var qt,On;function _n(e){if(qt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qt=t&&t[1]||"",On=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+On}var tr=!1;function ct(e,t){if(!e||tr)return"";tr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var q=H}Reflect.construct(e,[],W)}else{try{W.call()}catch(H){q=H}e.call(W.prototype)}}else{try{throw Error()}catch(H){q=H}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),p=s[0],b=s[1];if(p&&b){var w=p.split(`
`),U=b.split(`
`);for(i=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;i<U.length&&!U[i].includes("DetermineComponentFrameRoot");)i++;if(r===w.length||i===U.length)for(r=w.length-1,i=U.length-1;1<=r&&0<=i&&w[r]!==U[i];)i--;for(;1<=r&&0<=i;r--,i--)if(w[r]!==U[i]){if(r!==1||i!==1)do if(r--,i--,0>i||w[r]!==U[i]){var F=`
`+w[r].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=r&&0<=i);break}}}finally{tr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_n(n):""}function ba(e){switch(e.tag){case 26:case 27:case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return ct(e.type,!1);case 11:return ct(e.type.render,!1);case 1:return ct(e.type,!0);case 31:return _n("Activity");default:return""}}function vl(e){try{var t="";do t+=ba(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vg(e){var t=Df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(p){r=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=Vg(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yg=/[\n"\\]/g;function pn(e){return e.replace(Yg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gu(e,t,n,r,i,s,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ft(t)):e.value!==""+Ft(t)&&(e.value=""+Ft(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?vu(e,p,Ft(t)):n!=null?vu(e,p,Ft(n)):r!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ft(b):e.removeAttribute("name")}function kf(e,t,n,r,i,s,p,b){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+Ft(n):"",t=t!=null?""+Ft(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function vu(e,t,n){t==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _r(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cf(e,t,n){if(t!=null&&(t=""+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ft(n):""}function zf(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(u(92));if(ye(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Ft(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Pg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Lf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Uf(e,i,r)}else for(var s in t)t.hasOwnProperty(s)&&Uf(e,s,t[s])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(e){return Xg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,jr=null;function Bf(e){var t=Fe(e);if(t&&(e=t.stateNode)){var n=e[ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(gu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ue]||null;if(!i)throw Error(u(90));gu(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&jf(r)}break e;case"textarea":Cf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_r(e,!!n.multiple,t,!1)}}}var wu=!1;function qf(e,t,n){if(wu)return e(t,n);wu=!0;try{var r=e(t);return r}finally{if(wu=!1,(Dr!==null||jr!==null)&&(So(),Dr&&(t=Dr,e=jr,jr=Dr=null,Bf(t),e)))for(t=0;t<e.length;t++)Bf(e[t])}}function bl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ue]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Wn)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{Su=!1}var ya=null,Eu=null,Li=null;function Hf(){if(Li)return Li;var e,t=Eu,n=t.length,r,i="value"in ya?ya.value:ya.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var p=n-e;for(r=1;r<=p&&t[n-r]===i[s-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Vf(){return!1}function Kt(e){function t(n,r,i,s,p){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(s):s[b]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qi:Vf,this.isPropagationStopped=Vf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Kt(nr),xl=y({},nr,{view:0,detail:0}),Qg=Kt(xl),Au,Tu,wl,Vi=y({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(Au=e.screenX-wl.screenX,Tu=e.screenY-wl.screenY):Tu=Au=0,wl=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Yf=Kt(Vi),Zg=y({},Vi,{dataTransfer:0}),Fg=Kt(Zg),Kg=y({},xl,{relatedTarget:0}),Mu=Kt(Kg),Jg=y({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Kt(Jg),Wg=y({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ig=Kt(Wg),ev=y({},nr,{data:0}),Pf=Kt(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=av[e])?!!t[e]:!1}function Nu(){return rv}var lv=y({},xl,{key:function(e){if(e.key){var t=tv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iv=Kt(lv),ov=y({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Kt(ov),uv=y({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),sv=Kt(uv),cv=y({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Kt(cv),dv=y({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=Kt(dv),mv=y({},nr,{newState:0,oldState:0}),pv=Kt(mv),gv=[9,13,27,32],Ou=Wn&&"CompositionEvent"in window,Sl=null;Wn&&"documentMode"in document&&(Sl=document.documentMode);var vv=Wn&&"TextEvent"in window&&!Sl,Xf=Wn&&(!Ou||Sl&&8<Sl&&11>=Sl),Qf=" ",Zf=!1;function Ff(e,t){switch(e){case"keyup":return gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function bv(e,t){switch(e){case"compositionend":return Kf(t);case"keypress":return t.which!==32?null:(Zf=!0,Qf);case"textInput":return e=t.data,e===Qf&&Zf?null:e;default:return null}}function yv(e,t){if(kr)return e==="compositionend"||!Ou&&Ff(e,t)?(e=Hf(),Li=Eu=ya=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xv[e.type]:t==="textarea"}function $f(e,t,n,r){Dr?jr?jr.push(r):jr=[r]:Dr=r,t=Oo(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var El=null,Al=null;function wv(e){D0(e,0)}function Yi(e){var t=ut(e);if(jf(t))return e}function Wf(e,t){if(e==="change")return t}var If=!1;if(Wn){var _u;if(Wn){var Ru="oninput"in document;if(!Ru){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Ru=typeof ed.oninput=="function"}_u=Ru}else _u=!1;If=_u&&(!document.documentMode||9<document.documentMode)}function td(){El&&(El.detachEvent("onpropertychange",nd),Al=El=null)}function nd(e){if(e.propertyName==="value"&&Yi(Al)){var t=[];$f(t,Al,e,xu(e)),qf(wv,t)}}function Sv(e,t,n){e==="focusin"?(td(),El=t,Al=n,El.attachEvent("onpropertychange",nd)):e==="focusout"&&td()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Al)}function Av(e,t){if(e==="click")return Yi(t)}function Tv(e,t){if(e==="input"||e==="change")return Yi(t)}function Mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Mv;function Tl(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jn.call(t,i)||!tn(e[i],t[i]))return!1}return!0}function ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Nv=Wn&&"documentMode"in document&&11>=document.documentMode,Cr=null,ju=null,Ml=null,ku=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||Cr==null||Cr!==zi(r)||(r=Cr,"selectionStart"in r&&Du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ml&&Tl(Ml,r)||(Ml=r,r=Oo(ju,"onSelect"),0<r.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},Cu={},ud={};Wn&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function rr(e){if(Cu[e])return Cu[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Cu[e]=t[n];return e}var sd=rr("animationend"),cd=rr("animationiteration"),fd=rr("animationstart"),Ov=rr("transitionrun"),_v=rr("transitionstart"),Rv=rr("transitioncancel"),dd=rr("transitionend"),hd=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Rn(e,t){hd.set(e,t),Pt(t,[e])}var md=new WeakMap;function gn(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vl(t)},md.set(e,t),t)}return{value:e,source:t,stack:vl(t)}}var vn=[],Ur=0,Uu=0;function Pi(){for(var e=Ur,t=Uu=Ur=0;t<e;){var n=vn[t];vn[t++]=null;var r=vn[t];vn[t++]=null;var i=vn[t];vn[t++]=null;var s=vn[t];if(vn[t++]=null,r!==null&&i!==null){var p=r.pending;p===null?i.next=i:(i.next=p.next,p.next=i),r.pending=i}s!==0&&pd(n,i,s)}}function Gi(e,t,n,r){vn[Ur++]=e,vn[Ur++]=t,vn[Ur++]=n,vn[Ur++]=r,Uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Lu(e,t,n,r){return Gi(e,t,n,r),Xi(e)}function Lr(e,t){return Gi(e,null,null,t),Xi(e)}function pd(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-We(n),e=s.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),s):null}function Xi(e){if(50<$l)throw $l=0,Ps=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Br={};function Dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,n,r){return new Dv(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function In(e,t){var n=e.alternate;return n===null?(n=nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,r,i,s){var p=0;if(r=e,typeof e=="function")Bu(e)&&(p=1);else if(typeof e=="string")p=kb(e,n,be.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=nn(31,n,t,i),e.elementType=Q,e.lanes=s,e;case T:return lr(n.children,i,s,t);case _:p=8,i|=24;break;case P:return e=nn(12,n,t,i|2),e.elementType=P,e.lanes=s,e;case K:return e=nn(13,n,t,i),e.elementType=K,e.lanes=s,e;case N:return e=nn(19,n,t,i),e.elementType=N,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:case Y:p=10;break e;case X:p=9;break e;case $:p=11;break e;case ee:p=14;break e;case ae:p=16,r=null;break e}p=29,n=Error(u(130,e===null?"null":typeof e,"")),r=null}return t=nn(p,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function lr(e,t,n,r){return e=nn(7,e,r,t),e.lanes=n,e}function qu(e,t,n){return e=nn(6,e,null,t),e.lanes=n,e}function Hu(e,t,n){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qr=[],Hr=0,Zi=null,Fi=0,bn=[],yn=0,ir=null,ea=1,ta="";function or(e,t){qr[Hr++]=Fi,qr[Hr++]=Zi,Zi=e,Fi=t}function vd(e,t,n){bn[yn++]=ea,bn[yn++]=ta,bn[yn++]=ir,ir=e;var r=ea;e=ta;var i=32-We(r)-1;r&=~(1<<i),n+=1;var s=32-We(t)+i;if(30<s){var p=i-i%5;s=(r&(1<<p)-1).toString(32),r>>=p,i-=p,ea=1<<32-We(t)+i|n<<i|r,ta=s+e}else ea=1<<s|n<<i|r,ta=e}function Vu(e){e.return!==null&&(or(e,1),vd(e,1,0))}function Yu(e){for(;e===Zi;)Zi=qr[--Hr],qr[Hr]=null,Fi=qr[--Hr],qr[Hr]=null;for(;e===ir;)ir=bn[--yn],bn[yn]=null,ta=bn[--yn],bn[yn]=null,ea=bn[--yn],bn[yn]=null}var Gt=null,vt=null,$e=!1,ur=null,Bn=!1,Pu=Error(u(519));function sr(e){var t=Error(u(418,""));throw _l(gn(t,e)),Pu}function bd(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[I]=e,t[ue]=r,n){case"dialog":Ge("cancel",t),Ge("close",t);break;case"iframe":case"object":case"embed":Ge("load",t);break;case"video":case"audio":for(n=0;n<Il.length;n++)Ge(Il[n],t);break;case"source":Ge("error",t);break;case"img":case"image":case"link":Ge("error",t),Ge("load",t);break;case"details":Ge("toggle",t);break;case"input":Ge("invalid",t),kf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ci(t);break;case"select":Ge("invalid",t);break;case"textarea":Ge("invalid",t),zf(t,r.value,r.defaultValue,r.children),Ci(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||z0(t.textContent,n)?(r.popover!=null&&(Ge("beforetoggle",t),Ge("toggle",t)),r.onScroll!=null&&Ge("scroll",t),r.onScrollEnd!=null&&Ge("scrollend",t),r.onClick!=null&&(t.onclick=_o),t=!0):t=!1,t||sr(e)}function yd(e){for(Gt=e.return;Gt;)switch(Gt.tag){case 5:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Gt=Gt.return}}function Nl(e){if(e!==Gt)return!1;if(!$e)return yd(e),$e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lc(e.type,e.memoizedProps)),n=!n),n&&vt&&sr(e),yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){vt=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}vt=null}}else t===27?(t=vt,za(e.type)?(e=sc,sc=null,vt=e):vt=t):vt=Gt?jn(e.stateNode.nextSibling):null;return!0}function Ol(){vt=Gt=null,$e=!1}function xd(){var e=ur;return e!==null&&(Wt===null?Wt=e:Wt.push.apply(Wt,e),ur=null),e}function _l(e){ur===null?ur=[e]:ur.push(e)}var Gu=Z(null),cr=null,na=null;function xa(e,t,n){le(Gu,t._currentValue),t._currentValue=n}function aa(e){e._currentValue=Gu.current,se(Gu)}function Xu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qu(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var p=i.child;s=s.firstContext;e:for(;s!==null;){var b=s;s=i;for(var w=0;w<t.length;w++)if(b.context===t[w]){s.lanes|=n,b=s.alternate,b!==null&&(b.lanes|=n),Xu(s.return,n,e),r||(p=null);break e}s=b.next}}else if(i.tag===18){if(p=i.return,p===null)throw Error(u(341));p.lanes|=n,s=p.alternate,s!==null&&(s.lanes|=n),Xu(p,n,e),p=null}else p=i.child;if(p!==null)p.return=i;else for(p=i;p!==null;){if(p===e){p=null;break}if(i=p.sibling,i!==null){i.return=p.return,p=i;break}p=p.return}i=p}}function Rl(e,t,n,r){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var p=i.alternate;if(p===null)throw Error(u(387));if(p=p.memoizedProps,p!==null){var b=i.type;tn(i.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(i===Ie.current){if(p=i.alternate,p===null)throw Error(u(387));p.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(li):e=[li])}i=i.return}e!==null&&Qu(t,e,n,r),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!tn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){cr=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ht(e){return wd(cr,e)}function Ji(e,t){return cr===null&&fr(e),wd(e,t)}function wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(u(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var jv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kv=a.unstable_scheduleCallback,Cv=a.unstable_NormalPriority,_t={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new jv,data:new Map,refCount:0}}function Dl(e){e.refCount--,e.refCount===0&&kv(Cv,function(){e.controller.abort()})}var jl=null,Fu=0,Vr=0,Yr=null;function zv(e,t){if(jl===null){var n=jl=[];Fu=0,Vr=Js(),Yr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Fu++,t.then(Sd,Sd),t}function Sd(){if(--Fu===0&&jl!==null){Yr!==null&&(Yr.status="fulfilled");var e=jl;jl=null,Vr=0,Yr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uv(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var Ed=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&zv(e,t),Ed!==null&&Ed(e,t)};var dr=Z(null);function Ku(){var e=dr.current;return e!==null?e:ot.pooledCache}function $i(e,t){t===null?le(dr,dr.current):le(dr,t.pool)}function Ad(){var e=Ku();return e===null?null:{parent:_t._currentValue,pool:e}}var kl=Error(u(460)),Td=Error(u(474)),Wi=Error(u(542)),Ju={then:function(){}};function Md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function Nd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=ot,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e}throw Cl=t,kl}}var Cl=null;function Od(){if(Cl===null)throw Error(u(459));var e=Cl;return Cl=null,e}function _d(e){if(e===kl||e===Wi)throw Error(u(483))}var wa=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(et&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Xi(e),pd(e,null,n),t}return Gi(e,r,t,n),Xi(e)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,er(e,n)}}function Iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var es=!1;function Ul(){if(es){var e=Yr;if(e!==null)throw e}}function Ll(e,t,n,r){es=!1;var i=e.updateQueue;wa=!1;var s=i.firstBaseUpdate,p=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var w=b,U=w.next;w.next=null,p===null?s=U:p.next=U,p=w;var F=e.alternate;F!==null&&(F=F.updateQueue,b=F.lastBaseUpdate,b!==p&&(b===null?F.firstBaseUpdate=U:b.next=U,F.lastBaseUpdate=w))}if(s!==null){var W=i.baseState;p=0,F=U=w=null,b=s;do{var q=b.lane&-536870913,H=q!==b.lane;if(H?(Ze&q)===q:(r&q)===q){q!==0&&q===Vr&&(es=!0),F!==null&&(F=F.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ce=e,De=b;q=t;var rt=n;switch(De.tag){case 1:if(Ce=De.payload,typeof Ce=="function"){W=Ce.call(rt,W,q);break e}W=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=De.payload,q=typeof Ce=="function"?Ce.call(rt,W,q):Ce,q==null)break e;W=y({},W,q);break e;case 2:wa=!0}}q=b.callback,q!==null&&(e.flags|=64,H&&(e.flags|=8192),H=i.callbacks,H===null?i.callbacks=[q]:H.push(q))}else H={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},F===null?(U=F=H,w=W):F=F.next=H,p|=q;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;H=b,b=H.next,H.next=null,i.lastBaseUpdate=H,i.shared.pending=null}}while(!0);F===null&&(w=W),i.baseState=w,i.firstBaseUpdate=U,i.lastBaseUpdate=F,s===null&&(i.shared.lanes=0),Da|=p,e.lanes=p,e.memoizedState=W}}function Rd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Dd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var Pr=Z(null),eo=Z(0);function jd(e,t){e=ca,le(eo,e),le(Pr,t),ca=e|t.baseLanes}function ts(){le(eo,ca),le(Pr,Pr.current)}function ns(){ca=eo.current,se(Pr),se(eo)}var Aa=0,qe=null,nt=null,Et=null,to=!1,Gr=!1,hr=!1,no=0,Bl=0,Xr=null,Lv=0;function xt(){throw Error(u(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,i,s){return Aa=s,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ph:gh,hr=!1,s=n(r,i),hr=!1,Gr&&(s=Cd(t,n,r,i)),kd(e),s}function kd(e){C.H=uo;var t=nt!==null&&nt.next!==null;if(Aa=0,Et=nt=qe=null,to=!1,Bl=0,Xr=null,t)throw Error(u(300));e===null||jt||(e=e.dependencies,e!==null&&Ki(e)&&(jt=!0))}function Cd(e,t,n,r){qe=e;var i=0;do{if(Gr&&(Xr=null),Bl=0,Gr=!1,25<=i)throw Error(u(301));if(i+=1,Et=nt=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}C.H=Gv,s=t(n,r)}while(Gr);return s}function Bv(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(nt!==null?nt.memoizedState:null)!==e&&(qe.flags|=1024),t}function ls(){var e=no!==0;return no=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function os(e){if(to){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}to=!1}Aa=0,Et=nt=qe=null,Gr=!1,Bl=no=0,Xr=null}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?qe.memoizedState=Et=e:Et=Et.next=e,Et}function At(){if(nt===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=Et===null?qe.memoizedState:Et.next;if(t!==null)Et=t,nt=e;else{if(e===null)throw qe.alternate===null?Error(u(467)):Error(u(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},Et===null?qe.memoizedState=Et=e:Et=Et.next=e}return Et}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=Bl;return Bl+=1,Xr===null&&(Xr=[]),e=Nd(Xr,e,t),t=qe,(Et===null?t.memoizedState:Et.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ph:gh),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===Y)return Ht(e)}throw Error(u(438,String(e)))}function ss(e){var t=null,n=qe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=qe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=us(),qe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=de;return t.index++,n}function ra(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=At();return cs(t,nt,e)}function cs(e,t,n){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var i=e.baseQueue,s=r.pending;if(s!==null){if(i!==null){var p=i.next;i.next=s.next,s.next=p}t.baseQueue=i=s,r.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var b=p=null,w=null,U=t,F=!1;do{var W=U.lane&-536870913;if(W!==U.lane?(Ze&W)===W:(Aa&W)===W){var q=U.revertLane;if(q===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),W===Vr&&(F=!0);else if((Aa&q)===q){U=U.next,q===Vr&&(F=!0);continue}else W={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},w===null?(b=w=W,p=s):w=w.next=W,qe.lanes|=q,Da|=q;W=U.action,hr&&n(s,W),s=U.hasEagerState?U.eagerState:n(s,W)}else q={lane:W,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},w===null?(b=w=q,p=s):w=w.next=q,qe.lanes|=W,Da|=W;U=U.next}while(U!==null&&U!==t);if(w===null?p=s:w.next=b,!tn(s,e.memoizedState)&&(jt=!0,F&&(n=Yr,n!==null)))throw n;e.memoizedState=s,e.baseState=p,e.baseQueue=w,r.lastRenderedState=s}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fs(e){var t=At(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var p=i=i.next;do s=e(s,p.action),p=p.next;while(p!==i);tn(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function zd(e,t,n){var r=qe,i=At(),s=$e;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var p=!tn((nt||i).memoizedState,n);p&&(i.memoizedState=n,jt=!0),i=i.queue;var b=Bd.bind(null,r,i,e);if(Hl(2048,8,b,[e]),i.getSnapshot!==t||p||Et!==null&&Et.memoizedState.tag&1){if(r.flags|=2048,Qr(9,lo(),Ld.bind(null,r,i,n,t),null),ot===null)throw Error(u(349));s||(Aa&124)!==0||Ud(r,t,n)}return n}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qe.updateQueue,t===null?(t=us(),qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,qd(t)&&Hd(e)}function Bd(e,t,n){return n(function(){qd(t)&&Hd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function Hd(e){var t=Lr(e,2);t!==null&&un(t,e,2)}function ds(e){var t=Jt();if(typeof e=="function"){var n=e;if(e=n(),hr){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function Vd(e,t,n,r){return e.baseState=n,cs(e,nt,typeof r=="function"?r:ra)}function qv(e,t,n,r,i){if(oo(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};C.T!==null?n(!0):s.isTransition=!1,r(s),n=t.pending,n===null?(s.next=t.pending=s,Yd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Yd(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var s=C.T,p={};C.T=p;try{var b=n(i,r),w=C.S;w!==null&&w(p,b),Pd(e,t,b)}catch(U){hs(e,t,U)}finally{C.T=s}}else try{s=n(i,r),Pd(e,t,s)}catch(U){hs(e,t,U)}}function Pd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Gd(e,t,r)},function(r){return hs(e,t,r)}):Gd(e,t,n)}function Gd(e,t,n){t.status="fulfilled",t.value=n,Xd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function hs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Xd(t),t=t.next;while(t!==r)}e.action=null}function Xd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Zd(e,t){if($e){var n=ot.formState;if(n!==null){e:{var r=qe;if($e){if(vt){t:{for(var i=vt,s=Bn;i.nodeType!==8;){if(!s){i=null;break t}if(i=jn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){vt=jn(i.nextSibling),r=i.data==="F!";break e}}sr(r)}r=!1}r&&(t=n[0])}}return n=Jt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=r,n=dh.bind(null,qe,r),r.dispatch=n,r=ds(!1),s=bs.bind(null,qe,!1,r.queue),r=Jt(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qv.bind(null,qe,i,s,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Fd(e){var t=At();return Kd(t,nt,e)}function Kd(e,t,n){if(t=cs(e,t,Qd)[0],e=ro(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=ql(t)}catch(p){throw p===kl?Wi:p}else r=t;t=At();var i=t.queue,s=i.dispatch;return n!==t.memoizedState&&(qe.flags|=2048,Qr(9,lo(),Hv.bind(null,i,n),null)),[r,s,e]}function Hv(e,t){e.action=t}function Jd(e){var t=At(),n=nt;if(n!==null)return Kd(t,n,e);At(),t=t.memoizedState,n=At();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Qr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=qe.updateQueue,t===null&&(t=us(),qe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function lo(){return{destroy:void 0,resource:void 0}}function $d(){return At().memoizedState}function io(e,t,n,r){var i=Jt();r=r===void 0?null:r,qe.flags|=e,i.memoizedState=Qr(1|t,lo(),n,r)}function Hl(e,t,n,r){var i=At();r=r===void 0?null:r;var s=i.memoizedState.inst;nt!==null&&r!==null&&as(r,nt.memoizedState.deps)?i.memoizedState=Qr(t,s,n,r):(qe.flags|=e,i.memoizedState=Qr(1|t,s,n,r))}function Wd(e,t){io(8390656,8,e,t)}function Id(e,t){Hl(2048,8,e,t)}function eh(e,t){return Hl(4,2,e,t)}function th(e,t){return Hl(4,4,e,t)}function nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){n=n!=null?n.concat([e]):null,Hl(4,4,nh.bind(null,t,e),n)}function ms(){}function rh(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lh(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),hr){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function ps(e,t,n){return n===void 0||(Aa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=u0(),qe.lanes|=e,Da|=e,n)}function ih(e,t,n,r){return tn(n,t)?n:Pr.current!==null?(e=ps(e,n,r),tn(e,t)||(jt=!0),e):(Aa&42)===0?(jt=!0,e.memoizedState=n):(e=u0(),qe.lanes|=e,Da|=e,t)}function oh(e,t,n,r,i){var s=ne.p;ne.p=s!==0&&8>s?s:8;var p=C.T,b={};C.T=b,bs(e,!1,t,n);try{var w=i(),U=C.S;if(U!==null&&U(b,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=Uv(w,r);Vl(e,t,F,on(e))}else Vl(e,t,r,on(e))}catch(W){Vl(e,t,{then:function(){},status:"rejected",reason:W},on())}finally{ne.p=s,C.T=p}}function Vv(){}function gs(e,t,n,r){if(e.tag!==5)throw Error(u(476));var i=uh(e).queue;oh(e,i,t,me,n===null?Vv:function(){return sh(e),n(r)})}function uh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sh(e){var t=uh(e).next.queue;Vl(e,t,{},on())}function vs(){return Ht(li)}function ch(){return At().memoizedState}function fh(){return At().memoizedState}function Yv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=on();e=Sa(n);var r=Ea(t,e,n);r!==null&&(un(r,t,n),zl(r,t,n)),t={cache:Zu()},e.payload=t;return}t=t.return}}function Pv(e,t,n){var r=on();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},oo(e)?hh(t,n):(n=Lu(e,t,n,r),n!==null&&(un(n,e,r),mh(n,t,r)))}function dh(e,t,n){var r=on();Vl(e,t,n,r)}function Vl(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(oo(e))hh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,b=s(p,n);if(i.hasEagerState=!0,i.eagerState=b,tn(b,p))return Gi(e,t,i,0),ot===null&&Pi(),!1}catch{}finally{}if(n=Lu(e,t,i,r),n!==null)return un(n,e,r),mh(n,t,r),!0}return!1}function bs(e,t,n,r){if(r={lane:2,revertLane:Js(),action:r,hasEagerState:!1,eagerState:null,next:null},oo(e)){if(t)throw Error(u(479))}else t=Lu(e,n,r,2),t!==null&&un(t,e,2)}function oo(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function hh(e,t){Gr=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,er(e,n)}}var uo={readContext:Ht,use:ao,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},ph={readContext:Ht,use:ao,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Wd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,io(4194308,4,nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var n=Jt();t=t===void 0?null:t;var r=e();if(hr){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Jt();if(n!==void 0){var i=n(t);if(hr){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Pv.bind(null,qe,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,n=dh.bind(null,qe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){var n=Jt();return ps(n,e,t)},useTransition:function(){var e=ds(!1);return e=oh.bind(null,qe,e.queue,!0,!1),Jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=qe,i=Jt();if($e){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ot===null)throw Error(u(349));(Ze&124)!==0||Ud(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Wd(Bd.bind(null,r,s,e),[e]),r.flags|=2048,Qr(9,lo(),Ld.bind(null,r,s,n,t),null),n},useId:function(){var e=Jt(),t=ot.identifierPrefix;if($e){var n=ta,r=ea;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Lv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vs,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=Jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bs.bind(null,qe,!0,n),n.dispatch=t,[e,t]},useMemoCache:ss,useCacheRefresh:function(){return Jt().memoizedState=Yv.bind(null,qe)}},gh={readContext:Ht,use:ao,useCallback:rh,useContext:Ht,useEffect:Id,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:th,useMemo:lh,useReducer:ro,useRef:$d,useState:function(){return ro(ra)},useDebugValue:ms,useDeferredValue:function(e,t){var n=At();return ih(n,nt.memoizedState,e,t)},useTransition:function(){var e=ro(ra)[0],t=At().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:zd,useId:ch,useHostTransitionStatus:vs,useFormState:Fd,useActionState:Fd,useOptimistic:function(e,t){var n=At();return Vd(n,nt,e,t)},useMemoCache:ss,useCacheRefresh:fh},Gv={readContext:Ht,use:ao,useCallback:rh,useContext:Ht,useEffect:Id,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:th,useMemo:lh,useReducer:fs,useRef:$d,useState:function(){return fs(ra)},useDebugValue:ms,useDeferredValue:function(e,t){var n=At();return nt===null?ps(n,e,t):ih(n,nt.memoizedState,e,t)},useTransition:function(){var e=fs(ra)[0],t=At().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:zd,useId:ch,useHostTransitionStatus:vs,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=At();return nt!==null?Vd(n,nt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ss,useCacheRefresh:fh},Zr=null,Yl=0;function so(e){var t=Yl;return Yl+=1,Zr===null&&(Zr=[]),Nd(Zr,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function co(e,t){throw t.$$typeof===E?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function vh(e){var t=e._init;return t(e._payload)}function bh(e){function t(D,R){if(e){var z=D.deletions;z===null?(D.deletions=[R],D.flags|=16):z.push(R)}}function n(D,R){if(!e)return null;for(;R!==null;)t(D,R),R=R.sibling;return null}function r(D){for(var R=new Map;D!==null;)D.key!==null?R.set(D.key,D):R.set(D.index,D),D=D.sibling;return R}function i(D,R){return D=In(D,R),D.index=0,D.sibling=null,D}function s(D,R,z){return D.index=z,e?(z=D.alternate,z!==null?(z=z.index,z<R?(D.flags|=67108866,R):z):(D.flags|=67108866,R)):(D.flags|=1048576,R)}function p(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function b(D,R,z,J){return R===null||R.tag!==6?(R=qu(z,D.mode,J),R.return=D,R):(R=i(R,z),R.return=D,R)}function w(D,R,z,J){var ve=z.type;return ve===T?F(D,R,z.props.children,J,z.key):R!==null&&(R.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ae&&vh(ve)===R.type)?(R=i(R,z.props),Pl(R,z),R.return=D,R):(R=Qi(z.type,z.key,z.props,null,D.mode,J),Pl(R,z),R.return=D,R)}function U(D,R,z,J){return R===null||R.tag!==4||R.stateNode.containerInfo!==z.containerInfo||R.stateNode.implementation!==z.implementation?(R=Hu(z,D.mode,J),R.return=D,R):(R=i(R,z.children||[]),R.return=D,R)}function F(D,R,z,J,ve){return R===null||R.tag!==7?(R=lr(z,D.mode,J,ve),R.return=D,R):(R=i(R,z),R.return=D,R)}function W(D,R,z){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=qu(""+R,D.mode,z),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return z=Qi(R.type,R.key,R.props,null,D.mode,z),Pl(z,R),z.return=D,z;case A:return R=Hu(R,D.mode,z),R.return=D,R;case ae:var J=R._init;return R=J(R._payload),W(D,R,z)}if(ye(R)||te(R))return R=lr(R,D.mode,z,null),R.return=D,R;if(typeof R.then=="function")return W(D,so(R),z);if(R.$$typeof===Y)return W(D,Ji(D,R),z);co(D,R)}return null}function q(D,R,z,J){var ve=R!==null?R.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ve!==null?null:b(D,R,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case x:return z.key===ve?w(D,R,z,J):null;case A:return z.key===ve?U(D,R,z,J):null;case ae:return ve=z._init,z=ve(z._payload),q(D,R,z,J)}if(ye(z)||te(z))return ve!==null?null:F(D,R,z,J,null);if(typeof z.then=="function")return q(D,R,so(z),J);if(z.$$typeof===Y)return q(D,R,Ji(D,z),J);co(D,z)}return null}function H(D,R,z,J,ve){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return D=D.get(z)||null,b(R,D,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return D=D.get(J.key===null?z:J.key)||null,w(R,D,J,ve);case A:return D=D.get(J.key===null?z:J.key)||null,U(R,D,J,ve);case ae:var Ye=J._init;return J=Ye(J._payload),H(D,R,z,J,ve)}if(ye(J)||te(J))return D=D.get(z)||null,F(R,D,J,ve,null);if(typeof J.then=="function")return H(D,R,z,so(J),ve);if(J.$$typeof===Y)return H(D,R,z,Ji(R,J),ve);co(R,J)}return null}function Ce(D,R,z,J){for(var ve=null,Ye=null,Ae=R,je=R=0,Ct=null;Ae!==null&&je<z.length;je++){Ae.index>je?(Ct=Ae,Ae=null):Ct=Ae.sibling;var Je=q(D,Ae,z[je],J);if(Je===null){Ae===null&&(Ae=Ct);break}e&&Ae&&Je.alternate===null&&t(D,Ae),R=s(Je,R,je),Ye===null?ve=Je:Ye.sibling=Je,Ye=Je,Ae=Ct}if(je===z.length)return n(D,Ae),$e&&or(D,je),ve;if(Ae===null){for(;je<z.length;je++)Ae=W(D,z[je],J),Ae!==null&&(R=s(Ae,R,je),Ye===null?ve=Ae:Ye.sibling=Ae,Ye=Ae);return $e&&or(D,je),ve}for(Ae=r(Ae);je<z.length;je++)Ct=H(Ae,D,je,z[je],J),Ct!==null&&(e&&Ct.alternate!==null&&Ae.delete(Ct.key===null?je:Ct.key),R=s(Ct,R,je),Ye===null?ve=Ct:Ye.sibling=Ct,Ye=Ct);return e&&Ae.forEach(function(Ha){return t(D,Ha)}),$e&&or(D,je),ve}function De(D,R,z,J){if(z==null)throw Error(u(151));for(var ve=null,Ye=null,Ae=R,je=R=0,Ct=null,Je=z.next();Ae!==null&&!Je.done;je++,Je=z.next()){Ae.index>je?(Ct=Ae,Ae=null):Ct=Ae.sibling;var Ha=q(D,Ae,Je.value,J);if(Ha===null){Ae===null&&(Ae=Ct);break}e&&Ae&&Ha.alternate===null&&t(D,Ae),R=s(Ha,R,je),Ye===null?ve=Ha:Ye.sibling=Ha,Ye=Ha,Ae=Ct}if(Je.done)return n(D,Ae),$e&&or(D,je),ve;if(Ae===null){for(;!Je.done;je++,Je=z.next())Je=W(D,Je.value,J),Je!==null&&(R=s(Je,R,je),Ye===null?ve=Je:Ye.sibling=Je,Ye=Je);return $e&&or(D,je),ve}for(Ae=r(Ae);!Je.done;je++,Je=z.next())Je=H(Ae,D,je,Je.value,J),Je!==null&&(e&&Je.alternate!==null&&Ae.delete(Je.key===null?je:Je.key),R=s(Je,R,je),Ye===null?ve=Je:Ye.sibling=Je,Ye=Je);return e&&Ae.forEach(function(Xb){return t(D,Xb)}),$e&&or(D,je),ve}function rt(D,R,z,J){if(typeof z=="object"&&z!==null&&z.type===T&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case x:e:{for(var ve=z.key;R!==null;){if(R.key===ve){if(ve=z.type,ve===T){if(R.tag===7){n(D,R.sibling),J=i(R,z.props.children),J.return=D,D=J;break e}}else if(R.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ae&&vh(ve)===R.type){n(D,R.sibling),J=i(R,z.props),Pl(J,z),J.return=D,D=J;break e}n(D,R);break}else t(D,R);R=R.sibling}z.type===T?(J=lr(z.props.children,D.mode,J,z.key),J.return=D,D=J):(J=Qi(z.type,z.key,z.props,null,D.mode,J),Pl(J,z),J.return=D,D=J)}return p(D);case A:e:{for(ve=z.key;R!==null;){if(R.key===ve)if(R.tag===4&&R.stateNode.containerInfo===z.containerInfo&&R.stateNode.implementation===z.implementation){n(D,R.sibling),J=i(R,z.children||[]),J.return=D,D=J;break e}else{n(D,R);break}else t(D,R);R=R.sibling}J=Hu(z,D.mode,J),J.return=D,D=J}return p(D);case ae:return ve=z._init,z=ve(z._payload),rt(D,R,z,J)}if(ye(z))return Ce(D,R,z,J);if(te(z)){if(ve=te(z),typeof ve!="function")throw Error(u(150));return z=ve.call(z),De(D,R,z,J)}if(typeof z.then=="function")return rt(D,R,so(z),J);if(z.$$typeof===Y)return rt(D,R,Ji(D,z),J);co(D,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,R!==null&&R.tag===6?(n(D,R.sibling),J=i(R,z),J.return=D,D=J):(n(D,R),J=qu(z,D.mode,J),J.return=D,D=J),p(D)):n(D,R)}return function(D,R,z,J){try{Yl=0;var ve=rt(D,R,z,J);return Zr=null,ve}catch(Ae){if(Ae===kl||Ae===Wi)throw Ae;var Ye=nn(29,Ae,null,D.mode);return Ye.lanes=J,Ye.return=D,Ye}finally{}}}var Fr=bh(!0),yh=bh(!1),xn=Z(null),qn=null;function Ta(e){var t=e.alternate;le(Rt,Rt.current&1),le(xn,e),qn===null&&(t===null||Pr.current!==null||t.memoizedState!==null)&&(qn=e)}function xh(e){if(e.tag===22){if(le(Rt,Rt.current),le(xn,e),qn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(qn=e)}}else Ma()}function Ma(){le(Rt,Rt.current),le(xn,xn.current)}function la(e){se(xn),qn===e&&(qn=null),se(Rt)}var Rt=Z(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||uc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=on(),i=Sa(r);i.payload=t,n!=null&&(i.callback=n),t=Ea(e,i,r),t!==null&&(un(t,e,r),zl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=on(),i=Sa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ea(e,i,r),t!==null&&(un(t,e,r),zl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=on(),r=Sa(n);r.tag=2,t!=null&&(r.callback=t),t=Ea(e,r,n),t!==null&&(un(t,e,n),zl(t,e,n))}};function wh(e,t,n,r,i,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,p):t.prototype&&t.prototype.isPureReactComponent?!Tl(n,r)||!Tl(i,s):!0}function Sh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xs.enqueueReplaceState(t,t.state,null)}function mr(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ho=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Eh(e){ho(e)}function Ah(e){console.error(e)}function Th(e){ho(e)}function mo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Mh(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ws(e,t,n){return n=Sa(n),n.tag=3,n.payload={element:null},n.callback=function(){mo(e,t)},n}function Nh(e){return e=Sa(e),e.tag=3,e}function Oh(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;e.payload=function(){return i(s)},e.callback=function(){Mh(t,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Mh(t,n,r),typeof i!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Xv(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Rl(t,n,i,!0),n=xn.current,n!==null){switch(n.tag){case 13:return qn===null?Xs():n.alternate===null&&bt===0&&(bt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ju?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Zs(e,r,i)),!1;case 22:return n.flags|=65536,r===Ju?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Zs(e,r,i)),!1}throw Error(u(435,n.tag))}return Zs(e,r,i),Xs(),!1}if($e)return t=xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Pu&&(e=Error(u(422),{cause:r}),_l(gn(e,n)))):(r!==Pu&&(t=Error(u(423),{cause:r}),_l(gn(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=gn(r,n),i=ws(e.stateNode,r,i),Iu(e,i),bt!==4&&(bt=2)),!1;var s=Error(u(520),{cause:r});if(s=gn(s,n),Jl===null?Jl=[s]:Jl.push(s),bt!==4&&(bt=2),t===null)return!0;r=gn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ws(n.stateNode,r,e),Iu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Nh(i),Oh(i,e,n,r),Iu(n,i),!1}n=n.return}while(n!==null);return!1}var _h=Error(u(461)),jt=!1;function Ut(e,t,n,r){t.child=e===null?yh(t,null,n,r):Fr(t,e.child,n,r)}function Rh(e,t,n,r,i){n=n.render;var s=t.ref;if("ref"in r){var p={};for(var b in r)b!=="ref"&&(p[b]=r[b])}else p=r;return fr(t),r=rs(e,t,n,p,s,i),b=ls(),e!==null&&!jt?(is(e,t,i),ia(e,t,i)):($e&&b&&Vu(t),t.flags|=1,Ut(e,t,r,i),t.child)}function Dh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,jh(e,t,s,r,i)):(e=Qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!_s(e,i)){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:Tl,n(p,r)&&e.ref===t.ref)return ia(e,t,i)}return t.flags|=1,e=In(s,r),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Tl(s,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=s,_s(e,i))(e.flags&131072)!==0&&(jt=!0);else return t.lanes=e.lanes,ia(e,t,i)}return Ss(e,t,n,r,i)}function kh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~r}else t.childLanes=0,t.child=null;return Ch(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$i(t,s!==null?s.cachePool:null),s!==null?jd(t,s):ts(),xh(t);else return t.lanes=t.childLanes=536870912,Ch(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?($i(t,s.cachePool),jd(t,s),Ma(),t.memoizedState=null):(e!==null&&$i(t,null),ts(),Ma());return Ut(e,t,i,n),t.child}function Ch(e,t,n,r){var i=Ku();return i=i===null?null:{parent:_t._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&$i(t,null),ts(),xh(t),e!==null&&Rl(e,t,r,!0),null}function po(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ss(e,t,n,r,i){return fr(t),n=rs(e,t,n,r,void 0,i),r=ls(),e!==null&&!jt?(is(e,t,i),ia(e,t,i)):($e&&r&&Vu(t),t.flags|=1,Ut(e,t,n,i),t.child)}function zh(e,t,n,r,i,s){return fr(t),t.updateQueue=null,n=Cd(t,r,n,i),kd(e),r=ls(),e!==null&&!jt?(is(e,t,s),ia(e,t,s)):($e&&r&&Vu(t),t.flags|=1,Ut(e,t,n,s),t.child)}function Uh(e,t,n,r,i){if(fr(t),t.stateNode===null){var s=Br,p=n.contextType;typeof p=="object"&&p!==null&&(s=Ht(p)),s=new n(r,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xs,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=r,s.state=t.memoizedState,s.refs={},$u(t),p=n.contextType,s.context=typeof p=="object"&&p!==null?Ht(p):Br,s.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(ys(t,n,p,r),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&xs.enqueueReplaceState(s,s.state,null),Ll(t,r,s,i),Ul(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){s=t.stateNode;var b=t.memoizedProps,w=mr(n,b);s.props=w;var U=s.context,F=n.contextType;p=Br,typeof F=="object"&&F!==null&&(p=Ht(F));var W=n.getDerivedStateFromProps;F=typeof W=="function"||typeof s.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,F||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(b||U!==p)&&Sh(t,s,r,p),wa=!1;var q=t.memoizedState;s.state=q,Ll(t,r,s,i),Ul(),U=t.memoizedState,b||q!==U||wa?(typeof W=="function"&&(ys(t,n,W,r),U=t.memoizedState),(w=wa||wh(t,n,w,r,q,U,p))?(F||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=U),s.props=r,s.state=U,s.context=p,r=w):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wu(e,t),p=t.memoizedProps,F=mr(n,p),s.props=F,W=t.pendingProps,q=s.context,U=n.contextType,w=Br,typeof U=="object"&&U!==null&&(w=Ht(U)),b=n.getDerivedStateFromProps,(U=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==W||q!==w)&&Sh(t,s,r,w),wa=!1,q=t.memoizedState,s.state=q,Ll(t,r,s,i),Ul();var H=t.memoizedState;p!==W||q!==H||wa||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof b=="function"&&(ys(t,n,b,r),H=t.memoizedState),(F=wa||wh(t,n,F,r,q,H,w)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(U||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,H,w),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,H,w)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),s.props=r,s.state=H,s.context=w,r=F):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),r=!1)}return s=r,po(e,t),r=(t.flags&128)!==0,s||r?(s=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&r?(t.child=Fr(t,e.child,null,i),t.child=Fr(t,null,n,i)):Ut(e,t,n,i),t.memoizedState=s.state,e=t.child):e=ia(e,t,i),e}function Lh(e,t,n,r){return Ol(),t.flags|=256,Ut(e,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function As(e){return{baseLanes:e,cachePool:Ad()}}function Ts(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=wn),e}function Bh(e,t,n){var r=t.pendingProps,i=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(Rt.current&2)!==0),p&&(i=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if($e){if(i?Ta(t):Ma(),$e){var b=vt,w;if(w=b){e:{for(w=b,b=Bn;w.nodeType!==8;){if(!b){b=null;break e}if(w=jn(w.nextSibling),w===null){b=null;break e}}b=w}b!==null?(t.memoizedState={dehydrated:b,treeContext:ir!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},w=nn(18,null,null,0),w.stateNode=b,w.return=t,t.child=w,Gt=t,vt=null,w=!0):w=!1}w||sr(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return uc(b)?t.lanes=32:t.lanes=536870912,null;la(t)}return b=r.children,r=r.fallback,i?(Ma(),i=t.mode,b=go({mode:"hidden",children:b},i),r=lr(r,i,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,i=t.child,i.memoizedState=As(n),i.childLanes=Ts(e,p,n),t.memoizedState=Es,r):(Ta(t),Ms(t,b))}if(w=e.memoizedState,w!==null&&(b=w.dehydrated,b!==null)){if(s)t.flags&256?(Ta(t),t.flags&=-257,t=Ns(e,t,n)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),i=r.fallback,b=t.mode,r=go({mode:"visible",children:r.children},b),i=lr(i,b,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,Fr(t,e.child,null,n),r=t.child,r.memoizedState=As(n),r.childLanes=Ts(e,p,n),t.memoizedState=Es,t=i);else if(Ta(t),uc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var U=p.dgst;p=U,r=Error(u(419)),r.stack="",r.digest=p,_l({value:r,source:null,stack:null}),t=Ns(e,t,n)}else if(jt||Rl(e,t,n,!1),p=(n&e.childLanes)!==0,jt||p){if(p=ot,p!==null&&(r=n&-n,r=(r&42)!==0?1:ml(r),r=(r&(p.suspendedLanes|n))!==0?0:r,r!==0&&r!==w.retryLane))throw w.retryLane=r,Lr(e,r),un(p,e,r),_h;b.data==="$?"||Xs(),t=Ns(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,vt=jn(b.nextSibling),Gt=t,$e=!0,ur=null,Bn=!1,e!==null&&(bn[yn++]=ea,bn[yn++]=ta,bn[yn++]=ir,ea=e.id,ta=e.overflow,ir=t),t=Ms(t,r.children),t.flags|=4096);return t}return i?(Ma(),i=r.fallback,b=t.mode,w=e.child,U=w.sibling,r=In(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,U!==null?i=In(U,i):(i=lr(i,b,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,b=e.child.memoizedState,b===null?b=As(n):(w=b.cachePool,w!==null?(U=_t._currentValue,w=w.parent!==U?{parent:U,pool:U}:w):w=Ad(),b={baseLanes:b.baseLanes|n,cachePool:w}),i.memoizedState=b,i.childLanes=Ts(e,p,n),t.memoizedState=Es,r):(Ta(t),n=e.child,e=n.sibling,n=In(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Ms(e,t){return t=go({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function go(e,t){return e=nn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ns(e,t,n){return Fr(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xu(e.return,t,n)}function Os(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(e,t,r.children,n),r=Rt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qh(e,n,t);else if(e.tag===19)qh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(le(Rt,r),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Os(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Os(t,!0,n,null,s);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Da|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _s(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function Qv(e,t,n){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),xa(t,_t,e.memoizedState.cache),Ol();break;case 27:case 5:lt(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Ta(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bh(e,t,n):(Ta(t),e=ia(e,t,n),e!==null?e.sibling:null);Ta(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Rl(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return Hh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(Rt,Rt.current),r)break;return null;case 22:case 23:return t.lanes=0,kh(e,t,n);case 24:xa(t,_t,e.memoizedState.cache)}return ia(e,t,n)}function Vh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)jt=!0;else{if(!_s(e,n)&&(t.flags&128)===0)return jt=!1,Qv(e,t,n);jt=(e.flags&131072)!==0}else jt=!1,$e&&(t.flags&1048576)!==0&&vd(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,typeof r=="function")Bu(r)?(e=mr(r,e),t.tag=1,t=Uh(null,t,r,e,n)):(t.tag=0,t=Ss(null,t,r,e,n));else{if(r!=null){if(i=r.$$typeof,i===$){t.tag=11,t=Rh(null,t,r,e,n);break e}else if(i===ee){t.tag=14,t=Dh(null,t,r,e,n);break e}}throw t=re(r)||r,Error(u(306,t,""))}}return t;case 0:return Ss(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=mr(r,t.pendingProps),Uh(e,t,r,i,n);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(u(387));r=t.pendingProps;var s=t.memoizedState;i=s.element,Wu(e,t),Ll(t,r,null,n);var p=t.memoizedState;if(r=p.cache,xa(t,_t,r),r!==s.cache&&Qu(t,[_t],n,!0),Ul(),r=p.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Lh(e,t,r,n);break e}else if(r!==i){i=gn(Error(u(424)),t),_l(i),t=Lh(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(vt=jn(e.firstChild),Gt=t,$e=!0,ur=null,Bn=!0,n=yh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ol(),r===i){t=ia(e,t,n);break e}Ut(e,t,r,n)}t=t.child}return t;case 26:return po(e,t),e===null?(n=X0(t.type,null,t.pendingProps,null))?t.memoizedState=n:$e||(n=t.type,e=t.pendingProps,r=Ro(Se.current).createElement(n),r[I]=t,r[ue]=e,Bt(r,n,e),Ke(r),t.stateNode=r):t.memoizedState=X0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lt(t),e===null&&$e&&(r=t.stateNode=Y0(t.type,t.pendingProps,Se.current),Gt=t,Bn=!0,i=vt,za(t.type)?(sc=i,vt=jn(r.firstChild)):vt=i),Ut(e,t,t.pendingProps.children,n),po(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$e&&((i=r=vt)&&(r=xb(r,t.type,t.pendingProps,Bn),r!==null?(t.stateNode=r,Gt=t,vt=jn(r.firstChild),Bn=!1,i=!0):i=!1),i||sr(t)),lt(t),i=t.type,s=t.pendingProps,p=e!==null?e.memoizedProps:null,r=s.children,lc(i,s)?r=null:p!==null&&lc(i,p)&&(t.flags|=32),t.memoizedState!==null&&(i=rs(e,t,Bv,null,null,n),li._currentValue=i),po(e,t),Ut(e,t,r,n),t.child;case 6:return e===null&&$e&&((e=n=vt)&&(n=wb(n,t.pendingProps,Bn),n!==null?(t.stateNode=n,Gt=t,vt=null,e=!0):e=!1),e||sr(t)),null;case 13:return Bh(e,t,n);case 4:return Be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):Ut(e,t,r,n),t.child;case 11:return Rh(e,t,t.type,t.pendingProps,n);case 7:return Ut(e,t,t.pendingProps,n),t.child;case 8:return Ut(e,t,t.pendingProps.children,n),t.child;case 12:return Ut(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xa(t,t.type,r.value),Ut(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,fr(t),i=Ht(i),r=r(i),t.flags|=1,Ut(e,t,r,n),t.child;case 14:return Dh(e,t,t.type,t.pendingProps,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 19:return Hh(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=go(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=In(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return kh(e,t,n);case 24:return fr(t),r=Ht(_t),e===null?(i=Ku(),i===null&&(i=ot,s=Zu(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:r,cache:i},$u(t),xa(t,_t,i)):((e.lanes&n)!==0&&(Wu(e,t),Ll(t,null,null,n),Ul()),i=e.memoizedState,s=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xa(t,_t,r)):(r=s.cache,xa(t,_t,r),r!==i.cache&&Qu(t,[_t],n,!0))),Ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function oa(e){e.flags|=4}function Yh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J0(t)){if(t=xn.current,t!==null&&((Ze&4194048)===Ze?qn!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||t!==qn))throw Cl=Ju,Td;e.flags|=8192}}function vo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ji():536870912,e.lanes|=t,Wr|=t)}function Gl(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zv(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return gt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),aa(_t),yt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xd())),gt(t),null;case 26:return n=t.memoizedState,e===null?(oa(t),n!==null?(gt(t),Yh(t,n)):(gt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(oa(t),gt(t),Yh(t,n)):(gt(t),t.flags&=-16777217):(e.memoizedProps!==r&&oa(t),gt(t),t.flags&=-16777217),null;case 27:en(t),n=Se.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return gt(t),null}e=be.current,Nl(t)?bd(t):(e=Y0(i,r,n),t.stateNode=e,oa(t))}return gt(t),null;case 5:if(en(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return gt(t),null}if(e=be.current,Nl(t))bd(t);else{switch(i=Ro(Se.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?i.createElement(n,{is:r.is}):i.createElement(n)}}e[I]=t,e[ue]=r;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Bt(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&oa(t)}}return gt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&oa(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(e=Se.current,Nl(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Gt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[I]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||z0(e.nodeValue,n)),e||sr(t)}else e=Ro(e).createTextNode(r),e[I]=t,t.stateNode=e}return gt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[I]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;gt(t),i=!1}else i=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(la(t),t):(la(t),null)}if(la(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool);var s=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),vo(t,t.updateQueue),gt(t),null;case 4:return yt(),e===null&&ec(t.stateNode.containerInfo),gt(t),null;case 10:return aa(t.type),gt(t),null;case 19:if(se(Rt),i=t.memoizedState,i===null)return gt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Gl(i,!1);else{if(bt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=fo(e),s!==null){for(t.flags|=128,Gl(i,!1),e=s.updateQueue,t.updateQueue=e,vo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gd(n,e),n=n.sibling;return le(Rt,Rt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Yt()>xo&&(t.flags|=128,r=!0,Gl(i,!1),t.lanes=4194304)}else{if(!r)if(e=fo(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,vo(t,e),Gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!$e)return gt(t),null}else 2*Yt()-i.renderingStartTime>xo&&n!==536870912&&(t.flags|=128,r=!0,Gl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Yt(),t.sibling=null,e=Rt.current,le(Rt,r?e&1|2:e&1),t):(gt(t),null);case 22:case 23:return la(t),ns(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),n=t.updateQueue,n!==null&&vo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(dr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(_t),gt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Fv(e,t){switch(Yu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(_t),yt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return en(t),null;case 13:if(la(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(Rt),null;case 4:return yt(),null;case 10:return aa(t.type),null;case 22:case 23:return la(t),ns(),e!==null&&se(dr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(_t),null;case 25:return null;default:return null}}function Ph(e,t){switch(Yu(t),t.tag){case 3:aa(_t),yt();break;case 26:case 27:case 5:en(t);break;case 4:yt();break;case 13:la(t);break;case 19:se(Rt);break;case 10:aa(t.type);break;case 22:case 23:la(t),ns(),e!==null&&se(dr);break;case 24:aa(_t)}}function Xl(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var s=n.create,p=n.inst;r=s(),p.destroy=r}n=n.next}while(n!==i)}}catch(b){it(t,t.return,b)}}function Na(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&e)===e){var p=r.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,i=t;var w=n,U=b;try{U()}catch(F){it(i,w,F)}}}r=r.next}while(r!==s)}}catch(F){it(t,t.return,F)}}function Gh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dd(t,n)}catch(r){it(e,e.return,r)}}}function Xh(e,t,n){n.props=mr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){it(e,t,r)}}function Ql(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){it(e,t,i)}}function Hn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){it(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){it(e,t,i)}else n.current=null}function Qh(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){it(e,e.return,i)}}function Rs(e,t,n){try{var r=e.stateNode;pb(r,e.type,n,t),r[ue]=t}catch(i){it(e,e.return,i)}}function Zh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(r===27&&za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}function bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}function Fh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Bt(t,r,n),t[I]=e,t[ue]=n}catch(s){it(e,e.return,s)}}var ua=!1,wt=!1,ks=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,kt=null;function Kv(e,t){if(e=e.containerInfo,ac=Uo,e=id(e),Du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,b=-1,w=-1,U=0,F=0,W=e,q=null;t:for(;;){for(var H;W!==n||i!==0&&W.nodeType!==3||(b=p+i),W!==s||r!==0&&W.nodeType!==3||(w=p+r),W.nodeType===3&&(p+=W.nodeValue.length),(H=W.firstChild)!==null;)q=W,W=H;for(;;){if(W===e)break t;if(q===n&&++U===i&&(b=p),q===s&&++F===r&&(w=p),(H=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=H}n=b===-1||w===-1?null:{start:b,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(rc={focusedElem:e,selectionRange:n},Uo=!1,kt=t;kt!==null;)if(t=kt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,kt=e;else for(;kt!==null;){switch(t=kt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var Ce=mr(n.type,i,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(Ce,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(De){it(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)oc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,kt=e;break}kt=t.return}}function Jh(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Oa(e,n),r&4&&Xl(5,n);break;case 1:if(Oa(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){it(n,n.return,p)}else{var i=mr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){it(n,n.return,p)}}r&64&&Gh(n),r&512&&Ql(n,n.return);break;case 3:if(Oa(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dd(e,t)}catch(p){it(n,n.return,p)}}break;case 27:t===null&&r&4&&Fh(n);case 26:case 5:Oa(e,n),t===null&&r&4&&Qh(n),r&512&&Ql(n,n.return);break;case 12:Oa(e,n);break;case 13:Oa(e,n),r&4&&Ih(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rb.bind(null,n),Sb(e,n))));break;case 22:if(r=n.memoizedState!==null||ua,!r){t=t!==null&&t.memoizedState!==null||wt,i=ua;var s=wt;ua=r,(wt=t)&&!s?_a(e,n,(n.subtreeFlags&8772)!==0):Oa(e,n),ua=i,wt=s}break;case 30:break;default:Oa(e,n)}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ee(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ft=null,$t=!1;function sa(e,t,n){for(n=n.child;n!==null;)Wh(e,t,n),n=n.sibling}function Wh(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(pe,n)}catch{}switch(n.tag){case 26:wt||Hn(n,t),sa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:wt||Hn(n,t);var r=ft,i=$t;za(n.type)&&(ft=n.stateNode,$t=!1),sa(e,t,n),ti(n.stateNode),ft=r,$t=i;break;case 5:wt||Hn(n,t);case 6:if(r=ft,i=$t,ft=null,sa(e,t,n),ft=r,$t=i,ft!==null)if($t)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(n.stateNode)}catch(s){it(n,t,s)}else try{ft.removeChild(n.stateNode)}catch(s){it(n,t,s)}break;case 18:ft!==null&&($t?(e=ft,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),si(e)):H0(ft,n.stateNode));break;case 4:r=ft,i=$t,ft=n.stateNode.containerInfo,$t=!0,sa(e,t,n),ft=r,$t=i;break;case 0:case 11:case 14:case 15:wt||Na(2,n,t),wt||Na(4,n,t),sa(e,t,n);break;case 1:wt||(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Xh(n,t,r)),sa(e,t,n);break;case 21:sa(e,t,n);break;case 22:wt=(r=wt)||n.memoizedState!==null,sa(e,t,n),wt=r;break;default:sa(e,t,n)}}function Ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{si(e)}catch(n){it(t,t.return,n)}}function Jv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kh),t;default:throw Error(u(435,e.tag))}}function Cs(e,t){var n=Jv(e);t.forEach(function(r){var i=lb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=e,p=t,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(za(b.type)){ft=b.stateNode,$t=!1;break e}break;case 5:ft=b.stateNode,$t=!1;break e;case 3:case 4:ft=b.stateNode.containerInfo,$t=!0;break e}b=b.return}if(ft===null)throw Error(u(160));Wh(s,p,i),ft=null,$t=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)e0(t,e),t=t.sibling}var Dn=null;function e0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:an(t,e),rn(e),r&4&&(Na(3,e,e.return),Xl(3,e),Na(5,e,e.return));break;case 1:an(t,e),rn(e),r&512&&(wt||n===null||Hn(n,n.return)),r&64&&ua&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=Dn;if(an(t,e),rn(e),r&512&&(wt||n===null||Hn(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ke]||s[I]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),Bt(s,r,n),s[I]=e,Ke(s),r=s;break e;case"link":var p=F0("link","href",i).get(r+(n.href||""));if(p){for(var b=0;b<p.length;b++)if(s=p[b],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(b,1);break t}}s=i.createElement(r),Bt(s,r,n),i.head.appendChild(s);break;case"meta":if(p=F0("meta","content",i).get(r+(n.content||""))){for(b=0;b<p.length;b++)if(s=p[b],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(b,1);break t}}s=i.createElement(r),Bt(s,r,n),i.head.appendChild(s);break;default:throw Error(u(468,r))}s[I]=e,Ke(s),r=s}e.stateNode=r}else K0(i,e.type,e.stateNode);else e.stateNode=Z0(i,r,e.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?K0(i,e.type,e.stateNode):Z0(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Rs(e,e.memoizedProps,n.memoizedProps)}break;case 27:an(t,e),rn(e),r&512&&(wt||n===null||Hn(n,n.return)),n!==null&&r&4&&Rs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(an(t,e),rn(e),r&512&&(wt||n===null||Hn(n,n.return)),e.flags&32){i=e.stateNode;try{Rr(i,"")}catch(H){it(e,e.return,H)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Rs(e,i,n!==null?n.memoizedProps:i)),r&1024&&(ks=!0);break;case 6:if(an(t,e),rn(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(H){it(e,e.return,H)}}break;case 3:if(ko=null,i=Dn,Dn=Do(t.containerInfo),an(t,e),Dn=i,rn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{si(t.containerInfo)}catch(H){it(e,e.return,H)}ks&&(ks=!1,t0(e));break;case 4:r=Dn,Dn=Do(e.stateNode.containerInfo),an(t,e),rn(e),Dn=r;break;case 12:an(t,e),rn(e);break;case 13:an(t,e),rn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hs=Yt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cs(e,r)));break;case 22:i=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,U=ua,F=wt;if(ua=U||i,wt=F||w,an(t,e),wt=F,ua=U,rn(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||w||ua||wt||pr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(s=w.stateNode,i)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=w.stateNode;var W=w.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){it(w,w.return,H)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(H){it(w,w.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Cs(e,n))));break;case 19:an(t,e),rn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cs(e,r)));break;case 30:break;case 21:break;default:an(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zh(r)){n=r;break}r=r.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,s=Ds(e);bo(e,s,i);break;case 5:var p=n.stateNode;n.flags&32&&(Rr(p,""),n.flags&=-33);var b=Ds(e);bo(e,b,p);break;case 3:case 4:var w=n.stateNode.containerInfo,U=Ds(e);js(e,U,w);break;default:throw Error(u(161))}}catch(F){it(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;t0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jh(e,t.alternate,t),t=t.sibling}function pr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),pr(t);break;case 1:Hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xh(t,t.return,n),pr(t);break;case 27:ti(t.stateNode);case 26:case 5:Hn(t,t.return),pr(t);break;case 22:t.memoizedState===null&&pr(t);break;case 30:pr(t);break;default:pr(t)}e=e.sibling}}function _a(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,s=t,p=s.flags;switch(s.tag){case 0:case 11:case 15:_a(i,s,n),Xl(4,s);break;case 1:if(_a(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(U){it(r,r.return,U)}if(r=s,i=r.updateQueue,i!==null){var b=r.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)Rd(w[i],b)}catch(U){it(r,r.return,U)}}n&&p&64&&Gh(s),Ql(s,s.return);break;case 27:Fh(s);case 26:case 5:_a(i,s,n),n&&r===null&&p&4&&Qh(s),Ql(s,s.return);break;case 12:_a(i,s,n);break;case 13:_a(i,s,n),n&&p&4&&Ih(i,s);break;case 22:s.memoizedState===null&&_a(i,s,n),Ql(s,s.return);break;case 30:break;default:_a(i,s,n)}t=t.sibling}}function zs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Dl(n))}function Us(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dl(e))}function Vn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(e,t,n,r),t=t.sibling}function n0(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Vn(e,t,n,r),i&2048&&Xl(9,t);break;case 1:Vn(e,t,n,r);break;case 3:Vn(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dl(e)));break;case 12:if(i&2048){Vn(e,t,n,r),e=t.stateNode;try{var s=t.memoizedProps,p=s.id,b=s.onPostCommit;typeof b=="function"&&b(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){it(t,t.return,w)}}else Vn(e,t,n,r);break;case 13:Vn(e,t,n,r);break;case 23:break;case 22:s=t.stateNode,p=t.alternate,t.memoizedState!==null?s._visibility&2?Vn(e,t,n,r):Zl(e,t):s._visibility&2?Vn(e,t,n,r):(s._visibility|=2,Kr(e,t,n,r,(t.subtreeFlags&10256)!==0)),i&2048&&zs(p,t);break;case 24:Vn(e,t,n,r),i&2048&&Us(t.alternate,t);break;default:Vn(e,t,n,r)}}function Kr(e,t,n,r,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,p=t,b=n,w=r,U=p.flags;switch(p.tag){case 0:case 11:case 15:Kr(s,p,b,w,i),Xl(8,p);break;case 23:break;case 22:var F=p.stateNode;p.memoizedState!==null?F._visibility&2?Kr(s,p,b,w,i):Zl(s,p):(F._visibility|=2,Kr(s,p,b,w,i)),i&&U&2048&&zs(p.alternate,p);break;case 24:Kr(s,p,b,w,i),i&&U&2048&&Us(p.alternate,p);break;default:Kr(s,p,b,w,i)}t=t.sibling}}function Zl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Zl(n,r),i&2048&&zs(r.alternate,r);break;case 24:Zl(n,r),i&2048&&Us(r.alternate,r);break;default:Zl(n,r)}t=t.sibling}}var Fl=8192;function Jr(e){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 26:Jr(e),e.flags&Fl&&e.memoizedState!==null&&zb(Dn,e.memoizedState,e.memoizedProps);break;case 5:Jr(e);break;case 3:case 4:var t=Dn;Dn=Do(e.stateNode.containerInfo),Jr(e),Dn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Fl,Fl=16777216,Jr(e),Fl=t):Jr(e));break;default:Jr(e)}}function r0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,i0(r,e)}r0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(e),e=e.sibling}function l0(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yo(e)):Kl(e);break;default:Kl(e)}}function yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,i0(r,e)}r0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),yo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yo(t));break;default:yo(t)}e=e.sibling}}function i0(e,t){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:Na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Dl(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,kt=r;else e:for(n=e;kt!==null;){r=kt;var i=r.sibling,s=r.return;if($h(r),r===n){kt=null;break e}if(i!==null){i.return=s,kt=i;break e}kt=s}}}var $v={getCacheForType:function(e){var t=Ht(_t),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Wv=typeof WeakMap=="function"?WeakMap:Map,et=0,ot=null,Pe=null,Ze=0,tt=0,ln=null,Ra=!1,$r=!1,Ls=!1,ca=0,bt=0,Da=0,gr=0,Bs=0,wn=0,Wr=0,Jl=null,Wt=null,qs=!1,Hs=0,xo=1/0,wo=null,ja=null,Lt=0,ka=null,Ir=null,el=0,Vs=0,Ys=null,o0=null,$l=0,Ps=null;function on(){if((et&2)!==0&&Ze!==0)return Ze&-Ze;if(C.T!==null){var e=Vr;return e!==0?e:Js()}return O()}function u0(){wn===0&&(wn=(Ze&536870912)===0||$e?Nr():536870912);var e=xn.current;return e!==null&&(e.flags|=32),wn}function un(e,t,n){(e===ot&&(tt===2||tt===9)||e.cancelPendingCommit!==null)&&(tl(e,0),Ca(e,Ze,wn,!1)),Wa(e,n),((et&2)===0||e!==ot)&&(e===ot&&((et&2)===0&&(gr|=n),bt===4&&Ca(e,Ze,wn,!1)),Yn(e))}function s0(e,t,n){if((et&6)!==0)throw Error(u(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||dn(e,t),i=r?tb(e,t):Qs(e,t,!0),s=r;do{if(i===0){$r&&!r&&Ca(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Iv(n)){i=Qs(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var b=e;i=Jl;var w=b.current.memoizedState.isDehydrated;if(w&&(tl(b,p).flags|=256),p=Qs(b,p,!1),p!==2){if(Ls&&!w){b.errorRecoveryDisabledLanes|=s,gr|=s,i=4;break e}s=Wt,Wt=i,s!==null&&(Wt===null?Wt=s:Wt.push.apply(Wt,s))}i=p}if(s=!1,i!==2)continue}}if(i===1){tl(e,0),Ca(e,t,0,!0);break}e:{switch(r=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ca(r,t,wn,!Ra);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Hs+300-Yt(),10<i)){if(Ca(r,t,wn,!Ra),Ln(r,0,!0)!==0)break e;r.timeoutHandle=B0(c0.bind(null,r,n,Wt,wo,qs,t,wn,gr,Wr,Ra,s,2,-0,0),i);break e}c0(r,n,Wt,wo,qs,t,wn,gr,Wr,Ra,s,0,-0,0)}}break}while(!0);Yn(e)}function c0(e,t,n,r,i,s,p,b,w,U,F,W,q,H){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(ri={stylesheets:null,count:0,unsuspend:Cb},a0(t),W=Ub(),W!==null)){e.cancelPendingCommit=W(v0.bind(null,e,t,s,n,r,i,p,b,w,F,1,q,H)),Ca(e,s,p,!U);return}v0(e,t,s,n,r,i,p,b,w)}function Iv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,n,r){t&=~Bs,t&=~gr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var s=31-We(i),p=1<<s;r[s]=-1,i&=~p}n!==0&&Ia(e,n,t)}function So(){return(et&6)===0?(Wl(0),!1):!0}function Gs(){if(Pe!==null){if(tt===0)var e=Pe.return;else e=Pe,na=cr=null,os(e),Zr=null,Yl=0,e=Pe;for(;e!==null;)Ph(e.alternate,e),e=e.return;Pe=null}}function tl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gs(),ot=e,Pe=n=In(e.current,null),Ze=t,tt=0,ln=null,Ra=!1,$r=dn(e,t),Ls=!1,Wr=wn=Bs=gr=Da=bt=0,Wt=Jl=null,qs=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),s=1<<i;t|=e[i],r&=~s}return ca=t,Pi(),n}function f0(e,t){qe=null,C.H=uo,t===kl||t===Wi?(t=Od(),tt=3):t===Td?(t=Od(),tt=4):tt=t===_h?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,Pe===null&&(bt=1,mo(e,gn(t,e.current)))}function d0(){var e=C.H;return C.H=uo,e===null?uo:e}function h0(){var e=C.A;return C.A=$v,e}function Xs(){bt=4,Ra||(Ze&4194048)!==Ze&&xn.current!==null||($r=!0),(Da&134217727)===0&&(gr&134217727)===0||ot===null||Ca(ot,Ze,wn,!1)}function Qs(e,t,n){var r=et;et|=2;var i=d0(),s=h0();(ot!==e||Ze!==t)&&(wo=null,tl(e,t)),t=!1;var p=bt;e:do try{if(tt!==0&&Pe!==null){var b=Pe,w=ln;switch(tt){case 8:Gs(),p=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(t=!0);var U=tt;if(tt=0,ln=null,nl(e,b,w,U),n&&$r){p=0;break e}break;default:U=tt,tt=0,ln=null,nl(e,b,w,U)}}eb(),p=bt;break}catch(F){f0(e,F)}while(!0);return t&&e.shellSuspendCounter++,na=cr=null,et=r,C.H=i,C.A=s,Pe===null&&(ot=null,Ze=0,Pi()),p}function eb(){for(;Pe!==null;)m0(Pe)}function tb(e,t){var n=et;et|=2;var r=d0(),i=h0();ot!==e||Ze!==t?(wo=null,xo=Yt()+500,tl(e,t)):$r=dn(e,t);e:do try{if(tt!==0&&Pe!==null){t=Pe;var s=ln;t:switch(tt){case 1:tt=0,ln=null,nl(e,t,s,1);break;case 2:case 9:if(Md(s)){tt=0,ln=null,p0(t);break}t=function(){tt!==2&&tt!==9||ot!==e||(tt=7),Yn(e)},s.then(t,t);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Md(s)?(tt=0,ln=null,p0(t)):(tt=0,ln=null,nl(e,t,s,7));break;case 5:var p=null;switch(Pe.tag){case 26:p=Pe.memoizedState;case 5:case 27:var b=Pe;if(!p||J0(p)){tt=0,ln=null;var w=b.sibling;if(w!==null)Pe=w;else{var U=b.return;U!==null?(Pe=U,Eo(U)):Pe=null}break t}}tt=0,ln=null,nl(e,t,s,5);break;case 6:tt=0,ln=null,nl(e,t,s,6);break;case 8:Gs(),bt=6;break e;default:throw Error(u(462))}}nb();break}catch(F){f0(e,F)}while(!0);return na=cr=null,C.H=r,C.A=i,et=n,Pe!==null?0:(ot=null,Ze=0,Pi(),bt)}function nb(){for(;Pe!==null&&!Tr();)m0(Pe)}function m0(e){var t=Vh(e.alternate,e,ca);e.memoizedProps=e.pendingProps,t===null?Eo(e):Pe=t}function p0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zh(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=zh(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:os(t);default:Ph(n,t),t=Pe=gd(t,ca),t=Vh(n,t,ca)}e.memoizedProps=e.pendingProps,t===null?Eo(e):Pe=t}function nl(e,t,n,r){na=cr=null,os(t),Zr=null,Yl=0;var i=t.return;try{if(Xv(e,i,t,n,Ze)){bt=1,mo(e,gn(n,e.current)),Pe=null;return}}catch(s){if(i!==null)throw Pe=i,s;bt=1,mo(e,gn(n,e.current)),Pe=null;return}t.flags&32768?($e||r===1?e=!0:$r||(Ze&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),g0(t,e)):Eo(t)}function Eo(e){var t=e;do{if((t.flags&32768)!==0){g0(t,Ra);return}e=t.return;var n=Zv(t.alternate,t,ca);if(n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);bt===0&&(bt=5)}function g0(e,t){do{var n=Fv(e.alternate,e);if(n!==null){n.flags&=32767,Pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=n}while(e!==null);bt=6,Pe=null}function v0(e,t,n,r,i,s,p,b,w){e.cancelPendingCommit=null;do Ao();while(Lt!==0);if((et&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Uu,ki(e,n,s,p,b,w),e===ot&&(Pe=ot=null,Ze=0),Ir=t,ka=e,el=n,Vs=s,Ys=i,o0=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ib(L,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=C.T,C.T=null,i=ne.p,ne.p=2,p=et,et|=4;try{Kv(e,t,n)}finally{et=p,ne.p=i,C.T=r}}Lt=1,b0(),y0(),x0()}}function b0(){if(Lt===1){Lt=0;var e=ka,t=Ir,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var r=ne.p;ne.p=2;var i=et;et|=4;try{e0(t,e);var s=rc,p=id(e.containerInfo),b=s.focusedElem,w=s.selectionRange;if(p!==b&&b&&b.ownerDocument&&ld(b.ownerDocument.documentElement,b)){if(w!==null&&Du(b)){var U=w.start,F=w.end;if(F===void 0&&(F=U),"selectionStart"in b)b.selectionStart=U,b.selectionEnd=Math.min(F,b.value.length);else{var W=b.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var H=q.getSelection(),Ce=b.textContent.length,De=Math.min(w.start,Ce),rt=w.end===void 0?De:Math.min(w.end,Ce);!H.extend&&De>rt&&(p=rt,rt=De,De=p);var D=rd(b,De),R=rd(b,rt);if(D&&R&&(H.rangeCount!==1||H.anchorNode!==D.node||H.anchorOffset!==D.offset||H.focusNode!==R.node||H.focusOffset!==R.offset)){var z=W.createRange();z.setStart(D.node,D.offset),H.removeAllRanges(),De>rt?(H.addRange(z),H.extend(R.node,R.offset)):(z.setEnd(R.node,R.offset),H.addRange(z))}}}}for(W=[],H=b;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<W.length;b++){var J=W[b];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Uo=!!ac,rc=ac=null}finally{et=i,ne.p=r,C.T=n}}e.current=t,Lt=2}}function y0(){if(Lt===2){Lt=0;var e=ka,t=Ir,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var r=ne.p;ne.p=2;var i=et;et|=4;try{Jh(e,t.alternate,t)}finally{et=i,ne.p=r,C.T=n}}Lt=3}}function x0(){if(Lt===4||Lt===3){Lt=0,hl();var e=ka,t=Ir,n=el,r=o0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Lt=5:(Lt=0,Ir=ka=null,w0(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ja=null),pl(n),t=t.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(pe,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=C.T,i=ne.p,ne.p=2,C.T=null;try{for(var s=e.onRecoverableError,p=0;p<r.length;p++){var b=r[p];s(b.value,{componentStack:b.stack})}}finally{C.T=t,ne.p=i}}(el&3)!==0&&Ao(),Yn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Ps?$l++:($l=0,Ps=e):$l=0,Wl(0)}}function w0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Dl(t)))}function Ao(e){return b0(),y0(),x0(),S0()}function S0(){if(Lt!==5)return!1;var e=ka,t=Vs;Vs=0;var n=pl(el),r=C.T,i=ne.p;try{ne.p=32>n?32:n,C.T=null,n=Ys,Ys=null;var s=ka,p=el;if(Lt=0,Ir=ka=null,el=0,(et&6)!==0)throw Error(u(331));var b=et;if(et|=4,l0(s.current),n0(s,s.current,p,n),et=b,Wl(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(pe,s)}catch{}return!0}finally{ne.p=i,C.T=r,w0(e,t)}}function E0(e,t,n){t=gn(n,t),t=ws(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(Wa(e,2),Yn(e))}function it(e,t,n){if(e.tag===3)E0(e,e,n);else for(;t!==null;){if(t.tag===3){E0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){e=gn(n,e),n=Nh(2),r=Ea(t,n,2),r!==null&&(Oh(n,r,t,e),Wa(r,2),Yn(r));break}}t=t.return}}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ls=!0,i.add(n),e=ab.bind(null,e,t,n),t.then(e,e))}function ab(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ot===e&&(Ze&n)===n&&(bt===4||bt===3&&(Ze&62914560)===Ze&&300>Yt()-Hs?(et&2)===0&&tl(e,0):Bs|=n,Wr===Ze&&(Wr=0)),Yn(e)}function A0(e,t){t===0&&(t=ji()),e=Lr(e,t),e!==null&&(Wa(e,t),Yn(e))}function rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),A0(e,n)}function lb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(t),A0(e,n)}function ib(e,t){return Ka(e,t)}var To=null,al=null,Fs=!1,Mo=!1,Ks=!1,vr=0;function Yn(e){e!==al&&e.next===null&&(al===null?To=al=e:al=al.next=e),Mo=!0,Fs||(Fs=!0,ub())}function Wl(e,t){if(!Ks&&Mo){Ks=!0;do for(var n=!1,r=To;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var p=r.suspendedLanes,b=r.pingedLanes;s=(1<<31-We(42|e)+1)-1,s&=i&~(p&~b),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,O0(r,s))}else s=Ze,s=Ln(r,r===ot?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(s&3)===0||dn(r,s)||(n=!0,O0(r,s));r=r.next}while(n);Ks=!1}}function ob(){T0()}function T0(){Mo=Fs=!1;var e=0;vr!==0&&(gb()&&(e=vr),vr=0);for(var t=Yt(),n=null,r=To;r!==null;){var i=r.next,s=M0(r,t);s===0?(r.next=null,n===null?To=i:n.next=i,i===null&&(al=n)):(n=r,(e!==0||(s&3)!==0)&&(Mo=!0)),r=i}Wl(e)}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-We(s),b=1<<p,w=i[p];w===-1?((b&n)===0||(b&r)!==0)&&(i[p]=$a(b,t)):w<=t&&(e.expiredLanes|=b),s&=~b}if(t=ot,n=Ze,n=Ln(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(tt===2||tt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Qt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||dn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Qt(r),pl(n)){case 2:case 8:n=M;break;case 32:n=L;break;case 268435456:n=he;break;default:n=L}return r=N0.bind(null,e),n=Ka(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Qt(r),e.callbackPriority=2,e.callbackNode=null,2}function N0(e,t){if(Lt!==0&&Lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ao()&&e.callbackNode!==n)return null;var r=Ze;return r=Ln(e,e===ot?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(s0(e,r,t),M0(e,Yt()),e.callbackNode!=null&&e.callbackNode===n?N0.bind(null,e):null)}function O0(e,t){if(Ao())return null;s0(e,t,!0)}function ub(){bb(function(){(et&6)!==0?Ka(Ja,ob):T0()})}function Js(){return vr===0&&(vr=Nr()),vr}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ui(""+e)}function R0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sb(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var s=_0((i[ue]||null).action),p=r.submitter;p&&(t=(t=p[ue]||null)?_0(t.formAction):p.getAttribute("formAction"),t!==null&&(s=t,p=null));var b=new Hi("action","action",null,r,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(vr!==0){var w=p?R0(i,p):new FormData(i);gs(n,{pending:!0,data:w,method:i.method,action:s},null,w)}}else typeof s=="function"&&(b.preventDefault(),w=p?R0(i,p):new FormData(i),gs(n,{pending:!0,data:w,method:i.method,action:s},s,w))},currentTarget:i}]})}}for(var $s=0;$s<zu.length;$s++){var Ws=zu[$s],cb=Ws.toLowerCase(),fb=Ws[0].toUpperCase()+Ws.slice(1);Rn(cb,"on"+fb)}Rn(sd,"onAnimationEnd"),Rn(cd,"onAnimationIteration"),Rn(fd,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Ov,"onTransitionRun"),Rn(_v,"onTransitionStart"),Rn(Rv,"onTransitionCancel"),Rn(dd,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function D0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var p=r.length-1;0<=p;p--){var b=r[p],w=b.instance,U=b.currentTarget;if(b=b.listener,w!==s&&i.isPropagationStopped())break e;s=b,i.currentTarget=U;try{s(i)}catch(F){ho(F)}i.currentTarget=null,s=w}else for(p=0;p<r.length;p++){if(b=r[p],w=b.instance,U=b.currentTarget,b=b.listener,w!==s&&i.isPropagationStopped())break e;s=b,i.currentTarget=U;try{s(i)}catch(F){ho(F)}i.currentTarget=null,s=w}}}}function Ge(e,t){var n=t[Re];n===void 0&&(n=t[Re]=new Set);var r=e+"__bubble";n.has(r)||(j0(t,e,2,!1),n.add(r))}function Is(e,t,n){var r=0;t&&(r|=4),j0(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[No]){e[No]=!0,Qe.forEach(function(n){n!=="selectionchange"&&(db.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Is("selectionchange",!1,t))}}function j0(e,t,n,r){switch(nm(t)){case 2:var i=qb;break;case 8:i=Hb;break;default:i=mc}n=i.bind(null,t,n,e),i=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tc(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var b=r.stateNode.containerInfo;if(b===i)break;if(p===4)for(p=r.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===i)return;p=p.return}for(;b!==null;){if(p=ze(b),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){r=s=p;continue e}b=b.parentNode}}r=r.return}qf(function(){var U=s,F=xu(n),W=[];e:{var q=hd.get(e);if(q!==void 0){var H=Hi,Ce=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":H=iv;break;case"focusin":Ce="focus",H=Mu;break;case"focusout":Ce="blur",H=Mu;break;case"beforeblur":case"afterblur":H=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=sv;break;case sd:case cd:case fd:H=$g;break;case dd:H=fv;break;case"scroll":case"scrollend":H=Qg;break;case"wheel":H=hv;break;case"copy":case"cut":case"paste":H=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Gf;break;case"toggle":case"beforetoggle":H=pv}var De=(t&4)!==0,rt=!De&&(e==="scroll"||e==="scrollend"),D=De?q!==null?q+"Capture":null:q;De=[];for(var R=U,z;R!==null;){var J=R;if(z=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||z===null||D===null||(J=bl(R,D),J!=null&&De.push(ei(R,J,z))),rt)break;R=R.return}0<De.length&&(q=new H(q,Ce,null,n,F),W.push({event:q,listeners:De}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",q&&n!==yu&&(Ce=n.relatedTarget||n.fromElement)&&(ze(Ce)||Ce[xe]))break e;if((H||q)&&(q=F.window===F?F:(q=F.ownerDocument)?q.defaultView||q.parentWindow:window,H?(Ce=n.relatedTarget||n.toElement,H=U,Ce=Ce?ze(Ce):null,Ce!==null&&(rt=f(Ce),De=Ce.tag,Ce!==rt||De!==5&&De!==27&&De!==6)&&(Ce=null)):(H=null,Ce=U),H!==Ce)){if(De=Yf,J="onMouseLeave",D="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(De=Gf,J="onPointerLeave",D="onPointerEnter",R="pointer"),rt=H==null?q:ut(H),z=Ce==null?q:ut(Ce),q=new De(J,R+"leave",H,n,F),q.target=rt,q.relatedTarget=z,J=null,ze(F)===U&&(De=new De(D,R+"enter",Ce,n,F),De.target=z,De.relatedTarget=rt,J=De),rt=J,H&&Ce)t:{for(De=H,D=Ce,R=0,z=De;z;z=rl(z))R++;for(z=0,J=D;J;J=rl(J))z++;for(;0<R-z;)De=rl(De),R--;for(;0<z-R;)D=rl(D),z--;for(;R--;){if(De===D||D!==null&&De===D.alternate)break t;De=rl(De),D=rl(D)}De=null}else De=null;H!==null&&k0(W,q,H,De,!1),Ce!==null&&rt!==null&&k0(W,rt,Ce,De,!0)}}e:{if(q=U?ut(U):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var ve=Wf;else if(Jf(q))if(If)ve=Tv;else{ve=Ev;var Ye=Sv}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&bu(U.elementType)&&(ve=Wf):ve=Av;if(ve&&(ve=ve(e,U))){$f(W,ve,n,F);break e}Ye&&Ye(e,q,U),e==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&vu(q,"number",q.value)}switch(Ye=U?ut(U):window,e){case"focusin":(Jf(Ye)||Ye.contentEditable==="true")&&(Cr=Ye,ju=U,Ml=null);break;case"focusout":Ml=ju=Cr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,od(W,n,F);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":od(W,n,F)}var Ae;if(Ou)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else kr?Ff(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(Xf&&n.locale!=="ko"&&(kr||je!=="onCompositionStart"?je==="onCompositionEnd"&&kr&&(Ae=Hf()):(ya=F,Eu="value"in ya?ya.value:ya.textContent,kr=!0)),Ye=Oo(U,je),0<Ye.length&&(je=new Pf(je,e,null,n,F),W.push({event:je,listeners:Ye}),Ae?je.data=Ae:(Ae=Kf(n),Ae!==null&&(je.data=Ae)))),(Ae=vv?bv(e,n):yv(e,n))&&(je=Oo(U,"onBeforeInput"),0<je.length&&(Ye=new Pf("onBeforeInput","beforeinput",null,n,F),W.push({event:Ye,listeners:je}),Ye.data=Ae)),sb(W,e,U,n,F)}D0(W,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=bl(e,n),i!=null&&r.unshift(ei(e,i,s)),i=bl(e,t),i!=null&&r.push(ei(e,i,s))),e.tag===3)return r;e=e.return}return[]}function rl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function k0(e,t,n,r,i){for(var s=t._reactName,p=[];n!==null&&n!==r;){var b=n,w=b.alternate,U=b.stateNode;if(b=b.tag,w!==null&&w===r)break;b!==5&&b!==26&&b!==27||U===null||(w=U,i?(U=bl(n,s),U!=null&&p.unshift(ei(n,U,w))):i||(U=bl(n,s),U!=null&&p.push(ei(n,U,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var hb=/\r\n?/g,mb=/\u0000|\uFFFD/g;function C0(e){return(typeof e=="string"?e:""+e).replace(hb,`
`).replace(mb,"")}function z0(e,t){return t=C0(t),C0(e)===t}function _o(){}function at(e,t,n,r,i,s){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Rr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Rr(e,""+r);break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,n,r);break;case"style":Lf(e,r,s);break;case"data":if(t!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ui(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&at(e,t,"name",i.name,i,null),at(e,t,"formEncType",i.formEncType,i,null),at(e,t,"formMethod",i.formMethod,i,null),at(e,t,"formTarget",i.formTarget,i,null)):(at(e,t,"encType",i.encType,i,null),at(e,t,"method",i.method,i,null),at(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ui(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=_o);break;case"onScroll":r!=null&&Ge("scroll",e);break;case"onScrollEnd":r!=null&&Ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Ui(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ge("beforetoggle",e),Ge("toggle",e),mn(e,"popover",r);break;case"xlinkActuate":Ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ve(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ve(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ve(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ve(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":mn(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gg.get(n)||n,mn(e,n,r))}}function nc(e,t,n,r,i,s){switch(n){case"style":Lf(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Rr(e,r):(typeof r=="number"||typeof r=="bigint")&&Rr(e,""+r);break;case"onScroll":r!=null&&Ge("scroll",e);break;case"onScrollEnd":r!=null&&Ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=_o);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pa.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[ue]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):mn(e,n,r)}}}function Bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",e),Ge("load",e);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var p=n[s];if(p!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:at(e,t,s,p,n,null)}}i&&at(e,t,"srcSet",n.srcSet,n,null),r&&at(e,t,"src",n.src,n,null);return;case"input":Ge("invalid",e);var b=s=p=i=null,w=null,U=null;for(r in n)if(n.hasOwnProperty(r)){var F=n[r];if(F!=null)switch(r){case"name":i=F;break;case"type":p=F;break;case"checked":w=F;break;case"defaultChecked":U=F;break;case"value":s=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(u(137,t));break;default:at(e,t,r,F,n,null)}}kf(e,s,b,w,U,p,i,!1),Ci(e);return;case"select":Ge("invalid",e),r=p=s=null;for(i in n)if(n.hasOwnProperty(i)&&(b=n[i],b!=null))switch(i){case"value":s=b;break;case"defaultValue":p=b;break;case"multiple":r=b;default:at(e,t,i,b,n,null)}t=s,n=p,e.multiple=!!r,t!=null?_r(e,!!r,t,!1):n!=null&&_r(e,!!r,n,!0);return;case"textarea":Ge("invalid",e),s=i=r=null;for(p in n)if(n.hasOwnProperty(p)&&(b=n[p],b!=null))switch(p){case"value":r=b;break;case"defaultValue":i=b;break;case"children":s=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(u(91));break;default:at(e,t,p,b,n,null)}zf(e,r,i,s),Ci(e);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(r=n[w],r!=null))switch(w){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:at(e,t,w,r,n,null)}return;case"dialog":Ge("beforetoggle",e),Ge("toggle",e),Ge("cancel",e),Ge("close",e);break;case"iframe":case"object":Ge("load",e);break;case"video":case"audio":for(r=0;r<Il.length;r++)Ge(Il[r],e);break;case"image":Ge("error",e),Ge("load",e);break;case"details":Ge("toggle",e);break;case"embed":case"source":case"link":Ge("error",e),Ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(r=n[U],r!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:at(e,t,U,r,n,null)}return;default:if(bu(t)){for(F in n)n.hasOwnProperty(F)&&(r=n[F],r!==void 0&&nc(e,t,F,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&at(e,t,b,r,n,null))}function pb(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,p=null,b=null,w=null,U=null,F=null;for(H in n){var W=n[H];if(n.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":w=W;default:r.hasOwnProperty(H)||at(e,t,H,null,r,W)}}for(var q in r){var H=r[q];if(W=n[q],r.hasOwnProperty(q)&&(H!=null||W!=null))switch(q){case"type":s=H;break;case"name":i=H;break;case"checked":U=H;break;case"defaultChecked":F=H;break;case"value":p=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(u(137,t));break;default:H!==W&&at(e,t,q,H,r,W)}}gu(e,p,b,w,U,F,s,i);return;case"select":H=p=b=q=null;for(s in n)if(w=n[s],n.hasOwnProperty(s)&&w!=null)switch(s){case"value":break;case"multiple":H=w;default:r.hasOwnProperty(s)||at(e,t,s,null,r,w)}for(i in r)if(s=r[i],w=n[i],r.hasOwnProperty(i)&&(s!=null||w!=null))switch(i){case"value":q=s;break;case"defaultValue":b=s;break;case"multiple":p=s;default:s!==w&&at(e,t,i,s,r,w)}t=b,n=p,r=H,q!=null?_r(e,!!n,q,!1):!!r!=!!n&&(t!=null?_r(e,!!n,t,!0):_r(e,!!n,n?[]:"",!1));return;case"textarea":H=q=null;for(b in n)if(i=n[b],n.hasOwnProperty(b)&&i!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:at(e,t,b,null,r,i)}for(p in r)if(i=r[p],s=n[p],r.hasOwnProperty(p)&&(i!=null||s!=null))switch(p){case"value":q=i;break;case"defaultValue":H=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&at(e,t,p,i,r,s)}Cf(e,q,H);return;case"option":for(var Ce in n)if(q=n[Ce],n.hasOwnProperty(Ce)&&q!=null&&!r.hasOwnProperty(Ce))switch(Ce){case"selected":e.selected=!1;break;default:at(e,t,Ce,null,r,q)}for(w in r)if(q=r[w],H=n[w],r.hasOwnProperty(w)&&q!==H&&(q!=null||H!=null))switch(w){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:at(e,t,w,q,r,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)q=n[De],n.hasOwnProperty(De)&&q!=null&&!r.hasOwnProperty(De)&&at(e,t,De,null,r,q);for(U in r)if(q=r[U],H=n[U],r.hasOwnProperty(U)&&q!==H&&(q!=null||H!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:at(e,t,U,q,r,H)}return;default:if(bu(t)){for(var rt in n)q=n[rt],n.hasOwnProperty(rt)&&q!==void 0&&!r.hasOwnProperty(rt)&&nc(e,t,rt,void 0,r,q);for(F in r)q=r[F],H=n[F],!r.hasOwnProperty(F)||q===H||q===void 0&&H===void 0||nc(e,t,F,q,r,H);return}}for(var D in n)q=n[D],n.hasOwnProperty(D)&&q!=null&&!r.hasOwnProperty(D)&&at(e,t,D,null,r,q);for(W in r)q=r[W],H=n[W],!r.hasOwnProperty(W)||q===H||q==null&&H==null||at(e,t,W,q,r,H)}var ac=null,rc=null;function Ro(e){return e.nodeType===9?e:e.ownerDocument}function U0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ic=null;function gb(){var e=window.event;return e&&e.type==="popstate"?e===ic?!1:(ic=e,!0):(ic=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,vb=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,bb=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(e){return q0.resolve(null).then(e).catch(yb)}:B0;function yb(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function H0(e,t){var n=t,r=0,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<r&&8>r){n=r;var p=e.ownerDocument;if(n&1&&ti(p.documentElement),n&2&&ti(p.body),n&4)for(n=p.head,ti(n),p=n.firstChild;p;){var b=p.nextSibling,w=p.nodeName;p[ke]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=b}}if(i===0){e.removeChild(s),si(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:r=n.charCodeAt(0)-48;else r=0;n=s}while(n);si(t)}function oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":oc(n),Ee(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xb(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ke])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function wb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=jn(e.nextSibling),e===null))return null;return e}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Sb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sc=null;function V0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Y0(e,t,n){switch(t=Ro(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ti(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ee(e)}var Sn=new Map,P0=new Set;function Do(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=ne.d;ne.d={f:Eb,r:Ab,D:Tb,C:Mb,L:Nb,m:Ob,X:Rb,S:_b,M:Db};function Eb(){var e=fa.f(),t=So();return e||t}function Ab(e){var t=Fe(e);t!==null&&t.tag===5&&t.type==="form"?sh(t):fa.r(e)}var ll=typeof document>"u"?null:document;function G0(e,t,n){var r=ll;if(r&&typeof t=="string"&&t){var i=pn(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),P0.has(i)||(P0.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),Bt(t,"link",e),Ke(t),r.head.appendChild(t)))}}function Tb(e){fa.D(e),G0("dns-prefetch",e,null)}function Mb(e,t){fa.C(e,t),G0("preconnect",e,t)}function Nb(e,t,n){fa.L(e,t,n);var r=ll;if(r&&e&&t){var i='link[rel="preload"][as="'+pn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+pn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+pn(n.imageSizes)+'"]')):i+='[href="'+pn(e)+'"]';var s=i;switch(t){case"style":s=il(e);break;case"script":s=ol(e)}Sn.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Sn.set(s,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(ni(s))||t==="script"&&r.querySelector(ai(s))||(t=r.createElement("link"),Bt(t,"link",e),Ke(t),r.head.appendChild(t)))}}function Ob(e,t){fa.m(e,t);var n=ll;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(e)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ol(e)}if(!Sn.has(s)&&(e=y({rel:"modulepreload",href:e},t),Sn.set(s,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ai(s)))return}r=n.createElement("link"),Bt(r,"link",e),Ke(r),n.head.appendChild(r)}}}function _b(e,t,n){fa.S(e,t,n);var r=ll;if(r&&e){var i=pt(r).hoistableStyles,s=il(e);t=t||"default";var p=i.get(s);if(!p){var b={loading:0,preload:null};if(p=r.querySelector(ni(s)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sn.get(s))&&cc(e,n);var w=p=r.createElement("link");Ke(w),Bt(w,"link",e),w._p=new Promise(function(U,F){w.onload=U,w.onerror=F}),w.addEventListener("load",function(){b.loading|=1}),w.addEventListener("error",function(){b.loading|=2}),b.loading|=4,jo(p,t,r)}p={type:"stylesheet",instance:p,count:1,state:b},i.set(s,p)}}}function Rb(e,t){fa.X(e,t);var n=ll;if(n&&e){var r=pt(n).hoistableScripts,i=ol(e),s=r.get(i);s||(s=n.querySelector(ai(i)),s||(e=y({src:e,async:!0},t),(t=Sn.get(i))&&fc(e,t),s=n.createElement("script"),Ke(s),Bt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function Db(e,t){fa.M(e,t);var n=ll;if(n&&e){var r=pt(n).hoistableScripts,i=ol(e),s=r.get(i);s||(s=n.querySelector(ai(i)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Sn.get(i))&&fc(e,t),s=n.createElement("script"),Ke(s),Bt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function X0(e,t,n,r){var i=(i=Se.current)?Do(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=il(n.href),n=pt(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=il(n.href);var s=pt(i).hoistableStyles,p=s.get(e);if(p||(i=i.ownerDocument||i,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=i.querySelector(ni(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Sn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sn.set(e,n),s||jb(i,e,n,p.state))),t&&r===null)throw Error(u(528,""));return p}if(t&&r!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ol(n),n=pt(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function il(e){return'href="'+pn(e)+'"'}function ni(e){return'link[rel="stylesheet"]['+e+"]"}function Q0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function jb(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Bt(t,"link",n),Ke(t),e.head.appendChild(t))}function ol(e){return'[src="'+pn(e)+'"]'}function ai(e){return"script[async]"+e}function Z0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+pn(n.href)+'"]');if(r)return t.instance=r,Ke(r),r;var i=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ke(r),Bt(r,"style",i),jo(r,n.precedence,e),t.instance=r;case"stylesheet":i=il(n.href);var s=e.querySelector(ni(i));if(s)return t.state.loading|=4,t.instance=s,Ke(s),s;r=Q0(n),(i=Sn.get(i))&&cc(r,i),s=(e.ownerDocument||e).createElement("link"),Ke(s);var p=s;return p._p=new Promise(function(b,w){p.onload=b,p.onerror=w}),Bt(s,"link",r),t.state.loading|=4,jo(s,n.precedence,e),t.instance=s;case"script":return s=ol(n.src),(i=e.querySelector(ai(s)))?(t.instance=i,Ke(i),i):(r=n,(i=Sn.get(s))&&(r=y({},n),fc(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),Bt(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,jo(r,n.precedence,e));return t.instance}function jo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,p=0;p<r.length;p++){var b=r[p];if(b.dataset.precedence===t)s=b;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ko=null;function F0(e,t,n){if(ko===null){var r=new Map,i=ko=new Map;i.set(n,r)}else i=ko,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[ke]||s[I]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(t)||"";p=e+p;var b=r.get(p);b?b.push(s):r.set(p,[s])}}return r}function K0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function J0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ri=null;function Cb(){}function zb(e,t,n){if(ri===null)throw Error(u(475));var r=ri;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=il(n.href),s=e.querySelector(ni(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Co.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=s,Ke(s);return}s=e.ownerDocument||e,n=Q0(n),(i=Sn.get(i))&&cc(n,i),s=s.createElement("link"),Ke(s);var p=s;p._p=new Promise(function(b,w){p.onload=b,p.onerror=w}),Bt(s,"link",n),t.instance=s}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Co.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ub(){if(ri===null)throw Error(u(475));var e=ri;return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Co(){if(this.count--,this.count===0){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zo=null;function dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zo=new Map,t.forEach(Lb,e),zo=null,Co.call(e))}function Lb(e,t){if(!(t.state.loading&4)){var n=zo.get(e);if(n)var r=n.get(null);else{n=new Map,zo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var p=i[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}i=t.instance,p=i.getAttribute("data-precedence"),s=n.get(p)||r,s===r&&n.set(null,i),n.set(p,i),this.count++,r=Co.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var li={$$typeof:Y,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Bb(e,t,n,r,i,s,p,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function $0(e,t,n,r,i,s,p,b,w,U,F,W){return e=new Bb(e,t,n,p,b,w,U,W),t=1,s===!0&&(t|=24),s=nn(3,null,null,t),e.current=s,s.stateNode=e,t=Zu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:t},$u(s),e}function W0(e){return e?(e=Br,e):Br}function I0(e,t,n,r,i,s){i=W0(i),r.context===null?r.context=i:r.pendingContext=i,r=Sa(t),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=Ea(e,r,t),n!==null&&(un(n,e,t),zl(n,e,t))}function em(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){em(e,t),(e=e.alternate)&&em(e,t)}function tm(e){if(e.tag===13){var t=Lr(e,67108864);t!==null&&un(t,e,67108864),hc(e,67108864)}}var Uo=!0;function qb(e,t,n,r){var i=C.T;C.T=null;var s=ne.p;try{ne.p=2,mc(e,t,n,r)}finally{ne.p=s,C.T=i}}function Hb(e,t,n,r){var i=C.T;C.T=null;var s=ne.p;try{ne.p=8,mc(e,t,n,r)}finally{ne.p=s,C.T=i}}function mc(e,t,n,r){if(Uo){var i=pc(r);if(i===null)tc(e,t,r,Lo,n),am(e,r);else if(Yb(i,e,t,n,r))r.stopPropagation();else if(am(e,r),t&4&&-1<Vb.indexOf(e)){for(;i!==null;){var s=Fe(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=Nn(s.pendingLanes);if(p!==0){var b=s;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var w=1<<31-We(p);b.entanglements[1]|=w,p&=~w}Yn(s),(et&6)===0&&(xo=Yt()+500,Wl(0))}}break;case 13:b=Lr(s,2),b!==null&&un(b,s,2),So(),hc(s,2)}if(s=pc(r),s===null&&tc(e,t,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(e,t,r,null,n)}}function pc(e){return e=xu(e),gc(e)}var Lo=null;function gc(e){if(Lo=null,e=ze(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lo=e,null}function nm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Di()){case Ja:return 2;case M:return 8;case L:case G:return 32;case he:return 268435456;default:return 32}default:return 32}}var vc=!1,Ua=null,La=null,Ba=null,ii=new Map,oi=new Map,qa=[],Vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(e,t){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function ui(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Fe(t),t!==null&&tm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yb(e,t,n,r,i){switch(t){case"focusin":return Ua=ui(Ua,e,t,n,r,i),!0;case"dragenter":return La=ui(La,e,t,n,r,i),!0;case"mouseover":return Ba=ui(Ba,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ii.set(s,ui(ii.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,ui(oi.get(s)||null,e,t,n,r,i)),!0}return!1}function rm(e){var t=ze(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,k(e.priority,function(){if(n.tag===13){var r=on();r=ml(r);var i=Lr(n,r);i!==null&&un(i,n,r),hc(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pc(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yu=r,n.target.dispatchEvent(r),yu=null}else return t=Fe(n),t!==null&&tm(t),e.blockedOn=n,!1;t.shift()}return!0}function lm(e,t,n){Bo(e)&&n.delete(t)}function Pb(){vc=!1,Ua!==null&&Bo(Ua)&&(Ua=null),La!==null&&Bo(La)&&(La=null),Ba!==null&&Bo(Ba)&&(Ba=null),ii.forEach(lm),oi.forEach(lm)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Pb)))}var Ho=null;function im(e){Ho!==e&&(Ho=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ho===e&&(Ho=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(gc(r||n)===null)continue;break}var s=Fe(n);s!==null&&(e.splice(t,3),t-=3,gs(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function si(e){function t(w){return qo(w,e)}Ua!==null&&qo(Ua,e),La!==null&&qo(La,e),Ba!==null&&qo(Ba,e),ii.forEach(t),oi.forEach(t);for(var n=0;n<qa.length;n++){var r=qa[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(n=qa[0],n.blockedOn===null);)rm(n),n.blockedOn===null&&qa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],p=i[ue]||null;if(typeof s=="function")p||im(n);else if(p){var b=null;if(s&&s.hasAttribute("formAction")){if(i=s,p=s[ue]||null)b=p.formAction;else if(gc(i)!==null)continue}else b=p.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),im(n)}}}function bc(e){this._internalRoot=e}Vo.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,r=on();I0(n,r,e,t,null,null)},Vo.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;I0(e.current,2,null,e,null,null),So(),t[xe]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=O();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qa.length&&t!==0&&t<qa[n].priority;n++);qa.splice(n,0,e),n===0&&rm(e)}};var om=l.version;if(om!=="19.1.0")throw Error(u(527,om,"19.1.0"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{pe=Yo.inject(Gb),Oe=Yo}catch{}}return fi.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,r="",i=Eh,s=Ah,p=Th,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=$0(e,1,!1,null,null,n,r,i,s,p,b,null),e[xe]=t.current,ec(e),new bc(t)},fi.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var r=!1,i="",s=Eh,p=Ah,b=Th,w=null,U=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks),n.formState!==void 0&&(U=n.formState)),t=$0(e,1,!0,t,n??null,r,i,s,p,b,w,U),t.context=W0(null),n=t.current,r=on(),r=ml(r),i=Sa(r),i.callback=null,Ea(n,i,r),n=r,t.current.lanes=n,Wa(t,n),Yn(t),e[xe]=t.current,ec(e),new Vo(t)},fi.version="19.1.0",fi}var vm;function Ib(){if(vm)return wc.exports;vm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),wc.exports=Wb(),wc.exports}var e1=Ib(),di={},bm;function t1(){if(bm)return di;bm=1,Object.defineProperty(di,"__esModule",{value:!0}),di.parse=d,di.serialize=g;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,l=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,A){const T=new f,_=x.length;if(_<2)return T;const P=(A==null?void 0:A.decode)||y;let j=0;do{const X=x.indexOf("=",j);if(X===-1)break;const Y=x.indexOf(";",j),$=Y===-1?_:Y;if(X>$){j=x.lastIndexOf(";",X-1)+1;continue}const K=m(x,j,X),N=h(x,X,K),ee=x.slice(K,N);if(T[ee]===void 0){let ae=m(x,X+1,$),Q=h(x,$,ae);const de=P(x.slice(ae,Q));T[ee]=de}j=$+1}while(j<_);return T}function m(x,A,T){do{const _=x.charCodeAt(A);if(_!==32&&_!==9)return A}while(++A<T);return T}function h(x,A,T){for(;A>T;){const _=x.charCodeAt(--A);if(_!==32&&_!==9)return A+1}return T}function g(x,A,T){const _=(T==null?void 0:T.encode)||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const P=_(A);if(!l.test(P))throw new TypeError(`argument val is invalid: ${A}`);let j=x+"="+P;if(!T)return j;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);j+="; Max-Age="+T.maxAge}if(T.domain){if(!o.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);j+="; Domain="+T.domain}if(T.path){if(!u.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);j+="; Path="+T.path}if(T.expires){if(!E(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);j+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(j+="; HttpOnly"),T.secure&&(j+="; Secure"),T.partitioned&&(j+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":j+="; Priority=Low";break;case"medium":j+="; Priority=Medium";break;case"high":j+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":j+="; SameSite=Strict";break;case"lax":j+="; SameSite=Lax";break;case"none":j+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return j}function y(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function E(x){return c.call(x)==="[object Date]"}return di}t1();/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jp=a=>{throw TypeError(a)},n1=(a,l,o)=>l.has(a)||Jp("Cannot "+o),Tc=(a,l,o)=>(n1(a,l,"read from private field"),o?o.call(a):l.get(a)),a1=(a,l,o)=>l.has(a)?Jp("Cannot add the same private member more than once"):l instanceof WeakSet?l.add(a):l.set(a,o),ym="popstate";function r1(a={}){function l(u,c){let{pathname:f,search:d,hash:m}=u.location;return Ti("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:Za(c)}return i1(l,o,null,a)}function Xe(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function Nt(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function l1(){return Math.random().toString(36).substring(2,10)}function xm(a,l){return{usr:a.state,key:a.key,idx:l}}function Ti(a,l,o=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Fa(l):l,state:o,key:l&&l.key||u||l1()}}function Za({pathname:a="/",search:l="",hash:o=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function Fa(a){let l={};if(a){let o=a.indexOf("#");o>=0&&(l.hash=a.substring(o),a=a.substring(0,o));let u=a.indexOf("?");u>=0&&(l.search=a.substring(u),a=a.substring(0,u)),a&&(l.pathname=a)}return l}function i1(a,l,o,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,d=c.history,m="POP",h=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function E(){m="POP";let P=y(),j=P==null?null:P-g;g=P,h&&h({action:m,location:_.location,delta:j})}function x(P,j){m="PUSH";let X=Ti(_.location,P,j);g=y()+1;let Y=xm(X,g),$=_.createHref(X);try{d.pushState(Y,"",$)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;c.location.assign($)}f&&h&&h({action:m,location:_.location,delta:1})}function A(P,j){m="REPLACE";let X=Ti(_.location,P,j);g=y();let Y=xm(X,g),$=_.createHref(X);d.replaceState(Y,"",$),f&&h&&h({action:m,location:_.location,delta:0})}function T(P){return $p(P)}let _={get action(){return m},get location(){return a(c,d)},listen(P){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(ym,E),h=P,()=>{c.removeEventListener(ym,E),h=null}},createHref(P){return l(c,P)},createURL:T,encodeLocation(P){let j=T(P);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:x,replace:A,go(P){return d.go(P)}};return _}function $p(a,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:Za(a);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=o+u),new URL(u,o)}var xi,wm=class{constructor(a){if(a1(this,xi,new Map),a)for(let[l,o]of a)this.set(l,o)}get(a){if(Tc(this,xi).has(a))return Tc(this,xi).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,l){Tc(this,xi).set(a,l)}};xi=new WeakMap;var o1=new Set(["lazy","caseSensitive","path","id","index","children"]);function u1(a){return o1.has(a)}var s1=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function c1(a){return s1.has(a)}function f1(a){return a.index===!0}function eu(a,l,o=[],u={}){return a.map((c,f)=>{let d=[...o,String(f)],m=typeof c.id=="string"?c.id:d.join("-");if(Xe(c.index!==!0||!c.children,"Cannot specify children on an index route"),Xe(!u[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),f1(c)){let h={...c,...l(c),id:m};return u[m]=h,h}else{let h={...c,...l(c),id:m,children:void 0};return u[m]=h,c.children&&(h.children=eu(c.children,l,d,u)),h}})}function Ga(a,l,o="/"){return Jo(a,l,o,!1)}function Jo(a,l,o,u){let c=typeof l=="string"?Fa(l):l,f=An(c.pathname||"/",o);if(f==null)return null;let d=Wp(a);h1(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let g=A1(f);m=S1(d[h],g,u)}return m}function d1(a,l){let{route:o,pathname:u,params:c}=a;return{id:o.id,pathname:u,params:c,data:l[o.id],handle:o.handle}}function Wp(a,l=[],o=[],u=""){let c=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Xe(h.relativePath.startsWith(u),`Absolute route path "${h.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(u.length));let g=Zn([u,h.relativePath]),y=o.concat(h);f.children&&f.children.length>0&&(Xe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Wp(f.children,l,y,g)),!(f.path==null&&!f.index)&&l.push({path:g,score:x1(g,f.index),routesMeta:y})};return a.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,d);else for(let h of Ip(f.path))c(f,d,h)}),l}function Ip(a){let l=a.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let d=Ip(u.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),c&&m.push(...d),m.map(h=>a.startsWith("/")&&h===""?"/":h)}function h1(a){a.sort((l,o)=>l.score!==o.score?o.score-l.score:w1(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var m1=/^:[\w-]+$/,p1=3,g1=2,v1=1,b1=10,y1=-2,Sm=a=>a==="*";function x1(a,l){let o=a.split("/"),u=o.length;return o.some(Sm)&&(u+=y1),l&&(u+=g1),o.filter(c=>!Sm(c)).reduce((c,f)=>c+(m1.test(f)?p1:f===""?v1:b1),u)}function w1(a,l){return a.length===l.length&&a.slice(0,-1).every((u,c)=>u===l[c])?a[a.length-1]-l[l.length-1]:0}function S1(a,l,o=!1){let{routesMeta:u}=a,c={},f="/",d=[];for(let m=0;m<u.length;++m){let h=u[m],g=m===u.length-1,y=f==="/"?l:l.slice(f.length)||"/",E=tu({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},y),x=h.route;if(!E&&g&&o&&!u[u.length-1].route.index&&(E=tu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!E)return null;Object.assign(c,E.params),d.push({params:c,pathname:Zn([f,E.pathname]),pathnameBase:N1(Zn([f,E.pathnameBase])),route:x}),E.pathnameBase!=="/"&&(f=Zn([f,E.pathnameBase]))}return d}function tu(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,u]=E1(a.path,a.caseSensitive,a.end),c=l.match(o);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:u.reduce((g,{paramName:y,isOptional:E},x)=>{if(y==="*"){let T=m[x]||"";d=f.slice(0,f.length-T.length).replace(/(.)\/+$/,"$1")}const A=m[x];return E&&!A?g[y]=void 0:g[y]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:d,pattern:a}}function E1(a,l=!1,o=!0){Nt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],c="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(u.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(u.push({paramName:"*"}),c+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":a!==""&&a!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function A1(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Nt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function An(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=a.charAt(o);return u&&u!=="/"?null:a.slice(o)||"/"}function T1(a,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof a=="string"?Fa(a):a;return{pathname:o?o.startsWith("/")?o:M1(o,l):l,search:O1(u),hash:_1(c)}}function M1(a,l){let o=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Mc(a,l,o,u){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eg(a){return a.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function hf(a){let l=eg(a);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function mf(a,l,o,u=!1){let c;typeof a=="string"?c=Fa(a):(c={...a},Xe(!c.pathname||!c.pathname.includes("?"),Mc("?","pathname","search",c)),Xe(!c.pathname||!c.pathname.includes("#"),Mc("#","pathname","hash",c)),Xe(!c.search||!c.search.includes("#"),Mc("#","search","hash",c)));let f=a===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=o;else{let E=l.length-1;if(!u&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),E-=1;c.pathname=x.join("/")}m=E>=0?l[E]:"/"}let h=T1(c,m),g=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(g||y)&&(h.pathname+="/"),h}var Zn=a=>a.join("/").replace(/\/\/+/g,"/"),N1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),O1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,_1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,nu=class{constructor(a,l,o,u=!1){this.status=a,this.statusText=l||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Mi(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var tg=["POST","PUT","PATCH","DELETE"],R1=new Set(tg),D1=["GET",...tg],j1=new Set(D1),k1=new Set([301,302,303,307,308]),C1=new Set([307,308]),Nc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},z1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U1=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),ng="remix-router-transitions",ag=Symbol("ResetLoaderData");function L1(a){const l=a.window?a.window:typeof window<"u"?window:void 0,o=typeof l<"u"&&typeof l.document<"u"&&typeof l.document.createElement<"u";Xe(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let u=a.hydrationRouteProperties||[],c=a.mapRouteProperties||U1,f={},d=eu(a.routes,c,void 0,f),m,h=a.basename||"/",g=a.dataStrategy||Y1,y={unstable_middleware:!1,...a.future},E=null,x=new Set,A=null,T=null,_=null,P=a.hydrationData!=null,j=Ga(d,a.history.location,h),X=!1,Y=null,$;if(j==null&&!a.patchRoutesOnNavigation){let O=En(404,{pathname:a.history.location.pathname}),{matches:k,route:V}=Cm(d);$=!0,j=k,Y={[V.id]:O}}else if(j&&!a.hydrationData&&Ia(j,d,a.history.location.pathname).active&&(j=null),j)if(j.some(O=>O.route.lazy))$=!1;else if(!j.some(O=>O.route.loader))$=!0;else{let O=a.hydrationData?a.hydrationData.loaderData:null,k=a.hydrationData?a.hydrationData.errors:null;if(k){let V=j.findIndex(I=>k[I.route.id]!==void 0);$=j.slice(0,V+1).every(I=>!lf(I.route,O,k))}else $=j.every(V=>!lf(V.route,O,k))}else{$=!1,j=[];let O=Ia(null,d,a.history.location.pathname);O.active&&O.matches&&(X=!0,j=O.matches)}let K,N={historyAction:a.history.action,location:a.history.location,matches:j,initialized:$,navigation:Nc,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||Y,fetchers:new Map,blockers:new Map},ee="POP",ae=!1,Q,de=!1,ce=new Map,te=null,ie=!1,re=!1,ye=new Set,C=new Map,ne=0,me=-1,_e=new Map,S=new Set,Z=new Map,se=new Map,le=new Set,be=new Map,Ue,Se=null;function Ie(){if(E=a.history.listen(({action:O,location:k,delta:V})=>{if(Ue){Ue(),Ue=void 0;return}Nt(be.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=$a({currentLocation:N.location,nextLocation:k,historyAction:O});if(I&&V!=null){let ue=new Promise(xe=>{Ue=xe});a.history.go(V*-1),dn(I,{state:"blocked",location:k,proceed(){dn(I,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),ue.then(()=>a.history.go(V))},reset(){let xe=new Map(N.blockers);xe.set(I,hi),lt({blockers:xe})}});return}return Qt(O,k)}),o){I1(l,ce);let O=()=>ey(l,ce);l.addEventListener("pagehide",O),te=()=>l.removeEventListener("pagehide",O)}return N.initialized||Qt("POP",N.location,{initialHydration:!0}),K}function Be(){E&&E(),te&&te(),x.clear(),Q&&Q.abort(),N.fetchers.forEach((O,k)=>We(k)),N.blockers.forEach((O,k)=>Ln(k))}function yt(O){return x.add(O),()=>x.delete(O)}function lt(O,k={}){N={...N,...O};let V=[],I=[];N.fetchers.forEach((ue,xe)=>{ue.state==="idle"&&(le.has(xe)?V.push(xe):I.push(xe))}),le.forEach(ue=>{!N.fetchers.has(ue)&&!C.has(ue)&&V.push(ue)}),[...x].forEach(ue=>ue(N,{deletedFetchers:V,viewTransitionOpts:k.viewTransitionOpts,flushSync:k.flushSync===!0})),V.forEach(ue=>We(ue)),I.forEach(ue=>N.fetchers.delete(ue))}function en(O,k,{flushSync:V}={}){var Ne,ke;let I=N.actionData!=null&&N.navigation.formMethod!=null&&fn(N.navigation.formMethod)&&N.navigation.state==="loading"&&((Ne=O.state)==null?void 0:Ne._isRedirect)!==!0,ue;k.actionData?Object.keys(k.actionData).length>0?ue=k.actionData:ue=null:I?ue=N.actionData:ue=null;let xe=k.loaderData?jm(N.loaderData,k.loaderData,k.matches||[],k.errors):N.loaderData,Re=N.blockers;Re.size>0&&(Re=new Map(Re),Re.forEach((Ee,ze)=>Re.set(ze,hi)));let ge=ae===!0||N.navigation.formMethod!=null&&fn(N.navigation.formMethod)&&((ke=O.state)==null?void 0:ke._isRedirect)!==!0;m&&(d=m,m=void 0),ie||ee==="POP"||(ee==="PUSH"?a.history.push(O,O.state):ee==="REPLACE"&&a.history.replace(O,O.state));let Me;if(ee==="POP"){let Ee=ce.get(N.location.pathname);Ee&&Ee.has(O.pathname)?Me={currentLocation:N.location,nextLocation:O}:ce.has(O.pathname)&&(Me={currentLocation:O,nextLocation:N.location})}else if(de){let Ee=ce.get(N.location.pathname);Ee?Ee.add(O.pathname):(Ee=new Set([O.pathname]),ce.set(N.location.pathname,Ee)),Me={currentLocation:N.location,nextLocation:O}}lt({...k,actionData:ue,loaderData:xe,historyAction:ee,location:O,initialized:!0,navigation:Nc,revalidation:"idle",restoreScrollPosition:ki(O,k.matches||N.matches),preventScrollReset:ge,blockers:Re},{viewTransitionOpts:Me,flushSync:V===!0}),ee="POP",ae=!1,de=!1,ie=!1,re=!1,Se==null||Se.resolve(),Se=null}async function Jn(O,k){if(typeof O=="number"){a.history.go(O);return}let V=rf(N.location,N.matches,h,O,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:I,submission:ue,error:xe}=Em(!1,V,k),Re=N.location,ge=Ti(N.location,I,k&&k.state);ge={...ge,...a.history.encodeLocation(ge)};let Me=k&&k.replace!=null?k.replace:void 0,Ne="PUSH";Me===!0?Ne="REPLACE":Me===!1||ue!=null&&fn(ue.formMethod)&&ue.formAction===N.location.pathname+N.location.search&&(Ne="REPLACE");let ke=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,Ee=(k&&k.flushSync)===!0,ze=$a({currentLocation:Re,nextLocation:ge,historyAction:Ne});if(ze){dn(ze,{state:"blocked",location:ge,proceed(){dn(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),Jn(O,k)},reset(){let Fe=new Map(N.blockers);Fe.set(ze,hi),lt({blockers:Fe})}});return}await Qt(Ne,ge,{submission:ue,pendingError:xe,preventScrollReset:ke,replace:k&&k.replace,enableViewTransition:k&&k.viewTransition,flushSync:Ee})}function Ka(){Se||(Se=ty()),oe(),lt({revalidation:"loading"});let O=Se.promise;return N.navigation.state==="submitting"?O:N.navigation.state==="idle"?(Qt(N.historyAction,N.location,{startUninterruptedRevalidation:!0}),O):(Qt(ee||N.historyAction,N.navigation.location,{overrideNavigation:N.navigation,enableViewTransition:de===!0}),O)}async function Qt(O,k,V){Q&&Q.abort(),Q=null,ee=O,ie=(V&&V.startUninterruptedRevalidation)===!0,Wa(N.location,N.matches),ae=(V&&V.preventScrollReset)===!0,de=(V&&V.enableViewTransition)===!0;let I=m||d,ue=V&&V.overrideNavigation,xe=V!=null&&V.initialHydration&&N.matches&&N.matches.length>0&&!X?N.matches:Ga(I,k,h),Re=(V&&V.flushSync)===!0;if(xe&&N.initialized&&!re&&F1(N.location,k)&&!(V&&V.submission&&fn(V.submission.formMethod))){en(k,{matches:xe},{flushSync:Re});return}let ge=Ia(xe,I,k.pathname);if(ge.active&&ge.matches&&(xe=ge.matches),!xe){let{error:pt,notFoundMatches:Ke,route:Qe}=Nr(k.pathname);en(k,{matches:Ke,loaderData:{},errors:{[Qe.id]:pt}},{flushSync:Re});return}Q=new AbortController;let Me=fl(a.history,k,Q.signal,V&&V.submission),Ne=new wm(a.unstable_getContext?await a.unstable_getContext():void 0),ke;if(V&&V.pendingError)ke=[br(xe).route.id,{type:"error",error:V.pendingError}];else if(V&&V.submission&&fn(V.submission.formMethod)){let pt=await Tr(Me,k,V.submission,xe,Ne,ge.active,V&&V.initialHydration===!0,{replace:V.replace,flushSync:Re});if(pt.shortCircuited)return;if(pt.pendingActionResult){let[Ke,Qe]=pt.pendingActionResult;if(cn(Qe)&&Mi(Qe.error)&&Qe.error.status===404){Q=null,en(k,{matches:pt.matches,loaderData:{},errors:{[Ke]:Qe.error}});return}}xe=pt.matches||xe,ke=pt.pendingActionResult,ue=Oc(k,V.submission),Re=!1,ge.active=!1,Me=fl(a.history,Me.url,Me.signal)}let{shortCircuited:Ee,matches:ze,loaderData:Fe,errors:ut}=await hl(Me,k,xe,Ne,ge.active,ue,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,Re,ke);Ee||(Q=null,en(k,{matches:ze||xe,...km(ke),loaderData:Fe,errors:ut}))}async function Tr(O,k,V,I,ue,xe,Re,ge={}){oe();let Me=$1(k,V);if(lt({navigation:Me},{flushSync:ge.flushSync===!0}),xe){let Ee=await er(I,k.pathname,O.signal);if(Ee.type==="aborted")return{shortCircuited:!0};if(Ee.type==="error"){let ze=br(Ee.partialMatches).route.id;return{matches:Ee.partialMatches,pendingActionResult:[ze,{type:"error",error:Ee.error}]}}else if(Ee.matches)I=Ee.matches;else{let{notFoundMatches:ze,error:Fe,route:ut}=Nr(k.pathname);return{matches:ze,pendingActionResult:[ut.id,{type:"error",error:Fe}]}}}let Ne,ke=wi(I,k);if(!ke.route.action&&!ke.route.lazy)Ne={type:"error",error:En(405,{method:O.method,pathname:k.pathname,routeId:ke.route.id})};else{let Ee=dl(c,f,O,I,ke,Re?[]:u,ue),ze=await he(O,Ee,ue,null);if(Ne=ze[ke.route.id],!Ne){for(let Fe of I)if(ze[Fe.route.id]){Ne=ze[Fe.route.id];break}}if(O.signal.aborted)return{shortCircuited:!0}}if(yr(Ne)){let Ee;return ge&&ge.replace!=null?Ee=ge.replace:Ee=_m(Ne.response.headers.get("Location"),new URL(O.url),h)===N.location.pathname+N.location.search,await G(O,Ne,!0,{submission:V,replace:Ee}),{shortCircuited:!0}}if(cn(Ne)){let Ee=br(I,ke.route.id);return(ge&&ge.replace)!==!0&&(ee="PUSH"),{matches:I,pendingActionResult:[Ee.route.id,Ne,ke.route.id]}}return{matches:I,pendingActionResult:[ke.route.id,Ne]}}async function hl(O,k,V,I,ue,xe,Re,ge,Me,Ne,ke,Ee){let ze=xe||Oc(k,Re),Fe=Re||ge||Um(ze),ut=!ie&&!Ne;if(ue){if(ut){let qt=Yt(Ee);lt({navigation:ze,...qt!==void 0?{actionData:qt}:{}},{flushSync:ke})}let Ve=await er(V,k.pathname,O.signal);if(Ve.type==="aborted")return{shortCircuited:!0};if(Ve.type==="error"){let qt=br(Ve.partialMatches).route.id;return{matches:Ve.partialMatches,loaderData:{},errors:{[qt]:Ve.error}}}else if(Ve.matches)V=Ve.matches;else{let{error:qt,notFoundMatches:On,route:_n}=Nr(k.pathname);return{matches:On,loaderData:{},errors:{[_n.id]:qt}}}}let pt=m||d,{dsMatches:Ke,revalidatingFetchers:Qe}=Am(O,I,c,f,a.history,N,V,Fe,k,Ne?[]:u,Ne===!0,re,ye,le,Z,S,pt,h,a.patchRoutesOnNavigation!=null,Ee);if(me=++ne,!a.dataStrategy&&!Ke.some(Ve=>Ve.shouldLoad)&&Qe.length===0){let Ve=Tn();return en(k,{matches:V,loaderData:{},errors:Ee&&cn(Ee[1])?{[Ee[0]]:Ee[1].error}:null,...km(Ee),...Ve?{fetchers:new Map(N.fetchers)}:{}},{flushSync:ke}),{shortCircuited:!0}}if(ut){let Ve={};if(!ue){Ve.navigation=ze;let qt=Yt(Ee);qt!==void 0&&(Ve.actionData=qt)}Qe.length>0&&(Ve.fetchers=Di(Qe)),lt(Ve,{flushSync:ke})}Qe.forEach(Ve=>{Ot(Ve.key),Ve.controller&&C.set(Ve.key,Ve.controller)});let pa=()=>Qe.forEach(Ve=>Ot(Ve.key));Q&&Q.signal.addEventListener("abort",pa);let{loaderResults:Pt,fetcherResults:hn}=await fe(Ke,Qe,O,I);if(O.signal.aborted)return{shortCircuited:!0};Q&&Q.signal.removeEventListener("abort",pa),Qe.forEach(Ve=>C.delete(Ve.key));let Zt=Po(Pt);if(Zt)return await G(O,Zt.result,!0,{replace:Me}),{shortCircuited:!0};if(Zt=Po(hn),Zt)return S.add(Zt.key),await G(O,Zt.result,!0,{replace:Me}),{shortCircuited:!0};let{loaderData:ga,errors:va}=Dm(N,V,Pt,Ee,Qe,hn);Ne&&N.errors&&(va={...N.errors,...va});let gl=Tn(),mn=Mn(me),$n=gl||mn||Qe.length>0;return{matches:V,loaderData:ga,errors:va,...$n?{fetchers:new Map(N.fetchers)}:{}}}function Yt(O){if(O&&!cn(O[1]))return{[O[0]]:O[1].data};if(N.actionData)return Object.keys(N.actionData).length===0?null:N.actionData}function Di(O){return O.forEach(k=>{let V=N.fetchers.get(k.key),I=mi(void 0,V?V.data:void 0);N.fetchers.set(k.key,I)}),new Map(N.fetchers)}async function Ja(O,k,V,I){Ot(O);let ue=(I&&I.flushSync)===!0,xe=m||d,Re=rf(N.location,N.matches,h,V,k,I==null?void 0:I.relative),ge=Ga(xe,Re,h),Me=Ia(ge,xe,Re);if(Me.active&&Me.matches&&(ge=Me.matches),!ge){Oe(O,k,En(404,{pathname:Re}),{flushSync:ue});return}let{path:Ne,submission:ke,error:Ee}=Em(!0,Re,I);if(Ee){Oe(O,k,Ee,{flushSync:ue});return}let ze=wi(ge,Ne),Fe=new wm(a.unstable_getContext?await a.unstable_getContext():void 0),ut=(I&&I.preventScrollReset)===!0;if(ke&&fn(ke.formMethod)){await M(O,k,Ne,ze,ge,Fe,Me.active,ue,ut,ke);return}Z.set(O,{routeId:k,path:Ne}),await L(O,k,Ne,ze,ge,Fe,Me.active,ue,ut,ke)}async function M(O,k,V,I,ue,xe,Re,ge,Me,Ne){oe(),Z.delete(O);function ke(ct){if(!ct.route.action&&!ct.route.lazy){let ba=En(405,{method:Ne.formMethod,pathname:V,routeId:k});return Oe(O,k,ba,{flushSync:ge}),!0}return!1}if(!Re&&ke(I))return;let Ee=N.fetchers.get(O);pe(O,W1(Ne,Ee),{flushSync:ge});let ze=new AbortController,Fe=fl(a.history,V,ze.signal,Ne);if(Re){let ct=await er(ue,V,Fe.signal,O);if(ct.type==="aborted")return;if(ct.type==="error"){Oe(O,k,ct.error,{flushSync:ge});return}else if(ct.matches){if(ue=ct.matches,I=wi(ue,V),ke(I))return}else{Oe(O,k,En(404,{pathname:V}),{flushSync:ge});return}}C.set(O,ze);let ut=ne,pt=dl(c,f,Fe,ue,I,u,xe),Qe=(await he(Fe,pt,xe,O))[I.route.id];if(Fe.signal.aborted){C.get(O)===ze&&C.delete(O);return}if(le.has(O)){if(yr(Qe)||cn(Qe)){pe(O,Pa(void 0));return}}else{if(yr(Qe))if(C.delete(O),me>ut){pe(O,Pa(void 0));return}else return S.add(O),pe(O,mi(Ne)),G(Fe,Qe,!1,{fetcherSubmission:Ne,preventScrollReset:Me});if(cn(Qe)){Oe(O,k,Qe.error);return}}let pa=N.navigation.location||N.location,Pt=fl(a.history,pa,ze.signal),hn=m||d,Zt=N.navigation.state!=="idle"?Ga(hn,N.navigation.location,h):N.matches;Xe(Zt,"Didn't find any matches after fetcher action");let ga=++ne;_e.set(O,ga);let va=mi(Ne,Qe.data);N.fetchers.set(O,va);let{dsMatches:gl,revalidatingFetchers:mn}=Am(Pt,xe,c,f,a.history,N,Zt,Ne,pa,u,!1,re,ye,le,Z,S,hn,h,a.patchRoutesOnNavigation!=null,[I.route.id,Qe]);mn.filter(ct=>ct.key!==O).forEach(ct=>{let ba=ct.key,vl=N.fetchers.get(ba),Ft=mi(void 0,vl?vl.data:void 0);N.fetchers.set(ba,Ft),Ot(ba),ct.controller&&C.set(ba,ct.controller)}),lt({fetchers:new Map(N.fetchers)});let $n=()=>mn.forEach(ct=>Ot(ct.key));ze.signal.addEventListener("abort",$n);let{loaderResults:Ve,fetcherResults:qt}=await fe(gl,mn,Pt,xe);if(ze.signal.aborted)return;if(ze.signal.removeEventListener("abort",$n),_e.delete(O),C.delete(O),mn.forEach(ct=>C.delete(ct.key)),N.fetchers.has(O)){let ct=Pa(Qe.data);N.fetchers.set(O,ct)}let On=Po(Ve);if(On)return G(Pt,On.result,!1,{preventScrollReset:Me});if(On=Po(qt),On)return S.add(On.key),G(Pt,On.result,!1,{preventScrollReset:Me});let{loaderData:_n,errors:tr}=Dm(N,Zt,Ve,void 0,mn,qt);Mn(ga),N.navigation.state==="loading"&&ga>me?(Xe(ee,"Expected pending action"),Q&&Q.abort(),en(N.navigation.location,{matches:Zt,loaderData:_n,errors:tr,fetchers:new Map(N.fetchers)})):(lt({errors:tr,loaderData:jm(N.loaderData,_n,Zt,tr),fetchers:new Map(N.fetchers)}),re=!1)}async function L(O,k,V,I,ue,xe,Re,ge,Me,Ne){let ke=N.fetchers.get(O);pe(O,mi(Ne,ke?ke.data:void 0),{flushSync:ge});let Ee=new AbortController,ze=fl(a.history,V,Ee.signal);if(Re){let Qe=await er(ue,V,ze.signal,O);if(Qe.type==="aborted")return;if(Qe.type==="error"){Oe(O,k,Qe.error,{flushSync:ge});return}else if(Qe.matches)ue=Qe.matches,I=wi(ue,V);else{Oe(O,k,En(404,{pathname:V}),{flushSync:ge});return}}C.set(O,Ee);let Fe=ne,ut=dl(c,f,ze,ue,I,u,xe),Ke=(await he(ze,ut,xe,O))[I.route.id];if(C.get(O)===Ee&&C.delete(O),!ze.signal.aborted){if(le.has(O)){pe(O,Pa(void 0));return}if(yr(Ke))if(me>Fe){pe(O,Pa(void 0));return}else{S.add(O),await G(ze,Ke,!1,{preventScrollReset:Me});return}if(cn(Ke)){Oe(O,k,Ke.error);return}pe(O,Pa(Ke.data))}}async function G(O,k,V,{submission:I,fetcherSubmission:ue,preventScrollReset:xe,replace:Re}={}){k.response.headers.has("X-Remix-Revalidate")&&(re=!0);let ge=k.response.headers.get("Location");Xe(ge,"Expected a Location header on the redirect Response"),ge=_m(ge,new URL(O.url),h);let Me=Ti(N.location,ge,{_isRedirect:!0});if(o){let ut=!1;if(k.response.headers.has("X-Remix-Reload-Document"))ut=!0;else if(pf.test(ge)){const pt=$p(ge,!0);ut=pt.origin!==l.location.origin||An(pt.pathname,h)==null}if(ut){Re?l.location.replace(ge):l.location.assign(ge);return}}Q=null;let Ne=Re===!0||k.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ke,formAction:Ee,formEncType:ze}=N.navigation;!I&&!ue&&ke&&Ee&&ze&&(I=Um(N.navigation));let Fe=I||ue;if(C1.has(k.response.status)&&Fe&&fn(Fe.formMethod))await Qt(Ne,Me,{submission:{...Fe,formAction:ge},preventScrollReset:xe||ae,enableViewTransition:V?de:void 0});else{let ut=Oc(Me,I);await Qt(Ne,Me,{overrideNavigation:ut,fetcherSubmission:ue,preventScrollReset:xe||ae,enableViewTransition:V?de:void 0})}}async function he(O,k,V,I){let ue,xe={};try{ue=await P1(g,O,k,I,V,!1)}catch(Re){return k.filter(ge=>ge.shouldLoad).forEach(ge=>{xe[ge.route.id]={type:"error",error:Re}}),xe}if(O.signal.aborted)return xe;for(let[Re,ge]of Object.entries(ue))if(K1(ge)){let Me=ge.result;xe[Re]={type:"redirect",response:Q1(Me,O,Re,k,h)}}else xe[Re]=await X1(ge);return xe}async function fe(O,k,V,I){let ue=he(V,O,I,null),xe=Promise.all(k.map(async Me=>{if(Me.matches&&Me.match&&Me.request&&Me.controller){let ke=(await he(Me.request,Me.matches,I,Me.key))[Me.match.route.id];return{[Me.key]:ke}}else return Promise.resolve({[Me.key]:{type:"error",error:En(404,{pathname:Me.path})}})})),Re=await ue,ge=(await xe).reduce((Me,Ne)=>Object.assign(Me,Ne),{});return{loaderResults:Re,fetcherResults:ge}}function oe(){re=!0,Z.forEach((O,k)=>{C.has(k)&&ye.add(k),Ot(k)})}function pe(O,k,V={}){N.fetchers.set(O,k),lt({fetchers:new Map(N.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function Oe(O,k,V,I={}){let ue=br(N.matches,k);We(O),lt({errors:{[ue.route.id]:V},fetchers:new Map(N.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function He(O){return se.set(O,(se.get(O)||0)+1),le.has(O)&&le.delete(O),N.fetchers.get(O)||z1}function We(O){let k=N.fetchers.get(O);C.has(O)&&!(k&&k.state==="loading"&&_e.has(O))&&Ot(O),Z.delete(O),_e.delete(O),S.delete(O),le.delete(O),ye.delete(O),N.fetchers.delete(O)}function ma(O){let k=(se.get(O)||0)-1;k<=0?(se.delete(O),le.add(O)):se.set(O,k),lt({fetchers:new Map(N.fetchers)})}function Ot(O){let k=C.get(O);k&&(k.abort(),C.delete(O))}function Mr(O){for(let k of O){let V=He(k),I=Pa(V.data);N.fetchers.set(k,I)}}function Tn(){let O=[],k=!1;for(let V of S){let I=N.fetchers.get(V);Xe(I,`Expected fetcher: ${V}`),I.state==="loading"&&(S.delete(V),O.push(V),k=!0)}return Mr(O),k}function Mn(O){let k=[];for(let[V,I]of _e)if(I<O){let ue=N.fetchers.get(V);Xe(ue,`Expected fetcher: ${V}`),ue.state==="loading"&&(Ot(V),_e.delete(V),k.push(V))}return Mr(k),k.length>0}function Nn(O,k){let V=N.blockers.get(O)||hi;return be.get(O)!==k&&be.set(O,k),V}function Ln(O){N.blockers.delete(O),be.delete(O)}function dn(O,k){let V=N.blockers.get(O)||hi;Xe(V.state==="unblocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="proceeding"||V.state==="blocked"&&k.state==="unblocked"||V.state==="proceeding"&&k.state==="unblocked",`Invalid blocker state transition: ${V.state} -> ${k.state}`);let I=new Map(N.blockers);I.set(O,k),lt({blockers:I})}function $a({currentLocation:O,nextLocation:k,historyAction:V}){if(be.size===0)return;be.size>1&&Nt(!1,"A router only supports one blocker at a time");let I=Array.from(be.entries()),[ue,xe]=I[I.length-1],Re=N.blockers.get(ue);if(!(Re&&Re.state==="proceeding")&&xe({currentLocation:O,nextLocation:k,historyAction:V}))return ue}function Nr(O){let k=En(404,{pathname:O}),V=m||d,{matches:I,route:ue}=Cm(V);return{notFoundMatches:I,route:ue,error:k}}function ji(O,k,V){if(A=O,_=k,T=V||null,!P&&N.navigation===Nc){P=!0;let I=ki(N.location,N.matches);I!=null&&lt({restoreScrollPosition:I})}return()=>{A=null,_=null,T=null}}function Or(O,k){return T&&T(O,k.map(I=>d1(I,N.loaderData)))||O.key}function Wa(O,k){if(A&&_){let V=Or(O,k);A[V]=_()}}function ki(O,k){if(A){let V=Or(O,k),I=A[V];if(typeof I=="number")return I}return null}function Ia(O,k,V){if(a.patchRoutesOnNavigation)if(O){if(Object.keys(O[0].params).length>0)return{active:!0,matches:Jo(k,V,h,!0)}}else return{active:!0,matches:Jo(k,V,h,!0)||[]};return{active:!1,matches:null}}async function er(O,k,V,I){if(!a.patchRoutesOnNavigation)return{type:"success",matches:O};let ue=O;for(;;){let xe=m==null,Re=m||d,ge=f;try{await a.patchRoutesOnNavigation({signal:V,path:k,matches:ue,fetcherKey:I,patch:(ke,Ee)=>{V.aborted||Tm(ke,Ee,Re,ge,c)}})}catch(ke){return{type:"error",error:ke,partialMatches:ue}}finally{xe&&!V.aborted&&(d=[...d])}if(V.aborted)return{type:"aborted"};let Me=Ga(Re,k,h);if(Me)return{type:"success",matches:Me};let Ne=Jo(Re,k,h,!0);if(!Ne||ue.length===Ne.length&&ue.every((ke,Ee)=>ke.route.id===Ne[Ee].route.id))return{type:"success",matches:null};ue=Ne}}function ml(O){f={},m=eu(O,c,void 0,f)}function pl(O,k){let V=m==null;Tm(O,k,m||d,f,c),V&&(d=[...d],lt({}))}return K={get basename(){return h},get future(){return y},get state(){return N},get routes(){return d},get window(){return l},initialize:Ie,subscribe:yt,enableScrollRestoration:ji,navigate:Jn,fetch:Ja,revalidate:Ka,createHref:O=>a.history.createHref(O),encodeLocation:O=>a.history.encodeLocation(O),getFetcher:He,deleteFetcher:ma,dispose:Be,getBlocker:Nn,deleteBlocker:Ln,patchRoutes:pl,_internalFetchControllers:C,_internalSetRoutes:ml},K}function B1(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function rf(a,l,o,u,c,f){let d,m;if(c){d=[];for(let g of l)if(d.push(g),g.route.id===c){m=g;break}}else d=l,m=l[l.length-1];let h=mf(u||".",hf(d),An(a.pathname,o)||a.pathname,f==="path");if(u==null&&(h.search=a.search,h.hash=a.hash),(u==null||u===""||u===".")&&m){let g=gf(h.search);if(m.route.index&&!g)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&g){let y=new URLSearchParams(h.search),E=y.getAll("index");y.delete("index"),E.filter(A=>A).forEach(A=>y.append("index",A));let x=y.toString();h.search=x?`?${x}`:""}}return o!=="/"&&(h.pathname=h.pathname==="/"?o:Zn([o,h.pathname])),Za(h)}function Em(a,l,o){if(!o||!B1(o))return{path:l};if(o.formMethod&&!J1(o.formMethod))return{path:l,error:En(405,{method:o.formMethod})};let u=()=>({path:l,error:En(400,{type:"invalid-body"})}),f=(o.formMethod||"get").toUpperCase(),d=sg(l);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!fn(f))return u();let E=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((x,[A,T])=>`${x}${A}=${T}
`,""):String(o.body);return{path:l,submission:{formMethod:f,formAction:d,formEncType:o.formEncType,formData:void 0,json:void 0,text:E}}}else if(o.formEncType==="application/json"){if(!fn(f))return u();try{let E=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:l,submission:{formMethod:f,formAction:d,formEncType:o.formEncType,formData:void 0,json:E,text:void 0}}}catch{return u()}}}Xe(typeof FormData=="function","FormData is not available in this environment");let m,h;if(o.formData)m=uf(o.formData),h=o.formData;else if(o.body instanceof FormData)m=uf(o.body),h=o.body;else if(o.body instanceof URLSearchParams)m=o.body,h=Rm(m);else if(o.body==null)m=new URLSearchParams,h=new FormData;else try{m=new URLSearchParams(o.body),h=Rm(m)}catch{return u()}let g={formMethod:f,formAction:d,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(fn(g.formMethod))return{path:l,submission:g};let y=Fa(l);return a&&y.search&&gf(y.search)&&m.append("index",""),y.search=`?${m}`,{path:Za(y),submission:g}}function Am(a,l,o,u,c,f,d,m,h,g,y,E,x,A,T,_,P,j,X,Y){var ie;let $=Y?cn(Y[1])?Y[1].error:Y[1].data:void 0,K=c.createURL(f.location),N=c.createURL(h),ee;if(y&&f.errors){let re=Object.keys(f.errors)[0];ee=d.findIndex(ye=>ye.route.id===re)}else if(Y&&cn(Y[1])){let re=Y[0];ee=d.findIndex(ye=>ye.route.id===re)-1}let ae=Y?Y[1].statusCode:void 0,Q=ae&&ae>=400,de={currentUrl:K,currentParams:((ie=f.matches[0])==null?void 0:ie.params)||{},nextUrl:N,nextParams:d[0].params,...m,actionResult:$,actionStatus:ae},ce=d.map((re,ye)=>{let{route:C}=re,ne=null;if(ee!=null&&ye>ee?ne=!1:C.lazy?ne=!0:C.loader==null?ne=!1:y?ne=lf(C,f.loaderData,f.errors):q1(f.loaderData,f.matches[ye],re)&&(ne=!0),ne!==null)return of(o,u,a,re,g,l,ne);let me=Q?!1:E||K.pathname+K.search===N.pathname+N.search||K.search!==N.search||H1(f.matches[ye],re),_e={...de,defaultShouldRevalidate:me},S=au(re,_e);return of(o,u,a,re,g,l,S,_e)}),te=[];return T.forEach((re,ye)=>{if(y||!d.some(le=>le.route.id===re.routeId)||A.has(ye))return;let C=f.fetchers.get(ye),ne=C&&C.state!=="idle"&&C.data===void 0,me=Ga(P,re.path,j);if(!me){if(X&&ne)return;te.push({key:ye,routeId:re.routeId,path:re.path,matches:null,match:null,request:null,controller:null});return}if(_.has(ye))return;let _e=wi(me,re.path),S=new AbortController,Z=fl(c,re.path,S.signal),se=null;if(x.has(ye))x.delete(ye),se=dl(o,u,Z,me,_e,g,l);else if(ne)E&&(se=dl(o,u,Z,me,_e,g,l));else{let le={...de,defaultShouldRevalidate:Q?!1:E};au(_e,le)&&(se=dl(o,u,Z,me,_e,g,l,le))}se&&te.push({key:ye,routeId:re.routeId,path:re.path,matches:se,match:_e,request:Z,controller:S})}),{dsMatches:ce,revalidatingFetchers:te}}function lf(a,l,o){if(a.lazy)return!0;if(!a.loader)return!1;let u=l!=null&&a.id in l,c=o!=null&&o[a.id]!==void 0;return!u&&c?!1:typeof a.loader=="function"&&a.loader.hydrate===!0?!0:!u&&!c}function q1(a,l,o){let u=!l||o.route.id!==l.route.id,c=!a.hasOwnProperty(o.route.id);return u||c}function H1(a,l){let o=a.route.path;return a.pathname!==l.pathname||o!=null&&o.endsWith("*")&&a.params["*"]!==l.params["*"]}function au(a,l){if(a.route.shouldRevalidate){let o=a.route.shouldRevalidate(l);if(typeof o=="boolean")return o}return l.defaultShouldRevalidate}function Tm(a,l,o,u,c){let f;if(a){let h=u[a];Xe(h,`No route found to patch children into: routeId = ${a}`),h.children||(h.children=[]),f=h.children}else f=o;let d=l.filter(h=>!f.some(g=>rg(h,g))),m=eu(d,c,[a||"_","patch",String((f==null?void 0:f.length)||"0")],u);f.push(...m)}function rg(a,l){return"id"in a&&"id"in l&&a.id===l.id?!0:a.index===l.index&&a.path===l.path&&a.caseSensitive===l.caseSensitive?(!a.children||a.children.length===0)&&(!l.children||l.children.length===0)?!0:a.children.every((o,u)=>{var c;return(c=l.children)==null?void 0:c.some(f=>rg(o,f))}):!1}var Mm=new WeakMap,lg=({key:a,route:l,manifest:o,mapRouteProperties:u})=>{let c=o[l.id];if(Xe(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let f=c.lazy[a];if(!f)return;let d=Mm.get(c);d||(d={},Mm.set(c,d));let m=d[a];if(m)return m;let h=(async()=>{let g=u1(a),E=c[a]!==void 0&&a!=="hasErrorBoundary";if(g)Nt(!g,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),d[a]=Promise.resolve();else if(E)Nt(!1,`Route "${c.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let x=await f();x!=null&&(Object.assign(c,{[a]:x}),Object.assign(c,u(c)))}typeof c.lazy=="object"&&(c.lazy[a]=void 0,Object.values(c.lazy).every(x=>x===void 0)&&(c.lazy=void 0))})();return d[a]=h,h},Nm=new WeakMap;function V1(a,l,o,u,c){let f=o[a.id];if(Xe(f,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let y=Nm.get(f);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let E=(async()=>{Xe(typeof a.lazy=="function","No lazy route function found");let x=await a.lazy(),A={};for(let T in x){let _=x[T];if(_===void 0)continue;let P=c1(T),X=f[T]!==void 0&&T!=="hasErrorBoundary";P?Nt(!P,"Route property "+T+" is not a supported property to be returned from a lazy route function. This property will be ignored."):X?Nt(!X,`Route "${f.id}" has a static property "${T}" defined but its lazy function is also returning a value for this property. The lazy route property "${T}" will be ignored.`):A[T]=_}Object.assign(f,A),Object.assign(f,{...u(f),lazy:void 0})})();return Nm.set(f,E),E.catch(()=>{}),{lazyRoutePromise:E,lazyHandlerPromise:E}}let d=Object.keys(a.lazy),m=[],h;for(let y of d){if(c&&c.includes(y))continue;let E=lg({key:y,route:a,manifest:o,mapRouteProperties:u});E&&(m.push(E),y===l&&(h=E))}let g=m.length>0?Promise.all(m).then(()=>{}):void 0;return g==null||g.catch(()=>{}),h==null||h.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:h}}async function Om(a){let l=a.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(l.map(c=>c.resolve()))).forEach((c,f)=>{o[l[f].route.id]=c}),o}async function Y1(a){return a.matches.some(l=>l.route.unstable_middleware)?ig(a,!1,()=>Om(a),(l,o)=>({[o]:{type:"error",result:l}})):Om(a)}async function ig(a,l,o,u){let{matches:c,request:f,params:d,context:m}=a,h={handlerResult:void 0};try{let g=c.flatMap(E=>E.route.unstable_middleware?E.route.unstable_middleware.map(x=>[E.route.id,x]):[]),y=await og({request:f,params:d,context:m},g,l,h,o);return l?y:h.handlerResult}catch(g){if(!h.middlewareError)throw g;let y=await u(h.middlewareError.error,h.middlewareError.routeId);return h.handlerResult?Object.assign(h.handlerResult,y):y}}async function og(a,l,o,u,c,f=0){let{request:d}=a;if(d.signal.aborted)throw d.signal.reason?d.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${d.method} ${d.url}`);let m=l[f];if(!m)return u.handlerResult=await c(),u.handlerResult;let[h,g]=m,y=!1,E,x=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");y=!0,await og(a,l,o,u,c,f+1)};try{let A=await g({request:a.request,params:a.params,context:a.context},x);return y?A===void 0?E:A:x()}catch(A){throw u.middlewareError?u.middlewareError.error!==A&&(u.middlewareError={routeId:h,error:A}):u.middlewareError={routeId:h,error:A},A}}function ug(a,l,o,u,c){let f=lg({key:"unstable_middleware",route:u.route,manifest:l,mapRouteProperties:a}),d=V1(u.route,fn(o.method)?"action":"loader",l,a,c);return{middleware:f,route:d.lazyRoutePromise,handler:d.lazyHandlerPromise}}function of(a,l,o,u,c,f,d,m=null){let h=!1,g=ug(a,l,o,u,c);return{...u,_lazyPromises:g,shouldLoad:d,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler(y){return h=!0,m?typeof y=="boolean"?au(u,{...m,defaultShouldRevalidate:y}):au(u,m):d},resolve(y){return h||d||y&&o.method==="GET"&&(u.route.lazy||u.route.loader)?G1({request:o,match:u,lazyHandlerPromise:g==null?void 0:g.handler,lazyRoutePromise:g==null?void 0:g.route,handlerOverride:y,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function dl(a,l,o,u,c,f,d,m=null){return u.map(h=>h.route.id!==c.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler:()=>!1,_lazyPromises:ug(a,l,o,h,f),resolve:()=>Promise.resolve({type:"data",result:void 0})}:of(a,l,o,h,f,d,!0,m))}async function P1(a,l,o,u,c,f){o.some(g=>{var y;return(y=g._lazyPromises)==null?void 0:y.middleware})&&await Promise.all(o.map(g=>{var y;return(y=g._lazyPromises)==null?void 0:y.middleware}));let d={request:l,params:o[0].params,context:c,matches:o},h=await a({...d,fetcherKey:u,unstable_runClientMiddleware:g=>{let y=d;return ig(y,!1,()=>g({...y,fetcherKey:u,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(E,x)=>({[x]:{type:"error",result:E}}))}});try{await Promise.all(o.flatMap(g=>{var y,E;return[(y=g._lazyPromises)==null?void 0:y.handler,(E=g._lazyPromises)==null?void 0:E.route]}))}catch{}return h}async function G1({request:a,match:l,lazyHandlerPromise:o,lazyRoutePromise:u,handlerOverride:c,scopedContext:f}){let d,m,h=fn(a.method),g=h?"action":"loader",y=E=>{let x,A=new Promise((P,j)=>x=j);m=()=>x(),a.signal.addEventListener("abort",m);let T=P=>typeof E!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${l.route.id}]`)):E({request:a,params:l.params,context:f},...P!==void 0?[P]:[]),_=(async()=>{try{return{type:"data",result:await(c?c(j=>T(j)):T())}}catch(P){return{type:"error",result:P}}})();return Promise.race([_,A])};try{let E=h?l.route.action:l.route.loader;if(o||u)if(E){let x,[A]=await Promise.all([y(E).catch(T=>{x=T}),o,u]);if(x!==void 0)throw x;d=A}else{await o;let x=h?l.route.action:l.route.loader;if(x)[d]=await Promise.all([y(x),u]);else if(g==="action"){let A=new URL(a.url),T=A.pathname+A.search;throw En(405,{method:a.method,pathname:T,routeId:l.route.id})}else return{type:"data",result:void 0}}else if(E)d=await y(E);else{let x=new URL(a.url),A=x.pathname+x.search;throw En(404,{pathname:A})}}catch(E){return{type:"error",result:E}}finally{m&&a.signal.removeEventListener("abort",m)}return d}async function X1(a){var u,c,f,d,m,h;let{result:l,type:o}=a;if(cg(l)){let g;try{let y=l.headers.get("Content-Type");y&&/\bapplication\/json\b/.test(y)?l.body==null?g=null:g=await l.json():g=await l.text()}catch(y){return{type:"error",error:y}}return o==="error"?{type:"error",error:new nu(l.status,l.statusText,g),statusCode:l.status,headers:l.headers}:{type:"data",data:g,statusCode:l.status,headers:l.headers}}return o==="error"?zm(l)?l.data instanceof Error?{type:"error",error:l.data,statusCode:(u=l.init)==null?void 0:u.status,headers:(c=l.init)!=null&&c.headers?new Headers(l.init.headers):void 0}:{type:"error",error:new nu(((f=l.init)==null?void 0:f.status)||500,void 0,l.data),statusCode:Mi(l)?l.status:void 0,headers:(d=l.init)!=null&&d.headers?new Headers(l.init.headers):void 0}:{type:"error",error:l,statusCode:Mi(l)?l.status:void 0}:zm(l)?{type:"data",data:l.data,statusCode:(m=l.init)==null?void 0:m.status,headers:(h=l.init)!=null&&h.headers?new Headers(l.init.headers):void 0}:{type:"data",data:l}}function Q1(a,l,o,u,c){let f=a.headers.get("Location");if(Xe(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!pf.test(f)){let d=u.slice(0,u.findIndex(m=>m.route.id===o)+1);f=rf(new URL(l.url),d,c,f),a.headers.set("Location",f)}return a}function _m(a,l,o){if(pf.test(a)){let u=a,c=u.startsWith("//")?new URL(l.protocol+u):new URL(u),f=An(c.pathname,o)!=null;if(c.origin===l.origin&&f)return c.pathname+c.search+c.hash}return a}function fl(a,l,o,u){let c=a.createURL(sg(l)).toString(),f={signal:o};if(u&&fn(u.formMethod)){let{formMethod:d,formEncType:m}=u;f.method=d.toUpperCase(),m==="application/json"?(f.headers=new Headers({"Content-Type":m}),f.body=JSON.stringify(u.json)):m==="text/plain"?f.body=u.text:m==="application/x-www-form-urlencoded"&&u.formData?f.body=uf(u.formData):f.body=u.formData}return new Request(c,f)}function uf(a){let l=new URLSearchParams;for(let[o,u]of a.entries())l.append(o,typeof u=="string"?u:u.name);return l}function Rm(a){let l=new FormData;for(let[o,u]of a.entries())l.append(o,u);return l}function Z1(a,l,o,u=!1,c=!1){let f={},d=null,m,h=!1,g={},y=o&&cn(o[1])?o[1].error:void 0;return a.forEach(E=>{if(!(E.route.id in l))return;let x=E.route.id,A=l[x];if(Xe(!yr(A),"Cannot handle redirect results in processLoaderData"),cn(A)){let T=A.error;if(y!==void 0&&(T=y,y=void 0),d=d||{},c)d[x]=T;else{let _=br(a,x);d[_.route.id]==null&&(d[_.route.id]=T)}u||(f[x]=ag),h||(h=!0,m=Mi(A.error)?A.error.status:500),A.headers&&(g[x]=A.headers)}else f[x]=A.data,A.statusCode&&A.statusCode!==200&&!h&&(m=A.statusCode),A.headers&&(g[x]=A.headers)}),y!==void 0&&o&&(d={[o[0]]:y},o[2]&&(f[o[2]]=void 0)),{loaderData:f,errors:d,statusCode:m||200,loaderHeaders:g}}function Dm(a,l,o,u,c,f){let{loaderData:d,errors:m}=Z1(l,o,u);return c.filter(h=>!h.matches||h.matches.some(g=>g.shouldLoad)).forEach(h=>{let{key:g,match:y,controller:E}=h,x=f[g];if(Xe(x,"Did not find corresponding fetcher result"),!(E&&E.signal.aborted))if(cn(x)){let A=br(a.matches,y==null?void 0:y.route.id);m&&m[A.route.id]||(m={...m,[A.route.id]:x.error}),a.fetchers.delete(g)}else if(yr(x))Xe(!1,"Unhandled fetcher revalidation redirect");else{let A=Pa(x.data);a.fetchers.set(g,A)}}),{loaderData:d,errors:m}}function jm(a,l,o,u){let c=Object.entries(l).filter(([,f])=>f!==ag).reduce((f,[d,m])=>(f[d]=m,f),{});for(let f of o){let d=f.route.id;if(!l.hasOwnProperty(d)&&a.hasOwnProperty(d)&&f.route.loader&&(c[d]=a[d]),u&&u.hasOwnProperty(d))break}return c}function km(a){return a?cn(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function br(a,l){return(l?a.slice(0,a.findIndex(u=>u.route.id===l)+1):[...a]).reverse().find(u=>u.route.hasErrorBoundary===!0)||a[0]}function Cm(a){let l=a.length===1?a[0]:a.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:l}],route:l}}function En(a,{pathname:l,routeId:o,method:u,type:c,message:f}={}){let d="Unknown Server Error",m="Unknown @remix-run/router error";return a===400?(d="Bad Request",u&&l&&o?m=`You made a ${u} request to "${l}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(m="Unable to encode submission body")):a===403?(d="Forbidden",m=`Route "${o}" does not match URL "${l}"`):a===404?(d="Not Found",m=`No route matches URL "${l}"`):a===405&&(d="Method Not Allowed",u&&l&&o?m=`You made a ${u.toUpperCase()} request to "${l}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:u&&(m=`Invalid request method "${u.toUpperCase()}"`)),new nu(a||500,d,new Error(m),!0)}function Po(a){let l=Object.entries(a);for(let o=l.length-1;o>=0;o--){let[u,c]=l[o];if(yr(c))return{key:u,result:c}}}function sg(a){let l=typeof a=="string"?Fa(a):a;return Za({...l,hash:""})}function F1(a,l){return a.pathname!==l.pathname||a.search!==l.search?!1:a.hash===""?l.hash!=="":a.hash===l.hash?!0:l.hash!==""}function K1(a){return cg(a.result)&&k1.has(a.result.status)}function cn(a){return a.type==="error"}function yr(a){return(a&&a.type)==="redirect"}function zm(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function cg(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function J1(a){return j1.has(a.toUpperCase())}function fn(a){return R1.has(a.toUpperCase())}function gf(a){return new URLSearchParams(a).getAll("index").some(l=>l==="")}function wi(a,l){let o=typeof l=="string"?Fa(l).search:l.search;if(a[a.length-1].route.index&&gf(o||""))return a[a.length-1];let u=eg(a);return u[u.length-1]}function Um(a){let{formMethod:l,formAction:o,formEncType:u,text:c,formData:f,json:d}=a;if(!(!l||!o||!u)){if(c!=null)return{formMethod:l,formAction:o,formEncType:u,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:l,formAction:o,formEncType:u,formData:f,json:void 0,text:void 0};if(d!==void 0)return{formMethod:l,formAction:o,formEncType:u,formData:void 0,json:d,text:void 0}}}function Oc(a,l){return l?{state:"loading",location:a,formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $1(a,l){return{state:"submitting",location:a,formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text}}function mi(a,l){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:l}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function W1(a,l){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:l?l.data:void 0}}function Pa(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function I1(a,l){try{let o=a.sessionStorage.getItem(ng);if(o){let u=JSON.parse(o);for(let[c,f]of Object.entries(u||{}))f&&Array.isArray(f)&&l.set(c,new Set(f||[]))}}catch{}}function ey(a,l){if(l.size>0){let o={};for(let[u,c]of l)o[u]=[...c];try{a.sessionStorage.setItem(ng,JSON.stringify(o))}catch(u){Nt(!1,`Failed to save applied view transitions in sessionStorage (${u}).`)}}}function ty(){let a,l,o=new Promise((u,c)=>{a=async f=>{u(f);try{await o}catch{}},l=async f=>{c(f);try{await o}catch{}}});return{promise:o,resolve:a,reject:l}}var wr=B.createContext(null);wr.displayName="DataRouter";var Ni=B.createContext(null);Ni.displayName="DataRouterState";var vf=B.createContext({isTransitioning:!1});vf.displayName="ViewTransition";var fg=B.createContext(new Map);fg.displayName="Fetchers";var ny=B.createContext(null);ny.displayName="Await";var Fn=B.createContext(null);Fn.displayName="Navigation";var su=B.createContext(null);su.displayName="Location";var Kn=B.createContext({outlet:null,matches:[],isDataRoute:!1});Kn.displayName="Route";var bf=B.createContext(null);bf.displayName="RouteError";function ay(a,{relative:l}={}){Xe(Oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=B.useContext(Fn),{hash:c,pathname:f,search:d}=_i(a,{relative:l}),m=f;return o!=="/"&&(m=f==="/"?o:Zn([o,f])),u.createHref({pathname:m,search:d,hash:c})}function Oi(){return B.useContext(su)!=null}function Sr(){return Xe(Oi(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(su).location}var dg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hg(a){B.useContext(Fn).static||B.useLayoutEffect(a)}function ry(){let{isDataRoute:a}=B.useContext(Kn);return a?yy():ly()}function ly(){Xe(Oi(),"useNavigate() may be used only in the context of a <Router> component.");let a=B.useContext(wr),{basename:l,navigator:o}=B.useContext(Fn),{matches:u}=B.useContext(Kn),{pathname:c}=Sr(),f=JSON.stringify(hf(u)),d=B.useRef(!1);return hg(()=>{d.current=!0}),B.useCallback((h,g={})=>{if(Nt(d.current,dg),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=mf(h,JSON.parse(f),c,g.relative==="path");a==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:Zn([l,y.pathname])),(g.replace?o.replace:o.push)(y,g.state,g)},[l,o,f,c,a])}var iy=B.createContext(null);function oy(a){let l=B.useContext(Kn).outlet;return l&&B.createElement(iy.Provider,{value:a},l)}function _i(a,{relative:l}={}){let{matches:o}=B.useContext(Kn),{pathname:u}=Sr(),c=JSON.stringify(hf(o));return B.useMemo(()=>mf(a,JSON.parse(c),u,l==="path"),[a,c,u,l])}function uy(a,l,o,u){Xe(Oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=B.useContext(Fn),{matches:f}=B.useContext(Kn),d=f[f.length-1],m=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",y=d&&d.route;{let j=y&&y.path||"";mg(h,!y||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let E=Sr(),x;x=E;let A=x.pathname||"/",T=A;if(g!=="/"){let j=g.replace(/^\//,"").split("/");T="/"+A.replace(/^\//,"").split("/").slice(j.length).join("/")}let _=Ga(a,{pathname:T});return Nt(y||_!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Nt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),hy(_&&_.map(j=>Object.assign({},j,{params:Object.assign({},m,j.params),pathname:Zn([g,c.encodeLocation?c.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:Zn([g,c.encodeLocation?c.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),f,o,u)}function sy(){let a=by(),l=Mi(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:f},"ErrorBoundary")," or"," ",B.createElement("code",{style:f},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},l),o?B.createElement("pre",{style:c},o):null,d)}var cy=B.createElement(sy,null),fy=class extends B.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){console.error("React Router caught the following error during render",a,l)}render(){return this.state.error!==void 0?B.createElement(Kn.Provider,{value:this.props.routeContext},B.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dy({routeContext:a,match:l,children:o}){let u=B.useContext(wr);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),B.createElement(Kn.Provider,{value:a},o)}function hy(a,l=[],o=null,u=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let c=a,f=o==null?void 0:o.errors;if(f!=null){let h=c.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);Xe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let d=!1,m=-1;if(o)for(let h=0;h<c.length;h++){let g=c[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=h),g.route.id){let{loaderData:y,errors:E}=o,x=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||x){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((h,g,y)=>{let E,x=!1,A=null,T=null;o&&(E=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||cy,d&&(m<0&&y===0?(mg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,T=null):m===y&&(x=!0,T=g.route.hydrateFallbackElement||null)));let _=l.concat(c.slice(0,y+1)),P=()=>{let j;return E?j=A:x?j=T:g.route.Component?j=B.createElement(g.route.Component,null):g.route.element?j=g.route.element:j=h,B.createElement(dy,{match:g,routeContext:{outlet:h,matches:_,isDataRoute:o!=null},children:j})};return o&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?B.createElement(fy,{location:o.location,revalidation:o.revalidation,component:A,error:E,children:P(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):P()},null)}function yf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function my(a){let l=B.useContext(wr);return Xe(l,yf(a)),l}function py(a){let l=B.useContext(Ni);return Xe(l,yf(a)),l}function gy(a){let l=B.useContext(Kn);return Xe(l,yf(a)),l}function xf(a){let l=gy(a),o=l.matches[l.matches.length-1];return Xe(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function vy(){return xf("useRouteId")}function by(){var u;let a=B.useContext(bf),l=py("useRouteError"),o=xf("useRouteError");return a!==void 0?a:(u=l.errors)==null?void 0:u[o]}function yy(){let{router:a}=my("useNavigate"),l=xf("useNavigate"),o=B.useRef(!1);return hg(()=>{o.current=!0}),B.useCallback(async(c,f={})=>{Nt(o.current,dg),o.current&&(typeof c=="number"?a.navigate(c):await a.navigate(c,{fromRouteId:l,...f}))},[a,l])}var Lm={};function mg(a,l,o){!l&&!Lm[a]&&(Lm[a]=!0,Nt(!1,o))}var Bm={};function qm(a,l){!a&&!Bm[l]&&(Bm[l]=!0,console.warn(l))}function xy(a){let l={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&Nt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(l,{element:B.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&Nt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(l,{hydrateFallbackElement:B.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&Nt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(l,{errorElement:B.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),l}var wy=["HydrateFallback","hydrateFallbackElement"],Sy=class{constructor(){this.status="pending",this.promise=new Promise((a,l)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",a(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",l(o))}})}};function Ey({router:a,flushSync:l}){let[o,u]=B.useState(a.state),[c,f]=B.useState(),[d,m]=B.useState({isTransitioning:!1}),[h,g]=B.useState(),[y,E]=B.useState(),[x,A]=B.useState(),T=B.useRef(new Map),_=B.useCallback((Y,{deletedFetchers:$,flushSync:K,viewTransitionOpts:N})=>{Y.fetchers.forEach((ae,Q)=>{ae.data!==void 0&&T.current.set(Q,ae.data)}),$.forEach(ae=>T.current.delete(ae)),qm(K===!1||l!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ee=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(qm(N==null||ee,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!N||!ee){l&&K?l(()=>u(Y)):B.startTransition(()=>u(Y));return}if(l&&K){l(()=>{y&&(h&&h.resolve(),y.skipTransition()),m({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let ae=a.window.document.startViewTransition(()=>{l(()=>u(Y))});ae.finished.finally(()=>{l(()=>{g(void 0),E(void 0),f(void 0),m({isTransitioning:!1})})}),l(()=>E(ae));return}y?(h&&h.resolve(),y.skipTransition(),A({state:Y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(f(Y),m({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[a.window,l,y,h]);B.useLayoutEffect(()=>a.subscribe(_),[a,_]),B.useEffect(()=>{d.isTransitioning&&!d.flushSync&&g(new Sy)},[d]),B.useEffect(()=>{if(h&&c&&a.window){let Y=c,$=h.promise,K=a.window.document.startViewTransition(async()=>{B.startTransition(()=>u(Y)),await $});K.finished.finally(()=>{g(void 0),E(void 0),f(void 0),m({isTransitioning:!1})}),E(K)}},[c,h,a.window]),B.useEffect(()=>{h&&c&&o.location.key===c.location.key&&h.resolve()},[h,y,o.location,c]),B.useEffect(()=>{!d.isTransitioning&&x&&(f(x.state),m({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),A(void 0))},[d.isTransitioning,x]);let P=B.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:Y=>a.navigate(Y),push:(Y,$,K)=>a.navigate(Y,{state:$,preventScrollReset:K==null?void 0:K.preventScrollReset}),replace:(Y,$,K)=>a.navigate(Y,{replace:!0,state:$,preventScrollReset:K==null?void 0:K.preventScrollReset})}),[a]),j=a.basename||"/",X=B.useMemo(()=>({router:a,navigator:P,static:!1,basename:j}),[a,P,j]);return B.createElement(B.Fragment,null,B.createElement(wr.Provider,{value:X},B.createElement(Ni.Provider,{value:o},B.createElement(fg.Provider,{value:T.current},B.createElement(vf.Provider,{value:d},B.createElement(Ny,{basename:j,location:o.location,navigationType:o.historyAction,navigator:P},B.createElement(Ay,{routes:a.routes,future:a.future,state:o})))))),null)}var Ay=B.memo(Ty);function Ty({routes:a,future:l,state:o}){return uy(a,void 0,o,l)}function My(a){return oy(a.context)}function Ny({basename:a="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:f=!1}){Xe(!Oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=B.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof o=="string"&&(o=Fa(o));let{pathname:h="/",search:g="",hash:y="",state:E=null,key:x="default"}=o,A=B.useMemo(()=>{let T=An(h,d);return T==null?null:{location:{pathname:T,search:g,hash:y,state:E,key:x},navigationType:u}},[d,h,g,y,E,x,u]);return Nt(A!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:B.createElement(Fn.Provider,{value:m},B.createElement(su.Provider,{children:l,value:A}))}var $o="get",Wo="application/x-www-form-urlencoded";function cu(a){return a!=null&&typeof a.tagName=="string"}function Oy(a){return cu(a)&&a.tagName.toLowerCase()==="button"}function _y(a){return cu(a)&&a.tagName.toLowerCase()==="form"}function Ry(a){return cu(a)&&a.tagName.toLowerCase()==="input"}function Dy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function jy(a,l){return a.button===0&&(!l||l==="_self")&&!Dy(a)}var Go=null;function ky(){if(Go===null)try{new FormData(document.createElement("form"),0),Go=!1}catch{Go=!0}return Go}var Cy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _c(a){return a!=null&&!Cy.has(a)?(Nt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wo}"`),null):a}function zy(a,l){let o,u,c,f,d;if(_y(a)){let m=a.getAttribute("action");u=m?An(m,l):null,o=a.getAttribute("method")||$o,c=_c(a.getAttribute("enctype"))||Wo,f=new FormData(a)}else if(Oy(a)||Ry(a)&&(a.type==="submit"||a.type==="image")){let m=a.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||m.getAttribute("action");if(u=h?An(h,l):null,o=a.getAttribute("formmethod")||m.getAttribute("method")||$o,c=_c(a.getAttribute("formenctype"))||_c(m.getAttribute("enctype"))||Wo,f=new FormData(m,a),!ky()){let{name:g,type:y,value:E}=a;if(y==="image"){let x=g?`${g}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else g&&f.append(g,E)}}else{if(cu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=$o,u=null,c=Wo,d=a}return f&&c==="text/plain"&&(d=f,f=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:f,body:d}}function wf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}async function Uy(a,l){if(a.id in l)return l[a.id];try{let o=await import(a.module);return l[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ly(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function By(a,l,o){let u=await Promise.all(a.map(async c=>{let f=l.routes[c.route.id];if(f){let d=await Uy(f,o);return d.links?d.links():[]}return[]}));return Yy(u.flat(1).filter(Ly).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Hm(a,l,o,u,c,f){let d=(h,g)=>o[g]?h.route.id!==o[g].route.id:!0,m=(h,g)=>{var y;return o[g].pathname!==h.pathname||((y=o[g].route.path)==null?void 0:y.endsWith("*"))&&o[g].params["*"]!==h.params["*"]};return f==="assets"?l.filter((h,g)=>d(h,g)||m(h,g)):f==="data"?l.filter((h,g)=>{var E;let y=u.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,g)||m(h,g))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=o[0])==null?void 0:E.params)||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function qy(a,l,{includeHydrateFallback:o}={}){return Hy(a.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Hy(a){return[...new Set(a)]}function Vy(a){let l={},o=Object.keys(a).sort();for(let u of o)l[u]=a[u];return l}function Yy(a,l){let o=new Set;return new Set(l),a.reduce((u,c)=>{let f=JSON.stringify(Vy(c));return o.has(f)||(o.add(f),u.push({key:f,link:c})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Py=new Set([100,101,204,205]);function Gy(a,l){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o.pathname==="/"?o.pathname="_root.data":l&&An(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function pg(){let a=B.useContext(wr);return wf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Xy(){let a=B.useContext(Ni);return wf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Sf=B.createContext(void 0);Sf.displayName="FrameworkContext";function gg(){let a=B.useContext(Sf);return wf(a,"You must render this element inside a <HydratedRouter> element"),a}function Qy(a,l){let o=B.useContext(Sf),[u,c]=B.useState(!1),[f,d]=B.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:g,onMouseLeave:y,onTouchStart:E}=l,x=B.useRef(null);B.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let _=j=>{j.forEach(X=>{d(X.isIntersecting)})},P=new IntersectionObserver(_,{threshold:.5});return x.current&&P.observe(x.current),()=>{P.disconnect()}}},[a]),B.useEffect(()=>{if(u){let _=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(_)}}},[u]);let A=()=>{c(!0)},T=()=>{c(!1),d(!1)};return o?a!=="intent"?[f,x,{}]:[f,x,{onFocus:pi(m,A),onBlur:pi(h,T),onMouseEnter:pi(g,A),onMouseLeave:pi(y,T),onTouchStart:pi(E,A)}]:[!1,x,{}]}function pi(a,l){return o=>{a&&a(o),o.defaultPrevented||l(o)}}function Zy({page:a,...l}){let{router:o}=pg(),u=B.useMemo(()=>Ga(o.routes,a,o.basename),[o.routes,a,o.basename]);return u?B.createElement(Ky,{page:a,matches:u,...l}):null}function Fy(a){let{manifest:l,routeModules:o}=gg(),[u,c]=B.useState([]);return B.useEffect(()=>{let f=!1;return By(a,l,o).then(d=>{f||c(d)}),()=>{f=!0}},[a,l,o]),u}function Ky({page:a,matches:l,...o}){let u=Sr(),{manifest:c,routeModules:f}=gg(),{basename:d}=pg(),{loaderData:m,matches:h}=Xy(),g=B.useMemo(()=>Hm(a,l,h,c,u,"data"),[a,l,h,c,u]),y=B.useMemo(()=>Hm(a,l,h,c,u,"assets"),[a,l,h,c,u]),E=B.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let T=new Set,_=!1;if(l.forEach(j=>{var Y;let X=c.routes[j.route.id];!X||!X.hasLoader||(!g.some($=>$.route.id===j.route.id)&&j.route.id in m&&((Y=f[j.route.id])!=null&&Y.shouldRevalidate)||X.hasClientLoader?_=!0:T.add(j.route.id))}),T.size===0)return[];let P=Gy(a,d);return _&&T.size>0&&P.searchParams.set("_routes",l.filter(j=>T.has(j.route.id)).map(j=>j.route.id).join(",")),[P.pathname+P.search]},[d,m,u,c,g,l,a,f]),x=B.useMemo(()=>qy(y,c),[y,c]),A=Fy(y);return B.createElement(B.Fragment,null,E.map(T=>B.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),x.map(T=>B.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),A.map(({key:T,link:_})=>B.createElement("link",{key:T,..._})))}function Jy(...a){return l=>{a.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vg&&(window.__reactRouterVersion="7.6.2")}catch{}function $y(a,l){return L1({basename:l==null?void 0:l.basename,unstable_getContext:l==null?void 0:l.unstable_getContext,future:l==null?void 0:l.future,history:r1({window:l==null?void 0:l.window}),hydrationData:Wy(),routes:a,mapRouteProperties:xy,hydrationRouteProperties:wy,dataStrategy:l==null?void 0:l.dataStrategy,patchRoutesOnNavigation:l==null?void 0:l.patchRoutesOnNavigation,window:l==null?void 0:l.window}).initialize()}function Wy(){let a=window==null?void 0:window.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:Iy(a.errors)}),a}function Iy(a){if(!a)return null;let l=Object.entries(a),o={};for(let[u,c]of l)if(c&&c.__type==="RouteErrorResponse")o[u]=new nu(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let d=new f(c.message);d.stack="",o[u]=d}catch{}}if(o[u]==null){let f=new Error(c.message);f.stack="",o[u]=f}}else o[u]=c;return o}var bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yg=B.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:f,replace:d,state:m,target:h,to:g,preventScrollReset:y,viewTransition:E,...x},A){let{basename:T}=B.useContext(Fn),_=typeof g=="string"&&bg.test(g),P,j=!1;if(typeof g=="string"&&_&&(P=g,vg))try{let Q=new URL(window.location.href),de=g.startsWith("//")?new URL(Q.protocol+g):new URL(g),ce=An(de.pathname,T);de.origin===Q.origin&&ce!=null?g=ce+de.search+de.hash:j=!0}catch{Nt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=ay(g,{relative:c}),[Y,$,K]=Qy(u,x),N=n2(g,{replace:d,state:m,target:h,preventScrollReset:y,relative:c,viewTransition:E});function ee(Q){l&&l(Q),Q.defaultPrevented||N(Q)}let ae=B.createElement("a",{...x,...K,href:P||X,onClick:j||f?l:ee,ref:Jy(A,$),target:h,"data-discover":!_&&o==="render"?"true":void 0});return Y&&!_?B.createElement(B.Fragment,null,ae,B.createElement(Zy,{page:X})):ae});yg.displayName="Link";var Qa=B.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:f,to:d,viewTransition:m,children:h,...g},y){let E=_i(d,{relative:g.relative}),x=Sr(),A=B.useContext(Ni),{navigator:T,basename:_}=B.useContext(Fn),P=A!=null&&o2(E)&&m===!0,j=T.encodeLocation?T.encodeLocation(E).pathname:E.pathname,X=x.pathname,Y=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(X=X.toLowerCase(),Y=Y?Y.toLowerCase():null,j=j.toLowerCase()),Y&&_&&(Y=An(Y,_)||Y);const $=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let K=X===j||!c&&X.startsWith(j)&&X.charAt($)==="/",N=Y!=null&&(Y===j||!c&&Y.startsWith(j)&&Y.charAt(j.length)==="/"),ee={isActive:K,isPending:N,isTransitioning:P},ae=K?l:void 0,Q;typeof u=="function"?Q=u(ee):Q=[u,K?"active":null,N?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let de=typeof f=="function"?f(ee):f;return B.createElement(yg,{...g,"aria-current":ae,className:Q,ref:y,style:de,to:d,viewTransition:m},typeof h=="function"?h(ee):h)});Qa.displayName="NavLink";var e2=B.forwardRef(({discover:a="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:f,method:d=$o,action:m,onSubmit:h,relative:g,preventScrollReset:y,viewTransition:E,...x},A)=>{let T=l2(),_=i2(m,{relative:g}),P=d.toLowerCase()==="get"?"get":"post",j=typeof m=="string"&&bg.test(m),X=Y=>{if(h&&h(Y),Y.defaultPrevented)return;Y.preventDefault();let $=Y.nativeEvent.submitter,K=($==null?void 0:$.getAttribute("formmethod"))||d;T($||Y.currentTarget,{fetcherKey:l,method:K,navigate:o,replace:c,state:f,relative:g,preventScrollReset:y,viewTransition:E})};return B.createElement("form",{ref:A,method:P,action:_,onSubmit:u?h:X,...x,"data-discover":!j&&a==="render"?"true":void 0})});e2.displayName="Form";function t2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xg(a){let l=B.useContext(wr);return Xe(l,t2(a)),l}function n2(a,{target:l,replace:o,state:u,preventScrollReset:c,relative:f,viewTransition:d}={}){let m=ry(),h=Sr(),g=_i(a,{relative:f});return B.useCallback(y=>{if(jy(y,l)){y.preventDefault();let E=o!==void 0?o:Za(h)===Za(g);m(a,{replace:E,state:u,preventScrollReset:c,relative:f,viewTransition:d})}},[h,m,g,o,u,l,a,c,f,d])}var a2=0,r2=()=>`__${String(++a2)}__`;function l2(){let{router:a}=xg("useSubmit"),{basename:l}=B.useContext(Fn),o=vy();return B.useCallback(async(u,c={})=>{let{action:f,method:d,encType:m,formData:h,body:g}=zy(u,l);if(c.navigate===!1){let y=c.fetcherKey||r2();await a.fetch(y,o,c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:g,formMethod:c.method||d,formEncType:c.encType||m,flushSync:c.flushSync})}else await a.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:h,body:g,formMethod:c.method||d,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,o])}function i2(a,{relative:l}={}){let{basename:o}=B.useContext(Fn),u=B.useContext(Kn);Xe(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={..._i(a||".",{relative:l})},d=Sr();if(a==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(y=>y==="")){m.delete("index"),h.filter(E=>E).forEach(E=>m.append("index",E));let y=m.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Zn([o,f.pathname])),Za(f)}function o2(a,l={}){let o=B.useContext(vf);Xe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=xg("useViewTransitionState"),c=_i(a,{relative:l.relative});if(!o.isTransitioning)return!1;let f=An(o.currentLocation.pathname,u)||o.currentLocation.pathname,d=An(o.nextLocation.pathname,u)||o.nextLocation.pathname;return tu(c.pathname,d)!=null||tu(c.pathname,f)!=null}[...Py];var u2=Kp();/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function s2(a){return B.createElement(Ey,{flushSync:u2.flushSync,...a})}const c2="/assets/logoo-B6Svqv2D.png";/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d2=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,u)=>u?u.toUpperCase():o.toLowerCase()),Vm=a=>{const l=d2(a);return l.charAt(0).toUpperCase()+l.slice(1)},wg=(...a)=>a.filter((l,o,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===o).join(" ").trim(),h2=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=B.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:d,...m},h)=>B.createElement("svg",{ref:h,...m2,width:l,height:l,stroke:a,strokeWidth:u?Number(o)*24/Number(l):o,className:wg("lucide",c),...!f&&!h2(m)&&{"aria-hidden":"true"},...m},[...d.map(([g,y])=>B.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(a,l)=>{const o=B.forwardRef(({className:u,...c},f)=>B.createElement(p2,{ref:f,iconNode:l,className:wg(`lucide-${f2(Vm(a))}`,`lucide-${a}`,u),...c}));return o.displayName=Vm(a),o};/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Sg=mt("award",g2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],b2=mt("chevron-left",v2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],x2=mt("chevron-right",y2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Ef=mt("clock",w2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],E2=mt("download",S2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],T2=mt("facebook",A2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Ym=mt("heart",M2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],O2=mt("instagram",N2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],R2=mt("link",_2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Pm=mt("linkedin",D2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Eg=mt("mail",j2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],C2=mt("map-pin",k2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],U2=mt("message-circle",z2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],Gm=mt("move-right",L2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ag=mt("phone",B2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],H2=mt("qr-code",q2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Y2=mt("send",V2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],G2=mt("share",P2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fu=mt("star",X2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],Z2=mt("store",Q2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],K2=mt("twitter",F2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Xm=mt("users",J2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],W2=mt("utensils",$2);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ex=mt("x",I2);var ul={},Rc,Qm;function tx(){return Qm||(Qm=1,Rc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Rc}var Dc={},Va={},Zm;function Er(){if(Zm)return Va;Zm=1;let a;const l=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Va.getSymbolSize=function(u){if(!u)throw new Error('"version" cannot be null or undefined');if(u<1||u>40)throw new Error('"version" should be in range from 1 to 40');return u*4+17},Va.getSymbolTotalCodewords=function(u){return l[u]},Va.getBCHDigit=function(o){let u=0;for(;o!==0;)u++,o>>>=1;return u},Va.setToSJISFunction=function(u){if(typeof u!="function")throw new Error('"toSJISFunc" is not a valid function.');a=u},Va.isKanjiModeEnabled=function(){return typeof a<"u"},Va.toSJIS=function(u){return a(u)},Va}var jc={},Fm;function Af(){return Fm||(Fm=1,function(a){a.L={bit:1},a.M={bit:0},a.Q={bit:3},a.H={bit:2};function l(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return a.L;case"m":case"medium":return a.M;case"q":case"quartile":return a.Q;case"h":case"high":return a.H;default:throw new Error("Unknown EC Level: "+o)}}a.isValid=function(u){return u&&typeof u.bit<"u"&&u.bit>=0&&u.bit<4},a.from=function(u,c){if(a.isValid(u))return u;try{return l(u)}catch{return c}}}(jc)),jc}var kc,Km;function nx(){if(Km)return kc;Km=1;function a(){this.buffer=[],this.length=0}return a.prototype={get:function(l){const o=Math.floor(l/8);return(this.buffer[o]>>>7-l%8&1)===1},put:function(l,o){for(let u=0;u<o;u++)this.putBit((l>>>o-u-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(l){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),l&&(this.buffer[o]|=128>>>this.length%8),this.length++}},kc=a,kc}var Cc,Jm;function ax(){if(Jm)return Cc;Jm=1;function a(l){if(!l||l<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=l,this.data=new Uint8Array(l*l),this.reservedBit=new Uint8Array(l*l)}return a.prototype.set=function(l,o,u,c){const f=l*this.size+o;this.data[f]=u,c&&(this.reservedBit[f]=!0)},a.prototype.get=function(l,o){return this.data[l*this.size+o]},a.prototype.xor=function(l,o,u){this.data[l*this.size+o]^=u},a.prototype.isReserved=function(l,o){return this.reservedBit[l*this.size+o]},Cc=a,Cc}var zc={},$m;function rx(){return $m||($m=1,function(a){const l=Er().getSymbolSize;a.getRowColCoords=function(u){if(u===1)return[];const c=Math.floor(u/7)+2,f=l(u),d=f===145?26:Math.ceil((f-13)/(2*c-2))*2,m=[f-7];for(let h=1;h<c-1;h++)m[h]=m[h-1]-d;return m.push(6),m.reverse()},a.getPositions=function(u){const c=[],f=a.getRowColCoords(u),d=f.length;for(let m=0;m<d;m++)for(let h=0;h<d;h++)m===0&&h===0||m===0&&h===d-1||m===d-1&&h===0||c.push([f[m],f[h]]);return c}}(zc)),zc}var Uc={},Wm;function lx(){if(Wm)return Uc;Wm=1;const a=Er().getSymbolSize,l=7;return Uc.getPositions=function(u){const c=a(u);return[[0,0],[c-l,0],[0,c-l]]},Uc}var Lc={},Im;function ix(){return Im||(Im=1,function(a){a.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const l={N1:3,N2:3,N3:40,N4:10};a.isValid=function(c){return c!=null&&c!==""&&!isNaN(c)&&c>=0&&c<=7},a.from=function(c){return a.isValid(c)?parseInt(c,10):void 0},a.getPenaltyN1=function(c){const f=c.size;let d=0,m=0,h=0,g=null,y=null;for(let E=0;E<f;E++){m=h=0,g=y=null;for(let x=0;x<f;x++){let A=c.get(E,x);A===g?m++:(m>=5&&(d+=l.N1+(m-5)),g=A,m=1),A=c.get(x,E),A===y?h++:(h>=5&&(d+=l.N1+(h-5)),y=A,h=1)}m>=5&&(d+=l.N1+(m-5)),h>=5&&(d+=l.N1+(h-5))}return d},a.getPenaltyN2=function(c){const f=c.size;let d=0;for(let m=0;m<f-1;m++)for(let h=0;h<f-1;h++){const g=c.get(m,h)+c.get(m,h+1)+c.get(m+1,h)+c.get(m+1,h+1);(g===4||g===0)&&d++}return d*l.N2},a.getPenaltyN3=function(c){const f=c.size;let d=0,m=0,h=0;for(let g=0;g<f;g++){m=h=0;for(let y=0;y<f;y++)m=m<<1&2047|c.get(g,y),y>=10&&(m===1488||m===93)&&d++,h=h<<1&2047|c.get(y,g),y>=10&&(h===1488||h===93)&&d++}return d*l.N3},a.getPenaltyN4=function(c){let f=0;const d=c.data.length;for(let h=0;h<d;h++)f+=c.data[h];return Math.abs(Math.ceil(f*100/d/5)-10)*l.N4};function o(u,c,f){switch(u){case a.Patterns.PATTERN000:return(c+f)%2===0;case a.Patterns.PATTERN001:return c%2===0;case a.Patterns.PATTERN010:return f%3===0;case a.Patterns.PATTERN011:return(c+f)%3===0;case a.Patterns.PATTERN100:return(Math.floor(c/2)+Math.floor(f/3))%2===0;case a.Patterns.PATTERN101:return c*f%2+c*f%3===0;case a.Patterns.PATTERN110:return(c*f%2+c*f%3)%2===0;case a.Patterns.PATTERN111:return(c*f%3+(c+f)%2)%2===0;default:throw new Error("bad maskPattern:"+u)}}a.applyMask=function(c,f){const d=f.size;for(let m=0;m<d;m++)for(let h=0;h<d;h++)f.isReserved(h,m)||f.xor(h,m,o(c,h,m))},a.getBestMask=function(c,f){const d=Object.keys(a.Patterns).length;let m=0,h=1/0;for(let g=0;g<d;g++){f(g),a.applyMask(g,c);const y=a.getPenaltyN1(c)+a.getPenaltyN2(c)+a.getPenaltyN3(c)+a.getPenaltyN4(c);a.applyMask(g,c),y<h&&(h=y,m=g)}return m}}(Lc)),Lc}var Xo={},ep;function Tg(){if(ep)return Xo;ep=1;const a=Af(),l=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Xo.getBlocksCount=function(c,f){switch(f){case a.L:return l[(c-1)*4+0];case a.M:return l[(c-1)*4+1];case a.Q:return l[(c-1)*4+2];case a.H:return l[(c-1)*4+3];default:return}},Xo.getTotalCodewordsCount=function(c,f){switch(f){case a.L:return o[(c-1)*4+0];case a.M:return o[(c-1)*4+1];case a.Q:return o[(c-1)*4+2];case a.H:return o[(c-1)*4+3];default:return}},Xo}var Bc={},gi={},tp;function ox(){if(tp)return gi;tp=1;const a=new Uint8Array(512),l=new Uint8Array(256);return function(){let u=1;for(let c=0;c<255;c++)a[c]=u,l[u]=c,u<<=1,u&256&&(u^=285);for(let c=255;c<512;c++)a[c]=a[c-255]}(),gi.log=function(u){if(u<1)throw new Error("log("+u+")");return l[u]},gi.exp=function(u){return a[u]},gi.mul=function(u,c){return u===0||c===0?0:a[l[u]+l[c]]},gi}var np;function ux(){return np||(np=1,function(a){const l=ox();a.mul=function(u,c){const f=new Uint8Array(u.length+c.length-1);for(let d=0;d<u.length;d++)for(let m=0;m<c.length;m++)f[d+m]^=l.mul(u[d],c[m]);return f},a.mod=function(u,c){let f=new Uint8Array(u);for(;f.length-c.length>=0;){const d=f[0];for(let h=0;h<c.length;h++)f[h]^=l.mul(c[h],d);let m=0;for(;m<f.length&&f[m]===0;)m++;f=f.slice(m)}return f},a.generateECPolynomial=function(u){let c=new Uint8Array([1]);for(let f=0;f<u;f++)c=a.mul(c,new Uint8Array([1,l.exp(f)]));return c}}(Bc)),Bc}var qc,ap;function sx(){if(ap)return qc;ap=1;const a=ux();function l(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return l.prototype.initialize=function(u){this.degree=u,this.genPoly=a.generateECPolynomial(this.degree)},l.prototype.encode=function(u){if(!this.genPoly)throw new Error("Encoder not initialized");const c=new Uint8Array(u.length+this.degree);c.set(u);const f=a.mod(c,this.genPoly),d=this.degree-f.length;if(d>0){const m=new Uint8Array(this.degree);return m.set(f,d),m}return f},qc=l,qc}var Hc={},Vc={},Yc={},rp;function Mg(){return rp||(rp=1,Yc.isValid=function(l){return!isNaN(l)&&l>=1&&l<=40}),Yc}var Pn={},lp;function Ng(){if(lp)return Pn;lp=1;const a="[0-9]+",l="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const u="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;Pn.KANJI=new RegExp(o,"g"),Pn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Pn.BYTE=new RegExp(u,"g"),Pn.NUMERIC=new RegExp(a,"g"),Pn.ALPHANUMERIC=new RegExp(l,"g");const c=new RegExp("^"+o+"$"),f=new RegExp("^"+a+"$"),d=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Pn.testKanji=function(h){return c.test(h)},Pn.testNumeric=function(h){return f.test(h)},Pn.testAlphanumeric=function(h){return d.test(h)},Pn}var ip;function Ar(){return ip||(ip=1,function(a){const l=Mg(),o=Ng();a.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},a.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},a.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},a.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},a.MIXED={bit:-1},a.getCharCountIndicator=function(f,d){if(!f.ccBits)throw new Error("Invalid mode: "+f);if(!l.isValid(d))throw new Error("Invalid version: "+d);return d>=1&&d<10?f.ccBits[0]:d<27?f.ccBits[1]:f.ccBits[2]},a.getBestModeForData=function(f){return o.testNumeric(f)?a.NUMERIC:o.testAlphanumeric(f)?a.ALPHANUMERIC:o.testKanji(f)?a.KANJI:a.BYTE},a.toString=function(f){if(f&&f.id)return f.id;throw new Error("Invalid mode")},a.isValid=function(f){return f&&f.bit&&f.ccBits};function u(c){if(typeof c!="string")throw new Error("Param is not a string");switch(c.toLowerCase()){case"numeric":return a.NUMERIC;case"alphanumeric":return a.ALPHANUMERIC;case"kanji":return a.KANJI;case"byte":return a.BYTE;default:throw new Error("Unknown mode: "+c)}}a.from=function(f,d){if(a.isValid(f))return f;try{return u(f)}catch{return d}}}(Vc)),Vc}var op;function cx(){return op||(op=1,function(a){const l=Er(),o=Tg(),u=Af(),c=Ar(),f=Mg(),d=7973,m=l.getBCHDigit(d);function h(x,A,T){for(let _=1;_<=40;_++)if(A<=a.getCapacity(_,T,x))return _}function g(x,A){return c.getCharCountIndicator(x,A)+4}function y(x,A){let T=0;return x.forEach(function(_){const P=g(_.mode,A);T+=P+_.getBitsLength()}),T}function E(x,A){for(let T=1;T<=40;T++)if(y(x,T)<=a.getCapacity(T,A,c.MIXED))return T}a.from=function(A,T){return f.isValid(A)?parseInt(A,10):T},a.getCapacity=function(A,T,_){if(!f.isValid(A))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=c.BYTE);const P=l.getSymbolTotalCodewords(A),j=o.getTotalCodewordsCount(A,T),X=(P-j)*8;if(_===c.MIXED)return X;const Y=X-g(_,A);switch(_){case c.NUMERIC:return Math.floor(Y/10*3);case c.ALPHANUMERIC:return Math.floor(Y/11*2);case c.KANJI:return Math.floor(Y/13);case c.BYTE:default:return Math.floor(Y/8)}},a.getBestVersionForData=function(A,T){let _;const P=u.from(T,u.M);if(Array.isArray(A)){if(A.length>1)return E(A,P);if(A.length===0)return 1;_=A[0]}else _=A;return h(_.mode,_.getLength(),P)},a.getEncodedBits=function(A){if(!f.isValid(A)||A<7)throw new Error("Invalid QR Code version");let T=A<<12;for(;l.getBCHDigit(T)-m>=0;)T^=d<<l.getBCHDigit(T)-m;return A<<12|T}}(Hc)),Hc}var Pc={},up;function fx(){if(up)return Pc;up=1;const a=Er(),l=1335,o=21522,u=a.getBCHDigit(l);return Pc.getEncodedBits=function(f,d){const m=f.bit<<3|d;let h=m<<10;for(;a.getBCHDigit(h)-u>=0;)h^=l<<a.getBCHDigit(h)-u;return(m<<10|h)^o},Pc}var Gc={},Xc,sp;function dx(){if(sp)return Xc;sp=1;const a=Ar();function l(o){this.mode=a.NUMERIC,this.data=o.toString()}return l.getBitsLength=function(u){return 10*Math.floor(u/3)+(u%3?u%3*3+1:0)},l.prototype.getLength=function(){return this.data.length},l.prototype.getBitsLength=function(){return l.getBitsLength(this.data.length)},l.prototype.write=function(u){let c,f,d;for(c=0;c+3<=this.data.length;c+=3)f=this.data.substr(c,3),d=parseInt(f,10),u.put(d,10);const m=this.data.length-c;m>0&&(f=this.data.substr(c),d=parseInt(f,10),u.put(d,m*3+1))},Xc=l,Xc}var Qc,cp;function hx(){if(cp)return Qc;cp=1;const a=Ar(),l=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(u){this.mode=a.ALPHANUMERIC,this.data=u}return o.getBitsLength=function(c){return 11*Math.floor(c/2)+6*(c%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(c){let f;for(f=0;f+2<=this.data.length;f+=2){let d=l.indexOf(this.data[f])*45;d+=l.indexOf(this.data[f+1]),c.put(d,11)}this.data.length%2&&c.put(l.indexOf(this.data[f]),6)},Qc=o,Qc}var Zc,fp;function mx(){if(fp)return Zc;fp=1;const a=Ar();function l(o){this.mode=a.BYTE,typeof o=="string"?this.data=new TextEncoder().encode(o):this.data=new Uint8Array(o)}return l.getBitsLength=function(u){return u*8},l.prototype.getLength=function(){return this.data.length},l.prototype.getBitsLength=function(){return l.getBitsLength(this.data.length)},l.prototype.write=function(o){for(let u=0,c=this.data.length;u<c;u++)o.put(this.data[u],8)},Zc=l,Zc}var Fc,dp;function px(){if(dp)return Fc;dp=1;const a=Ar(),l=Er();function o(u){this.mode=a.KANJI,this.data=u}return o.getBitsLength=function(c){return c*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(u){let c;for(c=0;c<this.data.length;c++){let f=l.toSJIS(this.data[c]);if(f>=33088&&f<=40956)f-=33088;else if(f>=57408&&f<=60351)f-=49472;else throw new Error("Invalid SJIS character: "+this.data[c]+`
Make sure your charset is UTF-8`);f=(f>>>8&255)*192+(f&255),u.put(f,13)}},Fc=o,Fc}var Kc={exports:{}},hp;function gx(){return hp||(hp=1,function(a){var l={single_source_shortest_paths:function(o,u,c){var f={},d={};d[u]=0;var m=l.PriorityQueue.make();m.push(u,0);for(var h,g,y,E,x,A,T,_,P;!m.empty();){h=m.pop(),g=h.value,E=h.cost,x=o[g]||{};for(y in x)x.hasOwnProperty(y)&&(A=x[y],T=E+A,_=d[y],P=typeof d[y]>"u",(P||_>T)&&(d[y]=T,m.push(y,T),f[y]=g))}if(typeof c<"u"&&typeof d[c]>"u"){var j=["Could not find a path from ",u," to ",c,"."].join("");throw new Error(j)}return f},extract_shortest_path_from_predecessor_list:function(o,u){for(var c=[],f=u;f;)c.push(f),o[f],f=o[f];return c.reverse(),c},find_path:function(o,u,c){var f=l.single_source_shortest_paths(o,u,c);return l.extract_shortest_path_from_predecessor_list(f,c)},PriorityQueue:{make:function(o){var u=l.PriorityQueue,c={},f;o=o||{};for(f in u)u.hasOwnProperty(f)&&(c[f]=u[f]);return c.queue=[],c.sorter=o.sorter||u.default_sorter,c},default_sorter:function(o,u){return o.cost-u.cost},push:function(o,u){var c={value:o,cost:u};this.queue.push(c),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};a.exports=l}(Kc)),Kc.exports}var mp;function vx(){return mp||(mp=1,function(a){const l=Ar(),o=dx(),u=hx(),c=mx(),f=px(),d=Ng(),m=Er(),h=gx();function g(j){return unescape(encodeURIComponent(j)).length}function y(j,X,Y){const $=[];let K;for(;(K=j.exec(Y))!==null;)$.push({data:K[0],index:K.index,mode:X,length:K[0].length});return $}function E(j){const X=y(d.NUMERIC,l.NUMERIC,j),Y=y(d.ALPHANUMERIC,l.ALPHANUMERIC,j);let $,K;return m.isKanjiModeEnabled()?($=y(d.BYTE,l.BYTE,j),K=y(d.KANJI,l.KANJI,j)):($=y(d.BYTE_KANJI,l.BYTE,j),K=[]),X.concat(Y,$,K).sort(function(ee,ae){return ee.index-ae.index}).map(function(ee){return{data:ee.data,mode:ee.mode,length:ee.length}})}function x(j,X){switch(X){case l.NUMERIC:return o.getBitsLength(j);case l.ALPHANUMERIC:return u.getBitsLength(j);case l.KANJI:return f.getBitsLength(j);case l.BYTE:return c.getBitsLength(j)}}function A(j){return j.reduce(function(X,Y){const $=X.length-1>=0?X[X.length-1]:null;return $&&$.mode===Y.mode?(X[X.length-1].data+=Y.data,X):(X.push(Y),X)},[])}function T(j){const X=[];for(let Y=0;Y<j.length;Y++){const $=j[Y];switch($.mode){case l.NUMERIC:X.push([$,{data:$.data,mode:l.ALPHANUMERIC,length:$.length},{data:$.data,mode:l.BYTE,length:$.length}]);break;case l.ALPHANUMERIC:X.push([$,{data:$.data,mode:l.BYTE,length:$.length}]);break;case l.KANJI:X.push([$,{data:$.data,mode:l.BYTE,length:g($.data)}]);break;case l.BYTE:X.push([{data:$.data,mode:l.BYTE,length:g($.data)}])}}return X}function _(j,X){const Y={},$={start:{}};let K=["start"];for(let N=0;N<j.length;N++){const ee=j[N],ae=[];for(let Q=0;Q<ee.length;Q++){const de=ee[Q],ce=""+N+Q;ae.push(ce),Y[ce]={node:de,lastCount:0},$[ce]={};for(let te=0;te<K.length;te++){const ie=K[te];Y[ie]&&Y[ie].node.mode===de.mode?($[ie][ce]=x(Y[ie].lastCount+de.length,de.mode)-x(Y[ie].lastCount,de.mode),Y[ie].lastCount+=de.length):(Y[ie]&&(Y[ie].lastCount=de.length),$[ie][ce]=x(de.length,de.mode)+4+l.getCharCountIndicator(de.mode,X))}}K=ae}for(let N=0;N<K.length;N++)$[K[N]].end=0;return{map:$,table:Y}}function P(j,X){let Y;const $=l.getBestModeForData(j);if(Y=l.from(X,$),Y!==l.BYTE&&Y.bit<$.bit)throw new Error('"'+j+'" cannot be encoded with mode '+l.toString(Y)+`.
 Suggested mode is: `+l.toString($));switch(Y===l.KANJI&&!m.isKanjiModeEnabled()&&(Y=l.BYTE),Y){case l.NUMERIC:return new o(j);case l.ALPHANUMERIC:return new u(j);case l.KANJI:return new f(j);case l.BYTE:return new c(j)}}a.fromArray=function(X){return X.reduce(function(Y,$){return typeof $=="string"?Y.push(P($,null)):$.data&&Y.push(P($.data,$.mode)),Y},[])},a.fromString=function(X,Y){const $=E(X,m.isKanjiModeEnabled()),K=T($),N=_(K,Y),ee=h.find_path(N.map,"start","end"),ae=[];for(let Q=1;Q<ee.length-1;Q++)ae.push(N.table[ee[Q]].node);return a.fromArray(A(ae))},a.rawSplit=function(X){return a.fromArray(E(X,m.isKanjiModeEnabled()))}}(Gc)),Gc}var pp;function bx(){if(pp)return Dc;pp=1;const a=Er(),l=Af(),o=nx(),u=ax(),c=rx(),f=lx(),d=ix(),m=Tg(),h=sx(),g=cx(),y=fx(),E=Ar(),x=vx();function A(N,ee){const ae=N.size,Q=f.getPositions(ee);for(let de=0;de<Q.length;de++){const ce=Q[de][0],te=Q[de][1];for(let ie=-1;ie<=7;ie++)if(!(ce+ie<=-1||ae<=ce+ie))for(let re=-1;re<=7;re++)te+re<=-1||ae<=te+re||(ie>=0&&ie<=6&&(re===0||re===6)||re>=0&&re<=6&&(ie===0||ie===6)||ie>=2&&ie<=4&&re>=2&&re<=4?N.set(ce+ie,te+re,!0,!0):N.set(ce+ie,te+re,!1,!0))}}function T(N){const ee=N.size;for(let ae=8;ae<ee-8;ae++){const Q=ae%2===0;N.set(ae,6,Q,!0),N.set(6,ae,Q,!0)}}function _(N,ee){const ae=c.getPositions(ee);for(let Q=0;Q<ae.length;Q++){const de=ae[Q][0],ce=ae[Q][1];for(let te=-2;te<=2;te++)for(let ie=-2;ie<=2;ie++)te===-2||te===2||ie===-2||ie===2||te===0&&ie===0?N.set(de+te,ce+ie,!0,!0):N.set(de+te,ce+ie,!1,!0)}}function P(N,ee){const ae=N.size,Q=g.getEncodedBits(ee);let de,ce,te;for(let ie=0;ie<18;ie++)de=Math.floor(ie/3),ce=ie%3+ae-8-3,te=(Q>>ie&1)===1,N.set(de,ce,te,!0),N.set(ce,de,te,!0)}function j(N,ee,ae){const Q=N.size,de=y.getEncodedBits(ee,ae);let ce,te;for(ce=0;ce<15;ce++)te=(de>>ce&1)===1,ce<6?N.set(ce,8,te,!0):ce<8?N.set(ce+1,8,te,!0):N.set(Q-15+ce,8,te,!0),ce<8?N.set(8,Q-ce-1,te,!0):ce<9?N.set(8,15-ce-1+1,te,!0):N.set(8,15-ce-1,te,!0);N.set(Q-8,8,1,!0)}function X(N,ee){const ae=N.size;let Q=-1,de=ae-1,ce=7,te=0;for(let ie=ae-1;ie>0;ie-=2)for(ie===6&&ie--;;){for(let re=0;re<2;re++)if(!N.isReserved(de,ie-re)){let ye=!1;te<ee.length&&(ye=(ee[te]>>>ce&1)===1),N.set(de,ie-re,ye),ce--,ce===-1&&(te++,ce=7)}if(de+=Q,de<0||ae<=de){de-=Q,Q=-Q;break}}}function Y(N,ee,ae){const Q=new o;ae.forEach(function(re){Q.put(re.mode.bit,4),Q.put(re.getLength(),E.getCharCountIndicator(re.mode,N)),re.write(Q)});const de=a.getSymbolTotalCodewords(N),ce=m.getTotalCodewordsCount(N,ee),te=(de-ce)*8;for(Q.getLengthInBits()+4<=te&&Q.put(0,4);Q.getLengthInBits()%8!==0;)Q.putBit(0);const ie=(te-Q.getLengthInBits())/8;for(let re=0;re<ie;re++)Q.put(re%2?17:236,8);return $(Q,N,ee)}function $(N,ee,ae){const Q=a.getSymbolTotalCodewords(ee),de=m.getTotalCodewordsCount(ee,ae),ce=Q-de,te=m.getBlocksCount(ee,ae),ie=Q%te,re=te-ie,ye=Math.floor(Q/te),C=Math.floor(ce/te),ne=C+1,me=ye-C,_e=new h(me);let S=0;const Z=new Array(te),se=new Array(te);let le=0;const be=new Uint8Array(N.buffer);for(let yt=0;yt<te;yt++){const lt=yt<re?C:ne;Z[yt]=be.slice(S,S+lt),se[yt]=_e.encode(Z[yt]),S+=lt,le=Math.max(le,lt)}const Ue=new Uint8Array(Q);let Se=0,Ie,Be;for(Ie=0;Ie<le;Ie++)for(Be=0;Be<te;Be++)Ie<Z[Be].length&&(Ue[Se++]=Z[Be][Ie]);for(Ie=0;Ie<me;Ie++)for(Be=0;Be<te;Be++)Ue[Se++]=se[Be][Ie];return Ue}function K(N,ee,ae,Q){let de;if(Array.isArray(N))de=x.fromArray(N);else if(typeof N=="string"){let ye=ee;if(!ye){const C=x.rawSplit(N);ye=g.getBestVersionForData(C,ae)}de=x.fromString(N,ye||40)}else throw new Error("Invalid data");const ce=g.getBestVersionForData(de,ae);if(!ce)throw new Error("The amount of data is too big to be stored in a QR Code");if(!ee)ee=ce;else if(ee<ce)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+ce+`.
`);const te=Y(ee,ae,de),ie=a.getSymbolSize(ee),re=new u(ie);return A(re,ee),T(re),_(re,ee),j(re,ae,0),ee>=7&&P(re,ee),X(re,te),isNaN(Q)&&(Q=d.getBestMask(re,j.bind(null,re,ae))),d.applyMask(Q,re),j(re,ae,Q),{modules:re,version:ee,errorCorrectionLevel:ae,maskPattern:Q,segments:de}}return Dc.create=function(ee,ae){if(typeof ee>"u"||ee==="")throw new Error("No input text");let Q=l.M,de,ce;return typeof ae<"u"&&(Q=l.from(ae.errorCorrectionLevel,l.M),de=g.from(ae.version),ce=d.from(ae.maskPattern),ae.toSJISFunc&&a.setToSJISFunction(ae.toSJISFunc)),K(ee,de,Q,ce)},Dc}var Jc={},$c={},gp;function Og(){return gp||(gp=1,function(a){function l(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let u=o.slice().replace("#","").split("");if(u.length<3||u.length===5||u.length>8)throw new Error("Invalid hex color: "+o);(u.length===3||u.length===4)&&(u=Array.prototype.concat.apply([],u.map(function(f){return[f,f]}))),u.length===6&&u.push("F","F");const c=parseInt(u.join(""),16);return{r:c>>24&255,g:c>>16&255,b:c>>8&255,a:c&255,hex:"#"+u.slice(0,6).join("")}}a.getOptions=function(u){u||(u={}),u.color||(u.color={});const c=typeof u.margin>"u"||u.margin===null||u.margin<0?4:u.margin,f=u.width&&u.width>=21?u.width:void 0,d=u.scale||4;return{width:f,scale:f?4:d,margin:c,color:{dark:l(u.color.dark||"#000000ff"),light:l(u.color.light||"#ffffffff")},type:u.type,rendererOpts:u.rendererOpts||{}}},a.getScale=function(u,c){return c.width&&c.width>=u+c.margin*2?c.width/(u+c.margin*2):c.scale},a.getImageWidth=function(u,c){const f=a.getScale(u,c);return Math.floor((u+c.margin*2)*f)},a.qrToImageData=function(u,c,f){const d=c.modules.size,m=c.modules.data,h=a.getScale(d,f),g=Math.floor((d+f.margin*2)*h),y=f.margin*h,E=[f.color.light,f.color.dark];for(let x=0;x<g;x++)for(let A=0;A<g;A++){let T=(x*g+A)*4,_=f.color.light;if(x>=y&&A>=y&&x<g-y&&A<g-y){const P=Math.floor((x-y)/h),j=Math.floor((A-y)/h);_=E[m[P*d+j]?1:0]}u[T++]=_.r,u[T++]=_.g,u[T++]=_.b,u[T]=_.a}}}($c)),$c}var vp;function yx(){return vp||(vp=1,function(a){const l=Og();function o(c,f,d){c.clearRect(0,0,f.width,f.height),f.style||(f.style={}),f.height=d,f.width=d,f.style.height=d+"px",f.style.width=d+"px"}function u(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}a.render=function(f,d,m){let h=m,g=d;typeof h>"u"&&(!d||!d.getContext)&&(h=d,d=void 0),d||(g=u()),h=l.getOptions(h);const y=l.getImageWidth(f.modules.size,h),E=g.getContext("2d"),x=E.createImageData(y,y);return l.qrToImageData(x.data,f,h),o(E,g,y),E.putImageData(x,0,0),g},a.renderToDataURL=function(f,d,m){let h=m;typeof h>"u"&&(!d||!d.getContext)&&(h=d,d=void 0),h||(h={});const g=a.render(f,d,h),y=h.type||"image/png",E=h.rendererOpts||{};return g.toDataURL(y,E.quality)}}(Jc)),Jc}var Wc={},bp;function xx(){if(bp)return Wc;bp=1;const a=Og();function l(c,f){const d=c.a/255,m=f+'="'+c.hex+'"';return d<1?m+" "+f+'-opacity="'+d.toFixed(2).slice(1)+'"':m}function o(c,f,d){let m=c+f;return typeof d<"u"&&(m+=" "+d),m}function u(c,f,d){let m="",h=0,g=!1,y=0;for(let E=0;E<c.length;E++){const x=Math.floor(E%f),A=Math.floor(E/f);!x&&!g&&(g=!0),c[E]?(y++,E>0&&x>0&&c[E-1]||(m+=g?o("M",x+d,.5+A+d):o("m",h,0),h=0,g=!1),x+1<f&&c[E+1]||(m+=o("h",y),y=0)):h++}return m}return Wc.render=function(f,d,m){const h=a.getOptions(d),g=f.modules.size,y=f.modules.data,E=g+h.margin*2,x=h.color.light.a?"<path "+l(h.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",A="<path "+l(h.color.dark,"stroke")+' d="'+u(y,g,h.margin)+'"/>',T='viewBox="0 0 '+E+" "+E+'"',P='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+T+' shape-rendering="crispEdges">'+x+A+`</svg>
`;return typeof m=="function"&&m(null,P),P},Wc}var yp;function wx(){if(yp)return ul;yp=1;const a=tx(),l=bx(),o=yx(),u=xx();function c(f,d,m,h,g){const y=[].slice.call(arguments,1),E=y.length,x=typeof y[E-1]=="function";if(!x&&!a())throw new Error("Callback required as last argument");if(x){if(E<2)throw new Error("Too few arguments provided");E===2?(g=m,m=d,d=h=void 0):E===3&&(d.getContext&&typeof g>"u"?(g=h,h=void 0):(g=h,h=m,m=d,d=void 0))}else{if(E<1)throw new Error("Too few arguments provided");return E===1?(m=d,d=h=void 0):E===2&&!d.getContext&&(h=m,m=d,d=void 0),new Promise(function(A,T){try{const _=l.create(m,h);A(f(_,d,h))}catch(_){T(_)}})}try{const A=l.create(m,h);g(null,f(A,d,h))}catch(A){g(A)}}return ul.create=l.create,ul.toCanvas=c.bind(null,o.render),ul.toDataURL=c.bind(null,o.renderToDataURL),ul.toString=c.bind(null,function(f,d,m){return u.render(f,m)}),ul}var Sx=wx();const Ex=Fp(Sx),_g=({onClose:a})=>{const l=B.useRef(null),o="https://spice-garden-qr-menu.netlify.app/";B.useEffect(()=>{Ex.toCanvas(l.current,o,{width:300},f=>{f&&console.error(f)})},[]);const u=()=>{const d=l.current.toDataURL("image/png"),m=document.createElement("a");m.href=d,m.download="Foodii-Restro-Qr-Menu.png",m.click()},c=async()=>{l.current.toBlob(async d=>{const m=new File([d],"qr-code.png",{type:"image/png"});if(navigator.share)try{await navigator.share({title:"QR Code Menu",text:"Scan this QR code to see the menu!",files:[m]})}catch(h){console.error("Share failed:",h)}else alert("Sharing is not supported on this browser.")})};return v.jsxs("div",{className:"w-[90vw] max-w-md flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg relative",children:[v.jsx("button",{onClick:a,className:"absolute top-4 right-4",children:v.jsx(ex,{size:28})}),v.jsxs("div",{className:"flex flex-col items-center gap-2",children:[v.jsx("h2",{className:"text-xl font-bold",children:"QR Code Menu"}),v.jsx("p",{className:"text-sm text-gray-600",children:"Scan this QR code with your phone to access our digital menu"})]}),v.jsx("canvas",{ref:l}),v.jsxs("div",{className:"flex gap-4",children:[v.jsxs("button",{className:"flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-lg",onClick:u,children:[v.jsx(E2,{size:16})," Download"]}),v.jsxs("button",{className:"flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg",onClick:c,children:[v.jsx(G2,{size:16})," Share"]})]}),v.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[v.jsx(R2,{size:16})," ",o]})]})},Ax=()=>{const[a,l]=B.useState(!1),[o,u]=B.useState(!1),c=()=>l(!a);return B.useEffect(()=>{const f=()=>{window.innerWidth>1024&&l(!1)};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),v.jsxs(v.Fragment,{children:[v.jsxs("nav",{className:"sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50 px-4 py-2 flex justify-between items-center",children:[v.jsx("div",{className:"flex items-center",children:v.jsx("img",{src:c2,alt:"Logo",className:"w-[30vh]"})}),v.jsxs("div",{className:"relative w-8 h-6 flex flex-col justify-between cursor-pointer opacity-80 mr-2 lg:hidden",onClick:c,children:[v.jsx("span",{className:`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${a?"rotate-45 translate-y-[9px]":""}`}),v.jsx("span",{className:`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${a?"opacity-0":""}`}),v.jsx("span",{className:`h-[3px] w-full bg-gray-800 dark:bg-white rounded transition-all duration-300 ${a?"-rotate-45 -translate-y-[9px]":""}`})]}),v.jsxs("ul",{className:`font-medium z-40 transition-all duration-500 ease-in-out
          lg:flex lg:flex-row lg:gap-2 lg:static lg:w-auto lg:max-h-none lg:opacity-100 lg:pointer-events-auto lg:p-0 lg:bg-transparent lg:shadow-none
          ${a?"flex flex-col p-2 absolute top-full left-0 w-full max-h-[500px] opacity-100 pointer-events-auto bg-white/10 dark:bg-gray-900/70 backdrop-blur-md shadow-md":"hidden"}`,children:[[{to:"/",label:"Home"},{to:"/menu",label:"Menu"},{to:"/aboutshop",label:"About"},{to:"/contact",label:"Contact & Feedback"}].map(({to:f,label:d})=>v.jsx("li",{className:"bg-white/20 dark:bg-gray-800/40",children:v.jsx(Qa,{to:f,onClick:()=>l(!1),style:{textDecoration:"none"},className:"block px-4 py-2 text-2xl text-black dark:text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:text-red-500",children:d})},d)),v.jsx("li",{children:v.jsxs("button",{onClick:()=>u(!0),style:{borderRadius:"5px"},className:"px-4 py-2 text-2xl bg-orange-500  text-white  flex items-center gap-2 hover:bg-orange-400 transition duration-300",children:[v.jsx(H2,{})," QR Code"]})})]})]}),o&&v.jsx("div",{className:"fixed inset-0 bg-black/ backdrop-blur-sm flex justify-center items-center z-50",children:v.jsx("div",{className:"bg-white rounded-2xl shadow-xl p-4 relative",children:v.jsx(_g,{onClose:()=>u(!1)})})})]})};var Qo=new Uint8Array(256);function Tx(a,l){let o=0,u=[],c=0,f=a.length,d=l.charCodeAt(0);for(let m=0;m<f;m++){let h=a.charCodeAt(m);if(o===0&&h===d){u.push(a.slice(c,m)),c=m+1;continue}switch(h){case 92:m+=1;break;case 39:case 34:for(;++m<f;){let g=a.charCodeAt(m);if(g===92){m+=1;continue}if(g===h)break}break;case 40:Qo[o]=41,o++;break;case 91:Qo[o]=93,o++;break;case 123:Qo[o]=125,o++;break;case 93:case 125:case 41:o>0&&h===Qo[o-1]&&o--;break}}return u.push(a.slice(c)),u}var Tf=class extends Map{constructor(a){super(),this.factory=a}get(a){let l=super.get(a);return l===void 0&&(l=this.factory(a,this),this.set(a,l)),l}};function Ic(a){return{kind:"word",value:a}}function Mx(a,l){return{kind:"function",value:a,nodes:l}}function Nx(a){return{kind:"separator",value:a}}function ru(a,l,o=null){for(let u=0;u<a.length;u++){let c=a[u],f=!1,d=0,m=l(c,{parent:o,replaceWith(h){f||(f=!0,Array.isArray(h)?h.length===0?(a.splice(u,1),d=0):h.length===1?(a[u]=h[0],d=1):(a.splice(u,1,...h),d=h.length):a[u]=h)}})??0;if(f){m===0?u--:u+=d-1;continue}if(m===2||m!==1&&c.kind==="function"&&ru(c.nodes,l,c)===2)return 2}}function du(a){let l="";for(let o of a)switch(o.kind){case"word":case"separator":{l+=o.value;break}case"function":l+=o.value+"("+du(o.nodes)+")"}return l}var xp=92,Ox=41,wp=58,Sp=44,_x=34,Ep=61,Ap=62,Tp=60,Mp=10,Rx=40,Dx=39,Np=47,Op=32,_p=9;function hu(a){a=a.replaceAll(`\r
`,`
`);let l=[],o=[],u=null,c="",f;for(let d=0;d<a.length;d++){let m=a.charCodeAt(d);switch(m){case xp:{c+=a[d]+a[d+1],d++;break}case wp:case Sp:case Ep:case Ap:case Tp:case Mp:case Np:case Op:case _p:{if(c.length>0){let E=Ic(c);u?u.nodes.push(E):l.push(E),c=""}let h=d,g=d+1;for(;g<a.length&&(f=a.charCodeAt(g),!(f!==wp&&f!==Sp&&f!==Ep&&f!==Ap&&f!==Tp&&f!==Mp&&f!==Np&&f!==Op&&f!==_p));g++);d=g-1;let y=Nx(a.slice(h,g));u?u.nodes.push(y):l.push(y);break}case Dx:case _x:{let h=d;for(let g=d+1;g<a.length;g++)if(f=a.charCodeAt(g),f===xp)g+=1;else if(f===m){d=g;break}c+=a.slice(h,d+1);break}case Rx:{let h=Mx(c,[]);c="",u?u.nodes.push(h):l.push(h),o.push(h),u=h;break}case Ox:{let h=o.pop();if(c.length>0){let g=Ic(c);h==null||h.nodes.push(g),c=""}o.length>0?u=o[o.length-1]:u=null;break}default:c+=String.fromCharCode(m)}}return c.length>0&&l.push(Ic(c)),l}new Tf(a=>{let l=hu(a),o=new Set;return ru(l,(u,{parent:c})=>{let f=c===null?l:c.nodes??[];if(u.kind==="word"&&(u.value==="+"||u.value==="-"||u.value==="*"||u.value==="/")){let d=f.indexOf(u)??-1;if(d===-1)return;let m=f[d-1];if((m==null?void 0:m.kind)!=="separator"||m.value!==" ")return;let h=f[d+1];if((h==null?void 0:h.kind)!=="separator"||h.value!==" ")return;o.add(m),o.add(h)}else u.kind==="separator"&&u.value.trim()==="/"?u.value="/":u.kind==="separator"&&u.value.length>0&&u.value.trim()===""?(f[0]===u||f[f.length-1]===u)&&o.add(u):u.kind==="separator"&&u.value.trim()===","&&(u.value=",")}),o.size>0&&ru(l,(u,{replaceWith:c})=>{o.has(u)&&(o.delete(u),c([]))}),sf(l),du(l)});new Tf(a=>{let l=hu(a);return l.length===3&&l[0].kind==="word"&&l[0].value==="&"&&l[1].kind==="separator"&&l[1].value===":"&&l[2].kind==="function"&&l[2].value==="is"?du(l[2].nodes):a});function sf(a){for(let l of a)switch(l.kind){case"function":{if(l.value==="url"||l.value.endsWith("_url")){l.value=vi(l.value);break}if(l.value==="var"||l.value.endsWith("_var")||l.value==="theme"||l.value.endsWith("_theme")){l.value=vi(l.value);for(let o=0;o<l.nodes.length;o++)sf([l.nodes[o]]);break}l.value=vi(l.value),sf(l.nodes);break}case"separator":l.value=vi(l.value);break;case"word":{(l.value[0]!=="-"||l.value[1]!=="-")&&(l.value=vi(l.value));break}default:jx(l)}}new Tf(a=>{let l=hu(a);return l.length===1&&l[0].kind==="function"&&l[0].value==="var"});function jx(a){throw new Error(`Unexpected value: ${a}`)}function vi(a){return a.replaceAll("_",String.raw`\_`).replaceAll(" ","_")}function kx(a,l){if(l===null)return a;let o=Number(l);return Number.isNaN(o)||(l=`${o*100}%`),l==="100%"?a:`color-mix(in oklab, ${a} ${l}, transparent)`}var Cx={"--alpha":zx,"--spacing":Ux,"--theme":Lx,theme:Bx};function zx(a,l,o,...u){let[c,f]=Tx(o,"/").map(d=>d.trim());if(!c||!f)throw new Error(`The --alpha(…) function requires a color and an alpha value, e.g.: \`--alpha(${c||"var(--my-color)"} / ${f||"50%"})\``);if(u.length>0)throw new Error(`The --alpha(…) function only accepts one argument, e.g.: \`--alpha(${c||"var(--my-color)"} / ${f||"50%"})\``);return kx(c,f)}function Ux(a,l,o,...u){if(!o)throw new Error("The --spacing(…) function requires an argument, but received none.");if(u.length>0)throw new Error(`The --spacing(…) function only accepts a single argument, but received ${u.length+1}.`);let c=a.theme.resolve(null,["--spacing"]);if(!c)throw new Error("The --spacing(…) function requires that the `--spacing` theme variable exists, but it was not found.");return`calc(${c} * ${o})`}function Lx(a,l,o,...u){if(!o.startsWith("--"))throw new Error("The --theme(…) function can only be used with CSS variables from your theme.");let c=!1;o.endsWith(" inline")&&(c=!0,o=o.slice(0,-7)),l.kind==="at-rule"&&(c=!0);let f=a.resolveThemeValue(o,c);if(!f){if(u.length>0)return u.join(", ");throw new Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`)}if(u.length===0)return f;let d=u.join(", ");if(d==="initial")return f;if(f==="initial")return d;if(f.startsWith("var(")||f.startsWith("theme(")||f.startsWith("--theme(")){let m=hu(f);return Hx(m,d),du(m)}return f}function Bx(a,l,o,...u){o=qx(o);let c=a.resolveThemeValue(o);if(!c&&u.length>0)return u.join(", ");if(!c)throw new Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);return c}new RegExp(Object.keys(Cx).map(a=>`${a}\\(`).join("|"));function qx(a){if(a[0]!=="'"&&a[0]!=='"')return a;let l="",o=a[0];for(let u=1;u<a.length-1;u++){let c=a[u],f=a[u+1];c==="\\"&&(f===o||f==="\\")?(l+=f,u++):l+=c}return l}function Hx(a,l){ru(a,o=>{if(o.kind==="function"&&!(o.value!=="var"&&o.value!=="theme"&&o.value!=="--theme"))if(o.nodes.length===1)o.nodes.push({kind:"word",value:`, ${l}`});else{let u=o.nodes[o.nodes.length-1];u.kind==="word"&&u.value==="initial"&&(u.value=l)}})}var Vx=(a=>(a[a.None=0]="None",a[a.AtProperty=1]="AtProperty",a[a.ColorMix=2]="ColorMix",a[a.All=3]="All",a))(Vx||{}),Yx=(a=>(a[a.None=0]="None",a[a.AtApply=1]="AtApply",a[a.AtImport=2]="AtImport",a[a.JsPluginCompat=4]="JsPluginCompat",a[a.ThemeFunction=8]="ThemeFunction",a[a.Utilities=16]="Utilities",a[a.Variants=32]="Variants",a))(Yx||{});const Px=()=>v.jsxs("section",{className:"w-full",children:[v.jsxs("div",{className:"flex items-center bg-[#0d0d38]  px-4 flex-wrap justify-center gap-4 p-4 ",children:[v.jsx("span",{className:"text-2xl md:text-xl mx-auto font-semibold text-white",children:"Get connected with us on social networks:"}),v.jsxs("section",{className:"flex flex-row gap-2 ",children:[v.jsx(T2,{size:32,color:"#2f6fee",strokeWidth:.5,"aria-label":"Facebook",className:"transition-transform duration-300 hover:scale-105"}),v.jsx(O2,{size:32,color:"#ee2f95",strokeWidth:.5,"aria-label":"Instagram"}),v.jsx(K2,{size:32,color:"#2fc8ee",strokeWidth:.5,"aria-label":"Twitter"}),v.jsx(Pm,{size:32,color:"#2f4fee",strokeWidth:.5,"aria-label":"LinkedIn"})]})]}),v.jsxs("div",{className:"grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full bg-[#0d0d38] py-5 px-5",children:[v.jsxs("div",{className:"max-w-xs",children:[v.jsx("h5",{className:"text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2",children:v.jsx("span",{className:"text-orange-500",children:" About Spice Garden"})}),v.jsx("p",{className:"text-white",children:"Experience the finest culinary journey with our carefully crafted dishes made from fresh, locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage of traditional cooking."})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2",children:v.jsx("span",{className:"text-orange-500  capitalize",children:"product category"})}),v.jsx("ul",{className:"space-y-1 list-none",children:["Sweets","Lassi","South Indian Food","Thali","Snacks"].map(a=>v.jsx("li",{children:v.jsx(Qa,{to:"/menu",className:"text-white hover:font-semibold ",style:{textDecoration:"none"},children:a})},a))})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2",children:v.jsx("span",{className:"text-orange-500 capitalize",children:"useful links"})}),v.jsx("ul",{className:"space-y-1 list-none",children:["Menu","Shop Location","Offers","Services"].map(a=>v.jsx("li",{children:v.jsx(Qa,{to:"/",className:"text-white hover:font-semibold",style:{textDecoration:"none"},children:a})},a))})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-orange-500 border-b-2 border-[rgb(43,137,195)] mb-2",children:v.jsx("span",{className:"text-orange-500 capitalize",children:"contact"})}),v.jsxs("ul",{className:"space-y-2 list-none text-white",children:[v.jsxs("li",{className:"flex items-center gap-2",children:[v.jsx(Z2,{color:"#397fdb"})," Alpha 1, C-Market, Greater Noida, 201308"]}),v.jsxs("li",{className:"flex items-center gap-2",children:[v.jsx(Eg,{color:"#397fdb"})," XYZ123@gmail.com"]}),v.jsxs("li",{className:"flex items-center gap-2",children:[v.jsx(Pm,{color:"#397fdb"})," @Shopname"]}),v.jsxs("li",{className:"flex items-center gap-2",children:[v.jsx(Ag,{color:"#397fdb"})," +91-88******96"]})]})]})]}),v.jsx("div",{className:"bg-[#0d0d28] text-white text-center py-2",children:v.jsx("p",{children:"© 2025 all rights reserved || Foodii"})})]}),Gx=()=>v.jsxs(v.Fragment,{children:[v.jsx(Ax,{}),v.jsx(My,{}),v.jsx(Px,{})]}),Xx=[{id:"1",name:"Margherita Pizza",price:12.99,image:"https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Classic pizza with fresh mozzarella, tomato sauce, and basil",category:"Fast Food",isVeg:!0,isAvailable:!0,rating:4.5},{id:"2",name:"Chicken Biryani",price:15.99,image:"https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Aromatic basmati rice cooked with tender chicken and exotic spices",category:"Main Course",isVeg:!1,isAvailable:!0,rating:4.8},{id:"3",name:"Masala Dosa",price:8.99,image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Crispy crepe filled with spiced potato curry, served with chutney",category:"South Indian",isVeg:!0,isAvailable:!0,rating:4.6},{id:"4",name:"Chocolate Lava Cake",price:6.99,image:"https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Warm chocolate cake with molten chocolate center",category:"Desserts",isVeg:!0,isAvailable:!0,rating:4.7},{id:"5",name:"Fresh Mango Smoothie",price:4.99,image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Mango-Smoothie-4-2.jpg",description:"Refreshing smoothie made with fresh mangoes and yogurt",category:"Beverages",isVeg:!0,isAvailable:!0,rating:4.4},{id:"6",name:"Paneer Tikka",price:11.99,image:"https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",description:"Marinated cottage cheese cubes grilled to perfection",category:"Appetizers",isVeg:!0,isAvailable:!0,rating:4.5},{id:"7",name:"Fish and Chips",price:13.99,image:"https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg",description:"Crispy battered fish served with golden fries",category:"Fast Food",isVeg:!1,isAvailable:!1,rating:4.3},{id:"8",name:"Samosa Chaat",price:5.99,image:"https://b.zmtcdn.com/data/pictures/chains/9/20971369/21e576703869d306a21914819b0c6f25.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",description:"Crispy samosas topped with chutneys and yogurt",category:"Snacks",isVeg:!0,isAvailable:!0,rating:4.2},{id:"9",name:"Grilled Salmon",price:18.99,image:"https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2-960x1200.jpg",description:"Fresh salmon fillet grilled with herbs and lemon",category:"Main Course",isVeg:!1,isAvailable:!0,rating:4.9},{id:"10",name:"Idli Sambar",price:7.99,image:"https://img.freepik.com/premium-photo/south-indian-breakfast-recipe-idly-idli-rice-cake-served-with-coconut-chutney-sambar-selective-focus_466689-9815.jpg?w=1060",description:"Steamed rice cakes served with lentil curry and coconut chutney",category:"South Indian",isVeg:!0,isAvailable:!0,rating:4.4},{id:"11",name:"Caesar Salad",price:9.99,image:"https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Fresh romaine lettuce with parmesan cheese and croutons",category:"Appetizers",isVeg:!0,isAvailable:!0,rating:4.1},{id:"12",name:"Butter Chicken",price:16.99,image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.webp",description:"Tender chicken in rich, creamy tomato-based curry",category:"Main Course",isVeg:!1,isAvailable:!0,rating:4.8}],Qx={dish:Xx},Zx=()=>{const[a,l]=B.useState([]);return B.useEffect(()=>{l(Qx.dish)},[]),v.jsxs(v.Fragment,{children:[!a&&v.jsx("div",{children:" Loading..."}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-6 p-4   ",children:a.map(o=>v.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:v.jsxs("div",{className:"transition-transform duration-300 hover:scale-105",children:[v.jsx("img",{className:"h-48 w-full object-cover",src:o.image,alt:o.name}),v.jsxs("div",{className:"p-4",children:[v.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:o.name}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:o.description}),v.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[v.jsxs("span",{className:"text-lg font-bold text-green-600",children:["$",o.price]}),v.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${o.isVeg?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:o.isVeg?"Veg":"Non-Veg"})]}),v.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[v.jsx("span",{className:"text-sm text-gray-500",children:o.category}),v.jsxs("span",{className:"text-sm text-yellow-500",children:["⭐ ",o.rating]})]}),v.jsx("button",{disabled:!o.isAvailable,className:`mt-4 w-full px-4 py-2 rounded text-white transition-colors duration-200 ${o.isAvailable?"bg-blue-600 hover:bg-blue-700":"bg-gray-400 cursor-not-allowed"}`,children:o.isAvailable?"Order Now":"Unavailable"})]})]})},o.id))})]})},Fx="/assets/burger-DOlT8FyX.png",Kx="/assets/cocktail-CbZ1Mf8y.png",sl=[{id:1,image:"https://c4.wallpaperflare.com/wallpaper/875/1016/956/food-pizza-wallpaper-preview.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",title:" Spicy veg-Pizza",description:"🌶️ A spicy veg pizza is a fiery flavor explosion loaded with vibrant veggies and a kick that lingers deliciously."},{id:2,image:"https://i.pinimg.com/736x/95/40/de/9540de4dfa626f2165eed39474763fa4.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",title:"Blueberry Donuts",description:"🫐 Blueberry donuts are sweet, pillowy treats bursting with juicy berries and a glaze that glistens like morning dew."},{id:3,image:"https://www.kannammacooks.com/wp-content/uploads/white-sauce-pasta-with-cheese.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",title:"White sauce pasta with cheese",description:"🧄 White sauce pasta with cheese is a dreamy fusion of creamy garlic béchamel and gooey richness that hugs every twirl of pasta."},{id:4,image:"https://mealawe.com/wp-content/uploads/2025/01/Indian-Thali.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",title:"Desi Thali",description:"🍛 Desi thali food is a vibrant symphony of flavors served on a single platter, celebrating India’s rich culinary heritage with every bite."},{id:5,image:"https://srmsweets.com/online/wp-content/uploads/2022/07/38985.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",title:"Sweets",description:"🍬 Indian sweets are a dazzling celebration of tradition, bursting with rich flavors like cardamom, saffron, and ghee in every melt-in-your-mouth bite"}];function Jx(){const[a,l]=B.useState(0),[o,u]=B.useState(!0);B.useEffect(()=>{if(!o)return;const d=setInterval(()=>{l(m=>(m+1)%sl.length)},4e3);return()=>clearInterval(d)},[o]);const c=()=>{l(d=>d===0?sl.length-1:d-1)},f=()=>{l(d=>(d+1)%sl.length)};return v.jsx("div",{className:" bg-gray-50 flex flex-col",children:v.jsx("div",{className:"flex justify-center px-4  md:py-4 lg:py-2",children:v.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[v.jsxs("div",{className:"relative h-[66vh] max-h-[600px] min-h-[400px] overflow-hidden rounded-2xl shadow-2xl",style:{perspective:"1200px"},children:[v.jsx("div",{className:"flex h-full transition-transform duration-700 ease-out",style:{transform:`translateX(-${a*100}%)`,transformStyle:"preserve-3d"},children:sl.map((d,m)=>v.jsxs("div",{className:"min-w-full h-full relative",style:{transform:m===a?"translateZ(0px) scale(1)":"translateZ(-100px) scale(0.95)",transition:"transform 0.7s ease-out"},children:[v.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${d.image})`}}),v.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"}),v.jsx("div",{className:"absolute inset-0 flex items-end p-8 md:p-12",children:v.jsx("div",{className:"max-w-3xl",children:v.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-8 border border-white/20",children:[v.jsx("span",{className:"text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight",children:d.title}),v.jsx("p",{className:"text-[15px] md:text-xl text-gray-100 leading-relaxed",children:d.description})]})})}),v.jsx("div",{className:"absolute top-6 right-6 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20",children:v.jsxs("span",{className:"text-white font-medium text-sm",children:[m+1," / ",sl.length]})})]},d.id))}),v.jsx("button",{onClick:c,className:"absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10","aria-label":"Previous slide",children:v.jsx(b2,{size:24})}),v.jsx("button",{onClick:f,className:"absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10","aria-label":"Next slide",children:v.jsx(x2,{size:24})})]}),v.jsx("div",{className:"flex items-center justify-center mt-4 md:mt-3 lg:mt-2 gap-6",children:v.jsx("div",{className:"flex gap-3",children:sl.map((d,m)=>v.jsx("button",{onClick:()=>l(m),className:`w-3 h-3 rounded-full transition-all duration-300 ${m===a?"bg-blue-600 scale-125":"bg-gray-300 hover:bg-gray-400"}`,"aria-label":`Go to slide ${m+1}`},m))})})]})})})}const $x=()=>v.jsxs("section",{className:"maindiv",children:[v.jsxs("div",{className:"text-center mt-2 p-1.5",children:[v.jsxs("span",{className:"text-6xl font-bold text-gray-900 mb-4",children:["Welcome to ",v.jsx("span",{className:"text-red-600",children:"Fodii Restro"})]}),v.jsx("div",{className:"text-2xl text-gray-600  mb-8 ",children:"Authentic Flavors, Memorable Moments"})]}),v.jsx(Jx,{}),v.jsxs("div",{className:"dash flex flex-col lg:flex-row items-center justify-center text-center gap-10 px-6 py-12 bg-gradient-to-r from-red-500 to-orange-500 mt-3 w-full h-screen lg:h-auto",children:[v.jsxs("div",{className:"star flex flex-col items-center m-2 p-6 text-lg opacity-80",children:[v.jsx("span",{className:"text-white",children:v.jsx(fu,{size:50})}),v.jsx("h2",{className:"font-bold text-white",children:"4.8/5"}),v.jsx("p",{className:"font-sans text-2xl text-white",children:"Customer Rating"})]}),v.jsxs("div",{className:"clock flex flex-col items-center m-2 p-6 text-lg opacity-80",children:[v.jsx("span",{className:"text-white",children:v.jsx(Ef,{size:50})}),v.jsx("h2",{className:"font-bold text-white",children:"15-30 min"}),v.jsx("p",{className:"font-sans text-2xl text-white",children:"Average Delivery Time On Your table"})]}),v.jsxs("div",{className:"award flex flex-col items-center m-2 p-6 text-lg opacity-80",children:[v.jsx("span",{className:"text-white",children:v.jsx(Sg,{size:50})}),v.jsx("h2",{className:"font-bold text-white",children:"100+"}),v.jsx("p",{className:"font-sans text-2xl text-white",children:"Menu items"})]})]}),v.jsxs("div",{className:"dishes",children:[v.jsxs("div",{className:"info text-center m-5 p-2 ",children:[v.jsxs("span",{className:"text-3xl font-bold ",children:["Feature ",v.jsx("span",{className:"text-3xl font-bold text-red-600",children:"Dishes"})]}),v.jsx("p",{className:"text-xl font-sans mt-3 opacity-80 text-black",children:" Discover our most popular and delicious dishes, carefully prepared with fresh ingredients and authentic flavors"})]}),v.jsx(v.Fragment,{children:v.jsx(Zx,{})}),v.jsx("nav",{className:"flex justify-center  mx-auto from-red-500 to-orange-400 m-4 py-2  ",children:v.jsxs(Qa,{to:"/menu",className:"bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2 text-white rounded-4xl text-2xl transition-transform duration-300 hover:scale-105 font-semibold flex  gap-2 items-center",style:{textDecoration:"none"},children:["View Complete Menu",v.jsx(Gm,{})]})})]}),v.jsxs("div",{className:"story bg-gray-900 text-white grid md:grid-cols-3 gap-3 lg:grid-rows-1 p-4",children:[v.jsxs("div",{className:"box1 flex flex-col gap-3 p-4",children:[v.jsxs("h1",{className:"text-3xl font-semibold",children:["Our ",v.jsx("span",{className:"text-red-500",children:"Story"})]}),v.jsx("p",{className:"text-lg",children:"Experience the finest culinary journey with our carefully crafted dishes made from fresh, locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage of traditional cooking."}),v.jsxs(Qa,{to:"/aboutshop",className:"flex items-center gap-2 text-white bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-xl w-fit text-lg transition-transform duration-300 hover:scale-105 ",style:{textDecoration:"none"},children:["Learn More About Us ",v.jsx(Gm,{})]})]}),v.jsx("div",{className:"flex ",children:v.jsx("img",{src:Kx,alt:"cocktail",className:"m-4 px-2 transition-transform duration-300 hover:scale-105 rounded-xl sm:w-5/6 "})}),v.jsx("div",{className:"flex  ",children:v.jsx("img",{src:Fx,alt:"burger",className:"my-4 px-2 transition-transform duration-300 hover:scale-105 rounded-xl w-3/4 lg:h-3/4 sm:ml-7  "})})]}),v.jsxs("div",{className:"bg-gradient-to-r from-orange-400 to-red-500 flex justify-center items-center flex-col p-5 ",children:[v.jsx("h1",{className:"text-white m-3",children:"Ready to Order?"}),v.jsx("p",{className:"text-white text-xl",children:"Scan our QR code or browse our complete menu to place your order"}),v.jsxs("div",{className:"Nav m-3 p-3  transition-transform duration-300 hover:scale-105   flex items-center gap-4 justify-center  flex-wrap",children:[v.jsx(Qa,{to:"/menu",style:{textDecoration:"none",color:"rgb(229, 57, 53)"},className:"text-red-600 mx-auto bg-white p-4 py-3 m-3 rounded-3xl font-semibold ",children:"Browse Menu"}),v.jsx(Qa,{to:"/contact",style:{textDecoration:"none"},className:"p-4 py-3  border-2 text-white border-white rounded-3xl font-semibold hover:bg-blue-500",children:"Contact Us"})]})]})]});var Ri=a=>a.type==="checkbox",xr=a=>a instanceof Date,Xt=a=>a==null;const Rg=a=>typeof a=="object";var St=a=>!Xt(a)&&!Array.isArray(a)&&Rg(a)&&!xr(a),Wx=a=>St(a)&&a.target?Ri(a.target)?a.target.checked:a.target.value:a,Ix=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,e5=(a,l)=>a.has(Ix(l)),t5=a=>{const l=a.constructor&&a.constructor.prototype;return St(l)&&l.hasOwnProperty("isPrototypeOf")},Mf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function zt(a){let l;const o=Array.isArray(a),u=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)l=new Date(a);else if(!(Mf&&(a instanceof Blob||u))&&(o||St(a)))if(l=o?[]:Object.create(Object.getPrototypeOf(a)),!o&&!t5(a))l=a;else for(const c in a)a.hasOwnProperty(c)&&(l[c]=zt(a[c]));else return a;return l}var mu=a=>/^\w*$/.test(a),Mt=a=>a===void 0,Nf=a=>Array.isArray(a)?a.filter(Boolean):[],Of=a=>Nf(a.replace(/["|']|\]/g,"").split(/\.|\[/)),we=(a,l,o)=>{if(!l||!St(a))return o;const u=(mu(l)?[l]:Of(l)).reduce((c,f)=>Xt(c)?c:c[f],a);return Mt(u)||u===a?Mt(a[l])?o:a[l]:u},Gn=a=>typeof a=="boolean",dt=(a,l,o)=>{let u=-1;const c=mu(l)?[l]:Of(l),f=c.length,d=f-1;for(;++u<f;){const m=c[u];let h=o;if(u!==d){const g=a[m];h=St(g)||Array.isArray(g)?g:isNaN(+c[u+1])?{}:[]}if(m==="__proto__"||m==="constructor"||m==="prototype")return;a[m]=h,a=a[m]}};const Rp={BLUR:"blur",FOCUS_OUT:"focusout"},Cn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},da={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},n5=st.createContext(null);n5.displayName="HookFormContext";var a5=(a,l,o,u=!0)=>{const c={defaultValues:l._defaultValues};for(const f in a)Object.defineProperty(c,f,{get:()=>{const d=f;return l._proxyFormState[d]!==Cn.all&&(l._proxyFormState[d]=!u||Cn.all),a[d]}});return c};const r5=typeof window<"u"?st.useLayoutEffect:st.useEffect;var Qn=a=>typeof a=="string",l5=(a,l,o,u,c)=>Qn(a)?(u&&l.watch.add(a),we(o,a,c)):Array.isArray(a)?a.map(f=>(u&&l.watch.add(f),we(o,f))):(u&&(l.watchAll=!0),o),cf=a=>Xt(a)||!Rg(a);function Xa(a,l,o=new WeakSet){if(cf(a)||cf(l))return a===l;if(xr(a)&&xr(l))return a.getTime()===l.getTime();const u=Object.keys(a),c=Object.keys(l);if(u.length!==c.length)return!1;if(o.has(a)||o.has(l))return!0;o.add(a),o.add(l);for(const f of u){const d=a[f];if(!c.includes(f))return!1;if(f!=="ref"){const m=l[f];if(xr(d)&&xr(m)||St(d)&&St(m)||Array.isArray(d)&&Array.isArray(m)?!Xa(d,m,o):d!==m)return!1}}return!0}var i5=(a,l,o,u,c)=>l?{...o[a],types:{...o[a]&&o[a].types?o[a].types:{},[u]:c||!0}}:{},Ei=a=>Array.isArray(a)?a:[a],Dp=()=>{let a=[];return{get observers(){return a},next:c=>{for(const f of a)f.next&&f.next(c)},subscribe:c=>(a.push(c),{unsubscribe:()=>{a=a.filter(f=>f!==c)}}),unsubscribe:()=>{a=[]}}},It=a=>St(a)&&!Object.keys(a).length,_f=a=>a.type==="file",zn=a=>typeof a=="function",lu=a=>{if(!Mf)return!1;const l=a?a.ownerDocument:0;return a instanceof(l&&l.defaultView?l.defaultView.HTMLElement:HTMLElement)},Dg=a=>a.type==="select-multiple",Rf=a=>a.type==="radio",o5=a=>Rf(a)||Ri(a),ef=a=>lu(a)&&a.isConnected;function u5(a,l){const o=l.slice(0,-1).length;let u=0;for(;u<o;)a=Mt(a)?u++:a[l[u++]];return a}function s5(a){for(const l in a)if(a.hasOwnProperty(l)&&!Mt(a[l]))return!1;return!0}function Tt(a,l){const o=Array.isArray(l)?l:mu(l)?[l]:Of(l),u=o.length===1?a:u5(a,o),c=o.length-1,f=o[c];return u&&delete u[f],c!==0&&(St(u)&&It(u)||Array.isArray(u)&&s5(u))&&Tt(a,o.slice(0,-1)),a}var jg=a=>{for(const l in a)if(zn(a[l]))return!0;return!1};function iu(a,l={}){const o=Array.isArray(a);if(St(a)||o)for(const u in a)Array.isArray(a[u])||St(a[u])&&!jg(a[u])?(l[u]=Array.isArray(a[u])?[]:{},iu(a[u],l[u])):Xt(a[u])||(l[u]=!0);return l}function kg(a,l,o){const u=Array.isArray(a);if(St(a)||u)for(const c in a)Array.isArray(a[c])||St(a[c])&&!jg(a[c])?Mt(l)||cf(o[c])?o[c]=Array.isArray(a[c])?iu(a[c],[]):{...iu(a[c])}:kg(a[c],Xt(l)?{}:l[c],o[c]):o[c]=!Xa(a[c],l[c]);return o}var bi=(a,l)=>kg(a,l,iu(l));const jp={value:!1,isValid:!1},kp={value:!0,isValid:!0};var Cg=a=>{if(Array.isArray(a)){if(a.length>1){const l=a.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:l,isValid:!!l.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!Mt(a[0].attributes.value)?Mt(a[0].value)||a[0].value===""?kp:{value:a[0].value,isValid:!0}:kp:jp}return jp},zg=(a,{valueAsNumber:l,valueAsDate:o,setValueAs:u})=>Mt(a)?a:l?a===""?NaN:a&&+a:o&&Qn(a)?new Date(a):u?u(a):a;const Cp={isValid:!1,value:null};var Ug=a=>Array.isArray(a)?a.reduce((l,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:l,Cp):Cp;function zp(a){const l=a.ref;return _f(l)?l.files:Rf(l)?Ug(a.refs).value:Dg(l)?[...l.selectedOptions].map(({value:o})=>o):Ri(l)?Cg(a.refs).value:zg(Mt(l.value)?a.ref.value:l.value,a)}var c5=(a,l,o,u)=>{const c={};for(const f of a){const d=we(l,f);d&&dt(c,f,d._f)}return{criteriaMode:o,names:[...a],fields:c,shouldUseNativeValidation:u}},ou=a=>a instanceof RegExp,yi=a=>Mt(a)?a:ou(a)?a.source:St(a)?ou(a.value)?a.value.source:a.value:a,Up=a=>({isOnSubmit:!a||a===Cn.onSubmit,isOnBlur:a===Cn.onBlur,isOnChange:a===Cn.onChange,isOnAll:a===Cn.all,isOnTouch:a===Cn.onTouched});const Lp="AsyncFunction";var f5=a=>!!a&&!!a.validate&&!!(zn(a.validate)&&a.validate.constructor.name===Lp||St(a.validate)&&Object.values(a.validate).find(l=>l.constructor.name===Lp)),d5=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),Bp=(a,l,o)=>!o&&(l.watchAll||l.watch.has(a)||[...l.watch].some(u=>a.startsWith(u)&&/^\.\w+/.test(a.slice(u.length))));const Ai=(a,l,o,u)=>{for(const c of o||Object.keys(a)){const f=we(a,c);if(f){const{_f:d,...m}=f;if(d){if(d.refs&&d.refs[0]&&l(d.refs[0],c)&&!u)return!0;if(d.ref&&l(d.ref,d.name)&&!u)return!0;if(Ai(m,l))break}else if(St(m)&&Ai(m,l))break}}};function qp(a,l,o){const u=we(a,o);if(u||mu(o))return{error:u,name:o};const c=o.split(".");for(;c.length;){const f=c.join("."),d=we(l,f),m=we(a,f);if(d&&!Array.isArray(d)&&o!==f)return{name:o};if(m&&m.type)return{name:f,error:m};if(m&&m.root&&m.root.type)return{name:`${f}.root`,error:m.root};c.pop()}return{name:o}}var h5=(a,l,o,u)=>{o(a);const{name:c,...f}=a;return It(f)||Object.keys(f).length>=Object.keys(l).length||Object.keys(f).find(d=>l[d]===(!u||Cn.all))},m5=(a,l,o)=>!a||!l||a===l||Ei(a).some(u=>u&&(o?u===l:u.startsWith(l)||l.startsWith(u))),p5=(a,l,o,u,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(l||a):(o?u.isOnBlur:c.isOnBlur)?!a:(o?u.isOnChange:c.isOnChange)?a:!0,g5=(a,l)=>!Nf(we(a,l)).length&&Tt(a,l),v5=(a,l,o)=>{const u=Ei(we(a,o));return dt(u,"root",l[o]),dt(a,o,u),a},Io=a=>Qn(a);function Hp(a,l,o="validate"){if(Io(a)||Array.isArray(a)&&a.every(Io)||Gn(a)&&!a)return{type:o,message:Io(a)?a:"",ref:l}}var cl=a=>St(a)&&!ou(a)?a:{value:a,message:""},Vp=async(a,l,o,u,c,f)=>{const{ref:d,refs:m,required:h,maxLength:g,minLength:y,min:E,max:x,pattern:A,validate:T,name:_,valueAsNumber:P,mount:j}=a._f,X=we(o,_);if(!j||l.has(_))return{};const Y=m?m[0]:d,$=te=>{c&&Y.reportValidity&&(Y.setCustomValidity(Gn(te)?"":te||""),Y.reportValidity())},K={},N=Rf(d),ee=Ri(d),ae=N||ee,Q=(P||_f(d))&&Mt(d.value)&&Mt(X)||lu(d)&&d.value===""||X===""||Array.isArray(X)&&!X.length,de=i5.bind(null,_,u,K),ce=(te,ie,re,ye=da.maxLength,C=da.minLength)=>{const ne=te?ie:re;K[_]={type:te?ye:C,message:ne,ref:d,...de(te?ye:C,ne)}};if(f?!Array.isArray(X)||!X.length:h&&(!ae&&(Q||Xt(X))||Gn(X)&&!X||ee&&!Cg(m).isValid||N&&!Ug(m).isValid)){const{value:te,message:ie}=Io(h)?{value:!!h,message:h}:cl(h);if(te&&(K[_]={type:da.required,message:ie,ref:Y,...de(da.required,ie)},!u))return $(ie),K}if(!Q&&(!Xt(E)||!Xt(x))){let te,ie;const re=cl(x),ye=cl(E);if(!Xt(X)&&!isNaN(X)){const C=d.valueAsNumber||X&&+X;Xt(re.value)||(te=C>re.value),Xt(ye.value)||(ie=C<ye.value)}else{const C=d.valueAsDate||new Date(X),ne=S=>new Date(new Date().toDateString()+" "+S),me=d.type=="time",_e=d.type=="week";Qn(re.value)&&X&&(te=me?ne(X)>ne(re.value):_e?X>re.value:C>new Date(re.value)),Qn(ye.value)&&X&&(ie=me?ne(X)<ne(ye.value):_e?X<ye.value:C<new Date(ye.value))}if((te||ie)&&(ce(!!te,re.message,ye.message,da.max,da.min),!u))return $(K[_].message),K}if((g||y)&&!Q&&(Qn(X)||f&&Array.isArray(X))){const te=cl(g),ie=cl(y),re=!Xt(te.value)&&X.length>+te.value,ye=!Xt(ie.value)&&X.length<+ie.value;if((re||ye)&&(ce(re,te.message,ie.message),!u))return $(K[_].message),K}if(A&&!Q&&Qn(X)){const{value:te,message:ie}=cl(A);if(ou(te)&&!X.match(te)&&(K[_]={type:da.pattern,message:ie,ref:d,...de(da.pattern,ie)},!u))return $(ie),K}if(T){if(zn(T)){const te=await T(X,o),ie=Hp(te,Y);if(ie&&(K[_]={...ie,...de(da.validate,ie.message)},!u))return $(ie.message),K}else if(St(T)){let te={};for(const ie in T){if(!It(te)&&!u)break;const re=Hp(await T[ie](X,o),Y,ie);re&&(te={...re,...de(ie,re.message)},$(re.message),u&&(K[_]=te))}if(!It(te)&&(K[_]={ref:Y,...te},!u))return K}}return $(!0),K};const b5={mode:Cn.onSubmit,reValidateMode:Cn.onChange,shouldFocusError:!0};function y5(a={}){let l={...b5,...a},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:zn(l.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1},u={},c=St(l.defaultValues)||St(l.values)?zt(l.defaultValues||l.values)||{}:{},f=l.shouldUnregister?{}:zt(c),d={action:!1,mount:!1,watch:!1},m={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,g=0;const y={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...y};const x={array:Dp(),state:Dp()},A=l.criteriaMode===Cn.all,T=M=>L=>{clearTimeout(g),g=setTimeout(M,L)},_=async M=>{if(!l.disabled&&(y.isValid||E.isValid||M)){const L=l.resolver?It((await ee()).errors):await Q(u,!0);L!==o.isValid&&x.state.next({isValid:L})}},P=(M,L)=>{!l.disabled&&(y.isValidating||y.validatingFields||E.isValidating||E.validatingFields)&&((M||Array.from(m.mount)).forEach(G=>{G&&(L?dt(o.validatingFields,G,L):Tt(o.validatingFields,G))}),x.state.next({validatingFields:o.validatingFields,isValidating:!It(o.validatingFields)}))},j=(M,L=[],G,he,fe=!0,oe=!0)=>{if(he&&G&&!l.disabled){if(d.action=!0,oe&&Array.isArray(we(u,M))){const pe=G(we(u,M),he.argA,he.argB);fe&&dt(u,M,pe)}if(oe&&Array.isArray(we(o.errors,M))){const pe=G(we(o.errors,M),he.argA,he.argB);fe&&dt(o.errors,M,pe),g5(o.errors,M)}if((y.touchedFields||E.touchedFields)&&oe&&Array.isArray(we(o.touchedFields,M))){const pe=G(we(o.touchedFields,M),he.argA,he.argB);fe&&dt(o.touchedFields,M,pe)}(y.dirtyFields||E.dirtyFields)&&(o.dirtyFields=bi(c,f)),x.state.next({name:M,isDirty:ce(M,L),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else dt(f,M,L)},X=(M,L)=>{dt(o.errors,M,L),x.state.next({errors:o.errors})},Y=M=>{o.errors=M,x.state.next({errors:o.errors,isValid:!1})},$=(M,L,G,he)=>{const fe=we(u,M);if(fe){const oe=we(f,M,Mt(G)?we(c,M):G);Mt(oe)||he&&he.defaultChecked||L?dt(f,M,L?oe:zp(fe._f)):re(M,oe),d.mount&&_()}},K=(M,L,G,he,fe)=>{let oe=!1,pe=!1;const Oe={name:M};if(!l.disabled){if(!G||he){(y.isDirty||E.isDirty)&&(pe=o.isDirty,o.isDirty=Oe.isDirty=ce(),oe=pe!==Oe.isDirty);const He=Xa(we(c,M),L);pe=!!we(o.dirtyFields,M),He?Tt(o.dirtyFields,M):dt(o.dirtyFields,M,!0),Oe.dirtyFields=o.dirtyFields,oe=oe||(y.dirtyFields||E.dirtyFields)&&pe!==!He}if(G){const He=we(o.touchedFields,M);He||(dt(o.touchedFields,M,G),Oe.touchedFields=o.touchedFields,oe=oe||(y.touchedFields||E.touchedFields)&&He!==G)}oe&&fe&&x.state.next(Oe)}return oe?Oe:{}},N=(M,L,G,he)=>{const fe=we(o.errors,M),oe=(y.isValid||E.isValid)&&Gn(L)&&o.isValid!==L;if(l.delayError&&G?(h=T(()=>X(M,G)),h(l.delayError)):(clearTimeout(g),h=null,G?dt(o.errors,M,G):Tt(o.errors,M)),(G?!Xa(fe,G):fe)||!It(he)||oe){const pe={...he,...oe&&Gn(L)?{isValid:L}:{},errors:o.errors,name:M};o={...o,...pe},x.state.next(pe)}},ee=async M=>{P(M,!0);const L=await l.resolver(f,l.context,c5(M||m.mount,u,l.criteriaMode,l.shouldUseNativeValidation));return P(M),L},ae=async M=>{const{errors:L}=await ee(M);if(M)for(const G of M){const he=we(L,G);he?dt(o.errors,G,he):Tt(o.errors,G)}else o.errors=L;return L},Q=async(M,L,G={valid:!0})=>{for(const he in M){const fe=M[he];if(fe){const{_f:oe,...pe}=fe;if(oe){const Oe=m.array.has(oe.name),He=fe._f&&f5(fe._f);He&&y.validatingFields&&P([he],!0);const We=await Vp(fe,m.disabled,f,A,l.shouldUseNativeValidation&&!L,Oe);if(He&&y.validatingFields&&P([he]),We[oe.name]&&(G.valid=!1,L))break;!L&&(we(We,oe.name)?Oe?v5(o.errors,We,oe.name):dt(o.errors,oe.name,We[oe.name]):Tt(o.errors,oe.name))}!It(pe)&&await Q(pe,L,G)}}return G.valid},de=()=>{for(const M of m.unMount){const L=we(u,M);L&&(L._f.refs?L._f.refs.every(G=>!ef(G)):!ef(L._f.ref))&&Ie(M)}m.unMount=new Set},ce=(M,L)=>!l.disabled&&(M&&L&&dt(f,M,L),!Xa(S(),c)),te=(M,L,G)=>l5(M,m,{...d.mount?f:Mt(L)?c:Qn(M)?{[M]:L}:L},G,L),ie=M=>Nf(we(d.mount?f:c,M,l.shouldUnregister?we(c,M,[]):[])),re=(M,L,G={})=>{const he=we(u,M);let fe=L;if(he){const oe=he._f;oe&&(!oe.disabled&&dt(f,M,zg(L,oe)),fe=lu(oe.ref)&&Xt(L)?"":L,Dg(oe.ref)?[...oe.ref.options].forEach(pe=>pe.selected=fe.includes(pe.value)):oe.refs?Ri(oe.ref)?oe.refs.forEach(pe=>{(!pe.defaultChecked||!pe.disabled)&&(Array.isArray(fe)?pe.checked=!!fe.find(Oe=>Oe===pe.value):pe.checked=fe===pe.value||!!fe)}):oe.refs.forEach(pe=>pe.checked=pe.value===fe):_f(oe.ref)?oe.ref.value="":(oe.ref.value=fe,oe.ref.type||x.state.next({name:M,values:zt(f)})))}(G.shouldDirty||G.shouldTouch)&&K(M,fe,G.shouldTouch,G.shouldDirty,!0),G.shouldValidate&&_e(M)},ye=(M,L,G)=>{for(const he in L){if(!L.hasOwnProperty(he))return;const fe=L[he],oe=M+"."+he,pe=we(u,oe);(m.array.has(M)||St(fe)||pe&&!pe._f)&&!xr(fe)?ye(oe,fe,G):re(oe,fe,G)}},C=(M,L,G={})=>{const he=we(u,M),fe=m.array.has(M),oe=zt(L);dt(f,M,oe),fe?(x.array.next({name:M,values:zt(f)}),(y.isDirty||y.dirtyFields||E.isDirty||E.dirtyFields)&&G.shouldDirty&&x.state.next({name:M,dirtyFields:bi(c,f),isDirty:ce(M,oe)})):he&&!he._f&&!Xt(oe)?ye(M,oe,G):re(M,oe,G),Bp(M,m)&&x.state.next({...o,name:M}),x.state.next({name:d.mount?M:void 0,values:zt(f)})},ne=async M=>{d.mount=!0;const L=M.target;let G=L.name,he=!0;const fe=we(u,G),oe=He=>{he=Number.isNaN(He)||xr(He)&&isNaN(He.getTime())||Xa(He,we(f,G,He))},pe=Up(l.mode),Oe=Up(l.reValidateMode);if(fe){let He,We;const ma=L.type?zp(fe._f):Wx(M),Ot=M.type===Rp.BLUR||M.type===Rp.FOCUS_OUT,Mr=!d5(fe._f)&&!l.resolver&&!we(o.errors,G)&&!fe._f.deps||p5(Ot,we(o.touchedFields,G),o.isSubmitted,Oe,pe),Tn=Bp(G,m,Ot);dt(f,G,ma),Ot?(!L||!L.readOnly)&&(fe._f.onBlur&&fe._f.onBlur(M),h&&h(0)):fe._f.onChange&&fe._f.onChange(M);const Mn=K(G,ma,Ot),Nn=!It(Mn)||Tn;if(!Ot&&x.state.next({name:G,type:M.type,values:zt(f)}),Mr)return(y.isValid||E.isValid)&&(l.mode==="onBlur"?Ot&&_():Ot||_()),Nn&&x.state.next({name:G,...Tn?{}:Mn});if(!Ot&&Tn&&x.state.next({...o}),l.resolver){const{errors:Ln}=await ee([G]);if(oe(ma),he){const dn=qp(o.errors,u,G),$a=qp(Ln,u,dn.name||G);He=$a.error,G=$a.name,We=It(Ln)}}else P([G],!0),He=(await Vp(fe,m.disabled,f,A,l.shouldUseNativeValidation))[G],P([G]),oe(ma),he&&(He?We=!1:(y.isValid||E.isValid)&&(We=await Q(u,!0)));he&&(fe._f.deps&&_e(fe._f.deps),N(G,We,He,Mn))}},me=(M,L)=>{if(we(o.errors,L)&&M.focus)return M.focus(),1},_e=async(M,L={})=>{let G,he;const fe=Ei(M);if(l.resolver){const oe=await ae(Mt(M)?M:fe);G=It(oe),he=M?!fe.some(pe=>we(oe,pe)):G}else M?(he=(await Promise.all(fe.map(async oe=>{const pe=we(u,oe);return await Q(pe&&pe._f?{[oe]:pe}:pe)}))).every(Boolean),!(!he&&!o.isValid)&&_()):he=G=await Q(u);return x.state.next({...!Qn(M)||(y.isValid||E.isValid)&&G!==o.isValid?{}:{name:M},...l.resolver||!M?{isValid:G}:{},errors:o.errors}),L.shouldFocus&&!he&&Ai(u,me,M?fe:m.mount),he},S=M=>{const L={...d.mount?f:c};return Mt(M)?L:Qn(M)?we(L,M):M.map(G=>we(L,G))},Z=(M,L)=>({invalid:!!we((L||o).errors,M),isDirty:!!we((L||o).dirtyFields,M),error:we((L||o).errors,M),isValidating:!!we(o.validatingFields,M),isTouched:!!we((L||o).touchedFields,M)}),se=M=>{M&&Ei(M).forEach(L=>Tt(o.errors,L)),x.state.next({errors:M?o.errors:{}})},le=(M,L,G)=>{const he=(we(u,M,{_f:{}})._f||{}).ref,fe=we(o.errors,M)||{},{ref:oe,message:pe,type:Oe,...He}=fe;dt(o.errors,M,{...He,...L,ref:he}),x.state.next({name:M,errors:o.errors,isValid:!1}),G&&G.shouldFocus&&he&&he.focus&&he.focus()},be=(M,L)=>zn(M)?x.state.subscribe({next:G=>"values"in G&&M(te(void 0,L),G)}):te(M,L,!0),Ue=M=>x.state.subscribe({next:L=>{m5(M.name,L.name,M.exact)&&h5(L,M.formState||y,Yt,M.reRenderRoot)&&M.callback({values:{...f},...o,...L,defaultValues:c})}}).unsubscribe,Se=M=>(d.mount=!0,E={...E,...M.formState},Ue({...M,formState:E})),Ie=(M,L={})=>{for(const G of M?Ei(M):m.mount)m.mount.delete(G),m.array.delete(G),L.keepValue||(Tt(u,G),Tt(f,G)),!L.keepError&&Tt(o.errors,G),!L.keepDirty&&Tt(o.dirtyFields,G),!L.keepTouched&&Tt(o.touchedFields,G),!L.keepIsValidating&&Tt(o.validatingFields,G),!l.shouldUnregister&&!L.keepDefaultValue&&Tt(c,G);x.state.next({values:zt(f)}),x.state.next({...o,...L.keepDirty?{isDirty:ce()}:{}}),!L.keepIsValid&&_()},Be=({disabled:M,name:L})=>{(Gn(M)&&d.mount||M||m.disabled.has(L))&&(M?m.disabled.add(L):m.disabled.delete(L))},yt=(M,L={})=>{let G=we(u,M);const he=Gn(L.disabled)||Gn(l.disabled);return dt(u,M,{...G||{},_f:{...G&&G._f?G._f:{ref:{name:M}},name:M,mount:!0,...L}}),m.mount.add(M),G?Be({disabled:Gn(L.disabled)?L.disabled:l.disabled,name:M}):$(M,!0,L.value),{...he?{disabled:L.disabled||l.disabled}:{},...l.progressive?{required:!!L.required,min:yi(L.min),max:yi(L.max),minLength:yi(L.minLength),maxLength:yi(L.maxLength),pattern:yi(L.pattern)}:{},name:M,onChange:ne,onBlur:ne,ref:fe=>{if(fe){yt(M,L),G=we(u,M);const oe=Mt(fe.value)&&fe.querySelectorAll&&fe.querySelectorAll("input,select,textarea")[0]||fe,pe=o5(oe),Oe=G._f.refs||[];if(pe?Oe.find(He=>He===oe):oe===G._f.ref)return;dt(u,M,{_f:{...G._f,...pe?{refs:[...Oe.filter(ef),oe,...Array.isArray(we(c,M))?[{}]:[]],ref:{type:oe.type,name:M}}:{ref:oe}}}),$(M,!1,void 0,oe)}else G=we(u,M,{}),G._f&&(G._f.mount=!1),(l.shouldUnregister||L.shouldUnregister)&&!(e5(m.array,M)&&d.action)&&m.unMount.add(M)}}},lt=()=>l.shouldFocusError&&Ai(u,me,m.mount),en=M=>{Gn(M)&&(x.state.next({disabled:M}),Ai(u,(L,G)=>{const he=we(u,G);he&&(L.disabled=he._f.disabled||M,Array.isArray(he._f.refs)&&he._f.refs.forEach(fe=>{fe.disabled=he._f.disabled||M}))},0,!1))},Jn=(M,L)=>async G=>{let he;G&&(G.preventDefault&&G.preventDefault(),G.persist&&G.persist());let fe=zt(f);if(x.state.next({isSubmitting:!0}),l.resolver){const{errors:oe,values:pe}=await ee();o.errors=oe,fe=zt(pe)}else await Q(u);if(m.disabled.size)for(const oe of m.disabled)Tt(fe,oe);if(Tt(o.errors,"root"),It(o.errors)){x.state.next({errors:{}});try{await M(fe,G)}catch(oe){he=oe}}else L&&await L({...o.errors},G),lt(),setTimeout(lt);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:It(o.errors)&&!he,submitCount:o.submitCount+1,errors:o.errors}),he)throw he},Ka=(M,L={})=>{we(u,M)&&(Mt(L.defaultValue)?C(M,zt(we(c,M))):(C(M,L.defaultValue),dt(c,M,zt(L.defaultValue))),L.keepTouched||Tt(o.touchedFields,M),L.keepDirty||(Tt(o.dirtyFields,M),o.isDirty=L.defaultValue?ce(M,zt(we(c,M))):ce()),L.keepError||(Tt(o.errors,M),y.isValid&&_()),x.state.next({...o}))},Qt=(M,L={})=>{const G=M?zt(M):c,he=zt(G),fe=It(M),oe=fe?c:he;if(L.keepDefaultValues||(c=G),!L.keepValues){if(L.keepDirtyValues){const pe=new Set([...m.mount,...Object.keys(bi(c,f))]);for(const Oe of Array.from(pe))we(o.dirtyFields,Oe)?dt(oe,Oe,we(f,Oe)):C(Oe,we(oe,Oe))}else{if(Mf&&Mt(M))for(const pe of m.mount){const Oe=we(u,pe);if(Oe&&Oe._f){const He=Array.isArray(Oe._f.refs)?Oe._f.refs[0]:Oe._f.ref;if(lu(He)){const We=He.closest("form");if(We){We.reset();break}}}}if(L.keepFieldsRef)for(const pe of m.mount)C(pe,we(oe,pe));else u={}}f=l.shouldUnregister?L.keepDefaultValues?zt(c):{}:zt(oe),x.array.next({values:{...oe}}),x.state.next({values:{...oe}})}m={mount:L.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!y.isValid||!!L.keepIsValid||!!L.keepDirtyValues,d.watch=!!l.shouldUnregister,x.state.next({submitCount:L.keepSubmitCount?o.submitCount:0,isDirty:fe?!1:L.keepDirty?o.isDirty:!!(L.keepDefaultValues&&!Xa(M,c)),isSubmitted:L.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:fe?{}:L.keepDirtyValues?L.keepDefaultValues&&f?bi(c,f):o.dirtyFields:L.keepDefaultValues&&M?bi(c,M):L.keepDirty?o.dirtyFields:{},touchedFields:L.keepTouched?o.touchedFields:{},errors:L.keepErrors?o.errors:{},isSubmitSuccessful:L.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},Tr=(M,L)=>Qt(zn(M)?M(f):M,L),hl=(M,L={})=>{const G=we(u,M),he=G&&G._f;if(he){const fe=he.refs?he.refs[0]:he.ref;fe.focus&&(fe.focus(),L.shouldSelect&&zn(fe.select)&&fe.select())}},Yt=M=>{o={...o,...M}},Ja={control:{register:yt,unregister:Ie,getFieldState:Z,handleSubmit:Jn,setError:le,_subscribe:Ue,_runSchema:ee,_focusError:lt,_getWatch:te,_getDirty:ce,_setValid:_,_setFieldArray:j,_setDisabledField:Be,_setErrors:Y,_getFieldArray:ie,_reset:Qt,_resetDefaultValues:()=>zn(l.defaultValues)&&l.defaultValues().then(M=>{Tr(M,l.resetOptions),x.state.next({isLoading:!1})}),_removeUnmounted:de,_disableForm:en,_subjects:x,_proxyFormState:y,get _fields(){return u},get _formValues(){return f},get _state(){return d},set _state(M){d=M},get _defaultValues(){return c},get _names(){return m},set _names(M){m=M},get _formState(){return o},get _options(){return l},set _options(M){l={...l,...M}}},subscribe:Se,trigger:_e,register:yt,handleSubmit:Jn,watch:be,setValue:C,getValues:S,reset:Tr,resetField:Ka,clearErrors:se,unregister:Ie,setError:le,setFocus:hl,getFieldState:Z};return{...Ja,formControl:Ja}}function Lg(a={}){const l=st.useRef(void 0),o=st.useRef(void 0),[u,c]=st.useState({isDirty:!1,isValidating:!1,isLoading:zn(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:zn(a.defaultValues)?void 0:a.defaultValues});if(!l.current)if(a.formControl)l.current={...a.formControl,formState:u},a.defaultValues&&!zn(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:d,...m}=y5(a);l.current={...m,formState:u}}const f=l.current.control;return f._options=a,r5(()=>{const d=f._subscribe({formState:f._proxyFormState,callback:()=>c({...f._formState}),reRenderRoot:!0});return c(m=>({...m,isReady:!0})),f._formState.isReady=!0,d},[f]),st.useEffect(()=>f._disableForm(a.disabled),[f,a.disabled]),st.useEffect(()=>{a.mode&&(f._options.mode=a.mode),a.reValidateMode&&(f._options.reValidateMode=a.reValidateMode)},[f,a.mode,a.reValidateMode]),st.useEffect(()=>{a.errors&&(f._setErrors(a.errors),f._focusError())},[f,a.errors]),st.useEffect(()=>{a.shouldUnregister&&f._subjects.state.next({values:f._getWatch()})},[f,a.shouldUnregister]),st.useEffect(()=>{if(f._proxyFormState.isDirty){const d=f._getDirty();d!==u.isDirty&&f._subjects.state.next({isDirty:d})}},[f,u.isDirty]),st.useEffect(()=>{a.values&&!Xa(a.values,o.current)?(f._reset(a.values,{keepFieldsRef:!0,...f._options.resetOptions}),o.current=a.values,c(d=>({...d}))):f._resetDefaultValues()},[f,a.values]),st.useEffect(()=>{f._state.mount||(f._setValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),l.current.formState=a5(u,f),l.current}const x5="/assets/stepdown-BO-M37qI.jpg",w5=["Food Quality","Service","Ambiance","Value for Money","Overall Experience"],S5=()=>{const{register:a,handleSubmit:l,reset:o}=Lg(),[u,c]=B.useState({"Food Quality":0,Service:0,Ambiance:0,"Value for Money":0,"Overall Experience":0}),[f,d]=B.useState(!1),m=(g,y)=>{c(E=>({...E,[g]:y}))},h=async g=>{const y={...g,ratings:u};try{(await fetch("http://localhost:5000/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})).ok?(o(),c({"Food Quality":0,Service:0,Ambiance:0,"Value for Money":0,"Overall Experience":0}),d(!0),setTimeout(()=>d(!1),3e3)):console.error("❌ Failed to submit feedback")}catch(E){console.error("Error submitting feedback:",E)}};return v.jsxs("div",{className:"flex flex-col md:flex-row min-h-screen sm:flex-colc ",children:[v.jsx("div",{className:"w-full md:w-1/2 h-64 md:h-auto",children:v.jsx("img",{src:x5,alt:"Feedback",className:"w-full h-full object-cover rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl"})}),v.jsxs("div",{className:"w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8 rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl shadow-lg bg-gradient-to-t from-orange-200 to-amber-50",children:[v.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6 text-center",children:"We Value Your Feedback"}),v.jsxs("form",{className:"w-full max-w-md space-y-6",onSubmit:l(h),children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-700 font-medium  text-lg mb-2",children:"Your Name*"}),v.jsx("input",{type:"text",...a("name",{required:{value:!0,message:"Name is required"}}),placeholder:"Enter your name",className:"w-full px-4 py-2 border-black border-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"})]}),v.jsx("div",{className:"space-y-4",children:w5.map(g=>v.jsxs("div",{children:[v.jsx("span",{className:"block font-semibold text-black mb-1 text-lg",children:g}),v.jsx("div",{className:"flex space-x-1",children:[...Array(5)].map((y,E)=>{const x=E+1;return v.jsx(fu,{size:28,className:`cursor-pointer ${x<=u[g]?"text-green-400":"text-black"}`,onClick:()=>m(g,x)},E)})})]},g))}),v.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-3 transition-transform duration-300 hover:scale-105",children:"Submit Feedback"}),f&&v.jsx("p",{className:"text-green-600 font-semibold text-center mt-4",children:"✅ Thanks for your valuable feedback!"})]})]})]})};function E5(){const{register:a,handleSubmit:l,formState:{errors:o,isSubmitting:u},reset:c}=Lg(),[f,d]=B.useState(!1),m=async h=>{try{(await fetch("http://localhost:5000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).ok?(c(),d(!0),setTimeout(()=>d(!1),3e3)):console.error("❌ Failed to send message")}catch(g){console.error("Error submitting contact form:",g)}};return v.jsxs("div",{className:"contact-page",children:[v.jsxs("header",{className:"contact-header text-center p-4",children:[v.jsxs("span",{className:"font-bold text-5xl",children:["Contact ",v.jsx("span",{className:"text-red-600",children:"Us"})]}),v.jsx("p",{className:"text-[19px] py-2",children:"Get in touch with us for reservations, feedback, or any questions you might have"})]}),v.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 w-full",children:[v.jsxs("div",{className:"p-5 shadow-lg rounded-2xl w-full lg:w-1/2 mb-2",children:[v.jsx("span",{className:"font-bold text-2xl",children:"Get in Touch"}),v.jsxs("div",{className:"flex items-center mt-2 py-2",children:[v.jsx("span",{className:"text-white bg-red-400 p-2 rounded-xl",children:v.jsx(Ag,{size:30})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("label",{className:"text-xl font-semibold",children:"Phone"}),v.jsx("p",{children:"+91-88XXXXXX16"})]})]}),v.jsxs("div",{className:"flex items-center mt-2 py-2",children:[v.jsx("span",{className:"text-white bg-orange-400 p-2 rounded-xl",children:v.jsx(Eg,{size:30})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("label",{className:"text-xl font-semibold",children:"Email"}),v.jsx("p",{children:"info@foodiirestro.gmail.com"})]})]}),v.jsxs("div",{className:"flex items-center mt-2 py-2",children:[v.jsx("span",{className:"text-white bg-green-400 p-2 rounded-xl",children:v.jsx(C2,{size:30})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("label",{className:"text-xl font-semibold",children:"Address"}),v.jsx("p",{children:"Alpha 1, Greater Noida, Uttarpradesh, 201308"})]})]}),v.jsxs("div",{className:"flex items-center mt-2 py-2",children:[v.jsx("span",{className:"text-white bg-blue-400 p-2 rounded-xl",children:v.jsx(Ef,{size:30})}),v.jsxs("div",{className:"ml-4",children:[v.jsx("label",{className:"text-xl font-semibold",children:"Working Timing"}),v.jsxs("p",{children:["Mon - Thu: 11:00 AM - 10:00 PM",v.jsx("br",{}),"Fri - Sat: 11:00 AM - 11:00 PM",v.jsx("br",{}),"Sunday: 12:00 PM - 9:00 PM"]})]})]})]}),v.jsxs("div",{className:"p-4 shadow-lg rounded-2xl mb-2 bg-gradient-to-t from-sky-200 to-sky-300 w-full lg:w-1/2",children:[v.jsxs("div",{className:"flex items-center flex-col justify-center p-4 gap-2 rounded-2xl m-2",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-red-500",children:v.jsx(U2,{size:30})}),v.jsx("span",{className:"font-bold text-2xl",children:"Send us a Message"})]}),f&&v.jsx("div",{className:"capitalize bg-teal-400 p-2 w-full text-xl text-center mt-2 rounded-lg",children:"✅ Thanks for submitting your concern. We will contact you shortly."})]}),v.jsxs("form",{onSubmit:l(m),className:"gap-3 p-3 grid grid-cols-1 md:grid-cols-2 w-full",children:[v.jsxs("div",{children:[v.jsx("label",{className:"font-semibold text-lg md:text-2xl",children:"Your name*"}),v.jsx("br",{}),v.jsx("input",{type:"text",className:"w-full border-2 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500",placeholder:"Enter your full name",...a("name",{required:{value:!0,message:"This field is required."},minLength:{value:3,message:"Min length is 3"}})}),o.name&&v.jsx("span",{className:"text-red-700 text-sm",children:o.name.message})]}),v.jsxs("div",{children:[v.jsx("label",{className:"font-semibold  text-lg md:text-2xl",children:"Email Address*"}),v.jsx("br",{}),v.jsx("input",{type:"email",className:"w-full border-2 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500",placeholder:"Enter your email address",...a("email",{required:{value:!0,message:"This field is required."}})}),o.email&&v.jsx("span",{className:"text-red-700 text-sm",children:o.email.message})]}),v.jsxs("div",{children:[v.jsx("label",{className:"font-semibold text-lg md:text-2xl",children:"Phone Number"}),v.jsx("br",{}),v.jsx("input",{type:"tel",className:"w-full border-2 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500",placeholder:"Enter your phone number",maxLength:10,...a("phone",{required:{value:!0,message:"This field is required."},pattern:{value:/^[0-9]{10}$/,message:"Phone number must be 10 digits."}}),onInput:h=>{h.target.value=h.target.value.replace(/[^0-9]/g,"")}}),o.phone&&v.jsx("span",{className:"text-red-600 text-sm",children:o.phone.message})]}),v.jsxs("div",{children:[v.jsx("label",{className:"font-semibold text-lg md:text-2xl",children:"Subject*"}),v.jsx("br",{}),v.jsxs("select",{className:"w-full border-2 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500",...a("subject",{required:{value:!0,message:"Choose a subject."}}),children:[v.jsx("option",{value:"",children:"Choose a subject"}),v.jsx("option",{value:"reservation",children:"Table Reservation"}),v.jsx("option",{value:"catering",children:"Catering Services"}),v.jsx("option",{value:"complaint",children:"Complaint"}),v.jsx("option",{value:"compliments",children:"Compliments"}),v.jsx("option",{value:"other",children:"Other"})]}),o.subject&&v.jsx("span",{className:"text-red-600 text-sm",children:o.subject.message})]}),v.jsxs("div",{className:"md:col-span-2",children:[v.jsx("label",{className:"font-semibold text-lg md:text-2xl",children:"Message*"}),v.jsx("br",{}),v.jsx("textarea",{className:"border-2 rounded-lg h-52 w-full text-base md:text-xl p-2 text-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500",placeholder:"How can we help you.........",...a("message",{required:{value:!0,message:"This field is required."},minLength:{value:5,message:"Type atleast 5 characters."}})}),o.message&&v.jsx("span",{className:"text-red-600 text-sm",children:o.message.message})]}),v.jsx("div",{className:"md:col-span-2 flex justify-center",children:v.jsxs("button",{disabled:u,type:"submit",style:{cursor:u?"not-allowed":"pointer",borderRadius:"10px"},className:"border-2 px-6 py-2 mt-2 bg-gradient-to-r from-red-500 to-orange-500 flex items-center gap-2 font-semibold transition-transform duration-200 hover:scale-105 md:rounded-2xl w-lg justify-center ",children:[v.jsx(Y2,{size:20})," Submit"]})})]})]})]}),v.jsxs("div",{className:"feedback",children:[v.jsxs("div",{className:"flex items-center flex-col",children:[v.jsxs("div",{className:"flex items-center text-3xl gap-3 font-bold p-3 m-3",children:[v.jsx("span",{className:"text-orange-500",children:v.jsx(fu,{size:40})}),v.jsx("span",{children:"Share Your Feedback"})]}),v.jsx("div",{children:v.jsx("p",{className:"text-[17px] p-2",children:"Your feedback helps us improve our service and provide better dining experiences. Please rate us on the following aspects:"})})]}),v.jsx("div",{className:"form",children:v.jsx(S5,{})})]})]})}const A5="/assets/img1-0zypBSUe.jpg",T5="/assets/img2-CSB1R4cK.jpg",M5="/assets/img4-6k9f6WSD.jpg",N5="/assets/img5-DBGfkIKp.jpg",O5="/assets/DP-Bpw0ZIy5.jpeg",tf="/assets/dp-CcfvfGW9.jpg",_5=()=>v.jsxs("section",{children:[v.jsxs("div",{className:"bg-gradient-to-r from-red-500 to-orange-500 flex justify-center items-center flex-col p-5 gap-4  mx-auto  select-none ",children:[v.jsxs("span",{className:"text-white text-5xl font-bold",children:["About ",v.jsx("span",{className:"text-amber-400 capitalize ",children:"spice garden"})]}),v.jsx("p",{className:"capitalize text-xl text-white ",children:"authentic flavors, memorable moments"})]}),v.jsxs("div",{className:"p-4 mx-auto flex flex-col lg:flex-row lg:items-start gap-8",children:[v.jsxs("div",{className:"div1 p-2 lg:w-1/2 flex justify-center items-center flex-col",children:[v.jsxs("span",{className:"capitalize text-3xl font-bold",children:["Our ",v.jsx("span",{className:"text-red-600",children:"journey"})]}),v.jsx("p",{className:"text-[17px] py-4 pb-0",children:"Experience the finest culinary journey with our carefully crafted dishes made from fresh, locally sourced ingredients. We bring you authentic flavors that celebrate the rich heritage of traditional cooking."}),v.jsx("p",{className:"text-[17px]",children:"Founded with a passion for authentic flavors and exceptional service, we have been serving our community for over 5 years. Our journey began with a simple vision: to create a place where families and friends can come together to enjoy delicious food in a warm, welcoming atmosphere."}),v.jsx("p",{className:"text-[17px]",children:"Every dish on our menu tells a story of tradition, innovation, and love. We source our ingredients locally whenever possible, supporting our community while ensuring the freshest flavors reach your plate."}),v.jsx("img",{src:O5,alt:"",className:" w-40 rounded-full  "}),v.jsx("p",{className:"text-[17px]   py-4 pb-0",children:"Founded in 2012 by childhood friends Aarav Mehta and Priya Kapoor, Fodii Restro began as a small roadside café in Jaipur, India, with just four tables and a borrowed stove. The duo shared a dream: to bring global flavors to their hometown without losing the warmth of Indian hospitality."}),v.jsx("p",{className:"text-[17px]",children:"Word spread quickly. By 2015, Fodii Restro had moved to a larger space, adding an open kitchen and live music nights. In 2018, the restaurant earned a local “Best Fusion Dining” award, and in 2020, despite the pandemic, they launched an online delivery service that brought their signature flavors to homes across the city."}),v.jsx("p",{className:"text-[17px]",children:"Today, Fodii Restro is more than just a restaurant—it’s a gathering place where every plate tells a story. Guests come for the bold flavors, stay for the cozy ambience, and leave as part of the Fodii family. Aarav and Priya still greet regulars by name, and every menu update is a love letter to the city that believed in their dream."})]}),v.jsxs("div",{className:"div2 grid grid-cols-2 md:grid-cols-2 gap-4 lg:w-1/2",children:[v.jsxs("div",{className:"grid gap-4",children:[v.jsx("img",{className:"h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105",src:A5,alt:""}),v.jsx("img",{className:"h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105",src:T5,alt:""})]}),v.jsxs("div",{className:"grid gap-4",children:[v.jsx("img",{className:"h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105",src:M5,alt:""}),v.jsx("img",{className:"h-auto w-full rounded-lg transition-transform duration-200 hover:scale-105",src:N5,alt:""})]})]})]}),v.jsxs("div",{className:"pb-5  shadow border-t ",children:[v.jsxs("div",{className:"flex justify-center items-center flex-col p-5",children:[v.jsxs("span",{className:"text-3xl capitalize font-bold",children:["our ",v.jsx("span",{className:"text-red-600",children:"Achievement"})]}),v.jsx("p",{className:"text-[17px]",children:"Recognition and milestones that reflect our commitment to excellence"})]}),v.jsxs("div",{className:" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 px-5  ",children:[v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in",children:[v.jsx("span",{className:"bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white",children:v.jsx(Sg,{size:50})}),v.jsx("span",{className:"capitalize",children:"excellence award"}),v.jsx("p",{className:"text-[17px]",children:"Best Restaurant 2023"})]}),v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in ",children:[v.jsx("span",{className:"bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white",children:v.jsx(Xm,{size:50})}),v.jsx("span",{children:"10,000+"}),v.jsx("p",{className:"text-[17px]",children:"happy customers"})]}),v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in",children:[v.jsx("span",{className:"bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white",children:v.jsx(Ef,{size:50})}),v.jsx("span",{children:"5+ years"}),v.jsx("p",{className:"text-[17px]",children:"Serving Community"})]}),v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100 ease-in",children:[v.jsx("span",{className:"bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-2 text-white",children:v.jsx(Ym,{size:50})}),v.jsx("span",{children:"100%"}),v.jsx("p",{className:"text-[17px]",children:" Fresh Ingredients"})]})]})]}),v.jsxs("div",{className:"bg-gray-900 text-white flex justify-center items-center flex-col py-5  ",children:[v.jsxs("div",{className:"p-2",children:[v.jsxs("span",{className:"text-white font-bold text-5xl",children:["Our ",v.jsx("span",{className:"text-orange-400",children:"Values"})]}),v.jsx("p",{className:"text-[17px]",children:"The principles that guide everything we do"})]}),v.jsxs("div",{className:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 p-4",children:[v.jsxs("div",{className:"flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3",children:[v.jsxs("span",{className:"bg-orange-400 p-1 rounded-xl",children:[v.jsx(fu,{size:50})," "]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-3xl font-bold",children:"Quality First"}),v.jsx("p",{children:"We never compromise on the quality of our ingredients and cooking standards"})]})]}),v.jsxs("div",{className:"flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3",children:[v.jsx("span",{className:"bg-orange-400 p-1 rounded-xl",children:v.jsx(W2,{size:50})}),v.jsxs("div",{children:[v.jsx("span",{className:"text-3xl font-bold",children:"Authentic Flavors"}),v.jsx("p",{children:"Traditional recipes passed down through generations with a modern twist."})]})]}),v.jsxs("div",{className:"flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3",children:[v.jsx("span",{className:"bg-orange-400 p-1 rounded-xl",children:v.jsx(Ym,{size:50})}),v.jsxs("div",{children:[v.jsx("span",{className:"text-3xl font-bold",children:"Customer Love"}),v.jsx("p",{children:"Every dish is prepared with love and care for our valued customers."})]})]}),v.jsxs("div",{className:"flex gap-4  bg-gray-800 transition-transform duration-200 hover:bg-gray-700 hover:scale-105 rounded-2xl p-3",children:[v.jsx("span",{className:"bg-orange-400 p-1 rounded-xl",children:v.jsx(Xm,{size:50})}),v.jsxs("div",{children:[v.jsx("span",{className:"text-3xl font-bold",children:"Commubity Focus"}),v.jsx("p",{children:"Proud to be part of the local community and serve our neighbors."})]})]})]})]}),v.jsxs("div",{className:"pb-5  shadow  ",children:[v.jsxs("div",{className:"flex justify-center items-center flex-col p-5",children:[v.jsxs("span",{className:"text-3xl capitalize font-bold",children:["Meet Our ",v.jsx("span",{className:"text-red-600",children:"Team"})]}),v.jsx("p",{className:"text-[17px]",children:"The passionate people behind your favorite dishes"})]}),v.jsxs("div",{className:" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-5  ",children:[v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2",children:[v.jsx("img",{src:tf,alt:"",className:"h-40 w-40 rounded-full shadow-2xl"}),v.jsx("span",{className:"font-bold text-2xl",children:"Chef Rajesh Kumar"}),v.jsx("span",{className:"font-semibold text-red-500 text-xl",children:"Head chef"}),v.jsx("p",{className:"p-4",children:"15+ years of culinary expertise specializing in authentic Indian cuisine"})]}),v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2",children:[v.jsx("img",{src:tf,alt:"",className:"h-40 w-40 rounded-full shadow-2xl"}),v.jsx("span",{className:"font-bold text-2xl",children:"Ketan Kirty"}),v.jsx("span",{className:"font-semibold text-red-500 text-xl",children:"Resturent Manager"}),v.jsx("p",{className:"p-4",children:"Ensuring exceptional service and memorable dining experiences"})]}),v.jsxs("div",{className:"flex justify-center items-center flex-col bg-blue-50 rounded-full p-5 transition-transform duration-200 hover:scale-105 hover:bg-pink-100  ease-in gap-2",children:[v.jsx("img",{src:tf,alt:"",className:"h-40 w-40 rounded-full shadow-2xl"}),v.jsx("span",{className:"font-bold text-2xl",children:"Shruti Shrestha"}),v.jsx("span",{className:"font-semibold text-red-500 text-xl",children:"Sous Chef"}),v.jsx("p",{className:"p-4",children:"Master of spices and traditional cooking techniques"})]})]})]})]}),R5={Desserts:[{id:1,name:"Chocolate Lava Cake",image:"https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes8-1059x1536.webp",price:120,description:"Warm chocolate cake with molten center"},{id:2,name:"Ice Cream Sundae",image:"https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-10-1024x768.jpg",price:90,description:"Vanilla ice cream with chocolate syrup and nuts"},{id:3,name:"Tiramisu",image:"https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg",price:150,description:"Coffee-flavored Italian dessert"},{id:4,name:"Brownie",image:"https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg",price:80,description:"Fudgy chocolate brownie with walnuts"},{id:5,name:"Fruit Custard",image:"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",price:70,description:"Mixed fruits in creamy custard"},{id:6,name:"Cheesecake",image:"https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg",price:140,description:"Classic New York-style cheesecake"},{id:7,name:"Panna Cotta",image:"https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",price:130,description:"Creamy Italian dessert with berry sauce"},{id:8,name:"Apple Pie",image:"https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg",price:110,description:"Flaky crust filled with cinnamon apple filling"},{id:9,name:"Mousse",image:"https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",price:100,description:"Light and airy chocolate mousse"},{id:10,name:"Caramel Pudding",image:"https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg",price:90,description:"Silky custard with caramel topping"}],Snacks:[{id:11,name:"French Fries",image:"https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",price:60,description:"Crispy potato fries served with ketchup"},{id:12,name:"Samosa",image:"https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:20,description:"Crispy pastry with spicy potato filling"},{id:13,name:"Spring Rolls",image:"https://images.unsplash.com/photo-1679310290259-78d9eaa32700?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D",price:50,description:"Vegetable rolls deep-fried to golden"},{id:14,name:"Nachos",image:"https://www.onceuponachef.com/images/2024/02/beef-nachos-1112x1536.jpg",price:70,description:"Tortilla chips with cheese and salsa"},{id:15,name:" Aalu Pakora",image:"https://www.funfoodfrolic.com/wp-content/uploads/2021/09/Aloo-Pakora-2.jpg",price:40,description:"Spiced vegetable fritters"},{id:16,name:"Corn Chaat",image:"https://www.cookclickndevour.com/wp-content/uploads/2021/09/corn-chaat-recipe.jpg",price:55,description:"Sweet corn with lemon, spices and herbs"},{id:17,name:"Paneer Tikka",image:"https://orders.popskitchen.in/storage/2024/09/image-358.png",price:90,description:"Grilled paneer cubes marinated in spices"},{id:18,name:"Veg Cutlet",image:"https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg",price:45,description:"Mashed veggie patties, crumb-fried"},{id:19,name:"Cheese Balls",image:"https://www.funfoodfrolic.com/wp-content/uploads/2018/05/Chicken-Cheese-Balls.jpg",price:60,description:"Fried cheese-filled snack"},{id:20,name:"Stuffed Bread Rolls",image:"https://www.bylena.com/images/uploaded/600x_Rulouri-placinte-cu-varzabranza-599.jpg",price:50,description:"Spiced potato filling inside fried bread rolls"}],"Fast Food":[{id:21,name:"Cheese Burger",image:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",price:150,description:"Beef burger with melted cheese and lettuce"},{id:22,name:"Veg Pizza",image:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",price:180,description:"Thin crust pizza topped with fresh vegetables"},{id:23,name:"Chicken Nuggets",image:"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",price:100,description:"Golden-fried chicken bites"},{id:24,name:"Hot Dog",image:"https://www.cookingcarnival.com/wp-content/uploads/2022/04/Veg-hot-dog-5.jpg",price:120,description:"Grilled sausage in a soft bun"},{id:25,name:"Shawarma Roll",image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma.jpg",price:130,description:"Spiced chicken wrap with garlic sauce"},{id:26,name:"Chicken Burger",image:"https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg",price:140,description:"Fried chicken patty in a bun"},{id:27,name:"Loaded Fries",image:"https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",price:100,description:"Fries with cheese, mayo and toppings"},{id:28,name:"Taco",image:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",price:90,description:"Soft shell taco with veggies and beans"},{id:29,name:"Paneer Burger",image:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",price:130,description:"Grilled paneer patty with sauce"},{id:30,name:"Pasta Alfredo",image:"https://images.aws.nestle.recipes/resized/432d4cbae30cd055066e6fa44cf0897c_Overhead_Pasta_Can_2020_HERO_1200_628.jpg",price:160,description:"Creamy white sauce pasta with herbs"}],Sweets:[{id:31,name:"Gulab Jamun",image:"https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1",price:40,description:"Milk-solid-based sweet soaked in sugar syrup"},{id:32,name:"Rasgulla",image:"https://www.palatesdesire.com/wp-content/uploads/2015/08/Rasgulla_recipe@Palates_desire-scaled.jpg",price:35,description:"Spongy balls made from chhena in syrup"},{id:33,name:"Kaju Katli",image:"https://static.toiimg.com/photo/55048826.cms",price:80,description:"Cashew fudge with silver foil"},{id:34,name:"Ladoo",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Laddu_Sweet.JPG/500px-Laddu_Sweet.JPG",price:30,description:"Round sweet balls made of gram flour"},{id:35,name:" Milk Barfi",image:"https://aartimadan.com/wp-content/uploads/2019/04/Suji-Barfi-1.jpg",price:45,description:"Milk-based sweet with pistachio"},{id:36,name:"Soan Papdi",image:"https://www.indianrecipeinfo.com/wp-content/uploads/2010/12/Soan-Papdi.jpg",price:50,description:"Flaky sweet with ghee and nuts"},{id:37,name:"Jalebi",image:"https://static.toiimg.com/thumb/53099699.cms?imgsize=182393&width=800&height=800",price:25,description:"Crispy coiled sweet dipped in syrup"},{id:38,name:"Peda",image:"https://www.cookclickndevour.com/wp-content/uploads/2018/05/peda-recipe-3.jpg",price:35,description:"Soft and dense milk sweet"},{id:39,name:"Mysore Pak",image:"https://www.shreemithai.com/cdn/shop/products/spl-mysore-pak-206182.jpg?v=1707820107&width=800",price:40,description:"Gram flour sweet with ghee"},{id:40,name:"Halwa",image:"https://i.ytimg.com/vi/6jagMZ70IJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANRiN5W8uW3fPXFlmAl3t4tFEBMQ",price:50,description:"Rich, sweet pudding of semolina or carrot"}],SouthIndian:[{id:41,name:"Masala Dosa",image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",price:90,description:"Crispy dosa filled with spiced potato"},{id:42,name:"Idli with Sambar",image:"https://mayuris-jikoni.com/wp-content/uploads/2012/06/idli-sambar-1-copy.jpg",price:60,description:"Steamed rice cakes with lentil soup"},{id:43,name:"Medu Vada",image:"https://madhurasrecipe.com/wp-content/uploads/2021/12/poha_vada_featured.jpg",price:50,description:"Crispy lentil fritters shaped like donuts"},{id:44,name:"Plain Dosa",image:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",price:70,description:"Classic thin dosa served with chutney"},{id:45,name:"Rava Upma",image:"https://static.toiimg.com/thumb/84709540.cms?imgsize=221435&width=800&height=800",price:55,description:"Semolina dish with mustard and curry leaves"},{id:46,name:" Veg Pongal",image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",price:65,description:"Rice and lentil khichdi with ghee"},{id:47,name:"Uttapam",image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/uttapam-recipe-swasthi.jpg",price:75,description:"Thick dosa with chopped veggies"},{id:48,name:"Appam with Stew",image:"https://www.sailusfood.com/wp-content/uploads/2013/06/appam-vegetable-stew.jpg",price:100,description:"Rice pancake served with coconut veggie stew"},{id:49,name:"Kesari Bath",image:"https://www.cookclickndevour.com/wp-content/uploads/2017/09/kesari-bath-recipe-c.jpg",price:40,description:"Sweet semolina dessert flavored with saffron"},{id:50,name:"Curd Rice",image:"https://palatesdesire.com/wp-content/uploads/2022/04/curd-rice-recipe-card@palates-desire.jpg",price:50,description:"Cooling rice mixed with yogurt and tempered spices"}]},nf={menu:R5};function Dt(a,l){l===void 0&&(l={});var o=l.insertAt;if(a&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o==="top"&&u.firstChild?u.insertBefore(c,u.firstChild):u.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}Dt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Xn=function(){return Xn=Object.assign||function(a){for(var l,o=1,u=arguments.length;o<u;o++)for(var c in l=arguments[o])Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c]);return a},Xn.apply(this,arguments)};function uu(a){return uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},uu(a)}var D5=/^\s+/,j5=/\s+$/;function Te(a,l){if(l=l||{},(a=a||"")instanceof Te)return a;if(!(this instanceof Te))return new Te(a,l);var o=function(u){var c={r:0,g:0,b:0},f=1,d=null,m=null,h=null,g=!1,y=!1;typeof u=="string"&&(u=function(T){T=T.replace(D5,"").replace(j5,"").toLowerCase();var _,P=!1;if(ff[T])T=ff[T],P=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=kn.rgb.exec(T))?{r:_[1],g:_[2],b:_[3]}:(_=kn.rgba.exec(T))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=kn.hsl.exec(T))?{h:_[1],s:_[2],l:_[3]}:(_=kn.hsla.exec(T))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=kn.hsv.exec(T))?{h:_[1],s:_[2],v:_[3]}:(_=kn.hsva.exec(T))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=kn.hex8.exec(T))?{r:sn(_[1]),g:sn(_[2]),b:sn(_[3]),a:Zp(_[4]),format:P?"name":"hex8"}:(_=kn.hex6.exec(T))?{r:sn(_[1]),g:sn(_[2]),b:sn(_[3]),format:P?"name":"hex"}:(_=kn.hex4.exec(T))?{r:sn(_[1]+""+_[1]),g:sn(_[2]+""+_[2]),b:sn(_[3]+""+_[3]),a:Zp(_[4]+""+_[4]),format:P?"name":"hex8"}:(_=kn.hex3.exec(T))?{r:sn(_[1]+""+_[1]),g:sn(_[2]+""+_[2]),b:sn(_[3]+""+_[3]),format:P?"name":"hex"}:!1}(u)),uu(u)=="object"&&(ha(u.r)&&ha(u.g)&&ha(u.b)?(E=u.r,x=u.g,A=u.b,c={r:255*ht(E,255),g:255*ht(x,255),b:255*ht(A,255)},g=!0,y=String(u.r).substr(-1)==="%"?"prgb":"rgb"):ha(u.h)&&ha(u.s)&&ha(u.v)?(d=Si(u.s),m=Si(u.v),c=function(T,_,P){T=6*ht(T,360),_=ht(_,100),P=ht(P,100);var j=Math.floor(T),X=T-j,Y=P*(1-_),$=P*(1-X*_),K=P*(1-(1-X)*_),N=j%6,ee=[P,$,Y,Y,K,P][N],ae=[K,P,P,$,Y,Y][N],Q=[Y,Y,K,P,P,$][N];return{r:255*ee,g:255*ae,b:255*Q}}(u.h,d,m),g=!0,y="hsv"):ha(u.h)&&ha(u.s)&&ha(u.l)&&(d=Si(u.s),h=Si(u.l),c=function(T,_,P){var j,X,Y;function $(ee,ae,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?ee+6*(ae-ee)*Q:Q<.5?ae:Q<2/3?ee+(ae-ee)*(2/3-Q)*6:ee}if(T=ht(T,360),_=ht(_,100),P=ht(P,100),_===0)j=X=Y=P;else{var K=P<.5?P*(1+_):P+_-P*_,N=2*P-K;j=$(N,K,T+1/3),X=$(N,K,T),Y=$(N,K,T-1/3)}return{r:255*j,g:255*X,b:255*Y}}(u.h,d,h),g=!0,y="hsl"),u.hasOwnProperty("a")&&(f=u.a));var E,x,A;return f=Bg(f),{ok:g,format:u.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}}(a);this._originalInput=a,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=l.format||o.format,this._gradientType=l.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Yp(a,l,o){a=ht(a,255),l=ht(l,255),o=ht(o,255);var u,c,f=Math.max(a,l,o),d=Math.min(a,l,o),m=(f+d)/2;if(f==d)u=c=0;else{var h=f-d;switch(c=m>.5?h/(2-f-d):h/(f+d),f){case a:u=(l-o)/h+(l<o?6:0);break;case l:u=(o-a)/h+2;break;case o:u=(a-l)/h+4}u/=6}return{h:u,s:c,l:m}}function Pp(a,l,o){a=ht(a,255),l=ht(l,255),o=ht(o,255);var u,c,f=Math.max(a,l,o),d=Math.min(a,l,o),m=f,h=f-d;if(c=f===0?0:h/f,f==d)u=0;else{switch(f){case a:u=(l-o)/h+(l<o?6:0);break;case l:u=(o-a)/h+2;break;case o:u=(a-l)/h+4}u/=6}return{h:u,s:c,v:m}}function Gp(a,l,o,u){var c=[Un(Math.round(a).toString(16)),Un(Math.round(l).toString(16)),Un(Math.round(o).toString(16))];return u&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Xp(a,l,o,u){return[Un(qg(u)),Un(Math.round(a).toString(16)),Un(Math.round(l).toString(16)),Un(Math.round(o).toString(16))].join("")}function k5(a,l){l=l===0?0:l||10;var o=Te(a).toHsl();return o.s-=l/100,o.s=pu(o.s),Te(o)}function C5(a,l){l=l===0?0:l||10;var o=Te(a).toHsl();return o.s+=l/100,o.s=pu(o.s),Te(o)}function z5(a){return Te(a).desaturate(100)}function U5(a,l){l=l===0?0:l||10;var o=Te(a).toHsl();return o.l+=l/100,o.l=pu(o.l),Te(o)}function L5(a,l){l=l===0?0:l||10;var o=Te(a).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-l/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-l/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-l/100*255))),Te(o)}function B5(a,l){l=l===0?0:l||10;var o=Te(a).toHsl();return o.l-=l/100,o.l=pu(o.l),Te(o)}function q5(a,l){var o=Te(a).toHsl(),u=(o.h+l)%360;return o.h=u<0?360+u:u,Te(o)}function H5(a){var l=Te(a).toHsl();return l.h=(l.h+180)%360,Te(l)}function Qp(a,l){if(isNaN(l)||l<=0)throw new Error("Argument to polyad must be a positive number");for(var o=Te(a).toHsl(),u=[Te(a)],c=360/l,f=1;f<l;f++)u.push(Te({h:(o.h+f*c)%360,s:o.s,l:o.l}));return u}function V5(a){var l=Te(a).toHsl(),o=l.h;return[Te(a),Te({h:(o+72)%360,s:l.s,l:l.l}),Te({h:(o+216)%360,s:l.s,l:l.l})]}function Y5(a,l,o){l=l||6,o=o||30;var u=Te(a).toHsl(),c=360/o,f=[Te(a)];for(u.h=(u.h-(c*l>>1)+720)%360;--l;)u.h=(u.h+c)%360,f.push(Te(u));return f}function P5(a,l){l=l||6;for(var o=Te(a).toHsv(),u=o.h,c=o.s,f=o.v,d=[],m=1/l;l--;)d.push(Te({h:u,s:c,v:f})),f=(f+m)%1;return d}Te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,l,o,u=this.toRgb();return a=u.r/255,l=u.g/255,o=u.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Bg(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Pp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Pp(this._r,this._g,this._b),l=Math.round(360*a.h),o=Math.round(100*a.s),u=Math.round(100*a.v);return this._a==1?"hsv("+l+", "+o+"%, "+u+"%)":"hsva("+l+", "+o+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var a=Yp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Yp(this._r,this._g,this._b),l=Math.round(360*a.h),o=Math.round(100*a.s),u=Math.round(100*a.l);return this._a==1?"hsl("+l+", "+o+"%, "+u+"%)":"hsla("+l+", "+o+"%, "+u+"%, "+this._roundA+")"},toHex:function(a){return Gp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(l,o,u,c,f){var d=[Un(Math.round(l).toString(16)),Un(Math.round(o).toString(16)),Un(Math.round(u).toString(16)),Un(qg(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ht(this._r,255))+"%",g:Math.round(100*ht(this._g,255))+"%",b:Math.round(100*ht(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ht(this._r,255))+"%, "+Math.round(100*ht(this._g,255))+"%, "+Math.round(100*ht(this._b,255))+"%)":"rgba("+Math.round(100*ht(this._r,255))+"%, "+Math.round(100*ht(this._g,255))+"%, "+Math.round(100*ht(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(G5[Gp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var l="#"+Xp(this._r,this._g,this._b,this._a),o=l,u=this._gradientType?"GradientType = 1, ":"";if(a){var c=Te(a);o="#"+Xp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+l+",endColorstr="+o+")"},toString:function(a){var l=!!a;a=a||this._format;var o=!1,u=this._a<1&&this._a>=0;return l||!u||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(o=this.toRgbString()),a==="prgb"&&(o=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(o=this.toHexString()),a==="hex3"&&(o=this.toHexString(!0)),a==="hex4"&&(o=this.toHex8String(!0)),a==="hex8"&&(o=this.toHex8String()),a==="name"&&(o=this.toName()),a==="hsl"&&(o=this.toHslString()),a==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Te(this.toString())},_applyModification:function(a,l){var o=a.apply(null,[this].concat([].slice.call(l)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(U5,arguments)},brighten:function(){return this._applyModification(L5,arguments)},darken:function(){return this._applyModification(B5,arguments)},desaturate:function(){return this._applyModification(k5,arguments)},saturate:function(){return this._applyModification(C5,arguments)},greyscale:function(){return this._applyModification(z5,arguments)},spin:function(){return this._applyModification(q5,arguments)},_applyCombination:function(a,l){return a.apply(null,[this].concat([].slice.call(l)))},analogous:function(){return this._applyCombination(Y5,arguments)},complement:function(){return this._applyCombination(H5,arguments)},monochromatic:function(){return this._applyCombination(P5,arguments)},splitcomplement:function(){return this._applyCombination(V5,arguments)},triad:function(){return this._applyCombination(Qp,[3])},tetrad:function(){return this._applyCombination(Qp,[4])}},Te.fromRatio=function(a,l){if(uu(a)=="object"){var o={};for(var u in a)a.hasOwnProperty(u)&&(o[u]=u==="a"?a[u]:Si(a[u]));a=o}return Te(a,l)},Te.equals=function(a,l){return!(!a||!l)&&Te(a).toRgbString()==Te(l).toRgbString()},Te.random=function(){return Te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Te.mix=function(a,l,o){o=o===0?0:o||50;var u=Te(a).toRgb(),c=Te(l).toRgb(),f=o/100;return Te({r:(c.r-u.r)*f+u.r,g:(c.g-u.g)*f+u.g,b:(c.b-u.b)*f+u.b,a:(c.a-u.a)*f+u.a})},Te.readability=function(a,l){var o=Te(a),u=Te(l);return(Math.max(o.getLuminance(),u.getLuminance())+.05)/(Math.min(o.getLuminance(),u.getLuminance())+.05)},Te.isReadable=function(a,l,o){var u,c,f=Te.readability(a,l);switch(c=!1,(u=function(d){var m,h;return m=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(d.size||"small").toLowerCase(),m!=="AA"&&m!=="AAA"&&(m="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:m,size:h}}(o)).level+u.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},Te.mostReadable=function(a,l,o){var u,c,f,d,m=null,h=0;c=(o=o||{}).includeFallbackColors,f=o.level,d=o.size;for(var g=0;g<l.length;g++)(u=Te.readability(a,l[g]))>h&&(h=u,m=Te(l[g]));return Te.isReadable(a,m,{level:f,size:d})||!c?m:(o.includeFallbackColors=!1,Te.mostReadable(a,["#fff","#000"],o))};var ff=Te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G5=Te.hexNames=function(a){var l={};for(var o in a)a.hasOwnProperty(o)&&(l[a[o]]=o);return l}(ff);function Bg(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ht(a,l){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(a)&&(a="100%");var o=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(a);return a=Math.min(l,Math.max(0,parseFloat(a))),o&&(a=parseInt(a*l,10)/100),Math.abs(a-l)<1e-6?1:a%l/parseFloat(l)}function pu(a){return Math.min(1,Math.max(0,a))}function sn(a){return parseInt(a,16)}function Un(a){return a.length==1?"0"+a:""+a}function Si(a){return a<=1&&(a=100*a+"%"),a}function qg(a){return Math.round(255*parseFloat(a)).toString(16)}function Zp(a){return sn(a)/255}var Ya,Zo,Fo,kn=(Zo="[\\s|\\(]+("+(Ya="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ya+")[,|\\s]+("+Ya+")\\s*\\)?",Fo="[\\s|\\(]+("+Ya+")[,|\\s]+("+Ya+")[,|\\s]+("+Ya+")[,|\\s]+("+Ya+")\\s*\\)?",{CSS_UNIT:new RegExp(Ya),rgb:new RegExp("rgb"+Zo),rgba:new RegExp("rgba"+Fo),hsl:new RegExp("hsl"+Zo),hsla:new RegExp("hsla"+Fo),hsv:new RegExp("hsv"+Zo),hsva:new RegExp("hsva"+Fo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ha(a){return!!kn.CSS_UNIT.exec(a)}var X5=function(a,l){var o=(typeof a=="string"?parseInt(a):a)||0;if(o>=-5&&o<=5){var u=o,c=parseFloat(l),f=c+u*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:l}},Q5=function(a,l){var o=a||{},u="";switch(l){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var c={};if(o.fontSize){var f=o.fontSize;c=function(d,m){var h={};for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&m.indexOf(g)<0&&(h[g]=d[g]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(g=Object.getOwnPropertySymbols(d);y<g.length;y++)m.indexOf(g[y])<0&&Object.prototype.propertyIsEnumerable.call(d,g[y])&&(h[g[y]]=d[g[y]])}return h}(o,["fontSize"]),u=f}return{fontSize:u,styles:c}},Z5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},F5=function(a){var l=a.className,o=a.text,u=a.textColor,c=a.staticText,f=a.style;return o?st.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(l||"").trim(),style:Xn(Xn(Xn({},c&&Z5),u&&{color:u,mixBlendMode:"unset"}),f&&f)},typeof o=="string"&&o.length?o:"loading"):null},Hg="rgb(50, 205, 50)";function K5(a,l){if(l===void 0&&(l=0),a.length===0)throw new Error("Input array cannot be empty!");var o=[];return function u(c,f){return f===void 0&&(f=0),o.push.apply(o,c),o.length<f&&u(o,f),o.slice(0,f)}(a,l)}Dt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Te(Hg).toRgb();Array.from({length:4},function(a,l){return"--atom-phase".concat(l+1,"-rgb")});Dt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--commet-phase".concat(l+1,"-color")});Dt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--OP-annulus-phase".concat(l+1,"-color")});function af(a){return a&&a.Math===Math&&a}Dt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);af(typeof window=="object"&&window)||af(typeof self=="object"&&self)||af(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,l){return"--OP-dotted-phase".concat(l+1,"-color")});Dt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--OP-spokes-phase".concat(l+1,"-color")});Dt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,l){return"--OP-annulus-dual-sectors-phase".concat(l+1,"-color")});Dt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return["--OP-annulus-track-phase".concat(l+1,"-color"),"--OP-annulus-sector-phase".concat(l+1,"-color")]});Dt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--four-square-phase".concat(l+1,"-color")});Dt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--mosaic-phase".concat(l+1,"-color")});Dt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--riple-phase".concat(l+1,"-color")});Dt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--TD-pulsate-phase".concat(l+1,"-color")});Dt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--TD-brick-stack-phase".concat(l+1,"-color")});Dt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--TD-bob-phase".concat(l+1,"-color")});Dt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--TD-bounce-phase".concat(l+1,"-color")});Dt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--shape-phase".concat(l+1,"-color")});Dt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);var Ko=Array.from({length:4},function(a,l){return"--trophySpin-phase".concat(l+1,"-color")}),J5=function(a){var l,o=Q5(a==null?void 0:a.style,a==null?void 0:a.size),u=o.styles,c=o.fontSize,f=a==null?void 0:a.easing,d=X5(a==null?void 0:a.speedPlus,"2.5s").animationPeriod,m=function(h){var g={},y=Ko.length;if(h instanceof Array){for(var E=K5(h,y),x=0;x<E.length&&!(x>=4);x++)g[Ko[x]]=E[x];return g}try{if(typeof h!="string")throw new Error("Color String expected");for(var A=0;A<y;A++)g[Ko[A]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h)," received in <TrophySpin /> indicator cannot be processed. Using default instead!")),A=0;A<y;A++)g[Ko[A]]=Hg}return g}((l=a==null?void 0:a.color)!==null&&l!==void 0?l:"");return st.createElement("span",{className:"rli-d-i-b trophy-spin-rli-bounding-box",style:Xn(Xn(Xn(Xn(Xn({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),u),role:"status","aria-live":"polite","aria-label":"Loading"},st.createElement("span",{className:"rli-d-i-b trophy-spin-indicator"},st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"}),st.createElement("span",{className:"blade"})),st.createElement(F5,{staticText:!0,text:a==null?void 0:a.text,textColor:a==null?void 0:a.textColor}))};Dt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--slab-phase".concat(l+1,"-color")});Dt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,l){return"--life-line-phase".concat(l+1,"-color")});const $5=()=>{const[a,l]=B.useState([]),[o,u]=B.useState([]),[c,f]=B.useState("All"),[d,m]=B.useState(""),[h,g]=B.useState(1500),[y,E]=B.useState(!0),x=["All",...Object.keys(nf.menu)];return B.useEffect(()=>{E(!0),setTimeout(()=>{const A=Object.values(nf.menu).flat();l(A),u(A),E(!1)},800)},[]),B.useEffect(()=>{if(a.length===0)return;let A=c==="All"?a:nf.menu[c];A=A.filter(T=>{const _=T.name.toLowerCase().includes(d.toLowerCase())||T.description.toLowerCase().includes(d.toLowerCase()),P=T.price<=h;return _&&P}),u(A)},[c,d,h,a]),v.jsxs("div",{className:"p-4 max-w-6xl mx-auto scroll-smooth bg-pink-50",children:[v.jsxs("div",{className:"flex gap-3 flex-wrap overflow-x-auto pb-4 border-b mb-6 sm:flex-wrap shadow p-2 rounded-2xl",children:[v.jsx("span",{className:"font-semibold text-2xl",children:"Categories:"}),x.map(A=>v.jsx("button",{onClick:()=>f(A),className:`px-4 py-2.5 rounded whitespace-nowrap capitalize ${c===A?"bg-orange-500 text-white":"border hover:bg-pink-200 hover:text-orange-500"}`,children:A},A))]}),v.jsxs("div",{className:"flex flex-wrap gap-6 mb-6 items-center shadow p-3 rounded-2xl",children:[v.jsx("input",{type:"text",placeholder:"Search by name or description...",value:d,onChange:A=>m(A.target.value),className:"border-1 p-2 rounded w-full sm:w-1/2 "}),v.jsxs("div",{className:"flex flex-col w-full sm:w-auto",children:[v.jsxs("label",{className:"text-sm font-medium",children:["Max Price: ₹",h]}),v.jsx("input",{type:"range",min:0,max:1500,step:10,value:h,onChange:A=>g(Number(A.target.value)),className:"w-64 "})]})]}),y?v.jsx("div",{className:"flex justify-center items-center h-64",children:v.jsx(J5,{color:"#de353f",size:"large",text:"",textColor:"#d1c3c3"})}):v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:o.length>0?o.map(A=>v.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:[v.jsx("div",{className:"transition-transform duration-300 hover:scale-105",children:v.jsx("img",{src:A.image,alt:A.name,className:"h-48 w-full object-cover"})}),v.jsxs("div",{className:"p-3",children:[v.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:A.name}),v.jsx("p",{className:"mt-1 text-sm text-gray-600 font-medium",children:A.description}),v.jsxs("p",{className:"text-lg font-bold text-green-600",children:["₹",A.price]})]})]},A.id)):v.jsx("p",{className:"col-span-full text-gray-500 text-center",children:"No matching items found."})})]})},W5=()=>{const a=$y([{path:"/",element:v.jsx(Gx,{}),children:[{path:"/",element:v.jsx($x,{})},{path:"/contact",element:v.jsx(E5,{})},{path:"/aboutshop",element:v.jsx(_5,{})},{path:"/menu",element:v.jsx($5,{})},{path:"/qrcode",element:v.jsx(_g,{})}]}]);return v.jsx(s2,{router:a})};e1.createRoot(document.getElementById("root")).render(v.jsx(B.StrictMode,{children:v.jsx(W5,{})}));
