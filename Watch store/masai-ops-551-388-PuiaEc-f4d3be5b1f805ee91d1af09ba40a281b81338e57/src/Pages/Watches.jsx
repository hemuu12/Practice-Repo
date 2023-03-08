import React, { useEffect,useState } from "react";
import Filter from "../Components/Filter";
import {useSelector ,useDispatch} from "react-redux"
import { fetchdata } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../Components/pagination";

const Watches = () => {

const watches=useSelector((store)=>store.Appreducer.watches)
// console.log(watches)
const dispatch=useDispatch()
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();

const [page, setPage] = useState(1);
useEffect(()=>{

if(location){
  let limit=5
  let queryparam={
    params:{
      _page:page,
      _limit:limit,
      catrgory:searchParams.getAll("category"),
    }
  }
  dispatch(fetchdata(queryparam,page==1))
}


},[location,page])

  return (
    <div>
      <Filter />

    <div style={{display:"grid" , gap:"20px" , width:"90%" ,gridTemplateColumns:"repeat(3,1fr)"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {
          watches.length>0 && watches.map((el,i)=>(
          <WatchCard 
          key={i}
          image={el.image}   
          name={el.name}
          category={el.category}
          id={el.id}
          />
          ))
        }


      </div>
        <div>
          <Pagination 
          totalpage={watches?.length}
          current={page}
           onChange={(page) => setPage(page)}
          
          />
        </div>
    
    </div>
  );
};

export default Watches;
