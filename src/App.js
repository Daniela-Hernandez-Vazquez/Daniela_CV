import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navegador/Navbar'
import {Domicilio} from './Components/Paginas/Domicilio'
import {Formacion}  from './Components/Paginas/Formacion'
import {Hobbies} from './Components/Paginas/Hobbies'
import { Inicio } from './Components/Paginas/Inicio'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Inicio/>}/>
          <Route path='/Domicilio' element={<Domicilio/>}/>
          <Route path='/Formacion' element={<Formacion/>}/>
          <Route path='/Hobbies' element={<Hobbies/>}/>
          

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
