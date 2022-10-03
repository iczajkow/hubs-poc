import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-title-edit',
  templateUrl: './title-edit.component.html',
  styleUrls: ['./title-edit.component.scss'],
})
export class TitleEditComponent implements OnChanges, OnInit {
  @Input() title: string = '';

  @Output() titleChange = new EventEmitter<string>();

  formControl = new FormControl<string>('');

  ngOnInit() {
    this.formControl.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.titleChange.emit(value ?? ''));
  }

  ngOnChanges() {
    this.formControl.setValue(this.title, { emitEvent: false });
  }
}
