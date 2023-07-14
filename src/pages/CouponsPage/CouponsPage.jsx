import Coupons from "../../modules/Coupons/Coupons.jsx";
import {useEffect, useState} from "react";
import {getCollection} from "../../shared/utils/firebase/getCollection.js";
import {login} from "../../shared/constants/routes.js";
import {useNavigate} from "react-router-dom";

const CouponsPage = () => {
	const [collectionCoupons, setCollectionCoupons] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getCoupons = async () => {
			const data = await getCollection("coupons");
			if (data) {
				setCollectionCoupons(data);
			} else {
				navigate(login);
			}
		}

		getCoupons();
	}, [navigate]);


	return (
		<div>
			<Coupons collectionCoupons={collectionCoupons}/>
		</div>
	);
};

export default CouponsPage;