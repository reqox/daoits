import { BannerPage } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const BlockchainPage = () => {
  const { t } = useTranslation('blockchain');
  return (
    <Fragment>
      <BannerPage title={t('title')} />
    </Fragment>
  );
};
