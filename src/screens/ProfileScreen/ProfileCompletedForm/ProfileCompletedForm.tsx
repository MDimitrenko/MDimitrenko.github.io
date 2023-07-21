import React, { memo, useEffect, useMemo } from 'react';
import cn from 'clsx';
import { ProfileForm, ProfileFormValues, ProfileFormErrors } from 'src/components/Forms/ProfileForm';
import { FormikConfig, useFormik } from 'formik';
// import { useMutation } from '@apollo/client';
import { Button, message } from 'antd';
// import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { isNotDefinedString } from 'src/utils/validation';
// import { useSelector } from 'react-redux';
// import { profileSelectors } from 'src/store/profile';
import { Title } from 'src/components/Title';
import { useTranslation } from 'react-i18next';
// import { UPDATE_PROFILE, UpdateProfileResponse, UpdateProfileVars } from './connection';
import s from './ProfileCompletedForm.sass';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(({ className }) => {
  // const profile = useSelector(profileSelectors.get);
  const { t } = useTranslation();
  // const [update, { loading }] = useMutation<UpdateProfileResponse, UpdateProfileVars>(UPDATE_PROFILE);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    // const { catcherValidator } = createErrorHandlers<keyof ProfileFormValues>(
    //   (code, _, error) => {
    //     if (code === null) {
    //       message.error(t(`errors.${error.message}`));
    //     } else {
    //       message.error(t(`errors.${code}`));
    //     }
    //   },
    //   {
    //     name: ['ERR_INVALID_NICKNAME'],
    //   }
    // );
    return {
      initialValues: {
        name: "Anna",
        about: "Vysokikh",
      },
      onSubmit: (values, { setErrors }) => {
        console.log(values)
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = t(`errorsForm.is_required`);
        }
        return errors;
      },
    };
  }, [t]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  return (
    <div className={cn(s.root, className)}>
      <Title className={s.title}>{t(`updateProfile.title`)}</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary" onClick={submitForm}>
        {t(`updateProfile.save`)}
      </Button>
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
