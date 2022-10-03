import { Action, createReducer, on } from '@ngrx/store';
import * as DocsListActions from './docs-list.actions';

export const docsListFeatureKey = 'docsList';

export interface TableState {
  loading: boolean;
  displayedIds: string[];
}

export interface State {
  [key: string]: TableState;
}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(DocsListActions.loadDocList, (state, action) => ({
    ...state,
    [action.tableId]: { ...state[action.tableId], loading: true },
  })),
  on(DocsListActions.loadedDocList, (state, action) => ({
    ...state,
    [action.tableId]: {
      ...state[action.tableId],
      loading: false,
      displayedIds: action.docs.map((doc) => doc.id),
    },
  }))
);
