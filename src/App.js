import './App.css';
import Notification from './Pages/Notification';
import Dashboard from '../src/Pages/Dashboard';
import ZotBill from '../src/Pages/ZotBill';
import ParkingTabs from '../src/Pages/ParkingTabs';
import ActivityPage from '..//src/Pages/ActivityPage';
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import ZotBillConfirmation from '../src/Pages/ZotBillConfirmation';
import HomeTabs from '../src/Pages/HomeTabs';
import AirPay from './Pages/AirPay';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ZotBill2 from './Pages/ZotBill2';

let theme = createMuiTheme({
  palette:{
    primary:{
      main: '#27649f',
    },
    secondary:{
      main: '#f9d247',
    },
  }
})
theme = responsiveFontSizes(theme)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
     {/* <Switch>
          <Route path="/confirmation">
            <ZotBillConfirmation />
          </Route>
          <Route path="/zotbill">
            <ZotBill2></ZotBill2>
          </Route>
        </Switch>
        {/* <ActivityPage></ActivityPage> */}
        {/* <Notification></Notification> */}
        {/* <Dashboard></Dashboard> */}
        {/* <ZotBill></ZotBill> */}
        {/* <ParkingTabs></ParkingTabs> */}
        {/* <ZotBillConfirmation></ZotBillConfirmation> */}
        {/* <AirPay></AirPay> */}
        <HomeTabs></HomeTabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
