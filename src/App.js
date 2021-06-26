import './App.css';
import Dasboard from './Dasboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Icons from './Icons';
import Test from './Test'
import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios';
import List from './List'

function App() {

  // const [Data, setData] = useState([]);



  // useEffect(() => {
  //   // axios.get("http://api.saleskings.in/API/CategoryList").then(res => {
  //   // setData(res.data.results.map(p => p.CM_CategoryID))
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "verifyCall": "LfUm4jVESgN4tQdQr3WPwrjuvqQd5t"
  //   });
  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };
  //   axios.get("http://api.saleskings.in/API/CategoryList/", requestOptions)
  //     .then(response => response.text())
  //     .then(res => {
  //       setData(res.data.results.map(p => p.CM_CategoryID))
  //         .catch(error => console.log('error', error))
  //     })
  // })


  const data = JSON.stringify({
    "verifyCall": "LfUm4jVESgN4tQdQr3WPwrjuvqQd5t"
  });

  const config = {
    method: 'post',
    url: 'http://api.saleskings.in/API/CategoryList/CategoryList/',
    headers: {
      'Content-Type': 'Access-Control-Allow-Origin',
      //   // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      //   'Access-Control-Allow-Credentials': 'true',
    },
    data: data,
  };
  // config.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // config.headers.append('Access-Control-Allow-Credentials', 'true');

  axios(config)

    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App" id="app">
      <Router>
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">
            <a href="#" className="simple-text logo-mini">
              <div className="logo-image-small">
                <img src="../assets/img/logo-small.png" />
              </div>

            </a>
            <a href="#" className="simple-text logo-normal">
              XYZ

            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {/* <li className="active "> */}

              <li>
                <Link to="/">
                  <i className="nc-icon nc-bank"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/Icons">
                  <i className="nc-icon nc-diamond"></i>
                  <p>Icons</p>
                </Link>
              </li>
              <li>
                <a href="./map.html">
                  <i className="nc-icon nc-pin-3"></i>
                  <p>Maps</p>
                </a>
              </li>
              <li>
                <a href="./notifications.html">
                  <i className="nc-icon nc-bell-55"></i>
                  <p>Notifications</p>
                </a>
              </li>
              <li>
                <a href="./user.html">
                  <i className="nc-icon nc-single-02"></i>
                  <p>User Profile</p>
                </a>
              </li>
              <li>
                <a href="./tables.html">
                  <i className="nc-icon nc-tile-56"></i>
                  <p>Table List</p>
                </a>
              </li>
              <li>
                <a href="./typography.html">
                  <i className="nc-icon nc-caps-small"></i>
                  <p>Typography</p>
                </a>
              </li>
              <li className="active-pro">
                <a href="./upgrade.html">
                  <i className="nc-icon nc-spaceship"></i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>





        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {/* <Dasboard /> */}
            <List />
          </Route>
          <Route exact path="/Icons">
            <Icons />
          </Route>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
        </Switch>

      </Router>
    </div >
  );

}

export default App;
