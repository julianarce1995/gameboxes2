import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ColorBox } from 'src/types/colorType';

import { ColorState } from './firstSlice';

const initialState: ColorState = {
  colorBox: undefined,
  id: undefined,
  isSelected: undefined,
};

const colorSlice = createSlice({
  name: 'color1',
  initialState,
  reducers: {
    setSecInfo: (
      state,
      action: PayloadAction<{
        colorBox: ColorBox | undefined;
        id: string;
        isSelected: string | undefined;
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
export const { setSecInfo } = actions;
export default reducer;
