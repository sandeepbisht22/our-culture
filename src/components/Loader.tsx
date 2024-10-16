import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Box } from '@mui/material';
import { RootState } from '../store/store';

const Loader: React.FC = () => {
  const loader = useSelector((state: RootState) => state.app.loader);

  if (!loader) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
