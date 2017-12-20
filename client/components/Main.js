import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Widget from './Widget';
import Widget2x from './Widget2x';

const Main = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    }
  }

  return (
    <div style={styles.container}>

      <Widget />
      <Widget2x />
      <Widget />
      <Widget />
    </div>
  )
}

export default Main;
