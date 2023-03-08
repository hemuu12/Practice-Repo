import React,{useState,useEffect, useRef} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import {
  Box,
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const Search = () => {
  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState("");
  const ref = useRef(null)
  const [hiddenDiv, setHiddenDiv] = useState(false)








useEffect(()=>{
  fetchData(searchVal)
},[searchVal])


const fetchData=(searchVal)=>{
  fetch(`http://localhost:8080/watches?q=${searchVal}`)
  .then((res)=>res.json())
  .then((res)=>{
    // setData(res)
    setData(res)
    console.log(res, " search input data after fetched ");
  })
}

const debounce = (fn, timeout)=>{
  let timerid;
  return ()=>{
    clearTimeout(timerid)
    timerid = setTimeout(() => {
      fn()
    }, timeout);
  }
}
const handleinput = debounce(()=>{
  const val = ref.current.value
  console.log(" event val check in debounce ", val);
  setHiddenDiv(true)
  setSearchVal(val)
}, 500)

window.addEventListener("click",(e)=>{
  console.log(e.target.id, " check window ");
  if(e.target.id!=="inputBox"){
    setHiddenDiv(false)
  }
})





  return (
    <div style={{width:"300px"}}>
    <Box w="270px" pos={'relative'}>
    <InputGroup>
      <Input
        placeholder="Search for products,brands and more"
        bg="white"
        w="100%"
        borderRadius="2px"
        h="36px"
        fontSize="14px"
        ref={ref}
        // value={}
        onInput={handleinput}
        id='inputBox'
      />
      <InputRightElement
      pos='absolute' zIndex='10'
        children={
          <IoSearchSharp
            color="#2874f0"
            cursor="pointer"
            fontSize="23px"
            fontWeight="bold"
          />
        }
      />
    </InputGroup>
    <Box
      display={hiddenDiv?"":"none"}
      pos={'absolute'} zIndex={'50'}
      maxH='320px' overflowY={'auto'}
      borderRadius='0 0 2px 2px'
      borderTop={'1px solid #e0e0e0'}
      w='100%'
      bg='#fff'
      boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
    >
      {
       data?.map((item, index)=>(
          <Box key={index}>
          
              <Flex gap={2} p='10px 25px' m='10px 0'
              align={'center'}
              cursor='pointer'
              _hover={{bg:"#F5F8FF"}}
              // onClick={()=>handleSetQuaryUrl(item.query_url)}
              >
                <Box maxH='32px' w='32px'>
                  <Image maxH='30px' maxW='32px' src=
                  {item.image}
                  // {item.thumbnail}
                  />
                </Box>
                <Box color={'#212121'}
                >
                  {item.category}
                  {/* {item.name} */}
                </Box>
              </Flex>
          </Box>
        ))
      }
    </Box>
  </Box>
    </div>
  )
}

export default Search
