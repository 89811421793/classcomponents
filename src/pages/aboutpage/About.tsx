import { Component } from 'react';
import { AboutTop } from './sections/AboutTop';
import { PartnersSection } from './sections/PartnersSection';
import { AboutMeSection } from './sections/AboutMeSection';

export class About extends Component {
    render() {
        return (
            <div>
             <AboutTop/>
             <AboutMeSection/>
             <PartnersSection/>
            </div>
        );
    }
}