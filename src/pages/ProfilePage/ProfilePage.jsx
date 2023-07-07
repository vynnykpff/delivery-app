import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.js";
import {useDispatch} from "react-redux";
import {removeUser} from "../../redux/user/userSlice.js";
import {RemoveUser} from "../../shared/components/RemoveUser.jsx";

const ProfilePage = () => {
	const dispatch = useDispatch();
	const {isAuth, email} = useAuth();

	return isAuth ? (
		<div>
			<h1>Welcome</h1>
			<button onClick={() => dispatch(removeUser())}>Log Out from {email}</button>
			<RemoveUser/>
		</div>
	) : (
		<Navigate to="/login"/>
	);
};

export default ProfilePage;