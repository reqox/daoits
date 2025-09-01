import {
  EconomyBasicsFormulaImg,
  EconomyBasicsImg,
  EconomyStabilityImg,
} from '@/shared/assets/images/economy';
import { BannerPage } from '@/shared/ui';
import {
  Advantages,
  Basics,
  Description,
  Future,
  History,
  Stability,
} from '@/widgets/main/economy';
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

  const stabilityList = Array.from({ length: 3 }, (_, i) => {
    i++;
    return {
      title: t(`stability.list.${i}.title`),
      body: t(`stability.list.${i}.body`),
    };
  });

  const stabilityAdvantages = {
    title: t('stability.advantages.title'),
    body: [
      t('stability.advantages.body.1'),
      t('stability.advantages.body.2'),
      t('stability.advantages.body.3'),
      t('stability.advantages.body.4'),
    ],
  };

  const futureList = Array.from({ length: 5 }, (_, i) => {
    i++;
    return {
      title: t(`future.list.${i}.title`),
      body: t(`future.list.${i}.body`),
    };
  });

  const historyList = Array.from({ length: 7 }, (_, i) => {
    i++;
    const body = t(`history.list.${i}.body`, {
      defaultValue: [],
      returnObjects: true,
    }) as string[];
    return {
      title: t(`history.list.${i}.title`),
      body: body,
    };
  });

  const advantagesCards = Array.from({ length: 7 }, (_, i) => {
    i++;
    return {
      title: t(`advantages.card.${i}.title`),
      body: t(`advantages.card.${i}.body`),
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
        formula={EconomyBasicsFormulaImg}
      />
      <Stability
        title={t('stability.title')}
        subtitle={t('stability.subtitle')}
        advantages={stabilityAdvantages}
        srcImg={EconomyStabilityImg}
        list={stabilityList}
      />
      <Future
        title={t('future.title')}
        subtitle={t('future.subtitle')}
        list={futureList}
      />
      <History
        title={t('history.title')}
        subtitle={t('history.subtitle')}
        card={historyList}
      />
      <Advantages title={t('advantages.title')} card={advantagesCards} />
      {/* <InviteSection
        title={t('invite.title')}
        subtitle={t('invite.subtitle')}
        srcImg={BlockchainInviteImage}
      >
        <InfoLink
          button={t('invite.button.title')}
          description={t('invite.button.description')}
          to={''}
        />
      </InviteSection> */}
    </Fragment>
  );
};
