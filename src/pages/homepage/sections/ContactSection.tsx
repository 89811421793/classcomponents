import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Socials } from "../../../components/Socials";
import { Container, Box, Typography } from "@mui/material";
import ContactForm from "../../../components/ContactForm";
import { ContactData } from "../../../components/ContactData";

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

interface ContactSectionProps {
  sectionBackgroundColor?: string;
}

export class ContactSection extends React.Component<ContactSectionProps> {
  handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
  };

  render() {
    const { sectionBackgroundColor = "#111214" } = this.props;
    const isDarkBackground = ["#111214", "#F7F7F7","#000", "#FFFFFF"].includes(sectionBackgroundColor);
    const textColor = isDarkBackground ? "#FFF" : "#111214";

    return (
      <section
        style={{
          backgroundColor: sectionBackgroundColor,
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
              sectionBackgroundColor={sectionBackgroundColor}
              overrideIndex={sectionBackgroundColor === "#F7F7F7" || sectionBackgroundColor === "white"|| sectionBackgroundColor === "#FFF"? 1 : undefined}
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
              <ContactData contactLinks={contactLinks} textColor={textColor} sectionBackgroundColor={sectionBackgroundColor} />
              <Socials flexDirection="row" isDarkBackground={isDarkBackground} />
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
                color: textColor,
                marginBottom: "30px",
              }}
            >
              I’m always open to discussing{" "}
              <span style={{ color: "#FE390C" }}>product design work</span> or partnership
            </Typography>
            <ContactForm onSubmit={this.handleFormSubmit} sectionBackgroundColor={sectionBackgroundColor} />
          </Box>
        </Container>
      </section>
    );
  }
}
