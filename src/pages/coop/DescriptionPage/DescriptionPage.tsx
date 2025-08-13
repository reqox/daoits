import {
  Architecture,
  Banner,
  Description,
  Mission,
} from '@/widgets/main/coop/description';
import { Fragment } from 'react/jsx-runtime';

export const DescriptionPage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Mission />
      <Architecture />
    </Fragment>
  );
};
