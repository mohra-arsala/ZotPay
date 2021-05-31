import './App.css';
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
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
        <HomeTabs tabValue={1}></HomeTabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
