import api from "../services/api"

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks')
        return response.data
    }
    catch (err) {
        return alert(err)
    }
}

export const getCompleteTasks = async () => {
    try {
        const response = await api.get('/tasks?done=true')
        return response.data
    }
    catch (err) {
        return alert(err)
    }
}

export const getIncompleteTasks = async () => {
    try {
        const response = await api.get('/tasks?done=false')
        return response.data
    }
    catch (err) {
        return alert(err)
    }
}