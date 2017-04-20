import React, { Component, PropTypes } from 'react';
import Event from './Event';

export default class Schedule extends Component {
  render() {
    const Events = this.props.events.map(event => (<Event event={ event } key={ event.name } />));

    return (
      <div className='schedule-inner'>
        <h2>Menetrend</h2>
        { Events }
      </div>
    );
  }
}

Schedule.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};
