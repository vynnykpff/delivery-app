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

const History = ({products}) => {
	const [modalActive, setModalActive] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);


	const handleInfoClick = (order) => {
		setSelectedOrder(order);
		setModalActive(true);
	};

	return (
		<div style={{marginTop: 40}}>
			{products ?
				products.map((p) => (
					<>
						<HistoryBlock key={p.id}>
							<OrderDate>
								Order with:{" "}
								<span style={{fontWeight: 700}}>
              {p.map(item => `${item.date !== undefined ? item.date + " /" : ""}  ${item.time !== undefined ? item.time : ""}`)}
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
								onClick={() => handleInfoClick(p)}
							/>
							<HistoryCardWrapper>
								{p.map((item) => item.id && <Card key={item.id} {...item} />)}
							</HistoryCardWrapper>
							<OrderPrice>
								Total price:{" "}
								<span style={{fontWeight: 700}}>
              {p.map((item) => item.totalPrice !== undefined ? SetNumberFormat("ru-RU", {
		              style: "currency",
		              currency: "UAH"
	              }, item.totalPrice) : null
              )}
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
					</>
				))
				: <NoData icon={<BsCartX/>}/>
			}
		</div>
	);
};

export default History;
