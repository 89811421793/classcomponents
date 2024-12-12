import { Component } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Container,Box } from "@mui/material";
import { styled } from "@mui/system";
import { ContactSection } from "../../homepage/sections/ContactSection";

export class Location extends Component {
  render() {
    return (
      <section>
        <ContactSection sectionBackgroundColor='white'/>
        <StyledContainer>
          <Box sx={{display:'flex', justifyContent:'flex-start'}}>
          <SectionTitle index={2} title="Location" />
          </Box>
          <MapWrapper>
            <Iframe
              src="https://yandex.com/map-widget/v1/-/CCU8wZ5F?ll=-77.0369,38.9072&z=11&l=map&pt=-77.0369,38.9072~w,-77.0653,38.8048~w"
              allowFullScreen
              loading="lazy"
            />
          </MapWrapper>
        
        </StyledContainer>
      </section>
    );
  }
}

const StyledContainer = styled(Container)({
  marginBottom: "80px",
  paddingTop: "30px",
});

const MapWrapper = styled("div")({
  marginTop: "60px",
  textAlign: "center",
  borderRadius: '15px'
});

const Iframe = styled("iframe")({
  width: "100%",
  height: "400px",
  border: "none",
  minHeight: "511px",
  borderRadius: '15px'
});
