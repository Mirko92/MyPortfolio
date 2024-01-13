import { PropsWithChildren } from "react";

interface MpIconProps {
  title: string;
  url: string;
}

export function MpIcon(props: PropsWithChildren<MpIconProps>) {
  const { children, url } = props;

  return <a  
    title="Linkedin Icon" 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="fill-white">{children}</i>
  </a>
}