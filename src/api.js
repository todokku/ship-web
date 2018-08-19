import axios from 'axios'

export const url = process.env.NODE_ENV === 'production'
    ? 'https://api.ship.hackclub.com'
    : 'http://localhost:3000'

const generateMethod = method => (path, options = {}) => {
    return axios({
        baseURL: url,
        url: path,
        method,
        ...options
    })
}

const api = {}
const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
methods.forEach(method => {
    api[method.toLowerCase()] = generateMethod(method)
})

export default api