import './App.css';
import Notification from '../src/Pages/Notification';
import Dashboard from '../src/Pages/Dashboard';
import ZotBill from '../src/Pages/ZotBill';
import ParkingTabs from '../src/Pages/ParkingTabs';
import ActivityPage from '..//src/Pages/ActivityPage';
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import ZotBillConfirmation from '../src/Pages/ZotBillConfirmation';
import HomeTabs from '../src/Pages/HomeTabs';

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
        {/* <ActivityPage></ActivityPage> */}
        {/* <Notification></Notification> */}
        {/* <Dashboard></Dashboard> */}
        {/* <ZotBill></ZotBill> */}
        {/* <ParkingTabs></ParkingTabs> */}
        {/* <ZotBillConfirmation></ZotBillConfirmation> */}
        <HomeTabs></HomeTabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
