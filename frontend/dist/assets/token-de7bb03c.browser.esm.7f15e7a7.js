var W=Object.defineProperty;var w=(o,e,t)=>e in o?W(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>(w(o,typeof e!="symbol"?e+"":e,t),t);import{v as l,B as g,Z as C,N as y,f as T,A as b,i as E,aP as v,k as A,l as R,n as S,p as B,q as O,G as F,r as V,s as P,aQ as x,O as d,u as M,x as i,T as f}from"./index.fcc556b6.js";import{S as N}from"./erc-20-standard-2c9573c4.browser.esm.6b4e569e.js";class D{constructor(e,t){this.contractWrapper=e,this.events=t}async getAllHolderBalances(){const t=(await this.events.getEvents("Transfer")).map(r=>r.data),a={};return t.forEach(r=>{const c=r==null?void 0:r.from,n=r==null?void 0:r.to,p=r==null?void 0:r.value;c!==l&&(c in a||(a[c]=g.from(0)),a[c]=a[c].sub(p)),n!==l&&(n in a||(a[n]=g.from(0)),a[n]=a[n].add(p))}),Promise.all(Object.keys(a).map(async r=>({holder:r,balance:await C(this.contractWrapper.getProvider(),this.contractWrapper.readContract.address,a[r])})))}}const u=class extends N{constructor(t,a,r){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new T(t,a,n,c,r);super(m,r,p);s(this,"mint",i(async t=>this.erc20.mint.prepare(t)));s(this,"mintTo",i(async(t,a)=>this.erc20.mintTo.prepare(t,a)));s(this,"mintBatchTo",i(async t=>this.erc20.mintBatchTo.prepare(t)));s(this,"delegateTo",i(async t=>f.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await d(t)]})));s(this,"burn",i(t=>this.erc20.burn.prepare(t)));s(this,"burnFrom",i(async(t,a)=>this.erc20.burnFrom.prepare(t,a)));this.abi=b.parse(n||[]),this.metadata=new E(this.contractWrapper,v,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new R(this.contractWrapper,u.contractRoles),this.sales=new S(this.contractWrapper),this.events=new B(this.contractWrapper),this.history=new D(this.contractWrapper,this.events),this.encoder=new O(this.contractWrapper),this.estimator=new F(this.contractWrapper),this.platformFees=new V(this.contractWrapper),this.interceptor=new P(this.contractWrapper),this.signature=new x(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await d(t))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(M("transfer"),l)}async getMintTransaction(t,a){return this.erc20.getMintTransaction(t,a)}async prepare(t,a,r){return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}};let h=u;s(h,"contractRoles",y);export{h as Token};