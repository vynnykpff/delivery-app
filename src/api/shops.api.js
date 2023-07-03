import {setInstance} from './index.js';

const URL = "https://6477ccd7362560649a2cf9ab.mockapi.io/api";
export const shops = {
	getShops: () => setInstance(URL).get("/restaurants").then(res => res.data),
	getMenu: () => setInstance(URL).get("/menu").then(res => res.data),
};
