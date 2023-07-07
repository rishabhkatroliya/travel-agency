import './App.css';
import Login from './Components/LoginPage/Login';
import AllRoutes from './Routes/AllRoutes';
import Navbar from "./Components/Home/Navbar.jsx"
import Signup from './Components/LoginPage/Signup';



function App() {
  return (
    <div className="App">
         <Navbar/> 
         <AllRoutes/> 
          
    </div>
    
  );
}

export default App;
