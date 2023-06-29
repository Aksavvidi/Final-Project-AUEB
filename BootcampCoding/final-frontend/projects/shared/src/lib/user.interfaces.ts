export interface Course {
    course: string;
    grade: string;
  }
  export interface Address {
    area: string;
    road: string;
    postcode: string;
  }
  export interface Phone {
    type: string;
    number: string;
  }


  export interface StudentGrades {
    username: string;
    password: string;
    Firstname: string;
    lastname: string;
    courses: Course[];
  }

  export interface StudentGradesUpdate {
    username: string;
    password: string;
    Firstname: string;
    lastname: string;
    courses: Course[];
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
  export interface Teacher {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    course:string;
    email: string;
    phone: Phone[];
  }

  export interface StudentGradesAPIList{
    status: boolean;
    data: StudentGrades[];
  }

  export interface StudentGradesUpdateAPIList{
    status: boolean;
    data: StudentGradesUpdate[];
  }
  export interface StudentAPIList {
    status: boolean;
    students: Student[];
  }
  
  export interface TeacherAPIOneUser{
    status: boolean;
    data: Teacher;
  }

