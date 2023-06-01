import L from 'leaflet';
import { onMount, type Component } from 'solid-js';

import 'leaflet/dist/leaflet.css';

const buildMap = (div: HTMLDivElement) => {
  const map = L.map(div).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
};

const App: Component = () => {
  let mapDiv: any;

  onMount(() => buildMap(mapDiv));

  return (
    <div>
      <div ref={mapDiv} id="map" />
    </div>
  );
};

export default App;
