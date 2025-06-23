import type { ReactNode } from "react";

import { chakra } from "@chakra-ui/react";

import { splitString } from "./split-string";

interface HighlightedTextParams {
  text: string;
  highlight: string | string[];
  color?: string;
}

export const HighlightText = ({
  text,
  highlight,
  color,
}: HighlightedTextParams): ReactNode => {
  if (!highlight || (Array.isArray(highlight) && highlight.length === 0)) {
    return splitString(text);
  }

  const highlightArray = Array.isArray(highlight) ? highlight : [highlight];

  const escaped = highlightArray.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) => {
    const highlighted = highlightArray.some(
      (h) => part.toLowerCase() === h.toLowerCase()
    );

    const splitParts = splitString(part);

    return highlighted ? (
      <chakra.span key={index} color={color || "#040404"}>
        {splitParts}
      </chakra.span>
    ) : (
      splitParts
    );
  });
};
