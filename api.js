import axios from 'axios'
const instance = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL})
const api = {
    fetchApartments : async (params) => {
        return await instance.get('/apartments/getList', {
            params : params
        })
    },
    fetchAgencies : async () => {
        return await instance.get('/agencies/getAll')
    },
    fetchCategories : async () => {
        return await instance.get('/categories/getAll')
    },
    fetchOwners : async () => {
        return await instance.get('/owners/getAll')
    },
    fetchAmenities : async (params) => {
        return await instance.get('/amenities/getList', {
            params : params
        })
    },
    fetchNeighbourhoods : async (params) => {
        return await instance.get('/neighbourhoods/getList', {
            params: params
        })
    },
    fetchProximities : async (params) => {
        return await instance.get('/proximities/getList', {
            params: params
        })
    },
    fetchUtilities : async (params) => {
        return await instance.get('/utilities/getList', {
            params: params
        })
    },
    fetchApartmentByID : async (id) => {
        return await instance.get('/apartments', {
            params: {id: id}
        })
    },
    deleteApartments : async (params) => {
        return await instance.delete('/apartments', {
            params: params
        })
    },
    saveApartments : async (data) => {
        return await instance.post('/apartments', data)
    },
    
} 

export default api