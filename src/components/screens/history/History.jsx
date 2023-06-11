import {useEffect, useState} from "react";
import NumberFormat from "../../../utils/number-format.js";
import CartItem from "../cart/products/cart-item/CartItem.jsx";
import HistoryCard from "./history-card/HistoryCard.jsx";

const History = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(JSON.parse(window.localStorage.getItem('Products')));
	}, []);

	return (
		<>
			{products.map(p => (
				<div key={p.id} style={{
					color: '#fff',
					border: '2px solid #f00',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<div>Order
						with: {p.map(item => (`${item.date !== undefined ? item.date + ' /' : ''}  ${item.time !== undefined ? item.time : ''}`))}</div>
					<div>
						{p.map(item => item.id && <HistoryCard key={item.id} {...item}/>)}
					</div>
					<div>Info about order</div>
					<ul>
						<li>name: {p.map(item => item.userName)}</li>
						<li>email: {p.map(item => item.userEmail)}</li>
						<li>phone: {p.map(item => item.userPhone)}</li>
						<li>address: {p.map(item => item.userAddress)}</li>
					</ul>
					<div>
						<p>Total
							price: {p.map(item => item.totalPrice !== undefined && NumberFormat('ru-RU', {style: 'currency', currency: 'UAH'}, item.totalPrice))}</p>
					</div>
				</div>
			))
			}


			{/*<div style={{color: '#fff'}}>*/}
			{/*	<div>Замовлення</div>*/}
			{/*	<div>*/}
			{/*		{products.map(product => <img key={product.id} src={product.image} alt=""/>)}*/}
			{/*	</div>*/}
			{/*	<div>Info about order</div>*/}
			{/*	<ul>*/}
			{/*		<li>name: {data.userName}</li>*/}
			{/*		<li>email: {data.userEmail}</li>*/}
			{/*		<li>phone: {data.userPhone}</li>*/}
			{/*		<li>address: {data.userAddress}</li>*/}
			{/*	</ul>*/}
			{/*	<div>*/}
			{/*		<p>Total price: {totalSum}</p>*/}
			{/*	</div>*/}
			{/*</div>*/}

			{/*{products.length > 0 ?*/}
			{/*	products.map(product => (*/}
			{/*		<div style={{color: "#fff"}} key={product.id}>*/}
			{/*			<div>*/}
			{/*				<img src={product.image} alt=""/>*/}
			{/*				<p>{product.price}</p>*/}
			{/*				<p>{product.count}</p>*/}
			{/*			</div>*/}
			{/*			<div>Info about order</div>*/}
			{/*			<ul key={product.id}>*/}
			{/*				<li>name: {data.userName}</li>*/}
			{/*				<li>email: {data.userEmail}</li>*/}
			{/*				<li>phone: {data.userPhone}</li>*/}
			{/*				<li>address: {data.userAddress}</li>*/}
			{/*			</ul>*/}
			{/*			<div>*/}
			{/*				<p>Total price:</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	))*/}
			{/*	: <EmptyCart/>*/}
			{/*}*/}
		</>
	);
};

export default History;
	