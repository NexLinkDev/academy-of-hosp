import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import couresImg from "@/shared/assets/images/png/firstCourse.jpg";
import { COURSE_CARDS, ICOURSE_CARDS } from "../../consts";

interface ICoursesCardProps {
  data: ICOURSE_CARDS;
}

const CoursesCard = ({ data }: ICoursesCardProps) => {
  return (
    <Flex
      bg={"#F8F8F8"}
      borderRadius={"40px"}
      height={"450px"}
      width={"1100px"}
    >
      <Box flex={"0 0 450px"} position={"relative"}>
        <Image
          src={couresImg}
          width={"100%"}
          height={"100%"}
          borderRadius={"40px"}
        />

        <Button
          fontWeight={500}
          fontSize={"18px"}
          height={"54px"}
          position={"absolute"}
          bottom={"26px"}
          left={"26px"}
          borderRadius={"100px"}
          bg={"white"}
          color={"black"}
          width={"calc(100% - 57px)"}
        >
          Записаться на курс
        </Button>
      </Box>

      <Flex
        p={"30px"}
        textAlign={"start"}
        direction={"column"}
        alignItems={"start"}
      >
        <Heading color={"#000000"} fontWeight={500} fontSize={"32px"} as={"h4"}>
          {data.title}
        </Heading>
        <Text
          fontWeight={500}
          fontSize={"17px"}
          color={"#737373"}
          m={"10px 0 50px"}
        >
          {HighlightText({
            text: data.text,
            highlight: data.highlight,
          })}
        </Text>

        <Grid templateColumns={"repeat(2, minmax(280px, 1fr))"} gap={"20px"}>
          {COURSE_CARDS[0].services.map((service) => (
            <Flex
              h={"80px"}
              bg={"#FFFFFF"}
              borderRadius={"60px"}
              p={"5px"}
              alignItems={"center"}
              gap={"12px"}
            >
              <Box
                borderRadius={"50%"}
                w={"70px"}
                flex={"0 0 60px"}
                h={"60px"}
                bg={"#212121"}
                position={"relative"}
              >
                <Image
                  src={service.icon}
                  w={"24px"}
                  h={"24px"}
                  objectFit={"contain"}
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={"translate(-50%, -50%)"}
                />
              </Box>

              <Flex direction={"column"} gap={"5px"}>
                <Text color={"#737373"} fontWeight={400} fontSize={"16px"}>
                  {service.title}
                </Text>
                <Text color={"#000000"} fontWeight={400} fontSize={"18px"}>
                  {service.value}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CoursesCard;
