import React, { useReducer, useEffect } from 'react';
import Map from '../../Components/Global/Map';
import { useSelector } from 'react-redux';
import axios from 'axios';

const centerInit = {
  loading: false,
  center: null,
  error: null,
};

const centerReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        center: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        center: action.response.data.results[0].geometry.location,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        center: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const MapContainer = ({ markers }) => {
  const { location } = useSelector(state => state.searchForm);
  const { mapZoom } = useSelector(state => state.search);
  const [centerState, centerDispatch] = useReducer(centerReducer, centerInit);

  useEffect(() => {
    const getCenter = async location => {
      centerDispatch({ type: 'LOADING' });
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA`,
        );
        centerDispatch({ type: 'SUCCESS', response });
      } catch (e) {
        centerDispatch({ type: 'ERROR', error: e });
      }
    };
    getCenter(location);
  }, []);

  if (!centerState.center) return null;
  return (
    <Map center={centerState.center} mapZoom={mapZoom} markers={markers} />
  );
};

export default MapContainer;
