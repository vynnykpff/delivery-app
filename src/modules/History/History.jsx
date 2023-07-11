import {useEffect, useState} from "react";
import SetNumberFormat from "../../shared/utils/setNumberFormat.js";
import Card from "./components/Card/Card.jsx";
import {HistoryBlock, HistoryCardWrapper, OrderDate, OrderPrice} from "./History.styled.jsx";
import Order from "./components/Order/Order.jsx";
import {BiInfoCircle} from "react-icons/bi";
import {GrFormClose} from "react-icons/gr";
import ModalWindow from "../../shared/components/ModalWindow/ModalWindow.jsx";
import {CloseButton} from "../../shared/components/ModalWindow/ModalWindow.styled.jsx";
import NoData from "../../shared/components/NoData/NoData.jsx";
import {BsCartX} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {getCookie} from "../../shared/utils/cookies/getCookie.js";

const History = ({collectionOrders}) => {
	const [modalActive, setModalActive] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);

	const isAuthValue = getCookie('isAuth');
	const navigate = useNavigate();

	const handleInfoClick = (order) => {
		console.log(order);
		setSelectedOrder(order);
		setModalActive(true);
	};

	// console.log(collectionOrders);

	// console.log(collectionOrders);

	return (
		<>
			{
				isAuthValue ?
					// <div>
					// 	{/*{collectionOrders && collectionOrders.map(collectionOrder => console.log(collectionOrder.order))}*/}
					// </div>


					<div style={{marginTop: 40}}>
						{collectionOrders && collectionOrders.map(collectionOrder => (
							<HistoryBlock key={collectionOrder.id}>

								<OrderDate>
									<span style={{fontWeight: 700}}>
										{`${collectionOrder.data.date + " /"} ${collectionOrder.data.time}`}
									</span>
								</OrderDate>

								<BiInfoCircle
									style={{
										fontSize: 28,
										position: "absolute",
										top: 20,
										right: 20,
										cursor: "pointer",
									}}
									onClick={() => handleInfoClick(collectionOrder.data)}
								/>

								<HistoryCardWrapper>
									{collectionOrder.order.map(order => <Card key={order.id} {...order} />)}
								</HistoryCardWrapper>

								<OrderPrice>
									Total price:{" "}
									<span style={{fontWeight: 700}}>
										{SetNumberFormat("ru-RU", {style: "currency", currency: "UAH"}, collectionOrder.data.totalPrice)}
									</span>
								</OrderPrice>
								<ModalWindow active={modalActive} setActive={setModalActive}>
									<>
										<CloseButton onClick={() => setModalActive(false)}>
											<GrFormClose/>
										</CloseButton>
										{selectedOrder && <Order data={selectedOrder}/>}
									</>
								</ModalWindow>
							</HistoryBlock>
						))}
					</div>

					// <div style={{marginTop: 40}}>
					// 	{orders ?
					// 		orders.map((p) => (
					// 			<>
					// 				<HistoryBlock key={p.id}>
					// 					<OrderDate>
					// 						Order with:{" "}
					// 						<span style={{fontWeight: 700}}>
					//     {p.map(item => `${item.date !== undefined ? item.date + " /" : ""}  ${item.time !== undefined ? item.time : ""}`)}
					//   </span>
					// 					</OrderDate>
					// 					<BiInfoCircle
					// 						style={{
					// 							fontSize: 28,
					// 							position: "absolute",
					// 							top: 20,
					// 							right: 20,
					// 							cursor: "pointer",
					// 						}}
					// 						onClick={() => handleInfoClick(p)}
					// 					/>
					// 					<HistoryCardWrapper>
					// 						{p.map((item) => item.id && <Card key={item.id} {...item} />)}
					// 					</HistoryCardWrapper>
					// 					<OrderPrice>
					// 						Total price:{" "}
					// 						<span style={{fontWeight: 700}}>
					//     {p.map((item) => item.totalPrice !== undefined ? SetNumberFormat("ru-RU", {style: "currency",currency: "UAH"}, item.totalPrice) : null)}
					//   </span>
					// 					</OrderPrice>
					// 					<ModalWindow active={modalActive} setActive={setModalActive}>
					// 						<>
					// 							<CloseButton onClick={() => setModalActive(false)}>
					// 								<GrFormClose/>
					// 							</CloseButton>
					// 							{selectedOrder && <Order data={selectedOrder}/>}
					// 						</>
					// 					</ModalWindow>
					// 				</HistoryBlock>
					// 			</>
					// 		))
					// 		: <NoData icon={<BsCartX/>}/>
					// 	}
					// </div>
					: navigate('/login')
			}
		</>

	);
};

export default History;
