import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ColorBox } from 'src/types/colorType';

export interface ColorState {
  colorBox?: ColorBox;
  id?: string;
  isSelected?: string;
}

const initialState: ColorState = {
  colorBox: undefined,
  id: undefined,
  isSelected: undefined,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setFirstInfo: (
      state,
      action: PayloadAction<{
        colorBox: ColorBox;
        id: string;
        isSelected: string;
      }>,
    ) => {
      state.colorBox = action.payload.colorBox;
      state.id = action.payload.id;
      state.isSelected = action.payload.isSelected;
      return state;
    },
  },
});

const { reducer, actions } = colorSlice;
export const { setFirstInfo } = actions;
export default reducer;
