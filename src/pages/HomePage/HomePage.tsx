import './HomePage.scss';
import { Fragment } from 'react';
import {
  AboutUs,
  Banner,
  Description,
  Mission,
  Projecting,
} from '@/widgets/home';

export const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Mission />
      <AboutUs />
      <Projecting />
    </Fragment>
  );
};
