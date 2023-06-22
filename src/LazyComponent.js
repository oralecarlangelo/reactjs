// LazyComponent.js
import React, { useEffect, useState } from 'react';

function LazyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is a lazy-loaded component!</div>;
}

export default LazyComponent;
