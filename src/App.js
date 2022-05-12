import Button from '@mui/material/Button'
import Dashboard from './pages/Dashboard';
import { useStyle, theme } from './style/style';
// import { ThemeProvider } from '@mui/styles';
import { ThemeProvider } from "@mui/material/styles";



function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />

    </ThemeProvider>
  );
}

export default App;
