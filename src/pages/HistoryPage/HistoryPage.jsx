import History from "../../modules/History/History.jsx";
import {ClearButton} from "../../modules/History/History.styled.jsx";
import {useEffect, useState} from "react";

const HistoryPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(JSON.parse(window.localStorage.getItem("HistoryProducts")));
	}, []);

	const handleResetHistory = () => {
		window.localStorage.removeItem("HistoryProducts");
		window.location.reload();
	}

	return (
		<>
			<History products={products}/>
			{products &&
				<ClearButton onClick={handleResetHistory}>Clear history</ClearButton>
			}
		</>
	);
};

export default HistoryPage;