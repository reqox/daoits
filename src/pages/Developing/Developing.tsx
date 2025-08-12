import { PageToHome } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const Developing = () => {
  const { t } = useTranslation('');
  return <PageToHome code={t('developing')}></PageToHome>;
};
