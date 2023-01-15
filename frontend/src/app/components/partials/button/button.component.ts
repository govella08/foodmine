import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type!: string
  @Input() placeholder!: string
  @Input() padding: string = "1.3rem";
}
