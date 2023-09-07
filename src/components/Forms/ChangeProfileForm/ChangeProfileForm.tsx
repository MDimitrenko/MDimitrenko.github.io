import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import s from './ChangeProfileForm.module.sass';
import { useTranslation } from 'react-i18next';

interface СhangeProfileFormProps {
  name: string;
  about: string;
};

const ChangeProfileForm = () => {
    const { t } = useTranslation();
    const er = t`is_required`
    const { 
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<СhangeProfileFormProps>({mode: 'onBlur'});

    const onСhangePassword: SubmitHandler<СhangeProfileFormProps> = (value): void => {
      console.log('Отправляем данные формы обновления профиля:');
      console.log(value);
      reset();
    }
    return (
      <form className={s.form} onSubmit={handleSubmit(onСhangePassword)}>
        <div className={s.title}>{t`ProfileScreen.updateProfile.title`}</div>
        <div className={s.field}>
          <label className={s.label}>{t`ProfileForm.name.title`}</label>
          <input 
            className={s.input_pass}
            name="name"
            type="text"
            placeholder={t`ProfileForm.name.placeholder`}
            {...register('name', { required: er})}
          />
          <label className={s.error_label}>{errors.name?.message}</label>
        </div>
        <div className={s.field}>
          <label className={s.label}>{t`ProfileForm.about.title`}</label>
          <input 
            className={s.input_pass}
            name="about"
            type="text"
            placeholder={t`ProfileForm.about.placeholder`}
            {...register('about')}
          />
          <label className={s.error_label}>{errors.about?.message}</label>
        </div>
        <button className={s.button_send} type="submit">
        {t`ProfileScreen.updateProfile.save`}
        </button>
      </form>
    )
}
export default ChangeProfileForm;