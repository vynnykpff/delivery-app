import History from "../../modules/History/History.jsx";
import {ClearButton} from "../../modules/History/History.styled.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {login, profile} from "../../shared/constants/routes.js";
import {deleteCollection} from "../../shared/utils/deleteCollection.js";
import {getCollection} from "../../shared/utils/firebase/getCollection.js";
import NoData from "../../shared/components/NoData/NoData.jsx";
import {FaHistory} from "react-icons/fa";

const HistoryPage = () => {
	const [collectionOrders, setCollectionOrders] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getHistory = async () => {
			const data = await getCollection("orders");
			if (data) {
				setCollectionOrders(data);
			} else {
				navigate(login);
			}
		}

		getHistory();

	}, [navigate]);

	const handleResetHistory = async () => {
		await deleteCollection(["orders"]);
		navigate(profile);
	};

	return (
		<>
			{collectionOrders.length ?
				<>
					<ClearButton onClick={handleResetHistory}>Clear history</ClearButton>
					<History collectionOrders={collectionOrders}/>
				</>
				:
				<NoData icon={<FaHistory/>}/>}
		</>
	);
};

export default HistoryPage;
