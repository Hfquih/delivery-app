import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./component/home";
import './style/home.css'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
  
        <Route path='/' element={<Home/>}></Route>

      </Routes> 
    </BrowserRouter>
  )
}
