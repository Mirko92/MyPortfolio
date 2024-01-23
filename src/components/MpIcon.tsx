import { HtmlHTMLAttributes, PropsWithChildren } from "react";

interface MpIconProps extends HtmlHTMLAttributes<any> {
}

const ICON_CSS = "material-symbols-outlined";

export function MpIcon(props: PropsWithChildren<MpIconProps>) {
  const { children, className, ...other } = props;
  
  return <span
      className={ICON_CSS + " " + className}
      {...other}
    >
      {children}
    </span>;
}
