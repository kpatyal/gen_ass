import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {connect} from 'react-redux'

class LocationList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){ 
    console.log('locationslocationslocationslocationslocations', this.props.locations.locations.length);
    let locations;
    if(this.props.locations.locations && this.props.locations.locations.length>0){
      locations = this.props.locations.locations;
    }else{
      locations = [];
    }
    return (
      <div className="container location-container">
        <BootstrapTable data={locations} striped hover pagination>
          <TableHeaderColumn isKey dataField='selectedCountry'>Country</TableHeaderColumn>
          <TableHeaderColumn dataField='selectedState'>State</TableHeaderColumn>
          <TableHeaderColumn dataField='selectedCity'>City</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
const mapStateToProps = state => ({ locations: state.locations });

export default connect(mapStateToProps)(LocationList);