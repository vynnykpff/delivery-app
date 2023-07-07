import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue, set, push, remove} from 'firebase/database';
import {v4 as uuidv4} from 'uuid';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	databaseURL: import.meta.env.VITE_DATABASE_URL
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
//
// const firebaseRef = ref(database, `Orders`);
//
//
// let newArray = [];
//
// onValue(firebaseRef, (snapshot) => {
// 	const data = snapshot.val();
// 	const array = [];
//
// 	for (let i in data) {
// 		array.push(data[i]);
// 		// console.log(data[i]);
// 	}
//
// 	newArray = array.filter(item => item.id !== "ecf32f02-a2ce-451c-9abd-73cf6ac9c424")
// });
//
// const newData = {
// 	id: uuidv4(),
// 	image: "https://test-burger",
// 	name: "Burger",
// 	count: 2,
// 	price: 111,
// };

// push(firebaseRef, newData)
// 	.then(() => {
// 		console.log('Данные успешно обновлены');
// 	})
// 	.catch((error) => {
// 		console.error('Ошибка при обновлении данных:', error);
// 	});

// setTimeout(() => {
// 		set(firebaseRef, newArray)
// 			.then(() => {
// 				console.log('Данные успешно обновлены');
// 			})
// 			.catch((error) => {
// 				console.error('Ошибка при обновлении данных:', error);
// 			});
// }, 500)


// const dataIdToRemove = 'e85882b7-0495-4cef-9cb3-719d245a6d4c';
// const dataToRemoveRef = ref(database, `Orders`);
//
// console.log(dataToRemoveRef)
//
// remove(dataToRemoveRef)
// 	.then(() => {
// 		console.log('Данные успешно удалены');
// 	})
// 	.catch((error) => {
// 		console.error('Ошибка при удалении данных:', error);
// 	});