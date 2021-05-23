import './App.css';
import Notification from '../src/Pages/Notification';
import Dashboard from '../src/Pages/Dashboard';
import ZotBill from '../src/Pages/ZotBill';
import ParkingHourly from '../src/Pages/ParkingHourly';
import ParkingPermit from '../src/Pages/ParkingPermit';
import ParkingTabs from '../src/Pages/ParkingTabs';
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';

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
        {/* <Notification></Notification> */}
        {/* <ParkingHourly></ParkingHourly> */}
        {/* <ParkingPermit></ParkingPermit> */}
        {/* <Dashboard></Dashboard> */}
        {/* <ZotBill></ZotBill> */}
        <ParkingTabs></ParkingTabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
