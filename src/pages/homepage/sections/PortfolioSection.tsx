import { Component } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Container } from "@mui/material";

export class PortfolioSection extends Component {
    render() {
        return (
            <section style={{ minHeight: '100vh', position:'relative',  backgroundColor: "#F7F7F7", paddingTop:'100px' }}>
                <Container sx={{minHeight: '80vh', border:'3px solid'}}>
              <SectionTitle index={3} title={"Portfolio"} />
              </Container>
            </section>
        );
    }
}

