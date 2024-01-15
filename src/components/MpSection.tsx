import { PropsWithChildren } from "react";
import { MpGradientText } from "./MpGradientText";
import { composeClass } from "@/utils/utils";

interface MpSectionProps {
  id           : string;
  title       ?: string;
  noBackGround?: boolean;
}

const backgroundClasses  = `bg-mp-section bg-no-repeat bg-cover`;

export function MpSection( props: PropsWithChildren<MpSectionProps>) {
  const { 
    id,
    children, 
    title, 
    noBackGround 
  } = props;

  return <section
    id={id}
    className={composeClass(
      "w-full min-h-[100svh] max-h-[100svh] h-screen overflow-y-auto snap-start",
      { [backgroundClasses] : !noBackGround },
    )}
  >
    <div className="relative z-10 h-full w-full p-3 text-center">
      {
        title &&
        <div className="mb-5">
          <MpGradientText>
            <h2 className="text-6xl leading-tight">
              <b>{title}</b>
            </h2>
          </MpGradientText>
        </div>
      }

      {children}
    </div>
  </section>
}