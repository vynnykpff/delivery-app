import {getAuth, deleteUser} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const RemoveUser = () => {
	const navigate = useNavigate();

	const handleRemove = () => {
		const auth = getAuth();
		const user = auth.currentUser;

		deleteUser(user)
			.then(() => {
				navigate("/login");
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
