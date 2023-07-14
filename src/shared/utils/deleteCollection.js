import {auth, database} from "./firebase/firebase-config.js";
import {collection, deleteDoc, getDocs} from "firebase/firestore";

export const deleteCollection = async (path = []) => {
	const userId = auth?.currentUser?.uid;

	if (path.length) {
		for (let i = 0; i < path.length; i++) {
			const collectionRef = collection(database, `${path[i]}-${userId}`);
			const snapshots = await getDocs(collectionRef);
			snapshots.forEach(async (doc) => {
				await deleteDoc(doc.ref);
			});
		}
	}
}