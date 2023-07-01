import React,{Component} from "react";
import {Link} from "react-router-dom";
import MovieService from "../service/MovieService";

class MovieTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            marr:[]
        }
    }

    componentDidMount(){
        MovieService.getMovie()
        .then((result)=>{
            this.setState({...this.state,marr:result.data});
        })
        .catch();
    }

    render(){
        return(
            <div align="center">
                <table border="2" align="center">
                    <thead>
                        <tr>
                            <td>Ticket Id</td>
                            <td>Movie Name</td>
                            <td>Ticket Price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.marr.map((movie)=>(<tr key={movie.mid}>
                            <td>{movie.mid}</td>
                            <td>{movie.mname}</td>
                            <td>{movie.price}</td>
                            <td>
                                <Link to={`/edit/${movie.mid}`} state={{movie:movie}}>
                                    <button type="button" id="btn" name="btn">Update</button>
                                </Link>
                                <Link to={`/delete/${movie.mid}`} state={{movie:movie}}>
                                    <button type="button" id="btn" name="btn">Delete</button>
                                </Link>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
                <Link to="/form">
                <button type="button" id="btn" name="btn">Add Movie</button>
                </Link>
            </div>
        )
    }
}

export default MovieTable;