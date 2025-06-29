import ArrowUpRightIcon from "@/shared/assets/images/icons/ArrowUpRightIcon";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ISignBtnProps extends ButtonProps {
  color: string;
  iconSize?: number;
  children?: string;
  bg: string;
}

const SignBtn = ({
  color,
  iconSize = 24,
  bg,
  children = "Записаться на курс",
  ...props
}: ISignBtnProps) => {
  return (
    <Button
      fontSize="18px"
      fontWeight={500}
      borderRadius="100px"
      bg={bg}
      color={color}
      width="100%"
      height="54px"
      {...props}
    >
      <ArrowUpRightIcon size={iconSize} color={color} />
      {children}
    </Button>
  );
};

export default SignBtn;
