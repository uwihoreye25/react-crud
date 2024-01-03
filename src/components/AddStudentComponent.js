import React,{useState,useEffect} from 'react'
import StudentService from '../services/StudentService'

import {useNavigate,Link, useParams} from 'react-router-dom'

const AddStudentComponent = () => {

    const [sid, setSid] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')

    const navigate=useNavigate();
    const {id}=useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        
        const student={sid,fname,lname,age}

        StudentService.saveStudent(student).then((response) => {
            navigate('/students');
        }).catch((error) => {
            console.log(error)
        });
        
    }

    useEffect(() => {
     StudentService.getStudentById(id).then((response) => {
        console.log(response)
        setSid(response.data.sid);
        setFname(response.data.fname)
        setLname(response.data.lname)
        setAge(response.data.age)
    }).catch((error) => {console.log(error)});
    }, [])
   
    const title=()=>{
        if(id) {
            return <h2 className='text text-center'>Update Student</h2>
        }

        return <h2 className='text text-center'>Add student</h2>
    }

  return (
    <div><br /> <br />
       <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                {title()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='label'>Student Id</label>
                            <input type='text' className='form-control' name='sid' value={sid} onChange={(e)=>setSid(e.target.value)}></input>

                            <label className='label'>First Name</label>
                            <input type='text' className='form-control' name='fname' value={fname} onChange={(e)=>setFname(e.target.value)}></input>

                            <label className='label'>Last Name</label>
                            <input type='text' className='form-control' name='lname' value={lname} onChange={(e)=>setLname(e.target.value)}></input>

                            <label className='label'>Student Age</label>
                            <input type='text' className='form-control' name='age' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                        </div>

                        <button className='btn btn-primary' onClick={(e)=>saveOrUpdateStudent(e)}>Save student</button>
                        <Link to='/students' className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AddStudentComponent