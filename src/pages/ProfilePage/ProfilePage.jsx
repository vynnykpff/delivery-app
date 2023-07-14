import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.js";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../redux/user/userSlice.js";
import {RemoveUser} from "../../shared/components/RemoveUser.jsx";
import {useEffect} from "react";
import {coupons, history, home, login} from "../../shared/constants/routes.js";
import History from "../../modules/History/History.jsx";
import Coupons from "../../modules/Coupons/Coupons.jsx";
import {NavItem, NavItemAnchor, NavItemTheme, NavList} from "../../modules/Header/components/NavBar/NavBar.styled.jsx";
import {v4 as uuidv4} from "uuid";
import {setCookie} from "../../shared/utils/cookies/setCookie.js";
import {getCookie} from "../../shared/utils/cookies/getCookie.js";
import {deleteCookie} from "../../shared/utils/cookies/deleteCookie.js";
import {IoLanguage} from "react-icons/io5";
import {BiMoon, BiSun} from "react-icons/bi";
import {set} from "../../redux/theme/theme.slice.js";

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
	const theme = useSelector(state => state.theme);
	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'))
	};

	return isAuth || isAuthValue ? (
		<div>
			<h1>Welcome</h1>
			<button onClick={exitClass}>Log Out from {email}</button>

			<RemoveUser/>

			<NavList>
				{data.map(item =>
					<NavItem key={uuidv4()} to={item.route}><NavItemAnchor>{item.name}</NavItemAnchor></NavItem>)}
			</NavList>


			<NavItemTheme onClick={() => handleChange()}>
				{theme === 'light' ? <BiMoon style={{color: "var(--text-color)"}}/> :
					<BiSun style={{color: "var(--text-color)"}}/>}
			</NavItemTheme>

		</div>
	) : (
		<Navigate to={login}/>
	);
};

export default ProfilePage;