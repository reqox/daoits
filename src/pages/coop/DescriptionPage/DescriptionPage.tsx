import {
  Admission,
  Architecture,
  Banner,
  Conclusion,
  Conditions,
  Cycle,
  Description,
  Initiatives,
  Invite,
  Mission,
  Model,
  Platform,
  Refusal,
  RoadMap,
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
      <RoadMap />
      <Conclusion />
      <Invite />
    </Fragment>
  );
};
