import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography, Link } from "@mui/material";

export class ContactSection extends React.Component {
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
            border: "1px solid white",
          }}
        >
          {/*Левый блок*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              border: "1px solid red",
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
                mt: 5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="phone" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Phone</Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    (219) 555-0114
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="email" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Email</Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    robertfox@example.com
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Icon iconId="pin" width="19" height="19" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body1">Address</Typography>
                  <Link
                    href="#"
                    variant="body1"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Link>
                </Box>
              </Box>
            </Box>
            <Socials flexDirection="row" />
          </Box>

          {/*Правый блок*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              border: "1px solid red",
              alignItems: "flex-start",
              width: "fit-content",
            }}
          >
            <Typography
              variant="body1"
              sx={{ mb: 5, fontFamily:'Anton', fontWeight:'400', fontSize:'24px' }}
            >
              I’m always open to discussing product design work or partnership
            </Typography>
            <form></form>
          </Box>
        </Container>
      </section>
    );
  }
}
