import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/core';

export default function ImageAnimation() {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.2
        }
      }}
    >
      <Image
        rounded="full"
        size="300px"
        maxH="300px"
        maxW="300px"
        src="/myimg.jpg"
        alt="myself"
        border="5px solid #fff"
      />
    </motion.div>
  );
}
