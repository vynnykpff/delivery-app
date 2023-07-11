import {getAuth, deleteUser} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {deleteCookie} from "../utils/cookies/deleteCookie.js";
import {getCookie} from "../utils/cookies/getCookie.js";
import {setCookie} from "../utils/cookies/setCookie.js";
import {setEncryptedData} from "../utils/encrypted/setEncryptedData.js";
import {home, login} from "../constants/routes.js";
import {removeUser} from "../../redux/user/userSlice.js";
import {useDispatch} from "react-redux";

export const RemoveUser = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRemove = () => {
		const auth = getAuth();
		const user = auth.currentUser;

		deleteUser(user)
			.then(() => {
				const isAuthCookie = getCookie("isAuth");
				if (isAuthCookie) {
					deleteCookie("isAuth");
				}

				deleteCookie("userId");
				dispatch(removeUser());
				navigate(login);
			})
			.catch((error) => {
				console.log("Error deleting user:", error);
			});
	}

	return (
		<div>
			<button onClick={handleRemove}>Remove account</button>
		</div>
	);
};
