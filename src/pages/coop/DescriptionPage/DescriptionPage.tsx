import {
  Admission,
  Architecture,
  Banner,
  Cycle,
  Description,
  Mission,
  Model,
  Platform,
  Refusal,
} from '@/widgets/main/coop/description';
import { Fragment } from 'react/jsx-runtime';

export const DescriptionPage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Mission />
      <Architecture />
      <Admission />
      <Refusal />
      <Model />
      <Platform />
      <Cycle />
    </Fragment>
  );
};
