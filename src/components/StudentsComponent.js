
import React,{ useState,useEffect } from "react"
import StudentService from "../services/StudentService"
import { Link, useNavigate } from "react-router-dom"
const StudentsComponent = () => {

    const [students, setStudents] = useState([])
    const navigate = useNavigate();
useEffect(() => {
  StudentService.getAllStudents().then(response=>{
    setStudents(response.data);
  }).catch(error =>{
    console.log(error)
  })
}, [])

const deleteStudent =(student) => {
  StudentService.deleteStudent(student).then(response => {
    window.location.reload(); 
  }).catch(error =>{
    console.log(error);
  });
}


  return (
    <div className="container">
        <h2>List of Students</h2>

        <Link to="/addStudent" className="btn btn-primary">Add new student</Link>

        <table className="table">
            <thead>
                <tr>
                    <th>Student Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Student Age</th>
                </tr>
                </thead>
                <tbody>
                    {students.map(student =>
                        <tr key={student.sid}>
                            <td>{student.sid}</td>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                            <td>{student.age}</td>
                            <td><Link to={`/editStudent/${student.sid}`}  className='btn btn-info' >Edit</Link>
                            <button onClick={()=>deleteStudent(student)}   className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
           
        </table>
    </div>
  )
}

export default StudentsComponent