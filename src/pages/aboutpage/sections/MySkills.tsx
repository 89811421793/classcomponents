import { Component } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import { SkillBar } from "../../../components/SkillBar";


export class MySkills extends Component {
  skills = [
    { id: 1, name: "UI/UX Design", percentage: 90 },
    { id: 2, name: "Front End Developer", percentage: 95 },
    { id: 3, name: "Graphic Design", percentage: 90 },
    { id: 4, name: "Product Design", percentage: 85 },
  ];

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
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "50px",
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
                maxWidth: "500px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
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
                borderRadius: "3px",
              }}
            >
              Download CV
            </Button>
          </Box>

          <Box>
            {this.skills.map((skill) => (
              <SkillBar
                key={skill.id}
                skillName={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </Box>
        </Container>
      </section>
    );
  }
}
