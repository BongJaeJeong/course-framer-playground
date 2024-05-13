import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="demo">
      <motion.div
        id="box"
        animate={{ backgroundColor: '', x, y, rotate }}
        transition={{
          duration: 0.3,
          type: 'spring',
          // , bounce: 0.3
        }}
      />

      <div id="inputs">
        <p>
          <label htmlFor="x">
            X
            <input
              type="number"
              id="x"
              onChange={(event) => setX(+event.target.value)}
            />
          </label>
        </p>

        <p>
          <label htmlFor="y">
            Y
            <input
              type="number"
              id="y"
              onChange={(event) => setY(+event.target.value)}
            />
          </label>
        </p>

        <p>
          <label htmlFor="rotate">
            Rotate
            <input
              type="number"
              id="rotate"
              onChange={(event) => setRotate(+event.target.value)}
            />
          </label>
        </p>
      </div>
    </div>
  );
}

export default App;
