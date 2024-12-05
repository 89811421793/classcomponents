import { Component } from "react";
import { Container, Box } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';
import { ServiceCard } from "../../../components/ServiceCard";

export class ServiceSection extends Component {
  render() {
    const services = [
      {
        iconId: 'uiux',
        title: 'UI/UX Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service1'
      },
      {
        iconId: 'productdesign',
        title: 'Product Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service2'
      },
      {
        iconId: 'brandidentity',
        title: 'Brand Identity',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service3'
      },
      {
        iconId: 'websitedesign',
        title: 'Website Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service4'
      },
    ];

    return (
      <section style={{ minHeight: '100vh' }}>
        <Box sx={{ minHeight: '55vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
          <SectionTitle index={2} title={"My Service"} />
        </Box>
        <Container sx={{ marginTop: '60px', padding: '0', marginLeft:'6%', marginBottom:'80px' }}>
          <Box sx={{ display: 'flex', gap: '60px', justifyContent: 'flex-start' }}>
            {services.map(service => (
              <ServiceCard
                key={service.key}
                iconId={service.iconId}
                title={service.title}
                description={service.description}
              />
            ))}
          </Box>
        </Container>
      </section>
    );
  }
}
