import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {

   const [navColor, setnavColor] = useState("transparent");
   const listenScrollEvent = () => {
     window.scrollY > 15 ? setnavColor("#FFFFFF") : setnavColor("transparent");
   };
   useEffect(() => {
     window.addEventListener("scroll", listenScrollEvent);
     return () => {
       window.removeEventListener("scroll", listenScrollEvent);
     };
   }, []);

  const {
    isOpen:isOpenProducts,
    onOpen:onOpenProducts,
    onClose:onCloseProducts,
  } = useDisclosure(); 
   const {
     isOpen: isOpenResources,
     onOpen: onOpenResources,
     onClose: onCloseResources,
   } = useDisclosure();  
   const {
     isOpen: isOpenFreeTools,
     onOpen: onOpenFreeTools,
     onClose:onCloseFreeTools,
   } = useDisclosure(); 


  return (
    <Box
      px={"80px"}
      py={"20px"}
      style={{
        backgroundColor: navColor,
      }}
    >
      <Flex direction={"row"} gap={5}>
        <Image
          w={"200px"}
          h={"30px"}
          mt={1}
          src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg"
          alt="Engagebay Logo"
        />
        <Box fontWeight={"500"} pl={10}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={9}
            mt={2}
          >
            <Box>
              <Menu isOpen={isOpenProducts}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  Products <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  <MenuItem>New File</MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuDivider />
                  <MenuItem>Open...</MenuItem>
                  <MenuItem>Save File</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link _hover={{ color: "purple.400", textDecoration: "none" }}>
                Pricing
              </Link>
            </Box>
            <Box>
              <Menu isOpen={isOpenResources}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  Resources
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  <MenuItem>New File</MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuDivider />
                  <MenuItem>Open...</MenuItem>
                  <MenuItem>Save File</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu isOpen={isOpenFreeTools}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ color: "purple.400" }}
                  fontWeight={"500"}
                  aria-label="Courses"
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  Free Tools
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  <MenuItem>New File</MenuItem>
                  <MenuItem>New Window</MenuItem>
                  <MenuDivider />
                  <MenuItem>Open...</MenuItem>
                  <MenuItem>Save File</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link _hover={{ color: "purple.400", textDecoration: "none" }}>
                Blog
              </Link>
            </Box>
            <Box>
              <Link _hover={{ color: "purple.400", textDecoration: "none" }}>
                Login
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap={2}>
            <Button
              borderRadius={"3px"}
              bg={"purple.600"}
              color={"#FFFFFF"}
              _hover={{ backgroundColor: "purple.700" }}
              px={5}
            >
              Free Demo
            </Button>
            <Button
              borderRadius={"3px"}
              bg={"orange.500"}
              color={"#FFFFFF"}
              _hover={{ backgroundColor: "orange.600" }}
              px={5}
            >
              Free Signup
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
