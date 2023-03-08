import React, { useState } from "react";

import {useDispatch} from "react-redux"
import { logging } from "../Redux/AuthReducer/action";

const Login = () => {

  const dispatch=useDispatch()


const [data,setdata]=useState({
  email:"",
  password:""
})

const handlechange=(event)=>{
  const {name,value}=event.target
  setdata((prew)=>{
    return {
      ...prew,[name]:value
    }
  })
}

const handleSubmmit=(e)=>{
e.preventDefault()
dispatch(logging(data))


setdata("")

}


  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email"
            value={data.email}
            name="email"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" 
          value={data.password}
          name="password"
          onChange={handlechange}
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
