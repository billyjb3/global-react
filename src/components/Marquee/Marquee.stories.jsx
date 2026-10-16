import { Marquee } from './Marquee.jsx';

export default {
  component: Marquee,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    duration: { description: 'the amount of time in ms it takes for 1 cycle' },
    className: { description: 'styling class to apply to the marquee container' },
  },
};

const itemCount = 10;
const getItems = () => {
  const items = [];
  for (let i = 0; i < itemCount; i++) {
    items.push(`Item ${i}`);
  }
  return items;
};

export const Component = {
  render: (args) => (
    <div style={{ width: '80vw' }}>
      <Marquee {...args}>
        {getItems().map((item) => (
          <div
            style={{
              width: '120px',
              textAlign: 'center',
            }}
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  ),
  args: {
    duration: 10E3,
    className: '',
  },
};
