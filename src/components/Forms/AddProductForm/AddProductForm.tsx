import React, { memo } from 'react';
import cn from 'clsx';
import { AddProductFormProps } from './types';
import { NameProductField } from './NameProductField';
import { DefinitionField } from './DefinitionField';
import { CategoryField } from './CategoryField';
import s from './AddProductForm.module.sass';
import { AddImageField } from './AddImageField';

export const AddProductForm = memo<AddProductFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(s.root, className)}>
        <NameProductField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.nameProduct}
          errors={errors.nameProduct}
          submitCount={submitCount}
          touched={touched.nameProduct}
          disabled={disabled}
        />
        <DefinitionField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.definition}
          errors={errors.definition}
          submitCount={submitCount}
          touched={touched.definition}
          disabled={disabled}
        />
        <CategoryField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          errors={errors.category}
          submitCount={submitCount}
          touched={touched.category}
          disabled={disabled}
        />
        <AddImageField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.image}
          errors={errors.image}
          submitCount={submitCount}
          touched={touched.image}
          disabled={disabled}
        />
      </form>
    );
  }
);

AddProductForm.displayName = 'AddProductForm';