import { Component } from 'react';
import { ContactsTop } from './sections/ContactsTop';
import { Location } from './sections/Location';

export class Contacts extends Component {
    render() {
        return (
            <div>
              <ContactsTop/>
              <Location/>
            </div>
        );
    }
}

