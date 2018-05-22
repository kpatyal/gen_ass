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
      <div className="App">
        <div className="container">
          <LocationSelector 
            selectedAreas={this.state.areas}
            selectedCountry={this.state.selectedCountry}
            selectedState={this.state.selectedState}
            selectedCity={this.state.selectedCity}
            updateArea= {this.updateSelectedAreas.bind(this)}
            updateCountry = {(data) => this.setState({selectedCountry: data, selectedState: '', selectedCity: '', selectedAreas: [], areas: []})}
            updateState = {(data) => this.setState({selectedState: data, selectedCity: '', selectedAreas: [], areas: []})}
            updateCity = {(data) => this.setState({selectedCity: data, selectedAreas: [], areas: []})}
            addLocationToList= {(e) => this.addLocationToList()}
            clearLocations = {(e) => this.props.clearLocations()}
          />
          
          <LocationList 
            locations={this.props.locations.locations} 
          />
          
          <User 
            updateUserID={(data) => this.setState({userID: data})}
            getUserData={this.getUserData.bind(this)} 
          />

          {this.props.user.loading && (
              <p>Loading data.!!</p>
            )}
           {this.props.user.noUser && (
              <p>No user exits.!!</p>
            )}     
          {!this.props.user.loading && !this.props.user.noUser && this.props.user.id && (
            <UserCard user={this.props.user} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ user: state.user, locations: state.locations });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser: getUser,
        addLocation: addLocation,
        clearLocations: clearLocations
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
