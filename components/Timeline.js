import React from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/core';

export default function Timeline() {
  return (
    <Box
      as="section"
      overflow="hidden"
      flexWrap="wrap"
      display="flex"
      fontFamily="Rubik"
    >
      <List
        as="ul"
        className="timeline"
        position="relative"
        w="660px"
        m="0 auto"
        p="1em 0"
        listStyleType="none"
      >
        <ListItem as="li" my="2rem">
          <Text
            as="span"
            className="direction-l-t"
            display="relative"
            p="6px 0"
            fontWeight="Bold"
            fontSize="1.35rem"
          >
            Nov 2020 - 2021
          </Text>
          <Box as="div" className="direction-r" position="relative" w="300px">
            <Box
              as="div"
              className="flag-wrapper"
              position="relative"
              display="flex"
              textAlign="center"
              justifyContent="flex-start"
            >
              <Text
                as="span"
                className="flag"
                position="relative"
                display="inline"
                p="6px 10px"
                fontSize="1.5rem"
                fontWeight="Bold"
                textAlign="right"
              >
                IT One Co., Ltd
              </Text>
            </Box>
            <Box
              as="div"
              className="desc"
              mx="3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Start working for Customer Services Team (CS)
            </Box>
            <Box
              as="div"
              className="desc"
              m="1rem 3rem"
              fontSize="1.1rem"
              fontWeight="Bold"
              lineHeight="1.5em"
            >
              Job Position: Application Development Analyst
            </Box>
          </Box>
        </ListItem>

        <ListItem as="li" my="3rem">
          <Text
            as="span"
            className="direction-r-t"
            mt="1rem"
            display="relative"
            pt="6px"
            fontWeight="Bold"
            fontSize="1.35rem"
          >
            2020
          </Text>
          <Box as="div" className="direction-l" position="relative" w="300px">
            <Box
              as="div"
              className="flag-wrapper"
              position="relative"
              display="flex"
              textAlign="center"
              justifyContent="flex-start"
            >
              <Text
                as="span"
                className="flag"
                position="relative"
                display="inline"
                p="6px 10px"
                // borderRadius="5px"
                fontWeight="Bold"
                fontSize="1.5rem"
                textAlign="left"
              >
                Graduated from SIIT | Thammasat University
              </Text>
            </Box>
            <Box
              as="div"
              className="desc"
              mx="3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Computer Engineering Major
            </Box>
            <Box
              as="div"
              className="desc"
              m="1rem 3rem"
              fontSize="1.2rem"
              lineHeight="1.5em"
              fontWeight="Bold"
            >
              GPAX: 2.52
            </Box>
          </Box>
        </ListItem>

        <ListItem as="li" my="2rem">
          <Text
            as="span"
            className="direction-l-t"
            display="relative"
            p="6px 0"
            fontWeight="Bold"
            fontSize="1.35rem"
          >
            June – July 2019
          </Text>
          <Box as="div" className="direction-r" position="relative" w="300px">
            <Box
              as="div"
              className="flag-wrapper"
              position="relative"
              display="flex"
              textAlign="center"
              justifyContent="flex-start"
            >
              <Text
                as="span"
                className="flag"
                position="relative"
                display="inline"
                p="6px 10px"
                fontSize="1.5rem"
                fontWeight="Bold"
                textAlign="right"
              >
                Intern at Cat Telecom
              </Text>
            </Box>
            <Box
              as="div"
              className="desc"
              mx="3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Build real-time object detection project
            </Box>
            <Box
              as="div"
              className="desc"
              m="1rem 3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Making GUI for Count and detect pedestrians cross the line that we
              connect image from CCTV around new building
            </Box>
          </Box>
        </ListItem>

        <ListItem as="li" my="3rem">
          <Text
            as="span"
            className="direction-r-t"
            mt="42px"
            display="relative"
            pt="20px"
            fontWeight="Bold"
            fontSize="1.35rem"
          >
            2016-2020
          </Text>
          <Box as="div" className="direction-l" position="relative" w="300px">
            <Box
              as="div"
              className="flag-wrapper"
              position="relative"
              display="flex"
              textAlign="center"
              justifyContent="flex-start"
            >
              <Text
                as="span"
                className="flag"
                position="relative"
                display="inline"
                p="6px 10px"
                // borderRadius="5px"
                fontWeight="Bold"
                fontSize="1.5rem"
                textAlign="left"
              >
                Sirindhorn International Institute of Technology (SIIT) |
                Thammasat University
              </Text>
            </Box>
            <Box
              as="div"
              className="desc"
              mx="3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Bachelor of Engineering (International Program) – Computer
              Engineering Major
            </Box>
          </Box>
        </ListItem>

        <ListItem as="li" my="2rem">
          <Text
            as="span"
            className="direction-l-t"
            display="relative"
            pt="6px"
            fontWeight="Bold"
            fontSize="1.35rem"
          >
            2010 - 2016
          </Text>
          <Box as="div" className="direction-r" position="relative" w="300px">
            <Box
              as="div"
              className="flag-wrapper"
              position="relative"
              display="flex"
              textAlign="center"
              justifyContent="flex-start"
            >
              <Text
                as="span"
                className="flag"
                position="relative"
                display="inline"
                p="6px 10px"
                // borderRadius="5px"
                fontWeight="Bold"
                fontSize="1.5rem"
                textAlign="left"
              >
                Satriwittaya 2 school
              </Text>
            </Box>
            <Box
              as="div"
              className="desc"
              m="0 3rem"
              fontSize="1.1rem"
              lineHeight="1.5em"
            >
              Graduated high school
            </Box>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

{
  /* <Box
      as="section"
      //   position="relative"
      //   overflow="hidden"
      // mt="50px"
      bg="#000"
      // p="80px 50px"
    >
      <ul class="timeline">
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">
                Sirindhorn International Institute of Technology (SIIT) |
                Thammasat University
              </span>
              <span class="time-wrapper">
                <span class="time">2016 – 2020</span>
              </span>
            </div>
            <div class="desc">
              My current employment. Way better than the position before!
            </div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Intern at Cat Telecom</span>
              <span class="time-wrapper">
                <span class="time">June – July 2019</span>
              </span>
            </div>
            <div class="desc">
              My first employer. All the stuff I've learned and projects I've
              been working on.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Satriwittaya 2 school</span>
              <span class="time-wrapper">
                <span class="time">2010 - 2016</span>
              </span>
            </div>
            <div class="desc">
              A description of all the lectures and courses I have taken and my
              final degree?
            </div>
          </div>
        </li>
      </ul>
    </Box> */
}
