import { Component } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Container, Box } from "@mui/material";
import { PortfolioTabs } from '../../../components/PortfolioTabs';


export class PortfolioSection extends Component {
    render() {
        return (
            <section style={{ minHeight: '100vh', position: 'relative', backgroundColor: "#F7F7F7", paddingTop: '100px' }}>
                <Container sx={{ minHeight: '80vh', border: '3px solid' }}>
                    <Box sx={{ display: 'inline-block', marginRight: '90px' }}>
                        <SectionTitle index={3} title={"Portfolio"} />
                    </Box>
                    <Box sx={{ display: 'inline-block'}}>
                    <PortfolioTabs/>
                    </Box>
                </Container>
            </section>
        );
    }
}


