const t={};function n(n){Object.assign(t,n)}const e=t=>({...t,message:t.errMsg});async function i(t,n,...i){const o="string"==typeof t?tt[t]:t;return new Promise(((t,r)=>{o.call(tt,{...n,success:n=>{"ok"===n.errMsg.split(":")[1]?t(n):r(e(n))},fail:t=>r(e(t))},...i)}))}async function o(t){i("hideLoading");const{confirm:n}=await i("showModal",{title:"提示",content:"功能需要开启授权，是否前往设置页开启"});if(!n)return Promise.reject(new Error("model点击取消"));const{authSetting:e}=await i("openSetting");return e[t]?Promise.resolve("授权成功"):Promise.reject(new Error("取消授权"))}async function r(n,e){const r=t[n];if(r){const{authSetting:t}=await i("getSetting",{withSubscriptions:!0});!1===t[r]&&await o(r)}return i(n,e)}export{r as call,e as createFailError,o as getApiScope,i as promiseify,n as registerApiScope};