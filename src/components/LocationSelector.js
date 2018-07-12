import React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import {countries, states, cities, area } from '../data';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import DropDownMenu from "react-uwp/DropDownMenu";

const baseStyle: React.CSSProperties = {
  margin: "10px 20px 10px 0"
};

const LocationSelector = function(props) {
  console.log('props.selectedAreas=====', props)
    return (
        <div className="row">
        <div className="col-sm-2">
        <DropDownMenu
          style={baseStyle}
          values={countries}
          onChangeValue= (value) => {props.updateCountry(value)}
        />
        <DropDownMenu
          style={baseStyle}
          values={states[props.selectedCountry]}}
          onChangeValue= (value) => {props.updateState(value)}
        />
        <DropDownMenu
          style={baseStyle}
          values={cities[props.selectedState]}}
          onChangeValue= (value) => {props.updateCity(value)}
        />
        {/*<Dropdown
                  placeHolder='Select Country'
                  id='Errormessagedrop1'
                  ariaLabel='Error message dropdown example'
                  options={countries}
                  selectedKey={ props.selectedCountry }
                  onRenderTitle={option => (
                   <div className='option' key={option[0].name}>
                     <span>{option[0].name}</span>
                   </div>
        
                 )}
                  onRenderOption={ option => (
                   <div className='option' key={option.name}>
                     <span>{option.name}</span>
                   </div>
        
                 )}
                  onChanged={(item) => {
                    props.updateCountry(item.key)
                  }}
                />
                </div>
          <div className="col-sm-2">
            <Dropdown
                  placeHolder='Select State'
                  id='Errormessagedrop1'
                  ariaLabel='Error message dropdown example'
                  options={states[props.selectedCountry]}
                  selectedKey={ props.selectedState }
                  onRenderTitle={option => (
                   <div className='option' key={option[0].name}>
                     <span>{option[0].name}</span>
                   </div>
        
                 )}
                  disabled={!props.selectedCountry}
                  onRenderOption={ option => (
                   <div className='option' key={option.name}>
                     <span>{option.name}</span>
                   </div>
        
                 )}
                  onChanged={(item) => {
                    props.updateState(item.key)
                  }}
            />
          </div>
          <div className="col-sm-2">
            <Dropdown
                  placeHolder='Select City'
                  id='Errormessagedrop1'
                  ariaLabel='Error message dropdown example'
                  options={cities[props.selectedState]}
                  selectedKey={ props.selectedCity }
                  disabled={!props.selectedState}
                  onRenderTitle={option => (
                   <div className='option' key={option[0].name}>
                     <span>{option[0].name}</span>
                   </div>
                 )}
                  onRenderOption={ option => (
                   <div className='option' key={option.name}>
                     <span>{option.name}</span>
                   </div>
        
                 )}
                  onChanged={(item) => {
                    props.updateCity(item.key)
                  }}
            />
          </div>
          <div className="col-sm-2">
            <Dropdown
                    placeHolder='Select Area'
                    id='Errormessagedrop1'
                    options={area[props.selectedCity]}
                    selectedKey={ !props.selectedCity ? [] : props.areas }
                    multiSelect
                    disabled={!props.selectedCity}
                    multiSelectDelimiter=","
                    onRenderTitle={options => {
                      return (
                     <div className='option' key={options[0].name}>
                       <span>{options.map((option) => option.name).join()}</span>
                     </div>
                   )}}
                    onRenderOption={ option => (
                     <div className='option' key={option.name}>
                       <span>{option.name}</span>
                     </div>
          
                   )}
                    onChanged={(item) => {
                      props.updateArea(item)
                    }}
                  />*/}
          </div>

          <div className="col-sm-2">
            <PrimaryButton type='submit' className="add-button" onClick={(e) => props.addLocationToList()}>Add</PrimaryButton>
          
            <PrimaryButton type='submit' className="clear-button" onClick={(e) => props.clearLocations()}>Clear</PrimaryButton>
          </div>
                </div>
    );
}

export default LocationSelector;

        
