import { AddProductForm } from './AddProductForm';
import s from './AddProductForm.module.sass';

export default {
  component: AddProductForm,
  title: 'AddProductForm',
  tags: ['autodocs'],
};

export const AddProduction = {
  args: {
    category: '',
    productionName: '',
    shortDefinition: '',
    definition: '',
    price: 0,
    // images: [

    // ],
  },
};
