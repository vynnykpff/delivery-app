import {OrderInfo, OrderInfoItem, OrderInfoList} from "./Order.styled.jsx";

const Order = ({data}) => {
	return (
		<>
			<OrderInfo>Info about order</OrderInfo>
			<OrderInfoList>
				<OrderInfoItem>name: {data.userName}</OrderInfoItem>
				<OrderInfoItem>email: {data.userEmail}</OrderInfoItem>
				<OrderInfoItem>phone: {data.userPhone}</OrderInfoItem>
				<OrderInfoItem>address: {`${data.userFrom} / ${data.userWhere}`}</OrderInfoItem>
			</OrderInfoList>
		</>
	);
};

export default Order;