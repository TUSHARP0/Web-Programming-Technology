import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import StudentService from "../service/StudentService";

function DeleteStudent(){
    const navigate=useNavigate();
    const params=useParams();
    let [formdetails,setformdetails]=useState({stid:"",stname:"",stlocation:"",stcourse:""});
    useEffect(()=>{
        alert("in useEffect");
        StudentService.getStudentById(params.stid)
        .then((result)=>{
            setformdetails({...result.data})
        })
        .catch(()=>{});
    },[])

    let deleteStud=()=>{
        StudentService.deleteStudent(formdetails)
        .then(()=>{
            navigate("/table")
        })
        .catch(()=>{
            console.log("Error occured in updating")
        });
    }
    return(
        <div>
            <h1>Are you Sure?</h1>
            <button type="button" id="btn" className="btn btn-danger" onClick={deleteStud}>Delete</button>
            
        </div>
    )
}

export default DeleteStudent;