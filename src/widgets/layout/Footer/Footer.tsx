import clsx from 'clsx';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('footer');

  const inputList = [
    {
      id: 'name',
      type: 'text',
      title: t('action.form.name.title'),
      placeholder: t('action.form.name.placeholder'),
      required: t('action.form.required'),
    },
    {
      id: 'email',
      type: 'email',
      title: t('action.form.email.title'),
      placeholder: t('action.form.email.placeholder'),
      required: t('action.form.required'),
    },
    {
      id: 'number',
      type: 'text',
      title: t('action.form.number.title'),
      placeholder: t('action.form.number.placeholder'),
      required: t('action.form.required'),
    },
    {
      id: 'telegram',
      type: 'text',
      title: t('action.form.telegram.title'),
      placeholder: t('action.form.telegram.placeholder'),
      required: t('action.form.required'),
    },
    {
      id: 'message',
      type: 'text',
      title: t('action.form.message.title'),
      placeholder: t('action.form.message.placeholder'),
      required: t('action.form.required'),
      textarea: true,
    },
  ];

  return (
    <footer className={styles['footer']}>
      <div className={clsx(styles['footer__inner'], 'container')}>
        <div className={styles['footer__action']}>
          <div className={styles['footer__description']}>
            <h2 className={styles['footer-title']}>{t('action.title')}</h2>
            <div className={styles['footer-subtitle']}>
              {t('action.subtitle')}
            </div>
          </div>
          <form className={styles['footer__form']}>
            <ul className={styles['footer__form-list']}>
              {inputList.map((item) => (
                <li key={item.title} className={styles['footer__form-item']}>
                  <label htmlFor={item.id}>{item.title}</label>
                  {item.textarea ? (
                    <textarea
                      id={item.id}
                      name={item.id}
                      aria-label={item.required}
                      placeholder={item.placeholder}
                      rows={2}
                    />
                  ) : (
                    <input
                      id={item.id}
                      type={item.type}
                      aria-label={item.required}
                      placeholder={item.placeholder}
                    />
                  )}
                </li>
              ))}
            </ul>
            <button type="submit" className={styles['footer__form-button']}>
              {t('action.form.button')}
            </button>
          </form>
        </div>
        <div className={styles['footer__body']}></div>
      </div>
    </footer>
  );
};
