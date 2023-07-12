import{n as e,m as o,N as c,u as i,b as d,r as p,k as u,j as t,h as l}from"./index-3260ee99.js";e.div`
	text-align: center;
`;const h=e.div`
  display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 50px;
  background: var(--shops-color);
	border-radius: 20px;
	padding: 20px 40px;
	box-shadow: ${o};
	border: 2px solid var(--link-color);
`,x=e.img`
	width: 60px;
	border-radius: 50%;
	box-shadow: ${o};
`,m=e(c)`
`,S=({name:r})=>{switch(r){case"mcdonalds":return"burgers";case"burgerKing":return"burgers";case"kfc":return"wraps";case"subway":return"sandwiches";case"starbucks":return"drinks"}},g=()=>{const{arrayShops:r}=i(s=>s.shops),a=d();p.useEffect(()=>{a(u())},[a]);const n=s=>{a(l(S(s)))};return t.jsx(h,{children:r.map(s=>t.jsx(m,{to:`/shop/${s.name}`,onClick:()=>n(s),children:t.jsx(x,{src:s.image})},s.id))})};export{g as S,S as a};
