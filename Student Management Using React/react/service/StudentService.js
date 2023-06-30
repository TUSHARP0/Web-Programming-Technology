import axios from "axios";
const baseUrl="http://localhost:3002";

class StudentService{

    getStudent(){
        return axios.get(baseUrl+"/students");
    }

    getStudentById(stid){
        return axios.get(baseUrl+"/students/student/"+stid);
    }

    addStudent(stud){
        return axios.post(baseUrl+"/students/student/"+stud.stid,stud);
    }

    updateStudent(stud){
        return axios.put(baseUrl+"/students/student/"+stud.stid,stud);
    }

    deleteStudent(stud){
        return axios.delete(baseUrl+"/students/student/"+stud.stid,stud);
    }
}

export default new StudentService();