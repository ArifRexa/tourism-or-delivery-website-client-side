import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddNewServices from './pages/AddNewServices/AddNewServices';
import Booking from './pages/Booking/Booking';
import Footer from './pages/common/Footer/Footer';
import Header from './pages/common/Header/Header';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import PrivetRoute from './pages/PrivetRoute/PrivetRoute';
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
            <PrivetRoute path="/rides">
              <Rides></Rides>
            </PrivetRoute>

            {/* <PrivetRoute path = "/booking/:rideName">
              <Booking></Booking>
            </PrivetRoute> */}
            <PrivetRoute path = "/booking/:_id">
              <Booking></Booking>
            </PrivetRoute>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            
            <Route path="/addservices">
              <AddNewServices></AddNewServices>
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
