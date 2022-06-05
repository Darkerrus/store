import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
    /*const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)*/
    const response = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return response
}

export const login = async (email, password) => {
/*const {data} = await $host.post('api/user/login', {email, password})
localStorage.setItem('token', data.token)
return jwtDecode(data.token)*/
    const response = await $host.post('api/user/login', {email, password})
    return response
}

export const check = async () => {
//const {data} = await $authHost.get('api/user/auth')
const response = await $host.post('api/user/registration')
//return jwtDecode(data.token)
return response
}