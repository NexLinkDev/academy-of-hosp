import Container from "@/shared/ui/Container/Container";
import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import { Box, Heading, Text } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard/ReviewCard";
import { REVIEWS_DATA } from "./consts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.css";

const Reviews = () => {
  return (
    <Container>
      <Box textAlign={"center"} p={"160px 0"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #8C5EDB"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          color={"black"}
        >
          Отзывы
        </Text>

        <Heading
          as={"h2"}
          fontWeight={500}
          fontSize={{ base: "37px", md: "50px" }}
          lineHeight={{ base: "40px", md: "53px" }}
          color={"#101010"}
          m={"20px 0 40px"}
        >
          {HighlightText({
            text: `Отзывы тех, кто уже прошёл \n обучение и начал карьеру`,
            highlight: "Отзывы тех,",
            color: "#969493",
          })}
        </Heading>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{ display: "flex", gap: "140px" }}
          slidesPerView={3}
          spaceBetween={20}
          loop
          className="reviews-swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
          }}
        >
          {REVIEWS_DATA.map((review) => (
            <SwiperSlide>
              <ReviewCard data={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Reviews;
