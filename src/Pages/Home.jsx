import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'
import {
  Box,
  Text,
  InputGroup,
  Input,
  Button,
  Flex,Image,
} from "@chakra-ui/react";
import {CheckCircleIcon} from '@chakra-ui/icons'

function Home() {
  return (
    <>
      <div id="nav-container">
        <Navbar />
      </div>
      <Box w={"full"} textAlign={"center"} position={"absolute"} top={"140px"}>
        <Text
          size="4xl"
          noOfLines={2}
          lineHeight={"100px"}
          fontWeight={"500"}
          fontSize={"80px"}
        >
          Market better. Sell faster. <br /> Support smarter.
        </Text>
        <Text
          noOfLines={1}
          lineHeight={"70px"}
          fontSize={"30px"}
          fontWeight={"300"}
          mt={2}
          mb={6}
        >
          One platform for all your Marketing, Sales, and Support teams
        </Text>
        <InputGroup
          size="lg"
          w={"50%"}
          m={"auto"}
          p={"2"}
          border={"2px solid tomato"}
          bg={"#FFFFFF"}
          borderRadius={"50px"}
        >
          <Input
            width="75%"
            h="55px"
            placeholder="Your email address"
            type="email"
            fontSize="lg"
            border={"none"}
            borderRadius={"50px"}
          />
          <Button
            width="25%"
            h="55px"
            bg={"tomato"}
            color={"white"}
            borderRadius={"50px"}
          >
            Get Started
          </Button>
        </InputGroup>

        <Flex justifyContent={"center"} alignItems={"center"} gap={4} mt={3}>
          <Flex alignItems={"center"} gap={1}>
            <CheckCircleIcon color={"purple.500"} />
            <Text>Free for 15 users</Text>
          </Flex>
          <Flex alignItems={"center"} gap={1}>
            <CheckCircleIcon color={"purple.500"} />
            <Text>No credit card required</Text>
          </Flex>
        </Flex>

        <Box w={"full"} mt={3}>
          <Image
            mx={"auto"}
            boxSize="80%"
            src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg"
            alt="Dan Abramov"
          />
        </Box>
      </Box>

      <video autoPlay="" muted="" loop="" id="landing-video">
        <source
          src="https://cdn5.engagebay.com/new/assets/img/videos/bg-wave.mp4"
          type="video/mp4"
        />
      </video>

      <Box w={"full"} py={7} >
        <Image
          src="https://cdn5.engagebay.com/new/assets/img/patterns/bg-with-dotted.svg"
          alt="Dan Abramov"
        />
      </Box>
      <Footer />
    </>
  );
}

export default Home
