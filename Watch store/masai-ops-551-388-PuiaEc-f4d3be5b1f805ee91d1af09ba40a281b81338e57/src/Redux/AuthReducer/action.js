//Write the ActionCreator functions here

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import axios from "axios"


const loginrequest=()=>{
    return {type:LOGIN_REQUEST}
}
const loginsuccess=(payload)=>{
    return {type:LOGIN_SUCCESS , payload:payload}
}

const loginfailure=()=>{
    return {type:LOGIN_FAILURE}
}


export const logging=({email,password})=>(dispatch)=>{
   
let newdata={
    email:email,
    password:password
}

dispatch(loginrequest())
axios.post("https://reqres.in/api/login",newdata)
.then((res)=>{
    dispatch(loginsuccess(res.data.token))
    console.log({"token fetched":res.data.token})
    localStorage.setItem("token",res.data.token)
    
})
.catch((err)=>{
    dispatch(loginfailure())
    console.log({error:err})
})

}