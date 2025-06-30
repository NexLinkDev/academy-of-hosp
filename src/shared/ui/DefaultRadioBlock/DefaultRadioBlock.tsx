import { Box, Grid } from "@chakra-ui/react";
import RadioCard from "./ui/RadioCard/RadioCard";
import { Dispatch, SetStateAction } from "react";

const options = [
  "Хаускипинг",
  "Официант",
  "Бармен",
  "Бариста",
  "Сотрудник ресепшена",
];

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const DefaultRadioBlock = ({ selected, setSelected }: Props) => {
  return (
    <Grid gap={"16px"} templateColumns="repeat(4, 1fr)" w={"100%"}>
      {options.map((value, index) => {
        let span = 1;

        if (index < 2) span = 2; // первые 2 — по 50%
        else if (index === 4) span = 2; // последний в 3-й строке — 50%

        return (
          <Box
            key={value}
            gridColumn={{
              base: "span 4",
              sm: index === 2 || index === 3 ? `span ${2}` : "span 4",
              md: `span ${span}`,
            }}
          >
            <RadioCard
              value={value}
              setSelected={setSelected}
              isChecked={selected === value}
            />
          </Box>
        );
      })}
    </Grid>
  );
};

export default DefaultRadioBlock;
