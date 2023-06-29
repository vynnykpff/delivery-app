import axios from "axios";

const KEY = 'DXdmDCHWApjKMn6ifeYNPJWAfAGmErsP';

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

export const addressApi = {
	getAddress() {
		return axios.get('https://648108f3f061e6ec4d4a2ffe.mockapi.io/api/address').then(res => res.data);
	},
	getWay(where, from) {
		const apiUrl = `https://www.mapquestapi.com/staticmap/v5/map?start=${from}&end=${where}&size=600,400@2x&key=${KEY}`;

		return axios.get(apiUrl, {
			headers: {
				'Accept': 'image/jpeg'
			},
		}).then(res => res.config.url);
	},
	getDescriptionWay(where, from) {
		return axios.get(`https://www.mapquestapi.com/directions/v2/route?key=DXdmDCHWApjKMn6ifeYNPJWAfAGmErsP&from=${from}&to=${where}`).then(res => res.data);
	}
}
