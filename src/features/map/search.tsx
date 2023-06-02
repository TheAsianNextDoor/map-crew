import CloseIcon from '@suid/icons-material/Close';
import DirectionsIcon from '@suid/icons-material/Directions';
import MenuIcon from '@suid/icons-material/Menu';
import SearchIcon from '@suid/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from '@suid/material';

import { setIsDrawerOpen } from './map.store';

import type { Component } from 'solid-js';

const SearchTextBox = (DivideButton: Component) => {
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Map" inputProps={{ 'aria-label': 'search map' }} />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <DivideButton />
    </Paper>
  );
};

const DirectionButton = () => (
  <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
    <DirectionsIcon />
  </IconButton>
);

export const MapSearchTextBox = () => SearchTextBox(DirectionButton);

const CloseButton = () => (
  <IconButton onClick={() => setIsDrawerOpen(false)} sx={{ p: '10px' }} aria-label="directions">
    <CloseIcon />
  </IconButton>
);

export const DrawerSearchTextBox = () => SearchTextBox(CloseButton);
