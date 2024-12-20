import { Component } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import aboutImg1 from "../../../assets/images/about_img1.png";
import aboutImg2 from "../../../assets/images/about_img2.png";
import workBg from "../../../assets/images/work_bg.jpg";
import { Icon } from "../../../components/Icon";

export class AboutSection extends Component {
  render() {
    const icons = ["behance", "slack", "dribbble", "twilio", "github"];

    return (
      <section style={{ position: "relative" }}>
        <Container
          sx={{ minHeight: "60vh", display: "flex", position: "relative" }}
        >
          {/* Левый блок */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingRight: "60px",
            }}
          >
            <img
              src={aboutImg1}
              alt="About Image 1"
              style={{ width: "230px", height: "255px", objectFit: "cover" }}
            />
            <Box
              sx={{ display: "flex", alignItems: "center", mt: 2, ml: "85px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontFamily: "Anton",
                  fontSize: "14px",
                  maxWidth: "74px",
                }}
              >
                Satisfied Customers
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "accent.main",
                  fontFamily: "Anton",
                  fontSize: "64px",
                  fontWeight: 400,
                  ml: 1,
                }}
              >
                25
              </Typography>
            </Box>
          </Box>

          {/* Средний блок */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingRight: "60px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "accent.main",
                  fontFamily: "Anton",
                  fontSize: "64px",
                  fontWeight: 400,
                }}
              >
                8
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontFamily: "Anton",
                  fontSize: "14px",
                  ml: 1,
                  maxWidth: "92px",
                }}
              >
                Year of experience
              </Typography>
            </Box>
            <img
              src={aboutImg2}
              alt="About Image 2"
              style={{
                width: "230px",
                height: "255px",
                objectFit: "cover",
                marginTop: "56px",
              }}
            />
          </Box>

          {/* Правый блок */}
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pr: "35px",
            }}
          >
            <SectionTitle index={1} title={"About Me"} />
            <Typography
              variant="body2"
              sx={{
                maxWidth: "433px",
                mt: 2,
                color: "text.secondary",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "-0.02em",
                paddingLeft: "70px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </Typography>
          </Box>
        </Container>

        <Box
          component="div"
          sx={{
            minHeight: "40vh",
            backgroundColor: "#F7F7F7",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            pt: 4,
          }}
        >
          <ul style={{ display: "flex", padding: 0, marginTop: "88px" }}>
            {icons.map((iconId, index) => (
              <li
                key={iconId}
                style={{
                  margin: index < icons.length - 1 ? "0 80px 0 0" : "0",
                }}
              >
                <Icon iconId={iconId} width="144" height="28" />
              </li>
            ))}
          </ul>
        </Box>

        {/* Абсолютно спозиционированный контейнер */}
        <Container
          sx={{
            minHeight: "50vh",
            backgroundImage: `url(${workBg})`, 
            backgroundSize: "cover", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "0",
            right: "0",
            transform: "translateY(-30%)",
            flexDirection: "column",
            gap: "30px",
            zIndex: 10
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "background.paper", // Directly using the theme value
              fontFamily: "Anton",
              fontSize: "40px",
              fontWeight: 400,
            }}
          >
            Let’s Work Together On Your Next Project
          </Typography>
          <Button
            sx={{
              fontFamily:'Montserrat',
              fontWeight: 600,
              fontSize:'12px',
              border: "none",
              backgroundColor: "accent.main", // Directly using the theme value
              textTransform: "uppercase",
              padding: "16px 24px",
              color: "background.paper", // Directly using the theme value
            }}
          >
           Hire me now
          </Button>
          <a
            href="#"
            download
            style={{ display: "flex", justifyItems: "center", color: "#A9A9AA" }} 
          >
            <Icon iconId="download" width='16' height='16' />
            <span style={{ marginLeft: "10px", fontFamily:'Montserrat', fontWeight: 600,fontSize:'14px'}}>Download CV</span>
          </a>
        </Container>
      </section>
    );
  }
}
