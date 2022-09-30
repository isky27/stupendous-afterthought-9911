import React, { useEffect } from "react";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'
import {
  Box,
  Text,
  InputGroup,
  Input,
  Button,
  Flex,
  Image,
  Divider,
  Stack,
  Heading,
  Grid,
  GridItem,
  Tabs,Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import {CheckCircleIcon} from '@chakra-ui/icons'
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <Box id="nav-container" w={"full"}>
        <Navbar />
      </Box>
      <Box w={"100%"} position={"relative"} h={"max-content"}>
        <video autoPlay muted loop id="landing-video">
          <source
            src="https://cdn5.engagebay.com/new/assets/img/videos/bg-wave.mp4"
            type="video/mp4"
          />
        </video>
        <Box
          w={"full"}
          h={"max-content"}
          textAlign={"center"}
          position={"relative"}
          left={0}
          zIndex={2}
          bottom={0}
          pt={"120px"}
        >
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
      </Box>
      <Box
        w={"full"}
        py={"60px"}
        bgImage={
          "url('https://cdn5.engagebay.com/new/assets/img/patterns/bg-with-dotted.svg')"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Flex w={"90%"} justify={"space-between"} mx={"auto"}>
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png"
            alt="Engagebay Logo"
          />
          <Image
            src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png"
            alt="Engagebay Logo"
          />
        </Flex>
      </Box>
      <Divider
        orientation="horizontal"
        w={"90%"}
        mx={"auto"}
        borderColor={"#A0AEC0"}
        bg={"#A0AEC0"}
        borderWidth={"1px"}
      />
      <Box mt={"50px"} m={"auto"} w={"94%"}>
        <Stack>
          <div data-aos="fade-up" data-aos-easing="ease-in">
            <Box m={"auto"} textAlign={"center"} p={6}>
              <Heading>Single Solution for All Your Activities</Heading>
              <Text
                fontSize={"20px"}
                mt={"10px"}
                fontWeight={100}
                color={"#718096"}
              >
                Identify new opportunities, convert visitors, deliver customer
                happiness, and more!
              </Text>
            </Box>
          </div>
          <Box pt={10} gap={4} w={"100%"} m={"auto"}>
            <Flex px={6} py={4} mx={10} gap={6} justify={"space-around"}>
              <div style={{ width: "50%" }} data-aos="fade-right">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        CRM Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"80%"}>
                        Store unlimited contacts and build stronger
                        relationships by keeping track of all your customer
                        details in one place
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Contact Management</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Deal Management</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Sales Automation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Appointment Scheduling</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
              <div style={{ width: "50%" }} data-aos="fade-left">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Marketing Automation
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"89%"}>
                        Save time by automating your marketing processes and
                        sending personalized messages to target audiences
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Forms & Landing Pages</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Email Sequences</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Marketing Automation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Email Template Builder</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
            </Flex>
            <Flex px={6} py={4} mx={10} gap={6} justify={"space-around"}>
              <div style={{ width: "50%" }} data-aos="fade-right">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Helpdesk Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"80%"}>
                        Resolve queries faster and deliver exceptional support
                        to delight your customers
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Ticket Management</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Views</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Macro</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Ticket Automation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
              <div style={{ width: "50%" }} data-aos="fade-left">
                <Box
                  w="100%"
                  p={10}
                  border={"1px solid #CBD5E0"}
                  borderRadius={10}
                >
                  <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(3,1fr)"
                    gap={6}
                    p={4}
                  >
                    <GridItem rowSpan={1} colSpan={2} my={"auto"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Live Chat Software
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={3}>
                      <Image
                        src="https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg"
                        alt="Engagebay Logo"
                      />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={2}>
                      <Text w={"100%"}>
                        Boost customer happiness and increase conversions by
                        offering instant help when your customers
                      </Text>
                    </GridItem>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    w={"100%"}
                    mx={"auto"}
                    bg={"#A0AEC0"}
                  />
                  <Box p={4}>
                    <Grid
                      templateRows="repeat(4, 1fr)"
                      templateColumns="repeat(2,1fr)"
                      gap={4}
                    >
                      <GridItem rowSpan={1} colSpan={2}>
                        <Text>POPULAR FEATURES</Text>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Instant Support</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Chat Form Customisation</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Shortcuts</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={1} rowSpan={1}>
                        <Flex alignItems={"center"} gap={2}>
                          <CheckCircleIcon color={"purple.500"} />
                          <Text>Notifications</Text>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          borderRadius={"3px"}
                          bg={"purple.600"}
                          color={"#FFFFFF"}
                          _hover={{ backgroundColor: "purple.700" }}
                          px={10}
                          py={6}
                        >
                          Get startes
                        </Button>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
              </div>
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Grid
        mt={"40px"}
        w={"full"}
        py={"30px"}
        backgroundColor={"#2c4fbf"}
        bgImage={
          "url('https://cdn5.engagebay.com/new/assets/img/patterns/action-shape-right.svg')"
        }
        bgPosition={"right"}
        bgRepeat={"no-repeat"}
        h={"300px"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text pt={8} fontSize={"25px"} fontWeight={"400"} color={"white"}>
          HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2
        </Text>
        <div data-aos="fade-right" data-aos-easing="ease-in">
          <Flex w={"90%"} m={"auto"} justify={"space-around"} px={15}>
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg"
              alt="Dan Abramov"
            />
            <Image
              w={"8vw"}
              src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg"
              alt="Dan Abramov"
            />
          </Flex>
        </div>
      </Grid>

      <Box w={"full"} m={"auto"}>
        <Box textAlign={"center"}>
          <Heading>Create Your Own Views</Heading>
          <Text>
            From identifying new opportunities to delivering customer happiness
          </Text>
        </Box>

        <Tabs w={"100%"} m={"auto"}>
          <TabList>
            <Flex m={"auto"} w={"80%"} justify={"space-between"}>
              <Tab
                fontSize={"20px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Marketing Software
              </Tab>
              <Tab
                fontSize={"20px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Free CRM Features
              </Tab>
              <Tab
                fontSize={"20px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Sales Software
              </Tab>
              <Tab
                fontSize={"20px"}
                fontWeight={"700"}
                _selected={{
                  borderColor: "purple.400",
                }}
              >
                Help Desk Software
              </Tab>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel w={"full"}>
              <Flex w={"90%"} m={"auto"} gap={5} justify={"space-between"}>
                <div style={{ width: "50%", margin: "auto" }}>
                  <Box m={"auto"} px={5}>
                    <Heading>
                      Market Your Business Like the World’s Best Companies
                    </Heading>
                    <Divider />
                    <Text>
                      With our comprehensive set of Marketing tools, including
                      Email Marketing, Marketing Automation, Email Template
                      Builder, Landing Page Builder, Lead Generation tools,
                      Social Suite & more, your marketing team can take things
                      to the next level.
                    </Text>
                  </Box>
                  <Grid
                    px={5}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(2,1fr)"
                    gap={4}
                  >
                    <GridItem rowSpan={1} colSpan={2}>
                      <Text>POPULAR MARKETING FEATURES</Text>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Email Marketing</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Lead Generation tools</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Marketing Automation</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                      <Flex alignItems={"center"} gap={2}>
                        <CheckCircleIcon color={"purple.500"} />
                        <Text>Landing Pages</Text>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Button
                        borderRadius={"3px"}
                        bg={"#FFFFFF"}
                        color={"purple.600"}
                        _hover={{ backgroundColor: "purple.700" }}
                        px={10}
                        py={6}
                      >
                        Explore Marketing Software
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
                <div style={{ width: "50%", margin: "auto" }}>
                  <Box position={"relative"}>
                    <video
                      autoPlay
                      muted
                      loop
                      id="tab-video"
                    >
                      <source
                        src="https://cdn5.engagebay.com/new/assets/img/videos/bubble-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <Box
                      position={"relative"}
                      zIndex={2}
                      top={0}
                      left={0}
                      mx={"auto"}
                      w={"full"}
                    >
                      <Image
                        w={"70%"}
                        mx={"auto"}
                        src="https://cdn5.engagebay.com/new/assets/img/tabs/home/marketing_software.png"
                        alt="Dan Abramov"
                      />
                    </Box>
                  </Box>
                </div>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default Home
