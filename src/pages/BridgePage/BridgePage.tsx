import {
  Advantages,
  Banner,
  Bridge,
  Description,
  Functions,
} from '@/widgets/main/bridge';
import { Fragment } from 'react/jsx-runtime';

export const BridgePage = () => {
  return (
    <Fragment>
      <Banner />
      <Description />
      <Functions />
      <Advantages />
      <Bridge />
    </Fragment>
  );
};
