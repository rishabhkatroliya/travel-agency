import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const OurWorldDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [property, setProperty] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:8080/property/${id}`);
    setProperty(res.data);
  };
  return (
    <div>
      <Box
        p={"10px 210px"}
        backgroundColor={"rgb(124, 141, 211)"}
        textAlign={"left"}
      >
        <Text fontSize="26px" color={"white"} fontWeight={500}>
          {property.title}
        </Text>
        <Flex>
          <Box>
            <HStack>
              <StarIcon color={"black"} />
              <Text fontSize="lg" color={"white"}>
                {property.rating} ·
              </Text>
              <Text fontSize="lg" ml="2px" as="u" color={"white"}>
                {property.reviewCount} reviews
              </Text>
              <Text color={"white"}>·</Text>
            </HStack>
          </Box>
          <Box>
            <HStack></HStack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default OurWorldDetails;
