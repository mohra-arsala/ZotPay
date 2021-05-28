import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notification from './Pages/Notification';
import Confirmation from './Pages/ZotBillConfirmation'
import AirPay from './Pages/AirPay';
import ZotBill2 from './Pages/ZotBill2';
import HomeTabs from './Pages/HomeTabs';
import ActivityPage from './Pages/ActivityPage';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/activitypage" component={ActivityPage} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/airpay" component={AirPay} />
        <Route exact path="/zotbill" component={ZotBill2} />
        <Route exact path="/home/parking" >
          <HomeTabs tabValue={0}></HomeTabs>
        </Route>
        <Route exact path="/home/dashboard" >
          <HomeTabs tabValue={1}></HomeTabs>
        </Route>
        <Route exact path="/home/zotbill" >
          <HomeTabs tabValue={2}></HomeTabs>
        </Route>
      </Switch>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
