import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets/layout';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
