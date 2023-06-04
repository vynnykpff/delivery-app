import axios from "axios";

const instance = axios.create({
	baseURL: 'https://6477ccd7362560649a2cf9ab.mockapi.io/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const shopsApi = {
	getRestaurants() {
		return instance.get('/restaurants').then(res => res.data);
	},
};

export const menuApi = {
	getMenu() {
		return instance.get('/menu').then(res => res.data);
	},
	getMenuItems() {
		return instance.get('/menu').then(res => res.data);
	},
};