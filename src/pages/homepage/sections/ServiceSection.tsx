import { Component } from "react";
import { Container } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';

export class ServiceSection extends Component {
  render() {
    return (
      <section style={{ minHeight: '100vh' }}>
       <Container sx={{ minHeight: '100vh', display: 'flex', alignItems:'center', justifyContent:'center', position: 'relative'}}>
          <SectionTitle index={2} title={"My Service"}/>
        </Container>
      </section>
    );
  }
}
