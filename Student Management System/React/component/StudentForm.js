import { useState} from "react";
import StudentService from "../service/StudentService";
import { useNavigate } from "react-router-dom";

function StudentForm(){
    let navigate=useNavigate();
    let [formdetails,setformdetails]=useState({stid:"",stname:"",stlocation:"",stcourse:""});
    let addstud=()=>{
        if(formdetails.stid==="" ||formdetails.stname==="" ||formdetails.stlocation==="" ||formdetails.stcourse===""){
            alert("Fill Details");
            return;
        }
        StudentService.addStudent(formdetails)
        .then(()=>{
            setformdetails={stid:"",stname:"",stlocation:"",stcourse:""}
            navigate("/table");
        })
        .catch();
    }    
    return(
        <div>
            <form>
              <div className="form-group">
                  <label htmlFor="stid">Student id</label>
                  <input type="text" className="form-control" id="stid" name="stid" 
                   value={formdetails.stid}
                   onChange={(event)=>{setformdetails({...formdetails,stid:event.target.value})}}   
                  />
                  
              </div>
              <div className="form-group">
                  <label htmlFor="stname">Name</label>
                  <input type="text" className="form-control" id="stname" name="stname"
                  value={formdetails.stname}
                   onChange={(event)=>{setformdetails({...formdetails,stname:event.target.value})}}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="stlocation">Location</label>
                  <input type="text" className="form-control" id="stlocation" name="stlocation"
                  value={formdetails.stlocation}
                   onChange={(event)=>{setformdetails({...formdetails,stlocation:event.target.value})}}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="stcourse">Course</label>
                  <input type="text" className="form-control" id="stcourse" name="stlocation"
                  value={formdetails.stcourse}
                   onChange={(event)=>{setformdetails({...formdetails,stcourse:event.target.value})}}
                  />
              </div>
              <button type="button" className="btn btn-primary" onClick={addstud}>Add Student</button>
     </form>
        </div>
    )

}

export default StudentForm;