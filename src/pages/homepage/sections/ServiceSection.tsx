import { Component } from "react";
import { Container } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';

export class ServiceSection extends Component {
  render() {
    return (
      <section style={{ minHeight: '80vh' }}>
       <Container sx={{ minHeight: '80vh', display: 'flex', alignItems:'center', justifyContent:'center', position: 'relative'}}>
          <SectionTitle index={2} title={"My Service"}/>
        </Container>
      </section>
    );
  }
}
