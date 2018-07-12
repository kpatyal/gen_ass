import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import {countries, states, cities, area } from '../data';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import DropDownMenu from "react-uwp/DropDownMenu";
import Button from "react-uwp/Button";
import {addLocation, clearLocations} from '../actions/locationAction';


const baseStyle: React.CSSProperties = {
  margin: "10px 20px 10px 0"
};

const buttonBaseStyle: React.CSSProperties = {
      margin: "10px 10px 10px 0"
    };

class LocationSelector extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedCountry: "",
      selectedState: "",
      selectedCity: ""
    }
  }

  addLocation(){
    const {selectedCountry, selectedState, selectedCity} = this.state
    const newLocation = {
      selectedCountry,
      selectedState,
      selectedCity
    }
    if(selectedCountry && selectedState && selectedCity )
      this.props.addLocation(newLocation)
    else alert('Please select all options before adding');
  }

  clearLocations(){
    this.props.clearLocations()
  }
  //console.log('props.selectedAreas=====', props)
  render() {
    console.log('=======this.state', this.state)
    return (
        <div className="row">
          <div className="col-sm-8">
            <DropDownMenu
              defaultValue={this.state.selectedCountry}
              style={baseStyle}
              values={countries}
              onChangeValue= {(value) => this.setState({selectedCountry: value, selectedState: "", selectedCity: ""})}
            />
            <DropDownMenu
              defaultValue={this.state.selectedState}
              style={baseStyle}
              values={states[this.state.selectedCountry]}
              onChangeValue= {(value) => this.setState({selectedState: value})}
              disabled
            />
            <DropDownMenu
              defaultValue={this.state.selectedCity}
              style={baseStyle}
              values={cities[this.state.selectedState]}
              onChangeValue= {(value) => this.setState({selectedCity: value})}
            />
          </div>
          <div className="col-sm-4">
            <Button style={buttonBaseStyle} onClick={() => this.addLocation()} background="#0078D7">
              Add
            </Button>
            <Button style={buttonBaseStyle} onClick={() => this.clearLocations()} background="#FFCDD2">
              Clear
            </Button>
           {/* <PrimaryButton type='submit' className="add-button" onClick={(e) => this.props.addLocationToList()}>Add</PrimaryButton>
            <PrimaryButton type='submit' className="clear-button" onClick={(e) => this.props.clearLocations()}>Clear</PrimaryButton>*/}
          </div>
        </div>
    );
}
}

const mapStateToProps = state => ({ user: state.user, locations: state.locations });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addLocation: addLocation,
        clearLocations: clearLocations
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);

        
