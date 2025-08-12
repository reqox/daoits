import { PageToHome } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation('');
  return <PageToHome code={t('notfound')}></PageToHome>;
};
