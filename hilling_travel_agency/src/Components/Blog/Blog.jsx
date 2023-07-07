import React from 'react';
import axios from "axios";
import BackgroundImg from "./Images/BackgroundImg.jpeg";
import kana from "./Images/kana.webp";
import camping from "./Images/camping.webp";
import desert from "./Images/desert.webp";
import eropa from "./Images/eropa.jpg";
import asia from "./Images/asia.jpg";
import hiking from "./Images/hiking.jpg";
import oasis from "./Images/oasis.webp";
import historical from "./Images/historical.webp";
import {
    Box,
    Flex,
    Input,
    HStack,
    Heading,
    Link,
    useColorModeValue,
    useBreakpointValue,
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
    const[data,setData] = React.useState([]);
     
      const fetchData = async () => {
        const res = await axios.get("http://localhost:8080/property");
        setData(res.data);
      };
    React.useEffect(()=>{
        fetchData();
    },[]);

    return (
        <Box backgroundImage={BackgroundImg} fontSize={"16px"} h={"90vh"} backgroundSize={"cover"} backgroundPosition={"center center"} ml={"60px"} mr={"60px"} w={{ base: "100%", md: "90%" }} borderBottomLeftRadius={"30%"} borderBottomRightRadius={"30%"}>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Link
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}
                    color={"white"}
                    ml={"8rem"}
                    mt={"1.5em"}
                    fontWeight={"600"}
                    textDecoration={"none"}>
                    MBALAYANG
                </Link>
                <HStack
                    textAlign={useBreakpointValue({ base: 'center', md: 'center' })}
                    as={'nav'}
                    spacing={7}
                    display={{ base: 'none', md: 'flex' }}
                    mt={"1.2em"}
                    ml={"5.8em"}
                    fontWeight={"600"}>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        color={"#2C7A7B"}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'#'}>
                        Home
                    </Link>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        color={"#2C7A7B"}

                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'#'}>
                        Blog
                    </Link>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        color={"#2C7A7B"}

                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'#'}>
                        Services
                    </Link>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        color={"#2C7A7B"}

                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'#'}>
                        Signup
                    </Link>
                    <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        color={"#2C7A7B"}

                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                        }}
                        href={'#'}>
                        Login
                    </Link>

                    <Link
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={"white"}
                        ml={"6rem"}
                        fontWeight={"600"}
                        textDecoration={"none"}>
                        CONTACT US
                    </Link>
                </HStack>
            </Flex>
            <Box>
                <div justifyContent={"center"} >
                    <Heading color={"white"} mt={"1em"} fontSize={"48px"} fontWeight={"700"}>Destinations</Heading>
                    <Heading color={"white"} fontSize={"30px"} mt={".3em"} >Amazing Destinations in the World</Heading>
                </div>
            </Box>
            <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"} >
                <Flex background={"#EDF2F7"} boxShadow={"0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"} flexDirection={"row"} justifyContent={"center"}  padding={"1rem"} borderRadius={"0.375em"}>
                    <Input type="text" _placeholder={{color:"teal"}} placeholder="Search destination" name="searchTerm" color={"teal"} width={"29%"}/>&nbsp;&nbsp;
                    <Input type="date" placeholder="Check In Date" name="checkInDate" color={"teal"} width={"29%"} />&nbsp;&nbsp;
                    <Input type="number"  _placeholder={{color:"teal"}} placeholder="Add Guests" name="guests" color={"teal"} width={"29%"}  />&nbsp;&nbsp;
<Button type="button" aria-label={"Search"} background={"#319795"} color={"white"} p={"1px"}><SearchIcon/></Button>
                </Flex>
            </Flex>
            <Grid w={"70%"} h={"200px"} ml={"15%"} mt={"70px"}>
<Flex direction={"row"} background={"#DD6B20"} h={"80px"}  borderRadius={"0.375em"} color={"white"} borderWidth={"1px"} overflow={"hidden"} borderStyle={"solid"}>
<Img w={"9%"} objectFit={"cover"} src={kana} />
<div>
<Heading  p={"1em"} fontSize={"20px"} mr={"2px"}>Kana Package</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={historical} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Historical Package</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={desert} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Desert Package</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={camping} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Camping Package</Heading>
</div>
</Flex>

<Flex direction={"row"} background={"#DD6B20"} h={"80px"} borderRadius={"0.375em"} color={"white"} borderWidth={"1px"} overflow={"hidden"} borderStyle={"solid"}>
<Img w={"9%"} objectFit={"cover"} src={oasis} />
<div>
<Heading  p={"1em"} fontSize={"20px"} mr={"2px"}>Oasis Package</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={hiking} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Hiking Package</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={eropa} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Eropa Destination</Heading>
</div>
<Img w={"9%"} objectFit={"cover"} src={asia} />
<div>
<Heading p={"1em"} fontSize={"20px"}>Asia Destination</Heading>
</div>
</Flex>
            </Grid>
            <Box mt={"200px"}>
                <Flex justifyContent={"center"}>
                <Grid templateColumns='repeat(4, 1fr)'>
{data.map((post)=>{
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
        <Button background={"#319795"} mt={"1em"} color={"white"}>Read More</Button>
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