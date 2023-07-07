import {Link} from "react-router-dom";
import {Register} from "../../shared/components/Register.jsx";

const RegisterPage = () => {
	return (
		<div>
			<h1>Register</h1>
			<Register/>
			<p>
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

export default RegisterPage;