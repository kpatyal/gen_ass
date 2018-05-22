export const addLocation = (data) => {
    return {
      type: 'ADD_LOCATION',
      payload: data
    }
  }

export const clearLocations = (id) => {
    return {
      type: 'CLEAR_LOCATIONS',
    }
  }