import './App.css';
import Dashboard from '../src/Pages/Dashboard';
import ActivityPage from '..//src/Pages/ActivityPage';
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
      <ActivityPage></ActivityPage>
    </div>
    </ThemeProvider>
  );
}

export default App;
