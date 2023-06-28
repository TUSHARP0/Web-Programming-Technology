import { useState } from "react";
function EmployeeForm(props){
    let[formdetails,setformdetails]=useState({empid:"",ename:"",sal:""});
    let insert=()=>{
        if(formdetails.empid==="" || formdetails.ename==="" ||formdetails.sal===""){
            alert("Fill All Data")
            return
        }
        props.addemp(formdetails)
        setformdetails({empid:"",ename:"",sal:""})
    }
    return(
        <div>
            <form>
            <div className="form-group">
                        <label htmlFor="empid">Employee id</label>
                        <input type="text" className="form-control" id="empid" name="empid" 
                        value={formdetails.empid} 
                        onChange={(event)=>{setformdetails({...formdetails,empid:event.target.value})}}>
                        </input>
                </div>
                <div className="form-group">
                        <label htmlFor="ename">Employee Name</label>
                        <input type="text" className="form-control" id="ename" name="ename" 
                        value={formdetails.ename} 
                        onChange={(event)=>{setformdetails({...formdetails,ename:event.target.value})}}>
                        </input>
                </div>
                <div className="form-group">
                        <label htmlFor="sal">Employee Salary</label>
                        <input type="text" className="form-control" id="sal" name="sal" 
                        value={formdetails.sal} 
                        onChange={(event)=>{setformdetails({...formdetails,sal:event.target.value})}}>
                        </input>
                </div>
                <button type="button" className="btn btn-primary" onClick={insert}>Add</button>
            </form>
        </div>
    )
}

export default EmployeeForm;