import { BannerPage } from '@/shared/ui';
import {
  About,
  Description,
  Services,
  StepFuture,
  ForUs,
} from '@/widgets/main/services/app';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const AppPage = () => {
  const { t } = useTranslation('services');
  return (
    <Fragment>
      <BannerPage title={t('app.title')} />
      <Description />
      <About />
      <Services />
      <StepFuture />
      <ForUs />
    </Fragment>
  );
};
