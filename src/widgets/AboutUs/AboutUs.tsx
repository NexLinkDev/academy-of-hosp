import Container from "@/shared/ui/Container/Container";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import AboutUsHeader from "./ui/AboutUsHeader/AboutUsHeader";
import AboutUsCard from "./ui/AboutUsCard/AboutUsCard";
import { ABOUT_CARDS } from "./consts";

const AboutUs = () => {
  return (
    <Container>
      <Box p={"160px 0 0 0"}>
        <Text
          borderRadius={"100px"}
          border={"1px solid #C85EDC"}
          padding={"11px 20px"}
          display={"inline-block"}
          fontSize={"18px"}
          fontWeight={400}
          mb={"30px"}
          color={"white"}
        >
          Немного о нас
        </Text>

        <AboutUsHeader />

        <Grid mt={"40px"} templateColumns="repeat(2, 1fr)" gap="20px">
          {ABOUT_CARDS.map((card) => (
            <GridItem colSpan={Array.isArray(card.list) ? 2 : 1}>
              <AboutUsCard data={card} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
