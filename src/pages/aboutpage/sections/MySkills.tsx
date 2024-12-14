import { Component } from "react";
import { Container, Box, Typography } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";

export class MySKills extends Component {
  render() {
    return (
      <section style={{ minHeight: "80vh", padding:'80px 150px', backgroundColor: "#F7F7F7" }}>
        <Container sx={{minHeight:'80vh', display:'flex', justifyContent:'space-between', border:'2px ridge navy'}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', border:'2px dotted forestgreen'}}>
                <SectionTitle index={2} title={'My Skills'}/>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', border:'2px dotted forestgreen'}}>
                правый блок
            </Box>
        </Container>
      </section>
    );
  }
}
