export const getDataFromLocalStorage = (name) => JSON.parse(window.localStorage.getItem(name)) || [];
export const setDataToLocalStorage = (name, data) => window.localStorage.setItem(name, JSON.stringify(data));