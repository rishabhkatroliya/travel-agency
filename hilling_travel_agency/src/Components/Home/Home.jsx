import React from 'react'
import {Box,  Heading, Text,
  Button,
  Image,
} from "@chakra-ui/react";
import {ExternalLinkIcon,
  CalendarIcon
} from "@chakra-ui/icons"
import Nature from "./Images/Nature.jpg"

const Home = () => {
  return <Box backgroundColor={"rgb(124, 141, 211)"} marginTop={"-1px"}>
    <Box paddingTop={"100px"}>
      <Heading size='2xl' lineHeight={1.3} color={"white"}>
       Escape From Reality <br /> 
       Let's Explore The World
      </Heading>

      <Text color={"white"} marginTop={"40px"}>
        Get amazing experience here, no matter where in the world you want to go, <br />
        we can help you go there anytime.
      </Text>

      <Button leftIcon={<ExternalLinkIcon />} backgroundColor={"orange"} color={"white"} padding={"2px"} width={"150px"} borderRadius={"10px"}
      marginTop={"50px"}
      >
      Book a Trip
      </Button>
      
      <Image src={Nature} alt='nature_one' width={"100%"}></Image>
    </Box>
    
    <Box backgroundColor={"rgb(26, 29, 46)"}>
      <Box  paddingTop={"150px"}>
        <Text color={"rgba(7,89,145,255)"}>Get Amazing Experience</Text>
        <Heading size={"lg"} color={"white"} paddingTop={"10px"}>Find Travel Perfection</Heading>
        <Text fontSize={"sm"} color={"white"} paddingTop={"25px"}>Bibendum pharetra faucibus at sapien a faucibus vitae senectus <br />
        morbi consequat sed orci, vulputate id pellentesque 
        </Text>
      </Box>

      <Box display={'flex'}  width={"100%"}  justifyContent={"space-evenly"}>
        <Box >
          <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
           display="flex" justifyContent="center" alignItems="center" position="relative">
            <CalendarIcon 
              
            /></Box>
          <Heading color={"white"} size={"lg"}>Schedule a Plan</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Quis pretium placerat morbi <br />
          morbi arcu non lobortis neque, porta <br />
          ligula platea eget ultricies.
          </Text>
        </Box>
        <Box>
        <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
           display="flex" justifyContent="center" alignItems="center" position="relative">
            <CalendarIcon 
              
            /></Box>
          <Heading color={"white"} size={"lg"}>Schedule a Plan</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Quis pretium placerat morbi <br />
          morbi arcu non lobortis neque, porta <br />
          ligula platea eget ultricies.
          </Text>
        </Box>
        <Box>
        <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
           >
            <CalendarIcon 
              
            /></Box>
          <Heading color={"white"} size={"lg"}>Schedule a Plan</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Quis pretium placerat morbi <br />
          morbi arcu non lobortis neque, porta <br />
          ligula platea eget ultricies.
          </Text>
        </Box>
      </Box>





    </Box>



  </Box>
}

export default Home
