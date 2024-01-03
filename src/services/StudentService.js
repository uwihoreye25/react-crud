import axios from 'axios';

const STUDENT_BASE_URL = 'http://localhost:8080/students';

class StudentService {
    getAllStudents() {
        return axios.get(STUDENT_BASE_URL+'/getStudents');
    }

    saveStudent(student){
        return axios.post(STUDENT_BASE_URL+'/saveStudent', student);
    }

    getStudentById(id){
        return axios.get(STUDENT_BASE_URL+'/getStudent/'+ id);
    }

    updateStudent(student){
        return axios.put(STUDENT_BASE_URL+'/updateStudent', student);
    }

    deleteStudent(student){
        return axios.post(STUDENT_BASE_URL+'/deleteStudent', student);
    }
}

export default new StudentService();