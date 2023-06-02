import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { Site } from '../../../data';
import type { Marker } from 'leaflet';

export type MapItems = {
  marker: Marker;
  site: Site;
}[];

export const [siteStore, setSiteStore] = createStore<MapItems>([]);

export const [selectedMarker, setSelectedMarker] = createSignal();

export const [isDrawerOpen, setIsDrawerOpen] = createSignal(false);
