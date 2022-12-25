import {useEffect} from 'react'
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter as Router,
Routes,
Route,
Link} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Register from './pages/Register'
import Login from './pages/Login'
import { setUser } from './redux/slice/userSlice';
import { useDispatch } from 'react-redux'
import Profile from './pages/Profile';
import SpecificProfile from './pages/SpecificProfile';
import UserEdit from './pages/UserEdit';
import Test from './components/Test';
import SinglePost from './pages/SinglePost';


 function App() {
  const dispatch=useDispatch()
  const user=JSON.parse(localStorage.getItem("profile"))
  useEffect(()=>{
  dispatch(setUser(user))
  },[user])

  return (
      <Router>
          <Navbar />
          <ToastContainer />
          <Routes>
              <Route element={<Home />} path="/"></Route>
              <Route element={<Test />} path="/test/:id"></Route>
              <Route element={<Register />} path="/register"></Route>
              <Route element={<Login />} path="/login"></Route>
              <Route element={<Profile />} path="/profile"></Route>
              <Route element={<SpecificProfile />} path="/profile/:id"></Route>
              <Route element={<UserEdit />} path="/edit/:id"></Route>
              <Route element={<SinglePost />} path="/singlepost/:id"></Route>
          </Routes>
      </Router>
  );
}

export default App;