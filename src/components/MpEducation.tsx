import { ReactElement } from "react";
import { MpGradientText } from "./MpGradientText";

interface MpEducationProps {
  name: string; 
  dateString: string; 
  title: string | ReactElement
}

export function MpEducation({ name, dateString, title }: MpEducationProps) {
  return <>
    <div className="w-9 h-9 -translate-x-9 translate-y-20 rounded-full bg-white"></div>

    <article className="ml-5 text-left">
        <header>
          | {dateString} | 
          <h3 className="text-3xl"> {title} </h3>
        </header>

        <p>
          Scroll to know more...
        </p>
    </article>
  </>
}