import { Component } from 'react';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/AboutSection';

export class Home extends Component {
    render() {
        return (
            <div>
               <Hero/>
               <AboutSection/>
            </div>
        );
    }
}

