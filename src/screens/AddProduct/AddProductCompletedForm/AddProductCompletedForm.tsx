import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { AddProductForm, AddProductFormValues, AddProductFormErrors } from 'src/components/Forms/AddProductForm';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { isNotDefinedString } from 'src/utils/validation';
import { useTranslation } from 'react-i18next';
import s from './AddProductCompletedForm.module.sass';

export type AddProductCompletedFormProps = {
  className?: string;
};

export const AddProductCompletedForm = memo<AddProductCompletedFormProps>(({ className }) => {
  const { t } = useTranslation();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<AddProductFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {

    return {
      initialValues: {
        nameProduct: "Корм",
        definition: "Вискас",
        category: "Влажный корм",
        image: ""
      },
      onSubmit: (values, { setErrors }) => {
        console.log(values)
      },
      validate: (values) => {
        const errors = {} as AddProductFormErrors;
        if (isNotDefinedString(values.nameProduct)) {
          errors.nameProduct = t(`errorsForm.is_required`);
        }
        if (isNotDefinedString(values.definition)) {
          errors.definition = t(`errorsForm.is_required`);
        }
        if (isNotDefinedString(values.category)) {
          errors.category = t(`errorsForm.is_required`);
        }
        return errors;
      },
    };
  }, [t]);

  const formManager = useFormik<AddProductFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  return (
    <div className={cn(s.root, className)}>
      <AddProductForm formManager={formManager} />
      <Button type="primary" onClick={submitForm}>
        {t(`updateProfile.save`)}
      </Button>
    </div>
  );
});

AddProductCompletedForm.displayName = 'AddProductCompletedForm';