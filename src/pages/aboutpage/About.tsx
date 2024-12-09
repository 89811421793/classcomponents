import { Component } from 'react';
import { AboutTop } from './sections/AboutTop';
import { PartnersSection } from './sections/PartnersSection';

export class About extends Component {
    render() {
        return (
            <div>
             <AboutTop/>
             <PartnersSection/>
            </div>
        );
    }
}