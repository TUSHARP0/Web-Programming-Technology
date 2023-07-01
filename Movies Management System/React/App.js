import {Routes,Route,Navigate} from "react-router-dom"
import HomeComponent from "./component/HomeComponent"
import MovieService from "./service/MovieService"
import MovieTable from "./component/MovieTable"
import MovieForm from "./component/MovieForm"
import EditMovie from "./component/EditMovie"
import DeleteMovie from "./component/DeleteMovie"
function App(){
  return(
    <div>

      <Routes>
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home" element={<HomeComponent/>}></Route>
        <Route path="/table" element={<MovieTable></MovieTable>}></Route>
        <Route path="/form" element={<MovieForm></MovieForm>}></Route>
        <Route path="/edit/:mid" element={<EditMovie></EditMovie>}></Route>
        <Route path="/delete/:mid" element={<DeleteMovie></DeleteMovie>}></Route>
      </Routes>
    </div>
  )
}

export default App;