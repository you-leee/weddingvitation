import React, { Component } from 'react';
import WelcomeText from './WelcomeText';
import Schedule from './Schedule';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { names: ['asd1', 'asd2'],
      events: [{ name: 'event1', from: '2017.09.02. 16:30', to: '2017.09.02. 16:30', address: 'Budaörs' }] };
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
      </div>
    );
  }
}
