import Dashboard from './pages/Dashboard';
import { theme } from './style/style';
import { ThemeProvider } from "@mui/material/styles";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />

    </ThemeProvider>
  );
}

export default App;
