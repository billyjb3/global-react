import { ButtonIcon } from './ButtonIcon.jsx';
import { IconClose } from '../../Icons';

export default {
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
};

export const Component = {
  render: (args) => (
    <ButtonIcon {...args} >
      <IconClose />
    </ButtonIcon>
  ),
};
