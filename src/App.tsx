import "./reset.css";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./mui/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" sx={{ color: theme.palette.accent.main }}>
          Заголовок с использованием акцентного цвета
        </Typography>
        <Typography  variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: '20px'  }}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis in mollitia soluta voluptates accusantium modi deleniti obcaecati earum quia nam nulla eveniet deserunt dignissimos! Amet, recusandae minima. Vero, aliquid?
        Officiis aspernatur nulla reiciendis nisi ex unde veritatis, illo laudantium iste, nam dicta quia architecto voluptas temporibus repellat vero doloribus expedita maxime, odit fugiat eaque! Error minima laborum sunt officiis!
        Eligendi placeat accusamus ea obcaecati laboriosam ducimus non odit tempore? Veritatis deleniti ea pariatur porro consequatur animi saepe veniam nobis ducimus, commodi eveniet cum eaque ut? Nam soluta esse nulla.
        Architecto quaerat repellat saepe placeat, velit fugiat? Incidunt repellat illo, animi ut quam, repudiandae eaque temporibus distinctio doloribus voluptatibus odio odit quae assumenda natus ipsum velit labore asperiores aspernatur dolor.</p>
        </Typography>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
