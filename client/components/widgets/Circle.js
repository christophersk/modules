import React from 'react';

const styles = {
  container: {
    color: '#000', backgroundColor: 'rgba(0,0,0,0.3',
    height: '100%',
  }, wrapper: {
    animation: 'rotate 2s infinite',
    display: 'inline-block',
    height: '280px',
    width: '280px',
  }, circle: {
    position: 'absolute',
    border: '40px solid transparent',
    'borderTopColor': 'blue',
    'borderRightColor': 'blue',
    'borderRadius': '50%',
    height: '280px',
    width: '280px',
    transform: 'rotate(-45deg)',
    animation: 'rotate 2s infinite reverse linear',
  }, circle2: {
    position: 'absolute',
    border: '40px solid transparent',
    'borderBottomColor': 'white',
    'borderLeftColor': 'white',
    'borderRadius': '50%',
    height: '280px',
    width: '280px',
    transform: 'rotate(-45deg)',
    animation: 'rotate 2s infinite linear',
  }
}

let styleSheet = document.styleSheets[0];

let keyframes = `@keyframes rotate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(315deg);
  }`

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default class Circle extends React.Component {
  render() {
    return (
      <div style={{...styles.container}}>
        <div style={{...styles.wrapper}}>
        <div style={{...styles.circle}}></div>
        <div style={{...styles.circle2}}></div>
        </div>
      </div>
    )
  }
}
