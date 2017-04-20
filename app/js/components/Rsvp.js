import React, { Component, PropTypes } from 'react';
import Response from './Response';

export default class Rsvp extends Component {

  render() {
    const Responses = this.props.responses.map(response =>
      (<Response response={ response } key={ response.name } updateResponse={ this.props.updateResponse } />));

    return (
      <div className='rsvp-inner'>
        <h2>Visszajelzés</h2>
        <form onSubmit={ this.props.handleSubmit }>
          { Responses }
          <input type='submit' value='Mentés' />
        </form>
      </div>
    );
  }
}

Rsvp.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateResponse: PropTypes.func.isRequired
};
