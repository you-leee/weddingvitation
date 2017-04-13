import React, { Component } from 'react';

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
