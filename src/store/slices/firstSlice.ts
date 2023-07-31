import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ColorBlock } from 'src/types/colorType';

export interface BlockState {
  colorBlock?: ColorBlock;
  id?: string;
  selected?: string;
}

const initialState: BlockState = {
  colorBlock: undefined,
  id: undefined,
  selected: undefined,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setFirstBoxInfo: (
      state,
      action: PayloadAction<{
        colorBlock: ColorBlock;
        id: string;
        selected: string;
      }>,
    ) => {
      state.colorBlock = action.payload.colorBlock;
      state.id = action.payload.id;
      state.selected = action.payload.selected;
      return state;
    },
  },
});

const { reducer, actions } = colorSlice;
export const { setFirstBoxInfo } = actions;
export default reducer;
