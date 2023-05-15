import axios from "axios";

export const userApi=axios.create({
    baseURL:'https://reqres.in/api'
})
export const getusersPage=async(pageParam=1)=>{
    const result=await userApi.get(`/users?page=${pageParam}`)
    return result.data
}