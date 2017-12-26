import React from 'react';

const styles = {
  container: {
    color: '#000',
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100%',
  }
}

export default class Widget extends React.Component {
  render() {
    return (
      <div style={{...styles.container}}>
        foo
      </div>
    )
  }
}
