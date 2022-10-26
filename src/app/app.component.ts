import { Component } from '@angular/core';
import { sampleWorkers } from 'src/assets/sampleWorkers';
import { WORKER } from './WORKER';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  workers: WORKER[] = sampleWorkers;
  selectedWorker: WORKER | undefined;
  checkFinishedTasks(): void {
    this.workers.map((worker) => {
      worker.finishedTasks =
        worker.tasks.filter((task) => task.status === 'Zakończone') || [];
      return worker;
    });
  }
  selectedWorkerReciver(worker: WORKER): void {
    this.selectedWorker = worker;
  }
}
