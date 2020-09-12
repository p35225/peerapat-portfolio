import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Stack, Box, PseudoBox, Text } from '@chakra-ui/core';

export default function Counter() {
  const [state, setState] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ startCounter: true });
    }
  };
  return (
    <Stack
      as="section"
      position="relative"
      className="circle-one"
      isInline
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      fontFamily="Rubik"
      py="20px"
    >
      {/* <Box>
        <Box
          as="div"
          className="circle-one__single1"
          boxShadow="0px 20px 60px 0px rgba(42, 40, 51, 0.05)"
          w="220px"
          h="220px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px"
          position="relative"
        >
          <Box
            className="circle-one__inner1"
            as="div"
            w="100%"
            h="100%"
            boxShadow="0px 20px 40px 0px rgba(255, 118, 142, 0.3)"
            borderRadius="50%"
            position="relative"
            bg="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              as="h3"
              className="circle-one__count counter"
              m="0"
              color="#2a2833"
              fontWeight="400"
              fontSize="40px"
              lineHeight="1em"
            >
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={state.startCounter ? 4789 : 0} duration={3} />
              </VisibilitySensor>
            </Text>
            <Text
              as="p"
              className="circle-one__text"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="14px"
              fontWeight="500"
              color="#74727a"
              lineHeight="1em"
              mt="10px"
            >
              coffee
            </Text>
          </Box>
        </Box>
      </Box> */}
      <Box>
        <Box
          as="div"
          className="circle-one__single2"
          boxShadow="0px 20px 60px 0px rgba(42, 40, 51, 0.05)"
          w="220px"
          h="220px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px"
          position="relative"
        >
          <Box
            className="circle-one__inner2"
            as="div"
            w="100%"
            h="100%"
            boxShadow="0px 20px 40px 0px rgba(255, 118, 142, 0.3)"
            borderRadius="50%"
            position="relative"
            bg="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              as="h3"
              className="circle-one__count counter"
              m="0"
              color="#2a2833"
              fontWeight="400"
              fontSize="40px"
              lineHeight="1em"
            >
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={state.startCounter ? 999 : 0} duration={3} />
              </VisibilitySensor>
            </Text>
            <Text
              as="p"
              className="circle-one__text"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="14px"
              fontWeight="500"
              color="#74727a"
              lineHeight="1em"
              mt="10px"
            >
              snack
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          as="div"
          className="circle-one__single3"
          boxShadow="0px 20px 60px 0px rgba(42, 40, 51, 0.05)"
          w="220px"
          h="220px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px"
          position="relative"
        >
          <Box
            className="circle-one__inner3"
            as="div"
            w="100%"
            h="100%"
            boxShadow="0px 20px 40px 0px rgba(255, 118, 142, 0.3)"
            borderRadius="50%"
            position="relative"
            bg="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              as="h3"
              className="circle-one__count counter"
              m="0"
              color="#2a2833"
              fontWeight="400"
              fontSize="40px"
              lineHeight="1em"
            >
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={state.startCounter ? 999 : 0} duration={3} />
              </VisibilitySensor>
            </Text>
            <Text
              as="p"
              className="circle-one__text"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="14px"
              fontWeight="500"
              color="#74727a"
              lineHeight="1em"
              mt="10px"
            >
              cola
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          as="div"
          className="circle-one__single4"
          boxShadow="0px 20px 60px 0px rgba(42, 40, 51, 0.05)"
          w="220px"
          h="220px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px"
          position="relative"
        >
          <Box
            className="circle-one__inner4"
            as="div"
            w="100%"
            h="100%"
            boxShadow="0px 20px 40px 0px rgba(255, 118, 142, 0.3)"
            borderRadius="50%"
            position="relative"
            bg="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              as="h3"
              className="circle-one__count counter"
              m="0"
              color="#2a2833"
              fontWeight="400"
              fontSize="40px"
              lineHeight="1em"
            >
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={state.startCounter ? 999 : 0} duration={3} />
              </VisibilitySensor>
            </Text>
            <Text
              as="p"
              className="circle-one__text"
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="14px"
              fontWeight="500"
              color="#74727a"
              lineHeight="1em"
              mt="10px"
            >
              coffee
            </Text>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
