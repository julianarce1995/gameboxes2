import { createSelector } from '@reduxjs/toolkit';

import { BlockState } from '../slices/firstSlice';
import { type RootState } from '../store';

export const selectBlockState = (state: RootState): BlockState =>
  state.firstBlock;

export const selectFirstColor = createSelector(
  selectBlockState,
  (state): string | undefined => state.colorBlock,
);
export const selectFirstId = createSelector(
  selectBlockState,
  (state): string | undefined => state.id,
);
export const selectFirstIsSelected = createSelector(
  selectBlockState,
  (state): string | undefined => state.selected,
);
