import React from 'react';
import { CssBaseline } from '@material-ui/core';

const Layout: React.FC<any> = ({ children, ...props }) => (
  <>
    <CssBaseline />
    <main
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
      {...props}
    >
      {children}
    </main>
  </>
);

export default Layout;
