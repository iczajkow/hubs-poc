import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { updateDocument } from '../docs-data/documents.actions';
import { DocItem } from '../docs-data/documents.model';
import * as DocListActions from './state/docs-list.actions';
import {
  selectLaoding as selectLoading,
  selectListedDocs,
} from './state/docs-list.selectors';

let CURRENT_TABLE_ID = 0;

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss'],
})
export class DocsListComponent implements OnInit {
  private readonly tableId = String(CURRENT_TABLE_ID++);

  docs$ = this.store.select(selectListedDocs(this.tableId));
  laoding$ = this.store.select(selectLoading(this.tableId));

  displayedColumns = ['id', 'title', 'createdOn', 'pages', 'createdBy'];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(
      DocListActions.loadDocList({
        from: 0,
        to: 10,
        tableId: this.tableId.toString(),
      })
    );
  }

  pageChanges(event: PageEvent) {
    const from = event.pageIndex * event.pageSize;
    const to = from + event.pageSize;
    this.store.dispatch(
      DocListActions.loadDocList({ from, to, tableId: this.tableId.toString() })
    );
  }

  titleChanges(doc: DocItem, title: string) {
    this.store.dispatch(
      updateDocument({ document: { id: doc.id, changes: { title } } })
    );
  }
}
