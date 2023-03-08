import React from "react";
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux' 
import Search from "./search";
const Navbar = () => {

  const {isAuth,token}=useSelector((store)=>{ return{...store.Authreducer}})


  return (
    <div data-testid="navbar" style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}>
      <div data-testid="navbar-home-link">
        <Link to="/">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "flex" }}
          
        />
        </Link>
      </div>
        <div>
          <Search/>
        </div>
      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
       {
        isAuth?<h1>token-{token}</h1>:<Link to="/login"><button data-testid="navbar-login-button">LOGIN</button></Link>
       } 
       
      </div>
    </div>
  );
};

export default Navbar;


 // <button data-testid="navbar-login-button" >LOGIN</button>