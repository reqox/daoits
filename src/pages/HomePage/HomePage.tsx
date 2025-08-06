import './HomePage.scss';
import { Fragment } from 'react';
import {
  AboutUs,
  Banner,
  Description,
  Functions,
  Mission,
  Projecting,
  Services,
  Invest,
  Feonyx,
} from '@/widgets/home';

export const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Mission />
      <AboutUs />
      <Projecting />
      <Functions />
      <Services />
      <Invest />
      <Feonyx />
    </Fragment>
  );
};
