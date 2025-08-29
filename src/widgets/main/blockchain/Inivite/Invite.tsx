import { useTranslation } from 'react-i18next';
import { InfoLink, InviteSection } from '@/shared/ui';
import { BlockchainInviteImage } from '@/shared/assets/images';

export const Invite = () => {
  const { t } = useTranslation('blockchain');
  return (
    <InviteSection
      title={t('invite.title')}
      subtitle={t('invite.subtitle')}
      srcImg={BlockchainInviteImage}
    >
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
    </InviteSection>
  );
};
