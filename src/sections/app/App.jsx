import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import environment from '../../commons/enviroment.const';

import store from '../../../store/store';
import { routes as routesConst, context } from '../../commons/routes/routes.const';

// Pages
import { doResetStore } from '../../../store/config/actions';
import Consulting from '../consulting/Consulting';
import CurrentPortfolio from '../current-portfolio/CurrentPortfolio';
import Loader from '../loader/Loader';

class App extends Component {

  componentWillMount(){
    store.dispatch(doResetStore());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={context()}>
            <div id={environment.appName} className="ui-kit-reset">
              <Loader />
              <Switch>
                <Route exact path={routesConst.comex} component={Consulting} />
                <Route exact path={routesConst.currentPortfolio} component={CurrentPortfolio} />
                <Route exact path={routesConst.default} component={Consulting} />
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
