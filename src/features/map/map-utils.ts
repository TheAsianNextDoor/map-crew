import { marker } from 'leaflet';
import { produce } from 'solid-js/store';

import { setIsDrawerOpen, type MapItems, setSelectedMarker } from './map.store';

import type { Site } from '../../../data';
import type { Map, Marker } from 'leaflet';
import type { SetStoreFunction } from 'solid-js/store';

export const createMarker = (site: Site, setSiteStore: SetStoreFunction<MapItems>, map: Map) => {
  const myMarker = marker(site.location);

  myMarker.on('click', () => {
    setIsDrawerOpen(true);
    setSelectedMarker(site);
  });
  map.addLayer(myMarker);

  setSiteStore(
    produce((list) => {
      list.push({ marker: myMarker, site });
    }),
  );
};

export const hideMarker = (markerToRemove: Marker) => {
  markerToRemove.setOpacity(0);
};

export const showMarker = (markerToShow: Marker) => {
  markerToShow.setOpacity(1);
};

export const isMarkVisible = (mark: Marker) => {
  return mark.options.opacity === 1;
};
