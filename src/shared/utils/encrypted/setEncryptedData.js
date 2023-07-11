import CryptoJS from "crypto-js";

export const setEncryptedData = (value) => {
	return CryptoJS.AES.encrypt(value, import.meta.env.VITE_KEY_FOR_DECRYPTION).toString();
}