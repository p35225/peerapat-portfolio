import React, { useState } from 'react';
import Filter from '@/components/Filter';
import { skills } from '../../data/skills';
import { Collapse, Box, PseudoBox, Text } from '@chakra-ui/core';

export default function Technicalskil() {
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
        <span style={{ margin: '0 1rem' }}>Technical skills</span>
      </PseudoBox>
      <Collapse mt={4} isOpen={show}>
        <Box as="div" display="flex" flexDirection="row" flexWrap="wrap">
          <Box as="main" w="70%" minW="280px" flexGrow="1" m="8px 0">
            <div>
              <div
                style={{
                  padding: '0 0 14px 14px',
                  margin: '0 2rem',
                  fontSize: '1.1rem'
                }}
              >
                Filter:
                {skillCategories.map((skill) => (
                  <Filter
                    key={skill}
                    name={skill}
                    setFilter={setFilter}
                    currentFilter={filter}
                  />
                ))}
              </div>
            </div>
            {skillCategories.map((category) => {
              const cate = skills[category];
              if (filter !== '' && filter !== category) return;
              return cate.map((ability, index) => (
                <Box
                  as="span"
                  display="inline-block"
                  p="0.25rem 0.5rem"
                  m="0 0.5rem 0.5rem"
                  borderRadius="99px"
                  // bg="#333"
                  color="#fff"
                  fontSize="1.10rem"
                  key={`${category}-${index + 1}`}
                  className={`--${category}`}
                >
                  {ability}
                </Box>
              ));
            })}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
