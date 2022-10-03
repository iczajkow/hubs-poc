import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { DocItem } from './documents.model';

export const upsertDocuments = createAction(
  '[Documents/API] Upsert Documents',
  props<{ documents: DocItem[] }>()
);

export const updateDocument = createAction(
  '[Documents/API] Update Document',
  props<{ document: Update<DocItem> }>()
);

export const updateDocuments = createAction(
  '[Documents/API] Update Documents',
  props<{ documents: Update<DocItem>[] }>()
);

export const deleteDocuments = createAction(
  '[Documents/API] Delete Documents',
  props<{ id: string }>()
);

export const clearDocuments = createAction('[Documents/API] Clear Documents');
