import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentsComponent } from './students.component';
import { StudentsService } from 'src/app/services/students/students.service';
import { StudentsServiceMock } from 'src/app/mocks/students.service.mock';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let studentsService: StudentsService;
  let spyLoadStudents: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: StudentsService,
          useClass: StudentsServiceMock,
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    studentsService = TestBed.inject(StudentsService);
    spyLoadStudents = spyOn(studentsService, 'getAll').and.callThrough();
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los alumnos al principio', () => {
    component.ngOnInit();
    expect(spyLoadStudents).toHaveBeenCalled();
  })

});