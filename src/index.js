import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteApp from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch } from 'react-router-dom';
// import { WeatherContextProvider } from "./context/weatherContext";
import AppContent from './pages/content/content';
import AppHome from './pages/home/home';
import ForecastDaysCarouser from './components/forecast-days-carouser/forecast-days-carouser';

{/* <WeatherContextProvider > */}
{/* </WeatherContextProvider>, */}

ReactDOM.render(
  
    <BrowserRouter>
        <Switch>
          <RouteApp exact path={'/:location/:day'} component={ForecastDaysCarouser} />
          <RouteApp exact path={'/:location'} component={AppContent} />
          <RouteApp path={'/'} component={AppHome} />
        </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
