import { PropsWithChildren } from "react";

interface MpSocialIconProps {
  title: string;
  url: string;
}

export function MpSocialIcon(props: PropsWithChildren<MpSocialIconProps>) {
  const { children, url, title } = props;

  return <a  
    title={title}
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="fill-white">{children}</i>
  </a>
}