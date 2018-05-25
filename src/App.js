import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  Paper  from 'material-ui/Paper';
import  AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer  from './containers/ForecastExtendedContainer';


import './App.css';

const cities = [
  'Barcelona,es',
  'Las Palmas de Gran Canaria,es',
  'Almería,es',
  'Granada,es',
  'Madrid,es'
];


class App extends Component {

  render() {

    return (
      <MultiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title="Weather App" />
          </Col>  
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper zDepth={4}>
              <div className="detail">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>  
          </Col>
        </Row>  
      </Grid>
      </MultiThemeProvider>
    );
  }
}



export default App;


