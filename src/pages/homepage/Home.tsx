import { Component } from 'react';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';
import { ServiceSection } from './sections/ServiceSection';

export class Home extends Component {
    render() {
        return (
            <div>
               <Hero/>
               <AboutSection/>
               <ServiceSection/>
            </div>
        );
    }
}

