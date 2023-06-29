import type { Meta } from '@storybook/react';

import Modal from '../components/cartItem/cartItem';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Components/CartItem',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    name: 'Backpack',
    description:
      'Lightweight Casual Laptop Backpack with USB Charging Port For for Men and Women, Daily use backpack, Backpack for gym (Full Black)',
    price: 19.99,
    imageSrc:
      'https://media.wired.com/photos/6452efd60b67c709cbcaa75b/2:3/w_818,h_1227,c_limit/Jumper-Photo_Red_Front_18c2a0e2-5a49-4afe-83d3-04d2e31328a9_1296x.png',
  },
};
