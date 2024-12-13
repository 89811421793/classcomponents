import React from "react";
import { Typography, Link, Box } from "@mui/material";
import { Icon } from "./Icon";

interface ContactLink {
  id: string;
  iconId: string;
  title: string;
  link: string;
  href: string;
}

interface ContactDataProps {
  contactLinks: ContactLink[];
  textColor: string;
  sectionBackgroundColor: string;
}

export class ContactData extends React.Component<ContactDataProps> {
  render() {
    const { contactLinks, textColor, sectionBackgroundColor } = this.props;
    const isLightBackground = ["#FFFFFF"].includes(sectionBackgroundColor);
    const titleColor = isLightBackground ? "#111214" : textColor;

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "48px",
        }}
      >
        {contactLinks.map(({ id, iconId, title, link, href }) => (
          <Box key={id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Icon iconId={iconId} width="21" height="25" />
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: titleColor,
                }}
              >
                {title}
              </Typography>
              <Link
                href={href}
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "#A9A9AA",
                }}
              >
                {link}
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }
}
