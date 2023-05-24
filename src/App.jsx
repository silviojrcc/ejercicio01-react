import './App.css'
import Saludo from './components/Saludo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {

  return (
    <div className='main bg-dark d-flex justify-content-center align-items-center'>
      <Saludo></Saludo>
    </div>

  )
}

export default App;
