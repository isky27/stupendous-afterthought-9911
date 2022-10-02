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
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoEllipsisHorizontal } from "react-icons/io5";

function DashNavbar() {
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
    isOpen: isOpenProducts,
    onOpen: onOpenProducts,
    onClose: onCloseProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenResources,
    onOpen: onOpenResources,
    onClose: onCloseResources,
  } = useDisclosure();
  const {
    isOpen: isOpenFreeTools,
    onOpen: onOpenFreeTools,
    onClose: onCloseFreeTools,
  } = useDisclosure();

  return (
    <Box
      px={"2"}
      style={{
        backgroundColor: "#6B488C",
      }}
      w={"full"}
    >
      <Flex
        w={"full"}
        direction={"row"}
        justify={"space-around"}
        alignItems={"center"}
      >
        <Flex w={"17%"} gap={2} alignItems={"center"}>
          <Link to="/dashboard">
            <Image
              w={"12"}
              h={"10"}
              mt={1}
              src="https://d2p078bqz5urf7.cloudfront.net/cloud/dev/assets/img/logo/engagebay-logo.png"
              alt="Engagebay Logo"
            />
          </Link>
          <Image
            h={"90%"}
            src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/menu-icons/menu-divider.png"
          />
          <Box>
            <Menu isOpen={isOpenProducts}>
              <MenuButton
                border={"1px solid white"}
                transition="all 0.2s"
                _hover={{ color: "purple.400" }}
                aria-label="Courses"
                color={"white"}
                py={2}
                px={5}
                onMouseEnter={onOpenProducts}
                onMouseLeave={onCloseProducts}
              >
                Marketing <ChevronDownIcon color={"white"} />
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
        </Flex>

        <Box w={"53%"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justify={"space-around"}
          >
            <SearchIcon />
            <Box>
              <Menu isOpen={isOpenProducts}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "purple.600" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  Contacts <ChevronDownIcon />
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
              <Menu isOpen={isOpenProducts}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "purple.600" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenProducts}
                  onMouseLeave={onCloseProducts}
                >
                  Forms <ChevronDownIcon />
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
              <Link _hover={{ bgColor: "purple.600", textDecoration: "none" }}>
                Landing Pages
              </Link>
            </Box>
            <Box>
              <Menu isOpen={isOpenResources}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "purple.600" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  Templates
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
                  _hover={{ bgColor: "purple.600" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenFreeTools}
                  onMouseLeave={onCloseFreeTools}
                >
                  Campaigns
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
              <Menu isOpen={isOpenResources}>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{ bgColor: "purple.600" }}
                  aria-label="Courses"
                  onMouseEnter={onOpenResources}
                  onMouseLeave={onCloseResources}
                >
                  <IoEllipsisHorizontal
                    fontSize="1.25rem"
                    bg={"none"}
                  />
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
          </Flex>
        </Box>
        <Box>
          <Flex w={"30%"} gap={2}>
            <Button
              borderRadius={"3px"}
              bg={"purple.600"}
              color={"#FFFFFF"}
              _hover={{ backgroundColor: "purple.700" }}
              px={5}
            >
              Free Demo
            </Button>
            <Link to="/signup">
              <Button
                borderRadius={"3px"}
                bg={"orange.500"}
                color={"#FFFFFF"}
                _hover={{ backgroundColor: "orange.600" }}
                px={5}
              >
                Free Signup
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default DashNavbar;
