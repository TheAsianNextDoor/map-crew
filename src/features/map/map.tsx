import { Chip } from '@suid/material';
import L from 'leaflet';
import { onMount } from 'solid-js';
import { unwrap } from 'solid-js/store';

import { MapDrawer } from './drawer';
import { createMarker, hideMarker, showMarker } from './map-utils';
import { setSiteStore, siteStore } from './map.store';
import { MapSearchTextBox } from './search';
import { sites } from '../../../data';

import type { Component } from 'solid-js';

let map: L.Map;

const buildMap = (div: HTMLDivElement, siteList: typeof sites) => {
  map = L.map(div).setView([51.505, -0.09], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  siteList.forEach((site) => {
    createMarker(site, setSiteStore, map);
  });
};

const filterByDiscipline = (discipline: string) => {
  console.log('before: ', siteStore);

  if (discipline === 'all') {
    siteStore.forEach(({ marker }) => {
      showMarker(marker);
    });

    return;
  }

  siteStore.forEach(({ site, marker }) => {
    if (site.discipline !== discipline) {
      hideMarker(marker);
    } else {
      showMarker(marker);
    }
  });

  console.log('after: ', unwrap(siteStore));
};

export const Map: Component = () => {
  let mapDiv: any;

  onMount(() => buildMap(mapDiv, sites));

  return (
    <div>
      <div class="absolute left-0 top-0 z-10 pl-3 pt-3">
        <MapSearchTextBox />
        <Chip label="all" color="primary" onClick={() => filterByDiscipline('all')} />
        <Chip label="wood" color="primary" onClick={() => filterByDiscipline('wood')} />
        <Chip label="concrete" color="primary" onClick={() => filterByDiscipline('concrete')} />
        <Chip label="metal" color="primary" onClick={() => filterByDiscipline('metal')} />
      </div>
      <MapDrawer />
      <div class="fixed left-0 top-0 h-full w-full" ref={mapDiv} id="map" />
    </div>
  );
};
