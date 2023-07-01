import { useState, useEffect } from "react";
import MovieService from "../service/MovieService";
import { useNavigate } from "react-router-dom";
function MovieForm(props) {
    let navigate=useNavigate();
    let [formdetails,setformdetails]=useState({mid:"",mname:"",price:""});

   let insert=()=>{
        if(formdetails.mid===""||formdetails.mname===""||formdetails.price===""){
            alert("Fill All Details");
            return;
        }
        MovieService.addMovie(formdetails)
        .then(()=>{
            navigate("/table");
        })
        .catch();
    }

    return(
        <div>
            <form>
                <label for="mid">Ticket ID</label>
                <input type="text" id="mid" name="mid" value={formdetails.mid} onChange={(event)=>{
                    setformdetails({...formdetails,mid:event.target.value})
                }}/><br></br>
                <label for="mname">Movie Name</label>
                <input type="text" id="mname" name="mname" value={formdetails.mname} onChange={(event)=>{
                    setformdetails({...formdetails,mname:event.target.value})
                }}/><br></br>
                <label for="price">Price</label>
                <input type="text" id="price" name="price" value={formdetails.price} onChange={(event)=>{
                    setformdetails({...formdetails,price:event.target.value})
                }}/><br></br>
                <button type="button" id="btn" name="btn" onClick={insert}>Add Movie</button>
            </form>

        </div>
    )

}
export default MovieForm;