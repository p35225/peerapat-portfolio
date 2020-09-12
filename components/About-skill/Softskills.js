import React, { useState } from 'react';
import { skills } from '../../data/skills';
import { Collapse, Box, Text, PseudoBox } from '@chakra-ui/core';

export default function Softskills() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      m="2rem 0"
      borderRadius="10px"
      border="2px solid #555"
      boxShadow="5px 5px 0 #555"
      as="section"
    >
      <PseudoBox
        as="button"
        bg="#F7C948"
        color="#000"
        borderRadius="10px"
        onClick={handleToggle}
        display="inline-block"
        fontSize="2rem"
        fontFamily="Roboto"
        p="5px"
        fontWeight="Bold"
        _hover={{
          transition: 'all 0.3s ease-out',
          backgroundColor: '#92FDF2'
        }}
      >
        <Text
          as="p"
          fontWeight="Normal"
          display="inline-block"
          p=".375rem .75rem .3125rem 1rem"
          bg="#7C5E10"
          color="#fff"
          maxW="165px"
          maxH="99px"
          transform="rotate(-16deg) translateX(-5px)"
        >
          (click!!!!)
        </Text>
        <span style={{ margin: '0 1rem' }}>Soft skills</span>
      </PseudoBox>
      <Collapse mt={4} isOpen={show}>
        <Box as="div" display="flex" flexDirection="row" flexWrap="wrap">
          <Box as="main" w="70%" minW="280px" flexGrow="1" m="8px 0">
            {[
              'Able to handle priority',
              'Problem solving',
              'Willing to learn new technology',
              'Flexible and adaptive',
              'Well-organised person'
            ].map((item, index) => (
              <Box
                as="span"
                display="inline-block"
                p="0.25rem 0.5rem"
                m="0 0.5rem 0.5rem"
                borderRadius="99px"
                color="#fff"
                fontSize="1.1rem"
                key={`softskill-${index + 1}`}
                className="--softskill"
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
