import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import lobstekSvg from "@/shared/assets/images/svg/lobstek.svg";
import Container from "@/shared/ui/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { VIDEO_DATA } from "./consts";
import VideoPreview from "./ui/VideoCard/VideoPreview";
import { useState } from "react";
import arrowRight from "@/shared/assets/images/svg/videoRight.svg";
import arrowLeft from "@/shared/assets/images/svg/videoLeft.svg";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  return (
    <>
      <Container>
        <VStack textAlign={"center"}>
          <Text
            borderRadius={"100px"}
            border={"1px solid #8C5EDB"}
            padding={"11px 20px"}
            display={"inline-block"}
            fontSize={"18px"}
            fontWeight={400}
            color={"black"}
          >
            Как проходит наше обучение
          </Text>

          <Heading
            fontWeight={500}
            fontSize={{ base: "37px", md: "50px" }}
            lineHeight={{ base: "40px", md: "53px" }}
            color={"#101010"}
            m={"20px 0 40px"}
          >
            {HighlightText({
              text: `Учитесь через практику, отрабатывайте навыки, проходите стажировку с уверенным стартом профессии`,
              highlight: "с уверенным стартом профессии",
              color: "#969493",
            })}
          </Heading>

          <Text
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"130%"}
            color={"#212121"}
            maxW={"580px"}
          >
            У нас есть партнёрства со многими отелями мира, кафе и международной
            платформой Lobster Ink
          </Text>

          <Image
            m={"20px 0 40px"}
            src={lobstekSvg}
            w={{ base: "185px", md: "245px" }}
            h={{ base: "37px", md: "50px" }}
          />
        </VStack>
      </Container>
      <Box position="relative" height={"437px"}>
        <Image
          src={arrowLeft}
          position="absolute"
          left="calc(50% - 60px)"
          bottom={{ base: "-30px", md: "-100px" }}
          cursor="pointer"
          zIndex={2}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Image
          src={arrowRight}
          position="absolute"
          right="calc(50% - 60px)"
          bottom={{ base: "-30px", md: "-100px" }}
          cursor="pointer"
          zIndex={2}
          onClick={() => swiperRef.current?.slideNext()}
        />

        <Swiper
          slidesPerView={1.9}
          spaceBetween={20}
          centeredSlides={true}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.05,
            },
            480: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            992: {
              slidesPerView: 1.9,
            },
          }}
        >
          {VIDEO_DATA.map((video, index) => (
            <SwiperSlide key={index}>
              <VideoPreview
                label={video.title}
                src={video.preview}
                id={video.id}
                activeSlide={activeIndex === video.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Videos;
