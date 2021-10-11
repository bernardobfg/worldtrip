import { Center, Flex, Heading, Text } from "@chakra-ui/react"
import { SwiperSlide } from "swiper/react";

import "swiper/css";

interface SliderProps {
  bg: string;
  heading: string;
  text: string;
}

export function Slider({ bg, heading, text }: SliderProps) {
  return (
    <SwiperSlide>
      <Center w="1250" h="450" bg={`url(${bg})`} bgSize="cover">
        <Flex direction="column" align="center">
          <Heading fontSize="48px" color="gray.100">{heading}</Heading>
          <Text fontSize="24px" color="gray.200">{text}</Text>
        </Flex>
      </Center>
    </SwiperSlide>
  )
}