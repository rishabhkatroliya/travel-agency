import React from 'react';
import axios from "axios";
import Shimla from "./Images/Shimla.jpg";
import Darjiling from "./Images/Darjiling.jpg";
import Kasauli from "./Images/Kasauli.jpg";
import Khandala from "./Images/Khandala.jpeg";
import kullu from "./Images/kullu.jpg";
import leh from "./Images/leh.jpg";
import lonawala from "./Images/lonawala.jpeg";
import Nainital from "./Images/Nainital.webp";
import Nature from "./Images/Nature.jpg"

import { data } from "./Data/data";
import {
    Box,
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
import { SearchIcon } from "@chakra-ui/icons";


const Blog = () => {
    // const[data,setData] = React.useState([]);

    //   const fetchData = async () => {
    //     const res = await axios.get("http://localhost:8080/blog");
    //     setData(res.data);
    //   };
    // React.useEffect(()=>{
    //     fetchData();
    // },[]);

    return (
        <Box backgroundImage={Nature} backgroundColor={"rgb(124, 141, 211)"} fontSize={"16px"} h={"90vh"} backgroundSize={"cover"} backgroundPosition={"center center"} >
            <Box>
                <div justifyContent={"center"} >
                    <Heading color={"white"} fontSize={"48px"} fontWeight={"700"} pt={"1.7em"}>Destinations</Heading>
                    <Heading color={"white"} fontSize={"30px"} mt={".3em"} >Amazing Destinations in India</Heading>
                </div>
            </Box>
            <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"} >
                <Flex background={"#EDF2F7"} boxShadow={"0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"} flexDirection={"row"} justifyContent={"center"} padding={"1rem"} borderRadius={"0.375em"}>
                    <Input type="text" _placeholder={{ color: "rgb(124, 141, 211)" }} placeholder="Search destination" name="searchTerm" color={"rgb(124, 141, 211)"} width={"29%"} />&nbsp;&nbsp;
                    <Input type="date" placeholder="Check In Date" name="checkInDate" color={"rgb(124, 141, 211)"} width={"29%"} />&nbsp;&nbsp;
                    <Input type="number" _placeholder={{ color: "rgb(124, 141, 211)" }} placeholder="Add Guests" name="guests" color={"rgb(124, 141, 211)"} width={"29%"} />&nbsp;&nbsp;
                    <Button type="button" aria-label={"Search"} background={"rgb(124, 141, 211)"} color={"white"} p={"1px"}><SearchIcon /></Button>
                </Flex>
            </Flex>
            <Grid w={"70%"} h={"200px"} ml={"15%"} mt={"310px"} >
                <Flex direction={"row"} background={"rgb(124, 141, 211)"} h={"80px"} borderRadius={"0.375em"} color={"white"} borderWidth={"1px"} overflow={"hidden"} borderStyle={"solid"}>
                    <Img w={"9%"} objectFit={"cover"} src={Shimla} />
                    <div>
                        <Heading p={"1em"} fontSize={"20px"} mr={"2px"}>  <a href="https://himachaltourism.gov.in/destination/shimla/">Shimla Package</a></Heading>
                    </div>
                    <Img w={"9%"} objectFit={"cover"} src={Darjiling} />
                    <div>
                        <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/darjeeling/">
                            Darjeeling Package</a></Heading>
                    </div>

                    <Img w={"9%"} objectFit={"cover"} src={Kasauli} />
                    <div>
                        <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/kasauli/">
                            Kasauli Package</a></Heading>
                    </div>

                    <Img w={"9%"} objectFit={"cover"} src={Khandala} />
                    <div>
                        <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/khandala/">Khandala Package</a></Heading>
                    </div>

                </Flex>

                <Flex direction={"row"} background={"rgb(124, 141, 211)"} h={"80px"} borderRadius={"0.375em"} color={"white"} borderWidth={"1px"} overflow={"hidden"} borderStyle={"solid"}>
                    <Img w={"9%"} objectFit={"cover"} src={kullu} />
                        <div>
                            <Heading p={"1em"} fontSize={"20px"} mr={"2px"}><a href="https://www.holidify.com/places/kullu/">Kullu Package</a></Heading>
                        </div>
                    
                        <Img w={"9%"} objectFit={"cover"} src={leh} />
                        <div>
                            <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/leh/">Leh Package</a></Heading>
                        </div>
                   
                        <Img w={"9%"} objectFit={"cover"} src={lonawala} />
                        <div>
                            <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/lonavala/">Lonavala Package</a></Heading>
                        </div>
                
                   
                        <Img w={"9%"} objectFit={"cover"} src={Nainital} />
                        <div>
                            <Heading p={"1em"} fontSize={"20px"}><a href="https://www.holidify.com/places/nainital/">Nainital Package</a></Heading>
                        </div>
                   
                </Flex>
            </Grid>
            <Box mt={"50px"} backgroundColor={"rgb(124, 141, 211)"}>
                <Flex justifyContent={"center"}>
                    <Grid templateColumns='repeat(4, 1fr)'>
                        {data.map((post) => {
                            return <Wrap spacing="30px" marginTop="5" p={"1rem"} w={"275px"} borderRadius={"0.375rem"} background={"#FFFAF0"} boxShadow={" 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"}>
                                <WrapItem width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}>
                                    <Box w="100%">
                                        <Heading fontSize="xl" marginTop="2" mb={"1em"}>
                                            <Link textDecoration="none" fontWeight={"700"} fontSize={"30px"} _hover={{ textDecoration: 'none' }}>
                                                {post.name}          </Link>
                                        </Heading>

                                        <HStack marginTop="2" spacing="2" display="flex" justifyContent={"center"} mb={"1em"}>
                                            <Text>{post.author}</Text>
                                            <Text>|</Text>
                                            <Text>{post.date}</Text>
                                        </HStack>

                                        <Box borderRadius="lg" overflow="hidden" mb={"1em"}>
                                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                                <Image
                                                    transform="scale(1.0)"
                                                    src={post.img}
                                                    alt="some text"
                                                    objectFit="cover"
                                                    transition="0.3s ease-in-out"
                                                    _hover={{
                                                        transform: 'scale(1.05)',
                                                    }}
                                                    w={"300px"}
                                                    h={"200px"}
                                                />
                                            </Link>
                                        </Box>
                                        <Text as="p" fontSize="md" marginTop="2">
                                            {post.desc}
                                        </Text>
                                        <Button background={"rgb(124, 141, 211)"} mt={"1em"} color={"white"}><a href={post.readMore}>Read More</a></Button>
                                    </Box>
                                </WrapItem>
                            </Wrap>

                        })}
                    </Grid>
                </Flex>
            </Box>
        </Box>
    )
}

export default Blog;