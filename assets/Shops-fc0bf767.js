import{n,m as v,L as P,a as f,G as B,s as T,l as z,j as o,u as l,b as g,r as u,t as m,c as I,d as $,e as C,f as b,g as E,h as j,v as L,i as F}from"./index-3260ee99.js";import{B as V}from"./index.esm-05ad8a6b.js";import{S as O}from"./setNumberFormat-0bd9990e.js";import{a as W,S as G}from"./ShopsList-4f2872f1.js";const H=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,N=n.div`
  display: flex;
  flex-wrap: wrap;
	width: calc(100% + 30px);
	margin: -15px;
	margin-top: 25px;
  justify-content: center;
`,R=n.select`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: var(--accent-color);
`,U=n.option`
  padding: 3px 10px;
  font-weight: 600;
  color: #000;
`,q=n.div`
  width: calc(100% / 4 - 30px);
  margin: 15px;
  background-color: #444;
  border-radius: 30px;
  position: relative;
  box-shadow: ${v};
`,A=n.img`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 0;
  object-fit: contain;
`,D=n(P)`
  font-size: 25px;
  background-color: #ccc;
  border-radius: 50%;
  padding: 7px;
  position: absolute;
  display: flex;
  align-items: center;
  right: -5px;
  bottom: -5px;
  box-shadow: ${v};
  transition: ${f};
  text-decoration: none;
  color: #000;

  &.addProductToCart {
    background-color: #bbe903;

    &:hover {
      background-color: var(--accent-color);
      color: #000;
    }
  }

  &:hover {
    color: #fff;
    background-color: #000;
    transition: ${f};
  }

`;function J(r){return B({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 17h-11v-14h-2"}},{tag:"path",attr:{d:"M6 5l6 .429m7.138 6.573l-.143 1h-13"}},{tag:"path",attr:{d:"M15 6h6m-3 -3v6"}}]})(r)}const K=n.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 20px;
`,Q=n.h4`
  font-size: ${T};
  letter-spacing: 1.5px;
	margin: 0 0 10px 0;
`,X=n.p`
  font-size: ${z};
  margin: 0;
`,Y=({price:r,name:e})=>o.jsxs(K,{children:[o.jsx(Q,{children:e}),o.jsx(X,{children:O("ru-RU",{style:"currency",currency:"UAH"},r)})]}),Z=({image:r,name:e,price:i,id:s,shops:d})=>{const{arrayProducts:p}=l(a=>a.products),{arrayMenu:x}=l(a=>a.menu),{selectValue:h}=l(a=>a.select),c=l(a=>a.statusCard.statusCards),t=g();u.useEffect(()=>{var a;!p.length&&((a=c[s])==null?void 0:a.status)===!0&&t(m({cardId:s,status:!1}))},[p]);const S=a=>{const w=x[0][d][h].filter(M=>M.id===a)[0];t(I({...w,count:1}))},k=a=>{c[a]&&c[a].status?(t($(a)),t(C()),t(m({cardId:a,status:!1}))):(t(C("plus")),t(m({cardId:a,status:!0})))},y=()=>{S(s),k(s)};return o.jsxs(q,{children:[o.jsx(A,{src:r}),o.jsx(Y,{name:e,price:i}),o.jsx(D,{className:c[s]&&c[s].status?"addProductToCart":"removeProductFromCart",onClick:y,children:c[s]&&c[s].status?o.jsx(V,{}):o.jsx(J,{})})]})},_=({shops:r})=>{const{arrayMenu:e,status:i}=l(t=>t.menu),{selectValue:s}=l(t=>t.select),d=g(),p=b();u.useEffect(()=>{d(E()),s||d(j(W(p)))},[d]);const x=t=>{d(j(t.target.value))},h=u.useMemo(()=>t=>e&&e[0]&&e[0][t]?Object.keys(e[0][t]):[],[e]),c=()=>i&&e&&e[0]&&e[0][r]&&e[0][r][s]?e[0][r][s]:[];return o.jsxs(H,{children:[o.jsx(G,{}),i&&e&&e[0]&&e[0][r]&&o.jsx(R,{value:s,onChange:x,children:h(r).map(t=>o.jsx(U,{value:t,children:t},L()))}),o.jsx(N,{children:s!==""&&i&&e&&e[0]&&e[0][r]&&e[0][r][s]&&c().map(t=>o.jsx(Z,{image:t.image,name:t.name,price:t.price,id:t.id,shops:r},t.id))})]})},tt=n.div`
  margin: 40px 0;
  color: var(--text-color);
`,ot=()=>{const r=b(),e=g(),[i,s]=u.useState(null);return u.useEffect(()=>{s(Object.values(r)[0]),e(F(i))},[r.name]),o.jsx(tt,{children:o.jsx(_,{shops:i})})};export{ot as default};
