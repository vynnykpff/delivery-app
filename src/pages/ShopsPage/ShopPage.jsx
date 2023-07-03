import ShopsList from "../../modules/Shops/components/ShopsList/ShopsList.jsx";
import {Title} from "../../shared/styles/GlobalStyles.jsx";
import styles from './ShopPage.module.css';
const ShopPage = () => {

	return (
		<div className={styles.wrapper}>
			<Title>Select Shop</Title>
			<div className={styles.shopsListContainer}>
				<ShopsList/>
			</div>
		</div>
	);
};

export default ShopPage;
