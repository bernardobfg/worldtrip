import { Center, Flex, Heading, Text } from "@chakra-ui/react"
import { SwiperSlide } from "swiper/react";
import  Link  from "next/link";
import "swiper/css";

interface SliderProps {
  bg: string;
  heading: string;
  text: string;
  href: string;
}

export function Slider({ bg, heading, text, href }: SliderProps) {
  return (
    <SwiperSlide>
      <Center w={["90vw","90vw", "90vw","1000px","1000px"]} h={["350px", "450px"]} bg={`url(${bg})`} bgSize="cover">
        <Link href={`continentes/${href}`}>
        <Flex direction="column" align="center" cursor="pointer">
          <Heading align="center" fontSize={["36","48px"]} color="gray.100">{heading}</Heading>
          <Text maxWidth="80%" align="center" fontSize={["20px", "24px"]} color="gray.200">{text}</Text>
        </Flex>
        </Link>
      </Center>
    </SwiperSlide>
  )
}