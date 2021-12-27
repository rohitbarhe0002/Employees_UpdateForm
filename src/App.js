import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import EmpData from './components/EmpData';

function App() {
  return (
  <div>
    <h1>Welcome</h1>
    <>
    <Router>
      <Link to ="/EmpData">Employees</Link>
      <Route exact path="/EmpData" component={EmpData}/>
    </Router>
    </>
    </div>
  );
}

export default App;
