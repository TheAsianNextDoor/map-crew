import { Box, Drawer } from '@suid/material';

import { isDrawerOpen, selectedMarker, setIsDrawerOpen } from './map.store';
import { DrawerSearchTextBox } from './search';

export const MapDrawer = () => {
  const toggleDrawer = () => (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown') {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift') return;
    }
    setIsDrawerOpen(!isDrawerOpen());
  };

  const list = () => (
    <Box sx={{ width: 423 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <div class="pl-3 pt-3">
        <DrawerSearchTextBox />
      </div>
      {JSON.stringify(selectedMarker(), null, 2)}
    </Box>
  );

  return (
    <Drawer variant="persistent" open={isDrawerOpen()} sx={{ zIndex: 9999 }}>
      {list()}
    </Drawer>
  );
};
