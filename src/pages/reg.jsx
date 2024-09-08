import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
    Box,
  Flex,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
     const [firstname, setFIrstName] = useState("");
     const [lastname, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [password, setPassword] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack spacing="7" mb="4">
          <FormControl isInvalid={errors.firstname}>
            <FormLabel htmlFor="name">First Name</FormLabel>
            <Input
              required
              type="text"
              id="firstname"
              size="sm"
              //   value={firstname}
              name="firstname"
              bg="white"
              borderRadius={"none"}
              {...register("firstname", { required: "First name is required" })}
            />
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.lastname}>
            <FormLabel htmlFor="name">Last Name</FormLabel>
            <Input
              type="text"
              id="lastname"
              borderRadius={"none"}
              //   value={lastname}
              name="lastname"
              bg="white"
              size="sm"
              {...register("lastname", { required: "Lastname is required" })}
            />
            <FormErrorMessage>
              {errors.lastname && errors.lastname.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is invalid",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit">Register</Button>
      </form>
      {/* <Card maxW="md" background={"gray.700"} margin={"auto"}>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack spacing="7" mb="4">
              <FormControl isInvalid={errors.firstname}>
                <FormLabel htmlFor="firstname" color="white" fontSize={"12"}>
                  FIRSTNAME
                </FormLabel>
                <Input
                  required
                  type="text"
                  id="firstname"
                  size="sm"
                  //   value={firstname}
                  name="firstname"
                  bg="white"
                  borderRadius={"none"}
                  {...register("firstname", {
                    required: "First name is required",
                  })}
                  //   onChange={(e) => setFIrstName(e.target.value)}
                />
                <FormErrorMessage>
                  {errors.firstname && errors.firstname.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.lastname}>
                <FormLabel htmlFor="lastname" color="white" fontSize={"12"}>
                  LASTNAME
                </FormLabel>
                <Input
                  required
                  size="sm"
                  type="text"
                  id="lastname"
                  //   value={lastname}
                  name="lastname"
                  bg="white"
                  {...register("lastname", {
                    required: "lastname is required",
                  })}
                  borderRadius={"none"}
                  //   onChange={(e) => setLastName(e.target.value)}
                />
                <FormErrorMessage>
                  {errors.lastname && errors.lastname.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <Stack spacing="5">
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email" color="white" fontSize={"12"}>
                  EMAIL
                </FormLabel>
                <Input
                  required
                  size="sm"
                  type="email"
                  id="email"
                  //   value={email}
                  name="email"
                  bg="white"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email is invalid",
                    },
                  })}
                  borderRadius={"none"}
                  //   onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.phone}>
                <FormLabel htmlFor="phone" color="white" fontSize={"12"}>
                  PHONE NUMBER
                </FormLabel>
                <Input
                  required
                  size="sm"
                  type="number"
                  id="phone"
                  //   value={phone}
                  name="phone"
                  bg="white"
                  {...register("phone", {
                    required: "Phone Number is required",
                    minLength: {
                      value: 10,
                      message: "Phone Number must be at least 10 digits",
                    },
                  })}
                  borderRadius={"none"}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && errors.phone.message}
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password" color="white" fontSize={"12"}>
                  PASSWORD
                </FormLabel>
                <Input
                  required
                  size="sm"
                  type="password"
                  id="phone"
                  //   value={password}
                  name="password"
                  bg="white"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  borderRadius={"none"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
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
                // onClick={handleSubmit}
              >
                Create account
              </Button>
            </Box>
          </form>
          <Flex
            alignItems={"center"}
            justifyContent="center"
            color="white"
            mt="2"
          >
            <Button variant={"none"} as="a" href="#" size="sm">
              Login
            </Button>
            <Text>|</Text>
            <Button variant={"none"} as="a" href="#" size="sm">
              Forgot password?
            </Button>
          </Flex>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default RegistrationForm;
