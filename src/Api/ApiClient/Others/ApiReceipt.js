import apiClient from "../ApiClient";

export const addReceipt = async (receipt) => {
    try {
        const response = await apiClient.post('/Receipt/CreateReceipt', receipt)
        return response.data
    } catch (error) {
        console.error('Something went wrong while adding the receipt.')
        console.error("📨 Server responded with:", error.response?.data);

        const errors = error.response?.data?.errors;
        if (errors) {
          for (const field in errors) {
            console.error(`🛑 ${field}: ${errors[field].join(", ")}`);
          }
        }

        throw error.response?.data || {message: 'Unknown error occured.'}
    }
}

export const getReceipts = async () => {
    try {
        const response = await apiClient.get('/Receipt/GetUserReceipts')
        return response.data
    } catch (error) {
        console.error('Something went wrong while retrieving the receipts.')
        throw error.response?.data || {message: 'Unknown error occured.'}
    }
}

export const deleteReceipt = async () => {
    try {
        const response = await apiClient.delete(`/Receipt/${receiptId}`)
        return response.data
    } catch (error) {
        console.error('Something went wrong while trying to delete the receipt.')
        throw error.response?.data || {message: 'Unknown error occured.'}
    }
}
