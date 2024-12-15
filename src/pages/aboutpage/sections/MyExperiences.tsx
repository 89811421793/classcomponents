import { Component } from "react";
import { Container, Box, Typography } from "@mui/material";
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
    iconId: 'explinkedin',
    index: '01',
    title: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
  },
  {
    iconId: 'yahoo',
    index: '02',
    title: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
  },
  {
    iconId: 'zendesk',
    index: '03',
    title: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
  },
  {
    iconId: 'webflow',
    index: '04',
    title: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
  },
];

export class MyExperiences extends Component {
  render() {
    return (
      <section style={{ minHeight: "80vh" }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
            <SectionTitle index={3} title={'My Experiences'} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {experiences.map((experience) => (
              <Experience
                key={experience.index}
                iconId={experience.iconId}
                index={experience.index}
                title={experience.title}
                period={experience.period}
                description={experience.description}
              />
            ))}
          </Box>
        </Container>
      </section>
    );
  }
}
