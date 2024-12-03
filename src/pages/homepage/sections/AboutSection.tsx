import { Component } from 'react';
import { Container } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';

export class AboutSection extends Component {
    render() {
        return (
            <div>
               <Container>
           <SectionTitle index={1} title={"About Me"}/>
               </Container>
            </div>
        );
    }
}

