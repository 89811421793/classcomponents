import { Component } from "react";
import { styled } from "@mui/material/styles";
import { Icon } from "./Icon";

interface SocialsProps {
  spacing?: string;
  flexDirection?: "column" | "row";
  isDarkBackground?: boolean;
}

const StyledList = styled("ul")<SocialsProps>(({ spacing, flexDirection }) => ({
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: flexDirection,
  gap: spacing,
  alignItems: "center",
}));

const StyledListItem = styled("li")({
  padding: 0,
  margin: 0,
  width: "auto",
  height: "auto",
});

export class Socials extends Component<SocialsProps> {
  render() {
    const {
      spacing = "32px",
      flexDirection = "column",
      isDarkBackground = true,
    } = this.props;

    const socialLinks = isDarkBackground
      ? ["instagram", "facebook", "linkedin", "dribble"]
      : ["white_insta", "white_fbook", "white_in", "white_drib"];

    return (
      <StyledList spacing={spacing} flexDirection={flexDirection}>
        {socialLinks.map((iconId) => (
          <StyledListItem key={iconId}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon iconId={iconId} width="42" height="42" />
            </a>
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
}
