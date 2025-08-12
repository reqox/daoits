import { PageToHome } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation('');
  return (
    <PageToHome
      title={t('notfound.title')}
      description={t('notfound.description')}
    ></PageToHome>
  );
};
