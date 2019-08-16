class Auth{
    constructor(){
        this.authenticated = false;
    }

    login(data, callback){
        //fetch user, set JWT, user-id
        localStorage.setItem('userData', JSON.stringify(data))
        localStorage.setItem('token', data.token)
        this.authenticated = true;
        callback();
    }

    logout(callback){
        //clean storage, erase JWT, erase user data
        localStorage.removeItem('user-data');
        localStorage.removeItem('token')
        this.authenticated = false;
        callback();
    }

    isAuthenticated(){
        //validate if the clocal storage data is available
        if(localStorage.getItem('token')){
            this.authenticated = true;
        }
        return this.authenticated;
    }
}

export default new Auth();