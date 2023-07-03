import axios from "axios";
import {shops} from './shops.api.js';
import {address} from "./address.api.js";
import {way} from "./way.api.js";

export const KEY = import.meta.env.VITE_KEY_FROM_SHOPS;

export const setInstance = (url, headers = {"Content-Type": "application/json"}) => {
	return axios.create({
		baseURL: url,
		headers,
	})
}

export const API = {shops, address, way};