import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography, Link, Button } from "@mui/material";

type ContactSectionProps = {}

type ContactSectionState = {
  name: string;
  email: string;
  message: string;
}

export class ContactSection extends React.Component<
  ContactSectionProps,
  ContactSectionState
> {
  constructor(props: ContactSectionProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      ContactSectionState,
      keyof ContactSectionState
    >);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            <form
              onSubmit={this.handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "30px",
                rowGap: "50px",
                maxWidth: "654px",
                width: "100%",
              }}
            >
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#FFF",
                }}
              >
                Your name*
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  style={{
                    padding: "20px 16px",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: "#CACDD11A",
                    color: "#FFF",
                    border: "none",
                    marginTop: "10px",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                  placeholder="Enter your name here"
                />
              </label>
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#FFF",
                }}
              >
                Email address*
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{
                    padding: "20px 16px",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: "#CACDD11A",
                    color: "#FFF",
                    border: "none",
                    marginTop: "10px",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                  placeholder="Enter your email address"
                />
              </label>
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#FFF",
                  gridColumn: "1 / span 2",
                }}
              >
                Message
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  style={{
                    padding: "20px 16px",
                    width: "100%",
                    height: "124px",
                    resize: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#CACDD11A",
                    color: "#FFF",
                    border: "none",
                    marginTop: "10px",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                  }}
                  placeholder="Write your message here"
                />
              </label>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  padding: "16px 24px",
                  backgroundColor: "#FE390C",
                  color: "#FFF",
                  maxWidth: "fit-content",
                  "&:hover": {
                    backgroundColor: "#FE390C",
                  },
                  borderRadius: "3px",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Container>
      </section>
    );
  }
}
