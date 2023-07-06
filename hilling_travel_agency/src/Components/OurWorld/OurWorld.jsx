import React from "react";
import { Box, Text, HStack, Input, Center, Button } from "@chakra-ui/react";

const OurWorld = () => {

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
            <HStack bg={"yellow"} p="3px" borderRadius={"10px"} gap={"2px"}>
              <Input
                borderWidth="3px"
                borderColor="gray.300"
                width="30%"
                variant={"outline"}
                placeholder="Where are you going?"
                size="lg"
                color="white"
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
                width="382px"
                placeholder="large size"
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
    </>
  );
};

export default OurWorld;
