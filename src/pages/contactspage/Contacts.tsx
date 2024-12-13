import { Component } from 'react';
import { ContactsTop } from './sections/ContactsTop';
import { Location } from './sections/Location';
import { ContactSection } from '../homepage/sections/ContactSection';

export class Contacts extends Component {
    render() {
        return (
            <div>
              <ContactsTop/>
              <ContactSection sectionBackgroundColor='white'/>
              <Location/>
            </div>
        );
    }
}

