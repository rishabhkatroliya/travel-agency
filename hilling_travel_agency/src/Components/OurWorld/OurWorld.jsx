import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  HStack,
  Input,
  Center,
  Button,
  GridItem,
  Image,
  Badge,
  Grid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const OurWorld = () => {
  // const property = {
  //   imageUrl: "https://bit.ly/2Z4KKcF",
  //   imageAlt: "Rear view of modern home with pool",
  //   beds: 3,
  //   baths: 2,
  //   title: "Modern home in city center in the heart of historic Los Angeles",
  //   formattedPrice: "$1,900.00",
  //   reviewCount: 34,
  //   rating: 4,
  // };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/property");
    setProperties(res.data);
  };

  console.log(properties);

  return (
    <>
      <Box
        p={"90px 210px"}
        backgroundColor={"rgb(124, 141, 211)"}
        textAlign={"left"}
      >
        <Box color={"white"}>
          <Text fontSize="5xl" fontWeight={700}>
            Find your next stay
          </Text>
          <Text fontSize="3xl">
            Search low prices on hotels, homes and much more...
          </Text>
        </Box>
        <Center mt="50px">
          <Box h="69px">
            <HStack bg={"white"} p="3px" borderRadius={"10px"} gap={"2px"}>
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width="30%"
                variant={"outline"}
                placeholder="Where are you going?"
                size="lg"
                color="black"
                bg="white"
              />
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width="382px"
                placeholder="Select Date and Time"
                size="lg"
                type="date"
                bg="white"
              />
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width="350px"
                placeholder="No of persons "
                size="lg"
                bg="white"
              />
              <Button
                fontSize={"20px"}
                size="lg"
                backgroundColor={"orange"}
                color={"white"}
                padding={"2px"}
                width={"130px"}
                borderRadius={"8px"}
              >
                Search
              </Button>
            </HStack>
          </Box>
        </Center>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={1}
        //  padding="50px 80px"
      >
        {properties.map((property) => (
          <GridItem
            id={property.id}
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              // margin="-30px -30px"
            >
              <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                roundedTop="lg"
              />

              <Box p="6">
                <Box display="GridItem" alignItems="baseline">
                  <Badge rounded="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  textAlign={"left"}
                >
                  {property.title}
                </Text>

                <Box textAlign={"left"} ml="2px">
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="GridItem" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default OurWorld;
