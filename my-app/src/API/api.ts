import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f15dd79e-0006-430b-a2c4-42fc06723f4b"
    }
});
export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    },
    followUser(id:number){
        return instance.post(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    removeUser(id:number){
        return instance.delete(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    getUserProfile(userId:number){
        return instance.get(`profile/${userId}`)
            .then(response=>{
                return response.data
            })
    },
    getUsersStatus(userId:number){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status:string){
        return instance.put(`profile/status`,{status:status})
    },
    setAvatar(photo:any){
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data' }
        })
    },
};
type MeDataType = {
    data: {
        id:number
        email:string
        login:string
    }
    resultCode:number
    messages: Array<string>
}
export const authAPI = {
    getMe(){
        return instance.get<MeDataType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email:string, password:string,rememberMe=false, captcha: null | string = null){
        return instance.post(`auth/login`,{
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        })
    },
    logout(){
        return instance.delete(`auth/login`)
    }
};

export const securityApi = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`)
    },
};
