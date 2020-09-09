import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
  Button,
  Collapse,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  Divider
} from '@chakra-ui/core';
import Technicalskil from '@/components/About-skill/Technicalskill';
import Softskills from '@/components/About-skill/Softskills';
import LinkContacts from '@/components/LinkContacts';
import ImageAnimation from '@/components/ImageAnimation';

export default function About() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Navbar />
      <Box w="1140px" maxW="94%" m="0 auto">
        <Heading
          mt="2rem"
          as="h1"
          display="inline-block"
          fontSize="3rem"
          lineHeight="1.8269230769rem"
          mb="1.25rem"
          p=".375rem .75rem .3125rem 1rem"
          bg="#37bd2e"
          transform="rotate(-4deg) translateX(-5px)"
          ml="3rem"
        >
          Personal info.
        </Heading>
        <Stack isInline flexWrap="wrap" justify="center">
          <Box
            maxH="281px"
            display="flex"
            m="2rem 0"
            borderRadius="10px"
            border="2px solid #ffb91f"
            boxShadow="5px 5px 0 #ffb91f"
          >
            <div>
              <LinkContacts />
            </div>
          </Box>
          <Box
            flex="1"
            p={[5, 1 / 2]}
            borderRadius="10px"
            border="2px solid #555"
            boxShadow="5px 5px 0 #555"
          >
            <Heading
              as="h2"
              display="inline-block"
              fontSize="2rem"
              lineHeight="1.8269230769rem"
              mb="1.25rem"
              p=".375rem .75rem .3125rem"
              bg="#7c4de1"
              transform="rotate(-3deg) translateX(-5px)"
              ml="3rem"
            >
              I'm Programmer and Gamer
            </Heading>
            <Text
              fontFamily="Courier Prime"
              fontSize="1.5rem"
              fontWeight="Bold"
              lineHeight="1.9791666667rem"
              pl="20px"
            >
              <span style={{ padding: '0 0 0 30px' }}>Hi, everyone</span> who
              coming to saw my portfolio. My name is{' '}
              <span style={{ borderBottom: '2px solid #fff' }}>
                Peerapat Chanawanno
              </span>
              , i'm just a person who have passionate to coding and interest in
              web development and i also be a coffee lover.
            </Text>
            <Text
              fontFamily="Courier Prime"
              fontSize="2rem"
              lineHeight="1.9791666667rem"
              pl="20px"
              my="20px"
              display="inline-block"
            >
              <span style={{ color: 'tomato' }}>Job position</span>: Currently
              i'm a fresh graduate of 2020 years
            </Text>
            <Text
              as="u"
              fontFamily="Courier Prime"
              fontWeight="Bold"
              lineHeight="1.9791666667rem"
              pl="20px"
              fontSize="1.6rem"
            >
              Languages
            </Text>
            <List
              styleType="disc"
              pb="20px"
              m="10px 0 0 20px"
              fontFamily="Courier Prime"
              fontSize="1.5rem"
              fontWeight="Bold"
              lineHeight="1.9791666667rem"
            >
              <ListItem>🇹🇭 Thai (Native)</ListItem>
              <ListItem>🇬🇧 󠁧󠁢English (Intermediate) Toeic: 725</ListItem>
            </List>
          </Box>
          <Box as="div" m="1.5rem 1.5rem 0 1.5rem">
            {/* <Image
              rounded="full"
              size="300px"
              maxH="300px"
              maxW="300px"
              src="/myimg.jpg"
              alt="myself"
              border="5px solid #fff"
            /> */}
            <ImageAnimation />
            <Button variantColor="teal" m="2rem 0 0 5rem" fontWeight="Bold">
              Download CV
            </Button>
          </Box>
        </Stack>
        <Technicalskil />
        <Softskills />
        <Divider
          orientation="horizontal"
          borderColor="rgb(233, 78, 27)"
          border="2px"
          opacity="2"
          my="2rem"
        />
        <Box as="div" textAlign="center" mb="3rem">
          <Text as="p" fontSize="1.3rem" fontFamily="Courier Prime">
            Dear recruiters, you can find my up-to-date CV as a PDF file by
            clicking the button below my picture.
          </Text>
        </Box>
        <Box
          p="0"
          m="0"
          bg="#fff"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        ></Box>
      </Box>
    </>
  );
}
