import apiClient from "../ApiClient";

export const loginUser = async (username, password) => {
    try {
        const response = await apiClient.post("/User/Login", {username, password})
        return response.data
    } catch (error) {
        console.error("Something went wrong while trying to login.")
        throw error.response?.data || { message: "Unknown error occured."}
    }
}

export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post("User/Register", {username, email, password})
        return response.data
    } catch (error) {
        console.error("Something went wrong while trying to register the user.")
        throw error.response?.data || { message: "Unknown error occured."}
    }
}