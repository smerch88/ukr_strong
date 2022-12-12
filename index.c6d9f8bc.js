var e,t,n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=e={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function L(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var a,c=[],l=!1,h=-1;function u(){l&&a&&(l=!1,a.length?c=a.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=L(u);l=!0;for(var t=c.length;t;){for(a=c,c=[];++h<t;)a&&a[h].run();h=-1,t=c.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||L(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,L=t+2<e.length,a=L?e[t+2]:0,c=r>>2,l=(3&r)<<4|o>>4;let h=(15&o)<<2|a>>6,u=63&a;L||(u=64,s||(h=64)),i.push(n[c],n[l],n[h],n[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(g(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const L=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==L)throw Error();const a=r<<2|s>>4;if(i.push(a),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==L){const e=o<<6&192|L;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},v=function(e){return function(e){const t=g(e);return m.encodeByteArray(t,!0)}(e).replace(/\./g,"")},w=function(e){try{return m.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function H(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){const e=V();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,I=()=>{try{return y()||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&w(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=I())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{var t;return null===(t=I())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(A,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new S(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(N(n)&&N(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}class j{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new E;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class W{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new z(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=[];var q,K;(K=q||(q={}))[K.DEBUG=0]="DEBUG",K[K.VERBOSE=1]="VERBOSE",K[K.INFO=2]="INFO",K[K.WARN=3]="WARN",K[K.ERROR=4]="ERROR",K[K.SILENT=5]="SILENT";const G={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},J=q.INFO,Z={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},X=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Z[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Y{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?G[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}constructor(e){this.name=e,this._logLevel=J,this._logHandler=X,this._userLogHandler=null,$.push(this)}}let Q,ee;const te=new WeakMap,ne=new WeakMap,ie=new WeakMap,re=new WeakMap,se=new WeakMap;let oe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ie.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ce(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Le(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ee||(ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(le(this),t),ce(te.get(this))}:function(...t){return ce(e.apply(le(this),t))}:function(t,...n){const i=e.call(le(this),t,...n);return ie.set(i,t.sort?t.sort():[t]),ce(i)}}function ae(e){return"function"==typeof e?Le(e):(e instanceof IDBTransaction&&function(e){if(ne.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ne.set(e,t)}(e),t=e,(Q||(Q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,oe):e);var t}function ce(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ce(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&te.set(t,e)})).catch((()=>{})),se.set(t,e),t}(e);if(re.has(e))return re.get(e);const t=ae(e);return t!==e&&(re.set(e,t),se.set(t,e)),t}const le=e=>se.get(e);function he(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),L=ce(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ce(o.result),e.oldVersion,e.newVersion,ce(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),L.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),L}const ue=["get","getKey","getAll","getAllKeys","count"],de=["put","add","delete","clear"],pe=new Map;function fe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(pe.get(t))return pe.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=de.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ue.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return pe.set(t,s),s}oe=(e=>({...e,get:(t,n,i)=>fe(t,n)||e.get(t,n,i),has:(t,n)=>!!fe(t,n)||e.has(t,n)}))(oe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const me=new Y("@firebase/app"),ve={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},we=new Map,Ve=new Map;function He(e,t){try{e.container.addComponent(t)}catch(n){me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function be(e){const t=e.name;if(Ve.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;Ve.set(t,e);for(const t of we.values())He(t,e);return!0}function _e(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye=new O("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new j("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw ye.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=I())||void 0===s?void 0:s.config),!n)throw ye.create("no-options");const o=we.get(r);if(o){if(C(n,o.options)&&C(i,o.config))return o;throw ye.create("duplicate-app",{appName:r})}const L=new W(r);for(const e of Ve.values())L.addComponent(e);const a=new Ie(n,i,L);return we.set(r,a),a}function Te(e="[DEFAULT]"){const t=we.get(e);if(!t&&"[DEFAULT]"===e)return ke();if(!t)throw ye.create("no-app",{appName:e});return t}function Ee(e,t,n){var i;let r=null!==(i=ve[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void me.warn(e.join(" "))}be(new j(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Se=null;function Oe(){return Se||(Se=he("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ye.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ae(e,t){try{const n=(await Oe()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Re(e)),n.done}catch(e){if(e instanceof S)me.warn(e.message);else{const t=ye.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pe(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=v(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ne(){return(new Date).toISOString().substring(0,10)}class De{async runIndexedDBEnvironmentCheck(){return!!_()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Oe()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Re(e))}catch(e){if(e instanceof S)me.warn(e.message);else{const t=ye.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Pe(e){return v(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;Me="",be(new j("platform-logger",(e=>new ge(e)),"PRIVATE")),be(new j("heartbeat",(e=>new Ce(e)),"PRIVATE")),Ee("@firebase/app","0.9.0",Me),Ee("@firebase/app","0.9.0","esm2017"),Ee("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ee("firebase","9.15.0","app");function xe(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Ue(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fe=Ue,Be=new O("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),je=new Y("@firebase/auth");function ze(e,...t){je.logLevel<=q.ERROR&&je.error(`Auth (9.15.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,...t){throw Ge(e,...t)}function $e(e,...t){return Ge(e,...t)}function qe(e,t,n){const i=Object.assign(Object.assign({},Fe()),{[t]:n});return new O("auth","Firebase",i).create(t,{appName:e.name})}function Ke(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&We(e,"argument-error"),qe(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ge(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Be.create(e,...t)}function Je(e,t,...n){if(!e)throw Ge(t,...n)}function Ze(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ze(t),new Error(t)}function Xe(e,t){e||Ze(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Map;function Qe(e){Xe(e instanceof Function,"Expected a class definition");let t=Ye.get(e);return t?(Xe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ye.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tt(){return"http:"===nt()||"https:"===nt()}function nt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tt()||H()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{get(){return it()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Xe(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t){Xe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},at=new rt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lt(e,t,n,i,r={}){return ht(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=D(Object.assign({key:e.config.apiKey},s)).slice(1),L=await e._getAdditionalHeaders();return L["Content-Type"]="application/json",e.languageCode&&(L["X-Firebase-Locale"]=e.languageCode),ot.fetch()(dt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:L,referrerPolicy:"no-referrer"},r))}))}async function ht(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Lt),t);try{const t=new pt(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw ft(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ft(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ft(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ft(e,"user-disabled",s);const L=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw qe(e,L,o);We(e,L)}}catch(t){if(t instanceof S)throw t;We(e,"network-request-failed")}}async function ut(e,t,n,i,r={}){const s=await lt(e,t,n,i,r);return"mfaPendingCredential"in s&&We(e,"multi-factor-auth-required",{_serverResponse:s}),s}function dt(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?st(e.config,r):`${e.config.apiScheme}://${r}`}class pt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t($e(this.auth,"network-request-failed"))),at.get())}))}}function ft(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=$e(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return 1e3*Number(e)}function vt(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ze("JWT malformed, contained fewer than 3 sections"),null;try{const e=w(n);return e?JSON.parse(e):(ze("Failed to decode base64 JWT payload"),null)}catch(e){return ze("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof S&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{_initializeTime(){this.lastSignInTime=gt(this.lastLoginAt),this.creationTime=gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await wt(e,async function(e,t){return lt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Je(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=xe(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const L=(a=e.providerData,c=o,[...a.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var a,c;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==L?void 0:L.length)),u=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:L,metadata:new Ht(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Je(e.idToken,"internal-error"),Je(void 0!==e.idToken,"internal-error"),Je(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=vt(e);return Je(t,"internal-error"),Je(void 0!==t.exp,"internal-error"),Je(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Je(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ht(e,{},(async()=>{const n=D({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=dt(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ot.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new _t;return n&&(Je("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Je("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Je("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return Ze("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t){Je("string"==typeof e||void 0===e,"internal-error",{appName:t})}class It{async getIdToken(e){const t=await wt(this,this.stsTokenManager.getToken(this.auth,e));return Je(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=B(e),i=await n.getIdToken(t),r=vt(i);Je(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:gt(mt(r.auth_time)),issuedAtTime:gt(mt(r.iat)),expirationTime:gt(mt(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=B(e);await bt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await bt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wt(this,async function(e,t){return lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,L,a,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,f=null!==(L=t._redirectEventId)&&void 0!==L?L:void 0,g=null!==(a=t.createdAt)&&void 0!==a?a:void 0,m=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:V,providerData:H,stsTokenManager:b}=t;Je(v&&b,e,"internal-error");const _=_t.fromJSON(this.name,b);Je("string"==typeof v,e,"internal-error"),yt(l,e.name),yt(h,e.name),Je("boolean"==typeof w,e,"internal-error"),Je("boolean"==typeof V,e,"internal-error"),yt(u,e.name),yt(d,e.name),yt(p,e.name),yt(f,e.name),yt(g,e.name),yt(m,e.name);const y=new It({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:V,photoURL:d,phoneNumber:u,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:m});return H&&Array.isArray(H)&&(y.providerData=H.map((e=>Object.assign({},e)))),f&&(y._redirectEventId=f),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new _t;i.updateFromServerResponse(t);const r=new It({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await bt(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=xe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ht(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}kt.type="NONE";const Tt=kt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t,n){return`firebase:${e}:${t}:${n}`}class St{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new St(Qe(Tt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Qe(Tt);const s=Et(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=It._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const L=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&L.length?(r=L[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new St(r,e,n)):new St(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Et(this.userKey,i.apiKey,r),this.fullPersistenceKey=Et("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Nt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(At(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pt(t))return"Blackberry";if(Mt(t))return"Webos";if(Rt(t))return"Safari";if((t.includes("chrome/")||Ct(t))&&!t.includes("edge/"))return"Chrome";if(Dt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function At(e=V()){return/firefox\//i.test(e)}function Rt(e=V()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ct(e=V()){return/crios\//i.test(e)}function Nt(e=V()){return/iemobile/i.test(e)}function Dt(e=V()){return/android/i.test(e)}function Pt(e=V()){return/blackberry/i.test(e)}function Mt(e=V()){return/webos/i.test(e)}function xt(e=V()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ut(){return b()&&10===document.documentMode}function Ft(e=V()){return xt(e)||Dt(e)||Mt(e)||Pt(e)||/windows phone/i.test(e)||Nt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bt(e,t=[]){let n;switch(e){case"Browser":n=Ot(V());break;case"Worker":n=`${Ot(V())}-${e}`;break;default:n=e}return`${n}/JsCore/9.15.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?B(e):null;return t&&Je(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Qe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new O("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;Je(t,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Je(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $t(this),this.idTokenSubscription=new $t(this),this.beforeStateQueue=new jt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Be,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Wt(e){return B(e)}class $t{get next(){return Je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=x((e=>this.observer=e))}}function qt(e,t,n){const i=Wt(e);Je(i._canInitEmulator,i,"emulator-config-failed"),Je(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Kt(t),{host:o,port:L}=function(e){const t=Kt(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Gt(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Gt(t)}}}(t),a=null===L?"":`:${L}`;i.config.emulator={url:`${s}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:L,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Kt(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Gt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Jt{toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return lt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Jt{static _fromEmailAndPassword(e,t){return new Xt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPassword",ct(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",ct(e,t))}(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Zt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",ct(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t){return ut(e,"POST","/v1/accounts:signInWithIdp",ct(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Jt{static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=xe(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Qt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Yt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=D(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn extends Jt{static _fromVerification(e,t){return new tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",ct(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ut(e,"POST","/v1/accounts:signInWithPhoneNumber",ct(e,t));if(n.temporaryProof)throw ft(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",ct(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),en)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new tn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{static parseLink(e){const t=function(e){const t=P(M(e)).link,n=t?P(M(t)).deep_link_id:null,i=P(M(e)).deep_link_id;return(i?P(M(i)).link:null)||i||n||t||e}(e);try{return new nn(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const L=P(M(e)),a=null!==(t=L.apiKey)&&void 0!==t?t:null,c=null!==(n=L.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=L.mode)&&void 0!==i?i:null);Je(a&&c&&l,"argument-error"),this.apiKey=a,this.operation=l,this.code=c,this.continueUrl=null!==(r=L.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=L.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=L.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{static credential(e,t){return Xt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=nn.parseLink(t);return Je(n,"argument-error"),Xt._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=rn.PROVIDER_ID}}rn.PROVIDER_ID="password",rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends sn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends on{static credential(e){return Qt._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ln.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an extends on{static credential(e,t){return Qt._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return an.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}an.GOOGLE_SIGN_IN_METHOD="google.com",an.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn extends on{static credential(e){return Qt._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}cn.GITHUB_SIGN_IN_METHOD="github.com",cn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln extends on{static credential(e,t){return Qt._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ln.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}ln.TWITTER_SIGN_IN_METHOD="twitter.com",ln.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await It._fromIdTokenResponse(e,n,i),s=un(n);return new hn({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=un(n);return new hn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function un(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn extends S{static _fromErrorAndOperation(e,t,n,i){return new dn(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,dn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function pn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw dn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t,n=!1){const i=await wt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gn(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await wt(e,pn(i,r,t,e),n);Je(s.idToken,i,"internal-error");const o=vt(s.idToken);Je(o,i,"internal-error");const{sub:L}=o;return Je(e.uid===L,i,"user-mismatch"),hn._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&We(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t,n=!1){const i="signIn",r=await pn(e,i,t),s=await hn._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends vn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ut()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=V();return Rt(e)||xt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ft(),this._shouldAllowMigration=!0}}wn.type="LOCAL";const Vn=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends vn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Hn.type="SESSION";const bn=Hn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _n(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),L=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:L})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.receivers=[];class In{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,L)=>{const a=yn("",20);i.port1.start();const c=setTimeout((()=>{L(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===a)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{L(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),L(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tn(){return void 0!==kn().WorkerGlobalScope&&"function"==typeof kn().importScripts}class En{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Sn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function On(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new En(e).toPromise()}(),t(await On()))}))}))}async function An(e,t,n){const i=Sn(e,!0).put({fbase_key:t,value:n});return new En(i).toPromise()}function Rn(e,t){const n=Sn(e,!0).delete(t);return new En(n).toPromise()}class Cn{async _openDb(){return this.db||(this.db=await On()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_n._getInstance(Tn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new In(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await On();return await An(e,"__sak","1"),await Rn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>An(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Sn(e,!1).get(t),i=await new En(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Rn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Sn(e,!1).getAll();return new En(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Cn.type="LOCAL";const Nn=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=$e("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Pn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Pn("rcb"),new rt(3e4,6e4);async function Mn(e,t,n){var i;const r=await n.verify();try{let s;if(Je("string"==typeof r,e,"argument-error"),Je("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Je("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return lt(e,"POST","/v2/accounts/mfaEnrollment:start",ct(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Je("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Je(n,e,"missing-multi-factor-info");const o=await function(e,t){return lt(e,"POST","/v2/accounts/mfaSignIn:start",ct(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return lt(e,"POST","/v1/accounts:sendVerificationCode",ct(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{verifyPhoneNumber(e,t){return Mn(this.auth,e,B(t))}static credential(e,t){return tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return xn.credentialFromTaggedObject(t)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?tn._fromTokenResponse(t,n):null}constructor(e){this.providerId=xn.PROVIDER_ID,this.auth=Wt(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(e,t){return t?Qe(t):(Je(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.PROVIDER_ID="phone",xn.PHONE_SIGN_IN_METHOD="phone";class Fn extends Jt{_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Bn(e){return mn(e.auth,new Fn(e),e.bypassAuthState)}function jn(e){const{auth:t,user:n}=e;return Je(n,t,"internal-error"),gn(n,new Fn(e),e.bypassAuthState)}async function zn(e){const{auth:t,user:n}=e;return Je(n,t,"internal-error"),fn(n,new Fn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const L={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(L))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bn;case"linkViaPopup":case"linkViaRedirect":return zn;case"reauthViaPopup":case"reauthViaRedirect":return jn;default:We(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new rt(2e3,1e4);async function qn(e,t,n){const i=Wt(e);Ke(e,t,sn);const r=Un(i,n);return new Kn(i,"signInViaPopup",t,r).executeNotNull()}class Kn extends Wn{async executeNotNull(){const e=await this.execute();return Je(e,this.auth,"internal-error"),e}async onExecution(){Xe(1===this.filter.length,"Popup operations only handle one event");const e=yn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject($e(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,$n.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}}Kn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gn=new Map;class Jn extends Wn{async execute(){let e=Gn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Yn(t),i=Xn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Zn(e,t){Gn.set(e._key(),t)}function Xn(e){return Qe(e._redirectPersistence)}function Yn(e){return Et("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e,t,n=!1){const i=Wt(e),r=Un(i,t),s=new Jn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class ei{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ni(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ni(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError($e(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ti(e))}saveEventToCache(e){this.cachedEventUids.add(ti(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ti(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ni({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ri=/^https?/;async function si(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return lt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(oi(e))return}catch(e){}We(e,"unauthorized-domain")}function oi(e){const t=et(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ri.test(n))return!1;if(ii.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new rt(3e4,6e4);function ai(){const e=kn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ci=null;function li(e){return ci=ci||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){ai(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ai(),n($e(e,"network-request-failed"))},timeout:Li.get()})}if(null===(r=null===(i=kn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=kn().gapi)||void 0===s?void 0:s.load)){const t=Pn("iframefcb");return kn()[t]=()=>{gapi.load?o():n($e(e,"network-request-failed"))},Dn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ci=null,e}))}(e),ci}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new rt(5e3,15e3),ui={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},di=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pi(e){const t=e.config;Je(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?st(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.15.0"},r=di.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${D(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function mi(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let L="";const a=Object.assign(Object.assign({},fi),{width:i.toString(),height:r.toString(),top:s,left:o}),c=V().toLowerCase();n&&(L=Ct(c)?"_blank":n),At(c)&&(t=t||"http://localhost",a.scrollbars="yes");const l=Object.entries(a).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=V()){var t;return xt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==L)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",L),new gi(null);const h=window.open(t||"",L,l);Je(h,e,"popup-blocked");try{h.focus()}catch(e){}return new gi(h)}function vi(e,t,n,i,r,s){Je(e.config.authDomain,e,"auth-domain-config-required"),Je(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.15.0",eventId:r};if(t instanceof sn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",R(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof on){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const L=o;for(const e of Object.keys(L))void 0===L[e]&&delete L[e];return`${function({config:e}){return e.emulator?st(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${D(L).slice(1)}`}const wi=class{async _openPopup(e,t,n,i){var r;Xe(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return mi(e,vi(e,t,n,et(),i),yn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=vi(e,t,n,et(),i),kn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Xe(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await li(e),n=kn().gapi;return Je(n,e,"internal-error"),t.open({where:document.body,url:pi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ui,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=$e(e,"network-request-failed"),s=kn().setTimeout((()=>{i(r)}),hi.get());function o(){kn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new ei(e);return t.register("authEvent",(t=>{Je(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),We(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=si(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ft()||Rt()||xt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bn,this._completeRedirectFn=Qn,this._overrideRedirectResult=Zn}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi=T("authIdTokenMaxAge")||300;let bi=null;var _i;_i="Browser",be(new j("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{Je(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Je(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:_i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bt(_i)},o=new zt(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),be(new j("auth-internal",(e=>{const t=Wt(e.getProvider("auth").getImmediate());return new Vi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ee("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_i)),Ee("@firebase/auth","0.21.0","esm2017");const yi=function(e=Te()){const t=_e(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=_e(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(C(n.getOptions(),null!=t?t:{}))return e;We(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:wi,persistence:[Nn,Vn,bn]}),i=T("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Hi)return;const i=null==t?void 0:t.token;bi!==i&&(bi=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){B(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){B(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=k("auth");return s&&qt(n,`http://${s}`),n}(ke({apiKey:"AIzaSyAFJEYkyjLPKiINvDPPHnVXHJT5q1mWo7A",authDomain:"urkstrong-5d465.firebaseapp.com",databaseURL:"https://urkstrong-5d465-default-rtdb.firebaseio.com",projectId:"urkstrong-5d465",storageBucket:"urkstrong-5d465.appspot.com",messagingSenderId:"422349636540",appId:"1:422349636540:web:6e20659c8e292b95a361b9"})),Ii=new cn;document.querySelector(".loginJS").addEventListener("click",(function(){qn(yi,Ii).then((e=>{const t=cn.credentialFromResult(e),n=t.accessToken,i=e.user;if(console.log(n),console.log(t),console.log(i.uid),"KcXUsbUEOMMsDuD5LsyEDy2Sdk73"===i.uid){alert("admin hello");let e=!0;console.log(e);document.forms.inputJS.addEventListener("submit",(t=>{if(t.preventDefault(),e){console.log(t.currentTarget.chooseoblast.selectedIndex);t.currentTarget.chooseoblast.selectedIndex;console.log(t.currentTarget),console.log(t.currentTarget)}else console.log("not admin")}))}})).catch((e=>{e.code,e.message,e.customData.email,cn.credentialFromError(e)}))}));const ki={0:{1:"41кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},1:{1:"42кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},2:{1:"43кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},3:{1:"44кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},4:{1:"45кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},5:{1:"46кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},6:{1:"47кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},7:{1:"48кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},8:{1:"49кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},9:{1:"50кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},10:{1:"51кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},11:{1:"50кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},12:{1:"53кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},13:{1:"54кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},14:{1:"55кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},15:{1:"56кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},16:{1:"57кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},17:{1:"58кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},18:{1:"59кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},19:{1:"60кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},20:{1:"61кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},21:{1:"62кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},22:{1:"63кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},23:{1:"64кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"},24:{1:"65кг речей",2:"1300 касок",3:"40 автівок",4:"5 танків"}},Ti={0:{0:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},1:{0:["120 001","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},2:{0:["120 002","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},3:{0:["120 003","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},4:{0:["120 004","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},5:{0:["120 005","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},6:{0:["120 006","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},7:{0:["120 007","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},8:{0:["120 008","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},9:{0:["120 009","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},10:{0:["120 010","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},11:{0:["120 011","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},12:{0:["120 012","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},13:{0:["120 013","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},14:{0:["120 014","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},15:{0:["120 015","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},16:{0:["120 016","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},17:{0:["120 017","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},18:{0:["120 018","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},19:{0:["120 019","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},20:{0:["120 020","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},21:{0:["120 021","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},22:{0:["120 022","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},23:{0:["120 023","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},24:{0:["120 024","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]},25:{0:["120 025","на потреби зсу","фонд “еремiя” вул. городецького 23"],1:["20","автівок","фонд “еремiя” вул. городецького 23"],2:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"],3:["180 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],4:["120 000","на потреби зсу","фонд “еремiя” вул. городецького 23"],5:["3000","кг продуктів","фонд “еремiя” вул. городецького 23"]}},Ei=document.querySelectorAll(".swiper-slide");console.log(Ei);const Si=document.querySelector(".oblastJS"),Oi=document.querySelector(".Ukraine"),Ai=document.querySelector(".charityJS"),Ri=document.querySelector(".charityWrapperJS");new Swiper(".mySwiper",{slidesPerView:3,grid:{fill:"row",rows:2},spaceBetween:8,on:{click(e){console.log("event.target",this.clickedIndex);let t=parseInt(this.clickedIndex);(e=>{switch(e){case 0:console.log("drawing Луцьк"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="129" height="135" viewBox="0 0 129 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M109.085 11.2997V5.92593H107.284L101.879 4.58249L96.0248 2.79125L92.8723 1H87.9184H82.5142L77.5603 2.79125H71.7057H60.8972H51.8901H46.0355L39.7305 7.26936L38.8298 11.2997L37.4787 14.4343L32.0745 19.3603L27.1206 22.4949L23.5177 24.2862H20.3652L16.3121 22.4949L13.6099 20.7037H7.30496L2.35106 21.5993L1 24.2862L5.50355 36.3771V39.5118L2.35106 44.8855V46.6768L7.30496 52.9461L12.2589 59.6633V62.3502L15.4113 72.6498L18.5638 81.6061L21.7163 85.1886V87.8754H17.2128L15.4113 88.771V91.9057L18.5638 96.8316L20.3652 101.31L21.7163 104.892L24.4184 106.236L26.6702 108.923L29.3723 110.714L31.6241 108.027L33.4255 107.131L37.0284 108.923V112.505H38.8298L41.5319 115.192L40.1809 116.983L38.8298 118.327V122.805L40.1809 125.044L42.4326 123.7L48.2872 125.044V126.835L51.4397 129.074L53.6915 134L55.9433 131.761H59.5461L65.8511 132.657L69.4539 134H72.6064L76.2092 131.761V129.074L74.8582 126.835L72.6064 125.044V122.805L74.8582 121.461V119.222L76.2092 116.088L78.461 116.983H83.4149V115.192V112.505H87.9184V107.131H95.5745H98.2766H101.879L107.284 110.714H111.787L114.039 108.027V99.9663L116.291 98.6229L118.092 96.3838H120.794L122.596 93.697V88.771H124.397V84.7407H128V82.9495L127.099 82.0539V78.4714L125.748 76.6801H121.695L120.794 75.7845L121.695 71.7542L125.748 70.4108L127.099 68.1717L124.397 63.6936L119.894 62.3502L118.092 58.3199L116.291 54.7374L115.39 51.1549H111.787H103.23L101.879 42.1987V40.8552V38.1684L104.131 34.5859V31.0034L103.23 29.6599L100.528 26.5253V22.0471L104.131 18.0168L106.383 14.4343L109.085 11.2997Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">ЛУЦЬК</text>\n';break;case 1:console.log("drawing Миколаїв"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="163" height="135" viewBox="0 0 163 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M55.3919 120.438L54.0865 122.625V131.375V131.812L56.6973 131.375L61.0486 133.562L63.2243 134L66.7054 132.25L71.4919 127L72.7973 123.938L71.0568 120.438L72.7973 119.562L77.1486 117.812L75.8432 121.312L74.5378 126.125V132.25L77.1486 133.125L80.1946 129.188H83.6757L84.9811 130.5L89.7676 131.812L94.1189 130.5L96.2946 127.875V122.625L94.1189 119.562L95.4243 117.375L98.0351 118.25V121.312L99.3405 122.625L104.562 121.312H110.219L115.441 116.062H118.051H119.792L122.838 113H125.449H128.059L132.846 109.938H138.503L139.808 113L146.77 114.312L150.251 111.25L146.77 107.312H152.862L155.908 103.812L154.603 100.75H157.649L159.824 96.8125L154.603 92.4375L150.251 90.6875L152.862 85.875L156.778 85L159.824 82.375L162 79.3125L161.13 75.8125V68.8125L158.519 65.75L156.778 60.5L159.824 62.25L161.13 59.625L159.824 55.6875V51.3125L155.908 48.6875L154.603 46.0625L152.862 41.25L154.603 39.0625H158.519L156.778 35.5625V27.6875L157.649 25.0625L154.603 22V18.0625L155.908 14.5625L152.862 12.8125H150.251L147.205 15.875L145.03 18.0625L143.289 19.8125L141.549 18.0625H137.632L135.457 20.6875V22L136.762 23.75L135.457 26.375V28.5625V29.875L134.586 32.9375L131.541 34.6875L125.884 35.5625L119.357 32.9375H111.959L106.738 39.0625L103.257 36.875L101.081 34.6875H91.073L89.3324 29.875L91.073 27.6875V23.75L86.7216 22L83.2405 18.0625V15.875L85.4162 14.5625V9.75H81.0649L77.1486 8.875L74.1027 12.8125L71.0568 14.5625V11.5L71.927 9.75L69.3162 7.5625L66.7054 9.75L64.0946 8.875H57.5676L55.3919 4.5L53.2162 1H47.1243H43.6432L41.4676 4.5L38.4216 5.8125L34.5054 4.5L33.2 5.8125L30.5892 3.625H25.8027L22.3216 5.8125H10.1378L8.83243 4.5L5.35135 7.125L7.09189 10.625L4.04595 11.5L1 12.375V13.6875L1.87027 15.875V19.8125L5.35135 22L6.22162 29L7.09189 32.9375L10.1378 36V38.1875L11.8784 39.0625V43.4375V48.25H14.0541L14.9243 50.4375H18.8405L20.5811 49.125L23.1919 48.25L25.8027 50.4375L28.4135 51.3125L30.5892 48.25L32.3297 51.3125L34.5054 53.9375L37.5513 57.875L36.2459 60.9375V61.8125V67.0625V71.875L38.4216 78.4375H43.6432L45.8189 79.75H47.9946V78.4375H52.3459L54.0865 79.75L52.3459 82.8125L50.6054 85L52.3459 87.1875L55.3919 88.5H58.873V90.6875L60.6135 92.875V96.375L58.873 99V101.188L57.5676 103.375H53.2162L47.9946 104.25L46.6892 106L49.7351 111.25L55.3919 116.062V120.438Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n<text class="oblast-text">Миколаїв</text>\n';break;case 2:console.log("drawing Кіровоград"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="176" height="92" viewBox="0 0 176 92" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M138.225 70.5455L140.609 71.9091L142.652 70.5455L146.057 68.8409L150.143 63.0455L153.207 61.3409L156.953 58.9545L159.677 56.5682L160.358 53.8409L158.315 50.7727V47.3636L156.953 42.25V38.8409L160.358 37.4773L165.125 34.4091L169.552 31.6818L170.573 29.2955L166.487 27.5909L162.061 25.5455L160.358 22.4773L165.125 21.4545L169.552 22.4773L173.297 20.7727L175 18.7273V16L171.935 13.2727L167.509 14.2955L164.444 16L162.061 14.6364H157.634L156.953 13.2727L151.505 12.9318L149.462 9.52273L150.143 8.84091V6.45455L148.44 5.09091L141.971 2.36364L133.798 1L127.329 5.09091L129.712 8.84091L128.691 10.2045L119.497 14.2955H116.432L112.006 6.79545H105.536L100.088 12.9318V16L99.4071 17.0227L94.9804 15.3182L91.2348 19.4091H89.1918L86.4677 14.2955H82.0411L81.0196 16H74.8904V20.7727L69.7828 27.5909H68.0802L65.0157 26.9091H61.2701L57.5245 28.9545L54.4599 27.5909L44.9256 26.9091L41.8611 26.5682L38.1155 29.6364L34.3699 34.0682V39.8636H31.9863L30.2838 38.5H28.2407L26.5382 41.5682H24.8356L21.09 44.6364L18.7065 43.2727L13.5988 45.3182L12.9178 46.6818L10.8748 49.0682L8.15069 50.4318L6.78865 48.3864L5.76712 47.7045L4.06458 48.7273L2.36204 50.4318L1 51.7955L3.38356 54.5227L6.78865 55.8864L9.85323 58.6136L11.2153 61V63.3864L11.8963 65.0909L14.2798 66.1136H20.0685H22.7926L25.5166 64.0682L26.5382 65.0909H36.0724L38.7965 63.3864H42.5421L44.5851 65.0909L45.6067 64.0682L48.6712 65.0909L51.0548 64.0682L52.7573 61.3409H55.4814H60.2485L61.9511 64.0682L63.6536 67.4773H68.7613L70.8043 68.1591L72.8474 66.4545L74.8904 68.1591L74.2094 69.5227V71.9091L76.593 70.5455L78.9765 67.4773L82.0411 68.1591H85.4462V71.9091L83.7436 72.9318V74.6364L86.4677 77.7045L89.8728 79.0682V82.1364L88.5108 83.8409L89.8728 87.5909H97.7045L99.4071 89.2955L102.131 91L106.217 86.2273H112.006L117.114 88.2727L121.54 87.5909L123.924 86.2273L124.605 83.8409V82.8182V81.1136L125.626 79.0682L124.605 77.7045V76.6818L126.307 74.6364H129.372L130.734 76L132.096 74.6364L133.798 72.9318L136.182 70.5455H138.225Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n<text class="oblast-text">Кіровоград</text>\n';break;case 3:console.log("drawing Полтава"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="162" height="131" viewBox="0 0 162 131" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.92308 28.0359L1 26.1048L1.76923 24.1737L3.30769 21.0838L3.69231 18.3802L7.92308 19.1527L10.2308 17.6078L12.5385 15.6767L14.0769 14.1317L15.6154 15.6767H17.1538L18.6923 14.1317L21 16.8353H23.3077L25.2308 17.6078L26 16.8353H28.3077L30.6154 17.6078L32.5385 15.6767L36.3846 14.1317L39.8462 12.2006L40.6154 10.6557L42.1538 9.88325L45.2308 6.4072L46 4.64479H51.3846L52.1538 5.2485L54.8462 2.93114L56.7692 3.31737L59.0769 5.2485L60.6154 6.4072L65.6154 6.02096L67.5385 5.2485H69.4615L75.6154 7.9521L77.9231 6.4072L81.3846 6.02096L82.5385 3.31737H86L90.6154 6.79341L92.9231 5.2485L95.6154 2.15868L99.4615 1L100.615 1.77246L101 7.9521L102.538 10.2695L105.231 12.2006L106.769 14.1317V15.2904L106 16.4491V18.3802L109.462 20.6976L109.846 23.015L113.308 24.9461L112.923 27.2635L111.385 28.4222L110.615 29.5808L111.385 30.7395H114.846L115.615 29.5808H117.154V30.7395L121.769 30.3533L122.154 29.1946L123.308 28.4222L125.231 27.6497L127.154 25.7186L128.692 26.491L129.846 27.2635L132.154 27.6497V32.6707H132.923V34.2156L131.385 34.6018L128.692 38.4641L129.462 39.6228L130.615 41.1677V44.2575L134.077 45.4162L138.692 46.1886L140.231 48.506L142.154 49.2784L142.923 48.506L145.231 48.8922L146.385 50.0509V55.0719L148.308 57.3892L151.385 60.8653L154.462 60.479L157.154 59.3204L157.923 60.479L158.308 61.6377L157.154 62.7964L157.538 64.3413L159.077 66.2725L161 67.8174L160.615 68.9761H157.154L157.538 69.7485L160.615 72.0659L159.077 73.997H154.462V76.3144L155.231 77.4731V83.2665L151.385 86.7425L149.846 88.2874L144.077 88.6737L141 86.7425L139.077 89.0599V90.6048L140.231 91.7635L137.923 93.3084L139.077 94.4671L140.231 95.6257V98.3293H135.615L129.846 97.9431L126.385 101.033L121.769 103.737L117.154 104.895L114.462 106.44L111.769 111.075L108.692 116.482L106.769 118.799V120.344L108.692 121.889V126.138L107.923 130L104.077 127.683L99.4615 124.979L94.8462 124.207L91 124.979V121.889L87.5385 118.799L82.5385 119.958L79.0769 121.889L76.3846 120.344H71.3846L70.6154 118.799L64.4615 118.413L62.1538 114.551L62.9231 113.778V111.075L61 109.53L53.6923 106.44L54.8462 104.895L51.3846 100.26L44.8462 91.3772L42.1538 86.7425L34.4615 83.2665L32.5385 79.4042L34.4615 74.3832L32.5385 70.1347L28.3077 66.2725L25.6154 65.1138L24.8462 59.7066L20.6154 58.9341L17.5385 55.8443L15.6154 53.1407L17.1538 51.2096L18.3077 48.506V46.1886L13.3077 41.1677L9.46154 39.2365V34.6018L8.30769 31.8982L4.07692 29.9671L2.92308 28.0359Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Полтава</text>\n';break;case 4:console.log("drawing Херсон"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="171" height="111" viewBox="0 0 171 111" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M124.558 7.0346L119.676 4.39446H111.789H108.409L102.776 5.90311H97.8933L94.1378 3.64014L91.8844 1H90.0067L87.7533 4.39446L84.3733 5.14879L82.12 7.0346L79.8667 2.88581H74.6089L73.1067 1H70.4778V4.77163L71.6044 8.16609L70.4778 10.4291L67.8489 8.92042L69.3511 13.4464L71.6044 16.0865V22.1211L72.3556 25.1384L70.4778 27.7785L67.8489 30.0415L64.4689 30.7958L62.2156 34.9446L65.9711 36.4533L70.4778 40.2249L68.6 43.6194H65.9711L67.0978 46.2595L64.4689 49.2768H59.2111L62.2156 52.6713L59.2111 55.3114L53.2022 54.1799L52.0756 51.5398H47.1933L43.0622 54.1799H40.8089H38.5556L35.9267 56.8201H34.4244H32.1711L27.6644 61.346H22.7822L18.2756 62.4775L19.7778 68.1349L22.7822 70.3979L25.4111 71.1523L27.6644 73.7924L32.1711 72.6609L35.9267 75.6782L40.4333 74.9239L44.5644 70.3979L45.6911 72.6609L40.4333 77.9412L38.5556 80.9585L37.4289 81.4883L30.2933 79.827L24.66 77.9412H16.3978L11.14 76.8097L6.63333 75.6782L1 77.9412L4.00444 82.4671L7.38444 80.3121L11.14 80.9585L16.3978 83.9758L20.9044 82.8443L22.4067 84.3529L21.28 88.1246L16.3978 91.1419L12.2667 90.3875L9.26222 91.1419V93.782L12.6422 94.9135L17.1489 93.782L20.9044 96.4221H23.5333L27.2889 100.948L32.1711 102.08L35.1756 105.851L39.6822 108.114H45.6911L50.5733 106.228H56.9578L59.5867 103.588H63.7178L69.7267 104.343L71.6044 102.08H73.4822L76.1111 103.588L79.4911 99.8166H81.3689V102.08L84.7489 102.834L86.2511 105.097H88.1289L89.2556 106.983L93.0111 108.663L96.3911 106.228V102.834H99.02L102.776 99.8166L102.024 97.5536L107.658 94.5363L110.287 96.045L114.042 94.5363L115.92 96.045V98.6851L118.924 100.948L121.929 100.194L123.056 96.045L126.436 91.8962L129.44 92.6505L132.82 99.8166H134.322L136.2 96.045L138.829 96.7993L140.331 99.8166H142.584L144.087 101.325L140.331 102.834V106.228L143.336 110L146.34 109.246L149.344 103.588H152.349L155.353 107.737L160.611 109.246V105.474L157.982 102.834V100.948H156.48L160.987 90.7647L163.991 90.0104L166.244 91.8962L168.498 90.7647L170 87.7474L168.498 84.7301L166.996 76.4325V74.9239L163.24 74.1695L158.358 73.0381L157.231 70.0208L153.851 69.2664L150.847 67.0035L152.349 64.7405V62.1003L148.218 61.346L147.467 58.3287H149.72L150.847 55.6886L152.349 50.7855L153.851 50.0311V47.391L149.72 43.9965L147.467 42.1107L143.336 41.3564L142.209 38.7163V33.436L138.829 29.2872L137.702 24.3841L139.58 20.2353L136.2 16.8408H133.947L132.82 18.3495V19.481H127.562L124.558 13.4464V7.0346Z" fill="#AFB78E"/>\n<path d="M17.1489 58.7059V61.346L18.2756 62.4775M18.2756 62.4775L22.7822 61.346H27.6644L32.1711 56.8201H34.4244H35.9267L38.5556 54.1799H40.8089H43.0622L47.1933 51.5398H52.0756L53.2022 54.1799L59.2111 55.3114L62.2156 52.6713L59.2111 49.2768H64.4689L67.0978 46.2595L65.9711 43.6194H68.6L70.4778 40.2249L65.9711 36.4533L62.2156 34.9446L64.4689 30.7958L67.8489 30.0415L70.4778 27.7785L72.3556 25.1384L71.6044 22.1211V16.0865L69.3511 13.4464L67.8489 8.92042L70.4778 10.4291L71.6044 8.16609L70.4778 4.77163V1H73.1067L74.6089 2.88581H79.8667L82.12 7.0346L84.3733 5.14879L87.7533 4.39446L90.0067 1H91.8844L94.1378 3.64014L97.8933 5.90311H102.776L108.409 4.39446H111.789H119.676L124.558 7.0346V13.4464L127.562 19.481H132.82V18.3495L133.947 16.8408H136.2L139.58 20.2353L137.702 24.3841L138.829 29.2872L142.209 33.436V38.7163L143.336 41.3564L147.467 42.1107L149.72 43.9965L153.851 47.391V50.0311L152.349 50.7855L150.847 55.6886L149.72 58.3287H147.467L148.218 61.346L152.349 62.1003V64.7405L150.847 67.0035L153.851 69.2664L157.231 70.0208L158.358 73.0381L163.24 74.1696L166.996 74.9239V76.4325L168.498 84.7301L170 87.7474L168.498 90.7647L166.244 91.8962L163.991 90.0104L160.987 90.7647L156.48 100.948H157.982V102.834L160.611 105.474V109.246L155.353 107.737L152.349 103.588H149.344L146.34 109.246L143.336 110L140.331 106.228V102.834L144.087 101.325L142.584 99.8166H140.331L138.829 96.7993L136.2 96.045L134.322 99.8166H132.82L129.44 92.6505L126.436 91.8962L123.056 96.045L121.929 100.194L118.924 100.948L115.92 98.6851V96.045L114.042 94.5363L110.287 96.045L107.658 94.5363L102.024 97.5536L102.776 99.8166L99.02 102.834H96.3911V106.228L93.0111 108.663L89.2556 106.983L88.1289 105.097H86.2511L84.7489 102.834L81.3689 102.08V99.8166H79.4911L76.1111 103.588L73.4822 102.08H71.6044L69.7267 104.343L63.7178 103.588H59.5867L56.9578 106.228H50.5733L45.6911 108.114H39.6822L35.1756 105.851L32.1711 102.08L27.2889 100.948L23.5333 96.4221H20.9044L17.1489 93.782L12.6422 94.9135L9.26222 93.782V91.1419L12.2667 90.3875L16.3978 91.1419L21.28 88.1246L22.4067 84.3529L20.9044 82.8443L16.3978 83.9758L11.14 80.9585L7.38444 80.3121L4.00444 82.4671L1 77.9412L6.63333 75.6782L11.14 76.8097L16.3978 77.9412H24.66L30.2933 79.827L37.4289 81.4883L38.5556 80.9585L40.4333 77.9412L45.6911 72.6609L44.5644 70.3979L40.4333 74.9239L35.9267 75.6782L32.1711 72.6609L27.6644 73.7924L25.4111 71.1523L22.7822 70.3979L19.7778 68.1349L18.2756 62.4775Z" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Херсон</text>\n';break;case 5:console.log("drawing Суми"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="107" height="136" viewBox="0 0 107 136" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.7222 113.026H6.18518V111.908L7.15741 110.282L7.48148 106.704L6.83333 106.053L5.53704 105.078V103.451L6.18518 102.15L8.4537 101.825L9.42593 100.524L9.75 99.5485L8.77778 97.754L7.15741 97.5971L6.83333 95.9709L7.80556 95.6456L8.4537 93.3689L8.77778 91.7427L10.3981 90.4417V86.8641L9.75 85.8884V81.9854L6.50926 82.3107L5.53704 81.335L4.88889 80.034L2.94444 79.7087L2.2963 78.733L1 78.0825V73.8544L1.97222 73.5291L2.94444 71.5777L3.91667 69.9515L4.88889 68.3252V66.0485L4.24074 64.7476L2.94444 63.4466L3.59259 60.8447L4.88889 59.5437L6.50926 58.568L6.83333 57.5922L7.15741 55.6408L7.80556 54.3398L7.48148 49.7864L8.12963 48.1602V47.1845L7.15741 46.534L6.18518 45.233L7.48148 44.5825L6.83333 42.6311L5.86111 41.3301L3.91667 40.3544V34.5L4.56481 33.199L5.86111 32.2233L6.18518 30.5971L7.48148 29.2961H8.77778L10.3981 27.9951L12.9907 26.6942L14.287 25.7184V21.4903H15.2593L16.5556 20.1893L17.8519 19.5388V18.2379L15.5833 16.6117L14.287 14.9854L12.0185 13.3592L11.3704 12.0583L12.0185 10.7573L13.3148 9.45631V5.87864L14.6111 5.5534V2.30097H17.8519L19.1481 4.57767H20.7685L26.9259 1L30.4907 1.32524L32.1111 3.2767L34.7037 8.48058L37.6204 9.45631L40.537 12.7087L40.8611 20.1893L45.3981 27.0194L49.287 29.9466L53.1759 33.8495L54.4722 38.0777L49.6111 39.7039L46.6944 40.6796L43.4537 41.9806V44.2573L45.7222 47.835L48.6389 50.7621L47.3426 56.6165V59.8689L49.9352 60.1942L50.9074 61.1699L48.6389 66.699L51.5556 68.3252L54.4722 66.699L58.6852 67.6748L65.1667 68.3252L66.787 70.6019H71.6481L74.2407 69.301L78.7778 68.3252L82.9907 69.301V74.8301L85.2593 77.432L89.7963 76.1311L92.0648 78.0825L90.4444 82.3107L93.037 86.2136L94.6574 91.7427L96.9259 94.3447L96.2778 99.8738L94.9815 101.5L96.9259 108.655L99.1944 111.583L103.083 112.883V115.16L106 119.388L103.083 121.015L99.8426 121.99L96.9259 119.388L95.9537 120.689V121.99L95.3055 122.316L94.0093 121.99L93.037 123.942H91.4167L91.0926 125.568L89.4722 127.519L87.5278 126.544H85.9074L84.6111 128.495L82.3426 130.121L80.3981 131.422L78.7778 132.398L76.8333 132.073L75.8611 131.422L74.5648 130.772L72.9444 132.398L71.3241 133.049L70.3519 133.699L70.0278 134.675L66.1389 135V134.024H64.8426L64.1944 135H61.2778L60.6296 134.024L61.2778 133.049L62.5741 132.073L62.8981 130.121L59.9815 128.495L59.6574 126.544L56.7407 124.592V122.966L57.3889 121.99V121.015L56.0926 119.388L53.8241 117.762L52.5278 115.811L52.2037 110.607L51.2315 109.956L47.9907 110.932L45.7222 113.534L43.7778 114.835L39.8889 111.908H36.9722L36 114.184L33.0833 114.51L31.1389 115.811L25.9537 113.534H24.3333L22.713 114.184L18.5 114.51L17.2037 113.534L15.2593 111.908L13.6389 111.583L11.3704 113.534L10.7222 113.026Z" fill="#AFB78E"/>\n<path d="M6.18518 113.026L5.53704 114.51M6.18518 113.026H10.7222L11.3704 113.534L13.6389 111.583L15.2593 111.908L17.2037 113.534L18.5 114.51L22.713 114.184L24.3333 113.534H25.9537L31.1389 115.811L33.0833 114.51L36 114.184L36.9722 111.908H39.8889L43.7778 114.835L45.7222 113.534L47.9907 110.932L51.2315 109.956L52.2037 110.607L52.5278 115.811L53.8241 117.762L56.0926 119.388L57.3889 121.015V121.99L56.7407 122.966V124.592L59.6574 126.544L59.9815 128.495L62.8981 130.121L62.5741 132.073L61.2778 133.049L60.6296 134.024L61.2778 135H64.1944L64.8426 134.024H66.1389V135L70.0278 134.675L70.3518 133.699L71.3241 133.049L72.9444 132.398L74.5648 130.772L75.8611 131.422L76.8333 132.073L78.7778 132.398L80.3981 131.422L82.3426 130.121L84.6111 128.495L85.9074 126.544H87.5278L89.4722 127.519L91.0926 125.568L91.4167 123.942H93.037L94.0093 121.99L95.3056 122.316L95.9537 121.99V120.689L96.9259 119.388L99.8426 121.99L103.083 121.015L106 119.388L103.083 115.16V112.883L99.1944 111.583L96.9259 108.655L94.9815 101.5L96.2778 99.8738L96.9259 94.3447L94.6574 91.7427L93.037 86.2136L90.4444 82.3107L92.0648 78.0825L89.7963 76.1311L85.2593 77.432L82.9907 74.8301V69.301L78.7778 68.3252L74.2407 69.301L71.6481 70.6019H66.787L65.1667 68.3252L58.6852 67.6748L54.4722 66.699L51.5556 68.3252L48.6389 66.699L50.9074 61.1699L49.9352 60.1942L47.3426 59.8689V56.6165L48.6389 50.7621L45.7222 47.835L43.4537 44.2573V41.9806L46.6944 40.6796L49.6111 39.7039L54.4722 38.0777L53.1759 33.8495L49.287 29.9466L45.3981 27.0194L40.8611 20.1893L40.537 12.7087L37.6204 9.45631L34.7037 8.48058L32.1111 3.2767L30.4907 1.32524L26.9259 1L20.7685 4.57767H19.1481L17.8519 2.30097H14.6111V5.5534L13.3148 5.87864V9.45631L12.0185 10.7573L11.3704 12.0583L12.0185 13.3592L14.287 14.9854L15.5833 16.6117L17.8519 18.2379V19.5388L16.5556 20.1893L15.2593 21.4903H14.287V25.7184L12.9907 26.6942L10.3981 27.9951L8.77778 29.2961H7.48148L6.18518 30.5971L5.86111 32.2233L4.56481 33.199L3.91667 34.5V40.3544L5.86111 41.3301L6.83333 42.6311L7.48148 44.5825L6.18518 45.233L7.15741 46.534L8.12963 47.1845V48.1602L7.48148 49.7864L7.80556 54.3398L7.15741 55.6408L6.83333 57.5922L6.50926 58.568L4.88889 59.5437L3.59259 60.8447L2.94444 63.4466L4.24074 64.7476L4.88889 66.0485V68.3252L3.91667 69.9515L2.94444 71.5777L1.97222 73.5291L1 73.8544V78.0825L2.2963 78.733L2.94444 79.7087L4.88889 80.034L5.53704 81.335L6.50926 82.3107L9.75 81.9854V85.8884L10.3981 86.8641V90.4418L8.77778 91.7427L8.4537 93.3689L7.80556 95.6456L6.83333 95.9709L7.15741 97.5971L8.77778 97.754L9.75 99.5485L9.42593 100.524L8.4537 101.825L6.18518 102.15L5.53704 103.451V105.078L6.83333 106.053L7.48148 106.704L7.15741 110.282L6.18518 111.908V113.026Z" stroke="#849464" stroke-width="2" stroke-linejoin="round"/></svg><text class="oblast-text">Суми</text>\n';break;case 6:console.log("drawing Крим"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="174" height="108" viewBox="0 0 174 108" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M44.1564 7.30952V3.52381L47.2836 1H49.16L56.9782 8.8869L59.48 8.57143L62.2945 6.67857L64.4836 7.625L64.7964 10.4643L66.6727 13.619L68.2364 12.9881L69.1745 10.7798L76.0545 10.1488L77.6182 11.7262L76.9927 14.25L77.6182 16.4583L80.12 15.8274H82.6218V17.4048L80.7455 19.2976L81.3709 22.1369L85.7491 19.6131L89.1891 20.244L93.88 19.2976L90.7527 23.0833L91.3782 25.6071L95.4436 25.2917L97.32 28.4464L101.698 29.0774L105.138 33.494L107.015 36.6488L104.2 42.3274L109.204 47.375L111.705 46.744L121.4 50.8452L127.029 48.3214L132.345 46.744L136.411 41.381L135.473 38.2262L137.975 37.2798L138.6 39.4881L140.789 41.6964L143.604 42.9583L145.793 42.6429L147.356 38.8571L152.047 36.9643L160.491 37.5952L167.684 37.9107L172.062 38.5417L173 41.381L172.062 43.2738L167.996 41.6964L165.807 42.6429L165.495 45.4821L163.618 46.744L162.68 52.1071L162.993 55.5774L164.869 56.8393L165.182 59.0476L159.865 60.9405L157.676 63.1488H155.175L152.985 61.8869L149.858 61.256L146.731 64.4107L141.102 65.9881L139.538 64.4107L137.349 61.8869L132.345 58.4167L127.029 58.1012L122.025 61.8869L120.775 64.0952L119.836 69.4583H116.396L115.458 71.6667L112.331 72.6131L110.142 75.4524V79.2381L108.578 79.5536L105.764 77.6607L103.262 77.3452L101.073 78.9226L94.8182 78.6071L92.9418 80.5L83.8727 84.6012L81.9964 89.0179L80.12 95.6429H77.3055L72.9273 99.4286L70.7382 103.214L66.36 104.792L64.4836 107H61.9818L60.7309 104.476H59.48L56.9782 106.685H53.5382L50.4109 104.792L47.9091 101.637H46.6582L41.9673 99.8584L39.7782 97.5357L39.1527 95.9583L41.9673 95.0119L44.1564 93.119L45.4073 89.9643L44.7818 85.5476L45.0945 82.0774L47.9091 78.6071L48.2218 74.8214L46.3455 66.619L40.0909 60.625L36.3382 59.0476L33.2109 60.625L29.7709 60.3095L21.64 53.0536L17.5745 50.8452L11.6327 49.8988L8.81818 52.4226L4.75273 53.6845L3.18909 53.0536L1 50.8452L1.31273 46.1131L8.50545 40.119L12.5709 38.2262L16.3236 33.1786L23.2036 30.6548L25.7055 28.4464L27.2691 26.2381L29.7709 27.1845L33.2109 25.9226L39.7782 20.5595H42.9055L44.1564 19.2976H47.9091L49.7855 16.1429L50.0982 14.25L49.16 13.619L47.5964 14.5655L45.72 13.9345L44.1564 11.0952V7.30952Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Крим</text>\n';break;case 7:console.log("drawing Рівне"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="126" height="136" viewBox="0 0 126 136" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M35.3801 7.52722V2.91977H39.6293L41.5607 1H45.4237L48.514 2.91977L55.081 4.07163L60.4891 7.52722L67.8287 8.67908L71.6916 12.1347H80.5763L89.0748 16.7421H95.6417L97.5732 15.9742L102.595 17.51L104.14 23.6533L107.231 25.5731L108.389 29.7966H114.184L116.115 27.8768L119.592 27.4928L121.91 30.1805H124.227L125 32.8682L123.455 36.7077L120.751 38.2436L119.978 40.5473V43.235H118.819L116.502 40.5473L114.956 41.6991L115.729 43.6189V46.6905L112.639 50.5301V52.0659L113.798 53.6017V55.1375L111.093 57.0573V58.5931L109.162 60.1289L108.389 62.8166V64.3524L106.844 65.5043L106.072 67.4241L104.14 68.192L102.981 68.9599H101.436L101.822 70.8797L102.595 71.6476V75.1032V76.639L103.368 77.0229V79.3267L102.595 81.2464V86.2378L102.981 87.0057L103.368 88.1576L104.14 88.9255V90.4613V91.6132L102.595 92.3811L102.209 94.3009L101.436 96.6046L100.664 97.7564L99.5047 100.444H96.4143L94.8692 101.596L93.7103 102.748H91.7788L91.0062 103.9L89.8474 104.668H87.9159L86.3707 103.9L84.8255 104.284V105.052L82.5078 105.819H80.9626V106.971L80.5763 109.275H78.6449L77.0997 109.659V111.195L75.9408 112.731L72.8505 114.266V116.186L71.3053 118.106H69.3738V119.258L68.215 120.794L67.0561 121.562V122.713H63.5794H61.648L59.3302 125.401L58.1713 126.937L56.6262 128.089L54.3084 128.473L52.7632 127.705V125.401V124.249L53.5358 121.946L51.9907 121.562L50.8318 122.33L49.2866 121.562L47.3551 120.026L46.5826 120.794H41.947L41.1745 121.562L39.243 122.33L38.4704 123.481H36.1526V125.401L34.2212 126.169H27.6542L26.8816 126.937H21.8598L21.0872 126.169L19.5421 125.785L18.7695 125.401L18.3832 126.553L16.838 127.705V128.473L18.3832 129.241L17.9969 131.16L16.4517 133.08L15.2928 134.232H12.9751L12.2025 135L10.6573 134.232H9.11215L8.33956 132.312L7.18069 131.16H6.02181V129.241L4.86293 127.705L5.24922 125.785L6.4081 124.633V123.481L5.24922 122.33V121.178L7.18069 120.41V118.49H7.95327L7.56698 116.954L6.4081 116.186L3.70405 116.954L3.31776 117.722L1.77259 116.186L1 115.034L1.77259 114.266L1.38629 112.731H4.09034L7.18069 110.811V108.507L6.02181 106.587L4.09034 105.052V103.132L6.02181 101.98V100.06L7.18069 97.3725L9.11215 98.1404H13.3614V96.6046V94.3009H17.2243V89.6934H23.7913H26.109H29.1994L33.8349 92.765H37.6978L39.6293 90.4613V83.5501L41.5607 82.3983L43.1059 80.4785H45.4237L46.9688 78.1748V73.9513H48.514V70.4957H51.6044V68.9599L50.8318 68.192V65.1203L49.6729 63.5845H46.1963L45.4237 62.8166L46.1963 59.361L49.6729 58.2092L50.8318 56.2894L48.514 52.4499L44.6511 51.298L43.1059 47.8424L41.5607 44.7708L40.7882 41.6991H37.6978H30.3583L29.1994 34.0201V32.8682V30.5645L31.1308 27.4928V24.4212L30.3583 23.2693L28.0405 20.5817V16.7421L31.1308 13.2865L33.0623 10.2149L35.3801 7.52722Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Рівне</text>\n';break;case 8:console.log("drawing Хмельницький"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="71" height="135" viewBox="0 0 71 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M48 123.121V124.62H46L43.6667 125.96L43 128.305L41 126.965H38.3333L36.6667 128.64L35.6667 127.97L33.3333 127.635V126.63L31 126.295L29.6667 127.3L28 128.64L27 127.635L26.3333 126.63L25.6667 124.62L21.6667 125.625L22.3333 127.3L21 128.975L20 129.645V127.97L18.3333 127.635L17 126.965L16.6667 131.32L16 134H15L13.6667 133.33L13.3333 131.655L12 128.64L8.33333 128.305L7.33333 126.965L5.66667 124.62L4.33333 122.275L3.33333 119.929L1.33333 118.254L2.33333 114.904V111.554L3 110.549L1.33333 108.539V106.194L2.33333 105.524L1.33333 104.519V99.1587L2.33333 98.4887V96.4786L1 95.1385L2.33333 94.1335L3 91.4534V88.4383L2.33333 87.4333V84.0831L4 82.7431L4.66667 81.738V76.7128L4 75.0378L3 71.6877L2.33333 68.3375L1.33333 64.6524L2.33333 63.3123L4.66667 60.9673L5.33333 58.9572L6 56.9471L4.66667 55.272L5.33333 52.927L6 51.9219V49.9118L4 47.2317V43.5466L3 42.8766L3.66667 37.8514L5.33333 36.5113L6 34.1662L6.66667 33.1612L6 31.1511V29.8111L8.66667 29.1411L7.33333 27.466L6.33333 27.131L6.66667 25.4559H7.33333L9.33333 25.1209L10.6667 24.1159L11.6667 22.7758L13.6667 20.4307H15.3333H18.3333V19.4257L19.3333 18.7557L20.3333 17.4156V16.4106H22L23.3333 14.7355V13.0605L26 11.7204L27 10.3804V9.0403L28.3333 8.70529H30L30.3333 6.69521V5.69018H31.6667L33.6667 5.02015V4.35013L35 4.01511L36.3333 4.68514H38L39 4.01511L39.6667 3.01008H41.3333L42.3333 2.00504L43.6667 1L45 3.01008L46 5.02015L48 6.02519L49 7.36524L49.3333 9.0403L48.6667 10.3804L47.3333 11.3854L48 13.3955L49.3333 14.7355L50.6667 17.4156L53.3333 18.7557L54 20.4307L58 24.1159L59.3333 23.4458L59.6667 22.7758H61L62 23.7809V25.4559L62.6667 26.461V29.4761L63.3333 30.4811V33.4962V36.8463L61.6667 37.1814L59.3333 38.1864V39.1914L60.3333 40.5315L59.3333 42.8766L58 43.8816L59.3333 45.5567L61 47.9018L62 50.2468L63.6667 50.9169L66.3333 52.2569L67.6667 53.262L69.3333 55.272V56.6121L67.3333 57.2821L66.6667 57.9521L67.3333 60.2972L68.3333 62.3073L67.6667 63.6474L67 65.6574L67.3333 69.0076L66 69.3426L64.6667 70.3476L65.3333 72.3577L66.6667 74.3678L68 76.7128V79.3929L69.3333 80.733V82.7431L70 84.0831L69.3333 84.4181V86.7632L70 88.7733L69.6667 92.1234L68.6667 92.4584L66.3333 93.4635L65 94.1335L63 93.4635L61.3333 92.1234H60.3333L58.3333 92.4584L58 93.7985H54.6667L54 94.1335L53.3333 96.4786L51 98.1536L50.3333 99.4937L50 110.214L49.6667 111.554L50.3333 112.559L50 114.904L49.6667 115.909L49.3333 120.599L48 123.121Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Хмельницький</text>\n';break;case 9:console.log("drawing Житомир"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="105" height="132" viewBox="0 0 105 132" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.1694 10.4545L24.8208 9.1039L24.4853 8.76623L22.1368 10.1169L21.4658 12.1429V14.5065H20.4593L18.4463 12.1429L17.1042 13.1558L17.7752 14.8442V17.5455L15.0912 20.9221V22.2727L16.0977 23.6234V24.974L13.7492 26.6623V28.013L12.0717 29.3636L11.4007 31.7273V33.0779L10.0586 34.0909L9.38762 35.7792L7.7101 36.4545L6.70358 37.1299H5.36156L5.69707 38.8182L6.36808 39.4935V42.5325V43.8831L7.03909 44.2208V46.2468L6.36808 47.9351V52.3247L6.70358 53L7.03909 54.013L7.7101 54.6883V56.039V57.0519L6.36808 57.7273L6.03257 59.4156L5.36156 61.4416L4.69055 62.4545L3.68404 64.8182H1L2.34202 66.8442L3.34853 68.8701L5.36156 69.8831L6.36808 71.2338L6.70358 72.9221L6.03257 74.2727L4.69055 75.2857L5.36156 77.3117L6.70358 78.6623L8.0456 81.3636L10.7296 82.7143L11.4007 84.4026L15.4267 88.1169L16.7687 87.4416L17.1042 86.7662H18.4463L19.4528 87.7792V89.4675L20.1238 90.4805V93.5195L20.7948 94.5325V97.5714V100.948L19.1173 101.286L16.7687 102.299V103.312L17.7752 104.662L16.7687 107.026L15.4267 108.039L16.7687 109.727L18.4463 112.091L19.4528 114.455L21.1303 115.13L23.8143 116.481L25.1564 117.494L26.8339 119.519L28.1759 118.844L29.8534 118.169L32.873 118.844H36.228L38.9121 117.156L42.6026 118.169L44.9511 117.156L47.9707 118.169L51.9967 116.481H54.6808L57.3648 117.494L59.7134 116.481L60.7199 117.156L62.7329 117.494L65.4169 115.13L66.4235 113.442L67.43 111.753H70.4495L72.127 114.117V117.156L73.4691 118.169L73.8046 121.545L72.127 122.896L71.1205 124.584L73.8046 129.312L76.1531 131H84.2052L86.5537 130.325L88.9023 128.299L91.2508 127.623L93.5993 126.948V124.247L91.5863 123.909L91.9218 122.221L92.2573 120.195L91.5863 119.182V117.494H93.5993L94.9414 115.805L97.6254 115.13L97.9609 113.779L100.309 113.104L102.658 110.74L104 109.052V106.688L102.658 106.013L101.651 104.325L101.316 99.2597H102.993L104 98.2467V95.2078L102.993 94.1948V88.1169L102.322 87.7792L101.316 86.0909L99.3029 85.4156V84.0649L98.6319 79.6753H95.2769L92.5928 78.6623V77.6494L93.9349 76.2987L95.2769 75.6234L94.9414 73.5974H93.5993V72.5844L95.9479 70.8961V69.5455L94.6059 67.8571V65.8312L96.6189 64.1429L97.6254 62.4545L98.6319 61.1039L98.2964 56.7143L95.2769 56.3766L94.9414 54.6883L95.2769 51.987V49.6234L92.9283 45.9091L90.5798 44.8961V44.2208L92.5928 43.2078L94.9414 41.8571V38.1429L92.5928 34.4286L87.8958 33.0779L87.5603 31.0519V27L90.5798 23.961L91.2508 20.9221L88.9023 17.5455L87.8958 14.5065L86.2182 12.1429V8.09091L82.8632 2.68831H78.8371L76.1531 6.06494L71.1205 6.4026L67.43 10.7922L67.0945 14.1688H63.4039L62.3974 9.44156L62.0619 6.06494L55.6873 5.38961L52.6678 7.41558L50.9902 7.07792L46.9642 1H45.9577L42.6026 5.05195H36.228L32.873 1.67532L30.1889 4.37662L30.5244 7.41558L27.1694 10.4545Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Житомир</text>\n';break;case 10:console.log("drawing Вінниця"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="123" height="131" viewBox="0 0 123 131" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M106.012 46.0592L106.739 49.3296L106.375 52.6L104.559 55.1437L102.378 56.2338L100.562 58.0507L101.652 60.231L104.195 61.3211V62.4113L102.015 64.2282L103.105 65.3183L104.559 66.0451L106.375 67.1352L106.012 71.8592H107.102L108.556 73.3127V77.6732H110.009L112.553 78.4L113.643 79.8535L111.099 81.6704L113.643 82.3972L114.006 84.2141L116.186 85.3042L118.73 88.5746L119.456 93.2986L118.003 95.1155V97.2958L122 98.0225L121.273 99.4761L119.093 102.02L116.186 103.473L114.733 101.293L113.643 100.566L111.826 101.656L110.009 103.473L108.556 104.927L111.099 107.834L114.733 109.287L118.003 112.194L119.456 114.738L117.276 115.465H114.733V116.192L112.553 117.282L110.009 115.465L107.465 116.192H105.285L103.468 117.282L104.922 120.189V122.369L102.378 123.823H96.9279L94.3844 122.369L92.2042 121.642L89.2973 123.823L85.6637 123.096H82.3934L79.1231 120.189L75.1261 119.462V123.823L71.4925 127.093L68.2222 130L64.5886 120.915L56.5946 118.372L51.5075 119.462L50.7808 121.642L48.2372 123.823L47.1471 122.369V119.462H43.8769L43.1502 118.372L45.3303 115.465L44.6036 112.921H41.6967L39.5165 114.738H38.0631L36.973 112.194L32.6126 111.468L31.8859 107.47L27.1622 106.38L24.6186 104.2L20.2583 98.7493L17.7147 97.2958H12.991L11.1742 96.2056H6.08709L5.72372 94.0254V91.4817L6.08709 89.6648L2.81682 85.3042L1 84.5775V82.9514L2.45345 80.2169L2.81682 75.1296L3.18018 74.0394L3.54354 71.4958L2.81682 70.4056L3.18018 68.9521L3.54354 57.3239L4.27027 55.8704L6.81381 54.0535L7.54054 51.5099L8.26727 51.1465H11.9009L12.2643 49.693L14.4444 49.3296H15.5345L17.3514 50.7831L19.5315 51.5099L20.985 50.7831L23.5285 49.693L24.6186 49.3296L24.982 45.6958L24.2553 43.5155V40.9718L24.982 40.6085L24.2553 39.1549V36.9746L22.8018 35.5211V32.6141L21.3483 30.0704L19.8949 27.8901L19.1682 25.7099L20.6216 24.6197L22.0751 24.2563L21.7117 20.6225L22.4384 18.4423L23.1652 16.9887L22.0751 14.8085L21.3483 12.2648L22.0751 11.538L24.2553 10.8113V9.35775L25.7087 8.63099L27.5255 7.90423L30.7958 8.63099H34.4294L37.3363 6.81408L41.3333 7.90423L43.8769 6.81408L47.1471 7.90423L51.5075 6.08732H54.4144L57.3213 7.17746L59.8649 6.08732L60.955 6.81408L63.1351 7.17746L66.042 4.6338L67.1321 2.8169L68.2222 1H71.4925L73.3093 3.54366V6.81408L74.7628 7.90423L75.1261 11.538L73.3093 12.9915L72.2192 14.8085L75.1261 19.8958L77.6697 21.7127H86.3904L88.9339 20.9859L91.4775 18.8056L94.021 18.0789L96.5646 17.3521L98.7447 18.4423L98.018 19.8958L96.9279 21.7127L97.2913 23.5296L99.4715 25.3465L100.198 26.4366L98.7447 28.6169L99.4715 29.707L100.562 31.1606L100.198 33.3408L97.6547 34.7944L97.2913 37.338L98.7447 38.0648L100.198 40.6085L102.378 42.062L106.012 46.0592Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Вінниця</text>\n';break;case 11:console.log("drawing Одеса"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="101" height="139" viewBox="0 0 101 139" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.8433 9.25887L25.6269 11.2021L26.3657 12.1738L27.597 13.3883H30.306L31.0448 12.1738L33.5075 12.4167L34.7388 13.3883V15.3316L36.2164 16.789L34.7388 19.9468L36.2164 21.8901L35.2313 24.0762V28.2057L33.5075 30.3918L33.0149 32.578V34.2784L34.4925 35.7358L36.9552 36.2216L39.6642 39.8652L40.6493 42.5372L42.3731 43.0231L44.3433 41.0798L45.8209 41.3227L46.806 42.0514V45.695L45.3284 46.6667L46.0672 50.3103L44.5896 51.7677V52.7394H46.806L47.5448 54.1968L46.3134 58.0833L47.2985 60.0266L49.0224 60.7553L51.2388 62.4557L52.9627 62.9415H55.6716L57.6418 65.6135V73.8723L58.1343 75.5727L57.6418 77.0301L56.1642 78.0018L56.903 79.7021L60.3507 81.6454L62.0746 84.3174L61.5821 85.289H56.4104L55.6716 86.2606H53.209V84.0745L52.9627 83.3457L51.2388 81.8883L50.0075 81.6454L48.5299 83.3457L48.2836 84.8032L46.5597 85.289L45.3284 83.8316L43.3582 83.5887L42.6194 80.4309H41.3881L39.9104 82.3741H37.694L35.9701 84.5603H34.4925L34.2463 78.0018H32.7687L30.5522 78.9734L25.8731 81.8883L25.3806 85.289L25.8731 86.7465V89.9043L28.5821 93.305V94.7624L26.3657 96.7057L25.8731 98.6489L26.3657 100.835V102.293L23.6567 103.021L21.4403 102.778L18.9776 104.965V108.608L16.5149 112.009H13.806L13.0672 113.709L11.5896 115.167H10.6045V117.596L12.0821 119.296V121.482L10.6045 123.911L7.64925 124.397L5.18657 123.426L1.49254 124.397L1 125.855L2.97015 127.555L4.69403 131.684L7.40299 134.356L11.5896 135.328L13.806 136.785L18.2388 137.271L19.4701 136.785L19.2239 133.385L20.7015 131.684H21.9328V134.113L23.4104 135.328L25.8731 134.113L29.3209 130.956L34.2463 129.012L40.403 128.041L47.0522 132.17L48.0373 133.871V136.3V138H49.2687L50.9925 135.085L51.4851 130.47L50.2537 127.555L47.0522 127.312L46.806 125.855L47.2985 123.911V122.697L46.3134 121.725L46.0672 116.138L46.806 113.466H48.2836L48.7761 115.167L49.2687 117.839L51.2388 119.782H51.9776L54.4403 118.082L53.9478 117.11L53.4552 114.681L55.6716 114.438L56.4104 112.495L59.1194 109.823H60.3507L62.0746 110.794H63.0597V108.365L64.291 107.879L65.2761 109.337L66.2612 109.094L68.2313 106.179L72.9104 101.078V97.9202L71.4328 95.977L71.1866 94.2766L67.7388 92.3333L63.5522 88.9326L63.0597 86.2606L64.291 84.3174L66.2612 83.3457L67.7388 83.5887L68.2313 85.7748L70.2015 87.4752V89.9043L72.9104 91.8475L73.403 94.2766L75.8657 95.977L78.3284 94.7624L81.2836 90.633V87.4752L84.2388 84.0745V78.4876L85.2239 76.5443H88.9179L93.3507 74.844L96.306 73.8723V68.7713L97.0448 67.5567V65.1277L93.8433 62.4557L92.1194 59.5408L92.8582 58.5691L95.8134 58.0833H98.2761L99.0149 56.8688V55.6543L100 54.1968V52.2535L99.0149 51.039V49.8245H97.0448L95.3209 49.0957L94.3358 47.8812L95.3209 46.6667L96.306 44.9663L95.3209 44.2376H92.8582V44.9663H91.6269L90.3955 44.2376H87.4403L86.209 40.594V37.922V35.0071V34.5213L86.9478 32.8209L85.2239 30.6348L83.9925 29.1773L83.0075 27.477L81.7761 29.1773L80.2985 28.6915L78.8209 27.477L77.3433 27.9628L76.3582 28.6915H74.1418L73.6493 27.477H72.4179V24.805V22.3759L71.4328 21.8901V20.6755L69.709 18.9752L69.2164 16.789L68.7239 12.9025L66.7537 11.6879V9.50177L66.2612 8.28723V7.55851L67.9851 7.0727L69.709 6.58688L68.7239 4.64362H66.7537H62.5672L60.8433 3.91489L60.3507 2.70035V1L58.8731 1.48582H57.1493V1.97163L55.6716 2.70035L53.9478 1.48582L52.2239 1.97163H50.7463L49.5149 2.70035L50.5 4.64362V6.10106L48.7761 7.0727H45.0821L43.3582 6.10106L41.8806 5.61525L39.9104 7.0727L37.4478 6.58688H35.2313L33.0149 4.64362L30.306 4.1578V7.0727L27.8433 9.25887Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Одеса</text>\n';break;case 12:console.log("drawing Черкаси"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="166" height="128" viewBox="0 0 166 128" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M23.041 127L18.9317 126.246V123.982L20.426 122.096L19.6788 117.192L17.0638 113.796L14.8223 112.665L14.4487 110.778L11.8337 110.024L14.4487 108.138L13.328 106.629L10.713 105.874H9.21868V101.347L7.72437 99.8383H6.60364L6.97722 94.9341L5.10934 93.8024L3.61503 93.0479L2.49431 91.9162L4.73576 90.0299V88.8982L2.12073 87.7665L1 85.503L2.86788 83.6168L5.10934 82.485L6.97722 79.8443L7.3508 76.4491L10.3394 77.5808H12.5809L14.4487 76.4491L16.6902 73.8084V71.5449H17.8109H20.426L23.4146 70.0359L27.5239 66.6407L27.8975 68.9042L29.3918 70.0359L33.5011 69.6587L35.7426 71.5449L37.6105 72.6767L38.7312 68.9042L40.2255 65.8862H47.697L49.5649 64L52.9271 66.6407H54.795L56.2893 65.1317L61.8929 65.509L62.6401 64V61.7365L64.8815 58.3413L68.2437 55.3234L69.738 53.8144L71.9795 50.4192L73.1002 48.5329L70.1116 46.6467L71.9795 45.1377L73.8474 44.006L73.1002 39.1018L73.8474 36.4611V34.5749L74.221 33.4431L74.5945 29.2934L80.1982 25.8982L83.5604 25.521L86.1754 27.0299L93.2733 28.9162H95.5148L97.0091 27.4072L98.5034 24.7665L100.745 22.8802L102.613 20.2395V17.976L104.854 16.8443V15.7126L103.36 13.8263V11.5629L105.601 8.92216L108.216 7.79042L109.337 6.65868V5.1497L108.59 4.01796V2.13174L109.711 1H112.699L114.567 2.88623L115.688 4.77246L119.797 6.65868L120.918 9.2994V13.8263L124.654 15.7126L129.51 20.6168V22.8802L128.39 25.521L126.895 27.4072L128.763 30.0479L131.752 33.0659L135.861 33.8204L136.608 39.1018L139.223 40.2335L143.333 44.006L145.2 48.1557L143.333 53.0599L145.2 56.8323L152.672 60.2275L155.287 64.7545L161.638 73.4311L165 77.9581L163.879 79.4671L154.913 77.9581L147.815 82.485L150.431 86.6347L149.31 88.1437L139.223 92.6707H135.861L131.005 84.3713H123.907L117.929 91.1617V94.5569L117.182 95.6886L112.326 93.8024L108.216 98.3293H105.975L102.986 92.6707H98.1298L97.0091 94.5569H90.2847V99.8383L84.6811 107.383H82.8132L79.451 106.629H75.3417L71.2323 108.892L67.8702 107.383L57.41 106.629L54.0478 106.251L49.9385 109.647L45.8292 114.551V120.964H43.2141L41.3462 119.455H39.1048L37.2369 122.85H35.369L31.2597 126.246L28.6446 124.737L23.041 127Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Черкаси</text>\n';break;case 13:console.log("drawing Ужгород"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="150" height="123" viewBox="0 0 150 123" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M45.5 6.5L49 9.5L50 10V15L51.5 18L54 20L57 24L61 25H65L66 29V31.5L71.5 33.5H75.5L79.5 35.5L81 38H85.5L87 39H88.5L89.5 40.5L92 41.5L95 44.5L96.5 47.5H100.5L102 49.5V53L103.5 55L107 58V61L110 61.5L113.5 64L118.5 62.5V61H123V64L122 65.5L121 71L122 75.5L126.5 77.5L129 75.5H132L134.5 78L138 82L143 86.5V89.5L145 91.5V94L142.5 97L145 101.5L149 104.5V108L148 111L146 113V116L145 117.5L136 116.5L129 119L127 121.5H125L122 119L118.5 120L116 117L112.5 113L110 112L105.5 115L103 116.5H101L98.5 113L94 111L87 109L83 106L80.5 108L76.5 109L71.5 104.5L61.5 95H59.5L53.5 102L52 106H50.5L48.5 103H47L45 104.5L43.5 106H41L42 104.5L41 99L39.5 95L35 92H29.5L27 90.5L21 78H13.5L11.5 75.5L7 61H4L2 59L1 46L4 43L11.5 40.5L13.5 38L14.5 35L16 28L18.5 24V18.5L22 16.5L23 13.5L31.5 6.5V2L33 1L38 5L45.5 6.5Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Ужгород</text>\n';break;case 14:console.log("drawing Львів"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="127" height="130" viewBox="0 0 127 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.16224 111.294V106.499L6.8997 103.179L5.79351 100.965L2.84366 97.6455L1 95.4323V93.219L3.94985 86.5792L3.58112 80.6772L2.47493 77.7262L1.73746 74.0375V68.8732L2.47493 66.6599L9.11209 60.0202L15.0118 53.7493L20.9115 47.1095L26.4425 41.2075L33.8171 34.5677L37.8732 29.7723L42.6667 27.1902L46.354 24.6081L49.3038 20.9193L52.2537 16.4928L54.8348 16.1239L59.997 15.755L65.8968 15.0173L68.4779 10.5908L70.6903 8.37752L71.4277 6.90202V2.4755L72.5339 1L74.7463 2.10663L76.59 4.31988L78.8024 5.79539L80.646 3.58213L82.1209 2.84438L85.0708 4.31988V7.27089H86.5457L88.7581 9.48415L87.6519 10.9597L86.5457 12.0663V15.755L87.6519 17.5994L89.4956 16.4928L94.2891 17.5994V19.0749L96.8702 20.9193L98.7139 24.9769L100.558 23.1326H103.507L108.67 23.8703L111.619 24.9769H111.988L112.357 26.4524L111.619 27.1902L112.357 28.2968L113.832 29.7723L114.201 29.0346L116.782 28.2968L117.888 29.0346L118.257 30.5101H117.519V32.3545L115.676 33.0922V34.1988L116.782 35.3055V36.4121L115.676 37.5187L115.307 39.3631L116.413 40.8386V42.683H117.519L118.625 43.7896L119.363 45.634H120.838L122.313 46.3718L123.05 45.634H125.263L126 48.2161V50.0605L125.263 53.0115L124.525 54.8559L123.05 57.438L120.469 58.1758L118.257 59.6513H113.832H111.619L109.776 61.8646L110.145 62.9712L110.513 67.7666H109.038L105.72 68.5043L104.245 68.8732V72.1931L103.139 73.2997H101.664L100.926 75.1441H98.3451H97.2389L95.0266 75.8818V76.9885L93.1829 78.464L92.0767 79.5706V81.415H90.9705L88.7581 79.9395H86.9145L86.5457 78.8328L84.3333 78.464L79.5398 78.0951L78.8024 78.8328L78.0649 80.3084L79.1711 82.1527L78.0649 83.6282L77.3274 84.366L76.2212 85.8415L76.9587 86.9481V89.1614L76.2212 91.3746L75.115 92.4813L74.0089 95.0634L75.115 97.6455L77.3274 98.0144L78.0649 99.4899L77.3274 102.072H72.5339L71.4277 102.81H69.2153L68.4779 103.179L67.003 103.548L62.2094 102.81H60.3658L58.5221 104.285L57.0472 103.548L55.941 102.81L54.4661 104.285H48.5664L47.4602 103.179H45.2478L44.1416 104.285L43.0354 106.13L42.6667 109.081H40.823L39.3481 110.187L37.8732 110.925L37.5044 113.507L36.3982 114.983V116.458L35.292 117.565V120.147L36.3982 121.622V124.205L34.9233 125.68V129H33.4484L32.3422 128.262H29.0236L27.9174 126.418L24.9676 124.942H22.0177L17.9617 123.467V121.622L17.2242 118.671H14.2743L11.3245 117.934L9.11209 114.983L7.26844 113.507L6.16224 111.294Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Львів</text>\n';break;case 15:console.log("drawing Івано-Франківськ"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="101" height="132" viewBox="0 0 101 132" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M47.2257 117.499L44.9144 114.412V111.326L46.4553 109.783L47.2257 107.469V104.769L44.144 102.454L42.2179 98.9822L44.144 96.6677V94.7389L42.6031 93.1958V90.8813L38.751 87.4095L36.0545 84.3234L34.1284 82.3947H31.8171L29.8911 83.9377L26.4241 82.3947L25.6537 78.9228L26.4241 74.6795L27.1946 73.5223V71.2077H23.7276V72.365L19.8755 73.5223L17.179 71.5935L14.8677 71.2077V68.8932L12.1712 66.5786L11.0156 65.0356V62.3353L9.85992 60.7923H6.77821L5.62257 58.4777L3.31128 56.1632L1.38521 55.3917L1 54.6202V50.7626L2.54086 49.2196V46.5193L1.38521 44.9763V42.276L2.54086 41.1187V39.5757L3.6965 38.0326L4.08171 35.3323L5.62257 34.5608L7.16342 33.4036H9.08949L9.47471 30.3175L10.6304 28.3887L11.786 27.2315H14.0973L15.2529 28.3887H21.4163L22.9572 26.8457L24.1128 27.6172L25.6537 28.3887L27.5798 26.8457H29.5058L34.5136 27.6172L36.0545 27.2315L36.8249 26.8457H39.1362L40.2918 26.0742H45.2996L46.07 23.3739L45.2996 21.8309L42.9883 21.4451L41.8327 18.7448L42.9883 16.0445L44.144 14.8872L44.9144 12.5727V10.2582L44.144 9.10089L45.2996 7.55786L46.07 6.78635L47.2257 5.24332L46.07 3.31454L46.8405 1.77151L47.6109 1L52.6187 1.38576L54.93 1.77151L55.3152 2.92878H57.2412L59.5525 4.47181H60.7082L62.249 7.55786L63.7899 10.6439V13.3442L64.9455 17.5875V21.4451L66.8716 22.9881L67.2568 24.9169L65.716 27.2315L63.7899 27.6172L64.5603 28.7745V31.4748H65.716L66.8716 33.0178H70.7237L71.1089 34.5608L69.9533 35.7181L68.7977 36.4896L66.8716 36.8754V38.8042L68.0272 39.5757L68.7977 41.5045L71.1089 43.4332H73.8054L75.7315 44.5905L77.2724 46.1335V48.8338L77.6576 50.7626L78.8132 49.6053H81.1245L80.7393 52.3056V55.0059H81.8949L83.0506 53.0772H87.2879L88.8288 53.8487L91.5253 54.6202V55.7774L93.8366 56.9347H95.7626L97.3035 59.2493L98.8444 60.4065V63.4926L100 64.6498L99.6148 67.7359L98.0739 68.1217L94.9922 69.6647V70.822L96.1479 74.6795V76.2225L97.3035 77.7656V80.8516L96.1479 81.2374V83.9377L94.9922 85.8665H92.2957L91.5253 85.095H88.8288L86.9027 85.8665L84.2062 86.638L81.8949 88.5668L79.9689 91.6528H78.0428L76.8872 94.3531L75.3463 95.5104H72.6498L72.2646 99.368H71.8794L70.3385 101.682L68.0272 103.997H66.1012L64.9455 105.154L64.1751 107.855L63.0195 108.626L62.6342 111.326L61.4786 111.712V115.955L62.249 117.499V119.813L63.7899 120.97V125.599L63.0195 125.985L60.7082 130.614L59.1673 131L56.0856 126.757L52.2335 125.985L49.1517 122.513V119.813L47.2257 117.499Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Івано-Франківськ</text>\n';break;case 16:console.log("drawing Чернігів"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="119" height="135" viewBox="0 0 119 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.42308 71.35L2.73077 74.15L1.69231 78L2.73077 79.05L4.46154 81.85V86.4V90.95L6.53846 93.05V97.6L11.0385 101.1L11.3846 102.5L10 104.6L10.6923 108.45H14.5L15.5385 109.5L19.3462 109.15L22.1154 107.05H24.8846L25.5769 109.15L27.6538 110.9L28.6923 112.65L29.7308 114.4V116.15H28.6923V117.9L32.1538 121.4V123.5L33.8846 124.9L34.9231 123.5H37L39.0769 124.9L41.1538 123.5H42.5385H44.9615H47.7308L48.7692 121.4L50.1538 120.35L52.9231 119.65L54.3077 117.2L56.0385 116.15L58.1154 117.9V119.65L60.8846 121.4H63.6538V123.5H62.2692L60.8846 124.9L61.5769 127L65.3846 129.45V130.85L67.4615 133.3L71.2692 134L73.3462 132.6L75.4231 130.85L76.8077 129.45L78.1923 130.85H79.5769L80.9615 129.45L83.0385 131.9H85.1154L86.8462 132.6L87.5385 131.9H89.6154L91.6923 132.6L93.4231 130.85L96.8846 129.45L100 127.7L100.692 126.3L102.077 125.6L104.846 122.45L105.538 120.853V119.65L106.577 117.9L106.923 114.05L106.231 113.35L104.846 112.3V110.55L105.538 109.15L107.962 108.8L109 107.4L109.346 106.35L108.308 104.419L106.577 104.25L106.231 102.5L107.269 102.15L107.962 99.7L108.308 97.95L110.038 96.55V92.7L109.346 91.65V87.45L105.885 87.8L104.846 86.75L104.154 85.35L102.077 85L101.385 83.95L100 83.25V78.7L101.038 78.35L102.077 76.25L103.115 74.5L104.154 72.75V70.3L103.462 68.9L102.077 67.5L102.769 64.7L104.154 63.3L105.885 62.25L106.231 61.2L106.577 59.1L107.269 57.7L106.923 52.8L107.615 51.05V50L106.577 49.3L105.538 47.9L106.923 47.2L106.231 45.1L105.192 43.7L103.115 42.65V36.35L103.808 34.95L105.192 33.9L105.538 32.15L106.923 30.75H108.308L110.038 29.35L112.808 27.95L114.192 26.9V22.35H115.231L116.615 20.95L118 20.25V18.85L115.577 17.1L114.192 15.35L111.769 13.6L111.077 12.2L111.769 10.8L113.154 9.4V5.55L114.538 5.2V1.7H109.346L108.654 1H107.269L99.3077 6.6L96.8846 9.75H95.8462L93.0769 7.65L88.5769 8.7L82.3462 5.2H74.0385L71.9615 17.8L65.7308 23.75L61.2308 22.7L57.0769 23.05L55 19.9H33.8846L29.7308 23.4L26.2692 20.6L18.6538 22.35L17.9615 26.2L12.0769 31.1L11.3846 33.55L6.19231 40.2L5.5 44.05L2.38462 47.55L3.07692 51.05L1 52.45L1.34615 56.3L3.76923 59.1L3.42308 64L5.5 66.45V70.3L3.42308 71.35Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Чернігів</text>\n';break;case 17:console.log("drawing Тернопіль"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="80" height="135" viewBox="0 0 80 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M77.4 130.805L78.6 132.402L77.4 134H75L73 132.802L70.2 131.604H67L65.4 130.405L63.8 128.408V126.411L61.8 124.414H59.4L57.8 125.613L56.2 126.411L53 126.012L51.8 125.213L49.8 121.619L49 120.82H47.8L46.2 122.417H45.8L44.2 120.82L42.2 120.42L41.4 120.021L41.8 116.826L40.6 115.628V112.432L39 111.234L37.4 108.838H35.4L33 107.64V106.441L30.2 105.643L28.6 104.844H24.2L23 106.841H21.8V104.045L22.2 101.249H19.8L18.6 102.447L18.2 100.45V97.6547L16.6 96.0571L14.6 94.8589H11.8L9.4 92.8619L8.6 90.8649L7.4 90.0661V88.0691L9.4 87.6697L10.6 86.8709L11.8 85.6727L11.4 84.0751H7.4L6.2 82.4775H5V79.6817L4.2 78.4835L6.2 78.0841L7.8 75.6877L7.4 73.6907L5.4 72.0931V68.0991L4.2 63.7057V60.9099L2.6 57.7147L1 54.5195V52.5225L2.2 51.3243L4.2 49.7267V48.5285L6.6 47.7297H7.8H10.6L11.4 45.7327H13L14.2 44.5345V40.9399L15.8 40.5405L19.4 39.7417H21L20.6 34.5495L20.2 33.3514L22.2 30.955H24.6H29.4L31.8 29.3574L34.6 28.5586L36.2 25.7628L37 23.7658L37.8 20.5706V18.5736L37 15.7778L38.2 14.5796L39.8 12.5826L40.2 10.5856L38.6 9.78679V8.98799L40.2 7.78979L40.6 6.59159L41.4 6.99099L43 7.39039L43.8 8.18919H49L49.8 7.39039H56.6L58.6 6.59159V4.59459H61L61.8 3.3964L63.8 2.5976L64.6 1.7988H69.4L70.2 1L72.2 2.5976L73.8 3.3964L75 2.5976L76.6 2.997L75.8 5.39339V6.59159V8.98799L76.6 9.78679L76.2 11.7838L77.4 12.1832L79 14.1802L75.8 14.979V16.5766L76.6 18.973L75.8 20.1712L75 22.967L73 24.5646L72.2 30.5556L73.4 31.3544V35.7477L75.8 38.9429V41.3393L75 42.5375L74.2 45.3333L75.8 47.3303L75 49.7267L74.2 52.1231L71.4 54.9189L70.2 56.5165L71.4 60.9099L72.2 64.9039L73.4 68.8979L74.2 70.8949V76.8859L73.4 78.0841L71.4 79.6817V83.6757L72.2 84.8739V88.4685L71.4 91.6637L69.8 92.8619L71.4 94.4595V96.8559L70.2 97.6547V104.045L71.4 105.243L70.2 106.042V108.838L72.2 111.234L71.4 112.432V116.426L70.2 120.42L72.6 122.417L73.8 125.213L75.4 128.009L77.4 130.805Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Тернопіль</text>\n';break;case 18:console.log("drawing Чернівці"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="168" height="87" viewBox="0 0 168 87" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 82.5L1 83L2.5 85.5L13 85L26 70.5L58 69.5L66 66L81.5 65.5L89.5 55L90.5 49L93.5 47.5L99 47L101 45.5H103.5L105 47L108 46.5L111 43.5L120 43L123 38.5V33L125 31L128.5 30.5L132.5 35L136 35.5L138 32L139.5 31.5L145 34L148 35.5L151.5 32.5L156.5 28.5L161.5 29L166.5 26.5L166 24.5V20.5L166.5 18L162 12L159.5 11H156.5L153 13L152 16.5L149 14.5H145L142.5 17L141 16L137.5 15.5V14L134 13.5L132 15L129.5 17L128 15.5L127 14L126 11L120 12.5L121 15L119 17.5L117.5 18.5V16L115 15.5L113 14.5L112.5 21L111.5 25H110L108 24L107.5 21.5L105.5 17L100 16.5L98.5 18.5H95.5L93 17L89.5 15.5H85.5L83.5 14L81.5 11.5V9L79 6.5H76L74 8L72 9L68 8.5L66.5 7.5L64 3L63 2H61.5L59.5 4H59L57 2L54.5 1.5L53.5 1L51.5 1.5L47.5 3.5V5L49 10V12L50.5 14V18L49 18.5V22L47.5 24.5H44L43 23.5H39.5L37 24.5L33.5 25.5L30.5 28L28 32H25.5L24 35.5L22 37H18.5L18 42H17.5L15.5 45L12.5 48H10L8.5 49.5L7.5 53L6 54L5.5 57.5L4 58V63.5L5 65.5V68.5L7 70V76L6 76.5L3 82.5Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Чернівці</text>\n';break;case 19:console.log("drawing Дніпро"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="172" height="116" viewBox="0 0 172 116" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M160.877 34.5705L159.83 31.4233H156.339V33.8712H152.499L150.754 31.4233L149.008 29.6748L146.914 31.773V35.6196H145.168L144.819 37.3681L141.678 38.4172L140.979 33.1718L139.583 31.773V31.4233L136.092 28.6258L133.998 27.9264L134.696 23.7301L129.111 19.184H127.016L127.366 15.6871L127.016 12.5399L124.224 11.1411L121.431 11.8405L118.639 14.9877L111.657 12.5399L107.468 11.1411L102.93 12.5399L97.694 7.64417L92.4579 3.79755L89.3162 1.34969H85.1273H83.3819H79.193L73.9569 1L70.8152 3.79755L66.6263 6.2454L62.4374 7.29448L59.9938 8.69325L57.5503 12.8896L54.7577 17.7853L53.0123 19.8834V21.2822L54.7577 22.681V26.5276L54.0595 30.0245L50.5688 27.9264L46.3799 25.4785L42.191 24.7791L38.7002 25.4785L36.9548 27.5767L33.115 29.3252L28.577 28.2761L23.6899 29.3252L25.4353 32.4724L29.9733 34.5705L34.1622 36.319L33.115 38.7669L28.577 41.5644L23.6899 44.7117L20.1992 46.1104V49.6074L21.5955 54.8528V58.3497L23.6899 61.4969L22.9918 64.2945L20.1992 66.7423L16.3593 69.1902L13.2177 70.9386L9.02875 76.8834L5.53799 78.6319L3.44353 80.0307L2.3963 82.8282V85.9755L4.83984 88.4233L4.14168 90.5215V96.8159L5.53799 99.6135H2.3963L1 101.362L2.3963 105.209L3.44353 107.307L6.58522 109.405H9.02875L10.4251 111.153H15.3121L17.4066 115L19.501 113.252L22.6427 112.552L24.7372 109.405H26.4825L28.577 111.853L32.0678 113.951H36.6058L41.8419 112.552H44.9836H52.3142L56.8522 115L63.4846 112.552L70.117 109.405H75.7023H82.3347L87.5708 107.307L85.8255 102.761L86.8727 100.313V94.3681L84.4292 92.6196L85.8255 90.5215L84.4292 88.4233L80.9384 86.3251L79.8912 83.8773L82.3347 82.4785H84.4292L85.1273 80.7301L82.3347 77.9325L79.8912 76.5337V75.135H81.6366V73.7362L80.9384 71.9877V69.8896H81.6366L83.0329 71.638L85.8255 71.9877L88.9671 70.589V69.5399H96.6468L98.0431 68.1411L101.883 68.4908L103.977 70.589L106.77 69.5399L109.563 69.8896V70.589L113.402 69.1902L116.195 68.1411L120.384 68.4908L124.224 70.589L127.016 68.4908H129.809L130.507 73.0368H132.253L132.951 71.9877L133.998 73.0368L132.951 75.135L134.696 77.9325L137.489 79.3313V81.4294L134.696 82.4785L135.394 84.5767L138.536 85.6258L139.583 83.8773L140.281 82.4785H142.027L142.725 84.5767L144.819 85.6258L147.263 85.2761L148.31 83.8773H151.103L152.848 84.5767L154.943 82.8282L155.641 79.681L159.83 77.5828L158.782 76.8834V74.7853L156.339 72.6871V69.1902V67.7914L158.084 66.3926H163.32L165.764 69.1902H169.604L169.953 66.3926V63.2454L168.906 60.4478L169.953 60.0982L171 57.6503V54.8528L169.255 51.7055L165.415 50.3067L165.764 42.2638V38.0675L168.207 35.9693L167.16 34.5705L164.368 34.2209L162.622 35.9693L160.877 34.5705Z" fill="#AFB78E"/>\n<path d="M3.44353 80.0307L1 78.6319M3.44353 80.0307L5.53799 78.6319L9.02875 76.8834L13.2177 70.9386L16.3593 69.1902L20.1992 66.7423L22.9918 64.2945L23.6899 61.4969L21.5955 58.3497V54.8528L20.1992 49.6074V46.1104L23.6899 44.7117L28.577 41.5644L33.115 38.7669L34.1622 36.319L29.9733 34.5706L25.4353 32.4724L23.6899 29.3252L28.577 28.2761L33.115 29.3252L36.9548 27.5767L38.7002 25.4785L42.191 24.7791L46.3799 25.4785L50.5688 27.9264L54.0595 30.0245L54.7577 26.5276V22.681L53.0123 21.2822V19.8834L54.7577 17.7853L57.5503 12.8896L59.9938 8.69325L62.4374 7.29448L66.6263 6.2454L70.8152 3.79755L73.9569 1L79.193 1.34969H83.3819H85.1273H89.3162L92.4579 3.79755L97.694 7.64417L102.93 12.5399L107.468 11.1411L111.657 12.5399L118.639 14.9877L121.431 11.8405L124.224 11.1411L127.016 12.5399L127.366 15.6871L127.016 19.184H129.111L134.696 23.7301L133.998 27.9264L136.092 28.6258L139.583 31.4233V31.773L140.979 33.1718L141.678 38.4172L144.819 37.3681L145.168 35.6196H146.914V31.773L149.008 29.6748L150.754 31.4233L152.499 33.8712H156.339V31.4233H159.83L160.877 34.5706L162.622 35.9693L164.368 34.2209L167.16 34.5706L168.207 35.9693L165.764 38.0675V42.2638L165.415 50.3067L169.255 51.7055L171 54.8528V57.6503L169.953 60.0982L168.906 60.4479L169.953 63.2454V66.3926L169.604 69.1902H165.764L163.32 66.3926H158.084L156.339 67.7914V69.1902V72.6871L158.782 74.7853V76.8834L159.83 77.5828L155.641 79.681L154.943 82.8282L152.848 84.5767L151.103 83.8773H148.31L147.263 85.2761L144.819 85.6258L142.725 84.5767L142.027 82.4785H140.281L139.583 83.8773L138.536 85.6258L135.394 84.5767L134.696 82.4785L137.489 81.4294V79.3313L134.696 77.9325L132.951 75.135L133.998 73.0368L132.951 71.9877L132.253 73.0368H130.507L129.809 68.4908H127.016L124.224 70.589L120.384 68.4908L116.195 68.1411L113.402 69.1902L109.563 70.589V69.8896L106.77 69.5399L103.977 70.589L101.883 68.4908L98.0431 68.1411L96.6468 69.5399H88.9671V70.589L85.8255 71.9877L83.0329 71.638L81.6365 69.8896H80.9384V71.9877L81.6365 73.7362V75.135H79.8912V76.5337L82.3347 77.9325L85.1273 80.7301L84.4292 82.4785H82.3347L79.8912 83.8773L80.9384 86.3252L84.4292 88.4233L85.8255 90.5215L84.4292 92.6196L86.8727 94.3681V100.313L85.8255 102.761L87.5708 107.307L82.3347 109.405H75.7023H70.117L63.4846 112.552L56.8522 115L52.3142 112.552H44.9836H41.8419L36.6057 113.951H32.0678L28.577 111.853L26.4825 109.405H24.7372L22.6427 112.552L19.501 113.252L17.4066 115L15.3121 111.153H10.4251L9.02875 109.405H6.58522L3.44353 107.307L2.3963 105.209L1 101.362L2.3963 99.6135H5.53799L4.14168 96.8159V90.5215L4.83984 88.4233L2.3963 85.9755V82.8282L3.44353 80.0307Z" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Дніпро</text>\n';break;case 20:console.log("drawing Запоріжжя"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="148" height="132" viewBox="0 0 148 132" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.9184 48.4425L5.84184 51.0575V57.408L8.82143 63.3851H14.0357V62.2644L15.1531 60.7701H17.3878L20.7398 64.1322L18.8776 68.2414L19.9949 73.0977L23.3469 77.2069V82.4368L24.4643 85.0517L28.5612 85.7989L30.7959 87.6667L34.8929 91.0287V93.6437L33.4031 94.3908L31.9133 99.2471L30.7959 101.862H28.5612L29.3061 104.851L33.4031 105.598V108.213L31.9133 110.454L34.8929 112.695L38.2449 113.443L39.3622 116.431L44.2041 117.552L47.9286 118.299V119.793L49.4184 128.011L50.9082 131L53.1429 128.759L57.2398 124.649L56.8673 120.54L55.0051 118.299V116.805L56.8673 116.431L59.8469 120.914L60.5918 125.397L62.0816 126.891H63.9439L66.551 122.408L71.0204 118.672L76.9796 114.937L80.7041 108.96L85.9184 104.851L92.25 101.862L97.4643 100.741L103.423 99.9943L106.031 102.983H107.52L109.383 98.5L114.224 94.7644L120.184 92.8966L123.163 91.4023H126.143L130.24 94.0172H132.474L134.337 91.7759L134.709 88.7874L141.786 82.8103L139.551 79.8218L140.296 77.5805L141.786 76.4598H144.02V74.9655L142.903 74.592V72.7241L144.765 71.2299L142.903 70.4828H140.296L139.551 69.7356L138.434 67.1207L135.827 64.1322L133.964 63.3851L132.474 61.8908L131.357 60.7701L132.474 59.2759L133.964 57.0345L135.082 55.9138L132.474 55.5402V54.046L133.964 52.1782L136.571 53.6724H138.806L140.296 51.431L141.041 47.3218H144.765L145.51 44.7069L147 42.4655L145.51 40.5977L141.041 40.2241L139.551 39.1035L136.571 36.8621L135.082 34.9943L132.474 33.5L129.867 35.7414L128.378 34.2471L125.026 32.3793L122.046 30.8851V27.8966L119.811 26.7759L118.321 22.2931L113.852 20.7989V15.9425L111.99 14.8218L111.245 13.3276L110.5 16.6897L108.265 18.5575L106.403 17.8103H103.423L102.306 19.3046L99.699 19.6782L97.4643 18.5575L96.7194 16.3161H94.8571L94.1122 17.8103L92.9949 19.6782L89.6429 18.5575L88.898 16.3161L91.8775 15.1954V12.954L88.898 11.4598L87.0357 8.47126L88.1531 6.22989L87.0357 5.1092L86.2908 6.22989H84.4286L83.6837 1.37356H80.7041L77.7245 3.61494L73.6275 1.37356L69.1582 1L66.1786 2.12069L62.0816 3.61494V2.86782L59.102 2.49425L56.1224 3.61494L53.8878 1.37356L49.7908 1L48.301 2.49425H40.1071V3.61494L36.7551 5.1092L33.7755 4.73563L32.2857 2.86782H31.5408V5.1092L32.2857 6.97701V8.47126H30.4235V9.96552L33.0306 11.4598L36.0102 14.4483L35.2653 16.3161H33.0306L30.4235 17.8103L31.5408 20.4253L35.2653 22.6667L36.7551 24.908L35.2653 27.1494L37.8724 29.0172V35.3678L36.7551 37.9828L38.6173 42.8391L33.0306 45.0805H25.9541H19.9949L12.9184 48.4425Z" fill="#AFB78E"/>\n<path d="M1 48.4425L5.84184 51.0575M5.84184 51.0575L12.9184 48.4425L19.9949 45.0805H25.9541H33.0306L38.6173 42.8391L36.7551 37.9828L37.8724 35.3678V29.0172L35.2653 27.1494L36.7551 24.908L35.2653 22.6667L31.5408 20.4253L30.4235 17.8103L33.0306 16.3161H35.2653L36.0102 14.4483L33.0306 11.4598L30.4235 9.96552V8.47126H32.2857V6.97701L31.5408 5.1092V2.86782H32.2857L33.7755 4.73563L36.7551 5.1092L40.1071 3.61494V2.49425H48.301L49.7908 1L53.8878 1.37356L56.1224 3.61494L59.102 2.49425L62.0816 2.86782V3.61494L66.1786 2.12069L69.1582 1L73.6276 1.37356L77.7245 3.61494L80.7041 1.37356H83.6837L84.4286 6.22989H86.2908L87.0357 5.1092L88.1531 6.22989L87.0357 8.47126L88.898 11.4598L91.8776 12.954V15.1954L88.898 16.3161L89.6429 18.5575L92.9949 19.6782L94.1122 17.8103L94.8571 16.3161H96.7194L97.4643 18.5575L99.699 19.6782L102.306 19.3046L103.423 17.8103H106.403L108.265 18.5575L110.5 16.6897L111.245 13.3276L111.99 14.8218L113.852 15.9425V20.7989L118.321 22.2931L119.811 26.7759L122.046 27.8966V30.8851L125.026 32.3793L128.378 34.2471L129.867 35.7414L132.474 33.5L135.082 34.9943L136.571 36.8621L139.551 39.1034L141.041 40.2241L145.51 40.5977L147 42.4655L145.51 44.7069L144.765 47.3218H141.041L140.296 51.431L138.806 53.6724H136.571L133.964 52.1782L132.474 54.046V55.5402L135.082 55.9138L133.964 57.0345L132.474 59.2759L131.357 60.7701L132.474 61.8908L133.964 63.3851L135.827 64.1322L138.434 67.1207L139.551 69.7356L140.296 70.4828H142.903L144.765 71.2299L142.903 72.7241V74.592L144.02 74.9655V76.4598H141.786L140.296 77.5805L139.551 79.8218L141.786 82.8103L134.709 88.7874L134.337 91.7759L132.474 94.0172H130.24L126.143 91.4023H123.163L120.184 92.8966L114.224 94.7644L109.383 98.5L107.52 102.983H106.031L103.423 99.9943L97.4643 100.741L92.25 101.862L85.9184 104.851L80.7041 108.96L76.9796 114.937L71.0204 118.672L66.551 122.408L63.9439 126.891H62.0816L60.5918 125.397L59.8469 120.914L56.8673 116.431L55.0051 116.805V118.299L56.8673 120.54L57.2398 124.649L53.1429 128.759L50.9082 131L49.4184 128.011L47.9286 119.793V118.299L44.2041 117.552L39.3622 116.431L38.2449 113.443L34.8929 112.695L31.9133 110.454L33.4031 108.213V105.598L29.3061 104.851L28.5612 101.862H30.7959L31.9133 99.2471L33.4031 94.3908L34.8929 93.6437V91.0287L30.7959 87.6667L28.5612 85.7989L24.4643 85.0517L23.3469 82.4368V77.2069L19.9949 73.0977L18.8776 68.2414L20.7398 64.1322L17.3878 60.7701H15.1531L14.0357 62.2644V63.3851H8.82143L5.84184 57.408V51.0575Z" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Запоріжжя</text>\n';break;case 21:console.log("drawing Харків"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="149" height="132" viewBox="0 0 149 132" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M31.4138 14.3241L34.6724 12.5235L36.8448 12.8837L41.9138 6.76177L44.0862 5.68144H54.9483L57.1207 6.76177L61.1034 13.6039L65.0862 13.964L67.2586 12.8837L68.3448 11.4432L73.4138 14.3241L75.5862 17.9252L79.2069 17.205L81.0172 13.6039L90.431 7.48199H97.6724L102.017 4.60111L104.914 1H112.155L114.328 6.04155L115.776 6.76177H119.397V14.3241L126.638 22.2465L133.155 24.0471L140.397 31.2493L141.845 34.8504L139.31 37.7313L140.759 39.5319L138.224 44.5734L139.31 45.2936L140.759 46.0138V49.2548L138.948 53.9363L140.397 58.2576L139.31 60.7784L137.5 63.6593L136.776 67.2604L137.5 71.2216L139.31 72.662L140.397 74.1025L140.034 75.1828V76.9834L145.828 82.385L148 85.626L146.914 87.4266V89.5873L148 91.0277L147.276 92.4681L145.828 94.9889L147.276 96.7895V98.2299L145.103 99.6704L141.483 100.751H135.69L133.879 98.2299L129.897 97.8698L128.448 95.7091V93.9086L129.534 93.5485L128.448 91.0277L127.362 91.7479L126.638 93.5485H124.103L121.569 92.4681L120.483 90.3075L117.586 91.0277L116.862 93.5485V93.9086V95.7091H113.966V97.8698L115.052 98.9501V99.6704L109.983 103.992L109.259 106.873L107.448 108.673L103.466 110.114V112.634H102.017L99.4828 111.194H95.5L94.7759 113.715H92.2414L90.069 111.914L88.9828 112.634V115.155L91.1552 117.676V123.798H87.5345V126.319H83.5517L81.7414 123.798L79.931 121.997L77.7586 124.158V128.119H75.9483L75.5862 129.92L72.3276 131L71.6034 125.598L70.1552 124.158V123.798L66.5345 120.917L64.3621 120.197L65.0862 115.875L59.2931 111.194H57.1207L57.4828 107.593L57.1207 104.352L54.2241 102.911L51.3276 103.632L48.431 106.873L41.1897 104.352L36.8448 102.911L32.1379 104.352L26.7069 99.3102L21.2759 95.349L18.0172 92.8283H13.6724H11.8621V90.3075L10.7759 89.2271L9.68966 88.1468L11.8621 86.7064L10.7759 85.626V84.1856L12.5862 82.0249L15.4828 83.8255L20.9138 83.4654L22.3621 82.0249L25.9828 78.7839V73.3823L25.2586 72.3019V70.1413H29.6034L31.0517 68.3407L28.1552 66.1801L27.7931 65.4598H31.0517L31.4138 64.3795L29.6034 62.9391L28.1552 61.1385L27.7931 59.6981L28.8793 58.6177L28.5172 57.5374L27.7931 56.4571L25.2586 57.5374L22.3621 57.8975L19.4655 54.6565L17.6552 52.4958V47.8144L16.569 46.7341L14.3966 46.374L13.6724 47.0942L11.8621 46.374L10.4138 44.2133L6.06897 43.4931L2.81034 42.4127V39.5319L1.72414 38.0914L1 37.0111L3.53448 33.41L4.98276 33.0499V31.6094H4.25862V26.928L6.06897 25.8476L8.24138 24.4072L10.7759 22.6066L12.2241 20.446H14.0345L16.2069 21.5263L18.0172 19.3657L18.3793 17.5651H20.1897L21.2759 15.4044L22.7241 15.7645L23.4483 15.4044V13.964L24.5345 12.5235L27.7931 15.4044L31.4138 14.3241Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Харків</text>\n';break;case 22:console.log("drawing Донецьк"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="100" height="133" viewBox="0 0 100 133" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M98.0607 59.4317L99 63.8297L98.0607 64.7722L96.1821 66.0288H93.0511L91.4856 66.9712L89.9201 69.1703V74.1966L89.2939 76.7098L85.5367 78.2806L83.0319 80.7938L79.2748 81.1079L74.5783 82.6787L72.6997 84.2494L71.7604 87.3909L72.3866 93.0456L71.7604 96.5012L69.5687 99.3285L70.508 101.842L73.9521 101.528V104.041L71.1342 106.24L70.1949 108.753L72.3866 111.58L71.4473 114.408L70.1949 116.921L68.3163 114.408H65.8115H57.6709L55.7923 116.921L53.6006 117.863L48.9042 118.492L48.278 116.921L46.7125 116.293L45.147 116.921L40.7636 125.403L37.9457 128.859L36.0671 127.602H33.5623L26.6741 132L24.7955 129.487L25.4217 127.602L26.6741 126.659H28.5527V125.403L27.6134 125.089V123.518L29.1789 122.261L27.6134 121.633H25.4217L24.7955 121.005L23.8562 118.806L21.6645 116.293L20.099 115.664L18.8466 114.408L17.9073 113.465L18.8466 112.209L20.099 110.324L21.0383 109.381L18.8466 109.067V107.811L20.099 106.24L22.2907 107.496H24.1693L25.4217 105.612L26.0479 102.156H29.1789L29.8051 99.9568L31.0575 98.0719L29.8051 96.5012L26.0479 96.1871L24.7955 95.2446L22.2907 93.3597L21.0383 91.789L18.8466 90.5324L16.655 92.4173L15.4026 91.1607L12.5847 89.5899L10.0799 88.3333V85.8201L8.20128 84.8777L6.94888 81.1079L3.19169 79.8513V75.7674L1.6262 74.8249L1 73.5684L4.75719 71.6835L3.81789 71.0552V69.1703L1.6262 67.2854V64.1439V62.8873L3.19169 61.6307H7.88818L10.0799 64.1439H13.524L13.8371 61.6307V58.8034L12.8978 56.2902L13.8371 55.976L14.7764 53.777V51.2638L13.2109 48.4365L9.76677 47.1799L10.0799 39.9544V36.1847L12.2716 34.2998L11.3323 33.0432L8.82748 32.729L7.26198 34.2998L5.69649 33.0432L4.75719 30.2158V24.8753L2.87859 22.6763V20.4772L3.81789 19.8489L5.69649 21.4197H7.88818L8.51438 19.2206H11.9585L14.1502 20.4772H15.4026V18.2782L18.8466 17.0216L20.4121 15.4508L21.0383 12.9377L25.4217 9.16787V8.53957L24.4824 7.59712V5.71223H26.9872V4.14149V3.82734L27.6134 1.6283L30.1182 1L31.0575 2.88489L33.2492 3.82734H35.4409L36.0671 2.25659L37.0064 1.6283L37.9457 3.82734L37.0064 4.14149V5.71223L38.2588 7.59712L41.7029 7.91127L43.2684 10.1103H48.278L51.4089 9.16787L53.2875 7.91127V6.65468H57.984L61.115 7.91127V10.1103L63.3067 12.6235V16.3933L64.8722 18.5923L62.6805 20.7914V22.6763L64.246 24.8753L64.8722 29.9017L66.4377 30.53L67.0639 33.6715H69.5687L71.4473 35.5564L73.3259 38.3837V39.3261L71.4473 40.5827V43.0959L75.8307 43.7242L78.3355 43.0959L79.901 45.6091V47.8082L83.0319 50.3213L86.7891 50.0072L88.6677 51.8921L88.3546 54.4053L89.607 56.2902H97.4345L98.0607 59.4317Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Донецьк</text>\n';break;case 23:console.log("drawing Луганськ"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="96" height="135" viewBox="0 0 96 135" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.61754 13.6035L4.29825 10.2868H8.25614L10.8947 7.63342L9.24561 2.32668L10.8947 1H14.8526L16.5018 2.99002V4.31671L22.7684 6.30673L25.0772 4.98005L29.3649 5.64339L32.3333 9.29177L37.9404 10.2868L40.5789 12.6085H43.8772L47.8351 8.62843H50.4737L53.1123 13.2718L55.7509 15.9252L57.4 16.5885L61.3579 14.2668L63.6667 16.5885L66.9649 15.9252L69.2737 21.8953L75.5404 23.5536L76.8596 24.8803L79.4982 24.217L84.1158 20.2369H89.0632V21.2319L87.0842 25.8753V28.197L91.7018 34.1671L93.0211 35.4938L91.7018 41.1322V43.4539L89.0632 47.4339L86.0947 50.419L84.7754 54.0673L82.1368 55.0623L78.8386 57.384H76.2L76.8596 61.3641L80.4877 64.3491L88.0737 66.0075L91.7018 64.3491L93.0211 65.0125V67.0025L91.0421 70.6509H88.0737L82.7965 69.6559L80.4877 72.6409L78.8386 76.6209V79.9377L79.4982 83.9177L86.0947 85.9077L87.414 86.5711V90.2195L91.0421 95.5262V97.8479L89.0632 100.501V101.828L93.6807 101.165L95 101.828L94.6702 103.818L91.0421 106.803L91.7018 109.788L90.0526 111.115V115.426L88.0737 118.743L90.0526 123.718V126.372L88.7333 130.02L81.1474 131.015L75.2105 133.005L73.2316 132.673L69.2737 131.015L63.6667 134L61.3579 133.337L58.7193 131.015L57.7298 126.372L57.0702 123.055H48.8246L47.5053 121.065L47.8351 118.411L45.8561 116.421L41.8982 116.753L38.6 114.1V111.778L36.9509 109.125L34.3123 109.788L29.6947 109.125V106.471L31.6737 105.145V104.15L29.6947 101.165L27.7158 99.1746H25.0772L24.4175 95.8579L22.7684 95.1945L22.1088 89.8878L20.4597 87.5661V85.5761L22.7684 83.2544L21.1193 80.9327V76.9526L18.8105 74.2992V71.9776L15.5123 70.6509H10.5649L9.24561 68.9925L10.5649 66.6708L11.2246 65.3441L10.2351 64.0175V62.0274L11.2246 60.3691L9.24561 57.384L3.96842 52.409V50.7506L4.29825 49.7556L3.30877 48.4289L1.65965 47.1022L1 43.4539L1.65965 40.1372L3.30877 37.4838L4.29825 35.1621L2.97895 31.182L4.62807 26.8703V23.8853L3.30877 23.2219L2.3193 22.5586L4.62807 17.9152L3.30877 16.2569L5.61754 13.6035Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Луганськ</text>\n';break;case 24:console.log("drawing Київ"),Ai.classList.remove("hidden"),Si.innerHTML='<svg width="112" height="145" viewBox="0 0 112 145" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.22388 6.91724L2.31343 7.57471L4.61194 10.8621L3.95522 13.8207L1 16.7793V20.7241L1.32836 22.6966L5.92537 24.0115L8.22388 27.6276V31.2437L5.92537 32.5586L3.95522 33.5448V34.2023L6.25373 35.1885L8.55224 38.8046V41.1057L8.22388 43.7356L8.55224 45.3793L11.5075 45.708L11.8358 49.9816L10.8507 51.2966L9.86567 52.9402L7.89552 54.5839V56.5563L9.20895 58.2V59.5149L6.91045 61.1586V62.1448H8.22388L8.55224 64.1172L7.23881 64.7747L5.92537 66.0897V67.0759L8.55224 68.0621H11.8358L12.4925 72.3356V73.6506L14.4627 74.308L15.4478 75.9517L16.1045 76.2805V82.1977L17.0896 83.1839V86.1425L16.1045 87.1287H14.4627L14.791 92.0598L15.7761 93.7034L17.0896 94.3609V96.6621L15.7761 98.3057L13.4776 100.607L11.1791 101.264L10.8507 102.579L8.22388 103.237L6.91045 104.88H4.9403V106.524L5.59701 107.51L5.26866 109.483L4.9403 111.126L6.91045 111.455V114.085H7.23881L8.8806 115.071L8.22388 116.386L7.23881 118.03L7.56716 119.674L9.53731 121.317L10.194 122.303L8.8806 124.276L9.53731 125.262L10.5224 126.577L10.194 128.549L7.89552 129.864L7.56716 132.166L8.8806 132.823L10.194 135.124L12.1642 136.439L15.4478 140.055L16.1045 143.014L18.7313 144H20.7015L22.3433 143.014L24.3134 140.713V138.74H25.2985H27.597L30.2239 137.425L33.8358 134.467L34.1642 136.439L35.4776 137.425L39.0896 137.097L41.0597 138.74L42.7015 139.726L43.6866 136.439L45 133.809H51.5672L53.209 132.166L56.1642 134.467H57.806L59.1194 133.152L64.0448 133.48L64.7015 132.166V130.193L66.6716 127.234L69.6269 124.605L70.9403 123.29L72.9104 120.331L73.8955 118.687L71.2687 117.044L72.9104 115.729L74.5522 114.743L73.8955 110.469L74.5522 108.168V106.524L74.8806 105.538L75.209 101.922L80.1343 98.9632L83.0896 98.6345L85.3881 99.9494L91.6269 101.593H93.597L94.9104 100.278L96.2239 97.977L98.194 96.3333L99.8358 94.0322V92.0598L101.806 91.0736V90.0874L100.493 88.4437V86.4713L102.463 84.1701L104.761 83.1839L105.746 82.1977V80.8828L105.09 79.8965V78.2529L106.075 77.2667H108.701L109.358 75.623L110.672 72.9931L111 70.6919L109.03 68.3908V67.0759L105.418 64.7747L104.761 62.8023L106.075 61.4874H107.388V59.5149H104.761L102.134 57.8713V56.2276L100.164 54.5839L98.5224 55.5701L97.209 57.8713L94.5821 58.5287L93.2687 59.5149L92.2836 61.4874H89.6567H87.3582H86.0448L84.0746 62.8023L82.1045 61.4874H80.1343L79.1493 62.8023L77.5075 61.4874V59.5149L74.2239 56.2276V54.5839H75.209V52.9402L74.2239 51.2966L73.2388 49.6529L71.2687 48.0092L70.6119 46.0368H67.9851L65.3582 48.0092L61.7463 48.3379L60.7612 47.3517H57.1493L56.4925 43.7356L57.806 41.7632L57.4776 40.4483L53.209 37.1609V32.8874L51.2388 30.9149V26.6414V22.3678L49.597 19.7379L48.6119 18.7517L49.597 15.1356H47.6269L46.3134 13.8207H43.0299L42.0448 10.8621L41.3881 6.91724L35.806 2.31494H26.2836L23 4.61609H19.0597L17.7463 3.95862V1L14.1343 1.65747L12.8209 3.30115L10.194 4.61609L8.22388 6.91724Z" fill="#AFB78E" stroke="#849464" stroke-width="2" stroke-linejoin="round"/>\n</svg>\n\n<text class="oblast-text">Київ</text>\n';break;default:console.log("drawing error",e)}})(t),Oi.classList.add("hidden"),Ci(t),localStorage.setItem("id",t)}}}),new Swiper(".swiperBubbles",{speed:4e3,slidesPerView:"auto",spaceBetween:8}),new Swiper(".mySwiperGallery",{speed:4e3,slidesPerView:3,grid:{fill:"row",rows:2},spaceBetween:8,autoplay:{delay:1e3,waitForTransition:!0}});console.log(ki);const Ci=e=>{const t=ki[e],n=Object.values(t);let i="";n.forEach((e=>{const t=parseInt(e);let n=e.split("").splice(t.toString().length).join("");i+=`\n      <div class="swiper-slide charity-item">\n        <span class="charity-item--bigger">${t}</span><br/>${n}\n      </div>`})),Ri.innerHTML=i},Ni=document.querySelector(".map__more"),Di=document.querySelector(".modalOblastJS");Ni.addEventListener("click",(e=>{let t=parseInt(localStorage.getItem("id")),n="<button type='button' class=\"closeJS modal__oblast-button\">X</button>";const i=Object.values(Ti[t]);console.log("separatedMsgs",i),i.forEach((e=>{let t="";console.log(e),t+=`<span class='modal__oblast-detailed--first '>${e[0]}</span>`,t+=`<span class='modal__oblast-detailed--second '>${e[1]}</span>`,t+=`<div class='modal__oblast-detailed--third '>${e[2]}</div>`,n+=`<div class="modal__oblast-detailed--section">${t}</div>`})),console.log(n),Di.innerHTML=n,Di.classList.toggle("is-hidden");document.querySelector(".closeJS").addEventListener("click",(e=>Di.classList.toggle("is-hidden")))}));
//# sourceMappingURL=index.c6d9f8bc.js.map
