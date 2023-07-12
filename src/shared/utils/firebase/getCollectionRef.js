import {collection} from "firebase/firestore";

export const getCollectionRef = (db, path) => {
	return collection(db, path);
}