import {useEffect, useState} from "react";
import NumberFormat from "../../../utils/number-format.js";
import HistoryCard from "./history-card/HistoryCard.jsx";
import {ClearButton, HistoryBlock, HistoryCardWrapper, OrderDate, OrderPrice} from "./History.styled.jsx";
import HistoryOrder from "./history-order/HistoryOrder.jsx";
import {BiInfoCircle} from "react-icons/bi";
import {GrFormClose} from "react-icons/gr";
import ModalWindow from "../../ui/modal-window/ModalWindow.jsx";
import {CloseButton} from "../../ui/modal-window/ModalWindow.styled.jsx";
import EmptyCart from "../cart/products/empty-cart/EmptyCart.jsx";

const History = () => {
	const [products, setProducts] = useState([]);
	const [modalActive, setModalActive] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);

	useEffect(() => {
		setProducts(JSON.parse(window.localStorage.getItem("HistoryProducts")));
	}, []);

	const handleInfoClick = (order) => {
		setSelectedOrder(order);
		setModalActive(true);
	};

	const handleResetHistory = () => {
		window.localStorage.removeItem("HistoryProducts");
		window.location.reload();
	}

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
								{p.map((item) => item.id && <HistoryCard key={item.id} {...item} />)}
							</HistoryCardWrapper>
							<OrderPrice>
								Total price:{" "}
								<span style={{fontWeight: 700}}>
              {p.map((item) => item.totalPrice !== undefined ? NumberFormat("ru-RU", {
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
									{selectedOrder && <HistoryOrder data={selectedOrder}/>}
								</>
							</ModalWindow>
						</HistoryBlock>
						<ClearButton onClick={handleResetHistory}>Clear history</ClearButton>
					</>
				))
				: <EmptyCart/>
			}
		</div>
	);
};

export default History;
