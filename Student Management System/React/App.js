import {Routes,Route,Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./component/HomeComponent";
import StudentTable from "./component/StudentTable";
import StudentEdit from "./component/StudentEdit";
import StudentForm from "./component/StudentForm";
import MainHeader from "./component/MainHeader";
import DeleteStudent from "./component/DeleteStudent";

function App(){
  return(
    <div>
      <MainHeader></MainHeader>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home" element={<HomeComponent/>}></Route>
        <Route path="/table" element={<StudentTable/>}></Route>
        <Route path="/form" element={<StudentForm/>}></Route>
        <Route path="/edit/:stid" element={<StudentEdit/>}></Route>
        <Route path="/delete/:stid" element={<DeleteStudent/>}></Route>
      </Routes>
    </div>
  )
}

export default App;