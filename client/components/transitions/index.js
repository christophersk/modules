import React from 'react';
import SlideFromLeft from './SlideFromLeft';

const createWrapper = (layout) => {
  switch (layout.transitionId) {
    case 1:
      return <SlideFromLeft />
    default:
      return <SlideFromLeft />
  }
}

const TransitionWrapper = ({ layout }) => createWrapper(layout);

export default TransitionWrapper;
