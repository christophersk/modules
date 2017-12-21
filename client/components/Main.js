import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Widget from './widgets/Widget';

import FadeAndSlideTransition from './transitions/FadeAndSlide';
import Fade from './transitions/Fade';
import SlideFromLeft from './transitions/SlideFromLeft';
import SlideFromTop from './transitions/SlideFromTop';
import SlideFromRight from './transitions/SlideFromRight';
import SlideFromBottom from './transitions/SlideFromBottom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 'auto',
    width: 1260,
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true,
    }

    this.toggleEnterState = this.toggleEnterState.bind(this);
  }

  toggleEnterState() {
    this.state.in ? this.setState({ in: false }) : this.setState({ in: true })
  }

  render() {
    return (
      <div className="container-fluid" style={{padding:30}}>
      <TransitionGroup className="row">
        <SlideFromLeft propClasses={'col-sm-3'} propStyles={{height: 300}}>
              <Widget />
        </SlideFromLeft>
        <SlideFromTop propClasses={'col-sm-6'} propStyles={{height: 300}}>
            <Widget />
        </SlideFromTop>
        <SlideFromRight propClasses={'col-sm-3'} propStyles={{height: 300}}>
            <Widget />
        </SlideFromRight>
        <SlideFromLeft propClasses={'col-sm-3'} propStyles={{height: 600}}>
            <Widget />
        </SlideFromLeft>
        <SlideFromBottom propClasses={'col-sm-6'} propStyles={{height: 600}}>
            <Widget />
        </SlideFromBottom>
        <SlideFromRight propClasses={'col-sm-3'} propStyles={{height: 600}}>
            <Widget />
        </SlideFromRight>
      </TransitionGroup>
      </div>
    )
  }
}

export default Main;

