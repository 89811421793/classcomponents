import { Component } from "react";
import { PortfolioSlides } from "./sections/PortfolioSlides";
import { PortfolioTop } from "./sections/PortfolioTop";
import { PartnersSection } from "../servicepage/sections/PartnersSection";
import { QuestionsSection } from "./sections/QuestionsSection";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioTop />
        <PortfolioSlides />
        <PartnersSection/>
        <QuestionsSection/>
      </div>
    );
  }
}
