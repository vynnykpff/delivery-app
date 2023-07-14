import {getDecryptedData} from "../encrypted/getDecryptedData.js";
import {getCookie} from "../cookies/getCookie.js";
import {auth, database} from "./firebase-config.js";
import {getData} from "./getData.js";
import {deleteCookie} from "../cookies/deleteCookie.js";

export const getCollection = async (path) => {
	try {
		const cookieUserId = getDecryptedData(getCookie("userId"));
		if (auth.currentUser || cookieUserId) {
			const userId = auth?.currentUser?.uid;
			const data = await getData(database, `${path}-${userId ? userId : cookieUserId}`);
			return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
		}
	} catch (e) {
		deleteCookie("isAuth");
		return null;
	}
}