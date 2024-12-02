import "./reset.css";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>

        
      </ThemeProvider>
    </div>
  );
}

export default App;


