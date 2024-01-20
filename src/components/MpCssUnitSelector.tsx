interface MpCssUnitSelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   *
   */
  label: string;

  /**
   *
   */
  excluded?: string[];
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
        <option value="px">Pixel (px)</option>
        <option value="%">Percent (%)</option>
        <option value="fr">Fraction (fr)</option>
        <option value="rem">Rem (rem)</option>
      </select>
    </div>
  );
}
