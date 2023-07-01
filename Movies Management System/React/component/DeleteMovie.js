import {useState,useEffect} from "react";
import MovieService from "../service/MovieService";
import { useParams,useNavigate } from "react-router-dom";
 
function DeleteMovie(){
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

    let deleteMovie=()=>{
        MovieService.deleteMovie(formdetails)
        .then(()=>{
            navigate("/table");
        })
        .catch();
    }
    return(
        <div>
            <h1>Are You Sure?</h1>
            <button type="button" id="btn" name="btn" onClick={deleteMovie}>Delete</button>
        </div>
    )
}
export default DeleteMovie;