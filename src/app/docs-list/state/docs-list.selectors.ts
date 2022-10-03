import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from 'src/app/docs-data/documents.reducer';
import { selectDocsEntity } from 'src/app/docs-data/documents.selectors';
import * as fromDocsList from './docs-list.reducer';

export const selectDocsListState = createFeatureSelector<fromDocsList.State>(
  fromDocsList.docsListFeatureKey
);

export const selectDisplayedIds = (tableId: string) =>
  createSelector(
    selectDocsListState,
    (state) => state[tableId]?.displayedIds ?? []
  );

export const selectListedDocs = (tableId: string) =>
  createSelector(
    selectDisplayedIds(tableId),
    selectDocsEntity,
    (dispalyedIds, entities) => dispalyedIds.map((id) => entities[id])
  );

export const selectLaoding = (tableId: string) =>
  createSelector(selectDocsListState, (state) => state[tableId]?.loading);
