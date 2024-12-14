import React, { Component } from 'react';
import { AboutTop } from './sections/AboutTop';
import { PartnersSection } from './sections/PartnersSection';
import { AboutMeSection } from './sections/AboutMeSection';
import { MySkills} from './sections/MySkills';
import { MyExperiences } from './sections/MyExperiences';

export class About extends Component {
    render() {
        return (
            <React.Fragment>
             <AboutTop/>
             <AboutMeSection/>
             <MySkills/>
             <MyExperiences/>
             <PartnersSection/>
            </React.Fragment>
        );
    }
}