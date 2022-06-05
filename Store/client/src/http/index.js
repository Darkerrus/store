import axios from "axios";


//всё нужно для работы с токеном
//для обычных запросов который не требует авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//к каждому запросу будет автоматом подставлятся header auth
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}