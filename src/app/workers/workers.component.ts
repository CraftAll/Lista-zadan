import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { sampleWorkers } from 'src/assets/sampleWorkers';
import { WORKER } from '../WORKER';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
})
export class WorkersComponent implements OnInit {
  constructor() {}
  workers: WORKER[] = sampleWorkers;
  selectedWorker: WORKER | undefined;
  @Output() selectedWorkerEmitter = new EventEmitter();
  ngOnInit(): void {
    this.checkFinishedTasks();
  }
  SelectWorker(): void {
    this.selectedWorkerEmitter.emit(this.selectedWorker);
  }
  @Input('taskChecker') checkFinishedTasks(): void {}
}
