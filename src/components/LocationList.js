import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const LocationList = function(props) {
    return (
      <div className="container location-container">
        <BootstrapTable data={props.locations} striped hover pagination>
          <TableHeaderColumn isKey dataField='selectedCountry'>Country</TableHeaderColumn>
          <TableHeaderColumn dataField='selectedState'>State</TableHeaderColumn>
          <TableHeaderColumn dataField='selectedCity'>City</TableHeaderColumn>
          <TableHeaderColumn dataField='areas'>Areas</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
}

export default LocationList;