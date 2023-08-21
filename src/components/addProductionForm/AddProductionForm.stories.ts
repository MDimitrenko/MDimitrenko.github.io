import { AddProductionForm } from './AddProductionForm';
import s from './AddProductionForm.module.sass';

export default {
  component: AddProductionForm,
  title: 'AddProductionForm',
  tags: ['autodocs'],
};

export const AddProduction = {
  args: {
    category: '',
    productionName: '',
    shortDefinition: '',
    definition: '',
    price: 0,
    images: [

    ],
  },
};
