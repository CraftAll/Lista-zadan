import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WORKER } from '../WORKER';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() worker: WORKER | undefined;
  @Output() taskChange = new EventEmitter();
  options = ['Nie rozpoczęte', 'W toku', 'Zakończone'];
}
