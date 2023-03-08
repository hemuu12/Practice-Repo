//Write the ActionCreator functions here

import axios from "axios"
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType"


const getrequest=()=>{
    return {type:GET_WATCHES_DATA_REQUEST}
}
const getsuccess=(payload)=>{
    return {type:GET_WATCHES_DATA_SUCCESS , payload:payload}
}

const getfailure=()=>{
    return {type:GET_WATCHES_DATA_FAILURE}
}


export const fetchdata=(queryparam)=>(dispatch)=>{
dispatch(getrequest())
axios.get("http://localhost:8080/watches",queryparam)
.then((res)=>{
    dispatch(getsuccess(res.data))
    // console.log("data fetched")
   
})
.catch((err)=>{
    dispatch(getfailure())
})

}



