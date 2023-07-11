import {addDoc, collection} from "firebase/firestore";
import {getCollectionRef} from "./getCollectionRef.js";
import {database} from "./firebase-config.js";

export const createData = async (db, path, data, categoryName = null) => {
	if (categoryName) {
		const collectionLink = collection(database, path);
		return await addDoc(collectionLink, {[categoryName]: data});
	}
	await addDoc(getCollectionRef(db, path), data);
}