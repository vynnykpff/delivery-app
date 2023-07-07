import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form.jsx";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../redux/user/userSlice.js";
import {profile} from "../constants/routes.js";

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}));
				navigate(profile);
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
