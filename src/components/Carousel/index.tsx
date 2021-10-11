import { Box, Center, Heading } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
import {Slider} from "./slider"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
SwiperCore.use([Pagination, Navigation]);


export function Carousel() {
  return (
    <Box w={["90vw","90vw", "90vw","1000px","1000px"]} mb="40px">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable":
            true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider bg="Europe.png" heading="Europa" text="O mais antigo dos continentes" href="europa"/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider bg="Africa.jpg" heading="África" text="Conheça a história desse enorme continente" href="africa"/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider bg="Asia.jpg" heading="Ásia" text="Um local cheio de cultura" href="asia"/>
   
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}