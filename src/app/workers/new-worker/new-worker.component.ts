import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WORKER } from '../../WORKER';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css'],
})
export class NewWorkerComponent {
  constructor(
    public dialogRef: MatDialogRef<NewWorkerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WORKER
  ) {
    data.finishedTasks = []
    data.firstName = ""
    data.lastName = ""
    data.position = ""
    data.tasks = []
  }
  firstName: string="";
  lastName: string = "";
  position: string = "";
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    console.log(this.data);
  }
  onChange(prop: "firstName"|"lastName"|"position"){
    this.data[prop] = this[prop];
  }
}
