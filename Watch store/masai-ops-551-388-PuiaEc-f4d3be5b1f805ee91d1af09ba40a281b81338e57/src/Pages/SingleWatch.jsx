import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


const SingleWatch = () => {

  const [userDetails, setUserDetails] = React.useState({});

const {id}=useParams()
console.log(id)



useEffect(()=>{
axios.get(`http://localhost:8080/watches/${id}`)
  .then((res)=>{
      setUserDetails(res.data)
        // console.log("single data fetched")
    })
    .catch((err)=>{
        console.log("data error");
    })
    

},[id])



  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src={userDetails.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{userDetails.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
