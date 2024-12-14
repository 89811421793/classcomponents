import { Component } from "react";
import { Container, Box, Typography } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";

export class MyExperiences extends Component {
  render() {
    return (
      <section style={{ minHeight: "80vh"}}>
        <Container>
            <Box sx={{display:'flex', justifyContent:'center', marginTop:'10%'}}>
              <SectionTitle index={3} title={'My Experiences'}/>
            </Box>
        </Container>
      </section>
    );
  }
}