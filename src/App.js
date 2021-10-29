import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from './pages/common/Footer/Footer';
import Header from './pages/common/Header/Header';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Rides from './pages/Rides/Rides';

function App() {
  return (
    <div>
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/rides">
              <Rides></Rides>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
