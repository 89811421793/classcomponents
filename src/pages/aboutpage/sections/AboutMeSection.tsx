import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";

export class AboutMeSection extends React.Component {
  render() {
    return (
      <section style={{minHeight:'100vh'}}>
        <Container sx={{minHeight:'70vh', border:'1px solid',marginTop:'80px'}}>
          <SectionTitle index={1} title={"About Me"} />
        </Container>
      </section>
    );
  }
}
