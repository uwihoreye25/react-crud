import './App.css';
import AddStudentComponent from './components/AddStudentComponent';
import StudentsComponent from './components/StudentsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
       <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/students' element={<StudentsComponent />} />
          <Route path='/addStudent' element={<AddStudentComponent />} />
          <Route path='/editStudent/:id' element={<AddStudentComponent />} />
          <Route path='/deleteStudent/:id' element={<AddStudentComponent />} />
        </Routes>
      </div>
    </BrowserRouter> 
    </div>
  );
}

export default App;
