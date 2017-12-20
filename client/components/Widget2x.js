import React, { Component } from 'react';
import { connect } from 'react-redux';

class Widget2x extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        margin: '1%',
        width: '48%',
        height: 300,
        backgroundColor: 'rgba(244,244,244,0.1)',
      }
    };

    return (
      <div style={styles.container}>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Widget2x);
