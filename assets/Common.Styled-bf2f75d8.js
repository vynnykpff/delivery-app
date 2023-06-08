import{n as a,o,N as i,u as p,q as d,r as l,F as x,j as t,H as r}from"./index-9849bc89.js";a.div`
	text-align: center;
`;const h=a.div`
  display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 50px;
  background: var(--shops-color);
	border-radius: 20px;
	padding: 20px 40px;
	box-shadow: ${o};
	border: 2px solid var(--link-color);
`,u=a.img`
	width: 60px;
	border-radius: 50%;
	box-shadow: ${o};
`,b=a(i)`
`,k=()=>{const{arrayShops:n,status:g}=p(s=>s.shops),e=d();l.useEffect(()=>{e(x())},[e]);const c=s=>{switch(s.name){case"mcdonalds":e(r("burgers"));break;case"burgerKing":e(r("burgers"));break;case"kfc":e(r("wraps"));break;case"subway":e(r("sandwiches"));break;case"starbucks":e(r("drinks"));break}};return t.jsx(h,{children:n.map(s=>t.jsx(b,{to:`/shop/${s.name}`,onClick:()=>c(s),children:t.jsx(u,{src:s.image})},s.id))})},f=a.h3`
	text-transform: uppercase;
	font-size: 35px;
	color: var(--text-color);
	letter-spacing: 3px;
	font-weight: 700;
	padding: 0;
	margin: 0 0 30px 0;
`,S=a.div`
	margin: 40px 0;
	color: #fff;
`;export{k as S,f as T,S as W};
