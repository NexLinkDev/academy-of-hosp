import { Heading, Text, TextProps } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface GradientTextProps extends TextProps {
  gradient?: string;
  children: React.ReactNode;
  heading?: ElementType;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = "linear(to-r, teal.500, green.500)",
  heading,
  ...props
}) => {
  return (
    <>
      {heading ? (
        <Heading
          as={heading}
          bgGradient={gradient}
          bgClip="text"
          fontWeight="bold"
          lineHeight={"100%"}
          {...props}
        >
          {children}
        </Heading>
      ) : (
        <Text
          lineHeight={"100%"}
          bgGradient={gradient}
          bgClip="text"
          fontWeight="bold"
          {...props}
        >
          {children}
        </Text>
      )}
    </>
  );
};

export default GradientText;
