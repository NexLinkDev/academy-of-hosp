import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import GradientText from "@/shared/ui/GradientText/GradientText";

interface CircularTextProps {
  size?: number;
  textSize?: number;
}

const CircularText: React.FC<CircularTextProps> = ({
  size = 300,
  textSize = 16,
}) => {
  const radius = size / 2 - textSize;

  return (
    <Box w={`${size}px`} h={`${size}px`} position={"relative"}>
      <svg width={size} height={size}>
        <defs>
          <path
            id="circlePath"
            d={`
              M ${size / 2},${size / 2}
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="none"
          />
        </defs>
        <text
          fontSize={textSize}
          fill="#999"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            быстро, просто начни карьеру в HoReCa - быстро, просто начни карьеру
            в HoReCa -
          </textPath>
        </text>
      </svg>

      <VStack
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%) rotate(-30deg)"}
        transformOrigin="center"
        gap={"10px"}
      >
        <GradientText
          textAlign={"center"}
          fontSize={"30px"}
          fontWeight={500}
          gradient="linear-gradient(90deg, #C85EDC -42%, #8C5EDB 73.38%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));"
        >
          2,000
        </GradientText>
        <Box height={"1px"} width={"100%"} bg={"#D3D1D1"}></Box>
        <Text fontWeight={500} fontSize={"12px"} textAlign={"center"}>
          положительных отзывов
        </Text>
      </VStack>
    </Box>
  );
};

export default CircularText;
