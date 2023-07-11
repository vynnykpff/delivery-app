import {deleteDoc, doc} from "firebase/firestore";

export const deleteData = async (db, path, id) => {
	const fieldDoc = doc(db, path, id);
	await deleteDoc(fieldDoc);
}