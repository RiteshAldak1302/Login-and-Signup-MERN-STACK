import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup/>
        </Route>

      </Switch>
      </Router>
    </>
  );
}

export default App;
