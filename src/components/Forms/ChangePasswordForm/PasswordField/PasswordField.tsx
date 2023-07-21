import React, { memo } from 'react';
import cn from 'clsx';
import { getValidates } from 'src/utils/validation';
import { FormItem } from 'src/components/FormItem';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ChangePasswordFormProps } from '../types';
import s from './PasswordField.sass';

export type PasswordFieldProps = Pick<ChangePasswordFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, touched, value, errors, disabled, submitCount, autoFocusElement }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`changePassword.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          ref={autoFocusElement}
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`form.passwordPlaceholder`)}
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
