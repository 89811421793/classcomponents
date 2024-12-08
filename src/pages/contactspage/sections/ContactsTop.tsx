import React, { Component } from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";
import contactBg from "../../../assets/images/Contact_bg.jpg";
import contactsLetters from "../../../assets/images/Contact_letters.png";

type ContactsTopProps = {};

type ContactsTopState = {};

export class ContactsTop extends Component<ContactsTopProps, ContactsTopState> {
  handleContactsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
  };

  render() {
    const sectionStyle: React.CSSProperties = {
      minHeight: "80vh",
      backgroundImage: `url(${contactBg})`,
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
      backgroundImage: `url(${contactsLetters})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
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
            }}
          >
            Contact
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
              onClick={this.handleContactsClick}
            >
              Contacts
            </Link>
          </Breadcrumbs>
        </div>
      </section>
    );
  }
}
