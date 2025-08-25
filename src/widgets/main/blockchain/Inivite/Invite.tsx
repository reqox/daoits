import clsx from 'clsx';
import styles from './Invite.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoLink } from '@/shared/ui';
import { BlockchainInviteImage } from '@/shared/assets/images';

export const Invite = () => {
  const { t } = useTranslation('blockchain');
  return (
    <section className={styles['invite']}>
      <div className={clsx(styles['invite__inner'], 'container')}>
        <div className={styles['invite__body']}>
          <div className={styles['invite__description']}>
            <h2
              className={styles['invite-title']}
              dangerouslySetInnerHTML={{ __html: t('invite.title') }}
            ></h2>
            <div
              className={styles['invite-subtitle']}
              dangerouslySetInnerHTML={{ __html: t('invite.subtitle') }}
            ></div>
          </div>
          <img
            className={styles['invite-image']}
            src={BlockchainInviteImage}
            alt={''}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </div>
        <div className={styles['invite__actions']}>
          <InfoLink
            button={t('invite.1.button')}
            description={t('invite.1.description')}
            to={''}
          />
          <InfoLink
            button={t('invite.2.button')}
            description={t('invite.2.description')}
            to={''}
          />
        </div>
      </div>
    </section>
  );
};
