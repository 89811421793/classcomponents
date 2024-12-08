import { Component } from "react";
import { PortfolioSlides } from "./sections/PortfolioSlides";
import { PortfolioTop } from "./sections/PortfolioTop";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioTop />
        <PortfolioSlides />
      </div>
    );
  }
}
