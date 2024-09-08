import React,{ useState} from 'react'
import { Box, Button, Card, CardBody, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import NavbarEntry from '../components/NavbarEntry';
import Carbgrm from "../assets/images/car-bg-rm.png"
// import axios from "axios";
//  import { ToastContainer, toast } from "react-toastify";
//  import "react-toastify/dist/ReactToastify.css";
 
 import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "", 
    password: ""
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  // const validateLogins = () => {
  //   let err = {};
  //   if (email === "") {
  //     err.email = "Email is required";
  //   } else {
  //     err.email = "";
  //   }

  //   if (password === "") {
  //     err.password = "Password is required";
  //   } else {
  //     err.password = "";
  //   }

  //   setFormErr({ ...err });

  //   return false;
  // }
  // axios.defaults.withCredentials =  true
   const handleLogin = async (e) => {
     e.preventDefault();
    const validateError = {};
   if (!formData.email.trim()) {
     validateError.email = "email is required";
   } else if (/\S+@\S\.\S+/.test(formData.email)) {
     validateError.email = "email is not valid";
   }

   if (!formData.password.trim()) {
     validateError.password = "password is required";
   } else if (formData.password.length < 6) {
     validateError.password = "password should not be less than 6 letters";
   }
     setError(validateError);
       if (Object.keys(validateError.length === 0)){
          try {
            setLoading(true);
            setError(false)
            const res = await fetch('https://api.dwugh.com/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Auth: "a62f2225bf70bfaccbc7f1ef2a397836717377de"
                }, 
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if (data.success === false) {
                setError(true);
                return; 
            }
          } catch (error){
            setLoading(false);
            setError(true)
          }
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
      <Box mt={["-10"]}>
        <VStack mb={"8"}>
          <Heading
            as="h1"
            fontWeight={"300"}
            fontSize={["16", "20", "32"]}
            letterSpacing="-0.5px"
            color="white"
          >
            DIGITAL WORKERS UNION - GHANA
          </Heading>

          <Text color="white" my="8" fontSize={["16px", "24px"]}>
            LOGIN TO YOUR ACCOUNT
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
              <VStack spacing="7" mb="4" px={{ base: "32px", md: "0" }}>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    EMAIL
                  </FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    // size={["xs", "sm", "md"]}
                    name="email"
                    bg="white"
                    borderRadius={"none"}
                  />
                  <div>{error.email}</div>
                </FormControl>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    PASSWORD
                  </FormLabel>
                  <Input
                    type="password"
                    // size={["xs", "sm", "md"]}
                    w={["base", "xs"]}
                    borderRadius={"none"}
                    value={formData.password}
                    onChange={handleChange}
                    name="lastname"
                    bg="white"
                  />
                  <div>{error.password}</div>
                </FormControl>
              </VStack>

              <Box mt="6">
                <Button
                  margin={"auto"}
                  display="flex"
                  flexShrink={0}
                  // px={["24","32","12"]}
                  px={["20", "32"]}
                  bg="red.500"
                  color={"white"}
                  type="submit"
                  borderRadius={"none"}
                  onClick={handleLogin}
                >
                {loading ? 'Signin in ...' : 'SIGN IN'}
                  
                </Button>
                {/* <ToastContainer /> */}
              </Box>
            </form>
            <Flex
              alignItems={"center"}
              justifyContent="center"
              color="white"
              mt="2"
            >
              <Link to="/register">
                <Button variant={"none"} as="a" href="#" size={["base", "sm"]}>
                  Register
                </Button>
              </Link>
              <Text>|</Text>
              <Link to="/resetpassword">
                <Button variant={"none"} as="a" href="#" size={["base", "sm"]}>
                  Forgot password?
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
}
export default Login