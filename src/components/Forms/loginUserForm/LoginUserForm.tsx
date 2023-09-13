import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './LoginUserForm.css';

interface LoginUserFormProps {
  registration: boolean;
}
// eslint-disable-next-line react/prop-types
export const LoginUserForm: FC<LoginUserFormProps> = ({ registration }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });
  interface FormValues {
    login: string;
    password: string;
    confirmPassword: string;
  }
  const clickSubmit: SubmitHandler<FormValues> = (value) => {
    console.log('Отправляем данные формы');
    console.log(value);

    reset();
  };

  const pass = watch('password');
  return (
    <>
      <form onSubmit={handleSubmit(clickSubmit)}>
        <div className="text-field">
          <label className="text-field__label">Логин*</label>
          <input
            className="text-field__input"
            placeholder="Логин"
            {...register('login', {
              required: 'Поле обязательно для заполнения',
            })}
          />

          <label className="text-field__error-label">{errors.login?.message}</label>

          <label className="text-field__label">Пароль*</label>
          <input
            className="text-field__input"
            type="password"
            placeholder="Пароль"
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 10,
                message: 'Пароль должен содержать не менее 10 символов',
              },
              pattern: {
                value: /^\w+$/,
                message: 'Пароль должен содержать латинские буквы, цифры и знаки _',
              },
            })}
          />

          <label className="text-field__error-label">{errors.password?.message}</label>
          {registration && (
            <>
              <label className="text-field__label">Подтверждение пароля*</label>
              <input
                className="text-field__input"
                type="password"
                placeholder="Подтверждение пароля"
                {...register('confirmPassword', {
                  required: 'Поле обязательно для заполнения',
                  validate: (value) => value === pass || 'Пароли не совпадают',
                })}
              />

              <label className="text-field__error-label">{errors.confirmPassword?.message}</label>
            </>
          )}

          <button type="submit" className="button-add">
            {registration ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </div>
      </form>
    </>
  );
};
