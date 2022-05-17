import axios from "axios"

const BASE_URL = 'http://localhost:8080/user/';

class UserService{

    getAllUser(){
        return axios.get(BASE_URL + "getAllUser");
    }

    createUser(user){
        return axios.post(BASE_URL + "createUser", user);
    }

    updateUser(user,  id){
        return axios.put(BASE_URL + "updateUser/" + id, user);
    }

    deleteUser(id){
        return axios.delete(BASE_URL + "deleteUser/" + id);
    }

}
export default new UserService()