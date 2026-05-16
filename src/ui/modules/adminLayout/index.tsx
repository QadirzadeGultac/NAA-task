import { Box } from '@mantine/core';
import { LeftMenu } from '../leftMenu/index';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <Box className="flex w-full min-h-screen">
      <Box 
        component="aside" 
        className="w-64 h-screen sticky top-0 bg-white flex-shrink-0"
      >
        <LeftMenu />
      </Box>
      <Box 
        component="main" 
        className="flex-1 min-w-0" 
      >
        <div className="p-5">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};