import { useTranslation } from 'react-i18next';
import styles from './Steps.module.scss';
import { NumberedList } from '@/shared/ui';
import clsx from 'clsx';

export const Steps = () => {
  const { t } = useTranslation('services');
  const StepsList = [
    {
      title: t('web.steps.list.1.title'),
      description: t('web.steps.list.1.description'),
    },
    {
      title: t('web.steps.list.2.title'),
      description: t('web.steps.list.2.description'),
    },
    {
      title: t('web.steps.list.3.title'),
      description: t('web.steps.list.3.description'),
    },
    {
      title: t('web.steps.list.4.title'),
      description: t('web.steps.list.4.description'),
    },
    {
      title: t('web.steps.list.5.title'),
      description: t('web.steps.list.5.description'),
    },
  ];
  return (
    <section className={styles['steps']}>
      <div className={clsx(styles['steps__inner'], 'container')}>
        <h2
          className={styles['steps-title']}
          dangerouslySetInnerHTML={{ __html: t('web.steps.title') }}
        ></h2>
        <NumberedList list={StepsList} />
      </div>
    </section>
  );
};
