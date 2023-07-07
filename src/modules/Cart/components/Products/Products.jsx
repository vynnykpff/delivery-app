import {ProductsWrapper} from "./Products.styled.jsx";
import {useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {memo, useEffect, useState} from "react";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import NoData from "../../../../shared/components/NoData/NoData.jsx";
import {BsCartX} from "react-icons/bs";

const Products = memo(function Products() {
	const {arrayProducts} = useSelector(state => state.products);
	const [cardProducts, setCardProducts] = useState(null);

	// useEffect(() => {
	// 	if (arrayProducts?.length) {
	// 		window.localStorage.setItem('CartProducts', JSON.stringify(arrayProducts));
	// 	}
	// 	setCardProducts(JSON.parse(window.localStorage.getItem('CartProducts')));
	// }, [arrayProducts])

	return (
		<ProductsWrapper>
			{
				arrayProducts.length
					? arrayProducts.map(product => <ProductCard key={uuidv4()} {...product} />)
					: <NoData icon={<BsCartX/>}/>
			}
		</ProductsWrapper>
	);
});

export default Products;