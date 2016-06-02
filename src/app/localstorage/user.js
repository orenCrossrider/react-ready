
function setToken(token) {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

function setUserData(user) {
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    } else {
        localStorage.removeItem("user");
    }
}

function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

function getUsername() {
    let userData = getUserData();
    if (userData) {
        return userData.username;
    }
    return null;
}

function getToken() {
    return localStorage.getItem("token");
}

module.exports = {

    username: function() {
        return getUsername();
    },
    
    token: function() {
        return getToken();
    },
    
    setUserToken(token) {
        setToken(token);
    },

    getToken() {
        return getToken();
    },

    setDetails(user) {
        setUserData(user);
    },

    getDetails() {
        return getUserData();
    },

    /**
    *  return a boolean answer (with !!)
    */
    isLoggedIn() {
        return !!(getUsername() && getToken());
    },

    clear() {
        setUserData(null);
        setToken(null);
        return true;
    }
};
