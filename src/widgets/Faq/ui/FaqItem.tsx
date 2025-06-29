import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import arrowRight from "@/shared/assets/images/svg/arrowRight.svg";

interface IFaqItemProps {
  data: {
    id: number;
    question: string;
    answer: string;
  };
  handleOpen: (id: number) => void;
  isOpen: number | null;
}

const MotionBox = motion(Box);

const FaqItem = ({ data, handleOpen, isOpen }: IFaqItemProps) => {
  const isOpened = isOpen === data.id;

  return (
    <Box
      cursor="pointer"
      borderRadius="25px"
      bg="#F8F8F8"
      p="20px"
      w="80%"
      onClick={() => handleOpen(data.id)}
      transition="all 0.3s ease"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize="18px" fontWeight={500} as="h5">
          {data.question}
        </Heading>
        <Image
          src={arrowRight}
          w="20px"
          h="20px"
          objectFit="contain"
          transform={isOpened ? "rotate(90deg)" : "rotate(0deg)"}
          transition="transform 0.3s ease"
        />
      </Flex>

      <AnimatePresence>
        {isOpened && (
          <MotionBox
            key="answer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            mt="20px"
          >
            <Text
              textAlign="start"
              fontSize="16px"
              fontWeight={400}
              color="#737373"
            >
              {data.answer}
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default FaqItem;
