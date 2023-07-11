import CryptoJS from "crypto-js";

export const getDecryptedData = (encryptedData) => {
	return encryptedData ? CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_KEY_FOR_DECRYPTION).toString(CryptoJS.enc.Utf8) : null;
}