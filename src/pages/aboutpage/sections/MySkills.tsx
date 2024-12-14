import { Component } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import { SkillBar } from "../../../components/SkillBar";

type MySkillsProps = {};

type MySkillsState = {};

export class MySKills extends Component<MySkillsProps, MySkillsState> {
  render() {
    return (
      <section
        style={{
          minHeight: "50vh",
          padding: "80px 150px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Container
          sx={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "space-between",
            border: "2px ridge navy",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent:'space-between',
              border: "2px dotted forestgreen",
            }}
          >
            <SectionTitle index={2} title={"My Skills"} />
            <Typography
              sx={{
                color: "#A9A9AA",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "32px",
                maxWidth:'485px'
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button
              sx={{
                padding: "16px 24px",
                color: "white",
                textTransform: "uppercase",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: 600,
                backgroundColor: "#FE390C", 
                borderRadius:'3px'
              }}
            >
              Download CV
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "2px dotted forestgreen",
            }}
          >
             <SkillBar skillName="UI/UX Design" percentage={90} />
            <SkillBar skillName="Front End Developer" percentage={95} />
            <SkillBar skillName="Graphic Design" percentage={90} />
            <SkillBar skillName="Product Design" percentage={85} />
          </Box>
        </Container>
      </section>
    );
  }
}
