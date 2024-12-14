import React from "react";
import { Container as MuiContainer, Box, styled } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import designAboutImage from "../../../assets/images/design_about.jpg"; // Правильный импорт изображения

export type AboutMeSectionProps = {};

export class AboutMeSection extends React.Component<AboutMeSectionProps> {
  render() {
    return (
      <section style={{ minHeight: '100vh' }}>
        <Container>
          <LeftBlock>
            <img src={designAboutImage} alt="About Me" width={485} height={667} />
          </LeftBlock>
          <RightBlock>
       
          <SectionTitle index={1} title={"About Me"} />
         
          </RightBlock>
        </Container>
       
      </section>
    );
  }
}

const Container = styled(MuiContainer)({
    minHeight: '70vh',
    display: 'flex',
    marginTop: '80px',
  });

const LeftBlock = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid crimson',
    width: '50%', 
    height: '100%' 
  });
  
  const RightBlock = styled(Box)({
    border: '1px solid crimson',
    width: '50%', 
    height: '100%'
  });
