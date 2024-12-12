import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography, Link } from "@mui/material";
import ContactForm from "../../../components/ContactForm";

interface ContactLink {
  id: string;
  iconId: string;
  title: string;
  link: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  { id: "phone", iconId: "phone", title: "Phone", link: "(219) 555-0114", href: "#" },
  { id: "email", iconId: "email", title: "Email", link: "robertfox@example.com", href: "#" },
  { id: "address", iconId: "pin", title: "Address", link: "4517 Washington Ave. Manchester, Kentucky 39495", href: "#" },
];

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
              {contactLinks.map((link) => (
                <Box key={link.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Icon iconId={link.iconId} width="19" height="19" />
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
                      {link.title}
                    </Typography>
                    <Link
                      href={link.href}
                      variant="body1"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        fontSize: "14px",
                        textDecoration: "none",
                        color: "#A9A9AA",
                      }}
                    >
                      {link.link}
                    </Link>
                  </Box>
                </Box>
              ))}
              <Socials flexDirection="row" />
            </Box>
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
            <ContactForm onSubmit={this.handleFormSubmit} sectionBackgroundColor="#111214" />
          </Box>
        </Container>
      </section>
    );
  }
}
