import './App.css';
import Notification from '../src/Pages/Notification';
import ParkingHourly from '../src/Pages/ParkingHourly';
import ParkingPermit from '../src/Pages/ParkingPermit';
import ParkingTabs from '../src/Pages/ParkingTabs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#0064a4'
    },
    secondary: {
      main: '#ffd200'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Notification></Notification> */}
        {/* <ParkingHourly></ParkingHourly> */}
        {/* <ParkingPermit></ParkingPermit> */}
        <ParkingTabs></ParkingTabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
