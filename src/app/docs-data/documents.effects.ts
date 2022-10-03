import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { updateDocument } from './documents.actions';
import { DocumentsApiService } from './documents.api.service';
import { DocItem } from './documents.model';
import { selectDocument } from './documents.selectors';

@Injectable()
export class DocumentsEffects {
  updateDoc$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateDocument),
        concatLatestFrom((action) =>
          this.store.select(selectDocument(action.document.id as string))
        ),
        switchMap(([action, document]) => {
          const newDocument = { ...document, ...action.document.changes };
          return this.documentsApiService.updateDoc(newDocument as DocItem);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<any>,
    private readonly documentsApiService: DocumentsApiService
  ) {}
}
