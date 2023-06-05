import{n,b,L as M,d as f,G as S,u as l,a as v,j as e,c as B,e as j,s as L,f as C,g as P,h as z}from"./index-5b1c1f87.js";import{N as T,v as $}from"./v4-2b919df4.js";import{S as E}from"./Common.Styled-4383e656.js";const V=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,G=n.div`
  display: flex;
  flex-wrap: wrap;
	width: calc(100% + 30px);
	margin: -15px;
	margin-top: 25px;
  justify-content: center;
`,H=n.select`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: var(--accent-color);
`,I=n.option`
  padding: 3px 10px;
  font-weight: 600;
  color: #000;
`,N=n.div`
	width: calc(100% / 4 - 30px);
	margin: 15px;
	background-color: #444;
	border-radius: 30px;
	position: relative;
	box-shadow: ${b};
`,O=n.div`
	text-align: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
`,R=n.img`
	width: 100%;
	border-top-left-radius: 30px;	
	border-top-right-radius: 30px;
	margin: 0;
	object-fit: contain;
`,U=n.p`
	font-size: 22px;
	letter-spacing: 1.5px;
	margin: 0;
	margin-bottom: 10px;
`,W=n.p`
	font-size: 18px;
	margin: 0;
`,q=n(M)`
	font-size: 25px;
	background-color: #ccc;
	border-radius: 50%;
	padding: 7px;
	position: absolute;
  display: flex;
	align-items: center;
	right: -5px;
	bottom: -5px;
	box-shadow: ${b};
  transition: ${f};
	text-decoration: none;
	color: #000;
	
	
	&:hover {
		color: #fff;
		background-color: #000 ;
		transition: ${f};
	}
	
`;function A(r){return S({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 17h-11v-14h-2"}},{tag:"path",attr:{d:"M6 5l6 .429m7.138 6.573l-.143 1h-13"}},{tag:"path",attr:{d:"M15 6h6m-3 -3v6"}}]})(r)}const D=({image:r,name:s,price:i,id:c,shops:d})=>{const{arrayMenu:u,status:h}=l(o=>o.menu),{arrayProducts:a}=l(o=>o.products),{selectValue:t}=l(o=>o.select),p=v(),y=o=>{var g,m;const x=u[0][d][t].filter(w=>w.id===o)[0];((g=a[0])==null?void 0:g.count)===void 0?p(j({...x,count:1})):a[0]&&(((m=a[0])==null?void 0:m.name)===x.name?p(L({id:o,count:a[0].count+1})):p(j({...x,count:1})))},k=()=>{p(B("plus")),y(c)};return e.jsxs(N,{children:[e.jsx(R,{src:r}),e.jsxs(O,{children:[e.jsx(U,{children:s}),e.jsx(W,{children:T("ru-RU",{style:"currency",currency:"UAH"},i)})]}),e.jsx(q,{onClick:k,children:e.jsx(A,{})})]})},Q=({shops:r})=>{const{arrayMenu:s,status:i}=l(t=>t.menu),{selectValue:c}=l(t=>t.select),d=v();C.useEffect(()=>{d(P())},[d]);const u=t=>{d(z(t.target.value))},h=C.useMemo(()=>t=>Object.keys(s[0][t]),[s[0]]),a=()=>{if(i)return s[0][r][c]};return e.jsxs(V,{children:[e.jsx(E,{}),i&&e.jsx(H,{value:c,onChange:u,children:h(r).map(t=>e.jsx(I,{value:t,children:t},$()))}),e.jsx(G,{children:c!==""&&i&&a().map(t=>e.jsx(D,{image:t.image,name:t.name,price:t.price,id:t.id,shops:r},t.id))})]})};export{Q as M};
