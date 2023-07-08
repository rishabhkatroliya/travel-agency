import React from 'react';
import axios from "axios";
import {
    Box,
    Form,
    Flex,
    Input,
    HStack,
    Heading,
    Link,
    Button,
    Grid,
    Img,
    Text,
    Wrap,
    Image,
    WrapItem
} from '@chakra-ui/react';
import Nature from "./Images/Nature.jpg"

const BlogPost = () => {
    const[data,setData] = React.useState({});
      const fetchData = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:8080/blog`,data);
       
      };
      const handleClick = (e)=>{
        console.log(e.target.value);
setData({...data,[e.target.name]:e.target.value})
      }

    return (
        <Box backgroundImage={Nature} fontSize={"16px"} w={"100%"} float={"left"} h={"450px"}>

          <form onSubmit={fetchData}>
                
<label>Blog Name : </label> <Input type="text" name="name" placeholder='Enter Blog Name' onChange={(e)=>handleClick(e)} w={"80%"} mt={"1em"} mb={"1em"}/><br/>
<label>Author Name : </label><Input type="text" name="author" placeholder='Enter Author Name' onChange={(e)=>handleClick(e)} w={"80%"} mb={"1em"} /><br/>
<label>Date : </label>  <Input type="date" name="date" placeholder='dd/mm/yyyy' onChange={(e)=>handleClick(e)} w={"80%"} mb={"1em"}/><br/>
<label>Image URL : </label>  <Input type="text" name="img" placeholder='Enter Image URL' onChange={(e)=>handleClick(e)} w={"80%"} mb={"1em"}/><br/>
<label>Description : </label> <Input type="text" name="desc" placeholder='Enter Description' onChange={(e)=>handleClick(e)} w={"80%"} mb={"1em"} /><br/>
<Button type="submit" backgroundColor={"rgb(124, 141, 211)"} color="white">ADD BLOG</Button>
          </form>
        </Box>
    )
}

export default BlogPost;