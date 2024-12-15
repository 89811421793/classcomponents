import { Component } from "react";
import { Container, Box } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import Experience from "../../../components/Experience";

type ExperienceData = {
  iconId: string;
  index: string;
  title: string;
  period: string;
  description: string;
};

const experiences: ExperienceData[] = [
  {
    iconId: "explinkedin",
    index: "01",
    title: "Lead Web Developer",
    period: "2016-2020",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    iconId: "yahoo",
    index: "02",
    title: "Lead Web Developer",
    period: "2016-2020",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    iconId: "zendesk",
    index: "03",
    title: "Lead Web Developer",
    period: "2016-2020",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    iconId: "webflow",
    index: "04",
    title: "Lead Web Developer",
    period: "2016-2020",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
];

export class MyExperiences extends Component {
  render() {
    return (
      <section style={{ minHeight: "40vh", position: "relative" }}>
        <Container sx={{ minHeight: "40vh" }}>
          <Box sx={{ position: "absolute", left: "39%", top: "15%" }}>
            <SectionTitle index={3} title={"My Experiences"} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            {experiences.map((experience, index) => {
              // Устанавливаем paddingTop на основании индекса
              const paddingTop = 300 + index * 40;
              return (
                <Experience
                  key={experience.index}
                  iconId={experience.iconId}
                  index={experience.index}
                  title={experience.title}
                  period={experience.period}
                  description={experience.description}
                  isLast={index === experiences.length - 1}
                  paddingTop={paddingTop} // Передаем paddingTop как пропс
                />
              );
            })}
          </Box>
        </Container>
      </section>
    );
  }
}
