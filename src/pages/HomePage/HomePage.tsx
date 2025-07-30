import './HomePage.scss';
import { Fragment } from 'react';
import { AboutUs, Banner, Description, Mission } from '@/widgets/home';

export const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Mission />
      <AboutUs />
    </Fragment>
  );
};
