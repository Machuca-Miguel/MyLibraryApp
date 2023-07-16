export const getLocalStorage = (item) =>{
    return window.localStorage.getItem(item);
}

export const saveLocalStorage = (key, item) => {
    window.localStorage.setItem(key, item)
    return true;
}

export const delLocalStorage = (key) => {
    window.localStorage.removeItem(key);
}