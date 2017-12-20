import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import history from './history';

import Main from './components/Main';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <Router history={history}>
              <div>
                  <Route exact path="/" component={Main} />
              </div>
            </Router>
        )
    }
}

export default Routes;
