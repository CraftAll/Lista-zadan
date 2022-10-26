import { Component, OnInit } from '@angular/core';
import { sampleWorkers } from 'src/assets/sampleWorkers';
import { WORKER } from '../WORKER';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
})
export class WorkersComponent implements OnInit {
  constructor() {}
  workers: WORKER[] = sampleWorkers;
  selectedWorker: WORKER | undefined;
  ngOnInit(): void {
    this.checkFinishedTasks();
  }

  checkFinishedTasks(): void {
    this.workers.map((worker) => {
      worker.finishedTasks =
        worker.tasks.filter((task) => task.status === 'Zakończone') || [];
      return worker;
    });
  }
  selectWorker(id: number): void {
    this.selectedWorker = this.workers[id];
  }
}
