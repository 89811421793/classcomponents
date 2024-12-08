import { Component } from "react";
import { PortfolioSlides } from "./sections/PortfolioSlides";
import { PortfolioTop } from "./sections/PortfolioTop";
import { PartnersSection } from "../servicepage/sections/PartnersSection";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioTop />
        <PortfolioSlides />
        <PartnersSection/>
      </div>
    );
  }
}
