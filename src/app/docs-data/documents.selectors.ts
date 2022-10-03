import { createSelector } from '@ngrx/store';

import * as docsDataState from './documents.reducer';

interface AppState {
  documents: docsDataState.State;
}

export const selectDocsData = (state: AppState) => state.documents;
export const selectDocsEntity = createSelector(selectDocsData, (state) =>
  docsDataState.selectEntities(state)
);

export const selectDocument = (documentId: string) =>
  createSelector(selectDocsEntity, (entities) => entities[documentId]);
