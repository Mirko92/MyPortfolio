import { ReactElement } from "react";

interface MpEducationProps {
  dateString: string; 
  title: string | ReactElement
  description: string; 
  url?: string;
}

export function MpEducation({ description, dateString, title, url }: MpEducationProps) {
  return <>
    <div 
      className="
        w-9 h-9 -translate-x-9 translate-y-20 
        rounded-full bg-white 
        grid place-items-center
      "
    >
      { url && <>🔗</>}
    </div>

    <article className="ml-5 text-left">
        <header>
          | {dateString} | 
          <h3 className="text-3xl"> {title} </h3>
        </header>

        <p>{description}</p>
    </article>
  </>
}