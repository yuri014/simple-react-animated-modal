import React from 'react'

import { AnimatedModal } from 'simple-react-animated-modal'
import 'simple-react-animated-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click Here</button>
      <AnimatedModal
        show={showModal}
        title="Example"
        onHide={() => setShowModal(false)}
      >
        <div className="modal-body">
          <p>
            This is an exemple.
          </p>
        </div>
      </AnimatedModal>
    </div>
  );
}

export default App
