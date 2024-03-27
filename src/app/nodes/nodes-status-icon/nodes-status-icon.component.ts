import { NgClass } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nodes-status-icon',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './nodes-status-icon.component.html',
  styleUrl: './nodes-status-icon.component.css'
})
export class NodesStatusIconComponent implements OnChanges {

  @Input() state = 2;

  public state_name = 'Unreachable';


  ngOnChanges() {
    this.getStateName();
  }

  public getStateName() {
    switch (this.state) {
      case 0:
        this.state_name = 'Up';
        break;

      case 1:
        this.state_name = 'Down';
        break;

      default:
        this.state_name = 'Unreachable';
    }
  }

}
