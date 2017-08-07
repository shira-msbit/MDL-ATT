import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'att-button',
  template: `<mdl-button class="mdl-button btn-{{role}} width-role-{{widthRole}}" [disabled]="disable">
    <mdl-icon class="icon-{{icon}}"></mdl-icon>click here</mdl-button>`,
  styleUrls: ['./att-button.component.scss']
})
export class AttButtonComponent implements OnInit {
  @Input() widthRole: string;
  @Input() role: string;
  @Input() icon: string ;
  @Input() disable: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
