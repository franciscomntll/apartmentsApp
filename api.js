import axios from 'axios'
const api = {
    fetchApartments : async () => {
        return await axios.get('/apartments')
    },
    saveApartments : async (data) => {
        return await axios.post('apartments', data)
    }
} 

export default api