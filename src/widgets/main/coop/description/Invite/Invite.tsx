import clsx from 'clsx';
import styles from './Invite.module.scss';
import { useTranslation } from 'react-i18next';

export const Invite = () => {
  const { t } = useTranslation('coop');

  const inviteLinks = [
    'https://daoits.com',
    't.me/daoitscom',
    'daoitscom@gmail.com',
  ];

  return (
    <section className={styles['invite']}>
      <div className={clsx(styles['invite__inner'], 'container')}>
        <h2
          className={styles['invite-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.invite.title'),
          }}
        ></h2>
        <div className={styles['invite__body']}>
          <div
            className={styles['invite__body-description']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.invite.description'),
            }}
          ></div>
          <ul className={styles['invite__body-list']}>
            {inviteLinks.map((item) => (
              <li key={item} className={styles['invite-item']}>
                <a
                  href={item}
                  className={styles['invite__body-link']}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
