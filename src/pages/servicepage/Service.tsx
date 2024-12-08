import { Component } from "react";
import { MyServiceSection } from "./sections/MyServiceSection";
import { ServiceTop } from "./sections/ServiceTop";
import { PartnersSection } from "./sections/PartnersSection";

export class Service extends Component {
  render() {
    return (
      <div>
        <ServiceTop />
        <MyServiceSection />
        <PartnersSection/>
      </div>
    );
  }
}
