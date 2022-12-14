import { WORKER } from 'src/app/WORKER';

export let sampleWorkers: WORKER[] = [
  {
    firstName: 'Jan',
    lastName: 'Kowalski',
    position: 'Inspektor',
    tasks: [
      {
        name: 'Zadanie pierwsze',
        status: 'W toku',
      },
      {
        name: 'Zadanie drugie',
        status: 'Zakończone',
      },
    ],
    finishedTasks: [],
  },
  {
    firstName: 'Jan',
    lastName: 'Nowak',
    position: 'Specjalista ds. rozwoju',
    tasks: [
      {
        name: 'Zadanie trzecie',
        status: 'Nie rozpoczęte',
      },
    ],
    finishedTasks: [],
  },
];
