import React, { memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/modal';
import { AuthForm, AuthFormErrors, AuthFormValues } from '../Forms';
import { FormikConfig, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

// import { Button, message } from 'antd';
import { isLongEnough, isNotDefinedString } from 'src/utils/validation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const AuthorizationForm = () => {
    const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setInputText(event.target.value);
  };

  const initialValues: AuthFormValues = {
    email: undefined,
    password: undefined,
  };

  const { onSubmit, validate } = useMemo<Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>>(() => {

    return {
      onSubmit: (values, { resetForm }) => {
        console.log(values)
        resetForm();
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          errors.email = t(`errorsForm.is_required`);
        }
        if (isNotDefinedString(values.password)) {
          errors.password = t(`errorsForm.is_required`);
        } else if (!isLongEnough(values.password)) {
          errors.password = t('errorsForm.too_short_password');
        }
        return errors;
      },
    };
  }, [t]);

  const formik = useFormik<AuthFormValues>({
    onSubmit,
    initialValues,
    validate,
  });

  return (
    <Container>
      <Button onClick={handleButtonClick}>Авторизоваться</Button>
      {isOpen && (
        <Modal visible={isOpen} onClose={handleCloseModal}>
          <AuthForm formManager={formik} />
        </Modal>
      )}
    </Container>
  );
};

export default AuthorizationForm;
