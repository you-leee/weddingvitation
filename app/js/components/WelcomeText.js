import React, { Component, PropTypes } from 'react';

export default class WelcomeText extends Component {
  getNames() {
    return this.props.names.join(', ');
  }

  render() {
    return (
      <div className='welcomeText-inner'>
        Kedves {this.getNames()}!<br />
        <br />
        Szeretettel..<br />
        ...<br />
        ...<br />
        ..<br />
        .<br />
        ---------------------------<br />
      </div>
    );
  }
}

WelcomeText.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired
};
