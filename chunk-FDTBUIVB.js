import{$a as u,Ca as g,Za as v,_,aa as a,bb as C,da as m,db as D,eb as p,fa as l,ga as h,j as S,jc as I,kc as M,na as b,ob as f}from"./chunk-FJN3GIWK.js";var k=null;function F(){return k}function je(n){k??=n}var L=class{};var $=new m(""),x=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=a({token:n,factory:()=>h(V),providedIn:"platform"})}return n})();var V=(()=>{class n extends x{_location;_history;_doc=h($);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return F().getBaseHref(this._doc)}onPopState(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=a({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function U(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function B(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function c(n){return n&&n[0]!=="?"?"?"+n:n}var A=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=a({token:n,factory:()=>h(G),providedIn:"root"})}return n})(),j=new m(""),G=(()=>{class n extends A{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??h($).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return U(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+c(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(l(x),l(j,8))};static \u0275prov=a({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var H=(()=>{class n{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=W(B(O(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+c(t))}normalize(e){return n.stripTrailingSlash(Z(this._basePath,O(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=c;static joinWithSlash=U;static stripTrailingSlash=B;static \u0275fac=function(t){return new(t||n)(l(A))};static \u0275prov=a({token:n,factory:()=>Y(),providedIn:"root"})}return n})();function Y(){return new H(l(A))}function Z(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function O(n){return n.replace(/\/index.html$/,"")}function W(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Ge(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,s]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var E=/\s+/,R=[],He=(()=>{class n{_ngEl;_renderer;initialClasses=R;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(E):R}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(E).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(t){return new(t||n)(u(g),u(D))};static \u0275dir=f({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var y=class{$implicit;ngForOf;index;count;constructor(r,e,t,i){this.$implicit=r,this.ngForOf=e,this.index=t,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ye=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,i){this._viewContainer=e,this._template=t,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)t.createEmbeddedView(this._template,new y(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(s===null?void 0:s);else if(s!==null){let d=t.get(s);t.move(d,o),T(d,i)}});for(let i=0,s=t.length;i<s;i++){let d=t.get(i).context;d.index=i,d.count=s,d.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=t.get(i.currentIndex);T(s,i)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(u(p),u(C),u(I))};static \u0275dir=f({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function T(n,r){n.context.$implicit=r.item}var Ze=(()=>{class n{_viewContainer;_context=new w;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){P("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){P("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(u(p),u(C))};static \u0275dir=f({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),w=class{$implicit=null;ngIf=null};function P(n,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${_(r)}'.`)}var We=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,t,i){this._ngEl=e,this._differs=t,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[i,s]=e.split("."),o=i.indexOf("-")===-1?void 0:v.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,s?`${t}${s}`:t,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static \u0275fac=function(t){return new(t||n)(u(g),u(M),u(D))};static \u0275dir=f({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})(),Ke=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static \u0275fac=function(t){return new(t||n)(u(p))};static \u0275dir=f({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[b]})}return n})();var K="browser",X="server";function Xe(n){return n===K}function qe(n){return n===X}var N=class{};export{F as a,je as b,L as c,$ as d,A as e,H as f,Ge as g,He as h,Ye as i,Ze as j,We as k,Ke as l,K as m,Xe as n,qe as o,N as p};
