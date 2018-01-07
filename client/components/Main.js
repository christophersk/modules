import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Widget from './widgets/Widget';
import Circle from './widgets/Circle';
import ChartOne from './widgets/ChartOne';
import Circle2 from './widgets/Circle2';

// import FadeAndSlideTransition from './transitions/FadeAndSlide';
// import Fade from './transitions/Fade';
import SlideFromLeft from './transitions/SlideFromLeft';
// import SlideFromTop from './transitions/SlideFromTop';
// import SlideFromRight from './transitions/SlideFromRight';
// import SlideFromBottom from './transitions/SlideFromBottom';
import TransitionWrapper from './transitions';

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

const transitions = [
  { id: 1, widget: <SlideFromLeft /> }
]

const layouts = [
  { id: 1, width: 'col-sm-4', height: 300, transitionId: 1, widgetType: 1 },
  { id: 2, width: 'col-sm-4', height: 300, transitionId: 1, widgetType: 1 },
  { id: 3, width: 'col-sm-4', height: 300, transitionId: 1, widgetType: 1 },
]

const features = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true,
    }

    this.toggleEnterState = this.toggleEnterState.bind(this);
    this.createComponent = this.createComponent.bind(this);
  }

  toggleEnterState() {
    this.state.in ? this.setState({ in: false }) : this.setState({ in: true })
  }

  createComponent(layout) {
    switch (layout.widgetType) {
      case 1:
        return (
          <TransitionWrapper layout={layout} key={`layout-${layout.id}`}>
            <Widget />
          </TransitionWrapper>
        );
      case 2:
        return <Circle key={`layout-${layout.id}`} />
      case 3:
        return <ChartOne key={`layout-${layout.id}`} />
      default:
        return 'foo';
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{padding:30}}>
      <TransitionGroup className="row">
        {
          features.map(feature => {
            const thisLayout = layouts.find(layout => layout.id === feature.id)
            return this.createComponent(thisLayout)
          })
        }
        <SlideFromLeft propClasses={'col-sm-12'} propStyles={{height: 400}}>
          <ChartOne />
        </SlideFromLeft>

        <SlideFromLeft propClasses={'col-sm-12'} propStyles={{height: 500}}>
        <Circle2 />
        </SlideFromLeft>


      </TransitionGroup>
      </div>
    )
  }
}

export default Main;

// <SlideFromTop propClasses={'col-sm-6'} propStyles={{height: 300}}>
// <Widget />
// </SlideFromTop>
// <SlideFromRight propClasses={'col-sm-3'} propStyles={{height: 300}}>
// <Widget />
// </SlideFromRight>
// <SlideFromLeft propClasses={'col-sm-3'} propStyles={{height: 600}}>
// <Widget />
// </SlideFromLeft>
// <SlideFromBottom propClasses={'col-sm-6'} propStyles={{height: 600}}>
// <Widget />
// </SlideFromBottom>
// <SlideFromRight propClasses={'col-sm-3'} propStyles={{height: 600}}>
// <Widget />
// </SlideFromRight>



