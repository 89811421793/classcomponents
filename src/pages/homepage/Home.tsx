import { Component } from 'react';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';
import { ServiceSection } from './sections/ServiceSection';
import { PortfolioSection } from './sections/PortfolioSection';

export class Home extends Component {
    render() {
        return (
            <div>
               <Hero/>
               <AboutSection/>
               <ServiceSection/>
               <PortfolioSection/>
            </div>
        );
    }
}

