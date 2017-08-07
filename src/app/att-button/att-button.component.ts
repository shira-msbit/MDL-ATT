import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'att-button',
  template: `<mdl-button class="mdl-button role-{{role}} icon-{{icon}}" [disabled]="disable">
    <mdl-icon class="icon-add-maximize"></mdl-icon>click here</mdl-button>`,
  styleUrls: ['./att-button.component.scss']
})
export class AttButtonComponent implements OnInit {
// @Input() width: string;
  @Input() role: string;
  @Input() icon: string;
  @Input() disable: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
