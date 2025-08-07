import { BannerPage } from '@/shared/ui';
import { Preview } from '@/widgets/main/services';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export const ServicesPage = () => {
  const { t } = useTranslation('services');
  return (
    <Fragment>
      <BannerPage title={t('banner.title')} />
      <Preview />
    </Fragment>
  );
};
