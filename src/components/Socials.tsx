import { Component } from "react";
import { styled } from "@mui/material/styles";
import { Icon } from "./Icon";

interface SocialsProps {
  spacing?: string;
  flexDirection?: "column" | "row";
  isDarkBackground?: boolean;
}

// Стилизация списка
const StyledList = styled("ul")<{
  spacing: string;
  flexDirection: "column" | "row";
}>(({ spacing, flexDirection }) => ({
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: flexDirection,
  gap: spacing,
  alignItems: "center",
}));

// Стилизация элемента списка
const StyledListItem = styled("li")({
  padding: 0,
  margin: 0,
  width: "auto",
  height: "auto",
});

export class Socials extends Component<SocialsProps> {
  render() {
    const spacing = this.props.spacing ?? "32px";
    const flexDirection = this.props.flexDirection ?? "column";
    const isDarkBackground = this.props.isDarkBackground ?? true;

    const socialLinks = isDarkBackground ? [
      { iconId: "instagram" },
      { iconId: "facebook" },
      { iconId: "linkedin" },
      { iconId: "dribble" },
    ] : [
      { iconId: "white_insta" },
      { iconId: "white_fbook" },
      { iconId: "white_in" },
      { iconId: "white_drib" },
    ];

    return (
      <StyledList spacing={spacing} flexDirection={flexDirection}>
        {socialLinks.map((link) => (
          <StyledListItem key={link.iconId}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon iconId={link.iconId} width="42" height="42" />
            </a>
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
}