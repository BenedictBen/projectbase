import { Avatar, Box, Text, Flex, WrapItem } from '@chakra-ui/react'
import React,{ useState } from 'react'
import DashboardDetail from './DashboardDetail';
import axios from "axios";


const DashboardContent = () => {
  const [session_id, setSession_id] = useState("");
  const [firstname, setFirstname] = useState("");

  
  return (
    <Box background={"#374259"} height="100vh">
      <Box
        backgroundColor="white"
        margin={"auto"}
        height="30vh"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        color="black"
      >
        <Text>Cover photo</Text>
      </Box>

      {/* Main content  */}

      <Box>
        {/* Large Screen */}
        <Box display={["none", "none", "flex", "flex"]}>
          <Flex position={"relative"} pl="12">
            <WrapItem position={"absolute"} top="-10">
              <Avatar size="2xl" name="Photo" src="" />
              <Text
                w="300px"
                fontSize={"24"}
                fontWeight="bold"
                ml="8"
                mt="12"
                color="white"
              >
                Kofi Mensah
              </Text>
            </WrapItem>
            
          </Flex>
        </Box>

        {/* Small Screen */}
        <Box display={["flex", "flex", "none", "none"]} px='12' mt='-12' >
          <Flex display="flex" flexDirection={"column"}>
            <WrapItem>
              <Avatar size="xl" name="Photo" src=""/>{" "}
            </WrapItem>
            <Box pt="3" color={'white'} mb='3'>
              <Text>Kofi Mensah</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* details */}
      <DashboardDetail />
    </Box>
  );
}

export default DashboardContent