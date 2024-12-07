import { Component } from "react";
import { Container, Box } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';
import { ServiceCard } from "../../../components/ServiceCard";

export class ServicePageSection extends Component {
  render() {
    const services = [
      {
        iconId: 'uiux',
        hoverIconId: 'uiux_white',
        title: 'UI/UX Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service1'
      },
      {
        iconId: 'productdesign',
        hoverIconId: 'productdesign_white',
        title: 'Product Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service2'
      },
      {
        iconId: 'brandidentity',
        hoverIconId: 'brandidentity_white',
        title: 'Brand Identity',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service3'
      },
      {
        iconId: 'websitedesign',
        hoverIconId: 'websitedesign_white',
        title: 'Website Design',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco.',
        key: 'service4'
      },
    ];

    return (
      <section style={{ minHeight: '50vh' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative',marginTop:'100px' }}>
          <SectionTitle index={1} title={"My Service"} />
        </Box>
        <Container sx={{ marginTop: '60px', padding: '0', alignCenter:'center', marginBottom:'80px' }}>
          <Box sx={{ display: 'flex', gap: '60px', justifyContent: 'flex-start' }}>
            {services.map(service => (
              <ServiceCard
                key={service.key}
                iconId={service.iconId}
                hoverIconId={service.hoverIconId}
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
