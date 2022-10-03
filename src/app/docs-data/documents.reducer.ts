import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DocItem } from './documents.model';
import * as DocumentsActions from './documents.actions';

export const documentsesFeatureKey = 'documents';

export interface State extends EntityState<DocItem> {
  // additional entities state properties
}

export const adapter: EntityAdapter<DocItem> = createEntityAdapter<DocItem>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(DocumentsActions.upsertDocuments, (state, action) =>
    adapter.upsertMany(action.documents, state)
  ),
  on(DocumentsActions.updateDocument, (state, action) =>
    adapter.updateOne(action.document, state)
  ),
  on(DocumentsActions.updateDocuments, (state, action) =>
    adapter.updateMany(action.documents, state)
  ),
  on(DocumentsActions.deleteDocuments, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(DocumentsActions.clearDocuments, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
