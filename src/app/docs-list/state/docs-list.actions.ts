import { createAction, props } from '@ngrx/store';
import { DocItem } from 'src/app/docs-data/documents.model';

export const loadDocList = createAction(
  '[DocsList] Load DocList',
  props<{ tableId: string; from: number; to: number }>()
);

export const loadedDocList = createAction(
  '[DocList] Loaded DocList',
  props<{ tableId: string; docs: DocItem[] }>()
);
