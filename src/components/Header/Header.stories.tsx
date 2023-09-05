import Header from './Header';
import { StoryFn } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: Header,
  title: 'Header',
  tags: ['autodocs'],
  decorators: [RouteDecorator]
};
export const HeaderBlock = {
    args: {
    },
};
export function RouteDecorator (StoryComponent: StoryFn): JSX.Element {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
}