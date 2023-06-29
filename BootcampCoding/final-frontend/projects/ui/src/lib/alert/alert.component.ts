import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() type:'primary' | 'info' | 'success'  | 'warning' | 'danger' = 'info';
  @Input() heading: string | undefined;
  @Input() text = 'Caution text';
  @Input() spinner: boolean | undefined;
  @Input() dismiss = new EventEmitter();

  onDismiss(){
    this.dismiss.emit();
  }

}
