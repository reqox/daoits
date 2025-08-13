import {
  Admission,
  Architecture,
  Banner,
  Description,
  Mission,
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
    </Fragment>
  );
};
