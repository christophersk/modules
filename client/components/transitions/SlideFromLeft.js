import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: {
    opacity: 0,
    // transform: `TranslateX(-100%)`,
  },
  entered: {
    // transform: `TranslateX(0)`,
    opacity: 1
  }
}

const SlideFromLeft = ({ in: inProp, children, propClasses, widgetHeight }) => (
  <Transition in={inProp} timeout={duration} appear={true}>
    { state => (
      <div
        className={propClasses}
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
          height: widgetHeight
      }}>
        { children }
      </div>
    )}
  </Transition>
)

export default SlideFromLeft;
