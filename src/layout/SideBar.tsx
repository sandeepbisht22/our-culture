import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem type='button' component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem type='button' component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
