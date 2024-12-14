import { Component, Fragment } from 'react';
import { ContactsTop } from './sections/ContactsTop';
import { Location } from './sections/Location';
import { ContactSection } from '../homepage/sections/ContactSection';

export class Contacts extends Component {
    render() {
        return (
            <Fragment>
              <ContactsTop/>
              <ContactSection sectionBackgroundColor='white'/>
              <Location/>
            </Fragment>
        );
    }
}

