import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";

const DashboardDetail = () => {

  const [session_id, setSession_id] = useState('')
  const [firstname, setFirstname] = useState('')

  // const data =  axios
  //      .post(
  //        "https://api.dwugh.com/api/v1/userdetails",
  //        {
  //           session_id: "session_id"
  //        },
  //        {
  //          headers: {
  //            "Content-Type": "application",
  //            Auth: "a62f2225bf70bfaccbc7f1ef2a397836717377de",
  //          },
  //        }
  //      )
  //      .then(function (response) {
  //        console.log(response);
  //        setFirstname(data.name)

  //      })
  //      .catch(function (error) {
  //        console.log(error);
         
  //      });
  return (
    <Flex 
    mt="24" 
    alignItems={"center"} 
    justifyContent="space-between" 
    px="8" 
    direction={['column','column','row']} 
    height=''>
      {/* Profile details */}
      <Box
        background="#545B77"
        height="150px"
        color="white"
        mr={{ md: "6" }}
        mt={{base: '-24',sm: '-24', md: '0'}}
        mb={{base: '6', md: '0'}}
        w={{base: '250px',sm: '450px',md:'300px',lg:"400px"}}
        
      >
        <Text background={"red.500"} textAlign={"center"} mb="3">
          PROFILE
        </Text>
        <Box px="3">
          <Text mb={"3"}>0244 556 667</Text>
          <Text mb={"3"}>kofi@somemail.com</Text>
          <Text>DRIVER</Text>
        </Box>
      </Box>
        {/* Right side */}
      <Box  color="white">
        <HStack mb="3">
          <Input
            type="text"
            placeholder="Write a post"
            background={"white"}
            borderRadius="none"
          />
          <Button background="red" borderRadius={"none"}>
            POST
          </Button>
        </HStack>
        <Box background="#545B77" py="6" px="6">
          <Flex mb="4" alignItems={"center"} gap="6">
            <WrapItem>
              <Avatar
                size="lg"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </WrapItem>
            <Box>
              <Text fontWeight={"bold"} mb="2">
                ADMIN
              </Text>
              <Text fontSize={"xs"}>May 10, 2023 at 12:00pm</Text>
            </Box>
          </Flex>
          <Text letterSpacing={"6px"}>
            Welcome to the Digital Workers Union platform.
          </Text>
        </Box>
      </Box>

    </Flex>
  );
}

export default DashboardDetail