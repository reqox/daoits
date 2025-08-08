import { BannerPage } from '@/shared/ui';
import { Description } from '@/widgets/main/services/app';
import { Fragment } from 'react/jsx-runtime';

export const AppPage = () => {
  return (
    <Fragment>
      <BannerPage title={'Разработка приложений'} />
      <Description />
    </Fragment>
  );
};
