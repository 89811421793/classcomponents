import React, { Component } from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";
import pagetopBg from "../../../assets/images/pagetop_bg.jpg";
import serviceLetters from "../../../assets/images/Service_letters.png";

type ServiceTopProps = {};

type ServiceTopState = {};

export class ServiceTop extends Component<ServiceTopProps, ServiceTopState> {
  handleServiceClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
  };

  render() {
    const sectionStyle: React.CSSProperties = {
      minHeight: "80vh",
      backgroundImage: `url(${pagetopBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
    };

    const overlayStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${serviceLetters})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column", 
    };

    return (
      <section style={sectionStyle}>
        <div style={overlayStyle}>
          <Typography
            variant="h1"
            sx={{
              color: (theme) => theme.palette.background.paper,
              textTransform: "uppercase",
              fontFamily: "Anton",
              fontSize: "130px",
              fontWeight: 400,
              marginBottom: "20px", 
            }}
          >
            Service
          </Typography>
          <Breadcrumbs
            separator={<span style={{ margin: "0 1px" }}>/</span>}
            aria-label="breadcrumb"
          >
            <Link
              href="#"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              sx={{
                color: (theme) => theme.palette.background.paper,
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
              }}
              onClick={this.handleServiceClick} 
            >
              Service
            </Link>
          </Breadcrumbs>
        </div>
      </section>
    );
  }
}
