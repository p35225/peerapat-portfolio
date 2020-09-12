import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
  Box,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  PseudoBox,
  Link
} from '@chakra-ui/core';
import Technicalskil from '@/components/About-skill/Technicalskill';
import Softskills from '@/components/About-skill/Softskills';
import LinkContacts from '@/components/LinkContacts';
import ImageAnimation from '@/components/ImageAnimation';
import Counter from '@/components/Counter';
import Timeline from '@/components/Timeline';

export default function about() {
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
          lineHeight="1.8269230769rem"
          mb="1.25rem"
          p=".375rem .75rem .65rem 1rem"
          bg="#37bd2e"
          transform="rotate(-4deg) translateX(-5px)"
          ml="3rem"
          fontSize="60px"
        >
          Personal info.
        </Heading>
        <Stack isInline flexWrap="wrap" justify="center">
          <Box
            maxH="281px"
            display="flex"
            m="2rem 0"
            borderRadius="10px"
            border="2px solid #F7C948"
            boxShadow="5px 5px 0 #F7C948"
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
              I'm Developer and Gamer
            </Heading>
            <Text
              fontFamily="Courier Prime"
              fontSize="1.5rem"
              fontWeight="Bold"
              lineHeight="1.9791666667rem"
              pl="20px"
            >
              <span style={{ padding: '0 0 0 30px' }}>Welcome, everyone</span>{' '}
              to see my portfolio. I'm{' '}
              <span style={{ borderBottom: '2px solid #fff' }}>
                Peerapat Chanawanno
              </span>
              , i only a person who have passionate to coding and interested in
              technology. Fan of Coffee and play video game.
            </Text>
            <Text
              fontFamily="Courier Prime"
              fontSize="1.75rem"
              fontWeight="Bold"
              lineHeight="1.9791666667rem"
              pl="20px"
              my="20px"
              // display="inline-block"
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
            <ImageAnimation />
            <Link
              href="https://www.dropbox.com/s/2dpqsjswedoqgxh/Peerapat_resume.pdf?dl=1"
              isExternal
            >
              <PseudoBox
                as="button"
                verticalAlign="middle"
                border="none"
                outline="none"
                backgroundImage="linear-gradient(90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%)"
                textAlign="center"
                backgroundSize="200% auto"
                borderRadius="5px"
                color="#fff"
                p="10px 30px"
                m="2rem 0 0 4rem"
                fontSize="18px"
                fontWeight="bold"
                transition="all .4s ease"
                _hover={{
                  color: '#fff',
                  backgroundPosition: 'right center'
                }}
              >
                Download CV
              </PseudoBox>
            </Link>
          </Box>
        </Stack>
        <Technicalskil />
        <Softskills />
        <Divider
          orientation="horizontal"
          borderColor="#C52707"
          border="2px"
          opacity="2"
          mt="2.5rem"
        />
        <Counter />
        <Divider
          orientation="horizontal"
          borderColor="#C52707"
          border="2px"
          opacity="2"
          mb="2.5rem"
        />

        <Heading as="h1" fontSize="3rem" textAlign="center" fontFamily="Rubik">
          Timeline
        </Heading>
        <Timeline />

        <Divider
          orientation="horizontal"
          borderColor="#C52707"
          border="2px"
          opacity="2"
          my="3.5rem"
        />
        <Box as="div" textAlign="center" mb="1.5rem">
          <Text as="p" fontSize="1.3rem" fontFamily="Courier Prime" mb="4rem">
            Dear HR, you can find my up-to-date CV as a PDF file by clicking the
            button below my picture.
          </Text>
        </Box>
      </Box>
    </>
  );
}
