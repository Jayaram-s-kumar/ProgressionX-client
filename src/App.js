import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from "./Components/Homepage";
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Myprofile from './Components/Myprofile';
import Registcomp from './Components/Registcomp';
import Admin from './Components/Admin';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/registcomp' element={<Registcomp/>}/>
      <Route path='/myprofile' element={<Myprofile/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
