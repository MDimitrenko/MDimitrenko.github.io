import React, { FC } from 'react';
import { Page } from 'src/components/Page';
import { useTranslation } from 'react-i18next';
import s from './Profile.sass';

export const Profile: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`ProfileScreenTitle`} className={s.root}>
      <p>
        Profile
      </p>
    </Page>
  );
};

export default Profile;
