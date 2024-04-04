import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() text: string;

  @HostBinding('class.selected')
  @Input() selected: boolean;
}
