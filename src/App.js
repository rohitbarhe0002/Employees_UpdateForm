import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import EmpData from './components/EmpData';
import UpdateEmp from './components/UpdateEmp';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <>
        <Router>

          <Route exact path="/" component={EmpData} />
          <Route path="/UpdateEmp/:Id" component={UpdateEmp} />
          <Route path="/AddEmployee" component={AddEmployee} />
        </Router>
      </>
    </div>
  );
}

export default App;
