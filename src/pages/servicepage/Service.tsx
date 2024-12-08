import { Component } from "react";
import { MyServiceSection } from "./sections/MyServiceSection";
import { ServiceTop } from "./sections/ServiceTop";

export class Service extends Component {
  render() {
    return (
      <div>
        <ServiceTop />
        <MyServiceSection />
      </div>
    );
  }
}
