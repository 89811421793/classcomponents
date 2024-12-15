import { Component } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import workBg from "../../../assets/images/work_bg.jpg";
import { Icon } from "../../../components/Icon";
import SectionTitle from "../../../components/SectionTitle";

export class PartnersSection extends Component {
  render() {
    const icons = ["behance", "slack", "dribbble", "twilio", "github", "chargebee","udemy","instacaption","mapbox"];

    return (
      <section style={{ position: "relative", minHeight: "100vh",paddingBottom:'60px' }}>
        <Box
          component="div"
          sx={{
            minHeight: "60vh",
            backgroundColor: "#F7F7F7",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection:'column',
            paddingTop: '80px'
            
          }}
        >
            
            <SectionTitle index={4} title={"My Partners"} />
        
          
          <ul style={{ display: "flex", flexWrap:'wrap', justifyContent:'center', maxWidth:'80%',padding:0, marginTop: "88px"}}>
            {icons.map((iconId, index) => (
              <li
                key={iconId}
                style={{
                  margin: index < icons.length - 1 ? "0 80px 0 0" : "0",
                  marginBottom:'80px'
                }}
              >
                <Icon iconId={iconId} width="144" height="42" />
              </li>
            ))}
          </ul>
        </Box>

        {/* Абсолютно спозиционированный контейнер */}
        <Container
          sx={{
            minHeight: "40vh",
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
            zIndex: 10,
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
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "12px",
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
            style={{
              display: "flex",
              justifyItems: "center",
              color: "#A9A9AA",
            }}
          >
            <Icon iconId="download" width="16" height="16" />
            <span
              style={{
                marginLeft: "10px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Download CV
            </span>
          </a>
        </Container>
      </section>
    );
  }
}