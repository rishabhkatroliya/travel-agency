import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Components/Home/Home';
import Blog from '../Components/Blog/Blog';
import BlogPost from '../Components/Blog/BlogPost';

const AllRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<Home/>}>Home</Route> {/* Shailesh*/}

        <Route path='/ourwords' element={""}>service and product details page</Route>       {/* gaurav*/}
        <Route path='/ourwords/:id' element={""}>Product Details page</Route>  {/* gaurav*/}

        <Route path='/signup' element={""}>Signup</Route>  {/* Akash*/}
        <Route path='/login' element={""}>Login</Route>  {/* Akash*/}

        <Route path='/address' element={""}>Address</Route>  {/* Akhil*/}
        <Route path='/payment' element={""}>Payment</Route>  {/* Akhil*/}

        <Route path='/blog' element={<Blog />}>Blog</Route> {/*Rishabh */}
        <Route path='/blog/:id' element={<BlogPost />}>BlogPost</Route> {/*Rishabh */}

   </Routes> 
  )
}

export default AllRoutes
