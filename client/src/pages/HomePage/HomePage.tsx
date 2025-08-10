import {
  AboutUs,
  Banner,
  Description,
  Feonyx,
  Functions,
  Invest,
  Mission,
  Projecting,
  Services,
} from '@/widgets/main/home';
import React from 'react';

export const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Description />
      <Mission />
      <AboutUs />
      <Projecting />
      <Functions />
      <Services />
      <Invest />
      <Feonyx />
    </React.Fragment>
  );
};
