import React, { Component, PropTypes } from 'react';
import Moment from 'moment-timezone';

export default class Event extends Component {
  // TODO: timezone??

  render() {
    Moment.locale('hu');
    const from = Moment(this.props.event.from).format('L LT');
    const to = Moment(this.props.event.to).format('L LT');

    return (
      <div className='event-inner'>
        <div className='event-title'>
          <h3>{this.props.event.name}</h3>
        </div>
        <div className='event-time'>
          {from} - {to}
        </div>
        <div className='event-address'>
          Cím: {this.props.event.address}
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    address: PropTypes.string
  }).isRequired
};
