import {getDocs} from "firebase/firestore";
import {getCollectionRef} from "./getCollectionRef.js";

export const getData = async (db, path) => {
	return await getDocs(getCollectionRef(db, path));
};
