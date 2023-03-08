//Create the HOC for protected Routes
import {useSelector} from 'react-redux' 
import {Navigate} from "react-router-dom"

const ReqAuth = ({children}) => {
const {isAuth,token}=useSelector((store)=>{ return{...store.Authreducer}})

if(isAuth && token){


    return children
    
 }
 return  <Navigate to="/login" />

};

export default ReqAuth;
