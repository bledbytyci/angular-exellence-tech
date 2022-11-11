import {Component, inject, Input, OnInit} from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'ce-child',
  providers: [TaskService],
  template: `
    <p [ngStyle]="{'color': color}" >
      child works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  @Input() color = '';

  public taskService = inject(TaskService);

  ngOnInit(): void {
  }
}
