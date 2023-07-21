import { FormProps } from 'src/components/Forms/types';

export type AddProductFormValues = {
    nameProduct: string;
    definition: string;
    category: string;
    image: string;
};

export type AddProductFormErrors = Record<keyof AddProductFormValues, string>;
export type AddProductFormTouched = Record<keyof AddProductFormValues, boolean>;

export type AddProductFormProps = FormProps<AddProductFormValues>;