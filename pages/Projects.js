import React from 'react';
import Navbar from '@/components/Navbar';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { ProjectsData } from '../data/ProjectsData';
import ProjectCom from '@/components/projectCom';

export default function Projects() {
  const projects = ProjectsData;

  return (
    <>
      <Navbar />
      <Box w="1140px" maxW="94%" m="0 auto">
        <Heading
          my="3rem"
          as="h1"
          display="flex"
          lineHeight="1.8269230769rem"
          fontSize="60px"
          justifyContent="center"
        >
          Projects
        </Heading>

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          className="flex-project"
          maxW="100%"
        >
          {projects.map((pro) => (
            <ProjectCom
              key={pro.id}
              name={pro.Name}
              type={pro.Type}
              desc={pro.Description}
              tools={pro.Tools}
              img={pro.Image}
              link={pro.Link}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}
