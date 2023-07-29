import { createSelector } from '@reduxjs/toolkit';

import { ColorState } from '../slices/firstSlice';
import { type RootState } from '../store';

export const selectColorState = (state: RootState): ColorState => state.color1;

export const selectFirstColor = createSelector(
  selectColorState,
  (state): string | undefined => state.colorBox,
);
export const selectFirstId = createSelector(
  selectColorState,
  (state): string | undefined => state.id,
);
export const selectFirstIsSelected = createSelector(
  selectColorState,
  (state): string | undefined => state.isSelected,
);
