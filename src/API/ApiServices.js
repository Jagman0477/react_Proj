import axios from "axios"
import { useAuth } from "../context/AuthContext"

class ApiServices{

    baseURL = 'http://localhost:3000/'

    register = async (data) => {
        
        let res = await axios.post(`${this.baseURL}register`, data)
        if(res.status === 201){
            return true
        } else {
            console.log(res);
            return false
        }       
    }

    login = async (data) => {

        let res = await axios.get(`${this.baseURL}register?email=${data.email}&password=${data.password}`)
                if(res.status === 200){
                    return res
                } else {
                    console.log(res);
                    return false
                }
                
    }

    getUsers = async (data) => {

        let res = await axios.get(`${this.baseURL}register`)
                if(res.status === 200){
                    return res
                } else {
                    console.log(res);
                    return false
                }
                
    }

    deleteUser = async (data) => {

        let res = await axios.delete(`${this.baseURL}register/${data.id}`)
                if(res.status === 200){
                    return res
                } else {
                    console.log(res);
                    return false
                }
                
    }
}

const APIServices = new ApiServices();

export default APIServices;