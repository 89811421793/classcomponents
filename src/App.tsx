import "./reset.css";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./mui/theme";
import { styled } from "@mui/material/styles"; 

// Создаем стилизованный компонент на основе базового HTML-тега div
const StyledDiv = styled('div')(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  marginBottom: '20px',
  color: theme.palette.text.primary, 
  padding: '10px',
  backgroundColor: theme.palette.background.default, 
}));

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
     <StyledTypography variant="body1">
      Заметка: В MUI оказывается есть еще styled components (styled API).
     </StyledTypography>
     <StyledDiv>пример, как создать стилизованный компонент, который не зависит от существующего компонента Material-UI</StyledDiv>
    </div>
  );
}

export default App;


const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  marginBottom: '20px', 
  color: theme.palette.text.secondary, 
}));


// без параметра theme, если мы не обращаемся к theme
// const StyledTypography = styled(Typography)({
//   fontFamily: 'Montserrat, sans-serif',
//   fontWeight: 700,
//   marginBottom: '20px',
// });

