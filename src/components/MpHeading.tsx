import { PropsWithChildren, createElement } from "react";

interface MpHeadingProps {
  level: 1|2|3|4|5|6;
}

const HEADING_CSS_MAP = {
  1 : "text-4xl",
  2 : "text-3xl",
  3 : "text-2xl",
  4 : "text-xl",
  5 : "font-bold",
  6 : "",
}

export function MpHeading(props: PropsWithChildren<MpHeadingProps>) {
  const { children, level } = props;

  const headingEl = createElement(
    `h${level}`,
    {
      className: HEADING_CSS_MAP[level]
    },
    children
  );

  return headingEl;
}
