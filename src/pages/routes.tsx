import { Route, Router, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';

import type { Component } from 'solid-js';

const Home = lazy(() => import('./home/home'));
const Map = lazy(() => import('./map/map'));

export const RouteContainer: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/map" component={Map} />
      </Routes>
    </Router>
  );
};
