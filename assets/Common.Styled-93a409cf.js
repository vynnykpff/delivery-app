import{n as e,b as o,N as i,u as p,a as d,f as l,i as x,j as t,k as r}from"./index-6ef845c6.js";e.div`
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
`,u=e.img`
	width: 60px;
	border-radius: 50%;
	box-shadow: ${o};
`,b=e(i)`
`,k=()=>{const{arrayShops:n,status:g}=p(s=>s.shops),a=d();l.useEffect(()=>{a(x())},[a]);const c=s=>{switch(s.name){case"mcdonalds":a(r("burgers"));break;case"burgerKing":a(r("burgers"));break;case"kfc":a(r("wraps"));break;case"subway":a(r("sandwiches"));break;case"starbucks":a(r("drinks"));break}};return t.jsx(h,{children:n.map(s=>t.jsx(b,{to:`/shop/${s.name}`,onClick:()=>c(s),children:t.jsx(u,{src:s.image})},s.id))})},f=e.h3`
	text-transform: uppercase;
	font-size: 35px;
	color: var(--text-color);
	letter-spacing: 3px;
	font-weight: 700;
	padding: 0;
	margin: 0 0 30px 0;
`,S=e.div`
	margin: 40px 0;
	color: #fff;
`;export{k as S,f as T,S as W};
