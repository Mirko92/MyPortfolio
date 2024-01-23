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
        <option value="px">px</option>
        <option value="%">%</option>
        <option value="fr">fr</option>
        <option value="rem">rem</option>
        <option value="em">em</option>
        <option value="cm">cm</option>
        <option value="vh">vh</option>
        <option value="vw">vw</option>
        <option value="vmax">vmax</option>
        <option value="vmin">vmin</option>
      </select>
    </div>
  );
}
