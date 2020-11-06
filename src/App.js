import React from 'react';

import { Route } from 'react-router-dom';

import Layout from './pages/layout/layout';

const App = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout >
          <div className="site-layout-background weather-home-distribution weather-home-visual-style" >
            <Component {...routeProps} />
          </div>
        </Layout>
      )}
    />
  );
};

export default App;