import { Box, Grid } from "@chakra-ui/react";
import RadioCard from "./ui/RadioCard/RadioCard";
import { useState } from "react";

const options = [
  "Хаускипинг",
  "Официант",
  "Бармен",
  "Бариста",
  "Сотрудник ресепшена",
];

const DefaultRadioBlock = () => {
  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <Grid gap={"16px"} templateColumns="repeat(4, 1fr)">
      {options.map((value, index) => {
        let span = 1;

        if (index < 2) span = 2; // первые 2 — по 50%
        else if (index === 4) span = 2; // последний в 3-й строке — 50%

        return (
          <Box key={value} gridColumn={`span ${span}`}>
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
