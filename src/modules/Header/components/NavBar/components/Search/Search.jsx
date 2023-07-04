import {CartIcon, CountBuys, SearchBlock, SearchField, SearchIcon, SearchWrapper} from "./Search.styled.jsx";
import {shoppingCart} from "../../../../../../shared/constants/routes.js";
import {NavItem} from "../../NavBar.styled.jsx";
import {useSelector} from "react-redux";
import {Divider} from "../../../../../../shared/styles/GlobalStyles.jsx";

const Search = () => {
	const {count} = useSelector(state => state.count);

	return (
		<SearchBlock>
			<SearchIcon/>
			<SearchField placeholder="Search"/>
			<SearchWrapper>
				<Divider/>
				<NavItem className="shoppingCart" to={shoppingCart}>
					<CountBuys>{count}</CountBuys>
						<CartIcon/>
				</NavItem>
			</SearchWrapper>
		</SearchBlock>
	);
};

export default Search;