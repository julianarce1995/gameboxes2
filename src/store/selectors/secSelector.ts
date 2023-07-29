import { createSelector } from '@reduxjs/toolkit';

import { ColorState } from '../slices/firstSlice';
import { type RootState } from '../store';

export const selectColorState = (state: RootState): ColorState => state.color2;

export const selectSecColor = createSelector(
  selectColorState,
  (state): string | undefined => state.colorBox,
);
export const selectSecId = createSelector(
  selectColorState,
  (state): string | undefined => state.id,
);
export const selectSecIsSelected = createSelector(
  selectColorState,
  (state): string | undefined => state.isSelected,
);
