import { HighlightText } from "@/shared/utils/Highlighter/high-light-text";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import couresImg from "@/shared/assets/images/png/firstCourse.jpg";
import { ICOURSE_CARDS } from "../../consts";
import SignBtn from "@/shared/ui/SignBtn/SignBtn";

interface ICoursesCardProps {
  data: ICOURSE_CARDS;
}

const CoursesCard = ({ data }: ICoursesCardProps) => {
  return (
    <Flex
      bg={"#F8F8F8"}
      borderRadius={"40px"}
      width={{ base: "auto", xl: "1100px" }}
      direction={{ base: "column", xl: "row" }}
    >
      <Box
        flex={"0 0 450px"}
        h={{ base: "330px", xl: "450px" }}
        w={{ base: "100%", xl: "450px" }}
        position={"relative"}
      >
        <Image
          src={data.img || couresImg}
          width={"100%"}
          height={"100%"}
          borderRadius={"40px"}
        />

        <SignBtn
          position={"absolute"}
          bottom={"26px"}
          left={"26px"}
          color="black"
          bg="white"
          width={"calc(100% - 57px)"}
        />
      </Box>

      <Flex
        p={"30px"}
        textAlign={"start"}
        direction={"column"}
        alignItems={"start"}
      >
        <Heading
          color={"#000000"}
          fontWeight={500}
          fontSize={{ base: "30px", md: "32px" }}
          as={"h4"}
        >
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

        <Grid
          w={"100%"}
          templateColumns={{
            base: "1",
            md: "repeat(2, minmax(280px, 1fr))",
          }}
          gap={"20px"}
        >
          {data.services.map((service) => (
            <GridItem>
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
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CoursesCard;
