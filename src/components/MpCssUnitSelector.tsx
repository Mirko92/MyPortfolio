const CSS_UNITS = [
  { unit: "px",   label: "Pixel"},
  { unit: "%",    label: "Percentage"},
  { unit: "fr",   label: "Fraction"},
  { unit: "rem",  label: "Rem"},
  { unit: "em",   label: "Em"},
  { unit: "cm",   label: "Centimeters"},
  { unit: "mm",   label: "Millimeters"},
  { unit: "in",   label: "Inches"},
  { unit: "vh",   label: "Viewport Height"},
  { unit: "vw",   label: "Viewport Width"},
  { unit: "vmax", label: "Viewport max"},
  { unit: "vmin", label: "Viewport min"}
]

interface MpCssUnitSelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   *
   */
  label: string;
}

export function MpCssUnitSelector(props: MpCssUnitSelectorProps) {
  const { id, className, label, value, ...other } = props;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block"
      >
        {label}
      </label>

      <select
        id={id}
        className="text-black"
        value={value}
        {...other}
      >
        {
          CSS_UNITS.map( u => <option key={`unit_${u.label}`} value={u.unit}>{u.unit}</option> )
        }
      </select>
    </div>
  );
}
