import { BehaviorSubject, Observable, take } from "rxjs";
import { student } from "../shared/interfaces/student";

const FAKE_STUDENTS: student[] = [
    {
        id: 1,
        firstname: 'Neyen',
        lastname: 'Vrhovski',
        document: 124421441,
        admissionDate: '12/12/2002',
        grade: 'derecho',
        debt: 213214,
        note: 7
    },
    {
        id: 2,
        firstname: 'Lorenzo',
        lastname: 'Medici',
        document: 2144124,
        admissionDate: '15/12/2001',
        grade: 'programacion',
        debt: 2332,
        note: 10
    },
    {
        id: 3,
        firstname: 'Jose',
        lastname: 'Perez',
        document: 124214421,
        admissionDate: '1/3/2022',
        grade: 'arte',
        debt: 1313,
        note: 2
    }
]

export class StudentsServiceMock {

  private students = new BehaviorSubject<student[]>([])
  public students$: Observable<student[]>;

  constructor() {
    this.students$ = this.students.asObservable();
  }

  addStudent(data: student): void {
    this.students$
      .pipe(
        take(1)
      ).subscribe((currentStudents) => {
        const lastId = currentStudents[currentStudents.length - 1]?.id || 0;
        this.students.next([
          ...currentStudents,
          {
            id: (lastId + 1),
            firstname: data.firstname,
            lastname: data.lastname,
            document: data.document,
            admissionDate: data.admissionDate,
            grade: data.grade,
            debt: data.debt,
            note: data.note
          }
        ])
      })
  }

  getAll() {
    setTimeout(() => {
        this.students.next(FAKE_STUDENTS);
    },1000);
    return this.students$
  }

  removeStudent(id: number)
  {
    this.students$
      .pipe(
        take(1)
      ).subscribe((currentStudents) => {
        const index = currentStudents.map((el: any) => el.id).indexOf(id);
        currentStudents.splice(index, 1);
        this.students.next(currentStudents);
      })
  }
}