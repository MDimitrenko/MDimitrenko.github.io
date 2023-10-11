import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './LoginUserForm.css';
import { useDispatch } from 'react-redux';
import { fetchSignIn, fetchSignUp } from 'src/reduxToolkit/profileThunk';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { SignInBody } from 'src/reduxToolkit/app.types';

interface LoginUserFormProps {
  registration: boolean;
}
// eslint-disable-next-line react/prop-types
export const LoginUserForm: FC<LoginUserFormProps> = ({ registration }) => {
  const navigate = useNavigate();
  type AppDispatch = ThunkDispatch<SignInBody, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
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
    email: string;
    password: string;
    confirmPassword: string;
  }

  const clickSubmit: SubmitHandler<FormValues> = async (value) => {
    const { email, password } = value;
    if (!registration){
      dispatch(fetchSignIn({ email, password }))
    }
    else {
      dispatch(fetchSignUp({ email, password, commandId:"9ba431c9-7758-4e8d-bf79-6d001569853b" }));
    }
    navigate('/');
    reset();
  };

  const pass = watch('password');
  return (
    <>
      <form onSubmit={handleSubmit(clickSubmit)}>
        <div className="text-field">
          <label className="text-field__label">Email*</label>
          <input
            className="text-field__input"
            placeholder="email"
            {...register('email', {
              required: 'Поле обязательно для заполнения',
            })}
          />

          <label className="text-field__error-label">{errors.email?.message}</label>

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
