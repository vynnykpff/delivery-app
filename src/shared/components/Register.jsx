import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../redux/user/userSlice.js";
import {profile} from "../constants/routes.js";
import {setCookie} from "../utils/cookies/setCookie.js";
import {setEncryptedData} from "../utils/encrypted/setEncryptedData.js";
import {getDecryptedData} from "../utils/encrypted/getDecryptedData.js";
import {getCookie} from "../utils/cookies/getCookie.js";
import {deleteCookie} from "../utils/cookies/deleteCookie.js";

export const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleRegister = (email, password) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}));
				navigate(profile);

				const cookieUserId = getDecryptedData(getCookie("userId") || null);

				if (cookieUserId) {
					deleteCookie("userId");
				}

				const userId = auth.currentUser.uid;
				setCookie("userId", setEncryptedData(userId), 1);
			})
			.catch(console.error);
	}


	return (
		<Form
			title="register"
			handleClick={handleRegister}
		/>
	);
};
