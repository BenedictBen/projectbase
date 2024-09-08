import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  Text,
  VStack,
  FormLabel,
  Input,
  Card,
  CardBody,
  HStack,
  Button,
  Stack,
} from "@chakra-ui/react";

// import Carbgrm from "../assets/images/car-bg-rm.png";
import NavbarEntry from "../components/NavbarEntry";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";




const Register = () => {
 

  const [firstname, setFIrstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formErr, setFormErr] = useState({});
 

const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

      let isValid = validate();
      console.log(isValid);
    
      const data = await axios
        .post(
          "https://api.dwugh.com/api/v1/register",
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application",
              Auth: "a62f2225bf70bfaccbc7f1ef2a397836717377de",
            },
          }
        )
        .then(function (response) {
          console.log(response);
         toast.success("Registration successful");
          navigate("/dashboard");
        })
        .catch(function (error) {
          console.log(error)
          console.log(error.response.data.message);
          toast.error("Already registered");
        });
        
    // error.response.data.message
  };

  const validate = () => {
    let err = {}
    if (firstname === ''){
      err.firstname = 'First name is required'
    } else {
      err.firstname = ''
    }
    if (lastname === "") {
      err.lastname = "Last name is required";
    }
    if (email === "") {
      err.email = "Email is required";
    }
    if (phone === "") {
      err.phone = "Phone number is required";
    }

    if (password === "") {
      err.password = "Password is required";
    }

    setFormErr({ ...err })

    return false
  }

  return (
    <Box
      background={"black"}
      position="fixed"
      left={0}
      top="0"
      right={0}
      bottom="0"
    >
      {/* NavbarEntry */}
      <Box mb="-6">
        <NavbarEntry />
      </Box>
      {/* Small Screen */}
      <Box display={["block", "block", "none", "none"]}>
        <VStack>
          <Heading
            as="h2"
            fontWeight={"300"}
            fontSize={["16", "20"]}
            letterSpacing="-0.5px"
            color="white"
            mt="16px"
          >
            DIGITAL WORKERS UNION - GHANA
          </Heading>

          <Text color="white" my="4">
            REGISTER AN ACCOUNT
          </Text>
        </VStack>
        <Card
          maxW={["xs", "sm"]}
          margin={"auto"}
          mt="16px"
          background={"gray.700"}
        >
          <CardBody>
            <form>
              <VStack>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    FIRSTNAME
                  </FormLabel>
                  <Input
                    required
                    size={["xs", "sm"]}
                    type="text"
                    value={lastname}
                    name="lastname"
                    color={"black"}
                    bg="white"
                    borderRadius={"none"}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    LASTNAME
                  </FormLabel>
                  <Input
                    required
                    size={["xs", "sm"]}
                    type="text"
                    value={lastname}
                    name="lastname"
                    color={"black"}
                    bg="white"
                    borderRadius={"none"}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    EMAIL
                  </FormLabel>
                  <Input
                    required
                    size={["xs", "sm"]}
                    type="email"
                    value={email}
                    name="email"
                    color={"black"}
                    bg="white"
                    borderRadius={"none"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    PHONE NUMBER
                  </FormLabel>
                  <Input
                    required
                    size={["xs", "sm"]}
                    type="number"
                    value={phone}
                    name="phone"
                    color={"black"}
                    bg="white"
                    borderRadius={"none"}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white" fontSize={["10", "16"]}>
                    PASSWORD
                  </FormLabel>
                  <Input
                    required
                    size={["xs", "sm"]}
                    type="password"
                    value={password}
                    name="password"
                    color={"black"}
                    bg="white"
                    borderRadius={"none"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
              </VStack>
              <Box mt="6">
                <Button
                  margin={"auto"}
                  display="flex"
                  px="12"
                  bg="red.500"
                  color={"white"}
                  borderRadius={"none"}
                  type="submit"
                  size="sm"
                  fontSize={"12"}
                  onClick={handleSubmit}
                >
                  Create account
                </Button>
                <ToastContainer />
              </Box>
            </form>
            <Flex
              alignItems={"center"}
              justifyContent="center"
              color="white"
              mt="2"
            >
              <Link to="/login">
                <Button variant={"none"} as="a" href="#" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/resetpassword">
                <Button variant={"none"} as="a" href="#" size="sm">
                  Forgot password?
                </Button>
              </Link>
            </Flex>
          </CardBody>
        </Card>
      </Box>

      {/* Large Screen */}
      <Box
        display={["none", "none", "block", "block"]}
        mt={{ md: "-10", lg: "-24" }}
        mb=""
      >
        <VStack mb={"4"}>
          <Heading
            as="h2"
            fontWeight={"300"}
            fontSize={["10", "16", "28"]}
            letterSpacing="-0.5px"
            color="white"
          >
            DIGITAL WORKERS UNION - GHANA
          </Heading>

          <Text color="white" my="4">
            REGISTER AN ACCOUNT
          </Text>
        </VStack>
        <VStack

        //   backgroundImage={Carbgrm}
        //   backgroundRepeat="no-repeat"
        //   position={"absolute"}
        >
          <Card
            maxW="md"
            background={"gray.700"}
            margin={"auto"}
            //   backgroundImage={Carbgrm}
            //   filter="grayscale(120%)"
            //   blur
          >
            <CardBody>
              <form>
                <HStack spacing="7" mb="4">
                  <FormControl>
                    <FormLabel color="white" fontSize={"12"}>
                      FIRSTNAME
                    </FormLabel>
                    <Input
                      required
                      type="text"
                      size="sm"
                      value={firstname}
                      name="firstname"
                      bg="white"
                      color={"black"}
                      borderRadius={"none"}
                      onChange={(e) => setFIrstName(e.target.value)}
                    />
                    <Text color={"red.400"}>{formErr.firstname}</Text>
                  </FormControl>
                  <FormControl>
                    <FormLabel color="white" fontSize={"12"}>
                      LASTNAME
                    </FormLabel>
                    <Input
                      required
                      size="sm"
                      type="text"
                      value={lastname}
                      name="lastname"
                      color={"black"}
                      bg="white"
                      borderRadius={"none"}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Text color={"red.400"}>{formErr.lastname}</Text>
                  </FormControl>
                </HStack>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel color="white" fontSize={"12"}>
                      EMAIL
                    </FormLabel>
                    <Input
                      required
                      size="sm"
                      type="email"
                      value={email}
                      name="email"
                      color={"black"}
                      bg="white"
                      borderRadius={"none"}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Text color={"red.400"}>{formErr.email}</Text>
                  </FormControl>
                  <FormControl>
                    <FormLabel color="white" fontSize={"12"}>
                      PHONE NUMBER
                    </FormLabel>
                    <Input
                      required
                      size="sm"
                      type="number"
                      value={phone}
                      name="phone"
                      color={"black"}
                      bg="white"
                      borderRadius={"none"}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Text color={"red.400"}>{formErr.phone}</Text>
                  </FormControl>
                  <FormControl>
                    <FormLabel color="white" fontSize={"12"}>
                      PASSWORD
                    </FormLabel>
                    <Input
                      required
                      size="sm"
                      type="password"
                      value={password}
                      name="password"
                      color={"black"}
                      bg="white"
                      borderRadius={"none"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Text color={"red.400"}>{formErr.password}</Text>
                  </FormControl>
                </Stack>
                <Box mt="6">
                  <Button
                    margin={"auto"}
                    display="flex"
                    px="12"
                    bg="red.500"
                    color={"white"}
                    borderRadius={"none"}
                    type="submit"
                    size="sm"
                    fontSize={"12"}
                    onClick={handleSubmit}
                  >
                    Create account
                  </Button>
                  <ToastContainer />
                </Box>
              </form>
              <Flex
                alignItems={"center"}
                justifyContent="center"
                color="white"
                mt="2"
              >
                <Link to="/login">
                  <Button variant={"none"} as="a" href="#" size="sm">
                    Login
                  </Button>
                </Link>
                <Text>|</Text>
                <Link to="/resetpassword">
                  <Button variant={"none"} as="a" href="#" size="sm">
                    Forgot password?
                  </Button>
                </Link>
              </Flex>
            </CardBody>
          </Card>
        </VStack>
      </Box>
    </Box>
  );
};

export default Register;
