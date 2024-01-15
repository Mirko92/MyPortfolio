import { PropsWithChildren } from "react";
import { MpGradientText } from "./MpGradientText";
import { composeClass } from "@/utils/utils";

interface MpSectionProps {
  id           : string;
  title       ?: string;
  noBackGround?: boolean;
}

const backgroundClasses  = `
  z-0 overflow-auto relative
  bg-mp-section bg-white bg-opacity-10 bg-no-repeat bg-cover 
  after:backdrop-blur-[5px] after:absolute after:top-0 after:bottom-0 after:w-full 
`;

export function MpSection( props: PropsWithChildren<MpSectionProps>) {
  const { 
    id,
    children, 
    title, 
    noBackGround 
  } = props;

  // const sectionRef: any = useRef<HTMLElement>();

  // useIsVisible(
  //   sectionRef,
  //   (isVisible: boolean) => {
  //     if (isVisible) {
  //       sectionRef.current.classList.add('border-8 border-sky-500');
  //     } else {
  //       sectionRef.current.classList.remove('border-8 border-sky-500');
  //     }
  //   }
  // );

  return <section
    id={id}
    className={composeClass(
      "w-full min-h-[100svh] max-h-[100svh] h-screen overflow-y-auto snap-start",
      { [backgroundClasses] : !noBackGround },
    )}
  >
    <div className="relative z-10 h-full w-full p-4 text-center">
      {
        title &&
        <div className="rounded-md p-3 mb-5">
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