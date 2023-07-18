import type { Meta } from '@storybook/react';
import ModalButton from '../components/modalButton/modalButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalButton> = {
  title: 'Components/ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {};
