import { EconomyBasicsImg } from '@/shared/assets/images/economy';
import { BannerPage } from '@/shared/ui';
import { Basics, Description } from '@/widgets/main/economy';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

export const EconomyPage = () => {
  const { t } = useTranslation('economy');

  const basicsList = Array.from({ length: 4 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`basics.list.${i}.title`),
      body: t(`basics.list.${i}.body`),
    };
  });

  return (
    <Fragment>
      <BannerPage title={t('title')}></BannerPage>
      <Description />
      <Basics
        list={basicsList}
        title={t('basics.title')}
        srcImg={EconomyBasicsImg}
      />
    </Fragment>
  );
};
