import api from "../services/api"

export const  getUsers = async () => {
    try {
        const response = await api.get('/users')
        return response.data
    }
    catch(err) {
        return alert(err)
    }
}

export const  getActiveUsers = async () => {
    try {
        const response = await api.get('/users?active=true')
        return response.data
    }
    catch(err) {
        return alert(err)
    }
}

export const  getInactiveUsers = async () => {
    try {
        const response = await api.get('/users?active=false')
        return response.data
    }
    catch(err) {
        return alert(err)
    }
}