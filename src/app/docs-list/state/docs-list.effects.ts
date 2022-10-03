import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as DocsListActions from './docs-list.actions';
import * as DocsDataActions from '../../docs-data/documents.actions';
import { DocumentsApiService } from 'src/app/docs-data/documents.api.service';

@Injectable()
export class DocsListEffects {
  loadDocsLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DocsListActions.loadDocList),
      mergeMap((action) =>
        this.documentsApiService.getDocs(action.from, action.to).pipe(
          map((response) =>
            DocsListActions.loadedDocList({
              docs: response,
              tableId: action.tableId,
            })
          )
        )
      )
    );
  });

  loadedDocsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DocsListActions.loadedDocList),
      map((action) =>
        DocsDataActions.upsertDocuments({ documents: action.docs })
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly documentsApiService: DocumentsApiService
  ) {}
}
