import {KEY, setInstance} from './index.js';

const URL = "https://www.mapquestapi.com/";

export const way = {
	getWay(start, end, widthMap, heightMap) {
		const params = `staticmap/v5/map?start=${start}&end=${end}&size=${widthMap},${heightMap}@2x&key=${KEY}`;
		return setInstance(URL, {"Accept": "image/jpeg"}).get(params).then(res => res.config.url);
	},
	getDescriptionWay: (start, end) => setInstance(URL).get(`directions/v2/route?key=${KEY}&from=${start}&to=${end}`).then(res => res.data),
};
