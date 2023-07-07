import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../redux/user/userSlice.js";
import {profile} from "../constants/routes.js";

export const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}));
				navigate(profile);
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
