import React, { lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function LazyLoading() {
  return (
    <div>
      <h1>My Component</h1>
      <LazyComponent />
    </div>
  );
}

export default LazyLoading