import { teacher } from "src/app/shared/interfaces/teacher";
import { TeachersService } from "./teachers.service"

describe('Testing teachers-service', () => {

    let service: TeachersService;
    let teachers: teacher[];

    beforeEach(() => {
        service = new TeachersService();
        teachers = [
            {
                firstname: 'Neyen',
                lastname: 'Vrhovski',
                document: 124421441,
                admissionDate: '12/12/2002',
                salary: 213214,
                course: 'programacion'
            },
            {
                firstname: 'Lorenzo',
                lastname: 'Medici',
                document: 2144124,
                admissionDate: '15/12/2001',
                salary: 2332,
                course: 'economia'
            },
            {
                firstname: 'Jose',
                lastname: 'Perez',
                document: 124214421,
                admissionDate: '1/3/2022',
                salary: 1313,
                course: 'derecho'
            }
        ];
        localStorage.setItem('teachers', JSON.stringify(teachers));
    })

    it('Debe traer a los profesores', () => {
        service.getAll().subscribe((res) => {
            teachers = res
        })
        expect(teachers).toBeDefined();
    })

    it('Debe borrar un profesor', () => {
        let initLenght = teachers.length;
        service.removeTeacher(teachers[0].document);
        teachers = JSON.parse(localStorage.getItem('teachers') || '');
        expect(teachers.length).toBeLessThan(initLenght);
    });

    it('Debe agregar un profesor', () => {
        let initLenght = teachers.length;
        service.addTeacher({firstname: 'Martin', lastname: 'Rodriguez', document: 2142412, admissionDate: '5/8/2012', salary: 12421, course: 'arte'});
        teachers = JSON.parse(localStorage.getItem('teachers') || '');
        expect(teachers.length).toBeGreaterThan(initLenght);
    })
})