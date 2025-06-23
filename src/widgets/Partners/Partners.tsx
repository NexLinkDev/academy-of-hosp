import { Box, Image, Text, VStack } from "@chakra-ui/react";
import greenPng from "@/shared/assets/images/png/greenBg.png";
import Container from "@/shared/ui/Container/Container";
import { PARTNER_ICONS } from "./consts";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <Container>
      <VStack
        bg={`url(${greenPng})`}
        backgroundPosition={"right"}
        borderRadius={"25px"}
        padding={"74px 0 30px"}
        textAlign={"center"}
      >
        <Text
          maxWidth={"800px"}
          lineHeight={"130%"}
          color={"white"}
          fontWeight={400}
          fontSize={"36px"}
        >
          У нас есть партнёрства со многими отелями мира, кафе и международной
          платформой
          <Text as={"span"} display={"block"} fontWeight={700}>
            Lobster Ink
          </Text>
        </Text>

        <Image
          src={PARTNER_ICONS.main}
          width={"280px"}
          height={"85px"}
          m={"60px 0"}
        />

        <Text
          maxWidth={"800px"}
          color={"white"}
          fontWeight={500}
          fontSize={"22px"}
          mb={"20px"}
        >
          Международная онлайн-платформа Lobster Ink. используется в таких
          мировых компаниях как:
        </Text>

        <Box className="marquee-block">
          <Marquee
            speed={100}
            pauseOnHover={false}
            pauseOnClick
            gradient={false}
          >
            {PARTNER_ICONS.companies.map((company) => (
              <Image
                m={"0 10px"}
                src={company}
                height={"85px"}
                objectFit={"contain"}
              />
            ))}
          </Marquee>
        </Box>
      </VStack>
    </Container>
  );
};

export default Partners;
