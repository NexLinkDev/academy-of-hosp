import { Box, Image, Button, Text } from "@chakra-ui/react";
import defaultImg from "@/shared/assets/images/png/video/first.jpg";
import playImg from "@/shared/assets/images/svg/play.svg";

interface IVideoPreview {
  src: string;
  label: string;
  id: number;
  activeSlide: boolean;
}

const VideoPreview = ({ src, label, activeSlide }: IVideoPreview) => {
  return (
    <Box
      position="relative"
      width={"100%"}
      height={{
        base: "353px",
        md: activeSlide ? "437px" : "366px",
      }}
      mt={{ base: 0, md: `${!activeSlide ? 437 - 366 : 0}px` }}
      borderRadius="20px"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
    >
      <Image
        src={src || defaultImg}
        alt="Video preview"
        objectFit="cover"
        width="100%"
        height="100%"
        userSelect="none"
      />

      {/* Метка */}
      <Text
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="26px"
        left="26px"
        bg="white"
        color="black"
        borderRadius="full"
        p="15px 50px"
        fontWeight="medium"
        fontSize="14px"
        boxShadow="md"
      >
        {label}
      </Text>

      {/* Кнопка Play */}
      <Button
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.7)"
        _hover={{ bg: "rgba(255, 255, 255, 0.9)" }}
        boxShadow="md"
        p="20px 20px 20px 27px"
        minW="auto"
        w={"90px"}
        height={"90px"}
      >
        <Image
          objectFit={"contain"}
          src={playImg}
          width={"41px"}
          height={"41px"}
        />
      </Button>
    </Box>
  );
};

export default VideoPreview;
