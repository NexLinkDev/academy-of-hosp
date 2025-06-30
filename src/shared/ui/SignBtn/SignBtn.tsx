import ArrowUpRightIcon from "@/shared/assets/images/icons/ArrowUpRightIcon";
import { useModal } from "@/shared/store/SignModal";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ISignBtnProps extends ButtonProps {
  color: string;
  iconSize?: number;
  children?: string;
  bg: string;
  handleSubmit?: () => void;
}

const SignBtn = ({
  color,
  iconSize = 24,
  bg,
  children = "Записаться на курс",
  handleSubmit,
  ...props
}: ISignBtnProps) => {
  const { onOpen } = useModal();

  return (
    <Button
      onClick={handleSubmit || onOpen}
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
