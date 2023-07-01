import { useState,useEffect } from "react";
import MovieService from "../service/MovieService";
import { useParams,useNavigate } from "react-router-dom";

function EditMovie(props){
    let params=useParams();
    let navigate=useNavigate();
    let [formdetails,setformdetails]=useState({mid:"",mname:"",price:""});

    useEffect(()=>{
        MovieService.getMovieById(params.mid)
        .then((result)=>{
            setformdetails({...result.data})
        })
        .catch()
    },[])

    let update=()=>{
        MovieService.updateMovie(formdetails)
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
                }} readOnly/><br></br>
                <label for="mname">Movie Name</label>
                <input type="text" id="mname" name="mname" value={formdetails.mname} onChange={(event)=>{
                    setformdetails({...formdetails,mname:event.target.value})
                }}/><br></br>
                <label for="price">Price</label>
                <input type="text" id="price" name="price" value={formdetails.price} onChange={(event)=>{
                    setformdetails({...formdetails,price:event.target.value})
                }}/><br></br>
                <button type="button" id="btn" name="btn" onClick={update}>Update Movie</button>
            </form>
        </div>
    )
}

export default EditMovie;