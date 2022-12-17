import './App.css';
import Form from './components/Form';
import Mainbar from './Mainbar';
// import Navbar from './components/vivekComponents/Navbar.js'
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Vivek from './components/vivekComponents/Vivek';
import Abdul from './components/abdulComponents/Abdul';

function App() {
  return (
    <Router>
      <>
        <Mainbar />
        <Switch>
          <Route path="/vivek">
            <Vivek/>
          </Route> 
          <Route path = "/abdul">
            <Abdul/>
          </Route>
          <Route path = "/vansh">
            <Card />
          </Route>
          <Route path = "/aadil">
            <Form />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
