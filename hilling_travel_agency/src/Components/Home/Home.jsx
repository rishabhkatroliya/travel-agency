import React,{useState} from 'react'
import {Box,  Heading, Text,
  Button,
  Image,Center,IconButton,SlideFade,Flex,Input
} from "@chakra-ui/react";
import {ExternalLinkIcon,
  CalendarIcon,
  SearchIcon,
  SunIcon,
  ChevronLeftIcon, ChevronRightIcon, ChatIcon,
} from "@chakra-ui/icons"
import Nature from "./Images/Nature.jpg"
import Darjiling from "./Images/Nature Images/Darjiling.jpg"
import Kasuli from "./Images/Nature Images/Kasuli.jpg"
import Khandala from "./Images/Nature Images/Khandala.jpeg"
import KULU_Manali from "./Images//Nature Images/KULU_Manali.jpg"
import lehladakh from "./Images/Nature Images/leh-ladakh.jpg"
import Lonawala from "./Images/Nature Images/Lonawala.jpeg"
import Nainital from "./Images/Nature Images/Nainital-Hill-Station.webp"
import map from "./Images/map.jpg"
import logo1 from "./Images/ComLogo/logo1.jpg"
import logo2 from "./Images/ComLogo/logo2.jpg"
import logo3 from "./Images/ComLogo/logo3.jpg"
import logo4 from "./Images/ComLogo/logo4.jpg"

const Home = () => {

  const [windowStart, setWindowStart] = useState(0);

  const images = [
    Darjiling,
    Kasuli,
    Khandala,
    KULU_Manali,
    lehladakh,
    Lonawala,
    Nainital,
    Darjiling,
    Kasuli,
    Khandala,
    KULU_Manali,
    lehladakh,
    Lonawala,
    Nainital,
    // Add more image URLs here
  ];

  const windowsize = 4; // Number of images to display at a time

  const goToPreviousWindow = () => {
    setWindowStart((prevStart) => Math.max(0, prevStart - windowsize));
  };

  const goToNextWindow = () => {
    setWindowStart((prevStart) => Math.min(images.length - windowsize, prevStart + windowsize));
  };

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

      <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"} marginTop={"50px"} padding={"30px"} >
        
        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)' padding={"40px"}>
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <CalendarIcon/>
            </Box>
          </Center>
          <br />
          <Heading color={"white"} size={"lg"}>Schedule a Plan</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Quis pretium placerat morbi <br />
            morbi arcu non lobortis neque, porta <br />
            ligula platea eget ultricies.
          </Text>
        </Box>

        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)' padding={"40px"}>
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} width={"20%"} height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <SearchIcon/>
            </Box>
          </Center>
          <br />
          <Heading color={"white"} size={"lg"}>Find a Destination</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Luctus ac et egestas sagittis a<br />
            nulla mauris id turpis vitae erat nibh <br />
            gravida convallis lorem.
          </Text>
        </Box>

        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)' padding={"40px"}>
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <SunIcon/>
            </Box>
          </Center>
          <br />
          <Heading color={"white"} size={"lg"}>Enjoy Your Trip</Heading> <br />
          <Text color={"white"} fontSize={"small"}>Ligula dui sit integer vestibulum, Facilisis <br />
            et viverra volutpat mollis leo sapien <br />
            mauris nulla marcu.
          </Text>
        </Box>
      </Box>


      <Box>
        <Text>Popular Destination</Text>
        <Box display={"flex"} justifyContent={"space-between"} margin={"10px"}>
          <Heading color={"white"}>Recommended Destination</Heading>
            <Box display={"flex"}>
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={goToPreviousWindow}
              aria-label="Previous"
              mr={2}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={goToNextWindow}
              aria-label="Next"
              ml={2}
            />
            </Box>
          </Box>
          <SlideFade in offsetY="20px">
          <Box display="flex" padding={"40px"} windowsize={"100%"}>
            {images.slice(windowStart, windowStart + windowsize).map((image, index) => (
              <Box
                key={index}
                mr={10}
                width="300px"
                height="400px"
                style={{ position: 'relative' }}
              >
                <img
                  src={image}
                  alt={`Image ${windowStart + index + 1}`}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </Box>
        </SlideFade>
      </Box>

      <Box display={"flex"} marginTop={"100px"} paddingLeft={"20px"} color={"white"} width={"100%"} justifyContent={"space-evenly"}>
        <Box>
          <Image src={map}/>
        </Box>

        <Box textAlign={"left"}>
          <Text color={"rgba(7,89,145,255)"}>Benefits</Text>
          <br />
          <Heading size={"lg"}>Our Team Already Available <br/>
              All Over the World
          </Heading>
          <br />
          <Text>Sed ut perspiciatis unde omnis iste natus error sit <br />
              voluptatem accusantium doloremque laudantium, tatam
           </Text>
           <br />
           <Box display={"flex"} justifyContent={"space-between"} >
              <Box> <Heading>16K+</Heading> <Text fontSize={"sm"}>Happy Customers</Text> </Box>
              <Box> <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Company</Text> </Box>
              <Box> <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Country</Text> </Box>
           </Box>
        </Box>
      </Box>

      <Box marginTop={"100px"} display={"flex"} gap={"100px"} marginLeft={"100px"}>
        <Box>
          <Text color={"rgba(7,89,145,255)"}>Testimonials</Text>
          <br />
          <Heading color={"white"}>What People Say <br />
              About Our Services
          </Heading>
          <br />
          <Box display={"flex"} gap={"20px"}>
            <IconButton
              icon={<ChevronLeftIcon />}
              // onClick={goToPreviousWindow}
              aria-label="Previous"
              mr={2}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              // onClick={goToNextWindow}
              aria-label="Next"
              ml={2}
            />
            <Text color={"white"}>There are many Variations</Text>
          </Box>
        </Box>
          <Box display="flex" gap={"10px"} textAlign={"left"} >
            <Box padding={"10px"}>
              <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
                display="flex" justifyContent="center" alignItems="center" >
                <ChatIcon/>
              </Box>
              <br />
              <Text color={"white"}>Rizal Salamandar</Text> <br />
              <Box display={"flex"} color={"white"}> <SunIcon/><SunIcon/><SunIcon/><SunIcon/><SunIcon/> </Box> <br />
              <Text color={"white"} textAlign={"left"} fontSize={"sm"}> I'm Happy because I had a <br /> amazing experience with Healing, <br />
              Thank you so much.</Text>
            </Box>
            
            <Box padding={"10px"}>
              <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
                display="flex" justifyContent="center" alignItems="center" >
                <ChatIcon/>
              </Box>
              <br />
              <Text color={"white"}>Rizal Salamandar</Text> <br />
              <Box display={"flex"} color={"white"}> <SunIcon/><SunIcon/><SunIcon/><SunIcon/><SunIcon/> </Box> <br />
              <Text color={"white"} textAlign={"left"} fontSize={"sm"}> I'm Happy because I had a <br /> amazing experience with Healing, <br />
              Thank you so much.</Text>
            </Box>

            <Box padding={"10px"}>
              <Box borderRadius={"18px"} backgroundColor={"gray"} width={"22%"} height={"45px"}
                display="flex" justifyContent="center" alignItems="center" >
                <ChatIcon/>
              </Box>
              <br />
              <Text color={"white"}>Rizal Salamandar</Text> <br />
              <Box display={"flex"} color={"white"}> <SunIcon/><SunIcon/><SunIcon/><SunIcon/><SunIcon/> </Box> <br />
              <Text color={"white"} textAlign={"left"} fontSize={"sm"}> I'm Happy because I had a <br /> amazing experience with Healing, <br />
              Thank you so much.</Text>
            </Box>
          </Box>
      </Box>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Box marginTop="100px"> 
        <Text color={"rgba(7,89,145,255)"}>Subsciption</Text> <br />
        <Heading color={"white"}> Join Our Community For Get Best Price</Heading> <br />
        <Text color={"white"}>Subscribe to be the first to hear about upcoming fintech services!</Text>
        <br/>
        <Box display={"flex"} gap={"10px"}>
            <Input placeholder="Enter your email" />
            <Button colorScheme="orange" size="md">
              Join Now
            </Button>
        </Box>
        
        <Box display={"flex"} marginTop={"50px"}>
          <Image src={logo1}/>
          <Image src={logo2}/>
          <Image src={logo3}/>
          <Image src={logo4}/>
        </Box>
      </Box>
      </div>

    </Box>
  </Box>
}

export default Home
