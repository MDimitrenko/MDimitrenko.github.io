import React, { memo } from 'react';
import cn from 'clsx';
import { Divider } from 'antd';
import { AddProductCompletedForm } from '../AddProductCompletedForm';

import s from './SettingsBlock.module.sass';

export type SettingsBlockProps = {
  className?: string;
};

export const SettingsBlock = memo<SettingsBlockProps>(({ className }) => (
  <div className={cn(s.root, className)}>
    <AddProductCompletedForm />
  </div>
));

SettingsBlock.displayName = 'SettingsBlock';