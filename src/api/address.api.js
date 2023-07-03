import {setInstance} from "./index.js";

const URL = "https://648108f3f061e6ec4d4a2ffe.mockapi.io/api";

export const address = {
	getAddress: () => setInstance(URL).get("/address").then(res => res.data),
};