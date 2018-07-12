import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import '../App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import LocationList from './LocationList';
import LocationSelector from './LocationSelector';
import User from './User';
import UserCard from './UserCard';

import {getUser} from '../actions/userAction';
import {addLocation, clearLocations} from '../actions/locationAction';

import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import ProgressRing from "react-uwp/ProgressRing";
import DropDownMenu from "react-uwp/DropDownMenu";

const baseStyle: React.CSSProperties = {
  margin: "10px 20px 10px 0"
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCountry: '',
      selectedState: '',
      selectedCity: '',
      locations: [],
      userID: '',
      selectedAreas: [],
      areas: []
    }

    this.updateSelectedAreas = this.updateSelectedAreas.bind(this);
  }
  addLocationToList = () => {
    const {selectedCountry, selectedState, selectedCity, areas} = this.state
    const newLocation = {
      selectedCountry,
      selectedState,
      selectedCity,
      areas: areas.join()
    }
    const locations = [...this.state.locations, newLocation]
    if(selectedCountry && selectedState && selectedCity && areas.length>0)
      this.props.addLocation(newLocation)
    else alert('Please select all options before adding');
  }
    
  getUserData(e){
    e.preventDefault();
    this.props.getUser(this.state.userID)      
  }

  updateSelectedAreas(currentArea){
    let selectedAreas = [];
    let areas = [];
    if(currentArea.selected){
      selectedAreas = [...this.state.selectedAreas, currentArea];
      areas = [...this.state.areas, currentArea.name];
    }else{
      selectedAreas = this.state.selectedAreas.filter((area) => {
        console.log('area', area, 'currentArea', currentArea);
        if(area && area.key !== currentArea.key){
          areas.push(area.name)
          return true
        }
      })
    }
    this.setState({
        selectedAreas: selectedAreas,
        areas: areas
      })
  }

  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "light", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: "http://127.0.0.1:8092/static/images/jennifer-bailey-10753.jpg" // set global desktop background image
        })}
      >
      <div className="App">
        <div className="container">

          <LocationSelector 
            selectedAreas={this.state.areas}
            selectedCountry={this.state.selectedCountry}
            selectedState={this.state.selectedState}
            selectedCity={this.state.selectedCity}
            updateArea= {this.updateSelectedAreas.bind(this)}
            updateCountry = {(data) => this.setState({selectedCountry: data})}
            updateState = {(data) => this.setState({selectedState: data, selectedCity: '', selectedAreas: [], areas: []})}
            updateCity = {(data) => this.setState({selectedCity: data, selectedAreas: [], areas: []})}
            addLocationToList= {(e) => this.addLocationToList()}
            clearLocations = {(e) => this.props.clearLocations()}
          />
          
          <LocationList />


          <User 
            updateUserID={(data) => this.setState({userID: data})}
            getUserData={this.getUserData.bind(this)} 
          />

          {/*this.props.user.loading && (
              <p>Loading data.!!</p>
            )}
           {this.props.user.noUser && (
              <p>No user exits.!!</p>
            )}     
          {!this.props.user.loading && !this.props.user.noUser && this.props.user.id && (
            <UserCard user={this.props.user} />
          )*/}
        </div>
      </div>
      </UWPThemeProvider>
    );
  }
}
/*const mapStateToProps = state => ({ user: state.user, locations: state.locations });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser: getUser,
        addLocation: addLocation,
        clearLocations: clearLocations
    }, dispatch);
}*/

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
