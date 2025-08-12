import { PageToHome } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const DevelopingPage = () => {
  const { t } = useTranslation('');
  return (
    <PageToHome
      title={t('developing.title')}
      description={t('developing.description')}
    ></PageToHome>
  );
};
