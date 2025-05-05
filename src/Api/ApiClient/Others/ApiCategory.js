import apiClient from "../ApiClient";

export const getCategories = async () => {
    try {
        const response = await apiClient.get("Category/GetAllCategories")
        return response.data
    } catch (error) {
        console.error('Something went wrong while trying to get valid categories.')
        throw error.response?.data || { message: 'Unknown error occured'}
    }
}