import React,{ useState } from 'react'
import {
  Box,
  Flex,
  Input,
  Icon,
  Menu,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineVideoCamera,
  AiFillSetting,
} from "react-icons/ai";
import {
  BsFillChatLeftTextFill,
  BsPersonFill,
  BsCameraVideoFill,
  BsSearch,
} from "react-icons/bs";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const NavbarDashBoard = () => {
  // const [show, setShow] = useState(!show)
 const { isOpen, onOpen, onClose } = useDisclosure();
 const [placement, setPlacement] = useState("top");
  // const handleToggle = () => setShow(!show)

const navigate = useNavigate();


  const logout = async() =>{
    await axios
      .post(
        "https://api.dwugh.com/api/v1/logout",
        {
          redirect_url: "/login",
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
        navigate('/login')
        localStorage.clear();
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });;
  }

  return (
    <>
      {/* Large Screen */}
      <Flex
        display={["none", "none", "flex", "flex"]}
        alignItems="center"
        justifyContent={"space-between"}
        px="16px"
        py="12px"
        background={"#374259"}
      >
        <Box display={"flex"} alignItems="center" gap="28px">
          <Icon as={AiFillHome} color="white" cursor="pointer" boxSize="5" />
          <Input
            type="text"
            placeholder="Search people"
            background={"white"}
            w="xs"
          />
        </Box>
        <Box display={"flex"} gap={"24px"} cursor="pointer">
          <Icon as={BsCameraVideoFill} color="white" boxSize="5" />
          <Icon as={BsFillChatLeftTextFill} color="white" boxSize="5" />
          <Icon as={AiFillSetting} color="white" boxSize="5" />
          <Menu>
            <MenuButton>
              <Icon as={BsPersonFill} color="white" boxSize="5" />
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
      </Flex>

      {/* Mobile Screen */}

      <Flex
        display={["flex", "flex", "none", "none"]}
        alignItems="center"
        justifyContent={"space-between"}
        background={"#374259"}
        px="4"
        py="3"
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          gap="16px"
        >
          <Icon as={AiFillHome} color="white" />
          <>
            <Icon as={BsSearch} color="white" onClick={onOpen} />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerContent>
                <DrawerBody>
                  <Input
                    type="text"
                    placeholder="Search people"
                    background={"white"}
                  />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        </Box>
        <Box display={"flex"} gap={"12px"} cursor="pointer" alignItems="center">
          <Icon as={BsCameraVideoFill} color="white" />
          <Icon as={BsFillChatLeftTextFill} color="white" />
          <Icon as={AiFillSetting} color="white" />
          <Menu>
            <MenuButton>
              <Icon as={BsPersonFill} color="white" boxSize="5" />
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
      </Flex>
    </>
  );
}

export default NavbarDashBoard