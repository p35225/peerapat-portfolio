import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '@/components/Filter';
import { skills } from '../../data/skills';
import { Button, Collapse, Box, Image, Text, PseudoBox } from '@chakra-ui/core';

export default function Softskills() {
  const [filter, setFilter] = useState('');
  const skillCategories = Object.keys(skills);
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
        bg="#f1c40f"
        color="#000"
        borderRadius="10px"
        onClick={handleToggle}
        display="inline-block"
        fontSize="2rem"
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
          // borderBottom="6px solid #000"
          display="inline-block"
          // lineHeight="1.8269230769rem"
          // mb="1.25rem"
          p=".375rem .75rem .3125rem 1rem"
          bg="#7C5E10"
          color="#fff"
          maxW="165px"
          maxH="99px"
          transform="rotate(-16deg) translateX(-5px)"
        >
          (click!!!!)
        </Text>
        Soft skills
      </PseudoBox>
      <Collapse mt={4} isOpen={show}>
        <Box as="div" display="flex" flexDirection="row" flexWrap="wrap">
          <Box as="main" w="70%" minW="280px" flexGrow="1" m="8px 0">
            {[
              'Able to handle priority',
              'Problem solving',
              'Creative thinking',
              'Flexible and adaptive'
            ].map((item, index) => (
              <Box
                as="span"
                display="inline-block"
                p="0.25rem 0.5rem"
                m="0 0.5rem 0.5rem"
                borderRadius="99px"
                color="#fff"
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
