import Cookies from 'js-cookie';

const cookieName = 'volunteerClient';

const getGuestUser = () => {
    return { firstname: null, lastname: null};
}

const setUser = user => {
    Cookies.set(cookieName, user);
}

const getUser = () => {
    if(Cookies.get(cookieName)){
        return Cookies.get(cookieName)
    }else{
        return null
    }
}

const logout = () => {
    Cookies.remove(cookieName);
}



export {
    getGuestUser,
    setUser,
    getUser,
    logout
};