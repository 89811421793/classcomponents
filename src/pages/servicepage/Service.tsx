import { Component } from "react";
import { MyServiceSection } from "./sections/MyServiceSection";
import { ServiceTop } from "./sections/ServiceTop";
import { PartnersSection } from "./sections/PartnersSection";
import { Testimonial } from "./sections/Testimonial";

export class Service extends Component {
  render() {
    return (
      <div>
        <ServiceTop />
        <MyServiceSection />
        <PartnersSection/>
        <Testimonial/>
      </div>
    );
  }
}
