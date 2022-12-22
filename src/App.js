
import Form from './components/Form';
import Mainbar from './Mainbar';
// import Navbar from './components/vivekComponents/Navbar.js'
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Vivek from './components/vivekComponents/Vivek';
import Abdul from './components/abdulComponents/Abdul';
import Aadil from './components/aadilComponents/Aadil';
import Vansh from './components/vanshComponents/Vansh';

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
            <Vansh/>
          </Route>
          <Route path = "/aadil">
            <Aadil/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
