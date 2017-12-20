import React, { Component } from 'react';
import { connect } from 'react-redux';

class Widget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const styles = {
      container: {
        margin: '1%',
        width: '23%',
        height: 300,
        backgroundColor: 'rgba(244,244,244,0.1)',
        transition: 'transform 300ms ease-in-out',
        transform: 'translate(200px, 150px) rotate(20deg)',
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

export default connect(mapState, mapDispatch)(Widget);
