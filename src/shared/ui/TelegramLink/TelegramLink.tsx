import { useTranslation } from 'react-i18next';
import styles from './TelegramLink.module.scss';

export const TelegramLink = () => {
  const { t } = useTranslation('header');
  return (
    <a
      href={`{import.meta.env.VITE_TELEGRAM}`}
      className={styles['link']}
      aria-label={t('attr.sendTg')}
      title={t('attr.sendTg')}
      target={'_blank'}
    ></a>
  );
};
