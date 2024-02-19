import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ButtonComponent),
    }
  ]
})
export class ButtonComponent {
  @Input() name = '';
  @Input() type = '';
  @Input() fullWidth = false;
  @Input() disabled = false;
}