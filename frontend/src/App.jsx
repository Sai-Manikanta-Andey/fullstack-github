import {Toaster} from "react-hot-toast"
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/Homepage'
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from './pages/Explorepage'
import LikesPage from './pages/LikesPage'
import Sidebar from './components/Sidebar';

const App =()=>{

  return <div className='flex '>
    <Sidebar/>
    <div className='flex-1 max-w-5xl mx-auto my-5 text-white transition-all duration-300'>
      <Routes>
        <Route  path='/' element={<HomePage/>} />
        <Route  path='/login' element={<LoginPage/>} />
        <Route  path='/signup' element={<SignUpPage/>} />
        <Route  path='/explore' element={<ExplorePage/>} />
        <Route  path='/likes' element={<LikesPage/>} />
      </Routes>
      <Toaster/>
    </div>
  </div>          
}
export default App
