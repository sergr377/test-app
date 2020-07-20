import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: false,
        baseURL: 'http://185.25.60.179:9090/login/',
    }
)
//http://185.25.60.179:9090/login/?login=admin&password=admin

export const usersAPI = {
    login(login, password) {
        return instance.get(`?login=${login}&password=${password}`)
            .then(response => {
                return response.data;
            })
    }
}
