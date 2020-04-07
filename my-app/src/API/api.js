import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f15dd79e-0006-430b-a2c4-42fc06723f4b"
    }
});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    },
    followUser(id){
        return instance.post(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    removeUser(id){
        return instance.delete(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response=>{
                return response.data
            })
    },
    getUsersStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status){
        return instance.put(`profile/status`,{status:status})
    },
    setAvatar(photo){
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            header: {'Content-Type': 'multipart/form-data' }
        })
    },
};

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password,rememberMe=false){
        return instance.post(`auth/login`,{
            email: email,
            password: password,
            rememberMe:rememberMe
        })
    },
    logout(){
        return instance.delete(`auth/login`)
    }
};
