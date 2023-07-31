import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ColorBlock } from 'src/types/colorType';

import { BlockState } from './firstSlice';

const initialState: BlockState = {
  colorBlock: undefined,
  id: undefined,
  selected: undefined,
};

const colorSlice = createSlice({
  name: 'color1',
  initialState,
  reducers: {
    setSecBoxInfo: (
      state,
      action: PayloadAction<{
        colorBlock: ColorBlock | undefined;
        id: string;
        selected: string | undefined;
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
export const { setSecBoxInfo } = actions;
export default reducer;
