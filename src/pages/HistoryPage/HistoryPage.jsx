import History from "../../modules/History/History.jsx";
import {ClearButton} from "../../modules/History/History.styled.jsx";
import {useEffect, useState} from "react";
import {getData} from "../../shared/utils/firebase/getData.js";
import {auth, database} from "../../shared/utils/firebase/firebase-config.js";
import {getCookie} from "../../shared/utils/cookies/getCookie.js";
import {getDecryptedData} from "../../shared/utils/encrypted/getDecryptedData.js";
import {useNavigate} from "react-router-dom";
import {login} from "../../shared/constants/routes.js";
import {deleteCookie} from "../../shared/utils/cookies/deleteCookie.js";
import {collection, deleteDoc, getDocs} from "firebase/firestore";

const HistoryPage = () => {
	const [collectionOrders, setCollectionOrders] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getHistory = async () => {
			try {
				const cookieUserId = getDecryptedData(getCookie("userId"));
				if (auth.currentUser || cookieUserId) {
					const userId = auth?.currentUser?.uid;
					const data = await getData(database, `orders-${userId ? userId : cookieUserId}`);
					setCollectionOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
				}
			} catch (e) {
				deleteCookie("isAuth");
				navigate(login)
			}
		};

		getHistory();
	}, []);

	const handleResetHistory = async () => {

		// TODO: create a function
		const userId = auth?.currentUser?.uid;
		const collectionRef = collection(database, `orders-${userId}`);
		const snapshots = await getDocs(collectionRef);

		snapshots.forEach(async (doc) => {
			await deleteDoc(doc.ref);
		});
	};

	return (
		<>
			<History collectionOrders={collectionOrders}/>
			{collectionOrders && <ClearButton onClick={handleResetHistory}>Clear history</ClearButton>}
		</>
	);
};

export default HistoryPage;
