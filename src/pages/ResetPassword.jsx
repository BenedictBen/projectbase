import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavbarEntry from "../components/NavbarEntry";
import Carbgrm from "../assets/images/car-bg-rm.png";
import { Link } from "react-router-dom";


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      background={"black"}
      position="fixed"
      left={0}
      top="0"
      right={0}
      bottom="0"
    >
      <NavbarEntry />
      <Box mt={[, "-10"]}>
        <VStack mb={"4"}>
          <Heading
            as="h1"
            fontWeight={"300"}
            fontSize={["16", "20"]}
            letterSpacing="-0.5px"
            color="white"
          >
            DIGITAL WORKERS UNION - GHANA
          </Heading>

          <Text color="white" my="8" fontSize={["16px", "24px"]}>
            RESET YOUR PASSWORD
          </Text>
        </VStack>
        <Flex
          direction={{ base: "column", sm: "column", md: "row" }}
          overflow="hidden"
          bg="black"
          alignItems={"center"}
          justifyContent="center"
          gap="40px"
        >
          <Image
            w={{ base: "36vw", sm: "20vw", md: "28vw", lg: "30vw" }}
            src={Carbgrm}
            alt="Caffe Latte"
          />
          <Box>
            <form>
              <VStack spacing="7" mb="4">
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    EMAIL
                  </FormLabel>
                  <Input
                    type="email"
                    // value={firstName}
                    height={["8", "12"]}
                    w={["base", "xs"]}
                    name="firstname"
                    bg="white"
                    borderRadius={"none"}
                    // onChange={(e) => setFIrstName(e.target.value)}
                  />
                </FormControl>
              </VStack>

              <Box mt="6">
                <Button
                  margin={"auto"}
                  display="flex"
                  flexShrink={0}
                  // px={["24","32","12"]}

                  bg="red.500"
                  color={"white"}
                  type="submit"
                  w={["52", "80"]}
                  height={["8", "12"]}
                  borderRadius={"none"}
                >
                  RESET PASSWORD
                </Button>
              </Box>
            </form>
            <Flex
              alignItems={"center"}
              justifyContent="center"
              color="white"
              mt="2"
            >
              <Link to='/register'>
              <Button variant={"none"} as="a" href="#" size={["base", "sm"]}>
                Register
              </Button>
              </Link>
              <Text>|</Text>
              <Link to='/login'>
              <Button variant={"none"} as="a" href="#" size={["base", "sm"]}>
                Login
              </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ResetPassword;
