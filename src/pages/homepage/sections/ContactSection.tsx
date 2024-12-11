import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography, Link, Button } from "@mui/material";

interface ContactSectionProps {}

interface ContactSectionState {
  name: string;
  email: string;
  message: string;
}

export class ContactSection extends React.Component<ContactSectionProps, ContactSectionState> {
  constructor(props: ContactSectionProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<ContactSectionState, keyof ContactSectionState>);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(this.state);
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
            border: "1px solid white",
          }}
        >
          {/* Левый блок */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "85px",
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
                gap: "30px",
                mt: 5,
              }}
            >
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
              border: "1px solid red",
              alignItems: "flex-start",
              gap: '65px',
              paddingTop: '20px'
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
              }}
            >
              I’m always open to discussing{" "}
              <span style={{ color: "#FE390C" }}>product design work</span> or
              partnership
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                columnGap: "30px",
                rowGap: "60px",
                width: '100%',
                border: '4px solid yellow'
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
                style={{
                  padding: "20px 16px",
                  border: "1px solid #A9A9AA",
                  borderRadius: "4px",
                  backgroundColor: "#222324",
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
                style={{
                  padding: "20px 16px",
                  border: "1px solid #A9A9AA",
                  borderRadius: "4px",
                  backgroundColor: "#222324",
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={this.state.message}
                onChange={this.handleChange}
                style={{
                  gridColumn: "1 / span 2",
                  padding: "16px",
                  border: "1px solid #A9A9AA",
                  borderRadius: "4px",
                  backgroundColor: "#222324",
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  resize: "none",
                  height: "100%",
                }}
              />
              <Button
                type="submit"
                sx={{
                  marginTop: "48px",
                  padding: "16px 24px",
                  backgroundColor: "#FE390C",
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  '&:hover': {
                    backgroundColor: "#D32F2F",
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </form>
          </Box>
        </Container>
      </section>
    );
  }
}
