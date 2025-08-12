import clsx from 'clsx';
import styles from './Invite.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopInviteImage } from '@/shared/assets/images';

export const Invite = () => {
  const { t } = useTranslation('coop');
  return (
    <section className={styles['invite']}>
      <div className={clsx(styles['invite__inner'], 'container')}>
        <div className={styles['invite__body']}>
          <h2 className={styles['invite-title']}>{t('invite.title')}</h2>
          <h2 className={clsx(styles['invite-subtitle'], 'company')}>
            {t('invite.subtitle')}
          </h2>
        </div>
        <img
          className={styles['invite-image']}
          src={CoopInviteImage}
          alt={''}
          width={100}
          height={100}
          loading={'lazy'}
        />
      </div>
    </section>
  );
};
