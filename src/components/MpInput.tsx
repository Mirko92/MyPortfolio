'use client';

export interface MpInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

export function MpInput(props: MpInputProps) {
  const { 
    id,
    label, 
    value, 
    className,  
    ...other 
  } = props;

  return <div className={className} >
    <label htmlFor={id} className="block">
      { label } ({value})
    </label>
    <input
      id={id}
      className="text-black text-right"
      value={value}
      {...other}
    />
  </div>;
}