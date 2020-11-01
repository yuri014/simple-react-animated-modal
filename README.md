# simple-react-animated-modal

> A simple way to make an animated modal

[![NPM](https://img.shields.io/npm/v/simple-react-animated-modal.svg)](https://www.npmjs.com/package/simple-react-animated-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img width="600" src="./screen/screen.gif">
</p>

## Install

```bash
npm install --save simple-react-animated-modal
```

## Usage

```tsx
import React from 'react';

import MyComponent from 'simple-react-animated-modal';
import 'simple-react-animated-modal/dist/index.css';

function Example() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click Here</button>
      <AnimatedModal
        show={showModal}
        title="Example"
        onHide={() => setShowModal(false)}
        closeButton={<strong>X</strong>}
        style={{
          backgroundColor: '#1e2939',
          border: '2px solid #1cc5b7',
          color: 'white',
          boxShadow: '2px 2px 4px black',
        }}
        headStyle={{
          borderBottom: '1px solid white',
          height: '3.2rem',
        }}
      >
        <div className="modal-body">
          <p>This is an exemple.</p>
        </div>
      </AnimatedModal>
    </div>
  );
}
```

## License

MIT © [yuri014](https://github.com/yuri014)
