import React, { useState } from 'react';

const MyComponent = () => {
  const [throwError, setThrowError] = useState(false);

  const handleClick = () => {
    setThrowError(true);
  };

  if (throwError) {
    throw new Error('Test error');
  }

  return (
    <div>
      <button onClick={handleClick}>Throw error</button>
    </div>
  );
}

export default MyComponent;
