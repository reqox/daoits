import { BannerPage } from '@/shared/ui';
import {
  Application,
  Description,
  Innovations,
  Mission,
  Tech,
  Why,
} from '@/widgets/main/blockchain';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const BlockchainPage = () => {
  const { t } = useTranslation('blockchain');
  return (
    <Fragment>
      <BannerPage title={t('title')} />
      <Description />
      <Mission />
      <Why />
      <Innovations />
      <Application />
      <Tech />
    </Fragment>
  );
};
