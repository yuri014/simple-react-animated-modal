import React from 'react';

import { AnimatedModal } from 'simple-react-animated-modal';
import 'simple-react-animated-modal/dist/index.css';

const App = () => {
  const [showModal, setShowModal] = React.useState(true);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click Here</button>
      <AnimatedModal
        show={showModal}
        title="Example"
        onHide={() => setShowModal(false)}
        closeButton={<strong>X</strong>}
        style={{
          backgroundColor: "#1e2939",
          border: "2px solid #1cc5b7",
          color: "white",
          boxShadow: "2px 2px 4px black",
        }}
        headBorderBottom="1px solid white"
      >
        <div className="modal-body">
          <p>This is an exemple.</p>
        </div>
      </AnimatedModal>
    </div>
  );
};

export default App;
