import { ButtonIcon } from './ButtonIcon.jsx';
import { IconClose } from '../../Icons';

export default {
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { description: 'click handler for the button' },
    isLink: { description: 'when true, button renders as an anchor, otherwise as a button (default)'},
    href: { description: 'if isLink, this if the href applied to the anchor tag' },
    className: { description: 'styling class to apply to component' },
  },
};

export const Component = {
  render: (args) => (
    <ButtonIcon {...args} >
      <IconClose />
    </ButtonIcon>
  ),
  args: {
    onClick: () => {},
    isLink: false,
    href: '',
    className: '',
  },
};
