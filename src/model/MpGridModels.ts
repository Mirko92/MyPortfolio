export class MpCssValue {
  constructor(
    public value: number,
    public unit: string,
  ){
    this.unit  = unit;
    this.value = value;
  }

  get formattedValue() {
    return `${this.value}${this.unit}`;
  }

  public equal(cssValue: MpCssValue) {
    return cssValue.formattedValue === this.formattedValue;
  }
}

export interface MpGridContainerConfig {
  colsTemplate: string;
  gap: string;
}