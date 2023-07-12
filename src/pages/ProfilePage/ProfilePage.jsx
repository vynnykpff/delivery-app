import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.js";
import {useDispatch} from "react-redux";
import {removeUser} from "../../redux/user/userSlice.js";
import {RemoveUser} from "../../shared/components/RemoveUser.jsx";
import {useEffect} from "react";
import {coupons, history, home, login} from "../../shared/constants/routes.js";
import History from "../../modules/History/History.jsx";
import Coupons from "../../modules/Coupons/Coupons.jsx";
import {NavItem, NavItemAnchor, NavList} from "../../modules/Header/components/NavBar/NavBar.styled.jsx";
import {v4 as uuidv4} from "uuid";
import {setCookie} from "../../shared/utils/cookies/setCookie.js";
import {getCookie} from "../../shared/utils/cookies/getCookie.js";
import {deleteCookie} from "../../shared/utils/cookies/deleteCookie.js";

const ProfilePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {isAuth, email} = useAuth();

	useEffect(() => {
		if (isAuth) {
			setCookie("isAuth", isAuth, 1);
		}
	}, [isAuth]);

	const exitClass = () => {
		dispatch(removeUser());
		deleteCookie('isAuth');
		deleteCookie('userId');
		navigate(login);
	};

	const data = [
		{route: history, name: 'History'},
		{route: coupons, name: 'Coupons'},
	];

	const isAuthValue = getCookie('isAuth');

	return isAuth || isAuthValue ? (
		<div>
			<h1>Welcome</h1>
			<button onClick={exitClass}>Log Out from {email}</button>

			<RemoveUser/>

			<NavList>
				{data.map(item =>
					<NavItem key={uuidv4()} to={item.route}><NavItemAnchor>{item.name}</NavItemAnchor></NavItem>)}
			</NavList>
		</div>
	) : (
		<Navigate to="/login"/>
	);
};

export default ProfilePage;