import {OrderInfo, OrderInfoItem, OrderInfoList} from "./HistoryOrder.styled.jsx";

const HistoryOrder = ({data}) => {
	return (
		<>
			<OrderInfo>Info about order</OrderInfo>
			<OrderInfoList>
				<OrderInfoItem>name: {data.map(item => item.userName)}</OrderInfoItem>
				<OrderInfoItem>email: {data.map(item => item.userEmail)}</OrderInfoItem>
				<OrderInfoItem>phone: {data.map(item => item.userPhone)}</OrderInfoItem>
				<OrderInfoItem>address: {data.map(item => item.userAddress)}</OrderInfoItem>
			</OrderInfoList>
		</>
	);
};

export default HistoryOrder;