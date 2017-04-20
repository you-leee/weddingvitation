import React, { Component } from 'react';
import WelcomeText from './WelcomeText';
import Schedule from './Schedule';
import Rsvp from './Rsvp';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { names: ['asd1', 'asd2'],
      events: [{ name: 'event1', from: '2017-09-02 16:30', to: '2017-09-02 17:30', address: 'Budaörs' },
      { name: 'event2', from: '2017-09-02 17:30', to: '2017-09-02 18:30', address: 'Budaörs' }],
      responses: [{ name: 'asd1', isComing: true },
      { name: 'asd2', isComing: false }] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
    this.sortResponsesByName = this.sortResponsesByName.bind(this);
  }

  updateResponse(name, isComing) {
    const newStates = this.state.responses.filter(response => response.name !== name);
    newStates.push({ name, isComing });
    this.setState({ responses: this.sortResponsesByName(newStates) });
  }

  sortResponsesByName(objs) {
    return objs.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  // TODO: form handling
  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.responses);
  }

  render() {
    return (
      <div className='main'>
        <div className='welcomeText'>
          <WelcomeText names={ this.state.names } />
        </div>
        <div className='schedule'>
          <Schedule events={ this.state.events } />
        </div>
        <div className='rsvp'>
          <Rsvp responses={ this.state.responses } handleSubmit={ this.handleSubmit } updateResponse={ this.updateResponse } />
        </div>
      </div>
    );
  }
}
