import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/images/logo.jpeg";


const NavbarEntry = () => {
  return (
    <>
      {/* Large Screen */}
      <Box display={["none", "none", "flex", "flex"]}>
        <Flex
          alignItems={"center"}
          justifyContent="space-between"
          width={"100vw"}
          // mx={["12px","24px"]}
        >
          <Box
            background={"white"}
            borderRadius={"0 0  200px 0px"}
            width={"200px"}
            height={"180px"}
          >
            <Image src={Logo} maxWidth="100px" my={"24px"} mx={"24px"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              px: "32px",
              color: "white",
            }}
            mt="-12"
          >
            <Text>ABOUT US</Text>
            <Text>CONTACT</Text>
          </Box>
        </Flex>
      </Box>
      {/* Small screen */}
      <Box display={["flex", "flex", "none", "none"]}>
        <Flex alignItems={"center"} justifyContent="space-between" w="100vw">
          <Box
            background={"white"}
            borderRadius={"0 0  200px 0px"}
            width={"150px"}
            height={"150px"}
          >
            <Image src={Logo} maxWidth="80px" my={"16px"} mx={"16px"} />
          </Box>
          <Flex alignItems={"center"} gap="20px" px="10" color="white">
            <Text fontSize={{ base: "9px", sm: "12" }} fontWeight={["20"]}>
              ABOUT US
            </Text>
            <Text fontSize={{ base: "9px", sm: "12" }} fontWeight={["20"]}>
              CONTACT
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavbarEntry;
