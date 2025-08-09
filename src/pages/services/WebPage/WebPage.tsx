import { BannerPage } from '@/shared/ui';
import { Description, Development } from '@/widgets/main/services/web';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const WebPage = () => {
  const { t } = useTranslation('services');
  return (
    <Fragment>
      <BannerPage title={t('web.title')} />
      <Description />
      <Development />
    </Fragment>
  );
};
