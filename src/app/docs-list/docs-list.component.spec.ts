import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsListComponent } from './docs-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('DocsListComponent', () => {
  let component: DocsListComponent;
  let fixture: ComponentFixture<DocsListComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ DocsListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
