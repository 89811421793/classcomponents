import React, { Component } from 'react';
import { AboutTop } from './sections/AboutTop';
import { PartnersSection } from './sections/PartnersSection';
import { AboutMeSection } from './sections/AboutMeSection';
import { MySKills } from './sections/MySkills';
import { MyExperiences } from './sections/MyExperiences';

export class About extends Component {
    render() {
        return (
            <React.Fragment>
             <AboutTop/>
             <AboutMeSection/>
             <MySKills/>
             <MyExperiences/>
             <PartnersSection/>
            </React.Fragment>
        );
    }
}