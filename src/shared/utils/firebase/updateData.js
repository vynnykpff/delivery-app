import {doc, updateDoc} from "firebase/firestore";

export const updateData = async (db, path, documentId = null, fieldName, fieldValue) => {
	const documentRef = doc(db, path, documentId);
	const update = {[fieldName]: fieldValue};
	await updateDoc(documentRef, update)
}