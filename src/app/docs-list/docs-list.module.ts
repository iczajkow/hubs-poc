import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsListComponent } from './docs-list.component';
import { StoreModule } from '@ngrx/store';
import { docsListFeatureKey, reducer } from './state/docs-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DocsListEffects } from './state/docs-list.effects';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TitleEditComponent } from './title-edit/title-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocsListComponent, TitleEditComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(docsListFeatureKey, reducer),
    EffectsModule.forFeature([DocsListEffects]),
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [DocsListComponent],
})
export class DocsListModule {}
