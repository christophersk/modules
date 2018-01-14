import React, { Component } from 'react';
import { connect } from 'react-redux';

import Face from './Face';

const facts = {
  alpha: {
    dateCreated: '2018-01-01',
    isAdmin: false,
  },
  beta: {
    dateCreated: '2018-01-01',
    isAdmin: true,
  },
  charlie: {
    dateCreated: '2018-01-01',
  },
  delta: {
    dateCreated: '2018-01-02',
  },
  echo: {
    dateCreated: '2018-01-02',
  }
}

const aggregates = {
  day: {
    '2018-01-01': 3,
    '2018-01-02': 2,
  },
  week: {
    '01': 5,
  },
}

class Cube extends Component {
  constructor(props) {
    super(props)

    this.state = {
      faces: [
        <Face key={1} data={'foo'} aggregates={aggregates} />,
        // <Face key={2} data={'foo'} aggregates={aggregates} />,
        // <Face key={3} data={'foo'} aggregates={aggregates} />,
        // <Face key={4} data={'foo'} aggregates={aggregates} />,
      ]
    }
  }

  render() {
    const { faces } = this.state;

    return (
      <div>
        {
          faces.map(face => face)
        }
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Cube);
