import Main from "./components/Main";
import {Routes, Route} from "react-router-dom";
import Search from "./pages/Search";
import Add_pet from "./pages/Add_pet";
import Registration from "./pages/Registration";
import Login from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  return (<div>     
    <Routes>
    <Route path={'/'} element={<Main/>}/>
    <Route path={'/add_pet'} element={<Add_pet/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/registration'} element={<Registration/>}/>
    <Route path={'/search'} element={<Search/>}/>
    <Route path={'/profile'} element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
