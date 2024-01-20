import { PropsWithChildren } from "react";

interface MpFieldsetProps {
  legend: string;
}

export function MpFieldset(props: PropsWithChildren<MpFieldsetProps>) {
  const { legend, children } = props;

  return <fieldset className="border border-solid border-white p-3">
    <legend>{legend}</legend>

    {children}
  </fieldset>
}