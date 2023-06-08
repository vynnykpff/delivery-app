import{n as o,o as C,L as w,p as h,G as b,u as i,q as v,j as e,B as S,z,A as g,C as m,r as f,D as B,E as L}from"./index-9849bc89.js";import{N as P,v as T}from"./v4-2b919df4.js";import{S as A}from"./Common.Styled-bf2f75d8.js";const E=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,H=o.div`
  display: flex;
  flex-wrap: wrap;
	width: calc(100% + 30px);
	margin: -15px;
	margin-top: 25px;
  justify-content: center;
`,I=o.select`
  width: 300px;
  height: 50px;
  padding: 10px;
  margin-top: 30px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: var(--accent-color);
`,$=o.option`
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
`,q=o.img`
	width: 100%;
	border-top-left-radius: 30px;	
	border-top-right-radius: 30px;
	margin: 0;
	object-fit: contain;
`,D=o.p`
	font-size: 22px;
	letter-spacing: 1.5px;
	margin: 0;
	margin-bottom: 10px;
`,F=o.p`
	font-size: 18px;
	margin: 0;
`,G=o(w)`
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
  transition: ${h};
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
		transition: ${h};
	}
	
`;function O(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M17 17h-11v-14h-2"}},{tag:"path",attr:{d:"M6 5l6 .429m7.138 6.573l-.143 1h-13"}},{tag:"path",attr:{d:"M15 6h6m-3 -3v6"}}]})(n)}function R(n){return b({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"}},{tag:"path",attr:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}}]})(n)}const U=({image:n,name:l,price:d,id:r,shops:c})=>{const{arrayMenu:u}=i(a=>a.menu);i(a=>a.products);const{selectValue:p}=i(a=>a.select),s=i(a=>a.statusCard.statusCards),t=v();u[0][c][p].filter(a=>a.id===r)[0];const j=a=>{const x=u[0][c][p].filter(y=>y.id===a)[0];t(S({...x,count:1}))},k=(a,x)=>{s[a]&&s[a].status?(t(z(a)),t(g()),t(m({cardId:a,status:!1}))):(t(g("plus")),t(m({cardId:a,status:!0})))},M=()=>{j(r),k(r)};return e.jsxs(N,{children:[e.jsx(q,{src:n}),e.jsxs(V,{children:[e.jsx(D,{children:l}),e.jsx(F,{children:P("ru-RU",{style:"currency",currency:"UAH"},d)})]}),e.jsx(G,{className:s[r]&&s[r].status?"addProductToCart":"removeProductFromCart",onClick:M,children:s[r]&&s[r].status?e.jsx(R,{}):e.jsx(O,{})})]})},Q=({shops:n})=>{const{arrayMenu:l,status:d}=i(t=>t.menu),{selectValue:r}=i(t=>t.select),c=v();f.useEffect(()=>{c(B())},[c]);const u=t=>{c(L(t.target.value))},p=f.useMemo(()=>t=>Object.keys(l[0][t]),[l[0]]),s=()=>{if(d)return l[0][n][r]};return e.jsxs(E,{children:[e.jsx(A,{}),d&&e.jsx(I,{value:r,onChange:u,children:p(n).map(t=>e.jsx($,{value:t,children:t},T()))}),e.jsx(H,{children:r!==""&&d&&s().map(t=>e.jsx(U,{image:t.image,name:t.name,price:t.price,id:t.id,shops:n},t.id))})]})};export{Q as M};
