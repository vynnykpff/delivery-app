import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form.jsx";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../redux/user/userSlice.js";
import {profile} from "../constants/routes.js";
import {setCookie} from "../utils/cookies/setCookie.js";
import {setEncryptedData} from "../utils/encrypted/setEncryptedData.js";
import {useAuth} from "../../hooks/useAuth.js";

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {isAuth} = useAuth();

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}));
				navigate(profile);
				const userId = auth.currentUser.uid;
				setCookie("userId", setEncryptedData(userId), 1);
				setCookie("isAuth", isAuth, 1);
			})
			.catch(() => alert("Invalid user"));
	}

	return (
		<Form
			title="Sign In"
			handleClick={handleLogin}
		/>
	);
};
