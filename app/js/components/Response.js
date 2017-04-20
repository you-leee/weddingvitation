import React, { Component, PropTypes } from 'react';

export default class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComing: this.props.response.isComing
    };

    this.toggleCheckBoxChange = this.toggleCheckBoxChange.bind(this);
  }

  toggleCheckBoxChange() {
    this.setState(({ isComing }) => ({ isComing: !isComing }));
    this.props.updateResponse(this.props.response.name, this.state.isComing);
  }

  render() {
    const label = this.props.response.name;
    const isComing = this.state.isComing;
    return (
      <div id='response-oneperson' className='response-inner'>
        <label htmlFor='response-oneperson'>
          <input
            type='checkbox'
            value={ label }
            checked={ isComing }
            onChange={ this.toggleCheckBoxChange }
          />
          { label }
        </label>
      </div>
    );
  }
}

Response.propTypes = {
  response: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isComing: PropTypes.bool.isRequired
  }).isRequired,
  updateResponse: PropTypes.func.isRequired
};
