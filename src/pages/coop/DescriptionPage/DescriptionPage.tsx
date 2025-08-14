import {
  Admission,
  Architecture,
  Banner,
  Conditions,
  Cycle,
  Description,
  Initiatives,
  Mission,
  Model,
  Platform,
  Refusal,
  Solutions,
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
      <Initiatives />
      <Conditions />
      <Solutions />
    </Fragment>
  );
};
