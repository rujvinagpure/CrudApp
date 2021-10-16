
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import AddUser from './Components/AddUser';
import NavBar from "./Components/NavBar";
import AllUsers from './Components/AllUsers';
import CodeForInterview from '../src/Components/CodeForInterview'
import NotFound from './Components/NotFound';
function App() {
  return (
<div>
  <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={CodeForInterview}/>
<Route exact path="/all" component={AllUsers}/>
<Route exact path="/add" component={AddUser}/>
<Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
</div>

  
  );
}


export default App;
