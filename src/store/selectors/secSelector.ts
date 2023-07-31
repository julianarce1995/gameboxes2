import { createSelector } from '@reduxjs/toolkit';

import { BlockState } from '../slices/firstSlice';
import { type RootState } from '../store';

export const selectBlockState = (state: RootState): BlockState =>
  state.secBlock;

export const selectSecColor = createSelector(
  selectBlockState,
  (state): string | undefined => state.colorBlock,
);
export const selectSecId = createSelector(
  selectBlockState,
  (state): string | undefined => state.id,
);
export const selectSecIsSelected = createSelector(
  selectBlockState,
  (state): string | undefined => state.selected,
);
