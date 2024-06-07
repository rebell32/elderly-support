import Cookies from 'js-cookie'

const checkUserLoggedIn = () => {

    let isLoggedIn = false
    const userCookie = Cookies.get("_user")
    console.log(userCookie)
    if (!userCookie) {
        return window.location.href = "/signin"
    }
    const checkCookie = JSON.parse(userCookie);
    console.log(checkCookie)
    isLoggedIn = checkCookie.isLoggedIn;

    return isLoggedIn

}

export default checkUserLoggedIn;