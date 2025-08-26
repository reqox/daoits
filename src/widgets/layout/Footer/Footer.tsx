import clsx from 'clsx';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import { LogoPng } from '@/shared/assets/icons';
import { DocumentModal, TelegramLink } from '@/shared/ui';
import { Link, NavLink } from 'react-router-dom';
import { useOpen } from '@/shared/hooks';
import { useState } from 'react';
import { NavigationLinks } from '@/shared/lib';

export const Footer = () => {
  const { t } = useTranslation('footer');
  const { t: tc } = useTranslation();
  const { isOpen, toggleOpen } = useOpen();
  const [selectedDocument, setSelectedDocument] = useState<string>('');

  const handleDocumentClick = (url: string) => {
    setSelectedDocument(url);
    toggleOpen();
  };

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

  const documentList = Array.from({ length: 4 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`body.document.${i}.title`),
      url: t(`body.document.${i}.url`),
    };
  });

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
        <div className={styles['footer__body']}>
          <div className={styles['footer__main']}>
            <img
              className={styles['footer-logo']}
              src={LogoPng}
              alt={''}
              width={100}
              height={100}
              loading={'lazy'}
            />
            <nav className={styles['footer__nav']}>
              <ul className={styles['footer__nav-list']}>
                {NavigationLinks.map((item) => (
                  <li key={item.title} className={styles['footer__nav-item']}>
                    <NavLink
                      to={item.to}
                      className={styles['footer__nav-link']}
                    >
                      {tc(item.title)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles['footer__documents']}>
              <ul className={styles['footer__documents-list']}>
                {documentList.map((item) => (
                  <li
                    key={item.title}
                    className={styles['footer__documents-item']}
                  >
                    <div
                      className={styles['footer__documents-link']}
                      onClick={() => handleDocumentClick(item.url)}
                    >
                      {item.title}
                    </div>
                  </li>
                ))}
              </ul>
              <DocumentModal
                isOpen={isOpen}
                f={toggleOpen}
                pdfUrl={selectedDocument}
              />
            </div>
            <div className={styles['footer__info']}>
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL}`}
                className={styles['footer__info-link']}
              >
                {import.meta.env.VITE_EMAIL}
              </a>
              <Link to="#" className={styles['footer__info-link']}>
                {t('body.info.anketa')}
              </Link>
            </div>
          </div>
          <div className={styles['footer__other']}>
            <TelegramLink />
            <span>{t('body.other')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
