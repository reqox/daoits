import { BannerPage } from '@/shared/ui';
import { Description } from '@/widgets/main/coop/home';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const CoopPage = () => {
  const { t } = useTranslation('coop');
  return (
    <Fragment>
      <BannerPage title={t('banner')} />
      <Description />
    </Fragment>
  );
};
