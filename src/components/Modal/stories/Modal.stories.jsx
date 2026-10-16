import { useState } from 'react';
import { Modal } from '../Modal.jsx';
import { IconClose } from '../../../Icons/index.js';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon.jsx';

export default {
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {

  },
};

export const Component = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show</button>
        {show && (
          <Modal>
            <div style={{ padding: '16px', textAlign: 'right' }}>
              <ButtonIcon onClick={() => setShow(false)}><IconClose /></ButtonIcon>
            </div>
            <div style={{ textAlign: 'center', padding: '16px' }}>Modal Content</div>
          </Modal>
        )}
      </>
    );
  },
};
