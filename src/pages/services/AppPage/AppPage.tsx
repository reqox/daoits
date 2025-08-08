import { BannerPage } from '@/shared/ui';
import { Description } from '@/widgets/main/services/app';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const AppPage = () => {
  const { t } = useTranslation('services');
  return (
    <Fragment>
      <BannerPage title={t('app.title')} />
      <Description />
    </Fragment>
  );
};
