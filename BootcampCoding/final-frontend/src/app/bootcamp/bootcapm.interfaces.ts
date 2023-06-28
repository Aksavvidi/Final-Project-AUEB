export interface Address {
    area: string;
    road: string;
    postcode: string;
  }
  export interface Phone {
    type: string;
    number: string;
  }

  export interface Course {
    course: string;
    grade: string;
  }

  export interface Student {
    username: string;
    password: string;
    Firstname: string;
    lastname: string;
    email: string;
    address: Address;
    phone: Phone[];
    courses: Course[];
  }
  export interface UpdateStudent {
    username: string;
    Firstname: string;
    lastname: string;
    email: string;
    address: Address;
    phone: Phone[];
  }


  export interface Teacher {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    course:string;
    email: string;
    phone: Phone[];
  }
  export interface UpdateTeacher {
    username: string;
    firstname: string;
    lastname: string;
    course:string;
    email: string;
    phone: Phone[];
  }

  export interface Courses {
    course: string;
    StartDate: string;
    EndDate: string;
    Teacher: string;
  }

  export interface CoursesAPIList{
    status: boolean;
    courses: Courses[];
  }
  
  export interface StudentAPIList {
    status: boolean;
    students: Student[];
  }

  export interface TeacherAPIList{
    status: boolean;
    teachers: Teacher[];
  }

  export interface UpdateStudentAPIList {
    status: boolean;
    students: UpdateStudent[];
  }
  export interface UpdateTeacherAPIList {
    status: boolean;
    students: UpdateTeacher[];
  }