import './SwitchTheme.scss';
import clsx from 'clsx';
import { useTheme } from '@/shared/hooks';
import { useTranslation } from 'react-i18next';

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('header');
  return (
    <button
      type={'button'}
      className={clsx('button', theme === 'dark' && 'button--dark')}
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      title={`${t('attr.theme.switch')} ${t('attr.theme.to')} ${theme === 'light' ? t('attr.theme.dark') : t('attr.theme.light')}`}
      aria-label={t('attr.theme.switch')}
    ></button>
  );
};
