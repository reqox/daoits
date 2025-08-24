import clsx from 'clsx';
import styles from './Preview.module.scss';
import { PreviewCardPage } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { Preview1Image } from '@/shared/assets/images';

export const Preview = () => {
  const { t } = useTranslation('services');

  const previewList = [
    {
      title: t('preview.card.1.title'),
      description: t('preview.card.1.description'),
      srcImg: Preview1Image,
      alt: t('preview.card.1.alt'),
      to: 'app',
      buttonText: t('preview.button.text'),
    },
    {
      title: t('preview.card.2.title'),
      description: t('preview.card.2.description'),
      srcImg: Preview1Image,
      alt: t('preview.card.2.alt'),
      to: 'web',
      buttonText: t('preview.button.text'),
    },
  ];

  return (
    <section className={styles['preview']}>
      <div className={clsx(styles['preview__inner'], 'container')}>
        <ul className={styles['preview-list']}>
          {previewList.map((item) => (
            <li key={item.title} className={styles['preview-item']}>
              <PreviewCardPage
                title={item.title}
                description={item.description}
                srcImg={item.srcImg}
                alt={item.alt}
                to={item.to}
                buttonText={item.buttonText}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
