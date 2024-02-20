import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() placeHolder = '';
  @Input() type = '';
  @Input() id = '';
  @Input() formControlName = '';
}
