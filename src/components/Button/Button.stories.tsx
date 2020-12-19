import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Primary Button</Button>)
  .add('Secondary', () => <Button variant="secondary">Secondary Button</Button>);
