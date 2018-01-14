import React, { Component } from 'react';
import { connect } from 'react-redux';

import BarOne from '../widgets/BarOne';

class Face extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level: 0,
    }

    this.incrementLevel = this.incrementLevel.bind(this);
    this.decrementLevel = this.decrementLevel.bind(this);
  }

  incrementLevel() {
    const { level } = this.state;
    this.setState({ level: (level + 1) })
  }

  decrementLevel() {
    const { level } = this.state;
    this.setState({ level: (level - 1) })
  }

  render() {
    const { aggregates } = this.props;
    const { level } = this.state;

    const aggregatesArr = Object.entries(aggregates);

    console.log('aggregatesArr is', aggregatesArr);

    return (
      <div style={{ position: 'relative' }}>
        {
          aggregatesArr.map((entry, index) => <BarOne key={entry[0]} data={entry[1]} index={index} level={level} />)
        }
        <div style={{position: 'absolute', top: 400 }}>
        <button onClick={this.incrementLevel} >Drill Down</button>
        <button onClick={this.decrementLevel} >Drill Up</button>
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Face);
