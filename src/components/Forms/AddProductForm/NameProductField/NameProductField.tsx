import React, { memo } from 'react';
import cn from 'clsx';
import { getValidates } from 'src/utils/validation';
import { FormItem } from 'src/components/FormItem';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { useTranslation } from 'react-i18next';
import { AddProductFormProps } from '../types';
import s from './NameProductField.module.sass';

export type NameProductFieldProps = Pick<AddProductFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const NameProductField = memo<NameProductFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`addForm.nameProduct`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="nameProduct"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`addForm.nameProductPlaceholder`)}
        />
      </FormItem>
    );
  }
);

NameProductField.displayName = 'NameProductField';
