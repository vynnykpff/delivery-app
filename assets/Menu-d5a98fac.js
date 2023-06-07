import{n as o,b as C,L as w,d as x,G as b,u as i,a as v,j as e,e as S,r as z,c as g,t as m,f,g as B,h as L}from"./index-6ef845c6.js";import{N as P,v as T}from"./v4-2b919df4.js";import{S as A}from"./Common.Styled-93a409cf.js";const H=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,I=o.div`
  display: flex;
  flex-wrap: wrap;
	width: calc(100% + 30px);
	margin: -15px;
	margin-top: 25px;
  justify-content: center;
`,$=o.select`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: var(--accent-color);
`,E=o.option`
  padding: 3px 10px;
  font-weight: 600;
  color: #000;
`,N=o.div`
	width: calc(100% / 4 - 30px);
	margin: 15px;
	background-color: #444;
	border-radius: 30px;
	position: relative;
	box-shadow: ${C};
`,V=o.div`
	text-align: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
`,F=o.img`
	width: 100%;
	border-top-left-radius: 30px;	
	border-top-right-radius: 30px;
	margin: 0;
	object-fit: contain;
`,G=o.p`
	font-size: 22px;
	letter-spacing: 1.5px;
	margin: 0;
	margin-bottom: 10px;
`,O=o.p`
	font-size: 18px;
	margin: 0;
`,R=o(w)`
	font-size: 25px;
	background-color: #ccc;
	border-radius: 50%;
	padding: 7px;
	position: absolute;
  display: flex;
	align-items: center;
	right: -5px;
	bottom: -5px;
	box-shadow: ${C};
  transition: ${x};
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
		background-color: #000 ;
		transition: ${x};
	}
	
`;function U(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 17h-11v-14h-2"}},{tag:"path",attr:{d:"M6 5l6 .429m7.138 6.573l-.143 1h-13"}},{tag:"path",attr:{d:"M15 6h6m-3 -3v6"}}]})(n)}function W(n){return b({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}},{tag:"path",attr:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}}]})(n)}const q=({image:n,name:l,price:d,id:r,shops:c})=>{const{arrayMenu:u}=i(a=>a.menu);i(a=>a.products);const{selectValue:p}=i(a=>a.select),s=i(a=>a.statusCard.statusCards),t=v();u[0][c][p].filter(a=>a.id===r)[0];const j=a=>{const h=u[0][c][p].filter(y=>y.id===a)[0];t(S({...h,count:1}))},k=(a,h)=>{s[a]&&s[a].status?(t(z(a)),t(g()),t(m({cardId:a,status:!1}))):(t(g("plus")),t(m({cardId:a,status:!0})))},M=()=>{j(r),k(r)};return e.jsxs(N,{children:[e.jsx(F,{src:n}),e.jsxs(V,{children:[e.jsx(G,{children:l}),e.jsx(O,{children:P("ru-RU",{style:"currency",currency:"UAH"},d)})]}),e.jsx(R,{className:s[r]&&s[r].status?"addProductToCart":"removeProductFromCart",onClick:M,children:s[r]&&s[r].status?e.jsx(W,{}):e.jsx(U,{})})]})},Q=({shops:n})=>{const{arrayMenu:l,status:d}=i(t=>t.menu),{selectValue:r}=i(t=>t.select),c=v();f.useEffect(()=>{c(B())},[c]);const u=t=>{c(L(t.target.value))},p=f.useMemo(()=>t=>Object.keys(l[0][t]),[l[0]]),s=()=>{if(d)return l[0][n][r]};return e.jsxs(H,{children:[e.jsx(A,{}),d&&e.jsx($,{value:r,onChange:u,children:p(n).map(t=>e.jsx(E,{value:t,children:t},T()))}),e.jsx(I,{children:r!==""&&d&&s().map(t=>e.jsx(q,{image:t.image,name:t.name,price:t.price,id:t.id,shops:n},t.id))})]})};export{Q as M};
