import React from 'react';
import { Box, List, ListItem, Icon, PseudoBox, Link } from '@chakra-ui/core';
import Zoom from 'react-medium-image-zoom';

const ProjectCom = ({ name, type, desc, tools, img, key, link }) => {
  return (
    <List
      as="ul"
      w="850px"
      my="3rem"
      display="flex"
      id={`${key}`}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <ListItem as="li" float="left" className="list-image">
        <Zoom>
          <img
            alt="myProject"
            src={img}
            style={{
              width: '300px',
              height: '300px'
            }}
          />
        </Zoom>
      </ListItem>
      <Box className="list-Info" w="550px" bg="#fff">
        <ListItem
          as="li"
          bg="#fff"
          color="#000"
          fontWeight="bold"
          fontFamily="Roboto"
          fontSize="1.8rem"
          m="1rem 1rem 1rem 1rem"
        >
          <Icon
            name="check-circle"
            mr="1rem"
            mb="0.3rem"
            color="whatsapp.500"
          />
          {name}
        </ListItem>

        {/* <Divider bg="#000" /> */}
        <ListItem
          as="li"
          bg="#fff"
          color="#000"
          fontSize="1.4rem"
          fontFamily="Roboto"
          ml="1rem"
          // ml="2rem"
        >
          Type: {type}
        </ListItem>
        <ListItem
          as="li"
          bg="#fff"
          color="#000"
          fontSize="1.4rem"
          justifyContent="center"
          fontFamily="Roboto"
          mx="1rem"
        >
          Description: {desc}
        </ListItem>
        <ListItem
          as="li"
          bg="#fff"
          color="#000"
          fontSize="1.4rem"
          fontWeight="medium"
          fontFamily="Roboto"
          ml="1rem"
          mt="1rem"
          mb="1rem"
        >
          Tools: {tools}
        </ListItem>
        <Link href={link} isExternal float="right" mr="50px">
          <Btnp1 />
        </Link>
      </Box>
    </List>
  );
};

export default ProjectCom;

function Btnp1() {
  return (
    <PseudoBox
      as="button"
      verticalAlign="middle"
      border="none"
      outline="none"
      backgroundImage="linear-gradient(90deg, #e41256 0%, #ffa337 51%, #e41256 100%)"
      textAlign="center"
      backgroundSize="200% auto"
      borderRadius="5px"
      color="#fff"
      p="10px 30px"
      mb="10px"
      fontSize="18px"
      fontWeight="bold"
      transition="all .4s ease"
      _hover={{
        color: '#fff',
        backgroundPosition: 'right center'
      }}
    >
      Github
    </PseudoBox>
  );
}
