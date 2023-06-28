import {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeTable from './component/EmployeeTable';

function App(){
  let[emparr,setemparr]=useState([{empid:1,ename:"Pratik",sal:100000},
{empid:2,ename:"Somesh",sal:969696},{empid:3,ename:"Tushar",sal:80088008}
]);

  let addEmp=(emp)=>{
    setemparr([...emparr,{empid:parseInt(emp.empid),ename:(emp.ename),sal:parseInt(emp.sal)}])
  };

  useEffect(()=>{
    console.log(emparr);
  },[emparr]);

  return(
    <div>
      <EmployeeTable arr={emparr} insertEmp={addEmp}></EmployeeTable>
    </div>
  );
}

export default App;
