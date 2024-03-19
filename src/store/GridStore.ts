import { MpCssValue, MpGridContainerConfig } from '@/model/MpGridModels';
import { create } from 'zustand';

type MpGridState = {
  /**
   * Collection of value to compose grid column template 
   */
  colsTemplate: MpCssValue[];

  /**
   * Represents value for gap either for rows and columns
   */
  gap: string;

  /**
   * Computed state
   * CSS class generated for the grid container
   */
  gridContainerCss: () => string;

  items: number; 
}

type MpGridActions = {

  /**
   * Action to update column templates.
   * @param value new column templates
   */
  setColsTemplate: (value: MpCssValue[]) => void;
  
  /**
   * Action to update the gap value
   * @param value new gap value
   */
  setGap: (value: string) => void;

  /**
   * Action to update the items count
   * @param items new items count value 
   */
  setItems: (items: number) => void;
}

/**
 * Generates the CSS class for the grid container based on the provided configuration.
 * 
 * @param gridConfig The configuration for grid CSS properties.
 * @returns The CSS class for the grid container.
 */
function createGridContainerClass(gridConfig: MpGridContainerConfig): string {
  const { colsTemplate, gap } = gridConfig;

  return (
    ".grid-container {" +
      `display:grid;`   +
      `overflow: auto;` +
      `gap: ${gap};`    +
      `grid-template-columns: ${colsTemplate};` +
    "}"
  );
}

export const useGridStore = create<MpGridState & MpGridActions>((set, get) => ({

  // Column templates control
  colsTemplate: [
    new MpCssValue(1, "fr"),
    new MpCssValue(1, "fr"),
    new MpCssValue(1, "fr"),
  ],

  setColsTemplate: (colsTemplate: MpCssValue[]) => set(() => ({
    colsTemplate
  })),
  // -------------------

  // Gap control
  gap: "2rem 2rem",

  setGap: (gap: string) => set(() => ({
    gap
  })),
  // -------------------


  gridContainerCss: () => {
    const { colsTemplate: colsTemplateItems, gap } = get();
7
    const colsTemplate =  colsTemplateItems.map((c) => c.formattedValue).join(" ");

    return createGridContainerClass({ colsTemplate, gap });
  },

  items: 30, 
  setItems: (items: number) => set(() => ({
    items
  }))
}));