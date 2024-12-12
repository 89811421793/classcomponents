import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography, Link } from "@mui/material";
import ContactForm from "../../../components/ContactForm";


export class ContactSection extends React.Component {
  handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
  };

  render() {
    return (
      <section
        style={{
          backgroundColor: "#111214",
          minHeight: "80vh",
          paddingTop: "100px",
        }}
      >
        <Container
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Левый блок */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "50px",
            }}
          >
            <SectionTitle
              index={5}
              title="Contact"
              sectionBackgroundColor="#111214"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "48px",
                mt: 5,
              }}
            >
              {/* Ваши контактные данные */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="phone" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    Phone
                  </Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "14px",
                      textDecoration: "none",
                      color: "#A9A9AA",
                    }}
                  >
                    (219) 555-0114
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="email" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    Email
                  </Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "14px",
                      textDecoration: "none",
                      color: "#A9A9AA",
                    }}
                  >
                    robertfox@example.com
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="pin" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#FFF",
                    }}
                  >
                    Address
                  </Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "14px",
                      textDecoration: "none",
                      color: "#A9A9AA",
                    }}
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Link>
                </Box>
              </Box>
            </Box>
            <Socials flexDirection="row" />
          </Box>

          {/* Правый блок */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "65px",
              paddingTop: "20px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontFamily: "Anton",
                fontWeight: "400",
                fontSize: "24px",
                color: "#fff",
                marginBottom: "30px",
              }}
            >
              I’m always open to discussing{" "}
              <span style={{ color: "#FE390C" }}>product design work</span> or
              partnership
            </Typography>
            <ContactForm onSubmit={this.handleFormSubmit} sectionBackgroundColor="#F7F7F7" />
          </Box>
        </Container>
      </section>
    );
  }
}
