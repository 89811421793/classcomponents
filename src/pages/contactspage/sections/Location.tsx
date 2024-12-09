import { Component } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

export class Location extends Component {
  render() {
    return (
      <section>
        <StyledContainer>
          <SectionTitle index={2} title="Location" />
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
