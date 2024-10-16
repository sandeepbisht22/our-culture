



// Login.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';

const Login: React.FC = () => {
  const handleLogin = () => {
    // Simulate login by storing token
    localStorage.setItem('authToken', 'exampleToken');
    window.location.href = '/dashboard'; // Redirect after login
  };

  return (
    <div>
      <Typography variant="h4">Login Page</Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
